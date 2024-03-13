package com.example.planaway.domain;

import com.example.planaway.domain.City;
import com.example.planaway.dto.DailyPlan;
import jakarta.persistence.Column;

import java.util.List;

public class PlanDetail {

    @Column(columnDefinition = "TEXT")
    private String country;


    private List<City> cities;
    private List<DailyPlan> dailyPlans;



}
