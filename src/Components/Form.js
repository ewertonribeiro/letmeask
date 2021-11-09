
import { ButtonPurple } from './Buttons/ButtonPurple'
import './StyleComponents/Form.scss'


export function Form(props){
    return(
        <form>
            <input type="text" className='imput'placeholder={props.placeholder}/>
             <ButtonPurple text='Entrar!'/>
          </form>
    )
}