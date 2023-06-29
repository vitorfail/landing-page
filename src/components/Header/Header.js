import Logo from '../../images/logo.png'
import './Header.css'
export default function Header(){
    return(
        <div className="header">
            <div className="logo">
                <img src={Logo}></img>
            </div>
            <div className="banner">
                <label>WEBINARS EXCLUSIVOS</label>
                <h2>Menos Conversinha,</h2>
                <h1>Mais Conversão</h1>
                <h4>Conhceça as estratégias que <bold>mudaram o jogo</bold> e como aplicá-los no seu negócio</h4>
            </div>
        </div>
    )
}