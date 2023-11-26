import { useEffect, useState } from "react"
import { Task } from "../../types/Task";
import Selector from "../Selector/Selector";
import Tareas from "../Tareas/Tareas";
import { TaskService } from "../../services/TaskService";

const Categorias = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>('');

    useEffect(() =>{
        const fetchTasks = async () =>{
            const taskData = await TaskService.getAllTasks()
            setTasks(taskData);
        }

        fetchTasks()
    },[])

    const filteredTasks = selectedCategory ? tasks.filter(task => task.estado.toUpperCase() === selectedCategory.toUpperCase()) : tasks; 
    
    return (
        <div>
            <Selector onSelectedCategory={setSelectedCategory}/>
            <Tareas tasks={filteredTasks}/>
        </div>
    )
}

export default Categorias