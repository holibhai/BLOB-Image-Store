package com.example.demo.controller;

import com.example.demo.model.Product;
import com.example.demo.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/product")
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping("/add")
    public ResponseEntity<Product>addProduct(@RequestPart Product product,@RequestPart MultipartFile file) throws IOException {
        return ResponseEntity.ok(productService.add(product,file));
    }

    @GetMapping("/get")
    public ResponseEntity<List<Product>>getProduct(){
        return ResponseEntity.ok(productService.get());
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Product>updateProduct(@RequestPart Product product, @RequestPart(value = "file", required = false) MultipartFile file,@PathVariable int id) throws IOException {
        return ResponseEntity.ok(productService.update(product,file,id));

    }
    @DeleteMapping("/delete/{id}")
    public String deleteProduct(@PathVariable int id){
        return productService.delete(id);
    }
    @GetMapping("get/{id}")
    private ResponseEntity<Product> getProductById(@PathVariable int id){
        return ResponseEntity.ok(productService.getProductById(id));
    }


}
