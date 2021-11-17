import {ButtonPurple} from '../Components/Exports.js' 
import { useAuth } from '../Hooks/useAuth.js'
import '../Styles/Room.scss'
import {Disabledbutton} from '../Components/ButtonPurple'
import {useState} from 'react'
import {db , ref ,push} from '../Services/firebase'
import {useParams} from 'react-router-dom'
import { UserImg } from '../Assets/exports.js'
    
export function Question(props){
        const {user , SiginWithGoogle } = useAuth()
        const [newQuestion , setNewQuestion] = useState();
        const roomId = useParams().id;


        async function logar(e){
            e.preventDefault()
           await SiginWithGoogle()
        }

        async function handleCreateQuestion(e){
            e.preventDefault();
            if (newQuestion.trim()==='') {
                
                return alert('Please enter a question')
            }

          

             const dbRef = ref(db,`rooms/${roomId}/questions` )
            push(dbRef,{
                content : newQuestion,
                creator:{
                    userId:user.id,
                    UserName:user.name,
                }
            });
            setNewQuestion('')
        }


        return(
            <form className='form' onSubmit={e=>handleCreateQuestion(e)}>
                <textarea placeholder='Faça sua Pergunta!' onChange={e =>setNewQuestion(e.target.value)} value={newQuestion} />
                <div>
                {(!user)
                ?
                <span>Para enviar Perguntas<button type='button' onClick={(e)=>{logar(e)}}>faça seu Login</button></span>
                :
                <div className='user'>
                    <img src={UserImg} alt='User'/>
                    <span>{user.name}</span>
                </div>
                }
                {(!user) 
                ?
                <Disabledbutton/>
                :
                <ButtonPurple text='Enviar Pergunta!' />
                }
                
               
                </div>
            
            </form>
        )
    }