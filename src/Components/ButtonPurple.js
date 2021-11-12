import './Style/Form.scss'
import Entrar from '../Assets/icons/log-in 1.svg'

export function ButtonPurple(props){
    return(

        <button className='EnterRoom'><img src={Entrar} alt='Entrar'/>{props.text}</button>

    )
}


