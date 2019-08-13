import React from "react"
import PropTypes from "prop-types"

const Contact = () => {
  return (
    <form
      form
      method="post"
      netlify-honeypot="bot-field"
      data-netlify="true"
      className="w-full max-w-lg"
    >
      <input type="hidden" name="bot-field" />
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="first-name"
          >
            First Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="first-name"
            type="text"
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="last-name"
          >
            Last Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="last-name"
            type="text"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="message"
          >
            Message
          </label>
          <textarea
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded mb-2 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="message"
            id="message"
            type="text"
            rows="5"
          />
          <div className="flex items-center justify-between">
            <button
              className="bg-transparent hover:bg-lightBlue text-black font-semibold hover:text-white py-2 px-4 border-2 border-black hover:border-lightBlue rounded cursor-pointer"
              type="button"
            >
              Send
            </button>
            <input
              className="bg-transparent hover:bg-lightBlue text-black font-semibold hover:text-white py-2 px-4 border-2 border-black hover:border-lightBlue rounded cursor-pointer"
              type="reset"
              value="Clear"
            />
          </div>
        </div>
      </div>
    </form>
  )
}
export default Contact
