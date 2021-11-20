import {Logo , GoogleIcon} from '../Assets/exports'
import {useHistory} from 'react-router-dom'
import '../Styles/Login.scss'
import {Aside , ButtonPurple} from '../Components/Exports'
import {useAuth} from '../Hooks/useAuth'
import { useState } from 'react'
import {child , get , ref , db} from '../Services/firebase'

export function Home(props){
    const history = useHistory()
    const {SiginWithGoogle , user} = useAuth()
    const [roomCode , setRoomCode] = useState('')


   async function logar(e){
    if(!user){
        await SiginWithGoogle()
    }
    
    history.push('/CreateRoom')

    }
        
   async function handleEnterRoom(e){
            e.preventDefault()

           const dbref = ref(db);
           get(child(dbref,`rooms/${roomCode}`)).then(response => {
               if (!response.exists() || response.val().isClosed) {
                   alert('Room not found or Was alredy Closed')
            } else {
                   history.push(`/${response.key}`)
               }
           }
               
           ).catch(Error => {
               alert(Error.message)
           })

           
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
                    <form onSubmit={handleEnterRoom}>
                    <input onChange={e => setRoomCode(e.target.value) } type="text" className='imput' placeholder='Ou entre em uma sala existente'/>
                    <ButtonPurple text='Entrar!'/>
                    </form>
                
                </main>
            </section>
        </div>

    )


}