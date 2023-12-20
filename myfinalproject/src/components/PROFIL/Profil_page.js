import Profil_about from "./Profil_about";
import Profil_inner from "./Profil_inner";
import Blog_profil from "./Blog_profil";
function Profil_page(){
    return(
        <section class="profil">
            <div className="news-header">
                <img src="/img/logo.jpeg" />
                <h1>Мой профиль</h1>
            </div>
        <Profil_inner/>
        <Profil_about/>
        <div class="myposts">
            <Blog_profil/>
        </div>
    </section>
    );
}
export default Profil_page;