package com.jsp.NotesApp.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.jsp.NotesApp.dto.User;

public interface UserRepository extends JpaRepository<User, Integer> {
	
	@Query("select u from User u where u.phone = ?1 and u.password = ?2")
	Optional<User> verifyUser(long phone, String password);
	
	@Query("select u from User u where u.email = ?1 and u.password = ?2")
	Optional<User> verifyUser(String email, String password);
}
