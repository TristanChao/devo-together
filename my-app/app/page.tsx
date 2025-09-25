import Image from "next/image";

import { formatTime, isWithinLast24Hours } from "@/utils/date";

import { Post, posts } from "@/dummy-data/posts"

export default function Home() {
  const now = new Date()
  
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-start sm:items-start">
        {posts.map((post: Post) => {
          return (
            <div key={post.id} className="text-left w-full max-w-[40rem]">
              <h1 className="font-bold text-lg">
                {post.userName}
              </h1>
              <span>{formatTime(post.timestamp)}</span>

              {post.category === "devo" ? <h2>{post.passage}</h2> : <></>}
              
              <p>{post.content}</p>
            </div>
          )
        })}
      </main>
    </div>
  );
}
