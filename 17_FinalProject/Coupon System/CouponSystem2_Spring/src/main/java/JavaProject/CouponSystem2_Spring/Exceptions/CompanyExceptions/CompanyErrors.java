package JavaProject.CouponSystem2_Spring.Exceptions.CompanyExceptions;

import lombok.Getter;

/**
 * CompanyErrors Class (Enum) - Contains Strings of possible errors for Company users
 */
@Getter
public enum CompanyErrors {
    GENERAL_COMPANY_ERROR("\nERROR! There was an error when trying to perform the company method. \n"),
    INCORRECT_LOGIN_DETAILS("\nERROR! Incorrect company username and/or password. \n"),
    DUPLICATE_ENTRY("\nERROR! The value inserted (id/ name/ email/ user) already exists in the system. \n"),
    NO_PERMISSIONS("\nERROR! User has insufficient permissions for the requested action. \n"),

    // Coupon related actions
    COUPON_EXISTS_FOR_COMPANY("\nERROR! The coupon already exists for this company. \n"),
    COUPON_COMPANY_ID_INCORRECT("\nERROR! The coupon's company ID doesn't match login details. \n"),
    COUPON_DOES_NOT_EXIST("\nERROR! The coupon doesn't exist in the system. \n"),
    COUPON_DOES_NOT_BELONG_TO_COMPANY("\nERROR! The coupon doesn't belong to this company. \n");

    private String message;
    /**
     * Constructor which inserts the relevant message into each error.
     * @param message String message relevant for each error
     */
    CompanyErrors(String message) {
        this.message = message;
    }
}
