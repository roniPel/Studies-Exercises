package com.johnbryce.donation.controller;

import com.johnbryce.donation.beans.Donation;
import com.johnbryce.donation.service.DonationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/donation")
@CrossOrigin
public class DonationController {
    private final DonationService donationService;

    //new donatin
    @PostMapping("/add")
    @ResponseStatus(HttpStatus.CREATED)
    public void addDonatin(@RequestBody Donation donation){
        donationService.addDonatin(donation);
    }

    //donation less than
    @GetMapping("/less/{amount}")
    public List<Donation> getDonationLessThan(@PathVariable long amount){
        return donationService.getLessThan(amount);
    }

    //donation greater than
    @GetMapping("/bigger/{amount}")
    public List<Donation> getDonationMoreThan(@PathVariable long amount){
        return donationService.getMoreThan(amount);
    }

    //all donations
    @GetMapping("/list")
    public List<Donation> getAllDonation(){
        return donationService.getAllDonations();
    }

    //donation by name
    @GetMapping("/byName/{name}")
    public List<Donation> getDonationByName(@PathVariable String name){
        return donationService.findByName(name);
    }
}
