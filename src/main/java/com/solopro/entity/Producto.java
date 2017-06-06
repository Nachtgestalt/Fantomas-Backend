package com.solopro.entity;

import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "producto")
public class Producto {

	public Producto() {
	}
	
	public Producto(int id, String codigo, String marca, String modelo, String identificador, BigDecimal precio,
			BigDecimal costo, int cantidad, String descripcion) {
		super();
		this.id = id;
		this.codigo = codigo;
		this.marca = marca;
		this.modelo = modelo;
		this.identificador = identificador;
		this.precio = precio;
		this.costo = costo;
		this.cantidad = cantidad;
		this.descripcion = descripcion;
	}


	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id")
	private int id;

	@Column(name = "codigo", unique = true, nullable = false, length = 45)
	private String codigo;

	@Column(name = "marca", nullable = false, length = 60)
	private String marca;

	@Column(name = "modelo", nullable = false, length = 60)
	private String modelo;

	@Column(name = "identificador", nullable = false, length = 60)
	private String identificador;

	@Column(name = "precio", nullable = false, length = 60)
	private BigDecimal precio;

	@Column(name = "costo", nullable = false, length = 60)
	private BigDecimal costo;

	@Column(name = "cantidad", nullable = false, length = 60)
	private int cantidad;

	@Column(name = "descripcion", nullable = true, length = 160)
	private String descripcion;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	
	public String getCodigo() {
		return codigo;
	}

	public void setCodigo(String codigo) {
		this.codigo = codigo;
	}

	public String getMarca() {
		return marca;
	}

	public void setMarca(String marca) {
		this.marca = marca;
	}

	public String getModelo() {
		return modelo;
	}

	public void setModelo(String modelo) {
		this.modelo = modelo;
	}

	public String getIdentificador() {
		return identificador;
	}

	public void setIdentificador(String identificador) {
		this.identificador = identificador;
	}

	public BigDecimal getPrecio() {
		return precio;
	}

	public void setPrecio(BigDecimal precio) {
		this.precio = precio;
	}

	public BigDecimal getCosto() {
		return costo;
	}

	public void setCosto(BigDecimal costo) {
		this.costo = costo;
	}

	public int getCantidad() {
		return cantidad;
	}

	public void setCantidad(int cantidad) {
		this.cantidad = cantidad;
	}

}
