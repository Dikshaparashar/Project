package net.javaguides.springboot.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot.model.Book;
import net.javaguides.springboot.repository.BookRepository;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/")
public class BookController {

	@Autowired
	private BookRepository bookRepository;
	
	@GetMapping("books")
	public List<Book> getBooks(){
		return  this.bookRepository.findAll();
				
	}
}
