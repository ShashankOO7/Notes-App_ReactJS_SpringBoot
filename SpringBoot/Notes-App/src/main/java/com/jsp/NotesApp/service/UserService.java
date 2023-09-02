package com.jsp.NotesApp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import com.jsp.NotesApp.dao.UserDAO;
import com.jsp.NotesApp.dto.ResponseStructure;
import com.jsp.NotesApp.dto.User;
import com.jsp.NotesApp.exception.IdNotFoundException;
import com.jsp.NotesApp.exception.InvalidCredentialsException;

@Service
public class UserService {
	@Autowired
	private UserDAO dao;
	
	public ResponseEntity<ResponseStructure<User>> saveUser(@RequestBody User u)
	{
		ResponseStructure<User> structure = new ResponseStructure<>();
		structure.setData(dao.saveUser(u));
		structure.setMessage("User Saved with ID: "+u.getId());
		structure.setStatusCode(HttpStatus.CREATED.value());
		return new ResponseEntity<ResponseStructure<User>>(structure, HttpStatus.CREATED);
	}
	
	public ResponseEntity<ResponseStructure<User>> updateUser(@RequestBody User u)
	{
		ResponseStructure<User> structure = new ResponseStructure<>();
		structure.setData(dao.updateUser(u));
		structure.setMessage("User Updated with ID: "+u.getId());
		structure.setStatusCode(HttpStatus.ACCEPTED.value());
		return new ResponseEntity<ResponseStructure<User>>(structure, HttpStatus.ACCEPTED);
	}
	
	public ResponseEntity<ResponseStructure<User>> findById(@PathVariable int id)
	{
		ResponseStructure<User> structure = new ResponseStructure<>();
		Optional<User> recUser = dao.findById(id);
		if(recUser.isPresent())
		{
			structure.setData(recUser.get());
			structure.setMessage("User Found");
			structure.setStatusCode(HttpStatus.OK.value());
			return new ResponseEntity<ResponseStructure<User>>(structure, HttpStatus.OK);
		}
		throw new IdNotFoundException();
	}
	
	public ResponseEntity<ResponseStructure<String>> deleteUser(@PathVariable int id)
	{
		ResponseStructure<String> structure = new ResponseStructure<>();
		Optional<User> recUser = dao.findById(id);
		if(recUser.isPresent())
		{
			dao.deleteUser(id);
			structure.setData("User Found");
			structure.setMessage("User Deleted");
			structure.setStatusCode(HttpStatus.OK.value());
			return new ResponseEntity<ResponseStructure<String>>(structure, HttpStatus.OK);
		}
		throw new IdNotFoundException();
	}
	
	public ResponseEntity<ResponseStructure<List<User>>> findAll()
	{
		ResponseStructure<List<User>> structure = new ResponseStructure<>();
		structure.setData(dao.findAll());
		structure.setMessage("All Users");
		structure.setStatusCode(HttpStatus.OK.value());
		return new ResponseEntity<ResponseStructure<List<User>>>(structure, HttpStatus.OK);
	}
	
	public ResponseEntity<ResponseStructure<User>> verifyUser(@RequestParam long phone, @RequestParam String password)
	{
		ResponseStructure<User> structure = new ResponseStructure<>();
		Optional<User> recUser = dao.verifyUser(phone, password);
		if(recUser.isPresent())
		{
			structure.setData(recUser.get());
			structure.setMessage("User Verified Successfully");
			structure.setStatusCode(HttpStatus.OK.value());
			return new ResponseEntity<ResponseStructure<User>>(structure, HttpStatus.OK);
		}
		throw new InvalidCredentialsException();
	}
	
	public ResponseEntity<ResponseStructure<User>> verifyUser(@RequestParam String email, @RequestParam String password)
	{
		ResponseStructure<User> structure = new ResponseStructure<>();
		Optional<User> recUser = dao.verifyUser(email, password);
		if(recUser.isPresent())
		{
			structure.setData(recUser.get());
			structure.setMessage("User Verified Successfully");
			structure.setStatusCode(HttpStatus.OK.value());
			return new ResponseEntity<ResponseStructure<User>>(structure, HttpStatus.OK);
		}
		throw new InvalidCredentialsException();
	}
}
