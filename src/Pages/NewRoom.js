import {Logo , Asks , Copy} from '../Assets/exports'
import '../Styles/Room.scss'
import {useParams} from 'react-router-dom'
import {child , ref , get , db , onValue , signOut , auth} from '../Services/firebase'
import {useEffect, useState} from 'react'
import {useAuth} from '../Hooks/useAuth'
import {Question} from '../Components/Exports'
import {UserImg} from '../Assets/exports'

export function NewRoom(){

    const roomcode = useParams().id
    const [roomTitle,setRoomTitle] = useState('')
    const {user , setUser} = useAuth()
    const [question , setQuestion] = useState([])
    
    const [authorId,setAuthorId] = useState('')
    const dbref = ref(db);
    const questionref = ref(db,`rooms/${roomcode}/questions`)

 

  useEffect(()=>{
    (()=>{
            

        get(child(dbref,`rooms/${roomcode}`)).then(res =>{
            setRoomTitle(res.val().title)
            setAuthorId(res.val().authorId)
            
        })
        })()
  
    
       
  
    
   
            onValue(questionref,room=>{
                const data = room.val()
                if (room.exists()) {
                    const data2 = Object.entries(data)
                    .map(([key,value])=>{
                        
                     return {
                         questionId:key,
                         content:value.content,
                        author:value.creator.UserName,
                       questionAuthorId:value.creator.userId,
                     }
                        
                    })
                   setQuestion(data2)
                } else {
                    console.log('else')
                }
              
               
            })
        
    
  
       
  },[roomcode,question.length])

  async function logOut(e){
    e.preventDefault();
    signOut(auth).then(()=>{
        setUser('')
        alert('Voce nao esta mais logado')
    }).catch((Error)=>{
        alert(Error.code)
    })
  }

    return(
       <div className='NewRoom'>
        <header>
            <div className='logo'>
                <img src={Logo} alt='logo'/>
            </div>
            <div className='Buttons'>
               
              
               <button className='First'>
                <div>
                   <img src={Copy} alt='copy'/>
                   </div>
                <span>Sala {roomcode}</span>
                </button>
                {(!user || user.id !== authorId )
                ?
                <div></div>
                :
                <button className='Second'>Encerrar Sala!</button>
                }
                </div>
        <button onClick={(e)=>logOut(e)}>LogOut</button>
        </header>
        
        <section>
            <main>
            <div className="Title"><h1>{roomTitle}</h1><span>{question.length}Pergunta(s)</span></div>
            {(user.id !== authorId) && <Question/> }
                  {question.length>0
                  ?
                  question.map(item=>(
                    <div key={item.questionId} className="question">
                     <p>{item.content}</p>
                        <footer>
                     <div className="user-info">
                    <img src={UserImg} alt={UserImg}/>
                        <span>{item.author}</span>
                        </div>
                        <div>
                        </div>
                    </footer>
                    </div>
                  ))
                  :
                    <div className='img'>
                    <img src={Asks}alt='Perguntas'/>
                    <h1>Nenhuma Pergunta por aqui....</h1>
                   
                    </div>
                  }
                
                 
               
            </main>
        </section>
        </div>
    )
}