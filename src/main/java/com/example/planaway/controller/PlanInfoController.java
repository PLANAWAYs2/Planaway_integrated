package com.example.planaway.controller;

import com.example.planaway.domain.PlanInfo;
import com.example.planaway.service.PlanInfoService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@Controller
public class PlanInfoController {

    private final PlanInfoService planInfoService;


    @GetMapping("/plans/info/{InfoId}")
    public String getInfo(@PathVariable Long InfoId, Model model){
        PlanInfo planInfo = planInfoService.getPlanInfoById(InfoId);
        model.addAttribute("planInfo", planInfo);
        return "plans_info";
    }

    @PostMapping("/plans/info/{InfoId}")
    public String createInfo(@PathVariable Long InfoId,
                             @Valid PlanInfo planInfo, BindingResult bindingResult){

        if(bindingResult.hasErrors()){
            return "plans_info";
        }

        planInfoService.createInfo(planInfo);
        return "plans_info";
    }

    @PostMapping("/plans/title/{InfoId}")
    public String title(@PathVariable Long InfoId,
                        @RequestParam(value="title") String title){
        return "redirect:plans_info";
    }

    @DeleteMapping("/plans/title/{InfoId}")
    public String deleteTitle(@PathVariable Long InfoId){
        return "redirect:plans_info";
    }

/*
    @PostMapping("/plans/title/{InfoId}")
    public String title(@PathVariable Long InfoId,
                        @RequestParam(value="title") String title){
        planInfoService.updateTitle(InfoId, title);
        return "redirect:plans_info";
    }

    @DeleteMapping("/plans/title/{InfoId}")
    public String deleteTitle(@PathVariable Long InfoId){
        planInfoService.deleteTitle(InfoId);
        return "redirect:plans_info";
    }

 */

}
