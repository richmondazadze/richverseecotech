import React from "react";

export interface TestimonialAuthor {
  name: string
  handle: string
  avatar: string
}

interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  href?: string
}

export function TestimonialCard({ author, text }: TestimonialCardProps) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6 m-2 max-w-xs flex flex-col items-center">
      <img src={author.avatar} alt={author.name} className="w-16 h-16 rounded-full mb-3" />
      <div className="font-semibold text-lg">{author.name}</div>
      <div className="text-sm text-gray-500 mb-2">{author.handle}</div>
      <p className="text-gray-700 dark:text-gray-300 text-center mb-2">{text}</p>
    </div>
  )
} 