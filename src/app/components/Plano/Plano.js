import Image from 'next/image'
import Thumb from '../../images/comparativo_img_CTA.png'
import Butt from '../../images/comparativo_img_CTA.png'
import './Plano.css'
export default function Plano(){
    return(
        <div className="plano">
            <Image className='thumb' src={Thumb}></Image>
            <div className='descri-plano'>
                <label>Pronto para triplicar a sua <strong>Geração de Leads?</strong></label>
                <label>Criação e ativação em <strong>3 minutos</strong></label>
                <div className='botoes'>
                    <h3>VER DEMONSTRAÇÃO</h3>
                    <Image src={Butt}></Image>
                </div>
            </div>

        </div>
    )
}