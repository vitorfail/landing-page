import Image from 'next/image'
import Logo from '../../images/logo.png'
import './Rodape.css'
import Facebook from '../../images/facebook.png'
import Instagram from '../../images/instagram.png'
import Linkedim from '../../images/linkedin.png'

export default function Rodape(){
    return(
        <div className="rodape">
            <Image alt='logo' className='logo' src={Logo}></Image>
            <label>Transformando visitantes em clientes</label>
            <div className='info'>
                <div className='coluna'>
                    <h3>Links principais</h3>
                    <h4>Home</h4>
                    <h4>Ferramentas</h4>
                    <h4>Preços</h4>
                    <h4>Contato</h4>
                </div>
                <div className='coluna'>
                    <h3>Cases</h3>
                    <h4>Operação de Leads B2B</h4>
                    <h4>Geração de Leads em Software</h4>
                    <h4>Geração de Leads em imobiliárias</h4>
                    <h4>Cases de sucesso</h4>
                </div>
                <div className='coluna'>
                    <h3>Materias</h3>
                    <h4>Blog</h4>
                    <h4>Parceria com Agências</h4>
                    <h4>Gia definitivo de Marketing</h4>
                    <h4>Materiais gratuitos</h4>
                </div>
                <div className='coluna'>
                    <h3>Siga a Leadster</h3>
                    <div className='icons'>
                        <div className='backs'>
                            <Image alt='Linkedim' src={Linkedim}></Image>
                        </div>
                        <div className='backs'>
                            <Image alt='Facebook' src={Facebook}></Image>
                        </div>
                        <div className='backs'>
                            <Image alt='intagram' src={Instagram}></Image>
                        </div>
                    </div>
                    <h4><strong>Email:</strong>contato@leadster.com.br</h4>
                    <h4><strong>Telefone:</strong>(42) 98828-9851</h4>
                </div>
            </div>
            <div className='copy'>
                <label>Copyright © 2015 - 2022 Todos os direitos autorais reservados | <strong  style={{color:"#0084ff"}}>Leadster</strong></label>
                <label>Rua José Lureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 | Termos de uso </label>
            </div>
        </div>
    )
}