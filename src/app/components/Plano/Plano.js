import Image from 'next/image'
import Thumb from '../../images/comparativo_img_CTA.png'
import Butt from '../../images/selo_RD.png'
import Cartao from '../../images/no-card-dark.webp'
import Estrelas from '../../images/rating.webp'
import './Plano.css'
export default function Plano(){
    return(
        <div className="plano">
            <Image className='thumb' src={Thumb}></Image>
            <div className='descri-plano'>
                <label>Pronto para triplicar a sua <strong>Geração de Leads?</strong></label>
                <label>Criação e ativação em <strong>3 minutos</strong></label>
                <div className='botoes'>
                    <button>VER DEMONSTRAÇÃO</button>
                    <Image src={Butt}></Image>
                </div>
                <div className='avaliacao'>
                    <div className='frases'>
                        <Image src={Cartao}></Image>
                        <h3>Não é necessário Cartão de Crédito</h3>
                    </div>
                    <div className='frases'>
                        <Image src={Estrelas}></Image>
                        <h3>4.9/5 média de satisfação</h3>
                    </div>
                </div>
            </div>

        </div>
    )
}