import Bloger from './Bloger'
function Blogers_page(){
    return(
        <section className="blogers">
            <div className="news-header">
                <img src="/img/logo.jpeg" />
                <h1>Список блогеров</h1>
            </div>
            <Bloger/>
      </section>
    );
}
export default Blogers_page;