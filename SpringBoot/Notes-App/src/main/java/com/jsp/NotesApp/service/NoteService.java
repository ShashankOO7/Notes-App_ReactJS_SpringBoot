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

import com.jsp.NotesApp.dao.NoteDAO;
import com.jsp.NotesApp.dao.UserDAO;
import com.jsp.NotesApp.dto.Note;
import com.jsp.NotesApp.dto.ResponseStructure;
import com.jsp.NotesApp.dto.User;
import com.jsp.NotesApp.exception.IdNotFoundException;

@Service
public class NoteService {
	@Autowired
	private UserDAO userDao;
	
	@Autowired
	private NoteDAO noteDao;
	
	public ResponseEntity<ResponseStructure<Note>> saveNote(@RequestBody Note note, @RequestBody int user_id)
	{
		ResponseStructure<Note> structure = new ResponseStructure<>();
		Optional<User> recUser = userDao.findById(user_id);
		if(recUser.isPresent())
		{
			User u = recUser.get();
			u.getNotes().add(note);
			note.setUser(recUser.get());
			userDao.updateUser(recUser.get());
			noteDao.saveNote(note);
			structure.setData(note);
			structure.setMessage("Note Added Successfully");
			structure.setStatusCode(HttpStatus.CREATED.value());
			return new ResponseEntity<ResponseStructure<Note>>(structure, HttpStatus.CREATED);
		}
		throw new IdNotFoundException();
	}
	
	public ResponseEntity<ResponseStructure<Note>> updateNote(@RequestParam Note note, @RequestParam int user_id)
	{
		ResponseStructure<Note> structure = new ResponseStructure<>();
		Optional<User> recUser = userDao.findById(user_id);
		if(recUser.isPresent())
		{
			note.setUser(recUser.get());
			noteDao.updateNote(note);
			structure.setData(note);
			structure.setMessage("Note Updated Successfully");
			structure.setStatusCode(HttpStatus.ACCEPTED.value());
			return new ResponseEntity<ResponseStructure<Note>>(structure, HttpStatus.ACCEPTED);
		}
		throw new IdNotFoundException();
	}
	
	public ResponseEntity<ResponseStructure<Note>> findById(@PathVariable int id)
	{
		ResponseStructure<Note> structure = new ResponseStructure<>();
		Optional<Note> recNote = noteDao.findById(id);
		if(recNote.isPresent())
		{
			structure.setData(recNote.get());
			structure.setMessage("Note Found");
			structure.setStatusCode(HttpStatus.OK.value());
			return new ResponseEntity<ResponseStructure<Note>>(structure, HttpStatus.OK);
		}
		throw new IdNotFoundException();
	}
	
	public ResponseEntity<ResponseStructure<String>> deleteNote(@PathVariable int id)
	{
		ResponseStructure<String> structure = new ResponseStructure<>();
		Optional<Note> recNote = noteDao.findById(id);
		if(recNote.isPresent())
		{
			noteDao.deleteNote(id);
			structure.setData("Note Deleted");
			structure.setMessage("Note Found");
			structure.setStatusCode(HttpStatus.OK.value());
			return new ResponseEntity<ResponseStructure<String>>(structure, HttpStatus.OK);
		}
		throw new IdNotFoundException();
	}
	
	public ResponseEntity<ResponseStructure<List<Note>>> findNotesByUserId(@PathVariable int id)
	{
		ResponseStructure<List<Note>> structure = new ResponseStructure<>();
		structure.setData(noteDao.findNotesByUserId(id));
		structure.setMessage("Notes found for User ID");
		structure.setStatusCode(HttpStatus.OK.value());
		return new ResponseEntity<ResponseStructure<List<Note>>>(structure, HttpStatus.OK);
	}
}
