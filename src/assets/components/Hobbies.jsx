import '../../style.css';

const Hobbies = () => {
    return (
        <section className="hobbies">
            <h2>Hobbies e Intereses</h2>
            <div className="hobbies-grid">
                <div className="hobby-card">
                    <div className="hobby-icon">🎮</div>
                    <h3>StarCraft 2</h3>
                    <p>Fanático de la estrategia en tiempo real y los esports. Me fascina la complejidad táctica y la precisión que requiere este juego.</p>
                </div>
                <div className="hobby-card">
                    <div className="hobby-icon">💪</div>
                    <h3>Entrenamiento</h3>
                    <p>Mantengo un estilo de vida activo con rutinas de ejercicio regulares. Creo en el equilibrio entre mente y cuerpo para un rendimiento óptimo.</p>
                </div>
                <div className="hobby-card">
                    <div className="hobby-icon">🔒</div>
                    <h3>Ciberseguridad</h3>
                    <p>Explorando constantemente nuevas vulnerabilidades y técnicas de seguridad. La ciberseguridad es tanto una pasión como una necesidad profesional.</p>
                </div>
                <div className="hobby-card">
                    <div className="hobby-icon">🧠</div>
                    <h3>Aprendizaje Continuo</h3>
                    <p>Siempre investigando nuevas tecnologías y frameworks. Actualmente profundizando en C++ por su importancia en seguridad de sistemas.</p>
                </div>
            </div>
        </section>
    );
};

export default Hobbies;