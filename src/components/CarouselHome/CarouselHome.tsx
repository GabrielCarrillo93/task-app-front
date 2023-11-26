import { Carousel } from "react-bootstrap"

const CarouselHome = () => {
    return (
        <Carousel 
            data-bs-theme="dark">
            <Carousel.Item>
                <img 
                    className="d-block w-100"
                    style={{maxHeight: "500px", objectFit: "cover"}}
                    src="https://img.freepik.com/foto-gratis/hermosa-mujer-joven-oficina-casa-trabajando-casa-concepto-teletrabajo_144627-46787.jpg?w=900&t=st=1700748361~exp=1700748961~hmac=4a2dca3417bbcd27f58b3194b0bffe9e76f6be46b0c9452973727e4eeedb9c21" 
                    alt="" />
            </Carousel.Item>

            <Carousel.Item>
                <img 
                    className="d-block w-100"
                    style={{maxHeight: "500px", objectFit: "cover"}}
                    src="https://img.freepik.com/foto-gratis/colegas-masculinos-femeninos-irreconocibles-mirando-pantalla-portatil-oficina_1098-17852.jpg?w=900&t=st=1700748372~exp=1700748972~hmac=03eee9539595d0318228d422bdf5b6a4a55134a57cb7fb58a7d0fedf91e0b8e5" 
                    alt="" />
            </Carousel.Item>

            <Carousel.Item>
                <img 
                    className="d-block w-100"
                    style={{maxHeight: "500px", objectFit: "cover"}}
                    src="https://img.freepik.com/foto-gratis/cerca-manos-ingeniero-escribiendo-teclado-oficina-casa_482257-23398.jpg?w=1060&t=st=1700748377~exp=1700748977~hmac=e331a004d9e4072c9c6d2fa30b1a0760c0b22f111b2cf8fe7162374fec24fe9d" 
                    alt="" />
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselHome