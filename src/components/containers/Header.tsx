import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRightSvg, CalculatorSvg, ChatSvg } from '../../assets/svg'
import imgLogo from '../../assets/img/logo.png'
import '../../styles/Header.css'

const Header = (): JSX.Element => {
  // Estados
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Handle open/close menu
  const handleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Handle close menu
  const handleMenuClose = (): void => {
    setIsMenuOpen(false)
  }

  return (
    <header className='header'>
      <section className='header__container container'>
        <Link to='/' className='header__logo' title='Inicio'>
          <img src={imgLogo} width={50} height={50} />
        </Link>

        <button
          className={`header__menubar ${isMenuOpen ? 'active' : ''}`}
          onClick={handleMenu}
          title='Menu'
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </section>

      <section className={`header__menu ${isMenuOpen ? 'aparecer' : ''}`}>
        <div className='container'>
          <div className='header__menu-item'>
            <h2>
              <CalculatorSvg />
              <span>Calculadoras</span>
            </h2>
            <ul>
              <li>
                <ChevronRightSvg />
                <Link to='/' onClick={handleMenuClose}>
                  Calcular IMC
                </Link>
              </li>
              <li>
                <ChevronRightSvg />
                <Link to='/calcular-peso-ideal' onClick={handleMenuClose}>
                  Calcular peso ideal
                </Link>
              </li>
            </ul>
          </div>

          <div className='header__menu-item'>
            <h2>
              <ChatSvg />
              <span>Redes</span>
            </h2>
            <ul>
              <li>
                <ChevronRightSvg />
                <a
                  href='https://whitecode.online/'
                  target='_blank'
                  rel='noreferrer'
                  onClick={handleMenuClose}
                >
                  Portafolio
                </a>
              </li>
              <li>
                <ChevronRightSvg />
                <a
                  href='https://www.instagram.com/martin_flores_28/'
                  target='_blank'
                  rel='noreferrer'
                  onClick={handleMenuClose}
                >
                  Instagram
                </a>
              </li>

              <li>
                <ChevronRightSvg />
                <a
                  href='https://www.facebook.com/garena.flores.9'
                  target='_blank'
                  rel='noreferrer'
                  onClick={handleMenuClose}
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>

          <div className='header__menu-item'>
            <h2>
              💌
              <span>Sociales</span>
            </h2>
            <ul>
              <li>
                <ChevronRightSvg />
                <a
                  href='https://www.linkedin.com/in/martin-alexander-flores-torres/'
                  target='_blank'
                  rel='noreferrer'
                  onClick={handleMenuClose}
                >
                  Linkedin
                </a>
              </li>
              <li>
                <ChevronRightSvg />
                <a
                  href='https://github.com/MartinAlexanderFloresTorres'
                  target='_blank'
                  rel='noreferrer'
                  onClick={handleMenuClose}
                >
                  Github
                </a>
              </li>
              <li>
                <ChevronRightSvg />
                <a
                  href='https://api.whatsapp.com/send?phone=929254912&text=Hola%20Martin.'
                  target='_blank'
                  rel='noreferrer'
                  onClick={handleMenuClose}
                >
                  Whatsapp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </header>
  )
}

export default Header
