
import {ButtonPurple} from './Exports'
import './Style/Form.scss'


export function Form(props){
    return(
        <form>
            <input type="text" className='imput' placeholder={props.placeholder}/>
             <ButtonPurple text='Entrar!'/>
          </form>
    )
}