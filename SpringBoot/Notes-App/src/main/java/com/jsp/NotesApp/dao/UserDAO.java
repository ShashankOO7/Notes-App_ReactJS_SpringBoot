package com.jsp.NotesApp.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.jsp.NotesApp.dto.User;
import com.jsp.NotesApp.repository.UserRepository;

@Repository
public class UserDAO {
	@Autowired
	private UserRepository repository;
	
	public User saveUser(User u)
	{
		return repository.save(u);
	}
	
	public User updateUser(User u)
	{
		return repository.save(u);
	}
	
	public Optional<User> findById(int id)
	{
		return repository.findById(id);
	}
	
	public void deleteUser(int id)
	{
		repository.deleteById(id);
	}
	
	public List<User> findAll()
	{
		return repository.findAll();
	}
	
	public Optional<User> verifyUser(long phone, String password)
	{
		return repository.verifyUser(phone, password);
	}
	
	public Optional<User> verifyUser(String email, String password)
	{
		return repository.verifyUser(email, password);
	}
}
