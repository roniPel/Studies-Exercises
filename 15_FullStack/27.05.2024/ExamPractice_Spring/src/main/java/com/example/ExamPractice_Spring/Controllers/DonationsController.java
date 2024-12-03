package com.example.ExamPractice_Spring.Controllers;

import com.example.ExamPractice_Spring.Beans.Donation;
import com.example.ExamPractice_Spring.Exceptions.DonationException;
import com.example.ExamPractice_Spring.Services.DonationsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin()
@RestController
@RequestMapping("/Donations")
@RequiredArgsConstructor
public class DonationsController {
    private final DonationsService donationsService;

    @PostMapping(value = {"/AddDonation"})
    @ResponseStatus(HttpStatus.CREATED)
    public void AddCompany(@RequestBody Donation donation) throws DonationException {
        donationsService.addDonation(donation);
    }
    @GetMapping("/GetOneDonation/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Donation GetOneDonation(@PathVariable int id) throws DonationException {
        return donationsService.getOneDonation(id);
    }
    @GetMapping(value = {"/GetAllDonations"})
    public List<Donation> GetAllDonations(){
        return donationsService.getAllDonations();
    }

    @GetMapping(value = {"/GetDonationsByName/{name}"})
    public List<Donation> GetDonationsByName(@PathVariable String name){
        return donationsService.getDonationsByName(name);
    }

    @GetMapping(value = {"/GetDonationsByAmountLessThan/{amount}"})
    public List<Donation> GetDonationsByAmountLessThan(@PathVariable long amount){
        return donationsService.getDonationsLessThan(amount);
    }

    @GetMapping(value = {"/GetDonationsByAmountMoreThan/{amount}"})
    public List<Donation> GetDonationsByAmountMoreThan(@PathVariable long amount){
        return donationsService.getDonationsMoreThan(amount);
    }
}
