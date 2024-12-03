package com.example.ExamPractice_Spring.Repositories;

import com.example.ExamPractice_Spring.Beans.Donation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DonationsRepository extends JpaRepository<Donation,Integer> {
    List<Donation> findByName(String name);
    List<Donation> findByAmountLessThan(long amount);
    List<Donation> findByAmountGreaterThan(long amount);
}
