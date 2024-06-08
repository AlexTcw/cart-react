import { Filters } from './Filters.jsx'
import {RiLuggageCartFill, RiLuggageCartLine, RiShoppingCart2Line} from "react-icons/ri";
import {Cart} from "./cart/Cart.jsx";

export function Header () {
  return (
    <header>
        <div className={"flex flex-row justify-between justify-items-center w-full mt-2 mb-4 ml-10"}>
            <h1 className={"text-5xl text-gray-300"}>Vanilla Shop</h1>
            <div className={"mr-56"}>
                <Cart />
            </div>
        </div>
        <div className={"text-2xl text-gray-500 mr-48 ml-10"}>
            <Filters/>
        </div>
    </header>
  )
}
