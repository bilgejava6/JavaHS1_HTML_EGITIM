package com.muhammet.hslogin.repository;

import com.muhammet.hslogin.entity.UserProfile;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserProfileRepository extends JpaRepository<UserProfile, Long> {
    Optional<UserProfile> findOptionalByUserNameAndPassword(String userName, String password);
}
