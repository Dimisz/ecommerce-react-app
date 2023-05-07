import { Outlet, Link } from "react-router-dom";
import './Navigation.styles.scss';
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';

const Navigation = () => {
  return(
    <>
      <div className='navigation'>
        <Link 
          to='/' 
          className='logo-container'
        >
          <CrwnLogo/>
        </Link>
        <div className='nav-links-container'> 
          <Link 
            to='/shop' 
            className='nav-link'
          >
            Shop
          </Link>
        </div>
      </div>
      <Outlet/>
    </>
  )
}

export default Navigation;