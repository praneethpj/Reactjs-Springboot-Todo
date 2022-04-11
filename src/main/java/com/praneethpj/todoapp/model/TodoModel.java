package com.praneethpj.todoapp.model;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.beans.factory.annotation.Required;
import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Component
@Table(name = "todocontent")
public class TodoModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotBlank(message = "Title is mandatory")
    @Size(min = 2, message = "Title size is too short")
    @Size(max = 10, message = "Title size is too long")
    private String title;

    @NotBlank(message = "Content is mandatory")
    @Size(min = 2, message = "Content size is too short")
    @Size(max = 100, message = "Content size is too long")
    private String content;

    @NotBlank(message = "username is mandatory")
    @Size(min = 2, message = "Username size is too short")
    @Size(max = 10, message = "Password size is too long")
    private String username;

    private boolean status;

    @CreationTimestamp
    private Date created;

    @UpdateTimestamp
    private Date modified;



}
