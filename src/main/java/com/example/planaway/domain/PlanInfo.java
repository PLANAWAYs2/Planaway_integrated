package com.example.planaway.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;


import java.util.List;

@Getter
@Setter
@Entity
public class PlanInfo {

    @Id
    private Long id;

    @Column(columnDefinition = "TEXT")
    private List<String> continents;

    @Column(columnDefinition = "TEXT")
    private List<String> countries;

    @DateTimeFormat(pattern = "YYYY-MM-DD")
    private String startDate;

    @DateTimeFormat(pattern = "YYYY-MM-DD")
    private String endDate;




}
