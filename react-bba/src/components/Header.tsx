import '@style/Header.css'

const Header = () => {
return (
    <header>
      <div className='page-title'>
        <h1>掲示板</h1>
      </div>
      <div className='header-right'>
        <a href="#">スレッドを立てる</a>
      </div>
    </header>
  )
}

export default Header