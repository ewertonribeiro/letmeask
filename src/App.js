import {BrowserRouter } from 'react-router-dom'
import './Styles/Global.scss'
import { Routess } from './Routes/Routes'
import {Auth} from './Contexts/Authcontext'
 

export function App() {

 
 return (
   
     
   <BrowserRouter>
    <Auth>
      <Routess />
    </Auth>
    </BrowserRouter>
    
     
  );
}


