

interface MenuPrincipalProps {
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

const Metas: React.FC<MenuPrincipalProps> = ({ setPage }) => {


    return (
            <div className="container-menu">
            <div className="barra-navegacao">
                <h1>Nome do usuário</h1>
                <div className="nav-links">
                    <button className="nav-button">Link 1</button>
                    <button className="nav-button">Link 2</button>
                </div>
            </div>
            <div className="sidebar">
                <div className="sidebar-content">
                <button className="item" onClick={() => setPage("home")}>
                        <div className="text">Home</div>
                        <div className="icon">🏠</div>
                    </button>
                    <button className="item" onClick={() => setPage("historico")}>
                        <div className="text">Histórico</div>
                        <div className="icon">🔍</div>
                    </button>
                    <button className="item" onClick={() => setPage("cardapio")}>
                        <div className="text">Cardápio</div>
                        <div className="icon">⚙️</div>
                    </button>
                    <button className="item" onClick={() => setPage("metas")}>
                        <div className="text">Metas</div>
                        <div className="icon">⚙️</div>
                    </button>
                    <button className="item" onClick={() => setPage("configuracoes")}>
                        <div className="text">Configurações</div>
                        <div className="icon">⚙️</div>
                    </button>
                </div>
            </div>
            <div className="central-content">
            <div className="content">
            <div className="header">NOME DE USUÁRIO</div>

            <div className="tabs">
                <div className="tab">Dia</div>
                <div className="tab active">Semana</div>
                <div className="tab">Mês</div>
            </div>

            <div className="charts">
                <div className="weight-loss-chart">
                    <h2>Gráfico de Perda de Peso</h2>
                    <canvas id="weightChart"></canvas>
                </div>
                <div className="food-chart">
                    <h2>Gráfico de Consumo Alimentar</h2>
                    <canvas id="foodChart"></canvas>
                </div>
            </div>

            <div className="goal-info">
                <div>
                    <span>Objetivo:</span>
                    <span>75.0 KG</span>
                </div>
                <div>
                    <span>Distância do Objetivo:</span>
                    <span>3.0 KG</span>
                </div>
                <div>
                    <span>Atual:</span>
                    <span>72.0 KG</span>
                </div>
                <div>
                    <span>Variação Total:</span>
                    <span>-5.0 KG</span>
                </div>
            </div>
        </div>
    </div>
            </div>
           
    );
};

export default Metas;
