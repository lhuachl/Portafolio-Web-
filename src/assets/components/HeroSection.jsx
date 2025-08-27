import '../../style.css';

export default function HeroSection() {
    return (
        <section className="hero">
            <div className="hero-main">
                <div className="hero-text">
                    <h1>Alex Joshua Villegas Ibañez</h1>
                    <h2 className="hero-title">Full Stack Developer</h2>
                    <p>Desarrollador apasionado por la tecnología desde temprana edad, con experiencia en desarrollo full stack y ciberseguridad. Especializado en crear soluciones innovadoras con tecnologías modernas.</p>
                    <div className="console-status">
                        <span className="status-indicator online"></span>
                        <span className="status-text">Sistema operativo • En línea</span>
                    </div>
                </div>
                <div className="hero-profile">
                    <div className="profile-container">
                        <img src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg" alt="Alex Joshua Villegas" width={"150px"} height={"150px"} />
                        <div className="profile-info">
                            <div className="info-line">
                                <span className="info-label">Status:</span>
                                <span className="info-value">Active Developer</span>
                            </div>
                            <div className="info-line">
                                <span className="info-label">Location:</span>
                                <span className="info-value">Bolivia</span>
                            </div>
                            <div className="info-line">
                                <span className="info-label">Focus:</span>
                                <span className="info-value">Full Stack</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
