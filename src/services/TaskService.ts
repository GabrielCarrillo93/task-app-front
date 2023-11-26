import { Task } from "../types/Task";

const BASE_URL = "https://task-app-back-g81r.onrender.com/tasks";

export const TaskService = {
    getAllTasks: async (): Promise<Task[]> => {
        const resp = await fetch(`${BASE_URL}`);
        const data = await resp.json();
        return data;
    },

    getOneTask: async (id: number): Promise<Task> =>{
        const resp = await fetch(`${BASE_URL}/${id}`);
        const data = await resp.json();
        return data
    },

    getTaskCategory: async (cat: string): Promise<Task[]> =>{
        const resp = await fetch(`${BASE_URL}?estado=${cat}`);
        const data = await resp.json();
        return data
    },

    deleteTask: async (id: number) : Promise<void> =>{
        await fetch(`${BASE_URL}/${id}`, {
            method: 'DELETE',
        });
    },

    updateStateTask: async (id: number, newState: string): Promise<Task> =>{
        return fetch (`${BASE_URL}/${id}`,{
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                estado: newState
            })
        })
        .then(res => res.json())
        .then(json => {
            return json;
        })
        .catch(error => error);
    },

    createTask:async (task: Task): Promise<Task> => {
        const resp = await fetch(`${BASE_URL}`,{
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(task)
        });
        const data = await resp.json();
        return data;
    }
}