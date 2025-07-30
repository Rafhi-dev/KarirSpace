import { Bookmark } from "lucide-react";

export default function FeaturedJobs() {
  return (
    <>
      <div className="bg-white px-[60px] h-screen">
        <div className="text-[50px] font-bold">Featured Jobs</div>
        <div className="flex items-cente justify-between">
          <div>
            At eu lobortis pretium tincidunt amet lacus ut aenean aliquet
          </div>

          <div>View All</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-[23px] auto-cols-max gap-[24px]">
          <div className="border border-gray-300 h-full bg-gradient-to-r from-[#FFF6E6] to-white p-[23px] rounded-md">
            <div className="grid grid-rows-2 auto-rows-max">
                <div className="text-xl font-bold">Front-end</div>
                <div className="flex gap-2">
                    <div className="bg-green-100 text-green-800 font-bold rounded-md px-2">Part-time</div>
                    <div className="taxt-gray-300">Salary: <span>$20.000 - $30.000</span></div>
                </div>
            </div>
            <div className="flex gap-2 auto-cols-max mt-[20px]">
                <div className="h-[48px] w-[48px] max-w-[48px] max-h-[48px] flex items-center border border-black">Logo</div>
                <div className="flex-1 flex-col">
                    <div className="flex font-bold">Company Name</div>
                    <div className="flex">Region</div>
                </div>
                <div className="border flex items-center text-[#C8CCD1]"><button><Bookmark /></button></div>
            </div>
          </div>

          <div className="border h-[170px]">hallo</div>

          <div className="border  h-[170px]">hallo</div>
          
          <div className="border  h-[170px]">hallo</div>
        </div>
      </div>
    </>
  );
}
