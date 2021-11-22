import {Aside , Form} from '../Components/Exports'
import Logo from '../Assets/images/Logo.png'
import '../Styles/Login.scss'
import {useAuth} from '../Hooks/useAuth'

export function CreateNewRoom(){

    const {user} = useAuth()

    return(
        <div className='Login'>
        <Aside/>
        <section>
                <main>
                    <div className='WithGoogle'> 
                       
                        <img src={Logo} alt="Logo Letmeask"/>
                        
                   </div>
                    {(user)
                        ?
                     <h1>Ola , {user.name}</h1>   
                        :
                        <div></div>
                    }
                    
                    
                    
                    <h1 className='TitleNewRoom'>Crie Uma Nova Sala</h1>
                    <Form placeholder='Crie uma nova sala!'/>
                
                </main>
        </section>
        </div>
    )

}