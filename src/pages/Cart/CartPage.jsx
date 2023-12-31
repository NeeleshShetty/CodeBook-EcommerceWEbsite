import { useCart } from "../../context";
import { CartEmpty } from "./components/CartEmpty";
import { CartList } from "./components/CartList";



export const CartPage = () => {
    const { cartList } = useCart();
   
    console.log(cartList);
    return (
        <main>
        {cartList.length ? <CartList/> : <CartEmpty /> }
        </main>
    )
};
