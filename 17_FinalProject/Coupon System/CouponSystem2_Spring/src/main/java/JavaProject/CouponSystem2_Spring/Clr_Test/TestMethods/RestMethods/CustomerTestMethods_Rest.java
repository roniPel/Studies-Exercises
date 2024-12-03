package JavaProject.CouponSystem2_Spring.Clr_Test.TestMethods.RestMethods;

import JavaProject.CouponSystem2_Spring.Beans.Category;
import JavaProject.CouponSystem2_Spring.Beans.Company;
import JavaProject.CouponSystem2_Spring.Beans.Coupon;
import JavaProject.CouponSystem2_Spring.Beans.Customer;
import JavaProject.CouponSystem2_Spring.Clr_Test.TestMethods.TestMethods;
import JavaProject.CouponSystem2_Spring.Utils.FactoryUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import java.util.Arrays;
import java.util.List;

/**
 * Customer Test Methods Class - Used for Testing all Customer user functionalities via RestTemplate
 */
@Component
@RequiredArgsConstructor
public class CustomerTestMethods_Rest extends TestMethods {
    private final RestTemplate restTemplate;

    /**
     * Customer Method - Get Customer Details
     */
    public void GetCustomerDetails() {
        System.out.println("*** Method: Get Customer Details ***");
        System.out.println("The logged on customer details are: ");
        Customer customer = restTemplate.getForObject
                ("http://localhost:8080/Customer/GetCustomerDetails",Customer.class);
        System.out.println(customer);
        System.out.println();
    }

    /**
     * Customer Method - Purchase Coupon
     */
    public void PurchaseCoupon() {
        System.out.println("*** Method: Purchase Coupon ***");
        // Select random coupon from non-customer coupons list
        List<Coupon> allCoupons = GetListOfAllCoupons();
        List<Coupon> customerCoupons = GetListCustomerCoupons();
        List<Coupon> nonCustomerCoupons = allCoupons
                .stream()
                .filter(coupon -> !customerCoupons.contains(coupon))
                .toList();
        int couponForPurchaseId = GetRandIdFromList(nonCustomerCoupons);
        Coupon couponForPurchase = restTemplate.getForObject
                ("http://localhost:8080/Customer/GetOneCoupon/"+couponForPurchaseId, Coupon.class);

        // Add coupon to DB
        System.out.println("Coupon for purchase: ");
        System.out.println(couponForPurchase);
        ResponseEntity<String> responsePost = restTemplate.postForEntity
                ("http://localhost:8080/Customer/PurchaseCoupon",couponForPurchase,String.class);
        System.out.print("Purchased Coupon? ");
        System.out.println(responsePost.getStatusCode().value()== HttpStatus.CREATED.value()?"true":"false");
        System.out.println();
    }

    /**
     * Customer Method - Get Customer Coupons
     */
    public void GetCustomerCoupons() {
        System.out.println("*** Method: Get Customer Coupons ***");
        // Get all company coupons
        List<Coupon> coupons = GetListCustomerCoupons();
        // Display coupons
        System.out.println("Customer's Coupons: ");
        coupons.forEach(System.out::println);
        System.out.println();
    }

    /**
     * Customer Method - Get Customer Coupons by Category
     */
    public void GetCustomerCouponsByCategory() {
        System.out.println("*** Method: Get Customer Coupons by Category ***");
        Category category = Category.GetRandomCategory();
        // Get customer coupons by category
        Coupon[] coupons = restTemplate.getForObject
                ("http://localhost:8080/Customer/GetCustomerCouponsByCategory/"+category, Coupon[].class);
        List<Coupon> couponsByCat = Arrays.stream(coupons).toList();
        // Display coupons
        System.out.println("Customer's Coupons by Category "+category+": ");
        couponsByCat.forEach(System.out::println);
        System.out.println();
    }

    /**
     * Customer Method - Get Customer Coupons by Max Price
     */
    public void GetCustomerCouponsByMaxPrice() {
        System.out.println("*** Method: Get Customer Coupons by Max Price ***");
        double price = Math.random()*maxPrice;
        // Get company coupons by max price
        Coupon[] coupons = restTemplate.getForObject
                ("http://localhost:8080/Customer/GetCustomerCouponsByMaxPrice/"+price, Coupon[].class);
        List<Coupon> couponsByPrice = Arrays.stream(coupons).toList();
        // Display coupons
        System.out.println("Customer's Coupons by Max Price "+ FactoryUtils.beautifyPrice(price) +": ");
        couponsByPrice.forEach(System.out::println);
        System.out.println();
    }

    /**
     * Creates a list of all coupons (convert array to list)
     * @return List of all coupons
     */
    private List<Coupon> GetListOfAllCoupons() {
        Coupon[] coupons = restTemplate.getForObject
                ("http://localhost:8080/Customer/GetAllCoupons", Coupon[].class);
        return Arrays.stream(coupons).toList();
    }

    /**
     * Creates a list of customer coupons (convert array to list)
     * @return List of customer coupons
     */
    private List<Coupon> GetListCustomerCoupons() {
        Coupon[] coupons = restTemplate.getForObject
                ("http://localhost:8080/Customer/GetCustomerCoupons", Coupon[].class);
        return Arrays.stream(coupons).toList();
    }

}
