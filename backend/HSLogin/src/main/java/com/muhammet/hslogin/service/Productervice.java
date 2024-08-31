package com.muhammet.hslogin.service;

import com.muhammet.hslogin.entity.Product;
import com.muhammet.hslogin.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class Productervice {
    private final ProductRepository productRepository;

    public List<Product> getAll() {
        return productRepository.findAll();
    }

    public void addPoduct(Product product) {
        productRepository.save(product);
    }
}
