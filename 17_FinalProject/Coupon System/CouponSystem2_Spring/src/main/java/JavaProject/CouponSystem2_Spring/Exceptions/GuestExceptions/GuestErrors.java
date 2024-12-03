package JavaProject.CouponSystem2_Spring.Exceptions.GuestExceptions;

import lombok.Getter;

@Getter
public enum GuestErrors {
    GENERAL_CUSTOMER_ERROR("\nERROR! There was an error when trying to perform the guest method. \n"),
    COUPON_DOES_NOT_EXIST("\nERROR! Coupon doesn't exist in the system. \n"),
    EMPTY_OR_NULL("\nERROR! The relevant table/field is empty or null. \n"),
    COUPON_AMOUNT_IS_ZERO("\nERROR! There are not enough coupons in the system in order to perform this purchase. \n"),
    COUPON_DATE_EXPIRED("\nERROR! The coupon date has expired. \n"),
    NO_PERMISSIONS("\nERROR! User has insufficient permissions for the requested action. \n"),
    DUPLICATE_ENTRY("\nERROR! The value inserted (id/ name/ email/ user) already exists in the system. \n"),
    CUSTOMER_EMAIL_ALREADY_EXISTS("\nERROR! The customer email already exists in the system. \n");

    private String message;
    /**
     * Constructor which inserts the relevant message into each error.
     * @param message String message relevant for each error
     */
    GuestErrors(String message) {
        this.message = message;
    }
}
