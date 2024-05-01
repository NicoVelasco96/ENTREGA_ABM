package com.example.Practicas;

import com.example.Practicas.model.Persona;
import com.example.Practicas.repository.PersonaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

@SpringBootApplication
public class PracticasApplication {

	@Autowired
	private PersonaRepository personaRepository;

	public static void main(String[] args) {
		SpringApplication.run(PracticasApplication.class, args);
	}

	@Bean
	CommandLineRunner init() {
		return args -> {
			LocalDate localDate = LocalDate.of(1996,6,30);
			DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");


			Persona persona1 = Persona.builder()
					.firstName("Nicolas")
					.lastName("Velasco")
					.email("nvelasco@utn.com")
					.phoneNumber("2616556565")
					.adress("Calle 123")
					.birthdate()
					.build();
			personaRepository.save(persona1);
		};
	}
}
