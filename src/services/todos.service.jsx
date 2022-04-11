import axios from "axios";
 

const instance = axios.create({
	baseURL: "http://localhost:8080/api/",
	headers: {},
	data: {}
});


export function insertTodo({title,content,username}) {
	//e.preventDefault();
    
	const data = {
    
        title: title,
		content: content,
        username: username,
        status: true
	};

	if (data.title != "" && data.content != "") 
        return instance.post("/addTodo", data);
}


export function getAll({username,page}){
  
    return instance.get("/getAllTodos/" + username+"?pageNo="+page);
}

export function getCountBy({username}){
  
    return instance.get("/getCountByUsername/" + username);
}

export function getTaskById({id}){
    return instance.get("/getTaskById/" + id);
}

export function removeTodo({id}){
    return instance.delete("/deleteTodo/" + id);
}

export function doneTodo({id}){
    return instance.put("/doneTaskById/" + id);
}

export function modifyTodo({id,title,content,username}){

  
    const data = {
        id: id,
        title: title,
		content:content,
		username:username,
		status:true
    }

    return instance.put("/updateTodo", data);
}