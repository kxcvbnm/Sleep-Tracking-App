'use client';

const ContactPage = () => {
  return (
    <div className='bg-zinc-700 text-zinc-200'>
      {/* Hero Section */}
      <section className='flex flex-col items-center justify-center text-center py-16 px-8 bg-zinc-700'>
        <h1 className='text-xl sm:text-4xl md:text-5xl font-bold mb-4 text-white'>
          Contact SleepTracker
        </h1>
        <p className='text-base md:text-xl text-zinc-400'>
          Have questions or need help? Get in touch with us!
        </p>
      </section>

      {/* Contact Form Section */}
      <section className='py-16 px-8 bg-zinc-800'>
        <h2 className='text-xl sm:text-3xl font-bold text-center mb-8 text-white'>
            Contact
        </h2>
        <form
          className='max-w-3xl mx-auto space-y-6'
          onSubmit={(e) => {
            e.preventDefault();
            const name = (document.getElementById('name') as HTMLInputElement)
              ?.value;
            const email = (document.getElementById('email') as HTMLInputElement)
              ?.value;
            const message = (
              document.getElementById('message') as HTMLTextAreaElement
            )?.value;
            const mailtoLink = `mailto:support@sleeptracker.com?subject=Message from ${name}&body=Email: ${email}%0D%0A%0D%0A${message}`;
            window.location.href = mailtoLink;
          }}
        >
          <div>
            <label
              htmlFor='name'
              className='block text-sm font-medium text-white'
            >
              Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
              placeholder='Your Name'
              required
            />
          </div>
          <div>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-white'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
              placeholder='Your Email'
              required
            />
          </div>
          <div>
            <label
              htmlFor='message'
              className='block text-sm font-medium text-white'
            >
              Message
            </label>
            <textarea
              id='message'
              name='message'
              rows={4}
              className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
              placeholder='Your Message'
              required
            ></textarea>
          </div>
          <button
            type='submit'
            className='w-full bg-blue-500 hover:bg-sky-500
            text-white px-4 py-2 rounded-md font-medium shadow-md cursor-pointer'
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Divider */}
      <div className='h-1 bg-zinc-700'></div>

      {/* Contact Information Section */}
      <section className='py-16 px-8 bg-zinc-800'>
        <h2 className='text-xl sm:text-3xl font-bold text-center mb-8 text-white'>
          Contact Information
        </h2>
        <div className='max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
          <div>
            <h3 className='text-lg font-bold mb-2 text-white'>
                Email
            </h3>
            <p className='text-zinc-400'>
                support@sleeptracker.com
            </p>
          </div>
          <div>
            <h3 className='text-lg font-bold mb-2 text-white'>
                Phone
            </h3>
            <p className='text-zinc-400'>
                +66 (0) 000-0000
            </p>
          </div>
          <div>
            <h3 className='text-lg font-bold mb-2 text-white'>
                Address
            </h3>
            <p className='text-zinc-400'>
              Bangkok, Thailand
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;