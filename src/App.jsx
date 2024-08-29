/* eslint-disable no-unused-vars */
// Primeiro importamos o arquivo e depois os componentes
import { useState } from "react";

import Perfil from "./components/Perfil/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";


function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  const [nomeUsuario, serNomeUsuario] = useState('');

  return(
    <>
      <input type="text" onBlur={(e) => serNomeUsuario(e.target.value)}/>

    
    {nomeUsuario.length >=4 && (
      <>
        <Perfil nomeUsuario={nomeUsuario}/>
        <ReposList nomeUsuario={nomeUsuario} />    
      </>
    )}
    

      {/* {formularioEstaVisivel && ( 
        <Formulario/>
      )}

      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">toggle form</button>*/}
    </>
  )
}

export default App