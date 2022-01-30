import { FaAws, FaDiscord, FaGooglePlus, FaOctopusDeploy } from "react-icons/fa";

 
function Home(){
   
    return (
       <>
       <h1>Essa é a pagina inicial</h1>
       <span>lista de incons</span>
       <ul>
           <li>{<FaAws />}</li>
           <li>{<FaDiscord />}</li>
           <li>{<FaGooglePlus />}</li>
           <li>{< FaOctopusDeploy/>}</li>
       </ul>
       </>
      )
}

export default Home