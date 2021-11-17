import './Style/button.scss'
import Entrar from '../Assets/icons/log-in 1.svg'

export function ButtonPurple(props){
    return(

        <button className='EnterRoom'><img src={Entrar} alt='Entrar' />{props.text}</button>

    )
}

export function Disabledbutton(){
    return(
        <button className='disabled' disabled>Enviar pergunta!</button>
    )
}


