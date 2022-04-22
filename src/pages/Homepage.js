import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/homewrap';
import Logo from '../components/logo';
import {Link} from 'react-router-dom';

const Homepage = () => {
  return (
  <Wrapper>
    <nav>
   <Logo />
    </nav>
    <div className="container page"> 
    {/*Info */}
    <div className="info">
      <h1>Job <span>Tracking</span> Application</h1>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fringilla ut dui ac vestibulum. Duis sollicitudin felis id ex facilisis, eget sollicitudin odio rutrum. Vivamus quis vehicula felis. Morbi quis tempor odio. Proin mattis enim et velit viverra fringilla. Duis dui tortor, consectetur id dui at, pellentesque semper quam. Maecenas quis egestas dolor.
      </p>
      <Link to="/register" className="btn btn-hero"> Login/Register</Link>
      </div>
      <img src={main} alt="girl posting jobs" className="img main-img"/>
    </div>
  </Wrapper>
  )
}


export default Homepage;