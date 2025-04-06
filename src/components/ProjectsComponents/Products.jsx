import React from "react";
import { products } from "../../common/Links";
import { Link } from "react-router-dom";

function Products() {
  return (
    <section class="pb-16">
      <div class=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="md:mb-20 mb-10 text-center">
          <h1 class="md:text-4xl text-[1.7rem] capitalize md:leading-[3rem] text-gray-700 text-center font-bold">
            "Check Out My Products, They might be just what you need!"
          </h1>
        </div>
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2  xl:grid-cols-4">
          {products.map((item) => (
            <Link
              to={item.link}
              target="_blank"
              class="flex justify-center gap-3 items-center hover:shadow-lg cursor-pointer transition-all ease-in-out duration-300 border border-solid border-gray-200 shadow-md h-24 rounded-2xl"
            >
              <img src={item.logo} alt={item.name} className="h-10 transition-all ease-in-out duration-300 " />
              <h1 className="text-lg transition-all ease-in-out duration-300 ">{item.name}</h1>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
