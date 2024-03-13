package com.example.planaway.domain;

import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TravelPlace {

    @Id
    private Long id;

    private String name;
    private double latitude;
    private double longitude;

}
