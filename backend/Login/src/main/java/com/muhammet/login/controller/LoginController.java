package com.muhammet.login.controller;

import com.muhammet.login.dto.LoginDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class LoginController {

    @PostMapping("/login")
    @CrossOrigin("*")
    public ResponseEntity<Boolean> login(LoginDto dto){
        if(dto.getUsername().equals("Muhmmet") && dto.getPassword().equals("123"))
            return ResponseEntity.ok(true);
        return ResponseEntity.ok(false);
    }
}
