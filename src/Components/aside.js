import Asking from '../Assets/images/Illustration.png'
import '../Styles/Login.scss'


export function Aside(){

    return(
        <aside>
                <div className='Banner'>
                   
                    <img src={Asking} alt="Respondesdo Perguntas"/>
                     
                     <h1>Toda Pergunta Tem Uma Resposta!</h1>
                     
                    <span>Aprenda e Compartilhe Conhecimento Com Outras Pessoas</span>
                </div>
            </aside>
    )
}