import React, { useState } from "react";
import "../CSS/Historico.css";

interface HistoricoProps {
  setPage: (
    page:
      | "bem-vindo"
      | "cadastro"
      | "info-pessoal"
      | "definicao-metas"
      | "termosdeuso"
      | "home"
      | "cardapio"
      | "historico"
      | "metas"
      | "configuracoes"
  ) => void;
}

const Historico: React.FC<HistoricoProps> = ({ setPage }) => {
  const [periodo, setPeriodo] = useState<"dia" | "semana" | "mes">("dia");

  return (
    <div className="container-historico">
      {/* Barra de navegação superior */}
      <div className="barra-navegacao">
        <h1>Nome de usuário</h1>
      </div>

      {/* Barra lateral */}
      <div className="sidebar">
        <div className="sidebar-content">
          <button className="item" onClick={() => setPage("home")}>
            <div className="text">Home</div>
            <div className="icon">🏠</div>
          </button>
          <button className="item" onClick={() => setPage("cardapio")}>
            <div className="text">Cardápio</div>
            <div className="icon">⚙️</div>
          </button>
          <button className="item" onClick={() => setPage("historico")}>
            <div className="text">Histórico</div>
            <div className="icon">🔍</div>
          </button>
          <button className="item" onClick={() => setPage("metas")}>
            <div className="text">Progresso</div>
            <div className="icon">⚙️</div>
          </button>
          <button className="item" onClick={() => setPage("configuracoes")}>
            <div className="text">Configurações</div>
            <div className="icon">⚙️</div>
          </button>
        </div>
      </div>

      {/* Conteúdo principal com os contêineres */}
      <div className="home-container">
        {/* Seletor de período */}
        <div className="periodo-seletor">
          <button
            className={periodo === "dia" ? "active" : ""}
            onClick={() => setPeriodo("dia")}
          >
            Dia
          </button>
          <span className="separador"></span>
          <button
            className={periodo === "semana" ? "active" : ""}
            onClick={() => setPeriodo("semana")}
          >
            Semana
          </button>
          <span className="separador"></span>
          <button
            className={periodo === "mes" ? "active" : ""}
            onClick={() => setPeriodo("mes")}
          >
            Mês
          </button>
        </div>

        {/* Exibir contêineres de acordo com o período selecionado */}
        {periodo === "dia" && (
          <div className="historico-container">
            {/* Primeiro contêiner branco */}
            <div className="white-box">
              <div className="meal-info">
                <span className="meal-type">Almoço</span>
                <span className="meal-time">Horário: 12:20</span>
                <span className="meal-items">
                  <p>150g de frango grelhado</p>
                  <p>1 colher de arroz integral</p>
                  <p>25g de brócolis</p>
                  <p>Salada verde com azeite de oliva</p>
                </span>
              </div>
            </div>

            {/* Segundo contêiner branco */}
            <div className="white-box">
              <div className="meal-info">
                <span className="meal-type">Café da manhã</span>
                <span className="meal-time">Horário: 06:30</span>
                <span className="meal-items">
                  <p>2 fatias de pão integral</p>
                  <p>2 ovos mexidos</p>
                  <p>1 banana</p>
                  <p>1 colher de chá de xia</p>
                  <p>200ml de leite desnatado</p>
                </span>
              </div>
            </div>
          </div>
        )}

        {periodo === "semana" && (
          <div className="white-box">
            <div className="meal-info">
              {/* Conteúdo da semana */}
              <p>Histórico da semana será exibido aqui...</p>
            </div>
          </div>
        )}

        {periodo === "mes" && (
          <div className="white-box">
            <div className="meal-info">
              {/* Conteúdo do mês */}
              <p>Histórico do mês será exibido aqui...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Historico;