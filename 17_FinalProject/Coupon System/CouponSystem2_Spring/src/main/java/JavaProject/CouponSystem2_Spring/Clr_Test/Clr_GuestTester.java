package JavaProject.CouponSystem2_Spring.Clr_Test;

import JavaProject.CouponSystem2_Spring.Clr_Test.TestMethods.RestMethods.GuestTestMethods_Rest;
import JavaProject.CouponSystem2_Spring.Clr_Test.TestMethods.ServiceMethods.GuestTestMethods_Services;
import JavaProject.CouponSystem2_Spring.Exceptions.GuestExceptions.GuestException;
import JavaProject.CouponSystem2_Spring.Utils.FillDbUtil;
import JavaProject.CouponSystem2_Spring.Services.GuestService.GuestService;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;

/**
 * Clr Tester - used to test Guest user methods
 */
//@Component
@RequiredArgsConstructor
@Order(5)
public class Clr_GuestTester implements CommandLineRunner {
    private final FillDbUtil fillDbUtil;
    private final GuestTestMethods_Services guestTestMethods_services;
    private final GuestTestMethods_Rest guestTestMethods_rest;
    private final GuestService guestService; //- Preparation for Client Side (section 3)
    @Override
    public void run(String... args) throws Exception {

        String email = fillDbUtil.getEmailsPassowrdsMap().get("guestEmail");
        String password = fillDbUtil.getEmailsPassowrdsMap().get("guestPassword");

        try {
            // Run all methods - services
            // Guest_RunAllMethods_Services(guestService);
            //Run all methods - Rest

            // Todo - Uncomment section below (part 3)
            //Guest_RunAllMethods_Rest();

        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }

    private void PrintSectionFooter_Rest() {
        //System.out.println();
        System.out.println("************       End Guest Methods (via Rest)      **************");
        System.out.println();
    }

    private void PrintSectionHeader_Rest() {
        System.out.println();
        System.out.println("*******************************************************************");
        System.out.println("*************         Guest Methods (via Rest)       **************");
        System.out.println("*******************************************************************");
        System.out.println();
    }
    private void Guest_RunAllMethods_Rest() {
        PrintSectionHeader_Rest();
        guestTestMethods_rest.GetAllCoupons();
        guestTestMethods_rest.GetOneCoupon();
        PrintSectionFooter_Rest();
    }

    private void Guest_RunAllMethods_Services(GuestService guestService) throws GuestException {
        PrintSectionHeader_Services();
        guestTestMethods_services.GetAllCoupons(guestService);
        guestTestMethods_services.GetOneCoupon(guestService);
        PrintSectionFooter_Services();
    }
    private void PrintSectionFooter_Services() {
        //System.out.println();
        System.out.println("************     End Guest Methods (via Services)    **************");
        System.out.println();
    }

    private void PrintSectionHeader_Services() {
        System.out.println();
        System.out.println("*******************************************************************");
        System.out.println("*************      Guest Methods (via Services)      **************");
        System.out.println("*******************************************************************");
        System.out.println();
    }

}
