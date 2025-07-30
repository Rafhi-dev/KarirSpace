'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BriefcaseBusiness, Building, Search, User } from "lucide-react";

export default function Slider() {
  return (
    <div className="w-full h-full relative">
      {/* Gambar Background */}
      <div className="h-[719px] w-full">
        <img
          src="/hompage/SLIDER.png"
          className="w-full h-full object-cover"
          alt="Slider background"
        />
      </div>

      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 h-[517px] bg-gradient-to-b from-[#003C9F] to-[#3B82F60D] pointer-events-none"></div>

      {/* Panel Utama */}
      <div className="absolute top-[200px] sm:top-[254px] left-0 right-0 px-4 sm:px-0 max-w-[905px] mx-auto z-10">
        {/* Judul */}
        <div className="text-3xl sm:text-6xl text-white text-center font-bold leading-tight">
          Find Your Dream Job Today!
        </div>
        <div className="text-sm sm:text-[18px] text-white text-center mt-4 mb-10">
          Connecting Talent with Opportunity: Your Gateway to Career Success
        </div>

        {/* Search Panel */}
        <div className="flex flex-col sm:flex-row items-stretch bg-white rounded-2xl sm:rounded-full shadow-md overflow-hidden w-full max-w-5xl mx-auto">
          {/* Input + Select Fields */}
          <div className="flex flex-col sm:flex-row gap-4 px-4 sm:px-6 py-4 flex-grow">
            {/* Input */}
            <input
              type="text"
              placeholder="Job Title or Company"
              className="w-full sm:flex-1 px-4 py-2 text-gray-700 border border-gray-300 rounded-md sm:rounded-none sm:border-0 focus:outline-none"
            />

            {/* Select Location */}
            <Select>
              <SelectTrigger className="w-full sm:w-[180px] border border-transparent text-gray-700 bg-white focus:!outline-none focus:!ring-0 focus:!border-transparent">
                <SelectValue placeholder="Select Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="jakarta">Jakarta</SelectItem>
                <SelectItem value="bandung">Bandung</SelectItem>
                <SelectItem value="remote">Remote</SelectItem>
              </SelectContent>
            </Select>

            {/* Select Category */}
            <Select>
              <SelectTrigger className="w-full sm:w-[180px] border border-transparent text-gray-700 bg-white focus:!outline-none focus:!ring-0 focus:!border-transparent">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fulltime">Full-time</SelectItem>
                <SelectItem value="parttime">Part-time</SelectItem>
                <SelectItem value="freelance">Freelance</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Search Button */}
          <button className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white px-6 py-4 flex justify-center items-center gap-2 transition rounded-b-2xl sm:rounded-none sm:rounded-r-full">
            <Search className="text-lg" />
            <span className="font-medium">Search Job</span>
          </button>
        </div>

        {/* Matriks bawah */}
        <div className="mt-[60px] flex flex-row sm:flex-row items-center justify-center gap-8 text-white text-center">
          {/* Jobs */}
          <div className="flex items-center gap-4">
            <div className="bg-blue-500 w-[60px] h-[60px] rounded-full flex items-center justify-center">
              <BriefcaseBusiness />
            </div>
            <div>
              <div className="text-[20px] font-bold">25,000</div>
              <div>jobs</div>
            </div>
          </div>

          {/* Candidates */}
          <div className="flex items-center gap-4">
            <div className="bg-blue-500 w-[60px] h-[60px] rounded-full flex items-center justify-center">
              <User />
            </div>
            <div>
              <div className="text-[20px] font-bold">10,000</div>
              <div>Candidates</div>
            </div>
          </div>

          {/* Companies */}
          <div className="flex items-center gap-4">
            <div className="bg-blue-500 w-[60px] h-[60px] rounded-full flex items-center justify-center">
              <Building />
            </div>
            <div>
              <div className="text-[20px] font-bold">18,400</div>
              <div>Companies</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
