import Image from 'next/image'
import Thumb from '../../images/thumbnail.png'
import Play from '../../images/play.png'
import './Videos.css'
export default function Videos(){
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
                <div className='card'>
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
                    <label>Como aumentar a geração e Leads Feat.Traktor</label>
                </div>
                <div className='card'>
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
                    <label>Como aumentar a geração e Leads Feat.Traktor</label>
                </div>
                <div className='card'>
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
                    <label>Como aumentar a geração e Leads Feat.Traktor</label>
                </div>
                <div className='card'>
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
                    <label>Como aumentar a geração e Leads Feat.Traktor</label>
                </div>
                <div className='card'>
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
                    <label>Como aumentar a geração e Leads Feat.Traktor</label>
                </div>
                <div className='card'>
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
                    <label>Como aumentar a geração e Leads Feat.Traktor</label>
                </div>
                <div className='card'>
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
                    <label>Como aumentar a geração e Leads Feat.Traktor</label>
                </div>
                <div className='card'>
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
                    <label>Como aumentar a geração e Leads Feat.Traktor</label>
                </div>
                <div className='card'>
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
                    <label>Como aumentar a geração e Leads Feat.Traktor</label>
                </div>
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