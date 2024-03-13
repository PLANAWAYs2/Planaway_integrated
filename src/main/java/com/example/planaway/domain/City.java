package com.example.planaway.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class City {

    @Id
    private Long id;

    @Column(columnDefinition = "TEXT")
    private String cityName;

    private int stayDuration;

}
