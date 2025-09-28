import AddNewRecord from "./AddNewRecord";
import RecordChart from "./RecordChart";
import AverageSleep from "./AverageSleep";
import BestWorstSleep from "./BestWorstSleep";
import RecordHistory from "./RecordHistory";

type Props = {
  user: {
    firstName: string;
    imageUrl: string;
    createdAt: string;
    lastActiveAt: string | null;
  };
};

export default function HomeClient({ user }: Props) {
  return (
      <main className='bg-zinc-700 text-zinc-400 font-sans min-h-screen'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-8'>
          {/* Left Column */}
          <div className='space-y-6'>
            <div className='bg-zinc-800 p-6 rounded-lg shadow-md flex flex-col sm:flex-row items-center sm:items-start gap-6'>
              {/* User Image */}
              <img
                src={user.imageUrl}
                alt={`${user.firstName}'s profile`}
                className='w-24 h-24 rounded-full border border-gray-300 shadow-md'
              />

              {/* User Details */}
              <div className='flex-1'>
                <h2 className='text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2'>
                  Welcome Back, {user.firstName}
                </h2>
                <p className='text-zinc-400 mb-4'>
                  Take a peek at your latest sleep overview! Keeping an eye on these insights is a 
                  great way to help you manage your tasks and maintain efficiency.
                </p>
                <div className='space-y-2'>
                  <p className='text-zinc-400'>
                    <span className='font-semibold text-blue-500'>Joined:</span>{' '}
                    {new Date(user.createdAt).toLocaleDateString()}
                  </p>
                  <p className='text-zinc-400'>
                    <span className='font-semibold text-blue-500'>
                      Last Active:
                    </span>{' '}
                    {user.lastActiveAt
                      ? new Date(user.lastActiveAt).toLocaleString()
                      : 'N/A'}
                  </p>
                </div>
              </div>
            </div>
            {/* Placeholder for AddSleepRecord */}
            <AddNewRecord />
          </div>

          {/* Right Column */}
          <div className='space-y-6'>
            {/* Placeholder for RecordStats, RecentRecord, and Insights */}
            <RecordChart />
            <AverageSleep />
            <BestWorstSleep />
          </div>

        </div>
          
        {/* Placeholder for SleepHistory */}
        <div className='max-w-7xl mx-auto'>
          <RecordHistory /> 
        </div>
      </main>
  );
}