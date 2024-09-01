package com.muhammet.hslogin.repository;

import com.muhammet.hslogin.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product,Long> {
    List<Product> findTop10ByOrderByRateDesc();
}
