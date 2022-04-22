import {Link} from 'react-router-dom';
import img from '../assets/images/notfound.svg'
import Wrapper from '../assets/wrappers/ErrorPage'
const Error = () =>{
    return (
       <Wrapper className='full-page'>
           <div><img src={img}alt="error not found"/>
           <h3>Oops Page not found!</h3>
           <p>The page you are trying to reach can not be found. Would you like to go back home?</p>
           <Link to="/"> Back Home</Link></div>
       </Wrapper>
    )
}

export default Error;