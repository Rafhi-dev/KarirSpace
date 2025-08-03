import { Bookmark, MapPin,} from "lucide-react";
import Link from "next/link";

interface jobType {
  position: string,
  salary: string,
  companyName: string,
  location: string
}

interface jobProps {
  jobs: jobType[];
}

export default function FeaturedJobs({jobs}: jobProps) {
  return (
    <>
      <div>
        <div className="text-[50px] font-bold">Featured Jobs</div>
        <div className="flex items-cente justify-between">
          <div className="text-gray-700">
            At eu lobortis pretium tincidunt amet lacus ut aenean aliquet
          </div>

          <div className="text-blue-500 font-medium hover:text-blue-700 ">
            <Link href={'/jobs'} >View All</Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-[23px] auto-cols-max gap-[24px]">

          {jobs.map((job, index) => {
            return (
              <div key={index} className="border border-gray-300 h-full hover:bg-gradient-to-r from-[#FFF6E6] to-white p-[23px] rounded-md hover:scale-105 transform-all duration-300">
            <div className="grid grid-rows-2 auto-rows-max">
                <div className="text-xl font-bold">{job.position}</div>
                <div className="flex gap-2">
                    <div className="bg-green-100 text-green-800 font-bold rounded-md px-2">Part-time</div>
                    <div className="text-[#767F8C]">Salary: <span>{job.salary}</span></div>
                </div>
            </div>
            <div className="flex gap-2 auto-cols-max mt-[20px]">
                <div className="h-[48px] w-[48px] max-w-[48px] max-h-[48px] flex items-center"><img src={"https://placehold.co/48x48"} alt="C-logo" /></div>
                <div className="flex-1 flex-col">
                    <div className="flex font-bold">{job.companyName}</div>
                    <div className="flex items-center text-[#767F8C]"><MapPin size={18} /> {job.location}</div>
                </div>
                <div className="flex items-center text-[#C8CCD1]"><button><Bookmark /></button></div>
            </div>
          </div>
            )
          })}
        </div>
      </div>
    </>
  );
}
