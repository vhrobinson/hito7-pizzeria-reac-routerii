import { useEffect, useState} from "react"
import axios from "axios"
import Header from "./components/Header"
import CardPizza from "./components/CardPizza"
import "./Home.css"

function Home() {
  const [pizzas, setPizzas] = useState([]);
  useEffect(() => {
    // Hacemos una solicitud GET a la API del backend
    axios.get('http://localhost:5000/api/pizzas')
      .then(response => {
        setPizzas(response.data);
        
      })
      .catch(error => {
        console.error('Hubo un error al obtener las pizzas:', error);
      });
  }, []);

  return (
    
      <div>
        <Header />
      <div className= "container mx-auto px-4 py-8">
         <h1 className="text-2xl font-bold text-center mb-8">Menú de Pizzas</h1>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                {pizzas.map((pizza) => (
                   <CardPizza key={pizza.id} pizza={pizza} />
            
                      ))}
          </div>
        </div>
      </div>

        

  
  );
}



export default Home