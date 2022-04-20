import { Link } from 'react-router-dom' 

const Footer = () => {
    return (
        <>
            <footer className="footer container-fluid mt-5 bg-dark">
                <div className="row">
                   
                </div>
                <div className="row mb-3">
                    <div className="col-12 text-center text-white">
                       
                            <div className="redes__sociales">
                                
                            </div>
                    </div>
                </div>
                <div  style={{padding:'1rem'}} className="footer-final row text-center">
                    <h4 className="text-white">© Valhalla - Todos los derechos reservados</h4>
                    <span className="text-white"  style={{padding:'1rem'}}>Realizado por Ezequiel Garriga</span>
                </div>
            </footer>
        </>
    )
}

export default Footer