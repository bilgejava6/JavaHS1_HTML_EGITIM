package com.muhammet.hslogin.controller;

import com.muhammet.hslogin.dto.request.CategoryDto;
import com.muhammet.hslogin.dto.response.CategoryResponseDto;
import com.muhammet.hslogin.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/category")
@RequiredArgsConstructor
public class CategoryController {
    private CategoryService categoryService;

    @PostMapping("/add-category")
    @CrossOrigin("*")
    public ResponseEntity<Boolean> addCategory(@RequestBody CategoryDto dto) {
        categoryService.addCategory(dto);
        return ResponseEntity.ok(true);
    }
    @GetMapping("/get-all-category")
    @CrossOrigin("*")
    public ResponseEntity<List<CategoryResponseDto>> getAllCategory() {
        return ResponseEntity.ok(categoryService.getAllCategory());
    }
}
