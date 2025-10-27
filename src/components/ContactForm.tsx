import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mpwoqdyd");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className='w-full flex gap-4 items-center'>
      <div className='flex-1'>
        <input
          id="email"
          type="email" 
          name="email"
          placeholder="Enter your email"
          className='w-full bg-white px-6 py-2 text-lg rounded-full border border-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent'
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
      </div>
      <button type="submit" className='bg-[rgb(252,86,21)] hover:bg-orange-700 text-white px-10 py-2 rounded-full text-lg whitespace-nowrap' disabled={state.submitting}>
        Join waitlist
      </button>
    </form>
  );
}