package com.muhammet.hslogin.controller;

import com.muhammet.hslogin.dto.response.LoginDto;
import com.muhammet.hslogin.dto.response.RegisterDto;
import com.muhammet.hslogin.entity.UserProfile;
import com.muhammet.hslogin.service.UserProfileService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserProfileController {
    private final UserProfileService userProfileService;

    @PostMapping("/register")
    @CrossOrigin("*")
    public ResponseEntity<UserProfile> register(@RequestBody RegisterDto dto){
        return ResponseEntity.ok(userProfileService.save(dto));
    }


    @PostMapping("/login")
    @CrossOrigin("*")
    public ResponseEntity<Boolean> login(@RequestBody LoginDto dto){
        return ResponseEntity.ok(userProfileService.login(dto));
    }


    @GetMapping("/get-all")
    @CrossOrigin("*")
    public ResponseEntity<List<UserProfile>> getAll(){
        return ResponseEntity.ok(userProfileService.getAll());
    }

}
