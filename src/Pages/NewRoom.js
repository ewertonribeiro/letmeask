import {Logo , Asks , Copy} from '../Assets/exports'
import '../Styles/Room.scss'


export function NewRoom(){

    return(
       <div className='NewRoom'>
        <header>
            <div className='logo'>
                <img src={Logo} alt='logo'/>
            </div>
            <div className='Buttons'>
               
              
               <button className='First'>
                <div>
                   <img src={Copy} alt='copy'/>
                   </div>
                <span>Sala # 232425</span>
                </button>
                
                <button className='Second'>Encerrar Sala!</button>
                </div>
        
        </header>
        

        <section>
            <main>
            <div className="Title"><h1>Sala React Q&A</h1></div>
            <div className='img'>
                <img src={Asks}alt='Perguntas'/>
                <h2>Nenhuma Pergunta por aqui....</h2>
                <p>Envie o código desta sala para os seus amigos e comece a responder perguntas!!</p>
            </div>
            </main>
        </section>
        </div>
    )
}