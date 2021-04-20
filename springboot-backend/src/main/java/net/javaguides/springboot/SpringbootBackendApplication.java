package net.javaguides.springboot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import net.javaguides.springboot.model.Book;
import net.javaguides.springboot.repository.BookRepository;

@SpringBootApplication
public class SpringbootBackendApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootBackendApplication.class, args);
	}

	@Autowired
	private BookRepository bookRepository;
	
	@Override
	public void run(String...args) throws Exception{
		this.bookRepository.save(new Book("LET US C","Yashavant P.Kanetkar",200));
		this.bookRepository.save(new Book("HEAD FIRST C#","ANDHREW STELLMAN",400));
		this.bookRepository.save(new Book("HTML5 IN ACTION","JOE LENNON",550));
		this.bookRepository.save(new Book("THINKING IN JAVA","BRUICE ECKEL",670));
		this.bookRepository.save(new Book("SQL THE COMPLETE REFEERENCE","JAMES GROFF",667));
	}
}
