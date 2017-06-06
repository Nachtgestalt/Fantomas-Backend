package com.solopro.service;

import java.util.List;

import com.solopro.entity.Producto;

public interface ProductoService {
	
	public abstract Producto addProducto(Producto producto);
	public abstract List<Producto> listAllProducts();
	public abstract Producto findById(int id);
	public abstract void deleteUserById(int id);
	public abstract Producto updateProduct(Producto producto);
}
