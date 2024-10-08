package com.muhammet.hslogin.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class BestSellerResponseDto {
    Integer type;
    String image;
    String title;
    String price;
    Integer rate;
}
