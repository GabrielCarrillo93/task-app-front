import { BsBookmarkFill, BsCheck, BsGear, BsPencilSquare } from 'react-icons/bs'
import './Selector.css'

interface SelectorProps{
    onSelectedCategory: (categoria: string) => void
}
const Selector: React.FC<SelectorProps> = ({onSelectedCategory}) => {
    const categorias = [
        {nombre: 'PORHACER', icono: <BsCheck/>, titulo: "Por hacer"},
        {nombre: 'ENPRODUCCION', icono: <BsGear/>, titulo: "En producción"},
        {nombre: 'PORTESTEAR', icono: <BsPencilSquare/>, titulo: "Por testear"},
        {nombre: 'COMPLETADA', icono: <BsBookmarkFill/>, titulo: "Completada"}
    ];

    

    return (
        <section id='selector-categorias' className='selector-categorias'>
            <h1>Seleccione una categoría</h1>
            <div className='botonera'>
                {categorias.map((cat, i) =>(
                    <button key={i}
                        onClick={() => {onSelectedCategory(cat.nombre)}}>{cat.icono} {cat.titulo}</button>
                ))}
            </div>
        </section>
    )
}

export default Selector