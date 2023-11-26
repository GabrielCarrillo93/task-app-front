import './App.css'
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer/Footer"
import NavBar from "./components/NavBar/NavBar"
import AppRoutes from "./routes/AppRoutes"
import { BrowserRouter as Router } from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css';

function App() {
  

  return (
        <>
            <Router>
            <ToastContainer/>
            <NavBar />
            <AppRoutes/>
            <Footer/>
            </Router>
        </>
  )
}

export default App
