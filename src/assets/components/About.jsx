import { Terminal, Code, Shield, Dumbbell } from 'lucide-react';
import '../../style.css'; 

const About = () => {
    return (
        <section className="about">
            <h2>Sobre Mí</h2>
            <p>Soy Alex Joshua Villegas Ibañez, estudiante de segundo año de Ingeniería de Sistemas. Mi pasión por la programación comenzó desde pequeño, influenciado por mi padre quien se dedicaba al desarrollo full stack y ciberseguridad. Esta exposición temprana me permitió desarrollar una comprensión profunda del área tecnológica.</p>
            <p>Mi enfoque se centra en crear soluciones robustas y seguras, combinando conocimientos en desarrollo frontend y backend con un fuerte interés en la ciberseguridad.</p>
            
            <div className="interests-section">
                <h3 className="interests-title">Intereses Adicionales</h3>
                <div className="interests-grid">
                    <div className="interest-item">
                        <Terminal size={16} />
                        <span>Estrategia RTS</span>
                    </div>
                    <div className="interest-item">
                        <Dumbbell size={16} />
                        <span>Entrenamiento</span>
                    </div>
                    <div className="interest-item">
                        <Shield size={16} />
                        <span>Ciberseguridad</span>
                    </div>
                    <div className="interest-item">
                        <Code size={16} />
                        <span>Aprendizaje Continuo</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
