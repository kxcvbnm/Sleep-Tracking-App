'use client';
import { useState } from 'react';
import { Record } from '@/type/Record';
import deleteRecord from '@/app/actions/deleteRecord';
import toast from 'react-hot-toast';

const RecordItem = ({ record }: { record: Record }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDeleteRecord = async (recordId: string) => {
    setIsLoading(true); // Show loading spinner
    await deleteRecord(recordId); // Perform delete operation
    setIsLoading(false); // Hide loading spinner
    toast.success('Sleep record deleted successfully');
  };

  return (
    <li
      className={`flex justify-between items-center bg-zinc-700 hover:bg-zinc-600 p-4 rounded-lg shadow-md mb-4 ${
        record?.amount < 7
          ? 'border-l-4 border-yellow-300'
          : 'border-l-4 border-blue-500'
      }`}
    >
      <div className='flex flex-col'>
        <span className='text-sm text-zinc-400'>
          {new Date(record?.date).toLocaleDateString()}
        </span>
        <span className={`text-lg font-bold ${
        record?.amount < 7
          ? 'bg-gradient-to-r from-yellow-300 to-amber-200 bg-clip-text text-transparent'
          : 'bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500 bg-clip-text text-transparent'
      }`}>
          {record?.amount} hours
        </span>
        <span className='text-sm text-zinc-400'>
          Sleep Mode: {record?.text}
        </span>
      </div>
      <button
        onClick={() => handleDeleteRecord(record.id)}
        className={`bg-red-400 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-500 transition cursor-pointer ${
          isLoading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        aria-label='Delete record'
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
          '✖'
        )}
      </button>
    </li>
  );
};

export default RecordItem;