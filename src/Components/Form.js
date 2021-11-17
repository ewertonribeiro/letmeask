
import { useState } from 'react'
import {ButtonPurple} from './Exports'
import './Style/Form.scss'
import {db ,ref ,push} from '../Services/firebase'
import {useAuth} from '../Hooks/useAuth'
import { useHistory } from 'react-router'




export function Form(props){
   
    const [newRoom , setNewRoom] = useState("")
    const history = useHistory()
    const {user} = useAuth()                
   async function HandleCreateNewRoom(e){
        e.preventDefault()

        if (newRoom.trim()==='') {
            
            return alert('Preencha o nome da sala corretamente')
            
        }
        const roomRef = ref(db , 'rooms');

       const firebaseRoom = push(roomRef,{
           title:newRoom,
           authorId:user.id,
       })
       
       history.push(`/${firebaseRoom.key}`)
       console.log(firebaseRoom)
     
    }

    return(
    
        <form onSubmit={HandleCreateNewRoom}>
            <input onChange={event =>setNewRoom(event.target.value)} type="text" className='imput' placeholder={props.placeholder}/>
             <ButtonPurple text='Entrar!'/>
          </form>
          
    )
}