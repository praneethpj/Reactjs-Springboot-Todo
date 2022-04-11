package com.praneethpj.todoapp.controller;


import com.praneethpj.todoapp.model.TodoModel;
import com.praneethpj.todoapp.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class TodoController {

    @Autowired
    private TodoService todoService;
    //private final String HOST = "http://localhost:3001";


    @PostMapping("/addTodo")
    private ResponseEntity<?> addTodo(@RequestBody TodoModel todo) {
        return ResponseEntity.ok(todoService.addTodo(todo));
    }

    @PutMapping("/updateTodo")
    private ResponseEntity<TodoModel> updateTodo(@RequestBody TodoModel todo) {
        return ResponseEntity.ok(todoService.updateTodo(todo));
    }

    @DeleteMapping("/deleteTodo/{id}")
    private void deleteTodo(@PathVariable Integer id) {
        todoService.deleteTodo(id);
    }

    @GetMapping("/getAllTodos/{username}")
    private ResponseEntity<?> getAllTodos(@PathVariable String username,@RequestParam(defaultValue = "0") Integer pageNo,
                                          @RequestParam(defaultValue = "10") Integer pageSize) {

        return ResponseEntity.ok(todoService.getAllTodos(username,pageNo,pageSize));
    }

    @GetMapping("/getCountByUsername/{username}")
    private ResponseEntity<?> getCountByUsername(@PathVariable String username) {

        return ResponseEntity.ok(todoService.getPageCount(username));
    }


    @GetMapping("/getTaskById/{id}")
    private ResponseEntity<?> getTaskById(@PathVariable Integer id) {

        return ResponseEntity.ok(todoService.getTaskById(id));
    }

    @PutMapping("/doneTaskById/{id}")
    private ResponseEntity<?> doneTaskById(@PathVariable Integer id) {

        return ResponseEntity.ok(todoService.doneTaskTodo(id));
    }

    @GetMapping("/getTaskByUsernameAndCreated/{username}/{created}")
    private ResponseEntity<?> getTaskByUsernameAndCreated(@PathVariable String username, @PathVariable Date created) {

        return ResponseEntity.ok(todoService.getTodoByUsernameAndDate(username,created));
    }

}
