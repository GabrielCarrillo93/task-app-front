import { Facebook, Instagram } from "react-bootstrap-icons"
import { FaXTwitter } from 'react-icons/fa6'
1
const Footer = () => {
    return (
        <footer className="container">
            <div className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <a href="" className="mx-2 text-body-secondary">&copy; Gabriel Ivan Carrillo</a>
                    <span>Argentina Programa</span>
                </div>
                <ul className="nav justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><a href="#" className="text-body-secondary"><Facebook/></a></li>
                    <li className="ms-3"><a href="#" className="text-body-secondary"><Instagram/></a></li>
                    <li className="ms-3"><a href="#" className="text-body-secondary"><FaXTwitter/></a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer