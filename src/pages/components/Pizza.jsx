import { useEffect, useState } from 'react';
import { formatCurr } from "../../utils/formatCurr";
import { useParams } from 'react-router-dom';

const Pizza = () => {
  const [pizza, setPizza] = useState(null);
  const { id } = useParams();  // Accediendo al parámetro 'id' de la URL

  useEffect(() => {
    // Usando las comillas invertidas para interpolar el valor de 'id' en la URL
    fetch(`http://localhost:5000/api/pizzas/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Hubo un problema con la solicitud');
        }
        return response.json();
      })
      .then(data => {
        setPizza(data); // Guardamos la pizza obtenida en el estado
      })
      .catch(error => {
        console.error('Error al obtener la pizza:', error);
      });
  }, [id]);  // Asegúrate de que el efecto se ejecute cuando 'id' cambie

  if (!pizza) {
    return <div>Cargando...</div>; // Muestra un mensaje mientras se carga la pizza
  }

  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={pizza.img} alt="Pizza" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 flex justify-center border-b-2 border-gray-400">{pizza.name}</div>
          <span>{pizza.desc}</span>

          <p className="text-gray-700 text-base  border-b-2 border-gray-400">
            <strong>Ingredientes:</strong> {pizza.ingredients.join(', ')}
          </p>
          <div className="flex justify-center items-center border-b-2 border-gray-400">
            <h1 className="font-bold text-xl text-red-500">${formatCurr(pizza.price)}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
