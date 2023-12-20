function Header_main(){
    return(
      <header className="header-main">
        <div className='head-inner'>
          <div className="header-left">
            <img src="/img/blogger.png" />
            <h2>Blogstan</h2>
            <input type="search" placeholder="Поиск" />
            <img src="" alt="" className="saved" />
            <h5>Создай свой блог с нами</h5>
          </div>
            <img width={22} height={22} src="/img/logo.jpeg"  className="mini-ava" />
          </div>
      </header>
    );
}
export default Header_main;
