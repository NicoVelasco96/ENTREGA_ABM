package com.example.Practicas.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.Date;

@Entity
@Table(name="persona")
@Data //Getters and Setters
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Persona extends Base {
    @Column(name = "nombre")
    private String firstName;
    @Column(name = "apellido")
    private String lastName;
    @Column(name = "fecha_nac")
    private LocalDate birthdate;
    @Column(name = "direccion")
    private String adress;
    @Column(name = "telefono")
    private String phoneNumber;
    @Column(name = "email")
    private String email;
}
