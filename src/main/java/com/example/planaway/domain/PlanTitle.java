package com.example.planaway.domain;

import com.example.planaway.domain.PlanDetail;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Entity
public class PlanTitle {

    @Id
    private Long id;

    @Column(length=50)
    private String title;


}
