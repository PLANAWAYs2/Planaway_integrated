package com.example.planaway.domain;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.OneToMany;

import java.util.List;

public class PlanDetail {

    @Column(columnDefinition = "TEXT")
    private String country;

    @OneToMany(mappedBy = "planDetail", cascade = CascadeType.ALL)
    private List<City> cities;

    @OneToMany(mappedBy = "planDetail", cascade = CascadeType.ALL)
    private List<DailyPlan> dailyPlans;

    private String description;

    public void setDescription(String description) {
        this.description = description;
        for (DailyPlan dailyPlan : this.dailyPlans) {
            dailyPlan.setDescription(description);
        }
    }
}
