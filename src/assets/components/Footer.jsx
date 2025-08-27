import '../../style.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Alex Joshua Villegas Ibañez</h3>
                    <p>Full Stack Developer</p>
                </div>
                <div className="footer-section">
                    <h4>Tecnologías</h4>
                    <p>React • Python • FastAPI • Node.js • TypeScript</p>
                </div>
                <div className="footer-section">
                    <h4>Contacto</h4>
                    <p>GitHub: <a href="https://github.com/lhuachl" target="_blank" rel="noopener noreferrer">@lhuachl</a></p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2025 Alex Joshua Villegas Ibañez. Todos los derechos reservados.</p>
                <p className="footer-tech">Desarrollado con Preact + Vite • Tema inspirado en StarCraft 2</p>
            </div>
        </footer>
    );
};

export default Footer;
