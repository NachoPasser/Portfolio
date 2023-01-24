import { createContext, useState } from "react";
export const LanguageContext = createContext();

const initialLanguage = "es";
const translations = {
    en: {
        navbarHome: `Home`,
        navbarAboutMe: `About me`,
        navbarSkills: `Skills`,
        navbarProjects: `Proyects`,
        navBarContact: `Contact`,
        homeRol: 'Full Stack Developer',
        homeButton: `Contact me`,
        homeSlice: `Scroll down to know more about me`,
        aboutMeP1: `I'm Ignacio, i'm 20 years old and i live on Argentina, Buenos Aires. I started my programming journey during my computer engineering degree and am now a Full Stack Developer graduate from SoyHenry.`,
        aboutMeP2: `I am passionate about Backend, an area where I enjoy data manipulation, prioritizing that it be secure, fast and scalable.`,
        aboutMeButton: `Download CV`,
        aboutMeP3: `I'm always learning a new technology or concept. I'm currently digging`,
        aboutMeP4: `into...`,
        cvDocument: `https://drive.google.com/file/d/1jNYv8kmJJUOIOfNWZDZ89yaw13-zgDGA/view`,
        skillsTechnologies: `Technologies`,
        skillsBackend: `Backend development`,
        skillsFrontend: `Frontend development`,
        skillsTools: `Development tools`,
        skillsOrg: `Organization`,
        Learning: `Learning`,
        LearningP1: `I'm deepening on more complex topics.`,
        LearningP2: `I already worked with it 👇`,
        proyects: `Proyects`,
        proyectsCode: `Code`,
        proyectsVideo: `Video`,
        proyectsDemo: `Demo`,
        contactP1: `I'm looking for a backend position. Do you have an offer?`,
        contactPhone: `Phone number:`,
        contactP2: `Or write to me here...`,
        contactName: `Name`,
        contactSubject: `Subject`,
        contactMessage: `Message`,
        contactSend: `Send`,
        footerRights: `All rights reserved.`,
        footerCreated: `Portfolio created with`,
        errorMissing: `*Field required`,
        errorName: `*Minimum of 3 characters`,
        errorEmail: `*Invalid email`,
        errorSubject: `*Maximum of 998 characters reached`,
        errorMessage: `*Minimum of 10 characters`
    },
    es: {
        navbarHome: `Inicio`,
        navbarAboutMe: `Sobre mí`,
        navbarSkills: `Habilidades`,
        navbarProjects: `Proyectos`,
        navBarContact: `Contacto`,
        homeRol: 'Desarrollador Full Stack',
        homeButton: `Contáctame`,
        homeSlice: `Desliza para conocer más sobre mí`,
        aboutMeP1: `Soy Ignacio, tengo 20 años y vivo en Argentina, Buenos Aires. Comencé mi recorrido por la programación durante mi carrera en ingeniería en computación y ahora soy un Desarrollador Full Stack graduado de SoyHenry.`,
        aboutMeP2: `Me apasiona el Backend, área donde disfruto de la manipulación de datos, priorizando que sea segura, rápida y escalable.`,
        aboutMeButton: `Descargar CV`,
        aboutMeP3: `Siempre estoy aprendiendo alguna tecnología o concepto. Actualmente estoy profundizando`,
        aboutMeP4: `en...`,
        cvDocument: `https://drive.google.com/file/d/1jNYv8kmJJUOIOfNWZDZ89yaw13-zgDGA/view`,
        skillsTechnologies: `Tecnologías`,
        skillsBackend: `Desarrollo Backend`,
        skillsFrontend: `Desarrollo Frontend`,
        skillsTools: `Herramientas de desarrollo`,
        skillsOrg: `Organización`,
        Learning: `Aprendiendo`,
        LearningP1: `Ando profundizando en temas más avanzados.`,
        LearningP2: `Ya he trabajado con ella anteriormente 👇`,
        proyects: `Proyectos`,
        proyectsCode: `Código`,
        proyectsVideo: `Video`,
        proyectsDemo: `Demo`,
        contactP1: `Me encuentro buscando una oportunidad como desarrollador Backend. Tienes una propuesta?`,
        contactPhone: `Nro. de telefono:`,
        contactP2: `O escribime por acá...`,
        contactName: `Nombre`,
        contactSubject: `Asunto`,
        contactMessage: `Mensaje`,
        contactSend: `Enviar`,
        footerRights: `Todos los derechos reservados.`,
        footerCreated: `Portfolio creado con`,
        errorMissing: `*Campo requerido`,
        errorName: `*Minimo 3 caracteres`,
        errorEmail: `*Email no valido`,
        errorSubject: `*Maximo de 998 caracteres alcanzado`,
        errorMessage: `*Minimo 10 caracteres`
    },
};

export default function LanguageProvider({ children }) {
    const [language, setLanguage] = useState(initialLanguage);
    const [texts, setTexts] = useState(translations[language]);

    function handleLanguage() {
        if (language === 'es') {
            setLanguage("en");
            setTexts(translations.en);
        } else {
            setLanguage("es");
            setTexts(translations.es);
        }
    }

    const data = { texts, handleLanguage, language};

    return (
        <LanguageContext.Provider value={data}>
            {children}
        </LanguageContext.Provider>
    );
}