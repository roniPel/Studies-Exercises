package JavaProject.CouponSystem2_Spring.Clr_Test;

import JavaProject.CouponSystem2_Spring.Clr_Test.TestMethods.RestMethods.CustomerTestMethods_Rest;
import JavaProject.CouponSystem2_Spring.Clr_Test.TestMethods.ServiceMethods.CustomerTestMethods_Services;
import JavaProject.CouponSystem2_Spring.Exceptions.CustomerExceptions.CustomerException;
import JavaProject.CouponSystem2_Spring.Utils.FillDbUtil;
import JavaProject.CouponSystem2_Spring.Services.CustomerService.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;

/**
 * Clr Tester - used to test Customer user methods
 */
//@Component
@RequiredArgsConstructor
@Order(4)
public class Clr_CustomerTester implements CommandLineRunner {
    private final FillDbUtil fillDbUtil;
    private final CustomerTestMethods_Services customerTestMethods_services;
    private final CustomerTestMethods_Rest customerTestMethods_rest;
    @Autowired
    private CustomerService customerService;

    @Override
    public void run(String... args) throws Exception {
//
//        String email = logonUtil.getEmailsPassowrdsMap().get("customerEmail");
//        String password = logonUtil.getEmailsPassowrdsMap().get("customerPassword");
//
//        //Todo - change logon format, remove 'SetCustomerId' method from Service (interface + impl class)
//        // + remove @Autowired and change to final -  'CustomerService' (local variable)
//        customerService.SetCustomerId(logonUtil.FindCustomerIdByEmailPass(email,password));

        try {
            // Check logon
            //Todo - Add Login Check with JWT (part 3)

            // Run all methods - services
            // Customer_RunAllMethods_Services(customerService);

            //Run all methods - Rest
            // Todo - Uncomment section below (part 3)
            Customer_RunAllMethods_Rest();

        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }

    private void Customer_RunAllMethods_Rest() {
        PrintSectionHeader_Rest();
        customerTestMethods_rest.GetCustomerDetails();
        customerTestMethods_rest.PurchaseCoupon();
        customerTestMethods_rest.GetCustomerCoupons();
        customerTestMethods_rest.GetCustomerCouponsByCategory();
        customerTestMethods_rest.GetCustomerCouponsByMaxPrice();
        PrintSectionFooter_Rest();
    }

    private void PrintSectionFooter_Rest() {
        //System.out.println();
        System.out.println("************     End Customer Methods (via Rest)     **************");
        System.out.println();
    }

    private void PrintSectionHeader_Rest() {
        System.out.println();
        System.out.println("*******************************************************************");
        System.out.println("*************       Customer Methods (via Rest)      **************");
        System.out.println("*******************************************************************");
        System.out.println();
    }

    /**
     * Runs all Customer user methods
     * @param customerService Service used to run the methods
     */
    private void Customer_RunAllMethods_Services(CustomerService customerService) throws CustomerException {
        PrintSectionHeader_Services();
        customerTestMethods_services.GetCustomerDetails(customerService);
        customerTestMethods_services.PurchaseCoupon(customerService);
        customerTestMethods_services.GetCustomerCoupons(customerService);
        customerTestMethods_services.GetCustomerCouponsByCategory(customerService);
        customerTestMethods_services.GetCustomerCouponsByMaxPrice(customerService);
        PrintSectionFooter_Services();
    }

    private void PrintSectionFooter_Services() {
        //System.out.println();
        System.out.println("************   End Customer Methods (via Services)   **************");
        System.out.println();
    }

    private void PrintSectionHeader_Services() {
        System.out.println();
        System.out.println("*******************************************************************");
        System.out.println("*************     Customer Methods (via Services)    **************");
        System.out.println("*******************************************************************");
        System.out.println();
    }
}
