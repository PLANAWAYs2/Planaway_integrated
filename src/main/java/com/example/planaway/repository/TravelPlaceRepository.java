package com.example.planaway.repository;

import com.example.planaway.domain.PlanTitle;
import com.example.planaway.domain.TravelPlace;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TravelPlaceRepository extends JpaRepository<TravelPlace, Long> {
}
