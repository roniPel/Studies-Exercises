package DataBase.CRUD;

import DataBase.DBmanager;

/**
 * Class for Update commands in SQL
 */
public class Update {

    // Company
    public static final String updateCompany =
            "UPDATE `"+ DBmanager.SQL_DB+"`.`companies` SET " +
                    "`email` = ?, `password` = ? WHERE (`id` = ?);";

    // Coupons
    public static final String updateCoupon =
            "UPDATE `"+ DBmanager.SQL_DB+"`.`coupons` SET `companyID` = ?, " +
                    "`categoryID` = ?, `title` = ?, `description` = ?, `startDate` = ?, `endDate` = ?, " +
                    "`amount` = ?, `price` = ?, `image` = ? WHERE (`id` = ?);";
    // Customer

    public static final String updateCustomer =
            "UPDATE `"+ DBmanager.SQL_DB+"`.`customers` SET `first_name` = ?, `last_name` = ?, `email` = ?, `password` = ? WHERE (`id` = ?);";

}
