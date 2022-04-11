package com.praneethpj.todoapp.exception;

public class ApiRequestException extends RuntimeException{
    public ApiRequestException() {
    }

    public ApiRequestException(String s) {
        super(s);
    }
}
