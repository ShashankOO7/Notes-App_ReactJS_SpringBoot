package com.jsp.NotesApp.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.jsp.NotesApp.dto.Note;
import com.jsp.NotesApp.repository.NoteRepository;

@Repository
public class NoteDAO {
	
	@Autowired
	private NoteRepository repository;
	
	public Note saveNote(Note note)
	{
		return repository.save(note);
	}
	
	public Note updateNote(Note note)
	{
		return repository.save(note);
	}
	
	public Optional<Note> findById(int id)
	{
		return repository.findById(id);
	}
	
	public boolean deleteNote(int id)
	{
		Optional<Note> recNote = repository.findById(id);
		if(recNote.isPresent())
		{
			repository.delete(recNote.get());
			return true;
		}
		return false;
	}
	
	public List<Note> findNotesByUserId(int user_id)
	{
		return repository.findNotesByUserId(user_id);
	}
}
