import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from 'react-bootstrap';

import profPic from '../assets/image/prof-pic.png';

const SideMenu = () => {
  return(
    <Stack className='sidemenu glass--blur'>
      <div className='py-4 text-center prof-pic'>
        <img src={profPic} alt="" className='mb-3' />
        <h5 className='fw-bold'>Yoshimoto, Mariko</h5>
        <h6 className='fw-light'>Web Developer</h6>
      </div>
      <Stack>
        <Link to="/" className='text-decoration-none p-3 ps-4 sidemenu__link'>
          <i className="fas fa-home pe-2"></i>Home
        </Link>
        <Link to="/skills" className='text-decoration-none p-3 ps-4 sidemenu__link'>
          <i className="fas fa-cogs pe-2"></i>Skills
        </Link>
        <Link to="/experience" className='text-decoration-none p-3 ps-4 sidemenu__link'>
          <i className="far fa-clipboard pe-2"></i>Experience
        </Link>
        {/* <Link to="/contact" className='text-decoration-none p-3 ps-4 sidemenu__link'>
          <i className="far fa-id-badge pe-2"></i>Contact
        </Link> */}
      </Stack>
      <Stack direction='horizontal' className='mb-2 justify-content-center sidemenu__ext-links'>
        <a href='https://github.com/yoshimariko' target='_blank' rel="noreferrer" className='mx-2'><i className="fab fa-github-alt"></i></a>
        <a href='https://www.linkedin.com/in/m-yoshi44' target='_blank' rel="noreferrer" className='mx-2'><i className="fab fa-linkedin-in"></i></a>
        <a href='mailto:yoshimoto.m28@gmail.com' target='_blank' rel="noreferrer" className='mx-2'><i className="fas fa-at"></i></a>
      </Stack>
    </Stack>
  );
};
export default SideMenu;