import { PiEyesFill } from "react-icons/pi";
import { TiShoppingCart } from "react-icons/ti";
import { formatCurr } from "../../utils/formatCurr";
import { usePizza } from "../../context/PizzaContext";
import { Link } from "react-router-dom";

const CardPizza = ({ pizza }) => {
    const { addCarro } = usePizza();

    return (
        <>
            <div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="w-full" src={pizza.img} alt={pizza.name}></img>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 flex justify-center border-b-2 border-gray-400">{pizza.name}</div>
                        <span>{pizza.desc}</span>

                        <p className="text-gray-700 text-base border-b-2 border-gray-400">Ingredientes:  {pizza.ingredients.join(",")} </p>
                        <div className="flex justify-center items-center border-b-2 border-gray-400">
                            <h1 className="font-bold text-xl text-red-500">Precio: ${formatCurr(pizza.price)}</h1>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <div>
                            <Link to={`/pizza/${pizza.id}`} className="flex justify-center items-center inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Ver Más <PiEyesFill /></Link>
                        </div>
                        <div>
                            <button 
                                onClick={() => addCarro(pizza)}
                                className="flex justify-center items-center inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Añadir <TiShoppingCart /></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardPizza;
