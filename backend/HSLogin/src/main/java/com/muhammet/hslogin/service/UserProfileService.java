package com.muhammet.hslogin.service;

import com.muhammet.hslogin.dto.request.LoginDto;
import com.muhammet.hslogin.dto.request.RegisterDto;
import com.muhammet.hslogin.entity.UserProfile;
import com.muhammet.hslogin.repository.UserProfileRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserProfileService {
    private final UserProfileRepository userProfileRepository;

    public UserProfile save(RegisterDto dto){
       return userProfileRepository.save(UserProfile.builder()
                        .email(dto.getEmail())
                        .password(dto.getPassword())
                        .userName(dto.getUserName())
                .build());
    }

    public Boolean login(LoginDto dto){
        Optional<UserProfile> optionalUserProfile = userProfileRepository.findOptionalByUserNameAndPassword(dto.getUserName(),dto.getPassword());
        return optionalUserProfile.isPresent();
    }

    public List<UserProfile> getAll() {
        return userProfileRepository.findAll();
    }
}
