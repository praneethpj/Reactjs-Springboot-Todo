package com.praneethpj.todoapp.controller;


import com.praneethpj.todoapp.model.TodoModel;
import com.praneethpj.todoapp.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class TodoController {

    @Autowired
    private TodoService todoService;
    //private final String HOST = "http://localhost:3001";


    @PostMapping("/addTodo")
    private ResponseEntity<TodoModel> addTodo(@RequestBody TodoModel todo) {
        return ResponseEntity.ok(todoService.addTodo(todo));
    }

    @PutMapping("/upudateTodo")
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
        if (username == null) {
            return (ResponseEntity<?>) ResponseEntity.badRequest().body(HttpStatus.NO_CONTENT);
        }
        return ResponseEntity.ok(todoService.getAllTodos(username,pageNo,pageSize));
    }

    @GetMapping("/getTaskById/{id}")
    private ResponseEntity<?> getTaskById(@PathVariable Integer id) {
        if (id.toString().isEmpty()) {
            return (ResponseEntity<?>) ResponseEntity.badRequest().body(HttpStatus.NO_CONTENT);
        }
        return ResponseEntity.ok(todoService.getTaskById(id));
    }

    @PutMapping("/doneTaskById/{id}")
    private ResponseEntity<?> doneTaskById(@PathVariable Integer id) {
        if (id.toString().isEmpty()) {
            return (ResponseEntity<?>) ResponseEntity.badRequest().body(HttpStatus.NO_CONTENT);
        }
        return ResponseEntity.ok(todoService.doneTaskTodo(id));
    }

}
