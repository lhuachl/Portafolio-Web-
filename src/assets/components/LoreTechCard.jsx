import { useState, useEffect } from 'preact/hooks';
import { createPortal } from 'preact/compat';
import '../../style.css';

// Componente dinámico que muestra cómo conozco cada tecnología
const LoreTechCard = ({ techLore }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  const handleToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isVisible) {
      setIsVisible(true);
      // Prevenir scroll cuando se abre el modal
      document.body.style.overflow = 'hidden';
    } else {
      setIsVisible(false);
      // Restaurar scroll cuando se cierra
      document.body.style.overflow = 'auto';
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsVisible(false);
      document.body.style.overflow = 'auto';
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setIsVisible(false);
      document.body.style.overflow = 'auto';
    }
  };

  useEffect(() => {
    if (isVisible) {
      // Agregar listener de teclado
      document.addEventListener('keydown', handleKeyDown);
      
      // Importación dinámica de GSAP para evitar errores
      import('gsap').then(({ gsap }) => {
        const modal = document.querySelector('.lore-tech-modal');
        const overlay = document.querySelector('.modal-overlay');
        const header = document.querySelector('.console-header');
        const content = document.querySelector('.console-content');
        const lines = document.querySelectorAll('.console-line');
        const text = document.querySelector('.console-text');

        // Timeline principal
        const tl = gsap.timeline();

        // Animación del overlay
        gsap.fromTo(overlay, 
          { opacity: 0 }, 
          { duration: 0.3, opacity: 1, ease: "power2.out" }
        );

        // Animación del modal con efecto rebote
        tl.fromTo(modal, 
          { 
            scale: 0.5, 
            y: 100, 
            opacity: 0,
            rotationY: 15
          }, 
          { 
            duration: 0.6, 
            scale: 1, 
            y: 0, 
            opacity: 1,
            rotationY: 0,
            ease: "back.out(1.7)"
          }
        );

        // Animación deslizante del header
        tl.fromTo(header,
          { x: -200, opacity: 0 },
          { 
            duration: 0.5, 
            x: 0, 
            opacity: 1, 
            ease: "power3.out"
          },
          "-=0.3"
        );

        // Animación del contenido
        tl.fromTo(content,
          { y: 30, opacity: 0 },
          { 
            duration: 0.4, 
            y: 0, 
            opacity: 1, 
            ease: "power2.out"
          },
          "-=0.2"
        );

        // Animación escalonada de las líneas
        tl.fromTo(lines,
          { x: -30, opacity: 0 },
          { 
            duration: 0.3, 
            x: 0, 
            opacity: 1, 
            stagger: 0.1,
            ease: "power2.out"
          },
          "-=0.1"
        );

        // Animación especial del texto principal
        if (text) {
          tl.fromTo(text,
            { 
              y: 40, 
              opacity: 0,
              scale: 0.95
            },
            { 
              duration: 0.5, 
              y: 0, 
              opacity: 1,
              scale: 1,
              ease: "elastic.out(1, 0.5)"
            },
            "-=0.2"
          );
        }

        // Efecto de pulsación en el cursor
        const cursor = document.querySelector('.cursor');
        if (cursor) {
          gsap.to(cursor, {
            duration: 0.8,
            scale: 1.2,
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut"
          });
        }

        // Efecto de glow en el modal
        gsap.to(modal, {
          duration: 2,
          boxShadow: "0 0 30px rgba(0, 255, 136, 0.4)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      }).catch(() => {
        // Si GSAP falla, usar CSS básico
        console.log('GSAP no disponible, usando animaciones CSS básicas');
      });
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isVisible]);

  // Modal usando portal para mejor control del z-index
  const Modal = () => (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="lore-tech-modal">
        <div className="console-header">
          <span className="console-title">tech_history.log</span>
          <button className="console-close" onClick={handleToggle}>×</button>
        </div>
        <div className="console-content">
          <p className="console-line">
            <span className="console-timestamp">[{new Date().toISOString().split('T')[0]}]</span>
            <span className="console-label">INFO:</span> {techLore.name}
          </p>
          <p className="console-text">{techLore.lore}</p>
          <p className="console-line">
            <span className="console-prompt">$</span> <span className="cursor">_</span>
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <button className="lore-tech-trigger" onClick={handleToggle}>
        <span className="console-prompt">$</span> info --tech {techLore.name.toLowerCase()}
      </button>
      
      {isVisible && typeof document !== 'undefined' && createPortal(
        <Modal />,
        document.body
      )}
    </>
  );
};

export default LoreTechCard;