import { products as initialProducts } from './mocks/products.json'
import { Products } from './components/Products.jsx'
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import { IS_DEVELOPMENT } from './config.js'
import { useFilters } from './hooks/useFilters.js'
import { Cart } from './components/cart/Cart.jsx'
import { CartProvider } from './context/cart.jsx'

function App () {
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(initialProducts)

  return (
      <main>
          <CartProvider>
              {/*Tittle content*/}
              <div className={"bg-[#1F1D2B] w-full absolute top-0 left-0 p-4"}>
                  <Header />
              </div>
              <div className={"w-full absolute top-1/4 left-4 p-4"}>
                  <Products products={filteredProducts} />
              </div>
          </CartProvider>
      </main>
  )
}

export default App
