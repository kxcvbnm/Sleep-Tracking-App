'use client';
import { useRef, useState } from 'react';
import addSleepRecord from '@/app/actions/addSleepRecord';
import { MoonStar, Calendar, Hourglass } from 'lucide-react';
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';

const AddRecord = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [amount, setAmount] = useState(6); // Default value for the slider
  const [alertMessage, setAlertMessage] = useState<string | null>(null); // State for alert message
  const [alertType, setAlertType] = useState<'success' | 'error' | null>(null); // State for alert type
  const [isLoading, setIsLoading] = useState(false); // State for loading spinner
  const [sleepQuality, setSleepQuality] = useState(''); // State for selected sleep quality

  const clientAction = async (formData: FormData) => {
    setIsLoading(true); // Show spinner
    setAlertMessage(null); // Clear previous messages

    formData.set('amount', amount.toString()); // Add the slider value to the form data
    formData.set('text', sleepQuality); // Add the selected sleep quality to the form data

    const { error } = await addSleepRecord(formData); // Removed `data` since it's unused

    if (error) {
      toast.error("Error adding sleep record");
      setAlertMessage(`Error: ${error}`);
      setAlertType('error'); // Set alert type to error
    } else {
      toast.success("Sleep record added successfully");
      setAlertMessage('Sleep record added successfully!');
      setAlertType('success'); // Set alert type to success
      formRef.current?.reset();
      setAmount(6); // Reset the slider to the default value
      setSleepQuality(''); // Reset the sleep quality
    }

    setIsLoading(false); // Hide spinner
  };

  return (
    <div className='bg-zinc-700 flex items-center justify-center'>
    <Toaster />
      <div className='bg-zinc-800 shadow-lg rounded-lg p-8 w-full'>
        <h3 className='text-lg sm:text-2xl font-bold text-center mb-6 bg-gradient-to-r from-blue-500 via-sky-500
    to-cyan-50 bg-clip-text text-transparent'>
          Track Your Sleep
        </h3>
        <form
          ref={formRef}
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(formRef.current!);
            clientAction(formData);
          }}
          className='space-y-6'
        >
          {/* Sleep Quality and Sleep Date */}
          <div className='flex flex-col md:flex-row md:space-x-4'>
            {/* Sleep Quality */}
            <div className='flex-1'>
              <div className="flex items-center">
                <MoonStar className="w-2 h-2 mr-2 sm:w-4 sm:h-4 mb-2" color="#51abff" />
              <label
                htmlFor='text'
                className='block text-sm font-medium text-zinc-200 mb-2'
              >
                Sleep Quality
              </label>
              </div>             
              <select
                id='text'
                name='text'
                value={sleepQuality}
                onChange={(e) => setSleepQuality(e.target.value)}
                className='block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2'
                required
              >
                <option value='' disabled>
                  Sleep quality...
                </option>
                <option className="text-black" value='Exhausted'>😫 Exhausted</option>
                <option className="text-black" value='Tired'>😴 Tired</option>
                <option className="text-black" value='Neutral'>😐 Neutral</option>
                <option className="text-black hover:text-zinc-800" value='Refreshed'>🌞 Refreshed</option>
                <option className="text-black" value='Energetic'>⚡ Energetic</option>
              </select>
            </div>

            {/* Sleep Date */}
            <div className='flex-1'>
              <div className="flex items-center">
                <Calendar className="w-2 h-2 mr-2 sm:w-4 sm:h-4 mb-2" color="#51abff" />
                <label
                htmlFor='date'
                className='block text-sm font-medium text-zinc-200 mb-2'
              >
                Sleep Date
              </label>
              </div>
              <input
                type='date'
                name='date'
                id='date'
                className='block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2'
                placeholder='Select a date'
                required
                onFocus={(e) => e.target.showPicker()} // Open the calendar on focus
              />
            </div>
          </div>

          {/* Hours Slept */}
          <div>
            <div className="flex items-center">
                <Hourglass className="w-2 h-2 mr-2 sm:w-4 sm:h-4 mb-7" color="#51abff" />
                <label
                    htmlFor='amount'
                    className='block text-sm font-medium text-zinc-200 mb-2'
                >
                Hours Slept
              <br />
              <span className='text-xs text-zinc-400'>
                (Select between 0 and 20 in steps of 0.5)
              </span>
            </label>
            </div>
            <input
              type='range'
              name='amount'
              id='amount'
              min='0'
              max='20'
              step='0.5'
              value={amount}
              onChange={(e) => setAmount(parseFloat(e.target.value))}
              className='w-full cursor-pointer'
            />
            <div className='text-center text-zinc-200 mt-2'>{amount} hours</div>
          </div>

          {/* Submit Button */}
          <button
            type='submit'
            className='w-full bg-gradient-to-r from-blue-500 via-sky-500
            to-cyan-500 hover:from-blue-600 hover:via-sky-600 hover:to-cyan-600 text-white
            px-4 py-2 rounded-md font-medium shadow-md transition flex items-center justify-center cursor-pointer'
            disabled={isLoading} // Disable button while loading
          >
            {isLoading ? (
              <svg
                className='animate-spin h-5 w-5 text-white'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
              >
                <circle
                  className='opacity-25'
                  cx='12'
                  cy='12'
                  r='10'
                  stroke='currentColor'
                  strokeWidth='4'
                ></circle>
                <path
                  className='opacity-75'
                  fill='currentColor'
                  d='M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z'
                ></path>
              </svg>
            ) : (
              'Add Sleep Record'
            )}
          </button>
        </form>

        {/* Alert Message */}
        {alertMessage && (
          <div
            className={`mt-4 p-3 rounded-md text-sm ${
              alertType === 'success'
                ? 'bg-green-100 text-green-800 border border-green-300'
                : 'bg-red-100 text-red-800 border border-red-300'
            }`}
          >
            {alertMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default AddRecord;