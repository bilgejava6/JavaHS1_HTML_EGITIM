package com.muhammet.hslogin.service;

import com.muhammet.hslogin.dto.request.CategoryDto;
import com.muhammet.hslogin.dto.response.CategoryResponseDto;
import com.muhammet.hslogin.entity.Category;
import com.muhammet.hslogin.repository.CategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
@RequiredArgsConstructor
public class CategoryService {
    private final CategoryRepository categoryRepository;

    public void addCategory(CategoryDto dto) {
        categoryRepository.save(Category.builder()
                .categoryImage(dto.getCategoryImage())
                .description(dto.getDescription())
                .name(dto.getName())
                .parentId(dto.getParentId())
                .build());
    }

    public List<CategoryResponseDto> getAllCategory() {
        List<Category> parentCategoryList = categoryRepository.findAllByParentId(0L);
        List<CategoryResponseDto> categoryResponseDtoList = new ArrayList<>();

        parentCategoryList.forEach(category -> {
            categoryResponseDtoList.add(
                    CategoryResponseDto.builder()
                            .categoryId(category.getId())
                            .categoryName(category.getName())
                            .categoryList(categoryRepository.findAllByParentId(category.getId()))
                            .build()
            );
        });

        return categoryResponseDtoList;
    }
}
