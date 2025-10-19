import React from 'react'
import { Link } from 'react-router'

export const AITalk = () => {
  return (
     <>
       <Link
       to="/talk"
       className="fixed bottom-10 right-30 z-50 bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white font-medium px-5 py-3 rounded-full shadow-lg hover:scale-105 transition"
     >
       💬 Talk to Us
     </Link>
     </>
  )
}
