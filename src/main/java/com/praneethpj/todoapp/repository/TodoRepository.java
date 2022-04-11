package com.praneethpj.todoapp.repository;

import com.praneethpj.todoapp.model.TodoModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import java.util.Date;
import java.util.List;

public interface TodoRepository extends JpaRepository<TodoModel, Integer> {


    public List<TodoModel> findByUsernameOrderByModifiedDesc(@Param("username") String username);
    public Long countByUsername(@Param("username") String username);

    public List<TodoModel> findById(@Param("id") String username);

    public List<TodoModel> findByUsernameAndAndCreated(@Param("username") String username,@Param("created") Date created);
}
