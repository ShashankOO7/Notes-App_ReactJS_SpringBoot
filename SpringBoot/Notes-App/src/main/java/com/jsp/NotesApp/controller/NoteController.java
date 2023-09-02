package com.jsp.NotesApp.controller;

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

import com.jsp.NotesApp.dto.Note;
import com.jsp.NotesApp.dto.ResponseStructure;
import com.jsp.NotesApp.service.NoteService;

@RestController
@CrossOrigin
public class NoteController {
	
	@Autowired
	private NoteService service;
	
	@PostMapping("/notes/{user_id}")
	public ResponseEntity<ResponseStructure<Note>> saveNote(@RequestBody Note note, @PathVariable int user_id)
	{
		return service.saveNote(note, user_id);
	}
	
	@PutMapping("/notes/{user_id}")
	public ResponseEntity<ResponseStructure<Note>> updateNote(@RequestBody Note note, @PathVariable int user_id)
	{
		return service.updateNote(note, user_id);
	}
	
	@GetMapping("/notes/{id}")
	public ResponseEntity<ResponseStructure<Note>> findById(@PathVariable int id)
	{
		return service.findById(id);
	}
	
	@DeleteMapping("/notes/{id}")
	public ResponseEntity<ResponseStructure<String>> deleteNote(@PathVariable int id)
	{
		return service.deleteNote(id);
	}
	
	@GetMapping("/notes/byUser-ID/{user_id}")
	public ResponseEntity<ResponseStructure<List<Note>>> findNotesByUserId(@PathVariable int user_id)
	{
		return service.findNotesByUserId(user_id);
	}
}
