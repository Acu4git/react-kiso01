import { Link } from '@chakra-ui/react'
import { Link as ReactRouterLink } from 'react-router-dom'
import '@style/Header.css'

const Header = () => {
return (
    <header>
      <div className='page-title'>
        <Link as={ReactRouterLink} to='/home'>掲示板</Link>
      </div>
      <div className='header-right'>
        <Link as={ReactRouterLink} to='/create_thread'>
          スレッドを立てる
        </Link>
      </div>
    </header>
  )
}

export default Header