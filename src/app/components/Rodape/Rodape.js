import Image from 'next/image'
import Logo from '../../images/logo.png'
import './Rodape.css'
export default function Rodape(){
    return(
        <div className="rodape">
            <Image src={Logo}></Image>
            <div className='info'>
                <div className='coluna'>
                    <h3>Links principais</h3>
                    <h4>Home</h4>
                    <h4>Ferramentas</h4>
                    <h4>Preços</h4>
                    <h4>Contato</h4>
                </div>
            </div>
        </div>
    )
}