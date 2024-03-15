package com.example.planaway.domain;

import com.example.planaway.domain.PlanTitle;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class DailyPlan {

    @Id
    private Integer id;

    private int day;

    private PlanTitle planTitle;

    private String description;
}
