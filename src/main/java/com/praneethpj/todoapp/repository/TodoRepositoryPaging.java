package com.praneethpj.todoapp.repository;

import com.praneethpj.todoapp.model.TodoModel;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;


import java.util.List;

public interface TodoRepositoryPaging extends PagingAndSortingRepository<TodoModel, Integer> {

    public List<TodoModel> findByUsernameOrderByModifiedDesc(@Param("username") String username, Pageable pageable);


}
