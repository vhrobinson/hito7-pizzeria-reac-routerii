import  { createContext, useState, useContext, useEffect } from 'react';

// Crear el contexto
const PizzaContext = createContext();

// Proveedor del contexto
export const PizzaProvider = ({ children }) => {
    const [carro, setCarro] = useState([]);
    const [total, setTotal] = useState(0);

    // Función para agregar pizza al carrito
    const addCarro = (pizza) => {
        const pizzaExistente = carro.find(item => item.id === pizza.id);
        
        if (pizzaExistente) {
            // Si ya existe, aumentar su cantidad
            setCarro(carro.map(item => 
                item.id === pizza.id ? { ...item, count: item.count + 1 } : item
            ));
        } else {
            // Si no existe, agregarla con count: 1
            setCarro([...carro, { ...pizza, count: 1 }]);
        }
    };

    // Función para calcular el total
    const calculaTotal = () => {
        return carro.reduce((acc, pizza) => acc + pizza.price * pizza.count, 0);
    };

    // Actualizar el total cada vez que el carrito cambie
    useEffect(() => {
        setTotal(calculaTotal());
    }, [carro]); // Esto se ejecuta cada vez que cambia el carrito

    return (
        <PizzaContext.Provider value={{ carro, addCarro, total }}>
            {children}
        </PizzaContext.Provider>
    );
};


export const usePizza = () => useContext(PizzaContext);




