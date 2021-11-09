
import  Logo  from '../Assets/images/Logo.png'
import  GoogleIcon  from '../Assets/icons/Icon.svg'

import '../Styles/Login.scss'
import { Form } from '../Components/Form'
import { Aside } from '../Components/aside'


export function Home(props){


    
    return(
        <div className="Login">
           

            <Aside/>

            <section>
                <main>
                    <div className='WithGoogle'> 
                        <img src={Logo} alt="Logo Letmeask"/>
                        <button className='Google'><img src={GoogleIcon} alt='Logo Do Google'/> Crie Sua Sala Com o Google</button>
                   </div>
                        <div className='Separator'>ou entre em uma sala existente!</div>
                    <Form placeholder='Ou entre em uma sala existente!'/>
                
                </main>
            </section>
        </div>

    )


}