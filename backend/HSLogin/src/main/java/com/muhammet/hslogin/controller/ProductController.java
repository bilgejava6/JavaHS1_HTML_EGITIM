package com.muhammet.hslogin.controller;

import com.muhammet.hslogin.entity.Product;
import com.muhammet.hslogin.service.Productervice;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/product")
@RequiredArgsConstructor
public class ProductController {
    private final Productervice productervice;

    @PostMapping("/add-product")
    @CrossOrigin("*")
    public ResponseEntity<Boolean> addProduct(@RequestBody Product product) {
        productervice.addPoduct(product);
        return ResponseEntity.ok(true);
    }

    @GetMapping("/get-all-product")
    @CrossOrigin("*")
    public ResponseEntity<List<Product>> getAllProduct() {
        return ResponseEntity.ok(productervice.getAll());
    }


}
