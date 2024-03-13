package com.example.planaway.repository;

import com.example.planaway.domain.PlanTitle;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlanTitleRepository extends JpaRepository<PlanTitle, Long> {
}
