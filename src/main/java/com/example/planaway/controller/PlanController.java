package com.example.planaway.controller;

import com.example.planaway.domain.PlanDetail;
import com.example.planaway.domain.PlanInfo;
import com.example.planaway.repository.PlanInfoRepository;
import com.example.planaway.service.PlanDetailService;
import com.example.planaway.service.PlanInfoService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@RequiredArgsConstructor
@Controller
public class PlanController {

    private final PlanInfoService planInfoService;
    private final PlanDetailService planDetailService;

    @GetMapping("/plans/info")
    public String list(Model model){
        List<PlanInfo> planInfoList=this.planInfoService.getList();
        model.addAttribute("planInfoList", planInfoList);
        return "plans_info";
    }

    @GetMapping("/plans/detail")
    public String detaillist(Model model){
        List<PlanDetail> planDetailList=this.planDetailService.getList();
        model.addAttribute("planDetailList", planDetailList);
        return "plans_detail";
    }

}
