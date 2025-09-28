import React from 'react'
import { currentUser } from '@clerk/nextjs/server';
import Guest from '@/components/Guest';
import AddNewRecord from '@/components/AddNewRecord';
import RecordChart from '@/components/RecordChart';
import AverageSleep from '@/components/AverageSleep';
import BestWorstSleep from '@/components/BestWorstSleep';
import RecordHistory from '@/components/RecordHistory';
import HomeClient from '@/components/HomeClient';

export default async function HomePage() {
  const user = await currentUser();
  if(!user) {
    return ( <Guest /> );
  }
  
  const safeUser = {
    firstName: user.firstName ?? "",
    imageUrl: user.imageUrl ?? "",
    createdAt: new Date(user.createdAt).toISOString(),          
    lastActiveAt: user.lastActiveAt ? new Date(user.lastActiveAt).toISOString() : null,
  };

  return ( <HomeClient user={safeUser} /> );
}
