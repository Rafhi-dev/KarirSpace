import Link from "next/link"
import { NewsCard } from "../NewsCard"

interface newsType {
    tags: string,
    picture: string,
    date: string,
    titleNews: string
    url: string
}

const newsData: newsType[] = [
  {
    tags: "News",
    picture: "https://placehold.co/600x400",
    date: "30 March 2024",
    titleNews:
      "Revitalizing Workplace Morale: Innovative Tactics For Boosting Employee Engagement In 2024",
    url: "/news/revitalizing-workplace-morale",
  },
  {
    tags: "Insight",
    picture: "",
    date: "12 April 2024",
    titleNews:
      "Adapting to Hybrid Work Culture: Strategies for Modern Teams in the Post-Pandemic Era",
    url: "/news/adapting-hybrid-work-culture",
  },
]


export default function RecentBlog() {
    return (
        <>
        <div className="flex flex-col gap-[60px] pb-[60px]">
            <div className="">
                <div className="text-[50px] font-bold">News and Blog</div>
        <div className="flex items-cente justify-between">
          <div className="text-gray-700">
            At eu lobortis pretium tincidunt amet lacus ut aenean aliquet
          </div>

          <div className="text-blue-500 font-medium hover:text-blue-700 ">
            <Link href={'/blog'} >View All</Link>
          </div>
        </div>
            </div>
            <div className="grid grid-cols-2 gap-[24px]">
              <NewsCard newsData={newsData} />
            </div>
        </div>
         
        </>
    )
}