import {useContext} from 'react'
import {AuthContext} from '../Contexts/Authcontext'

function useAuth(){
    
    const useAuth = useContext(AuthContext)
    
    
    return useAuth
}

export {useAuth}