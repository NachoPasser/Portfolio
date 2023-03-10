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
        aboutMeP1: `I'm Ignacio, i'm 20 years old and i live on Buenos Aires, Argentina. I started my programming journey during my computer engineering degree and am now a Full Stack Developer graduate from SoyHenry.`,
        aboutMeP2: `I am passionate about Backend, an area where I enjoy data manipulation, prioritizing that it be secure, fast and scalable.`,
        aboutMeButton: `Download CV`,
        aboutMeP3: `I'm always learning a new technology or concept. I'm currently digging`,
        aboutMeP4: `into...`,
        skillsTechnologies: `Technologies`,
        skillsBackend: `Backend development`,
        skillsFrontend: `Frontend development`,
        skillsTools: `Development tools`,
        skillsOrg: `Organization`,
        Learning: `Learning`,
        LearningP1: `Taking my first steps on`,
        LearningP2: `NestJS`,
        LearningP3: ``,
        LearningP4: ``,
        LearningP5: ` and `,
        LearningP6: `TypeScript`,
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
        errorMessage: `*Minimum of 10 characters`,
        modalHenryAskP1: `It's a platform inspired by StackOverflow where you can ask questions, answer the questions of other users and clarify any doubt through comments.`,
        modalHenryAskP2: `It was developed for students and graduates of SoyHenry, but for now anyone can join it.`,
        modalDogsApp: `It's an interactive SPA where the user can consult different breeds of dogs that came from https://thedogapi.com/. This breeds can be filtered, ordered and look up by name. The user can also create his own breed.`,
        modalOnDriveP1: `It's a project with the objective of creating a web application to improve the way of traveling in Argentina, sharing vehicles and reducing CO2 emissions. Within the page, a user can be a passenger and then register as a driver.`,
        modalOnDriveP2: `A passenger can join long-distance trips published by different drivers paying by MercadoPago, and, through a tool, calculate the costs of a trip they want to take in case there is no driver available along with the best possible route.`,
        modalOnDriveP3: `A driver can post trips using the above named tool. Specify date, place of departure and arrival, number of seats available and obtain the cost of the trip using the tool.`,
        CV: `https://drive.google.com/file/d/1MoRJPbWMhMB8prmOBLZrmJfEIXQ2v1xs/view`
    },
    es: {
        navbarHome: `Inicio`,
        navbarAboutMe: `Sobre m??`,
        navbarSkills: `Habilidades`,
        navbarProjects: `Proyectos`,
        navBarContact: `Contacto`,
        homeRol: 'Desarrollador Full Stack',
        homeButton: `Cont??ctame`,
        homeSlice: `Desliza para conocer m??s sobre m??`,
        aboutMeP1: `Soy Ignacio, tengo 20 a??os y vivo en Buenos Aires, Argentina. Comenc?? mi recorrido por la programaci??n durante mi carrera en ingenier??a en computaci??n y ahora soy un Desarrollador Full Stack graduado de SoyHenry.`,
        aboutMeP2: `Me apasiona el Backend, ??rea donde disfruto de la manipulaci??n de datos, priorizando que sea segura, r??pida y escalable.`,
        aboutMeButton: `Descargar CV`,
        aboutMeP3: `Siempre estoy aprendiendo alguna tecnolog??a o concepto. Actualmente estoy profundizando`,
        aboutMeP4: `en...`,
        skillsTechnologies: `Tecnolog??as`,
        skillsBackend: `Desarrollo Backend`,
        skillsFrontend: `Desarrollo Frontend`,
        skillsTools: `Herramientas de desarrollo`,
        skillsOrg: `Organizaci??n`,
        Learning: `Aprendiendo`,
        LearningP1: `Dando mis primeros pasos en`,
        LearningP2: `NestJS`,
        LearningP3: ``,
        LearningP4: ``,
        LearningP5: ` y `,
        LearningP6: `TypeScript`,
        proyects: `Proyectos`,
        proyectsCode: `C??digo`,
        proyectsVideo: `Video`,
        proyectsDemo: `Demo`,
        contactP1: `Me encuentro buscando una oportunidad como desarrollador Backend. Tienes una propuesta?`,
        contactPhone: `Nro. de telefono:`,
        contactP2: `O escribime por ac??...`,
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
        errorMessage: `*Minimo 10 caracteres`,
        modalHenryAskP1: `Es una plataforma inspirada en StackOverflow donde podr??s realizar preguntas, responder las preguntas de otros usuarios y aclarar cualquier duda por medio de comentarios.`,
        modalHenryAskP2: `Fue desarrollada para alumnos y egresados de SoyHenry, pero de momento cualquier persona puede ingresar a la misma.`,
        modalDogsApp: `Es una SPA interactiva donde el usuario puede consultar diferentes razas de perro provenientes de https://thedogapi.com/. Est??s razas pueden ser filtradas, ordenadas y buscadas por nombre. Adem??s el usuario puede crear su propia raza.`,
        modalOnDriveP1: `Proyecto con el objetivo de crear una aplicaci??n web para mejorar la forma de viajar por Argentina, compartiendo veh??culos y reduciendo la emisi??n de CO2. Dentro de la p??gina, un usuario puede ser pasajero y luego registrarse como conductor.`,
        modalOnDriveP2: `Un pasajero puede sumarse a viajes de larga distancia publicados por diferentes conductor pagando por medio de MercadoPago, y, a trav??s de una herramienta, calcular los costos de un viaje que quiera realizar por si no hay un conductor disponible junto a la mejor ruta posible.`,
        modalOnDriveP3: `Un conductor puede publicar viajes utilizando la herramienta anteriormente nombrada. Especifica fecha, lugar de salida y llegada, numero de asientos disponibles y obtiene el costo del viaje mediante la herramienta.`,
        CV: `https://drive.google.com/file/d/1dZtfU0K65mRDHJqJMGWu9niOvJLSsMLc/view`
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
