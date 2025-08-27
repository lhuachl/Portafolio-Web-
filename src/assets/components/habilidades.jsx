import React, { useState } from 'react';

const certificaciones = [
    {
        titulo: 'Certificación React',
        institucion: 'Platzi',
        imagen: 'https://via.placeholder.com/300x180?text=React',
        descripcion: 'Curso avanzado de React.js',
    },
    {
        titulo: 'Certificación JavaScript',
        institucion: 'Udemy',
        imagen: 'https://via.placeholder.com/300x180?text=JavaScript',
        descripcion: 'Fundamentos de JavaScript moderno',
    },
    {
        titulo: 'Certificación CSS',
        institucion: 'Coursera',
        imagen: 'https://via.placeholder.com/300x180?text=CSS',
        descripcion: 'Diseño web con CSS',
    },
];

const Habilidades = () => {
    const [indice, setIndice] = useState(0);

    const anterior = () => {
        setIndice((prev) => (prev === 0 ? certificaciones.length - 1 : prev - 1));
    };

    const siguiente = () => {
        setIndice((prev) => (prev === certificaciones.length - 1 ? 0 : prev + 1));
    };

    const cert = certificaciones[indice];

    return (
        <div style={{ maxWidth: 350, margin: 'auto', textAlign: 'center' }}>
            <h2>Certificaciones</h2>
            <div style={{ border: '1px solid #ccc', borderRadius: 8, padding: 16 }}>
                <img src={cert.imagen} alt={cert.titulo} style={{ width: '100%', borderRadius: 8 }} />
                <h3>{cert.titulo}</h3>
                <p><strong>{cert.institucion}</strong></p>
                <p>{cert.descripcion}</p>
                <div>
                    <button onClick={anterior}>&lt;</button>
                    <span style={{ margin: '0 10px' }}>{indice + 1} / {certificaciones.length}</span>
                    <button onClick={siguiente}>&gt;</button>
                </div>
            </div>
        </div>
    );
};

export default Habilidades;