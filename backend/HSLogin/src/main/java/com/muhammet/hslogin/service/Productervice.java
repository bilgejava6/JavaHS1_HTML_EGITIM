package com.muhammet.hslogin.service;

import com.muhammet.hslogin.dto.response.BestSellerResponseDto;
import com.muhammet.hslogin.entity.Product;
import com.muhammet.hslogin.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
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

    /**
     * Tüm zamanların en çok satan ürünlerini listeleyip kısıtlamak gerekli.
     * @return
     */
    public List<BestSellerResponseDto> getAllBestSeller() {
        List<BestSellerResponseDto> result = new ArrayList<>();
        List<Product> bestList = productRepository.findTop10ByOrderByRateDesc();
        int endIndex = bestList.size()<6?bestList.size():6;
        bestList.subList(0,endIndex).forEach(best -> {
            result.add(BestSellerResponseDto.builder()
                            .image(best.getImageUrl())
                            .price(best.getPrice()+" ₺")
                            .rate(best.getRate())
                            .title(best.getName())
                            .type(1)
                    .build());
        });
        if (bestList.size()<6) return result;
        endIndex = bestList.size()<10?bestList.size():10;
        bestList.subList(6,endIndex).forEach(best -> {
            result.add(BestSellerResponseDto.builder()
                    .image(best.getImageUrl())
                    .price(best.getPrice()+" ₺")
                    .rate(best.getRate())
                    .title(best.getName())
                    .type(2)
                    .build());
        });

        return result;
    }
}
