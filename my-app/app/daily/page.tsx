"use client";

import { useState } from "react";
import { FaCheck } from "react-icons/fa";

export default function DailyPage() {
  const currentPassage: string = "Romans 1"
  const [isPublic, setIsPublic] = useState<boolean>(true);

  return (
    <div className="font-sans flex flex-col items-center min-h-screen pt-20 pb-20 gap-16 sm:pt-25">
      <main className="flex flex-col items-start mx-5 sm:items-start w-[300px] sm:w-[400px]">
        <h1 className="text-2xl">Today's Devotional:</h1>
        <h2 className="text-xl mb-5">{currentPassage}</h2>

        <label htmlFor="content-area" className="mb-1">Share Your Thoughts!</label>
        <textarea id="content-area" className="bg-accent border border-inputBorder rounded-md w-full h-[450px] px-2 py-1"></textarea>

        <div className="flex items-center">
          <input id="makePublic" type="checkbox" className="hidden" checked={isPublic} onChange={(event) => setIsPublic(event.target.checked)} />
          
          <label htmlFor="makePublic" className="mr-1">
            {isPublic
              ?
              <div className="w-4 h-4 bg-blue-500 rounded border border-inputBorder flex justify-center items-center">
                <FaCheck className="text-xs"/>
              </div>
              :
              <div className="w-4 h-4 bg-accent rounded border border-inputBorder"></div>
            }
          </label>

          <label htmlFor="makePublic">Make Public</label>
        </div>
      </main>
    </div>
  )
}