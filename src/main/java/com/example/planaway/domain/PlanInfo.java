package com.example.planaway.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;


import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
@Entity
public class PlanInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ElementCollection
    @Column(columnDefinition = "TEXT")
    private List<String> continents;

    @ElementCollection
    @Column(columnDefinition = "TEXT")
    private List<String> countries;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate startDate;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate endDate;

    @OneToMany(mappedBy = "planInfo", cascade = CascadeType.REMOVE)
    private List<PlanDetail> planDetailList;

}
