import React , {useState,useEffect} from 'react';
import {auth , provider , signInWithPopup} from '../Services/firebase'

const AuthContext = React.createContext()

 function Auth(props){
    
    const [user , setUser] = useState('')

    useEffect(()=>{
        const unSubscribe = auth.onAuthStateChanged(user=>{
      if(user){
           const {displayName , uid} = user
         
          
           setUser({
             id:uid,
             name:displayName
           })
         }else{
           //throw new Error('Esta faltando informações da sua conta Goolgle')
         }
        })
     
        return ()=>{
          unSubscribe()
        }
      },[])
    async function SiginWithGoogle(){
  
        const response = await signInWithPopup(auth , provider);
      
        if(response.user){
          const {displayName , uid} = response.user
        
         
          setUser({
            id:uid,
            name:displayName
          })
        }else{
          throw new Error('Esta faltando informações da sua conta Goolgle')
        }
      
      }
    
    return(
        <AuthContext.Provider value={{user , setUser ,SiginWithGoogle}} >
            {props.children}
        </AuthContext.Provider>
    )
}


export {Auth , AuthContext}










