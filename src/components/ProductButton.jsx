import { ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function ProductButton({ id, count }) {
  const { addToCart } = useCart();
  const [isDisable, setIsDisable] = useState(false);

  function handleClick() {
    setIsDisable(true);
    setTimeout(() => {
      addToCart(id, count);
      setIsDisable(false);
    }, 400);
  }
  return (
    <button
      disabled={isDisable}
      onClick={handleClick}
      className={`${
        isDisable ? 'bg-zinc-100 cursor-wait' : 'bg-zinc-300 active:bg-zinc-400'
      }  transition-all px-3 py-1 rounded-md flex items-center gap-3 `}
    >
      Add To Cart <ShoppingCart size={18} />
    </button>
  );
}
