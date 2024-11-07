import letItOutImg from '/src/assets/let-it-out.png';
import tenziesGameImg from '/src/assets/tenzies-game.png';
import harlysLinksImg from '/src/assets/harlys-links.png';
import weightTrackerImg from '/src/assets/weight-tracker.png';
import tripJournalImg from '/src/assets/trip-journal.png';
import shoppingCartImg from '/src/assets/shopping-cart.png'
import personalBlog from '/src/assets/personal-blog.png'
import todoList from '/src/assets/Todo.2.png'

export default [
    {
        title : "Let it Out",
        link : "https://letitout.vercel.app/",
        linkRes : "https://letitout.vercel.app/",
        concept : "Una simple página anónima que funciona para dejar experiencias y comentarios sin que nadie sepa tu identidad",
        img : letItOutImg,
        github : "https://github.com/JustHarlys/Let-It-Out",
        description : 'Está desarrollado en JavaScript utilizando los framework de React.js, Node.js, Express.js y la base de datos en mongodb, su despliegue fue hecho en Vercel para el front-end y el back-end fue desplegado en Railway, contiene como accesibilidad el cambio de fondo de pantalla de blanco a negro y viceversa'
    },
    {
        title : "Tenzies Game",
        link : "https://harlys-tenzies-game.vercel.app/",
        linkRes: "https://harlys-tenzies-game.vercel.app/",
        concept : "Una página que sirve como un juego de Tenzies",
        img : tenziesGameImg,
        github : "https://github.com/JustHarlys/Tenzies-Game",
        description : 'Desarrollado en JavaScript utilizando el framework de React.js, para el despliegue fue utilizado Vercel para el front-end y no contiene back-end'
    },
    {
        title : "Harlys Links",
        link : "https://harlys-links.vercel.app/",
        linkRes : "https://harlys-links.vercel.app/",
        concept : "Una página que contiene todos mis links",
        img : harlysLinksImg,
        github : "https://github.com/JustHarlys/Instagram-Link",
        description : 'Página desarrollada en JavaScript utilizando el framework de React.js, redirige a todos los links que son de mi propiedad y a este portafolio'
    },
    {
        title: "Weight Tracker",
        link : "",
        linkRes : "",
        concept : "Web App para llevar un registro de peso corporal",
        img: weightTrackerImg,
        github : "https://github.com/JustHarlys/Weight-Tracker",
        description: 'Página desarrollada en JavaScript utilizando React.js, guarda los datos en una base de datos creada en SQL Server'
    },
    {
        title: "Trip Journal",
        link: "",
        linkRes: "",
        concept: "Aplicación web para hacer notas de viajes",
        img: tripJournalImg,
        github: "https://github.com/JustHarlys/Trip-Journal",
        description: 'Página desarrollada en JavaScript utilizando React.js, guarda los datos introducidos en una base de datos creada en SQL Server, no está desplegada, permite agregar una imagen, fechas de inicio y fin del viaje, datos relacionados con el mismo viaje '
    },
    {
        title: "Shopping Cart",
        link: "https://harlys-shoppping-cart.vercel.app/",
        linkRes: "https://harlys-shoppping-cart.vercel.app/",
        concept: "Simulacion de un carrito de compras",
        img: shoppingCartImg,
        github: "https://github.com/JustHarlys/Shopping-Cart",
        description: "Pagina para simular un carrito de compras de un E-commerce totalmente funcional, desarrollada en JavaScript usando el framework de React.js, se simula una base de datos con el localStorage, desplegada en Vercel"
    },
    {
        title: "Personal Blog",
        link: "https://harlys-blog.vercel.app/",
        linkRes: "https://harlys-blog.vercel.app/",
        concept: "Blog personal para publicaciones",
        img: personalBlog,
        github: "https://github.com/JustHarlys/Blog",
        description: "Pagina de blog creada para almacenar entradas customizadas con cara a leer mis experiencias en diferentes categorias preseleccionadas, desarrollada en JavaScript utilizando React.js, con base de datos en MongoDB, desplegada en Vercel para el frontend y Railway para el backend"
    },
    {
        title: "To do list",
        link: "https://harlys-todo.vercel.app/",
        linkRes: "https://harlys-todo.vercel.app/",
        concept: "To do list básico",
        img: todoList,
        github: "https://github.com/JustHarlys/Todo",
        description: "Página realizada para un Todo list bastante básico, permite agregar los items que uno quiera y necesite con un diseño fácil de entender, no requiere de base de datos ya que es demostración, al seleccionar un item te da la opción de eliminarlo, hecho en React.js, desplegado en Vercel"
    
    }
];
