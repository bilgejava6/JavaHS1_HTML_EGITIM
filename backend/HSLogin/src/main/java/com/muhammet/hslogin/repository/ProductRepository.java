package com.muhammet.hslogin.repository;

import com.muhammet.hslogin.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product,Long> {
}
