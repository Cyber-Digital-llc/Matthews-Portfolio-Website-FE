import React, { useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'

export default function ContactForm() {
  const {
    register,
    handleSubmit,
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
  }

  return (
    <div className="flex justify-center align-middle content-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Contact Me</h2>
        <input
          type="text"
          name="firstName"
          {...register('firstName', {
            required: 'Required. Please enter your first name.',
            minLength: 2,
          })}
          placeholder="First Name"
        />
        <p>{errors.firstName?.message}</p>
        <input
          type="text"
          name="lastName"
          {...register('lastName', {
            required: 'Required. Please enter your last name.',
          })}
          placeholder="Last Name"
        />
        <p>{errors.lastName?.message}</p>
        <input
          type="text"
          name="message"
          {...register('message', {
            required: 'Required. Please enter your message.',
          })}
          placeholder="Message"
        />
        <p>{errors.message?.message}</p>
        <input
          type="email"
          name="email"
          {...register('email', {
            required: 'Required. Please enter your email address.',
          })}
          placeholder="Email"
        />
        <p>{errors.email?.message}</p>

        <button role="submit">{isSubmitting ? 'Submitting' : 'Submit'}</button>
        {successMessage && <p>{successMessage}</p>}
      </form>
    </div>
  )
}
