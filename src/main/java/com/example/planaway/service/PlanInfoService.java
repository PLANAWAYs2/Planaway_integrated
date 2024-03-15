package com.example.planaway.service;

import com.example.planaway.domain.PlanInfo;
import com.example.planaway.domain.PlanTitle;
import com.example.planaway.repository.PlanInfoRepository;
import com.example.planaway.repository.PlanTitleRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.ws.rs.NotFoundException;
import java.util.List;

@RequiredArgsConstructor
@Service
public class PlanInfoService {

    private final PlanInfoRepository planInfoRepository;

    private final PlanTitleRepository planTitleRepository;

    public List<PlanInfo> getList(){
        return this.planInfoRepository.findAll();
    }

    public PlanInfo getPlanInfoById(Long infoId){
        return this.planInfoRepository.findById(infoId)
                .orElseThrow(() -> new NotFoundException("PlanInfo not found with id: " + infoId));
    }

    public PlanInfo createInfo(PlanInfo planInfo){

        return planInfoRepository.save(planInfo);
    }

    /*
    public PlanInfo updateTitle(Long InfoId, String Title) {
        PlanInfo planInfo = planInfoRepository.findById(InfoId)
                .orElseThrow(() -> new EntityNotFoundException("PlanInfo not found with id: " + InfoId));

        PlanTitle title = PlanTitleRepository.findByInfoId(InfoId);
        title.setTitle(Title);
        PlanTitleRepository.save(title);

        return planInfo;
    }
*/
}
