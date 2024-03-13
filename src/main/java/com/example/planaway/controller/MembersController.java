package com.example.planaway.controller;

import jakarta.servlet.http.HttpSession;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.ModelAndView;

public class MembersController {

    //사진 등록 요청
    @PostMapping("/users/profile/photo")
    public ModelAndView photoUpload(UserImgsVO imgFile, HttpSession httpSession) throws Exception{
        logger.info("/photo: Post요청 발생");
        log
    }
}
