package com.praneethpj.todoapp.service;

import com.praneethpj.todoapp.model.TodoModel;
import com.praneethpj.todoapp.repository.TodoRepository;
import org.assertj.core.util.Lists;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.*;

import static org.junit.jupiter.api.Assertions.*;

class TodoServiceTest {

    @Mock
    private TodoRepository todoRepository;

    @InjectMocks
    TodoService todoService;



    @BeforeEach
    void setup() throws Exception{
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void addTodo() {
        TodoModel todoModel=new TodoModel();
        todoModel.setTitle("Unit Test Title");
        todoModel.setContent("Unit Test Content");
        todoModel.setUsername("UnitTest");
        todoModel.setStatus(true);

        TodoModel Expected_todoModel=new TodoModel();
        Expected_todoModel.setTitle("Unit Test Title");
        Expected_todoModel.setContent("Unit Test Content");
        Expected_todoModel.setUsername("UnitTest");
        Expected_todoModel.setStatus(true);

        when(todoRepository.save(todoModel)).thenReturn(Expected_todoModel);

        TodoModel response_todoModel=todoService.addTodo(todoModel);

        assertNotNull(response_todoModel);
        assertEquals(todoModel,response_todoModel);

    }

    @Test
    void updateTodo() {
        TodoModel todoModel=new TodoModel();
        todoModel.setId(1);
        todoModel.setTitle("Unit Test Title");
        todoModel.setContent("Unit Test Content");
        todoModel.setUsername("UnitTest");
        todoModel.setStatus(true);

        TodoModel Expected_todoModel=new TodoModel();
        Expected_todoModel.setId(1);
        Expected_todoModel.setTitle("Unit Test Title updated");
        Expected_todoModel.setContent("Unit Test Content updated");
        Expected_todoModel.setUsername("UnitTest updated");
        Expected_todoModel.setStatus(false);

        when(todoRepository.findById(1)).thenReturn(Optional.of(todoModel));
        when(todoRepository.save(todoModel)).thenReturn(Expected_todoModel);

        TodoModel response_todoModel=todoService.updateTodo(todoModel);

        assertNotNull(response_todoModel);
        assertEquals(response_todoModel,Expected_todoModel);
    }

    @Test
    void doneTaskTodo() {
        TodoModel todoModel=new TodoModel();
        todoModel.setId(1);
        todoModel.setStatus(true);

        TodoModel Expected_todoModel=new TodoModel();
        Expected_todoModel.setId(1);
        Expected_todoModel.setStatus(false);

        when(todoRepository.getById(1)).thenReturn(todoModel);
        when(todoRepository.save(todoModel)).thenReturn(Expected_todoModel);

        when(todoRepository.findById(1)).thenReturn(Optional.of(todoModel));
        TodoModel response_todoModel=todoService.doneTaskTodo(todoModel.getId());

        assertNotNull(response_todoModel);
        assertEquals(response_todoModel,Expected_todoModel);
    }

    @Test
    void deleteTodo() {

        TodoModel todoModel=new TodoModel();
        todoModel.setId(1);
        todoModel.setStatus(true);

        TodoModel Expected_todoModel=new TodoModel();
        Expected_todoModel.setId(1);
        Expected_todoModel.setStatus(false);

        when(todoRepository.findById(1)).thenReturn(Optional.of(todoModel));
        todoService.deleteTodo(todoModel.getId());
        verify(todoRepository).deleteById(any());
    }

    @Test
    void getAllTodos() {
        TodoModel todoModel=new TodoModel();
        todoModel.setTitle("Unit Test Title");
        todoModel.setContent("Unit Test Content");
        todoModel.setUsername("UnitTest");
        todoModel.setStatus(true);

        List<TodoModel>  Expected_todoModel= Lists.list( new TodoModel());
        Expected_todoModel.get(0).setTitle("Unit Test Title updated");
        Expected_todoModel.get(0).setContent("Unit Test Content updated");
        Expected_todoModel.get(0).setUsername("UnitTest updated");
        Expected_todoModel.get(0).setStatus(false);

        when(todoRepository.findByUsernameOrderByModifiedDesc("UnitTest")).thenReturn(Expected_todoModel);

        List<TodoModel> response_todoModel=todoService.getAllTodos("UnitTest",1,1);

        assertNotNull(response_todoModel);
        assertEquals(response_todoModel,Expected_todoModel);
    }

    @Test
    void getTaskById() {
        TodoModel todoModel=new TodoModel();
        todoModel.setTitle("Unit Test Title");
        todoModel.setContent("Unit Test Content");
        todoModel.setUsername("UnitTest");
        todoModel.setStatus(true);

        Optional<TodoModel>  Expected_todoModel= Optional.of(new TodoModel());
        Expected_todoModel.get().setTitle("Unit Test Title updated");
        Expected_todoModel.get().setContent("Unit Test Content updated");
        Expected_todoModel.get().setUsername("UnitTest updated");
        Expected_todoModel.get().setStatus(false);

        when(todoRepository.findById(anyInt())).thenReturn(Expected_todoModel);

        Optional<TodoModel> response_todoModel=todoService.getTaskById(1);

        assertNotNull(response_todoModel);
        assertEquals(response_todoModel,Expected_todoModel);
    }
}