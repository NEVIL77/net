import React                from 'react' ;
import { LogoImage }        from '../utilit/photos';

const Header = () => {
  return (
    <div>
      <img
        className='w-48 absolute bg-gradient-to-b from-black'
        src={LogoImage} alt='logo'/>
    </div>
  )
}

export default Header