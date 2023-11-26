import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { Task } from "../types/Task";
import { TaskService } from "../services/TaskService";
import { ToastContainer, toast } from "react-toastify";
import { Check, HouseFill, Trash } from "react-bootstrap-icons";
import 'react-toastify/dist/ReactToastify.css';
import '/src/assets/styles/DetalleTarea.css'

const DetalleTarea = () => {
    const { taskId } = useParams<{ taskId?: string }>();
    const [task, setTask] = useState<Task | null>(null);
    const [estado, setEstado] = useState<string>('')
    const [relatedTasks, setRelatedTasks] = useState<Task[]>([])
    const navigate = useNavigate()


    useEffect(() => {
        const fetchTask = async () => {
            try {
                if (taskId && !isNaN(parseInt(taskId, 10))) {
                    const taskData = await TaskService.getOneTask(parseInt(taskId, 10))
                    setTask(taskData);

                    const tasksInCategory = await TaskService.getTaskCategory(taskData.estado);
                    setRelatedTasks(tasksInCategory);
                } else {
                    console.error('Identificador de tarea no válido')
                }
            } catch (error) {
                console.error('Error al cargar la tarea: ', error)
            }
        };

        fetchTask()
    }, [taskId])

    const handleUpdateState = async () => {
        if (estado !== '') {
            try {
                const updatedTask = await TaskService.updateStateTask(parseInt(taskId!, 10), estado);
                console.log(updatedTask);
                setTask(updatedTask);

                toast.success('Estado de la tarea actualizado correctamente', {
                    position: toast.POSITION.BOTTOM_RIGHT,
                    autoClose: 2000,
                });
            } catch (error) {
                toast.error('Error en la actualización del estado', {
                    position: toast.POSITION.BOTTOM_RIGHT,
                    autoClose: 2000,
                });
                console.error('Error al actualizar el estado: ', error)
            }
        } else {
            toast.error('Selecciona un estado válido',
                {
                    position: toast.POSITION.BOTTOM_RIGHT,
                    autoClose: 2000,
                });
            console.error('Selecciona un estado válido')
        }
    };

    const handleDeleteTask = async () => {
        try {
            if (taskId) {
                await TaskService.deleteTask(parseInt(taskId, 10));
                toast.success('Tarea eliminada correctamente', {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 5000
                });
                navigate('/');
            }
        } catch (error) {
            toast.error('Error al borrar la tarea', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 2000
            });
            console.error('Error al eliminar la tarea: ', error)
        }
    }


    return (
        <>
            <ToastContainer />
            {task && (
                <div className="contenedor">
                    <div className="task">
                            <img src={task.imagen} alt={task.titulo} />
                        <div className="taskContent">
                            <h2>{task.titulo}</h2>
                            <p><span>ID:</span> {task.id}</p>
                            <p><span>Estado actual:</span> {task.estado}</p>
                            <p><span>Tiempo:</span> {task.tiempo}</p>
                            <p><span>Responsable:</span> {task.responsable}</p>
                            <p><span>Descripción:</span> {task.descripcion}</p>
                            <select
                                className="form-select"
                                onChange={(e) => setEstado(e.target.value)}
                                value={estado}
                            >
                                <option value="">Seleccione un estado</option>
                                <option value="PORHACER">Por hacer</option>
                                <option value="ENPRODUCCION">En producción</option>
                                <option value="PORTESTEAR">Por testear</option>
                                <option value="COMPLETADA">Completada</option>
                            </select>
                            <div className="botones">
                                <button
                                    id="eliminar"
                                    onClick={handleDeleteTask}
                                ><Trash />Eliminar tarea</button>
                                <button
                                    id="actualizar"
                                    onClick={handleUpdateState}
                                ><Check />Actualizar estado</button>
                                <button
                                    id="volver"
                                    onClick={() => navigate('/')}>
                                        <HouseFill/> Inicio
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="relatedTasks">
                        <h2>tareas relacionadas</h2>
                        <div className="relatedLista">
                            {relatedTasks.map((rel) => (
                                <div key={rel.id} >
                                    <div className="relatedCard">
                                        <img src={rel.imagen} alt={rel.titulo} />
                                        <div className="relatedText">
                                            <h5>{rel.titulo}</h5>
                                            <p>Tiempo: {rel.tiempo}</p>
                                            <p>Responsable: {rel.responsable}</p>
                                        </div>
                                        <div className="relatedFooter">
                                            <button
                                                onClick={() => navigate(`/detalle/${rel.id}`)}>Ver más</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>)
            }
        </>
    )
}

export default DetalleTarea