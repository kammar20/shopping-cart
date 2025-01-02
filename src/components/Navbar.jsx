import { ShoppingCart, Turtle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useEffect, useState } from 'react';
import DarkModeToggle from 'react-dark-mode-toggle';
import { DarkThemeToggle, Flowbite } from 'flowbite-react';

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);

  function handleTheme() {
    setIsDark((prev) => !prev);
  }

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [isDark]);

  const { cartTotalItems } = useCart();
  return (
    <nav className="w-full sticky top-0 py-4 border-b flex justify-between items-center bg-zinc-100 dark:bg-[#101727] z-10 transition-colors duration-500 ease-in-out ">
      <ul>
        <li>
          <Link
            to="/"
            className="text-xl font-medium text-neutral-900 dark:text-neutral-200"
          >
            Home.
          </Link>
        </li>
      </ul>
      <div className="flex items-center gap-10">
        <Link to="/cart">
          <div className="relative inline-block bg-white dark:bg-neutral-100 p-2 rounded-full">
            <ShoppingCart size={20} />
            <span className="absolute top-6 left-7 bg-red-400 font-medium  w-5 h-5 text-xs inline-flex justify-center items-center rounded-full text-white">
              {cartTotalItems}
            </span>
          </div>
        </Link>

        {/* theme Button */}
        <label className="relative inline-flex cursor-pointer">
          <input
            type="checkbox"
            checked={isDark}
            onChange={handleTheme}
            className="sr-only"
          />

          <span
            className={`flex h-5 w-[35px] items-center rounded-full  duration-200 ${
              isDark ? 'bg-[#212b36] border border-2-teal-600' : 'bg-[#CCCCCE]'
            }`}
          >
            <span
              className={`dot h-5 w-5 rounded-full bg-white duration-200 ${
                isDark ? 'translate-x-[15px]' : ''
              }`}
            ></span>
          </span>
        </label>

        {/* <DarkModeToggle onChange={handleTheme} checked={isDark} size={50} /> */}
      </div>
    </nav>
  );
}
