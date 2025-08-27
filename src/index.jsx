import { hydrate, prerender as ssr } from 'preact-iso';

import preactLogo from './assets/preact.svg';
import './style.css';
import Habilidades from './assets/components/habilidades';
import Navigation  from './assets/components/Navigation';
import HeroSection from './assets/components/HeroSection';
import About from './assets/components/About';
import TechsCard from './assets/components/techsCard';
import Referencias from './assets/components/referencias';
import Footer from './assets/components/Footer';

export function App() {
	return (
		<div>
			<Navigation />
			<HeroSection />
			<About />
			
			<section className="tech-section container">
				<h1>Mis Tecnologías y Frameworks</h1>
				
				<h2>Tecnologías que Domino</h2>
				<div className="tech-grid">
					<TechsCard 
						tech={{ 
							name: 'Python', 
							description: 'Lenguaje principal con frameworks como FastAPI para desarrollo backend', 
							image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
						}}
						techLore={{
							name: 'Python',
							lore: 'Comenzé con Python siguiendo los pasos de mi padre en el desarrollo. Su sintaxis clara y versatilidad me atraparon desde el primer momento. Lo uso principalmente para APIs con FastAPI, scripts de automatización, y análisis de datos. Mi proyecto más orgulloso fue una API completa para gestión de inventarios que procesa miles de transacciones diarias.'
						}}
					/>
					<TechsCard 
						tech={{ 
							name: 'JavaScript', 
							description: 'Lenguaje versátil para desarrollo frontend y backend con Node.js', 
							image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
						}}
						techLore={{
							name: 'JavaScript',
							lore: 'JavaScript llegó como una necesidad natural al querer crear interfaces dinámicas. Me fascina su evolución constante y cómo ha expandido desde el navegador hasta servidores con Node.js. He trabajado desde vanilla JS hasta frameworks modernos, y siempre me sorprende su flexibilidad para resolver problemas complejos de manera elegante.'
						}}
					/>
					<TechsCard 
						tech={{ 
							name: 'React', 
							description: 'Biblioteca de JavaScript para crear interfaces interactivas', 
							image: "https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-black-and-white.png"
						}}
						techLore={{
							name: 'React',
							lore: 'Descubrí React durante mis primeros proyectos frontend serios. Su enfoque en componentes y el paradigma de programación declarativa cambió completamente mi forma de pensar sobre las interfaces de usuario. El manejo de estado y los hooks me permitieron crear aplicaciones más robustas y mantenibles. Cada proyecto con React me enseña algo nuevo.'
						}}
					/>
					<TechsCard 
						tech={{ 
							name: 'FastAPI', 
							description: 'Framework web moderno y rápido para construir APIs con Python', 
							image: "https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png"
						}}
						techLore={{
							name: 'FastAPI',
							lore: 'FastAPI se convirtió en mi framework favorito para APIs después de experimentar con Flask y Django. Su velocidad, documentación automática con OpenAPI, y el tipado con Pydantic me convencieron completamente. He desarrollado varias APIs de producción que manejan autenticación JWT, bases de datos complejas y integración con servicios externos.'
						}}
					/>
					<TechsCard 
						tech={{ 
							name: 'Node.js + Express', 
							description: 'Entorno de ejecución de JavaScript y framework web', 
							image: "https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png"
						}}
						techLore={{
							name: 'Node.js + Express',
							lore: 'Node.js me abrió las puertas al desarrollo backend con JavaScript. Express se convirtió en mi primera herramienta para crear APIs rápidas y servidores web. La gestión de middleware, rutas, y la integración con bases de datos me enseñó los fundamentos del desarrollo web moderno. Aunque ahora prefiero FastAPI, Node.js sigue siendo fundamental en mi toolkit.'
						}}
					/>
					<TechsCard 
						tech={{ 
							name: 'Preact', 
							description: 'Alternativa ligera a React con la misma API', 
							image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpreactjs.com%2F&psig=AOvVaw25rwsboqFCDqHVd_wL7qbR&ust=1756380982805000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCJDhsbfzqo8DFQAAAAAdAAAAABAE"
						}}
						techLore={{
							name: 'Preact',
							lore: 'Descubrí Preact buscando optimizar el rendimiento de mis aplicaciones React. Su tamaño reducido (3KB) y compatibilidad casi total con React lo hace perfecto para proyectos donde cada byte cuenta. Este mismo portfolio está construido con Preact, demostrando que puedes tener toda la potencia de React en una fracción del tamaño.'
						}}
					/>
				</div>
				
				<h2>Tecnologías en Aprendizaje</h2>
				<div className="tech-grid learning">
					<TechsCard 
						tech={{ 
							name: 'TypeScript', 
							description: 'Superset de JavaScript que añade tipado estático', 
							image: "https://www.typescriptlang.org/icons/icon-512x512.png"
						}}
						techLore={{
							name: 'TypeScript',
							lore: 'Estoy migrando gradualmente mis proyectos JavaScript a TypeScript. El tipado estático me está ayudando a escribir código más robusto y detectar errores antes de que lleguen a producción. Aunque la curva de aprendizaje es empinada, ya veo los beneficios en proyectos medianos y grandes donde la complejidad puede salirse de control.'
						}}
					/>
					<TechsCard 
						tech={{ 
							name: 'C#', 
							description: 'Lenguaje de programación orientado a objetos de Microsoft', 
							image: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png"
						}}
						techLore={{
							name: 'C#',
							lore: 'Decidí aprender C# para expandir mis horizontes hacia el ecosistema .NET. Me interesa especialmente ASP.NET Core para desarrollo web y la integración con Azure. La programación orientada a objetos en C# es muy elegante, y estoy explorando también el desarrollo de aplicaciones de escritorio con WPF y mobile con Xamarin/MAUI.'
						}}
					/>
					<TechsCard 
						tech={{ 
							name: 'C++', 
							description: 'Lenguaje de bajo nivel, estudiando por interés en ciberseguridad', 
							image: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg"
						}}
						techLore={{
							name: 'C++',
							lore: 'Mi interés en C++ nace de mi pasión por la ciberseguridad y la necesidad de entender cómo funcionan los sistemas a bajo nivel. Estoy estudiando gestión de memoria, punteros, y algoritmos fundamentales. Aunque es un desafío viniendo de lenguajes de alto nivel, entender C++ me está dando una perspectiva completamente nueva sobre el rendimiento y la eficiencia.'
						}}
					/>
				</div>

				<h2>Frameworks Adicionales</h2>
				<div className="tech-grid">
					<TechsCard 
						tech={{ 
							name: 'Astro', 
							description: 'Framework moderno para sitios web estáticos', 
							image: "https://astro.build/assets/press/astro-icon-light-gradient.svg"
						}}
						techLore={{
							name: 'Astro',
							lore: 'Astro ha revolucionado mi forma de crear sitios web estáticos. Su enfoque "islands architecture" y la capacidad de usar cualquier framework UI en el mismo proyecto es increíble. Lo estoy usando para blogs y landing pages donde el rendimiento es crucial. La generación estática combinada con hidratación selectiva resulta en sitios blazing fast.'
						}}
					/>
					<TechsCard 
						tech={{ 
							name: 'React Native', 
							description: 'Framework para desarrollo de aplicaciones móviles', 
							image: "https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-black-and-white.png"
						}}
						techLore={{
							name: 'React Native',
							lore: 'Entré al desarrollo móvil a través de React Native aprovechando mi experiencia con React. Me fascina cómo puedo reutilizar la lógica de negocio y gran parte del UI entre plataformas. He desarrollado varias apps que funcionan tanto en iOS como Android, aunque estoy aprendiendo sobre las optimizaciones específicas de cada plataforma.'
						}}
					/>
					<TechsCard 
						tech={{ 
							name: 'Model context protocol', 
							description: 'SDK  de protocolo Anthropic para interacción LLM  - Libreria de python', 
							image: "https://avatars.githubusercontent.com/u/182288589?s=200&v=4"
						}}
						techLore={{
							name: 'MCP Protocol',
							lore: 'El Model Context Protocol de Anthropic me ha abierto un mundo de posibilidades para integrar LLMs en aplicaciones reales. Estoy experimentando con servidores MCP personalizados que conectan Claude con bases de datos, APIs y sistemas externos. Es fascinante ver cómo la IA puede interactuar de forma segura y estructurada con infraestructura existente.'
						}}
					/>
				</div>
			</section>

			
			<Referencias />
			<Footer />
		</div>
	);
}

function Resource(props) {
	return (
		<a href={props.href} target="_blank" class="resource">
			<h2>{props.title}</h2>
			<p>{props.description}</p>
		</a>
	);
}

if (typeof window !== 'undefined') {
	hydrate(<App />, document.getElementById('app'));
}

export async function prerender(data) {
	return await ssr(<App {...data} />);
}
