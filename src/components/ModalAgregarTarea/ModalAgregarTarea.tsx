import { Task } from "../../types/Task";
import { useFormik } from "formik";
import { Button, Form, Modal } from "react-bootstrap";
import * as Yup from "yup";
import './ModalAgregarTarea.css'

type ModalAgregarTareaProps = {
    showModal: boolean;
    handleClose: () => void;
    createTask: (newTask: Task) => void;
};

const ModalAgregarTarea: React.FC<ModalAgregarTareaProps> = ({ showModal, handleClose, createTask }) => {
    const mensaje: string = 'Este campo es obligatorio'
    const validationSchema = Yup.object({
        titulo: Yup.string().required(mensaje),
        descripcion: Yup.string().required(mensaje),
        tiempo: Yup.number().required(mensaje).integer('El tiempo debe ser en números').positive('El tiempo debe ser mayor a 0'),
        imagen: Yup.string().required(mensaje),
        responsable: Yup.string().required(mensaje),
        estado: Yup.string().required(mensaje),
    })

    const formik = useFormik({
        initialValues: {
            titulo: '',
            descripcion: '',
            tiempo: 0,
            imagen: 'https://images.yourstory.com/cs/1/b3cc3444ab5e11e88691f70342131e20/Whatissoftwareandtypesofsoftwarewithexamples1575272423828jpg',
            responsable: '',
            estado: ''
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            values.estado.toUpperCase;
            await createTask(values);
            handleClose();
        }
    });
    return (
        <Modal show={showModal} onHide={handleClose} >
            <Modal.Header closeButton className="fondo">
                <Modal.Title>Agregue una tarea</Modal.Title>
            </Modal.Header>
            <Modal.Body className="fondo">
                <Form onSubmit={formik.handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="titulo" className="form-label">Título</label>
                        <input
                            type="text"
                            className="form-control"
                            id="titulo"
                            name="titulo"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.titulo}
                        />
                        {formik.touched.titulo && formik.errors.titulo ? (<div className="text-danger">{formik.errors.titulo}</div>) : null}
                    </div>
                    <div className="mb-3 mt-1">
                        <label htmlFor="descripcion" className="form-label">Descripcion</label>
                        <textarea
                            className="form-control"
                            id="descripcion"
                            name="descripcion"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.descripcion}
                            rows={3}
                            cols={50}
                        />
                        {formik.touched.descripcion && formik.errors.descripcion ? (<div className="text-danger">{formik.errors.descripcion}</div>) : null}
                    </div>
                    <div className="mb-3 mt-1">
                        <label htmlFor="tiempo" className="form-label">Tiempo</label>
                        <input
                            type="number"
                            placeholder="En días"
                            className="form-control"
                            id="tiempo"
                            name="tiempo"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.tiempo}
                        />
                        {formik.touched.tiempo && formik.errors.tiempo ? (<div className="text-danger">{formik.errors.tiempo}</div>) : null}
                    </div>
                    <div className="mb-3 mt-1">
                        <label htmlFor="imagen" className="form-label">Imagen</label>
                        <input
                            type="text"
                            className="form-control"
                            id="imagen"
                            name="imagen"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.imagen}
                        />
                        {formik.touched.imagen && formik.errors.imagen ? (<div className="text-danger">{formik.errors.imagen}</div>) : null}
                    </div>
                    <div className="mb-3 mt-1">
                        <label htmlFor="responsable" className="form-label">Responsable</label>
                        <input
                            type="text"
                            className="form-control"
                            id="responsable"
                            name="responsable"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.responsable}
                        />
                        {formik.touched.responsable && formik.errors.responsable ? (<div className="text-danger">{formik.errors.responsable}</div>) : null}
                    </div>
                    <div className="mb-3 mt-1">
                        <Form.Select
                            id="estado"
                            name="estado"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.estado}
                        >
                            <option value="">Seleccione un estado</option>
                            <option value="PORHACER">Por hacer</option>
                            <option value="ENPRODUCCION">En producción</option>
                            <option value="PORTESTEAR">Por testear</option>
                            <option value="COMPLETADA">Completada</option>
                        </Form.Select>
                        {formik.touched.estado && formik.errors.estado ? (<div className="text-danger">{formik.errors.estado}</div>) : null}
                    </div>
                    <div className="botoncito">
                        <Button
                            className="boton"
                            type="submit">Enviar
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    )
};

export default ModalAgregarTarea;