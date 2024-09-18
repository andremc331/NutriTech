import '../CSS/BemVindo.css';
import logo from '../logo/logo.nutritech.png.png';

interface BemVindoProps {
    setPage: React.Dispatch<React.SetStateAction<'bem-vindo' | 'cadastro' | 'info-pessoal' | 'definicao-metas' | 'termosdeuso' | 'menu-principal'>>;
}

export default function BemVindo({ setPage }: BemVindoProps) {
    return (
        <div className="background">
            <div className="container-right">
                <img src={logo} alt="Logo NutriTech" className="logo" />
                <h2>O MELHOR PARA A SUA SAÚDE</h2>
            </div>
            <div className="container-left">
                <h1>Login</h1>
                <label className="email-label">Email:</label>
                <input type="email" className="email-input" />
                <label className="password-label">Senha:</label>
                <input type="password" className="password-input" />
                <main className="main-Content">
                    <button className="button" onClick={() => setPage('cadastro')}>Clique aqui</button>
                </main>
            </div>
        </div>
    );
}