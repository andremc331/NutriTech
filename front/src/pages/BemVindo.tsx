import "../CSS/BemVindo.css";
import logo from "../logo/logo.nutritech.png.png";

interface BemVindoProps {
  setPage: React.Dispatch<
    React.SetStateAction<
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
    >
  >;
}

export default function BemVindo({ setPage }: BemVindoProps) {
  return (
    <div className="background">
      <div className="container-right">
        <img src={logo} alt="Logo NutriTech" className="logo" />
        <h2 className="justified-text">
          O MELHOR
          <br />
          PARA A SUA
          <br />
          SAÚDE!
        </h2>
        <button className="button1" onClick={() => setPage("cadastro")}>
          COMECE JÁ
        </button>
      </div>

      <div className="container-left">
        <h1>Login</h1>
        <label className="email-label">Email:</label>
        <input type="email" className="email-input" />
        <label className="password-label">Senha:</label>
        <input type="password" className="password-input" />
        <main className="main-Content">
          <button className="button2" onClick={() => setPage("home")}>
            &gt;
          </button>
        </main>
      </div>
    </div>
  );
}
