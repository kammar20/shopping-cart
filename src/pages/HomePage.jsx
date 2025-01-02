import { productList } from '../data/ProductData';
import { CurrencyFormat } from '../utility/CurrencyFormat';
import ProductButton from '../components/ProductButton';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <section className="transition-colors duration-500 ease-in-out ">
      <h1 className="text-xl md:text-2xl xl:text-3xl mb-10 text-neutral-900 dark:text-neutral-100">
        Our Collection
      </h1>
      {/* container */}
      <main className="flex flex-col md:flex-row md:flex-wrap md:justify-center gap-5">
        {/* Single Box */}
        {productList.map((product) => (
          <div
            key={product.id}
            className="w-full  md:w-[45%] lg:w-[32%] xl:w-[23%] bg-white dark:bg-[#202938] rounded-lg flex flex-col"
          >
            {/* image  */}
            <Link to={`${product.id}`}>
              <img src={product.productImage} alt="" className="w-full" />
            </Link>
            {/* Content*/}
            <div className="mt-auto px-5 pb-10">
              {/* description */}
              <Link to={`${product.id}`}>
                <div className="mb-3">
                  <h2 className="text-lg xl:text-xl font-medium text-neutral-900 dark:text-neutral-200">
                    {product.productBrand}
                  </h2>
                  <p className="text-neutral-500 dark:text-neutral-300">
                    {product.productName}
                  </p>
                </div>
              </Link>

              {/* Price and button */}
              <div>
                <h5 className="text-base xl:text-lg font-medium mb-5 text-neutral-950 dark:text-neutral-50">
                  {CurrencyFormat(product.productPrice)}
                </h5>

                <ProductButton id={product.id} />
              </div>
            </div>
          </div>
        ))}
      </main>
    </section>
  );
}
