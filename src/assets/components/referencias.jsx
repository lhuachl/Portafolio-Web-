import '../../style.css';

const Referencias = () => {
    return (
        <section className="referencias">
            <h2>Proyectos y Referencias</h2>
            <div className="referencias-grid">
                <div className="proyecto-card">
                    <h3>🚀 RiskHub.tech</h3>
                    <p><strong>Proyecto Desplegado</strong></p>
                    <a href="https://riskhub.tech" target="_blank" rel="noopener noreferrer">Ver sitio web</a>
                    <p className="proyecto-desc">Plataforma para gestión de riesgos empresariales</p>
                </div>
                <div className="proyecto-card">
                    <h3>⚡ EZql Library</h3>
                    <p><strong>Librería TypeScript (Work in Progress)</strong></p>
                    <a href="https://github.com/lhuachl/EZql.git" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                    <p className="proyecto-desc">Librería para manejo simplificado de rutas y SQL</p>
                </div>
                <div className="proyecto-card">
                    <h3>💻 GitHub Profile</h3>
                    <p><strong>Repositorios y Contribuciones</strong></p>
                    <a href="https://github.com/lhuachl" target="_blank" rel="noopener noreferrer">Ver perfil de GitHub</a>
                    <p className="proyecto-desc">Explora mis proyectos y contribuciones open source</p>
                </div>
            </div>
        </section>
    );
};

export default Referencias;
