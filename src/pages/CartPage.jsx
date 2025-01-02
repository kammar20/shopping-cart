import { ArrowRight, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { CurrencyFormat } from '../utility/CurrencyFormat';
import { Scrollbars } from 'react-custom-scrollbars-2';

export default function CartPage() {
  const {
    cartItem,
    cartTotalItems,
    addToCart,
    removeItemFromCart,
    decreaseItemQuantity,
    calculateTotalAmount,
  } = useCart();
  return (
    <>
      {cartTotalItems > 0 ? (
        <section>
          {/* Heading */}
          <div className="mb-6 flex justify-between items-center lg:items-end">
            <div>
              <h1 className="text-lg md:text-xl lg:text-2xl font-medium text-neutral-900 dark:text-neutral-100">
                Shoping Cart
              </h1>
              <p className="text-base lg:text-lg text-neutral-600 dark:text-neutral-300">
                You have {cartTotalItems} items in your cart
              </p>
            </div>
            {/* Grand Total */}
            <h3 className="text-end text-base md:text-lg lg:text-xl font-medium text-neutral-900 dark:text-neutral-100">
              Cart Total : {CurrencyFormat(calculateTotalAmount)}
            </h3>
          </div>

          {/* Cart Container */}
          <main className="w-full h-[450px]  bg-white dark:bg-[#202938] rounded-lg shadow-lg flex justify-center mb-5 py-2">
            <div className="w-[95%] overflow-y-auto">
              <Scrollbars>
                {/* Single Item */}
                {cartItem.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-wrap gap-8 px-2 py-5 justify-between items-center border-b"
                  >
                    {/* image */}
                    <Link to={`/${item.id}`} className="w-[40%]  md:w-[10%] ">
                      <img src={item.productImage} alt="" className="w-full" />
                    </Link>
                    {/* product brand and name */}
                    <div className="w-[40%] md:w-[15%]">
                      <h2 className="text-lg text-neutral-900 dark:text-neutral-100">
                        {item.productBrand}
                      </h2>
                      <p className="text-neutral-900 dark:text-neutral-300">
                        {item.productName}
                      </p>
                    </div>

                    {/* increment and decrement Button */}
                    <div className="w-[40%] md:w-[20%]  flex justify-center">
                      <button
                        onClick={() => decreaseItemQuantity(item.id)}
                        className="text-neutral-900 dark:text-neutral-200"
                      >
                        <Minus />
                      </button>
                      <span className="inline-block border-2 px-5 mx-5 text-neutral-900 dark:text-neutral-100">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => addToCart(item.id)}
                        className="text-neutral-900 dark:text-neutral-200"
                      >
                        <Plus />
                      </button>
                    </div>

                    {/* sub tatal */}
                    <div className="w-[40%] md:w-[10%] ">
                      <p className="text-lg font-medium text-neutral-900 dark:text-neutral-50 ">
                        {CurrencyFormat(item.productPrice * item.quantity)}
                      </p>
                    </div>
                    {/* Remove Item */}
                    <div className="w-[100%] md:w-[15%] inline-flex justify-center">
                      <button onClick={() => removeItemFromCart(item.id)}>
                        <Trash2 color="red" />
                      </button>
                    </div>
                  </div>
                ))}
              </Scrollbars>
            </div>
          </main>

          {/* Footer */}
          <div className="flex justify-end">
            <button className="bg-blue-500 px-4 py-1 rounded-md cursor-pointer">
              Checkout
            </button>
          </div>
        </section>
      ) : (
        // When Cart is Empty
        <div className="flex flex-col items-center pt-20 pl-28 pr-36">
          <h2 className="text-4xl text-neutral-900 dark:text-neutral-200 mb-5">
            Your Cart is Empty !
          </h2>
          <Link
            to="/"
            className="text-neutral-600 dark:text-neutral-400 text-xl flex items-center gap-2"
          >
            Lets add some item <ArrowRight size={20} />
          </Link>
        </div>
      )}
    </>
  );
}
