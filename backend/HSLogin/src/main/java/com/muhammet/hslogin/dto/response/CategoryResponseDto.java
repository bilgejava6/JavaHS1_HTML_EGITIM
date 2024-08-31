package com.muhammet.hslogin.dto.response;

import com.muhammet.hslogin.entity.Category;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class CategoryResponseDto {
    private Long categoryId;
    private String categoryName;
    List<Category> categoryList;
}
