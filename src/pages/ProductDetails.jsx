import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { productList } from '../data/ProductData';
import { CurrencyFormat } from '../utility/CurrencyFormat';
import ProductButton from '../components/ProductButton';
import { useState } from 'react';

export default function ProductDetails() {
  const [selectValue, setSelectValue] = useState(1);

  function handleChange(e) {
    setSelectValue(Number(e.target.value));
  }

  console.log(selectValue, typeof selectValue);
  const { id } = useParams();
  const item = productList.find((item) => item.id === Number(id));
  if (!item) {
    return (
      <>
        <p>No item Found</p>
      </>
    );
  }
  return (
    <section className="w-full transition-colors duration-500 ease-in-out  ">
      <h1 className="text-2xl xl:text-3xl pt-10 mb-10 text-neutral-900 dark:text-neutral-100">
        Product Details
      </h1>
      <main className="flex flex-col md:flex-row">
        {/* img */}
        <div className="w-full md:w-[40%]">
          <img src={item.productImage} alt="" className="w-full" />
        </div>
        {/* desc */}
        <div className="w-full md:w-[60%] lg:w-[50%]">
          <h2 className="text-xl xl:text-2xl font-medium text-neutral-900 dark:text-neutral-200">
            {item.productBrand}
          </h2>
          <h3 className="text-base xl:text-lg mb-3 text-neutral-900 dark:text-neutral-300">
            {item.productName}
          </h3>
          <h4 className="text-lg xl:text-xl font-bold mb-5 text-neutral-900 dark:text-neutral-50">
            {CurrencyFormat(item.productPrice)}
          </h4>
          <p className="mb-5 text-neutral-700 dark:text-neutral-300">
            {item.productDesc}
          </p>
          <div className="flex gap-10">
            <select
              name="number"
              id="number"
              value={selectValue}
              onChange={handleChange}
              className="w-[70px] px-2 rounded-md bg-neutral-300 outline-none"
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
            </select>

            <ProductButton id={item.id} count={selectValue} />
          </div>
        </div>
      </main>
    </section>
  );
}
