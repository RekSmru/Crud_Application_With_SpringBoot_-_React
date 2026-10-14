package com.smt.HopeStep.Service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.smt.HopeStep.Entity.User;
import com.smt.HopeStep.Repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	
//	register User
	public User registerUser(User user) {
		return userRepository.save(user);	
	}
// get all Users
	public List<User> getAllUser(){
		return userRepository.findAll();
	}
	
	public User updateUser(User updatedUser) {
		Optional<User> user1 = userRepository.findById(updatedUser.getId());
		User user=user1.get();
		user.setUsernameOrEmail(updatedUser.getUsernameOrEmail());
		user.setPasswordHash(updatedUser.getPasswordHash());
		user.setInstitution(updatedUser.getInstitution());
		
		return userRepository.save(user);
	}
	
	public boolean deleteUser(int id) {
		userRepository.deleteById(id);
		return true;
	}
	
	
	public User signInUser(User loginUser) {
	    return userRepository.save(loginUser);
	}
}
