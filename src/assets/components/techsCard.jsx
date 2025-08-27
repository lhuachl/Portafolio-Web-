import LoreTechCard from './LoreTechCard';
import { useState } from 'preact/hooks';

const TechsCard = ({ tech, techLore = null }) => {
    const [imageError, setImageError] = useState(false);
    
    const handleImageError = () => {
        setImageError(true);
    };

    return (
        <div className="tech-card">
            {!imageError ? (
                <img 
                    src={tech.image} 
                    height={100} 
                    width={100} 
                    onError={handleImageError}
                    alt={tech.name}
                />
            ) : (
                <div className="tech-card-placeholder">
                    {tech.name.charAt(0)}
                </div>
            )}
            <h3>{tech.name}</h3>
            <p>{tech.description}</p>
            
            {techLore && (
                <div className="tech-card-actions">
                    <LoreTechCard techLore={techLore} />
                </div>
            )}
        </div>
    );
};

export default TechsCard;
