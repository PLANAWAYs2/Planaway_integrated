package com.example.planaway.user;

import lombok.Data;


import javax.validation.constraints.NotEmpty;


@Data
public class LoginForm {
    @NotEmpty
    private String userId;

    @NotEmpty
    private String password;
}
