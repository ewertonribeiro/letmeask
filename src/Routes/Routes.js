import {BrowserRouter , Switch , Route} from 'react-router-dom'
import {CreateNewRoom} from '../Pages/CreateNewRoom'
import { Home } from '../Pages/Home';



export function Routess(){
    return(
     <BrowserRouter>
         <Switch>
             <Route component={Home} exact path="/"/>
             <Route component={CreateNewRoom} path='/CreateRoom'/>
         </Switch>
     </BrowserRouter>
            
    
    );
}

