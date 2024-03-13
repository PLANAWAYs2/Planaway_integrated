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

    public List<PlanDetail> getList(){

        return this.planDetailRepository.findAll();

    }
}
