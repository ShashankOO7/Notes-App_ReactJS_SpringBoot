package com.jsp.NotesApp.dto;

import lombok.Data;

@Data
public class ResponseStructure<T> {
	private T Data;
	private String message;
	private int statusCode;
}
