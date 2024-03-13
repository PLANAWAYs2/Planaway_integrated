package com.example.planaway.service;

import com.example.planaway.domain.PlanInfo;
import com.example.planaway.repository.PlanInfoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class PlanInfoService {

    private final PlanInfoRepository planInfoRepository;

    public List<PlanInfo> getList(){

        return this.planInfoRepository.findAll();

    }
}
