import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ContainerBackground from './components/containerBackground/ContainerBackground'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Tienda from './components/Tienda/Tienda';




function App() {
  return (
    <>

    <BrowserRouter>
            
      <NavBar/>
      <Routes>
        <Route path="/" element={ 
          <>
            <ContainerBackground>

              <h1>Bienvenido a Shinobi Legacy</h1>
              <h3>Cualquier error en la plataforma, por favor dejalo saber por inbox</h3>
              <a href="https://www.facebook.com/groups/legacyshinobi" target='_blank'><img className='logoInicio' src="/media/img/logoshinobi.png" alt=""/></a>

              <div className='botonesHome'>
                  <button>Calculadora de Daño</button>
                  <button>Calculadora de Daño</button>
                  <button>Calculadora de Daño</button>
              </div>
            </ContainerBackground>
            
          </> }/>
        <Route path="/Tienda" element={ <Tienda/> } />
        <Route path="/Tienda/categoria/:idCategoria" element={ <Tienda/> } />
        <Route path="/item/:idItem" element={ <ItemListContainer/> } />
      </Routes>

    </BrowserRouter>    
    
    </>
  );
}

export default App;
