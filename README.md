# Reactjs-Springboot-Todo
### Setup Guide

##### Frontend 
git clone -b frontend https://github.com/praneethpj/Reactjs-Springboot-Todo.git 

npm install 

npm start

http://localhost:3001/😃

##### Backend 
git clone -b backend https://github.com/praneethpj/Reactjs-Springboot-Todo.git

Please create a database name as todolist
and replace MySQL credentials into application. properties.

```
spring.datasource.url = jdbc:mysql://localhost:3306/todolist?zeroDateTimeBehavior=convertToNull&useSSL=false&serverTimezone=UTC&allowPublicKeyRetrieval=true
spring.datasource.username = root
spring.datasource.password = root
```

mvn clean install

mvn spring-boot:run

##### Swagger 

http://localhost:8080/swagger-ui/

![alt text](https://github.com/praneethpj/Reactjs-Springboot-Todo/blob/frontend/1.png)
![alt text](https://github.com/praneethpj/Reactjs-Springboot-Todo/blob/frontend/2.png)

