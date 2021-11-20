import {Logo , Asks , Copy , Excluir , Checked , Chat , Like} from '../Assets/exports'
import '../Styles/Room.scss'
import {useParams , useHistory} from 'react-router-dom'
import {child , ref , get , db , onValue , signOut , auth , push} from '../Services/firebase'
import {useEffect, useState} from 'react'
import {useAuth} from '../Hooks/useAuth'
import {Question} from '../Components/Exports'
import {UserImg} from '../Assets/exports'
import {update} from 'firebase/database'
import {remove} from 'firebase/database'


export function NewRoom(){

    const roomcode = useParams().id
    const history = useHistory()

    const [roomTitle,setRoomTitle] = useState('')
    const {user , setUser} = useAuth()
    const [question , setQuestion] = useState([])
    const [authorId,setAuthorId] = useState('')
    const dbref = ref(db);
    const questionref = ref(db,`rooms/${roomcode}/questions`)
    //const likeref = ref(db,`rooms/${roomcode}/questions/likes`)

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
                       isAnwsered:value.isAnwsered,
                       isResponding:value.isResponding,
                       like: value.likes===undefined ? 0 : Object.entries(value.likes).length,
                       likeid:value.likes===undefined ? undefined :Object.entries(value.likes).map(([key,value])=>{return value }),
                       likesAmount:value.likes
                     }
                        
                    })
                  
                   setQuestion(data2)
                   
                } else {
                    console.log('else')
                }
              
               
            })
            
             
         
        
    
  
       
  },[roomcode])

  async function logOut(e){
    e.preventDefault();
    signOut(auth).then(()=>{
        setUser('')
        alert('Voce nao esta mais logado')
    }).catch((Error)=>{
        alert(Error.code)
    })
  }

  function handleCloseRoom(){
    const roomref  = ref(db,`rooms/${roomcode}`)
   
    update(roomref,{
        isClosed:true,
    })
    
    history.push('/')
  }
  function handleRemoveQuestion(questionId){
      
    remove(ref(db,`rooms/${roomcode}/questions/${questionId}`))
  }
  async function handleIsAnwsered(questionid ){
    const questionref = ref(db,`rooms/${roomcode}/questions/${questionid}`)

    update(questionref,{
      isAnwsered:true,
    })

  }
  async function handleIsresponding(questionid){
    const questionref = ref(db,`rooms/${roomcode}/questions/${questionid}`)
    update(questionref,{
        isResponding:true
    })
  }
   async function handleLike(id,like , amount){
        const likeref = ref(db,`rooms/${roomcode}/questions/${id}/likes`)
        //const likeId = Object.entries(amount)
        

        function test(element){

          return element ===user.id
        }

       if(like===undefined){
        push(likeref,{
          author:user.id,})
       }else{
       const len = like.map(item=>{return item.author})
        const find = len.find(test)
        if(find===user.id){
         return
        }else{
          push(likeref,{
            author:user.id,})
        }
       }
     
      
       // })
     //const data =   Object.entries(like)
    
  //console.log(like.filter(filter))
      
      
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
                <button className='Second' type='button' onClick={handleCloseRoom}>Encerrar Sala!</button>
                }
                <button onClick={(e)=>logOut(e)} className='logout'>LogOut</button>
                </div>
        
        </header>
        
        <section>
            <main>
            <div className="Title"><h1>{roomTitle}</h1><span>{question.length}Pergunta(s)</span></div>
            {(user.id !== authorId) && <Question/> }
                  {question.length>0
                  ?
                  question.map(item=>(
                    <div key={item.questionId} className={`question ${item.isAnwsered===true && "isAnwsered"} ${item.isResponding===true && 'isResponding'}`} >
                     <p>{item.content}</p>
                        <footer>
                     <div className="user-info">
                    <img src={UserImg} alt={UserImg}/>
                        <span>{item.author}</span>
                        </div>
                        {(user.id === authorId)
                        ?
                        <div className='Btns'>
                        <button className='isAnwsered' onClick={()=> handleIsAnwsered(item.questionId)}>
                        <img src={Checked} alt='Marcar como Respondida'/>
                        </button>
                        <button className='isResponding' onClick={()=> handleIsresponding(item.questionId)}>
                        <img src={Chat} alt='Marcar Como respondendo'/>
                        </button>
                        <button className='Excluir' onClick={()=> handleRemoveQuestion(item.questionId)}>
                        <img src={Excluir} alt='Excluir Pergunta'/>
                        </button>
                        </div>
                        :
                        <div className='Btns'>
                        <button className="like"  onClick={()=>handleLike(item.questionId,item.likeid,item.likesAmount)}>
                        <span>{item.like}</span>
                        <img src={Like} alt='Curtir'/>
                        </button>
                        </div>
                        }
                        
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