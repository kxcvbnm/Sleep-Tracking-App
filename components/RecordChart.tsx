import getRecords from '@/app/actions/getRecords';
import BarChart from './BarChart'; // Ensure BarChart.tsx or BarChart.jsx exists in the same directory

const RecordChart = async () => {
  const { records, error } = await getRecords();

  if (error) {
    return (
      <div className='bg-red-100 text-red-800 border border-red-300 rounded-md p-4 text-center'>
        <p>{error}</p>
      </div>
    );
  }

  if (!records || records.length === 0) {
    return (
      <div className='bg-zinc-800 flex items-center justify-center'>
        <div className='bg-zinc-800 shadow-lg rounded-lg p-8 w-full  text-center'>
          <h3 className='text-lg sm:text-2xl font-bold mb-4 bg-blue-500'>
            No Sleep Records Found
          </h3>
          <p className='text-zinc-400'>
            Start tracking your sleep to see your records here.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className='bg-zinc-700 flex items-center justify-center'>
      <div className='bg-zinc-800 shadow-lg rounded-lg p-8 w-full '>
        <h3 className='text-lg sm:text-2xl font-bold text-center mb-6 text-blue-500'>
          Sleep Records Chart
        </h3>
        <BarChart 
          records={records.map((record) => ({
            ...record,
            date: String(record.date),
          }))}
        />{' '}
        {/* Pass records as props */}
      </div>
    </div>
  );
};

export default RecordChart;