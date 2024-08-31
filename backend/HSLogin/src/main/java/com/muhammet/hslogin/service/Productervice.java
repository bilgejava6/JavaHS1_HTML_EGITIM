package com.muhammet.hslogin.service;

import com.muhammet.hslogin.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class Productervice {
    private final ProductRepository productRepository;
}
