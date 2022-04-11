package com.praneethpj.todoapp.service;

import com.praneethpj.todoapp.model.TodoModel;

import java.util.Date;
import java.util.List;
import java.util.Optional;

public interface TodoServiceInit {

    TodoModel addTodo(TodoModel todo);
    TodoModel updateTodo(TodoModel todo);
    TodoModel doneTaskTodo(int todoid);
    void deleteTodo(Integer id);
    List<TodoModel> getAllTodos(String username, int pageNo, int pageSize);
    Long getPageCount(String username);
    Optional<TodoModel> getTaskById(int id);
    List<TodoModel> getTodoByUsernameAndDate(String username, Date created);
}
