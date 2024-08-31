package com.muhammet.hslogin.repository;

import com.muhammet.hslogin.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CategoryRepository extends JpaRepository<Category, Long> {
    List<Category> findAllByParentId(Long l);
}
