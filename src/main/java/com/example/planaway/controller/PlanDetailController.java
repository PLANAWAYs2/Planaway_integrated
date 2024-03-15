package com.example.planaway.controller;

import com.example.planaway.domain.PlanDetail;
import com.example.planaway.domain.PlanInfo;
import com.example.planaway.service.PlanDetailService;
import com.example.planaway.service.PlanInfoService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@RequiredArgsConstructor
@Controller
public class PlanDetailController {


    private final PlanDetailService planDetailService;
    private final PlanInfoService planInfoService;

    @GetMapping("/plans/detail/{InfoId}")
    public String showDetail(Model model, @PathVariable Long InfoId) {
        // PlanInfo 정보 가져오기
        PlanInfo planInfo = planInfoService.getPlanInfoById(InfoId);
        model.addAttribute("planInfo", planInfo);

        // PlanDetail 정보 가져오기
        List<PlanDetail> planDetailList = planDetailService.getPlanDetailsByInfoId(InfoId);
        model.addAttribute("planDetailList", planDetailList);

        return "plans_detail";
    }

    @PostMapping("/plans/detail/{InfoId}")
    public String createDetail(Model model, @PathVariable Long InfoId, @RequestParam String description) {
        // PlanInfo 정보 가져오기
        PlanInfo planInfo = planInfoService.getPlanInfoById(InfoId);

        // PlanDetail 생성
        PlanDetail newPlanDetail = new PlanDetail();
        newPlanDetail.setDescription(description);

        // PlanDetail 저장
        planDetailService.addPlanDetail(newPlanDetail);


        String message="여행 상세 정보가 저장되었습니다.";

        return String.valueOf(ResponseEntity.ok().body("{\"message\": \"" + message + "\"}"));
    }
}
