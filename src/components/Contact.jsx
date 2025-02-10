import { useState } from "react";
import React from "react";

function Contact() {
  const [status, setStatus] = useState(""); // For success/error messages

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent redirection

    const formData = new FormData(e.target); // Extract form data

    try {
      const response = await fetch(
        `https://formspree.io/f/${import.meta.env.VITE_FORMSPREEID}`,
        {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        }
      );

      if (response.ok) {
        setStatus("Thanks for the response. I will try to get back to you soon!");
        e.target.reset(); // Clear form
      } else {
        setStatus("Something went wrong. Try again.");
      }
    } catch (error) {
      setStatus("Oh no! Something went wrong. Try again.");
    }
  };

  return (
    <div>
      <div className="min-h-32"></div>
      <div className="flex justify-center">
        <div className="flex flex-col bg-[rgb(12,12,12)] min-h-screen py-8 rounded-2xl text-white w-full sm:w-4/5 md:w-3/4 lg:w-2/3 border-white border-1">
          <div className="text-white mt-8 px-8 w-full">
            <span className="text-5xl text-white mt-4">contact me!</span>
            <hr className="border-gray-300 my-4 mx-auto w-full"></hr>
          </div>
          <form className="flex flex-col px-8 space-y-4" onSubmit={handleSubmit}>
            <label className="text-gray-300">
              Name:
              <input
                type="text"
                className="mt-1 p-2 rounded bg-white text-black w-full"
                placeholder="Your Name"
                name="name"
                required
              />
            </label>
            <label className="text-gray-300">
              Email:
              <input
                type="email"
                className="mt-1 p-2 rounded bg-white text-black w-full"
                placeholder="Your Email"
                name="email"
                required
              />
            </label>
            <label className="text-gray-300">
              Message:
              <textarea
                className="mt-1 p-2 rounded bg-white text-black w-full"
                placeholder="Your Message"
                rows="5"
                name="message"
                required
              ></textarea>
            </label>
            <button
              type="submit"
              className="mt-4 p-2 rounded hover:bg-white bg-black text-white border-white hover:border-black border-1 hover:text-black w-1/2 self-center"
            >
              Send Message
            </button>
          </form>
          {status && <p className="text-center mt-4">{status}</p>}
        </div>
      </div>
      <div className="min-h-32"></div>
    </div>
  );
}

export default Contact;
