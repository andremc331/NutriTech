import React from "react";

function Infopessoal() {
  return (
    <div id="cadastro">
        <div className="inform">
          <h1>Informações Pessoais</h1>
          <label htmlFor="name">Insira sua Nome:</label>
          <br />
          <input type="string" id="name" placeholder="Ex:João"></input>
          <br />
          <label htmlFor="age">Insira sua Idade:</label>
          <br />
          <input type="number" id="age" placeholder="Ex:17"></input>
          <br />
          <label htmlFor="height">Insira sua Altura:</label>
          <br />
          <input type="number" id="height" placeholder="Ex:1.75"></input>
          <br />
          <label htmlFor="weight">Insira sua Peso:</label>
          <br />
          <input type="number" id="weight" placeholder="Ex:80.0"></input>
        </div>
        <br />
        {/* <label htmlFor="gmail">Insira se Email:</label>
        <br />
        <input id="gmail"></input>
        <br /> */}
        <label>Selecione seu Gênero:</label>
        <div id="selects">
          <input type="checkbox" id="men"></input>
          <label htmlFor="men">Masculino</label>
          <input type="checkbox" id="femile"></input>
          <label>Feminino</label>
          <input type="checkbox" id="not"></input>
          <label>Prefiro não dizer</label>
        </div>
        <br />
        <div>
          <br />
          <label>Qual seu objetivo</label>
          <br />
          <select>
            <option>Ganhar peso</option>
            <option>Perder peso</option>
            <option>Manter peso</option>
          </select>
        </div>
        <br />
        <button>Enviar</button>
      </div>
  );
}

export default Infopessoal;
