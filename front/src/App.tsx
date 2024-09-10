import React from "react";
import { useState } from "react";
//import Saida from "./Saida";
//import Entrada from "./Entrada"

function App() {
  const [nome, setNome] = useState("");
  const [lista, setLista] = useState<string []>([]);

  function handle(){
    const temp =[...lista,nome]; //se colocar nome antes dos ... o nome será salvo sempre em 1°
    setLista(temp);
  }


  return ( //sempre q houver onClick necessário função
    <div>
      <div>
        <label>Exercício 3</label>
        <input value={nome} onChange={(e)=>setNome(e.target.value)} />
        <button onClick={handle}>Salvar</button>
      </div>
    </div>
  );
}

export default App;
