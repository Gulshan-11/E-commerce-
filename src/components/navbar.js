import React from 'react';
import { Link } from 'react-router-dom';

const list = [
  {
    id: 0,
    name: 'Login',
    path: '/login'
  },
  {
    id: 1,
    name: 'Contact',
    path: '/contacts'
  },
  {
    id: 2,
    name: 'About',
    path: '/about'
  },
  {
    id: 3,
    name: 'Products',
    path: '/products'
  }
]

const NavBar = () => {
  return (
      <header className='navbar'>
        <Link to='/' className='headlinkwrapper'>
          <h3 className='headlinktitle'>
            shoplit
          </h3>
        </Link>
        <ul className="navlist">
          {
            list.map((item) => (
              <Link to={item.path} key={item.id} className='link'>{item.name}</Link>
            ))
          }
        </ul>
      </header>
  )
}

export default NavBar;