import React from 'react'
import { currentUser } from '@clerk/nextjs/server';
import Guest from '@/components/Guest';
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
