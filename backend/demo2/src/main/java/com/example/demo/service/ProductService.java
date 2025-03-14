package com.example.demo.service;

import com.example.demo.model.Product;
import com.example.demo.repo.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public Product add(Product product, MultipartFile file) throws IOException {
           product.setImageData(file.getBytes());
           product.setImageName(file.getOriginalFilename());
           product.setImageType(file.getContentType());
           productRepository.save(product);
           return product;
    }

    public List<Product> get() {
        return productRepository.findAll();
    }

    public Product update(Product product, MultipartFile file,int id) throws IOException {
        System.out.println("update");
          Optional<Product> productOptional = productRepository.findById(id);
          if(productOptional.isPresent()) {
              product.setId(id);
              product.setCountry(product.getCountry());
              product.setCatagorie(product.getCatagorie());
              product.setPrice(product.getPrice());
              if(file != null && !file.isEmpty()) {
                  product.setImageName(file.getOriginalFilename());
                  product.setImageType(file.getContentType());
                  product.setImageData(file.getBytes());
              }

              productRepository.save(product);
          }else{
              throw new IOException("Product not found");
          }
          return product;
    }

    public String delete(int id) {
        Optional<Product> productOptional = productRepository.findById(id);
        if(productOptional.isPresent()) {
            productRepository.deleteById(id);
        }
        return "Product deleted successfully";
    }

    public Product getProductById(int id) {
        Optional<Product> productOptional = productRepository.findById(id);
        Product product = new Product();
        if(productOptional.isPresent()) {
            product = productOptional.get();
        }
        return product;


    }
}
