"use client";
import { SignInButton } from '@clerk/nextjs';
import Link from 'next/link';
import { motion } from 'framer-motion';
import PrimaryButton from './PrimaryButton';

const Guest = () => {
  return (
    <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
    <div className='bg-zinc-700 text-gray-200'>
      {/* Hero Section */}
      <div className='flex flex-col md:flex-row items-center justify-between p-3 md:p-16 bg-zinc-700 pt-20'>
        <div className='flex-1 mb-8 xl:pl-10'>
          <h1 className='text-lg md:text-4xl font-bold mb-4 text-white'>
            Welcome to SleepTracker
          </h1>
          <p className='text-sm md:text-xl mb-6 text-zinc-400'>
            Track your sleep, improve your health, and wake up feeling refreshed
            with SleepTracker.
          </p>
          <Link href="/sign-up">
            <PrimaryButton text="Get Started"/>
          </Link>
        </div>
        <div className='flex-1 flex justify-center items-center'>
          <img
            src='boy-main.jpg'
            alt='SleepTracker boy sleeping'
            className='w-full md:max-w-md rounded-3xl shadow-lg'
          />
        </div>
      </div>

      {/* Divider */}
      <div className='h-1 bg-zinc-800'></div>

      {/* Frequently Asked Questions Section */}
      <div className='py-16 px-8 bg-zinc-800'>
        <h2 className='text-2xl md:text-3xl font-bold text-center mb-8'>
          Frequently Asked Questions
        </h2>
        <div className='max-w-3xl mx-auto space-y-8'>
          <div>
            <h3 className='text-xl font-bold text-white'>What is SleepTracker?</h3>
            <p className='text-zinc-400'>
              SleepTracker is a powerful tool designed to help you monitor your
              sleep patterns and improve your overall health.
            </p>
          </div>
          <div>
            <h3 className='text-xl font-bold text-white'>How does it work?</h3>
            <p className='text-zinc-400'>
              SleepTracker analyzes your sleep data and provides personalized
              insights to help you achieve better sleep.
            </p>
          </div>
          <div>
            <h3 className='text-xl font-bold text-white'>Is SleepTracker free?</h3>
            <p className='text-zinc-400'>
              Yes, SleepTracker offers a free plan with basic features. Premium
              plans are available for advanced insights and analytics.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className='py-16 px-8 bg-zinc-800'>
        <h2 className='text-2xl md:text-3xl font-bold text-center mb-8 text-white'>
          What Our Users Say
        </h2>
        <div className='max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='bg-white p-6 rounded-md shadow'>
            <p className='text-gray-700 mb-4'>
              &quot;SleepTracker has revolutionized my bedtime routine. I wake up feeling refreshed and full of energy daily!&quot;
            </p>
            <p className='text-blue-500 font-bold'>- Ken</p>
          </div>
          <div className='bg-white p-6 rounded-md shadow'>
            <p className='text-gray-700 mb-4'>
              &quot;SleepTracker&apos;s insights pinpointed my sleep problems, letting me fix them. I strongly recommend it!&quot;
            </p>
            <p className='text-blue-500 font-bold'>- Pond</p>
          </div>
          <div className='bg-white p-6 rounded-md shadow'>
            <p className='text-gray-700 mb-4'>
              &quot;SleepTracker is user-friendly and delivers precise data. A must-have for anyone aiming to enhance their sleep!&quot;
            </p>
            <p className='text-blue-500 font-bold'>- Tatar</p>
          </div>
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default Guest;