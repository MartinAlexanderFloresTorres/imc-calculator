import { AppGooglePlaySvg, AppStoreSvg } from '../../assets/svg'
import '../../styles/Footer.css'

const Footer = (): JSX.Element => {
  return (
    <footer className='footer'>
      <section className='container'>
        <h3>Descárgate la app de IMC calculator</h3>
        <div className='footer__apps'>
          <a href='#'>
            <AppStoreSvg />
          </a>
          <a href='#'>
            <AppGooglePlaySvg />
          </a>
        </div>
        <a
          href='https://whitecode.online/contacto'
          target='_blank'
          rel='noreferrer'
          className='btn btn-gray'
        >
          Contactanos
        </a>

        <p>
          Copyright © 2022 IMC calculator. All rights reserved.{' '}
          <a href='https://whitecode.online/contacto' target='_blank' rel='noreferrer'>
            Contactanos
          </a>
        </p>
      </section>
    </footer>
  )
}

export default Footer
