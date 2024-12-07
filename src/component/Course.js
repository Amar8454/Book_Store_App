import React from "react";
import list from "../list.json";
import CardBook from "./CardBook";
import { Link } from "react-router-dom";

const Course = () => {
  return (
    <>
      <div className="container mx-auto md:px-20 px-4 max-w-screen-2xl">
        <div className=" pt-28 text-center justify-center items-center">
          <h1 className="font-bold text-2xl md:text-4xl font-mono">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          <p className="mt-2 text-xl">
          Paid courses bookstores serve as specialized hubs offering books, guides, and resources tailored to various learning needs. These stores cater to learners pursuing professional development, academic achievements, or personal enrichment through curated content and materials.
          </p>
          <Link to="/">
            <button className="bg-pink-500 rounded-md text-white px-6 py-2 hover:bg-pink-700 duration-300 mt-4">
              Back
            </button>
          </Link>
        </div>
        <div className=" mt-10 grid grid-cols-1 md:grid-cols-3">
          {list.map((item) => (
            <CardBook key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;
