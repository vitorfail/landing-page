import './Popup.css'
import Image from 'next/image'
import Nuvem from '../../images/nuvem.png'
export default function Popup(props){
    return(
        <div className={props.estado? "popup show": "popup"}>
            <div className='modal'>
                <div className='fechar'>
                    <button onClick={() => props.abrir_fechar(false)}>X</button>
                </div>
                <label className='titulo'><strong style={{color:"#0084ff"}}>Weebinar</strong>: Como aumentar sua gerção de Leads</label>
                <iframe src='https://www.youtube.com/embed/CUOJl3USsD0'></iframe>
                <div className='descri'>
                    <label>Descrição</label>
                    <div className='linha'></div>
                    <label>Aqui você inicia a preparação para o nosso curso, ficando disponíveis pra 
                        você os nossos materiais documentos e videos</label>
                </div>
                <div className='descri'>
                    <label>Dowloads</label>
                    <div className='linha'></div>
                    <div className='dowloads'>
                        <div className='click' style={{background:"#36ff62"}}>
                            <Image src={Nuvem}></Image>
                            <label>Spreadsheet.xls</label>
                        </div>
                        <div className='click' style={{background:"#7bcbf9"}}>
                            <Image src={Nuvem}></Image>
                            <label>Document.doc</label>
                        </div>
                        <div className='click' style={{background:"#efff5e"}}>
                            <Image src={Nuvem}></Image>
                            <label>Presentation.ppt</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}