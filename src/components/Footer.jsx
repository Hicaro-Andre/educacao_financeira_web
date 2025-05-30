import React from 'react';
import logoFooter from '../assets/images/footer/logo-footer.svg';
import faceIcon from '../assets/images/footer/face.svg';
import instaIcon from '../assets/images/footer/insta.svg';
import youtubeIcon from '../assets/images/footer/youtube.svg';

//* componente filho
function Footer (){

    const navLinks = [
    { id: 1, text: 'Home', href: '#hero' },
    { id: 2, text: 'Mentorias', href: '#plans' },
    { id: 3, text: 'Sobre', href: '#sobre' },
    { id: 4, text: 'Princípios', href: '#principios' },
    { id: 5, text: 'Depoimentos', href: '#depoimentos' },
    { id: 6, text: 'Blog', href: '#blog' }
  ];

  const socialIcons = [
    { id: 1, icon: faceIcon, alt: 'Facebook', className: 'svg-icon1' },
    { id: 2, icon: instaIcon, alt: 'Instagram', className: 'svg-icon3' },
    { id: 3, icon: youtubeIcon, alt: 'YouTube', className: 'svg-icon4' }
  ];

  return(
     <footer>
      <div className="footer__content">
        <img src={logoFooter} alt="Logo" />

        <div className="footer__rede-socias">
          {socialIcons.map((social) => (
            <img
              key={social.id}
              className={social.className}
              alt={social.alt}
              src={social.icon}
            />
          ))}
        </div>
      </div>

      <div className="footer__nav">
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={link.href}>{link.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer;