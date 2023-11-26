import { Task } from "../../types/Task"
import { Link } from "react-router-dom"
import './Tareas.css'


const Tareas = ({tasks} : {tasks: Task[]}) => {
    const categorias = [{titulo: "Por hacer", clave: 'PORHACER'}, {titulo: "En produccion", clave: 'ENPRODUCCION'}, {titulo: "Por testear", clave: 'PORTESTEAR'}, {titulo: "Completada", clave: 'COMPLETADA'}];

  return (
        <section className="contenedor-categorias" id="categorias">
            {categorias.map((cat, i) => (
                <section key={i} className="categoria" id={cat.clave}>
                    <h3>{cat.titulo}</h3>
                    <div className="lista">
                        {tasks.filter(task => task.estado === cat.clave.toUpperCase()).map((task) => (
                            <div className="tareaCard" key={task.id}>
                                <div>
                                    <img
                                    src={task.imagen} alt={task.titulo} />
                                    <div>
                                        <div className="textoCard">
                                            <h5>{task.titulo}</h5>
                                            <p>Tiempo: {task.tiempo}</p>
                                            <p>Responsable: {task.responsable}</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="footerCard">
                                        <Link to={`/detalle/${task.id}`}>Ver más</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            ))}
        </section>
  )
}

export default Tareas