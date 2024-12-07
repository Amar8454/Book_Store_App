import React from "react";

const CardBook = ({ item }) => {

  return (
    <div className="mt-4">
      <div className="card bg-base-100 w-54 m-4 shadow-xl  hover:scale-110 duration-200  dark:border dark:bg-slate-900 dark:text-white">
        <figure>
          <img src={item.image} alt="Shoes" className="p-2 rounded-md" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-serif text-sm">
            {item.name}
            <div className="badge badge-secondary ml-6 cursor-pointer">
              {item.category}
            </div>
          </h2>
          <p className="font-semibold uppercase">{item.title}</p>
          <div className=" font-serif">By :- {item.author}</div>
          <div className="card-actions flex  justify-between ">
            <div className="badge badge-outline w-10 py-4 cursor-pointer">
              ${item.price}
            </div>
            <div className="badge badge-outline w-20 py-4 hover:bg-yellow-600 hover:text-white cursor-pointer">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBook;
