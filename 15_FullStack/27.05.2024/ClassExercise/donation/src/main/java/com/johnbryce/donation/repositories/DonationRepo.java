package com.johnbryce.donation.repositories;

import com.johnbryce.donation.beans.Donation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DonationRepo extends JpaRepository<Donation,Integer> {
    //smartDialect

    //under 180
    List<Donation> findByDonationAmountLessThan(long amount);

    //over 1800
    List<Donation> findByDonationAmountGreaterThan(long amount);

    List<Donation> findAllByName(String name);
}
