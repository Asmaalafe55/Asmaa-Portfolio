import React from 'react';
import { BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://github.com/Asmaalafe55">
          <BsGithub />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/asmaa-lafe-08838123a/">
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/asmaalafe55/">
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
