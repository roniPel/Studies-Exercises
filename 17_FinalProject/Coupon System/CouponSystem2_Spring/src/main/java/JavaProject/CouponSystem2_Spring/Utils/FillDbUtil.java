package JavaProject.CouponSystem2_Spring.Utils;

import JavaProject.CouponSystem2_Spring.Beans.ClientType;
import JavaProject.CouponSystem2_Spring.Beans.Customer;
import JavaProject.CouponSystem2_Spring.Exceptions.AdminExceptions.AdminException;
import JavaProject.CouponSystem2_Spring.Exceptions.CompanyExceptions.CompanyException;
import JavaProject.CouponSystem2_Spring.Exceptions.CustomerExceptions.CustomerException;
import JavaProject.CouponSystem2_Spring.Services.AdminService.AdminService;
import JavaProject.CouponSystem2_Spring.Services.LoginService.LoginServiceImpl;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import java.util.HashMap;
import java.util.Map;

/**
 * LogonUtil Class - contains methods used to log into the system
 */
@Component
@Getter
public class FillDbUtil {
    private Map<String, String> emailsPassowrdsMap;
    @Autowired
    protected AdminService adminService;
    @Autowired
    private LoginServiceImpl loginServiceImpl;
    //Todo - Add Placeholders 'adminUser'+'adminPass' to method PrepareData_AdminLogon
//    @Value("${adminUser}")
//    private String user;
//    @Value("${adminPass}")
//    private String pass;

    /**
     * Constructor that prepares data for Admin Logon
     */
    public FillDbUtil() {
        PrepareData_AdminLogon();
    }

    /**
     * Prepares Database and User details for Company and Customer Logons
     * @param companyId - companyId used to add coupons when preparing customer details for login
     * @throws AdminException If we get any exception.  Details are provided
     */
    public void PrepareData_CustomerCompanyLogons(int companyId) throws AdminException{
        // Prepare data for company login (create a company with all coupons)
        String[] compDetails = adminService.AddCompanyDetailsForLogin();
        // Prepare data for customer login (create a customer with all coupons)
        String[] custDetails = adminService.AddCustomerDetailsForLogin(companyId);
        // Prepare data for guest login
        String guestEmail = "guest@email.com";
        String guestPassword = "guestPass";
        adminService.AddCustomer(Customer.builder()
                        .firstName("GuestFirst")
                        .lastName("GuestLast")
                        .email(guestEmail)
                        .password(guestPassword)
                .build());

        // Add details to map:
        emailsPassowrdsMap.put("companyEmail",compDetails[0]);
        emailsPassowrdsMap.put("companyPassword",compDetails[1]);
        emailsPassowrdsMap.put("customerEmail",custDetails[0]);
        emailsPassowrdsMap.put("customerPassword",custDetails[1]);
        emailsPassowrdsMap.put("guestEmail",guestEmail);
        emailsPassowrdsMap.put("guestPassword",guestPassword);
    }

    /**
     * Prepare Admin Logon details
     */
    //Todo - change so that values are global variables / placeholders
    private void PrepareData_AdminLogon() {
        emailsPassowrdsMap = new HashMap<>();
        emailsPassowrdsMap.put("adminEmail","admin@admin.com");
        emailsPassowrdsMap.put("adminPassword","admin");
    }

    /**
     * Prints a logged on message in terminal
     * @param email email for logon
     * @param password password for logon
     * @param clientType client type requested for logon
     */
    void Logon_Message(String email, String password, ClientType clientType) {
        System.out.println("======================================");
        System.out.print(clientType + " is logged on: \n");
        System.out.println("======================================");
        System.out.println();
    }

    //Todo - get rid of below method, use JWT for logon for company and customer - Part 3
    public int FindCustomerIdByEmailPass(String email, String password) throws AdminException, CustomerException, CompanyException {
        return adminService.FindCustomerIdByEmailPass(email,password);
    }

    public void AddCredentialsToDB(String user, String password, ClientType clientType, String email) {
        loginServiceImpl.AddCredentials(user, password, clientType, email);
    }
}
