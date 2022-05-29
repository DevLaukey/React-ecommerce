import { createContext, useState } from "react";

export const CheckoutContext = createContext();

export const checkoutProvider = (props) => {
    const [isempty, setIsEmpty] = useState(true);
    return (
        <CheckoutContext.Provider>
{props.children}
        </CheckoutContext.Provider>
    )
}