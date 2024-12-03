package com.johnbryce.donation.service;

import com.johnbryce.donation.beans.Donation;
import com.johnbryce.donation.repositories.DonationRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DonationService {
    private final DonationRepo donationRepo;

    public void addDonatin(Donation donation){
        donationRepo.save(donation);
    }

    public List<Donation> getAllDonations(){
        return donationRepo.findAll();
    }

    public List<Donation> getLessThan(long amount){
        return donationRepo.findByDonationAmountLessThan(amount);
    }

    public List<Donation> getMoreThan(long amount){
        return donationRepo.findByDonationAmountGreaterThan(amount);
    }

    public List<Donation> findByName(String name){
        return donationRepo.findAllByName(name);
    }

}
