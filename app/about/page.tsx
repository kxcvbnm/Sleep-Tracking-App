"use client"
import PrimaryButton from '@/components/PrimaryButton';
import Link from 'next/link';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
    >
    <div className=' bg-zinc-700 text-gray-800'>
      <section className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-zinc-700">
        <div className="w-full max-w-7xl flex flex-col md:flex-row items-center gap-8">
          {/* Image Container */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="sleeping-boy.jpg"
              alt="sleeping boy"
              className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[450px] rounded-3xl shadow-lg object-cover"
            />
          </div>
          {/* Text Content */}
          <div className="mw-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left ">
            <div className="flex flex-col items-center md:items-start">
              <h1 className="text-lg sm:text-4xl md:text-5xl font-bold mb-2 text-white">
                About
              </h1>
              <h1 className="text-lg sm:text-4xl md:text-5xl font-bold mb-4 text-white">
                Sleep Tracker
              </h1>
            </div>
            <p className=" mt-8 text-base sm:text-lg md:text-xl text-zinc-400 max-w-lg">
              Sleep Tracker is a web application that helps you track your sleep
              patterns and improve your overall well-being. With our easy-to-use
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className='py-16 px-8 bg-zinc-800'>
        <h2 className='text-xl sm:text-3xl font-bold text-center mb-8 text-white'>
            Our Goal
        </h2>
        <p className='text-zinc-400 max-w-3xl mx-auto text-center'>
          At SleepTracker, we aim to help individuals achieve better sleep and
          overall well-being by providing insights into their sleep patterns.
          Better sleep leads to a healthier, happier life, and we’re here to
          guide you every step of the way.
        </p>
      </section>

      {/* Features Section */}
      <section className='py-16 px-8 bg-zinc-700'>
        <h2 className='text-white text-xl sm:text-3xl font-bold text-center mb-8'>
          Why Choose SleepTracker?
        </h2>
        <div className='max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='bg-white p-6 rounded-md shadow'>
            <h3 className='text-xl font-bold mb-2'>Comprehensive Tracking</h3>
            <p className='text-gray-600'>
              Track your sleep habits and discover opportunities for improvement.
            </p>
          </div>
          <div className='bg-white p-6 rounded-md shadow'>
            <h3 className='text-xl font-bold mb-2'>Personalized Insights</h3>
            <p className='text-gray-600'>
              Get personalized suggestions to improve your sleep quality.
            </p>
          </div>
          <div className='bg-white p-6 rounded-md shadow'>
            <h3 className='text-xl font-bold mb-2'>User-Friendly Design</h3>
            <p className='text-gray-600'>
              Experience a smooth and intuitive interface on all devices.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className='py-16 px-8 bg-zinc-800 text-center'>
        <h2 className='text-xl sm:text-3xl font-bold mb-4 text-white'>
          Ready to Sleep Better?
        </h2>
        <p className='text-lg mb-6 text-zinc-400'>
          Join SleepTracker today and take the first step towards better sleep
          and a healthier life.
        </p>
        <Link href='/sign-up' >
          <PrimaryButton text="Get Started"/>
        </Link>
      </section>
    </div>
    </motion.div>
  );
};

export default AboutPage;