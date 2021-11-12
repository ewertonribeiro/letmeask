import {Logo , GoogleIcon} from '../Assets/exports'
import {useHistory} from 'react-router-dom'
import '../Styles/Login.scss'
import {Aside , Form} from '../Components/Exports'
import {useAuth} from '../Hooks/useAuth'


export function Home(props){
    const history = useHistory()
    const {SiginWithGoogle , user} = useAuth()
   


   async function logar(e){
    if(!user){
        await SiginWithGoogle
    }
    
    history.push('/CreateRoom')

    }
        
        
    
  
    
    return(
        <div className="Login">
           

            <Aside/>

            <section>
                <main>
                    <div className='WithGoogle'> 
                        <img src={Logo} alt="Logo Letmeask"/>
                        <button className='Google' onClick={e=>{logar(e)}}><img src={GoogleIcon} alt='Logo Do Google'/> Crie Sua Sala Com o Google</button>
                   </div>
                    
                    <div className='Separator'>ou entre em uma sala existente!</div>
                    <Form placeholder='Ou entre em uma sala existente!'/>
                
                </main>
            </section>
        </div>

    )


}