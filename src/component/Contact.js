import React from "react";

const Contact = () => {
  return (
    <>
      <div className="flex justify-center pt-32">
        <div className=" space-y-2">
          <div>
            <h1 className="text-2xl font-serif font-bold">Contact Us:- </h1>
            <span>Name </span>
            <br />
            <input
              type="text"
              placeholder="Enter you name"
              className="outline-none border px-3 w-64 py-1 rounded-md dark:bg-slate-900 dark:text-white"
            />
          </div>
          <div>
            <span>Email </span>
            <br />
            <input
              type="email"
              placeholder="Enter you email"
              className="outline-none border px-3 w-64 py-1 rounded-md dark:bg-slate-900 dark:text-white"
            />
          </div>
          <div>
            <span>Message</span>
            <br />
            <textarea
              placeholder="Type your message"
              className="outline-none border px-3 w-64 py-1 rounded-md dark:bg-slate-900 dark:text-white"
            ></textarea>
          </div>
          <div className="text-center items-center">
            <button className="bg-blue-700 text-white p-2 rounded-md px-2">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
