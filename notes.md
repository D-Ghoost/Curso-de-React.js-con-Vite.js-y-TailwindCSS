## Rutas en React
- Instalamos `react-router-dom`   y liego importamos en app el hook `useRoutes` de react-router-dom
- `useRoutes` nos ayuda para especificar en la ruta la pantalla que mostraremos ( /orders → dirigase a el componente ordenes )
- La sintax es la siguiente

```jsx
let routes = useRoutes([
	{
		path:'/',
		element: <MyComponent />
	}
])
```

Podemos crear una funcion que returne nuestros elementos encapsulados

```jsx
const appRouter = () =>{
	//...let router
// return routers
}
```

- `BrowserRouter` : “permite gestionar el enrutamiento de tu aplicación web. En otras palabras, te ayuda a controlar cómo los usuarios navegan entre diferentes páginas o secciones de tu sitio web utilizando la barra de direcciones del navegador.”
- Encapsulamos en el componente `BrowserRouter` la funcion o el componente de las rutas creadas
- Si colocamos en una ruta "/*" significa que es una ruta diferente a las especificadas


- Recordemos encapsular el componente `BrowserRouter` en el componente `App` para que funcione correctamente

```jsx
<BrowserRouter>
    <AppRouter>
</BrowserRouter>
```

## Componente Navbar
- Vamos a trabajar con navlink para que el usuario pueda navegar entre las rutas
- Ahora como vamos a trabajar con componentes, vamos a crear un componente `Navbar` que contendra los links de las rutas pero este se guardara en una carpeta llamada `components` y dentro de ella el archivo `Navbar.jsx`

```jsx
const Navbar = () =>{
    return(
        <nav>
            <ul>

                <li>
                    <NavLink to='/'>
                        Shopi
                    </NavLink>
                </li>
```

Ahora le agregamos estilos al componente `Navbar` 

```jsx

const Navbar = () =>{

    const activeStyle = {
        textDecoration: 'underline underline-offset-4',
    }


    return(
        <nav className='flex justify-between items-center fixed z-10 w-screen py-5 px-8 text-sm font-light'>
            <ul className=' flex items-center gap-3'>

                <li className=' font-semibold text-xl '>
                    <NavLink  to='/'>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/'
                        className={ ({ isActive }) => isActive ? activeStyle.textDecoration : '' }
                    >
                    ...

```


## Layout principal
- Vamos a crear un layout para que tenga un estilo unificado en algunas pantallas de nuestra aplicacion
- Tambien encapsularemos dentro del layout a cualquier children que le pasemos
- Creamos un archivo llamado `Layout.jsx` en la carpeta `components`

```jsx
const Layout = ({ children }) =>{
    return(
        <div className='flex flex-col items-center mt-20'>
           { children } 
        </div>
    );
}

export default Layout;
```

- Ahora encapsulamos los demas componentes dentro del componente `Layout` 

```jsx
import Layout from "../../components/Layout";

function Home() {
  return (
    <Layout>
      <h1>Home</h1>
    </Layout>
  );
}

export default Home;
```

## Creacion de cards

- Vamos a crear un componente `Card` que contendra la informacion de los productos
- Creamos un archivo llamado `Card.jsx` en la carpeta `components`

```jsx
const Card = () =>{
    return(
        <div className='bg-white cursor-pointer w-56 h-60 rounded-lg'>
            <figure className='relative mb-3 w-full h-'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>Electronics</span>
                <img className='w-full h-full object-cover rounded-lg' src='https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='headphones' />
                <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'>
                    +
                </div>
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light'>Headphones</span>
                <span className='text-lg font-semibold'>$25</span>
            </p>
        </div>
    );
}

export default Card;
```

- Ahora importamos el componente `Card` en el componente `Home` y lo usamos


## Consumo de API 
- STATE -> Almacenara la informacion de los productos
- useEffect -> Nos ayudara a hacer la peticion a la API
- En esta ocasion utilice la API de `dummyJSON` para obtener la informacion de los productos
- Cree una carpeta helpers y cree un archivo llamado getProducts.js y consumir la api

## Contador productos
- En el global context creamos un estado count y pasamos al componente AppContext.Provider el value del estado count

```jsx
import { createContext, useState } from "react"; 

const AppContext = createContext();

// provider = provedor de datos
export const AppProvider = ({ children }) =>{

    const [count, setCount] = useState(0);

    return(
        <AppContext.Provider 
            value={{
                count,
                setCount
            }}
        >
            { children }
        </AppContext.Provider>
    );
}
```
- Ahora nos dirigimos al componente `Card` y consumimos el contexto

```jsx
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Card = ({ title, price, images, category }) =>{
    const { count, setCount } = React.useContext(AppContext);
    return(
        <div className='bg-white cursor-pointer w-56 h-60 rounded-lg'>
            <figure className='relative mb-3 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{ category }</span>
                <img className='w-full h-full object-cover rounded-lg' src={ images[0] } alt={ title } />
                <button 
                    className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
                    onClick={ () => setCount(count + 1)}
                >
                    +
                </button>
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light'>{ title }</span>
                <span className='text-lg font-semibold'>${ price }</span>
            </p>
        </div>
    );
}
```

- Aqui utilizamos PropTypes que nos ayuda a validar los tipos de datos que se pasan a los componentes

```jsx
    Card.propTypes = {
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        images: PropTypes.array.isRequired,
        category: PropTypes.string.isRequired
    };
```

- Y en el carrito de compras mostramos el contador de productos en el componente navbar

```jsx

    const { count } = React.useContext(AppContext);
    //...resto del componente
    <li>
        🛒{ count }
    </li>
```


