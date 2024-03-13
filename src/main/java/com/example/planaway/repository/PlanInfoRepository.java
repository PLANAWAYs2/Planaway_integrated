package com.example.planaway.repository;

import com.example.planaway.domain.PlanInfo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlanInfoRepository extends JpaRepository<PlanInfo, Long> {
}
