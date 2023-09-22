import axios from 'axios';

const API_URL = ''

//crear una nueva tarea
const createTarea = async (tareaData, token) =>{
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL, tareaData, config)

    return response.data
}

//obtener las tareas
const getTareas = async (token) =>{
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL, config)

    return response.data
}

//borrar tarea
const deleteTarea = async (id, token) =>{
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.delete(API_URL + id, config)

    return response.data
}

const tareaService ={
    createTarea,
    getTareas,
    deleteTarea
}

export default tareaService