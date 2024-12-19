import React from 'react'
import { Createquestion } from '@/lib/actions/questions.action'
import Question from '@/components/forms/Question';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { getUserById } from '@/lib/actions/user.action';
async function Askquestion() {
  // const {userId} = auth();
  const userId = 'clerk_123456'
  if(!userId) redirect('/sign-in');
  const mongouser = await getUserById({userId});

  console.log(mongouser)
  return (
    <Question mongoUserId={JSON.stringify(mongouser._id)}></Question>
  )
}

export default Askquestion