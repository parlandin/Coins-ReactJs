import savings from "../../images/savings.svg"
import Styles from "./home.css" 
import LinkButton from "../../Components/Button/LinkButton";
 
function Home(){
   
    return (
       <section className="home_container">
           <h1>
               Bem-vindo ao <span>Coins.F </span>
           </h1>
           <p>Comece a gerenciar os seus projetos agora mesmo!</p>

           <LinkButton to="/newproject" text="Criar Projeto" />

           <div className="home_image">
                <img src={savings}  alt="imagem de um cofre de porco"/>
           </div>
       </section>
      )
}

export default Home