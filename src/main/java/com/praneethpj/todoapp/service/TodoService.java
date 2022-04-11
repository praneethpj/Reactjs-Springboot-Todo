package com.praneethpj.todoapp.service;

import com.praneethpj.todoapp.exception.ApiRequestException;
import com.praneethpj.todoapp.model.TodoModel;
import com.praneethpj.todoapp.repository.TodoRepository;
import com.praneethpj.todoapp.repository.TodoRepositoryPaging;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TodoService {

    @Autowired
    private TodoRepository todoRepository;

    @Autowired
    private TodoRepositoryPaging todoRepositoryPaging;

    public TodoModel addTodo(TodoModel todo){
        if(todo==null){
            throw new NullPointerException("TodoModel doesn't exists");
        }
        return todoRepository.save(todo);
    }

    public TodoModel updateTodo(TodoModel todo){
        if( !todoRepository.findById(todo.getId()).isPresent()){
            throw new ApiRequestException("Doesn't exists the tasks for "+todo);
        }else if(!todoRepository.findById(todo.getId()).get().isStatus()){
            throw new ApiRequestException("This tasks is already done ");
        }
        TodoModel todoModel = new TodoModel();
        todoModel.setId(todoModel.getId());
        todoModel.setContent(todo.getContent());
        todoModel.setTitle(todo.getTitle());
        todoModel.setStatus(todo.isStatus());

        return todoRepository.save(todo);
    }

    public TodoModel doneTaskTodo(int todoid){
        if( !todoRepository.findById(todoid).isPresent()){
            throw new ApiRequestException("Doesn't exists the tasks for "+todoid);
        }else if(!todoRepository.findById(todoid).get().isStatus()){
            throw new ApiRequestException("This tasks is already done ");
        }
        TodoModel todoModel = todoRepository.getById(todoid);
        todoModel.setStatus(false);
        return todoRepository.save(todoModel);
    }

    public void deleteTodo(Integer id){
        if( !todoRepository.findById(id).isPresent()){
            throw new ApiRequestException("Doesn't exists the tasks for "+id);
        }

        todoRepository.deleteById(id);
    }

    public List<TodoModel> getAllTodos(String username,int pageNo,int pageSize){
        if(todoRepository.findByUsernameOrderByModifiedDesc(username).isEmpty()){
            throw new ApiRequestException("Doesn't exists the tasks for "+username);
        }

        Pageable paging = PageRequest.of(pageNo, pageSize, Sort.by("modified"));
        return todoRepositoryPaging.findByUsernameOrderByModifiedDesc(username,paging);

    }

    public Optional<TodoModel> getTaskById(int id)  {
        if( !todoRepository.findById(id).isPresent()){
            throw new ApiRequestException("Doesn't exists the tasks for  "+id);
        }
        return todoRepository.findById(id);
    }
}
