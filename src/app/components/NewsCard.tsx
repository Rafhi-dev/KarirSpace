'use client'

import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'


interface newsType {
    tags: string,
    picture: string,
    date: string,
    titleNews: string
    url: string
}

interface newsProp {
    newsData: newsType[]
}

export function NewsCard({newsData}: newsProp) {
  return (
    <>
    {newsData.map((item, index) => {
        return (
            
    <div key={index} className="rounded-2xl overflow-hidden shadow-sm border">
      <Card className="p-0 border-none">
        <div className="relative">
          <img
            src={item.picture || "https://placehold.co/600x400"}
            alt="News Image"
            className="w-full h-[400px] object-cover"
          />
          <span className="absolute top-4 left-4 bg-blue-500 text-white text-xs font-medium px-3 py-1 rounded-full">
            {item.tags}
          </span>
        </div>

        <CardContent className="pt-4">
          <p className="text-gray-500 text-sm">{item.date}</p>
          <h3 className="text-lg font-semibold leading-snug mt-1">
            {item.titleNews}
          </h3>
          <Link
            href={item.url}
            className="mt-3 inline-flex items-center text-sm font-medium text-blue-600 hover:underline"
          >
            Read more
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </CardContent>
      </Card>
    </div>
        )
    })}
    </>
  )
}
