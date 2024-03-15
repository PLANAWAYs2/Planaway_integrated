package com.example.planaway.controller;

import com.example.planaway.domain.TravelPlace;
import com.example.planaway.service.TravelPlaceService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@Controller
public class TravelPlaceController {

    private final TravelPlaceService travelPlaceService;

    @GetMapping("/plans/travel-places/{planId}")
    public String getPlace(@PathVariable Long planId){
        return "redirect:/plans/travel-places";
    }

    @PostMapping("/plans/travel-places/{planId}")
    public String createPlace(@PathVariable Long planId,
                              @RequestParam String name) {
        this.travelPlaceService.createPlace(name);

        return "redirect:/plans/travel-places";
    }

    @DeleteMapping("/plans/travel-places/{planId}")
    public String deletePlace(@PathVariable Long planId){
        String message="Travel place deleted successfully.";

        return String.valueOf(ResponseEntity.ok().body("{\"message\": \"" + message + "\"}"));
    }

}
