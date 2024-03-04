package com.example.planaway.user;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Slf4j
@Controller
@RequiredArgsConstructor
public class LoginController {

    private final LoginService loginService;

    @GetMapping("/users/login")
    public String loginForm(@ModelAttribute("loginForm") LoginForm form){
        return "users/login";
    }

    @PostMapping("/users/login")
    public String login(@Valid @ModelAttribute LoginForm form,
                        BindingResult bindingResult, HttpServletRequest request){
        if(bindingResult.hasErrors()){
            return "users/login";
        }

        Member loginMember=loginService.login(form.getUserId(),form.getPassword());
        log.info("login? {}",loginMember);

        if(loginMember==null){
            bindingResult.reject("loginFail", "아이디 또는 비밀번호가 맞지 않습니다.");
            return "users/login";
        }

        //로그인 성공
        HttpSession session=request.getSession();
        session.setAttribute(SessionConst.LOGIN_MEMBER,loginMember);
        return "redirect:/";
    }

    @PostMapping("/users/logout")
    public String logout(HttpServletRequest request){
       HttpSession session= request.getSession(false);
       if(session!=null){
           session.invalidate();
       }
        return "redirect:/";
    }
}
