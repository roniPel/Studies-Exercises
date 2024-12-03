package com.johnbryce.donation.clr;

import com.johnbryce.donation.beans.Donation;
import com.johnbryce.donation.service.DonationService;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

//@Component
@Order(1)
@RequiredArgsConstructor
public class Tester implements CommandLineRunner {
    private final DonationService donationService;

    @Override
    public void run(String... args) throws Exception {
        //add new donation
        try{
            Donation donation = Donation
                    .builder()
                    .name("Shani")
                    .donationAmount(3600)
                    .blessing("For safe return of ofir")
                    .build();
            //donationService.addDonatin(donation);
            System.out.println("---------------------------------");
            Donation donation1 = Donation
                    .builder()
                    .name("Hurt Uri")
                    .donationAmount(18)
                    .blessing("for good waves in sea")
                    .build();
            //donationService.addDonatin(donation1);
            System.out.println("--------------------------------");
            donationService.getLessThan(1500).forEach(System.out::println);
            System.out.println("--------------------------------");
            donationService.getMoreThan(1500).forEach(System.out::println);
            System.out.println("--------------------------------");
            donationService.findByName("Shani");
            System.out.println("--------------------------------");
            donationService.getAllDonations().forEach(System.out::println);
        } catch (Exception exception){
            System.out.println(exception.getMessage());
        }
    }
}
