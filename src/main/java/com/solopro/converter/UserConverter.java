package com.solopro.converter;

import org.springframework.stereotype.Component;

import com.solopro.entity.User;
import com.solopro.model.UserModel;

@Component("userConverter")
public class UserConverter {
	
	//Entity => Model
	public UserModel entity2model(User user){
		UserModel userModel = new UserModel();
		userModel.setUsername(user.getUsername());
		userModel.setPassword(user.getPassword());
		return userModel;
	}
	
	
	//Model => Entity
	public User model2entity(UserModel userModel){
		User user = new User();
		user.setUsername(userModel.getUsername());
		user.setPassword(userModel.getPassword());
		return user;
	}

}
