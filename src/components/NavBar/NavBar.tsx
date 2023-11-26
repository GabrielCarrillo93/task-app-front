import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TaskService } from "../../services/TaskService";
import { Task } from "../../types/Task";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { BasketFill, PersonFill } from "react-bootstrap-icons";
import { toast } from "react-toastify";
import ModalAgregarTarea from "../ModalAgregarTarea/ModalAgregarTarea";


const NavBar = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    }

    const handleCloseModal = () =>{
        setShowModal(false)
    }

    const createTask = async (newTask: Task) => {
        try{
            const res = await TaskService.createTask(newTask);
            console.log('Nueva tarea agregada', res.id);
            navigate(`/detalle/${res.id}`);

            toast.success('Tarea creada con éxito', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 2000
            })
        } catch(error){
            toast.error('Error al creat la tarea', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 2000
            });
            console.error('Error al crear la tarea:', error)
        }
    }
    
    return (
        <>
        <Navbar 
            expand="lg" 
            className="bg-body-tertiary" 
            data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">Desarrollo en Argentina</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Inicio</Nav.Link>
                    <NavDropdown title="Tareas" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#PORHACER">Por hacer</NavDropdown.Item>
                        <NavDropdown.Item href="#ENPRODUCCION">En Produccion</NavDropdown.Item>
                        <NavDropdown.Item href="#PORTESTEAR">Por testear</NavDropdown.Item>
                        <NavDropdown.Item href="#COMPLETADA">Completada</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link onClick={handleShowModal}>Agregar tarea</Nav.Link>
                </Nav>
                <Nav className="d-none d-lg-flex ms-auto">
                    <Nav.Link>
                        <BasketFill />
                    </Nav.Link>
                    <Nav.Link>
                        <PersonFill/>
                    </Nav.Link>
                </Nav>
                <Nav className="d-lg-none">
                    <Nav.Link>Ticket</Nav.Link>
                    <Nav.Link>Usuario</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <ModalAgregarTarea 
            showModal={showModal}
            handleClose={handleCloseModal}
            createTask={createTask}
            />
        </>
    )
}

export default NavBar