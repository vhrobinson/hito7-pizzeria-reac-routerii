import { usePizza } from "../../context/PizzaContext";
import { useUser } from "../../context/UserContext";

function Cart() {
    const { total } = usePizza();
    const { carro, setCarro } = usePizza();
    const { token} = useUser()

    const handleAgregar = (index) => {
        setCarro(carro.map((pizza, i) => 
            i === index ? { ...pizza, count: pizza.count + 1 } : pizza
        ));
    };

    const handleQuitar = (index) => {
        setCarro(carro.map((pizza, i) => 
            i === index && pizza.count > 0 ? { ...pizza, count: pizza.count - 1 } : pizza
        ).filter(pizza => pizza.count > 0));
    };

    return (
        <>
            {carro.length === 0 ? (
                <p>El Carrito está vacío</p>
            ) : (
                <div className="space-y-4">
                    {carro.map((pizza, index) => (
                        <div className="flex items-center p-4 border rounded-lg shadow-lg" key={index}>
                            <img src={pizza.img} alt={pizza.name} className="w-16 h-16 object-cover rounded-md mr-4" />
                            <div className="flex-1 text-center text-lg font-medium">{pizza.name}</div>
                            <div className="flex items-center space-x-2">
                                <button onClick={() => handleAgregar(index)} className="px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300 transition">+</button>
                                <div className="text-lg">{pizza.count}</div>
                                <button onClick={() => handleQuitar(index)} className="px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300 transition">-</button>
                               
                            </div>
                           
                        </div>
                    ))}
                     {carro.length > 0 && (
                        <div className="flex items-center p-4 border rounded-lg shadow-lg">
                            <h3>${total.toLocaleString()}</h3>
                            
                            <button
                             disabled={!token}
                            className={ `text-white p-4 rounded mt-2 ${
                                token ? "bg-green-500" : "bg-gray-600 cursor-not-allowed"}`
                            }>
                                Pagar
                            </button>
                        </div>
                    )}
                </div>
            )}
        </>
    );
}

export default Cart;
