import axios from 'axios'

const baseUrl = "http://localhost:3000"

const getAllTodo = (setTodo)=>{
    axios.get(baseUrl)
    .then(({data})=>{
        console.log('data ---->' + data);
        setTodo(data)
    })
}

const addTodo = (text, setText, setTodo)=>{
    axios.post(`${baseUrl}/save`,{text})
    .then((data)=>{
        console.log(data);
        getAllTodo(setTodo)
        setText('')
    })
}

const updateTodo = (todoId, text, setTodo, setText, setIsUpdating)=>{
    axios.post(`${baseUrl}/update`,{_id:todoId, text})
    .then((data)=>{
        console.log(data);
        setText('')
        setIsUpdating(false)
        getAllTodo(setTodo)
    })
}

const deleteTodo = (todoId,setTodo)=>{
    axios.post(`${baseUrl}/delete`,{_id:todoId})
    .then((data)=>{
        
        getAllTodo(setTodo)
    })
}

export  { getAllTodo, addTodo, updateTodo, deleteTodo }

