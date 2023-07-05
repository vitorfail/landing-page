import Image from 'next/image'
import Logo from '../../images/logo.png'
import './Header.css'
export default function Header(){
    return(
        <div className="header">
            <div className="logo">
                <Image alt='logo'
                    src={Logo}
                />
            </div>
            <div className="banner">
                <label>WEBINARS EXCLUSIVOS</label>
                <label>Menos Conversinha,</label>
                <label>Mais Conversão</label>
                <label>Conhceça as estratégias que <strong>mudaram o jogo</strong> e como aplicá-los no seu negócio</label>
            </div>
        </div>
    )
}