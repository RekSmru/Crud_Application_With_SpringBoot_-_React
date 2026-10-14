package com.smt.HopeStep.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.smt.HopeStep.Entity.User;
import com.smt.HopeStep.Service.UserService;


@RestController
@CrossOrigin(origins = "http://localhost:5174")
public class UserController {
	
	@Autowired
	UserService userService;
	
//	register User
	@PostMapping("/registerUser")
	public User registerUser(@RequestBody User user){
	return userService.registerUser(user);
	}
	
//	find all Users
	@GetMapping("/getUsers")
	public List<User> getAllUsers(){
		return userService.getAllUser();
	}
	
//	Update Users
	@PutMapping("/updateUser")
	public User updateUser(@RequestBody User user) {
		return userService.updateUser(user);
	}
//	Delete Users
	@DeleteMapping("/deleteUser/{id}")
	public Boolean deleteUser(@PathVariable Integer  id) {
		return userService.deleteUser(id);
	}

//	Sign In User
	@GetMapping("/signInUser")
	public ResponseEntity<?> signInUser(@RequestBody User user) {
	    User savedUser = userService.signInUser(user);
	    return ResponseEntity.ok(savedUser);
	}
	
}
