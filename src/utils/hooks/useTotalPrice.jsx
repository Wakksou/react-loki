import { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext"
import { useState } from "react";

const useTotalPrice = () => {
    const { cart } = useContext(CartContext);
    const [totalP, setTotalP] = useState(0);

    useEffect(() => {
        let totalPrice = 0;
        if (cart) {
            cart.forEach(dish => {
                totalPrice += dish.quantity*dish.price;
            });
            setTotalP(totalPrice);
        }
    }, [cart]);
    return totalP;

}

export default useTotalPrice