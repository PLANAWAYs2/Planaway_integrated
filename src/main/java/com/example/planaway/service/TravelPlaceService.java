package com.example.planaway.service;

import com.example.planaway.domain.TravelPlace;
import com.example.planaway.repository.TravelPlaceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class TravelPlaceService {

    private final TravelPlaceRepository travelPlaceRepository;


    public void createPlace(String name){
        TravelPlace travelPlace=new TravelPlace();
        travelPlace.setId(travelPlace.getId());
        travelPlace.setName(name);
        travelPlace.setLatitude(travelPlace.getLatitude());
        travelPlace.setLongitude(travelPlace.getLongitude());
        this.travelPlaceRepository.save(travelPlace);
    }

    /*
    public void createPlace(TravelPlace travelPlace) {
        travelPlaceRepository.save(travelPlace);
    }

     */

}
