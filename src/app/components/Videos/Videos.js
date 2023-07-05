import Image from 'next/image'
import Thumb from '../../images/thumbnail.png'
import Play from '../../images/play.png'
import './Videos.css'
export default function Videos(props){
    var videos = [
        {descri:"Nesse módulo você irá aprender a aumentar a geração de Leads por meio de landing pages e estratégias de funis",
        link:"https://www.youtube.com/embed/IuwgrZu-DlA",
        titulo:"Como aumentar a geração e Leads Feat.Traktor"},
        {descri:"Nesse módulo você irá acompanhar estratégias comprovadas e empíricas de atrair mais leads para por meio do instagram bussines",
        link:"https://www.youtube.com/embed/kOEubE-CmtI",
        titulo:"Gerando mais engajamento na sua página do Instagram"},
        {descri:"Nesse módulo você irá acompanhar estratégias comprovadas e empíricas de atrair mais leads para por meio do instagram bussines",
        link:"https://www.youtube.com/embed/ice_xL6x4Qg",
        titulo:"Marketing Digital e PLR"},
        {descri:"ChatGPT já está no meio de nós e ajudando nas mais diverssas funções. Dentre eles o copy se destaca. Você verá como ultilizar essa ferramenta gratuita",
        link:"https://www.youtube.com/embed/tiMWkzPC_3o",
        titulo:"Usando ChatGPT para copy"},
        {descri:"O atendimento e o pós-atendimento se enquadram em uma das áreas do marketing",
        link:"https://www.youtube.com/embed/ueyN5i88daY",
        titulo:"O diferenical para o atendimento com o cliente"},
        {descri:"A Synthesia e Gen-2 são inteligências artificais que geram vídeos dos mais variados tipos e nesso módulo você aprenderá a usá-las",
        link:"https://www.youtube.com/embed/ZHg0ZZ2O2Eo",
        titulo:"Inteligência artificial para a criação de vídeo"},
        {descri:"Iniciar no Dropshippingtem se tornado uma tarefa difícil com tantas informações soltas que se veem na internet, mas nesse módulo você verá o modo correto",
        link:"https://www.youtube.com/embed/xM3h1Y_ZIjI",
        titulo:"Comçando do zero no Dropshipping"},
        {descri:"O Midjourney é uma inteligência artificial que gera imagens e até mesmo logos",
        link:"https://www.youtube.com/embed/2UbY_yMNaHE",
        titulo:"Usando a Midjourney"},
        {descri:"Como elaborar missão e valores que possam se alinhas com o objetivos e a área de atuação da sua empresa",
        link:"https://www.youtube.com/embed/63Hk4DyQqFw",
        titulo:"Elaborar Missão, Visão e Valores"},
    ]
    function abrirPopup(link, descri, titulo){
        props.abrir_fechar(true)
        props.setdescri(descri)
        props.setlink(link)
        props.settitulo(titulo)
    }
    return(
        <div className="content">
            <div className='aba'>
                <div className='titulos'>
                    <label>Agências</label>
                    <label>Chatbot</label>
                    <label>Marketing Digital</label>
                    <label>Geração de Leads</label>
                    <label>Mídia Paga</label>
                </div>
                <div className='selecao'>
                    <label>Ordenar por:</label>
                    <select>
                        <option>Data de Publicação</option>
                    </select>
                </div>
            </div>
            <div className='cards'>
                {videos.map((item, key) => (
                    <div key={key} className='card' onClick={() => abrirPopup(item.link, item.descri, item.titulo)}>
                        <div className='imagem' style={{backgroundImage: `url(${Thumb.src})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'}}>
                            <div className='thumb' style={{backgroundImage: `url(${Play.src})`,
                            backgroundPosition: 'center',
                            backgroundSize: '60px',
                            backgroundRepeat: 'no-repeat'}}>
                            </div>
                        </div>
                        <label>{item.titulo}</label>
                    </div>
                ))}
            </div>
            <div className='index'>
                <h2>Página</h2>
                <h2 className='indice'>1</h2>
                <h2 className='indice'>2</h2>
                <h2 className='indice'>3</h2>
                <h2 className='indice'>4</h2>
            </div>
        </div>
    )
}