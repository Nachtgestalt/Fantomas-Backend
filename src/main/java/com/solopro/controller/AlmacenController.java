package com.solopro.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.solopro.entity.Producto;
import com.solopro.service.ProductoService;


@RestController
public class AlmacenController {
	@Autowired
	@Qualifier("productoServiceImpl")
	private ProductoService productoService;
	
	//----- Obtener un producto por id ------
	@RequestMapping(value= "/productos/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Producto> getProduct(@PathVariable("id") int id){
		Producto producto = productoService.findById(id);
		return new ResponseEntity<Producto>(producto, HttpStatus.OK);
	}
	
	//----Obtener todos los productos ------
	@GetMapping(value= "/productos")
	public ResponseEntity<List<Producto>> listAll(){
		List<Producto> productos = productoService.listAllProducts();
		if(productos.isEmpty()){
			return new ResponseEntity<List<Producto>>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<Producto>>(productos, HttpStatus.OK);
	}
	//----Crear un producto -----
	@PostMapping(value = "/productos/nuevo")
	public ResponseEntity<Producto> crearProducto(@RequestBody Producto producto){
		productoService.addProducto(producto);
		return new ResponseEntity<Producto>(producto, HttpStatus.OK);
	}
	
	
	@PutMapping("/productos/{id}")
	public ResponseEntity<Producto> updateProduct(@PathVariable("id") int id, @RequestBody Producto producto){
		
		Producto currentProduct = productoService.findById(id);
		if(currentProduct == null){
			return new ResponseEntity<Producto>(HttpStatus.NOT_FOUND);
		}
		
		currentProduct.setCodigo(producto.getCodigo());
		currentProduct.setMarca(producto.getMarca());
		currentProduct.setModelo(producto.getModelo());
		currentProduct.setIdentificador(producto.getIdentificador());
		currentProduct.setPrecio(producto.getPrecio());
		currentProduct.setCantidad(producto.getCantidad());
		currentProduct.setCosto(producto.getCosto());
		currentProduct.setDescripcion(producto.getDescripcion());
		productoService.updateProduct(currentProduct);
		return new ResponseEntity<Producto>(currentProduct,HttpStatus.OK);
	}
	
	
	// ---- Borrar un producto -----
	@DeleteMapping("/productos/{id}")
	public ResponseEntity<Producto> deleteProduct(@PathVariable("id") int id){
		Producto producto = productoService.findById(id);
		if(producto == null){
			return new ResponseEntity<Producto>(HttpStatus.NOT_FOUND);
		}
		
		productoService.deleteUserById(id);
		return new ResponseEntity<Producto>(HttpStatus.NO_CONTENT);
	}
}
