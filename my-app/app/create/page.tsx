"use client";

import { useState } from "react";

import { FaCheck } from "react-icons/fa";


export default function CreatePage() {
  const [category, setCategory] = useState<string>("Devotional");
  const [passage, setPassage] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [isPublic, setIsPublic] = useState<boolean>(true);

  return (
    <div className="font-sans flex flex-col items-center min-h-screen pt-20 pb-20 gap-16 sm:pt-25">
      <main className="flex flex-col row-start-2 items-start sm:items-start w-[300px]">
        <h1 className="text-2xl mb-6">Create New Post</h1>
        <select className="border border-inputBorder bg-accent p-1 rounded mb-5" value={category} onChange={(event) => setCategory(event.target.value)}>
          <option value="Devotional">Devotional</option>
          <option value="Prayer Request">Prayer Request</option>
          <option value="Faith Update">Faith Update</option>
          <option value="Encouragement">Encouragement</option>
        </select>

        <div className={category === "Devotional" ? "block mb-4 w-full" : "hidden"}>
          <h2 className="mb-1">Passage</h2>
          <input
            className="w-full bg-accent border border-inputBorder rounded px-2 py-1"
            value={passage}
            onChange={(event) => setPassage(event.target.value)}
          />
        </div>

        <h2 className="mb-1">What's on your mind?</h2>
        <textarea 
          className="w-full bg-accent border border-inputBorder rounded px-2 py-1 mb-4"
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />

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