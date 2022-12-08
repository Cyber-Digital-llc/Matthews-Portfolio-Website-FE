import React, { useState } from 'react'
import axios from 'axios'
import { useForm, reset } from 'react-hook-form'

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm()

  console.log(errors)
  const [successMessage, setSuccessMessage] = useState('')

  function onSubmit(data) {
    axios
      .post('/api/contact', data)
      .then((response) => {
        console.log(data)
        setSuccessMessage(
          `Thanks for contacting me! I'll reach back ASAP, look in your inbox for updates 😊`,
        )
      })
      .catch((e) => console.error(e))
      .finally(reset())
  }

  return (
    <div
      id="contact"
      className=" flex w-full py-14 justify-center align-middle content-center items-center"
    >
      <div className="flex justify-center w-full">
        <div className=" py-10 px-10">
          <h2>Matthew Hernandez</h2>
          <p className="">FILM/GAME COMPOSE</p>
          <p>Office:</p>
          <p>Phone Number:</p>
          <p>Direct Email: </p>
        </div>

        <form className="w-full max-w-lg" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="items-center content-center align-middle flex justify-center py-10">
            GET IN TOUCH
          </h2>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="first-name"
              >
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                type="text"
                name="firstName"
                {...register('firstName', {
                  required: 'Required. Please enter your first name.',
                  minLength: 2,
                })}
                placeholder="First Name"
              />
              <p className="text-red-600">{errors.firstName?.message}</p>
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
                type="text"
                name="lastName"
                {...register('lastName', {
                  required: 'Required. Please enter your last name.',
                })}
                placeholder="Last Name"
              />
              <p className="text-red-600">{errors.lastName?.message}</p>
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="email"
              >
                E-mail
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="email"
                name="email"
                {...register('email', {
                  required: 'Required. Please enter your email address.',
                })}
                placeholder="Email"
              />
              <p className="text-red-600">{errors.email?.message}</p>
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
              <input
                className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                type="text"
                name="message"
                {...register('message', {
                  required: 'Required. Please enter your message.',
                })}
                placeholder="Message"
              />
              <p className="text-red-600">{errors.message?.message}</p>
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <button
              // onClick={() => {
              //   reset()
              // }}
              className="shadow bg-slate-600 hover:bg-slate-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              role="submit"
            >
              {isSubmitting ? 'Submitting' : 'Submit'}
            </button>
          </div>
          <div className="px-10 py-10">
            {successMessage && <p>{successMessage}</p>}
          </div>
        </form>
      </div>
    </div>
  )
}
