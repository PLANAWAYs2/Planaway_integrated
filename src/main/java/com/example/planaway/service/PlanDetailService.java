package com.example.planaway.service;

import com.example.planaway.domain.PlanDetail;
import com.example.planaway.domain.PlanInfo;
import com.example.planaway.repository.PlanDetailRepository;
import com.example.planaway.repository.PlanInfoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class PlanDetailService {

    private final PlanDetailRepository planDetailRepository;


    // PlanDetail 엔티티의 리스트를 조회하는 메서드
    public List<PlanDetail> getList() {
        return planDetailRepository.findAll();
    }

    // PlanDetail 엔티티 추가 메서드
    public PlanDetail addPlanDetail(PlanDetail planDetail) {
        return planDetailRepository.save(planDetail);
    }

    // PlanDetail 엔티티 수정 메서드
    public PlanDetail updatePlanDetail(PlanDetail planDetail) {
        return planDetailRepository.save(planDetail);
    }

    // PlanDetail 엔티티 삭제 메서드
    public void deletePlanDetail(Long id) {
        planDetailRepository.deleteById(id);
    }

    public List<PlanDetail> getPlanDetailsByInfoId(Long infoId) {
        return planDetailRepository.findByInfoId(infoId);
    }
}

