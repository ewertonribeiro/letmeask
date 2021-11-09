import { Aside } from "../Components/aside";
import { Form } from "../Components/Form";
import Logo from '../Assets/images/Logo.png'
import '../Styles/Login.scss'

export function CreateNewRoom(props){

    return(
        <div className='Login'>
        <Aside/>
        <section>
                <main>
                    <div className='WithGoogle'> 
                       
                        <img src={Logo} alt="Logo Letmeask"/>
                        
                   </div>
                       <h1>Crie Uma Nova Sala</h1>
                    <Form placeholder='Crie uma nova sala!'/>
                
                </main>
        </section>
        </div>
    )

}