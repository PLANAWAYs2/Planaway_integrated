package com.example.planaway.repository;

import com.example.planaway.domain.PlanDetail;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PlanDetailRepository extends JpaRepository<PlanDetail, Long> {

    List<PlanDetail> findByInfoId(Long infoId);
}
