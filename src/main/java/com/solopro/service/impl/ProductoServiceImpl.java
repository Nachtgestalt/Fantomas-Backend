package com.solopro.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.solopro.entity.Producto;
import com.solopro.repository.ProductoJpaRepository;
import com.solopro.service.ProductoService;

@Service("productoServiceImpl")
public class ProductoServiceImpl implements ProductoService{

	@Autowired
	@Qualifier("productoJpaRepository")
	
	private ProductoJpaRepository productoJpaRepository;
	
	@Override
	public Producto addProducto(Producto producto) {
		return productoJpaRepository.save(producto);
	}

	@Override
	public List<Producto> listAllProducts() {
		return productoJpaRepository.findAll();
	}

	@Override
	public Producto findById(int id) {
		return productoJpaRepository.findOne(id);
	}

	@Override
	public void deleteUserById(int id) {
		productoJpaRepository.delete(id);
	}

	@Override
	public Producto updateProduct(Producto producto) {
		return productoJpaRepository.save(producto);
	}
	
}
