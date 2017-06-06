package com.solopro.service;

import java.util.List;

import com.solopro.entity.Producto;
import com.solopro.entity.User;

public interface UsuarioService {
	
	public abstract User login(String user, String pass);
	public abstract User addUser(User user);
	public abstract List<User> listAllUsers();
	public abstract User findById(int id);
	public abstract void deleteUserById(int id);

}
