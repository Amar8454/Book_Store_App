import React from "react";
import Banimg from "../image/Banimg.jpg";

const Banner = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row container mx-auto md:px-20 px-4 max-w-screen-2xl my-8">
        <div className="w-full md:w-1/2 md:mt-20 mt-12 order-2 md:order-1">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold font-serif">
              Hello, welcomes Here to learn something{" "}
              <span className="text-pink-600">new everyday!!! </span>
            </h1>
            <p className="text-xl">
              A bookstore is a welcoming space where people can explore the
              world through the pages of a book.It offers a wide variety of
              genres, from fiction and history to science and self-help,
              ensuring there’s something for everyone. Many bookstores also host
              events like book clubs, storytelling for children, or author
              meet-and-greets, creating opportunities for people to connect over
              a shared love of reading.
            </p>
          </div>
          <label className=" input flex items-center gap-2 mt-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="text"
              className="grow outline-none "
              placeholder="Enter your Email"
            />
          </label>
          <button className="btn btn-active btn-secondary mt-6">
            Secondary
          </button>
        </div>

        <div className="w-full md:w-1/2 order-1 mt-12">
          <img src={Banimg} alt="" className="rounded-full ml-6 " />
        </div>
      </div>
    </>
  );
};

export default Banner;
