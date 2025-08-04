'use client'

import { BriefcaseBusiness } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function FooterPage() {
  return (
    <footer className="bg-[#333333] text-white px-[60px] pt-[100px] pb-[40px]">
      <div className="flex flex-wrap justify-between gap-[60px]">
        {/* Brand Info */}
        <div className="max-w-sm space-y-4">
          <div className="flex items-center gap-2 text-lg font-bold">
            <BriefcaseBusiness /> KarirSpace
          </div>
          <p className="text-sm font-medium leading-relaxed">
            Quis enim pellentesque viverra tellus eget malesuada facilisis. Congue nibh vivamus aliquet nunc mauris d...
          </p>
        </div>

        {/* Company */}
        <div className="min-w-[160px] space-y-2">
          <h4 className="font-bold text-base">Company</h4>
          <p className="text-sm">About Us</p>
          <p className="text-sm">Our Team</p>
          <p className="text-sm">Partners</p>
          <p className="text-sm">For Candidates</p>
          <p className="text-sm">For Employers</p>
        </div>

        {/* Job Categories */}
        <div className="min-w-[180px] space-y-2">
          <h4 className="font-bold text-base">Job Categories</h4>
          <p className="text-sm">Telecommunications</p>
          <p className="text-sm">Hotels & Tourism</p>
          <p className="text-sm">Construction</p>
          <p className="text-sm">Education</p>
          <p className="text-sm">Financial Services</p>
        </div>

        {/* Newsletter */}
        <div className="max-w-xs space-y-4">
          <h4 className="font-bold text-base">Newsletter</h4>
          <p className="text-sm leading-relaxed">
            Eu nunc pretium vitae platea. Non netus elementum vulputate
          </p>
          <Input
            type="email"
            placeholder="Email Address"
            className="bg-[#333333] border border-[#999999] text-white placeholder:text-gray-300 placeholder:text-sm"
          />
          <Button className="w-full bg-[#3D82F5] text-white font-semibold">
            Subscribe now
          </Button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-white/20 pt-6 flex flex-wrap justify-between text-sm text-white/70">
        <p>© Copyright Job Portal, 2025. Designed by LateMax.</p>
        <div className="flex gap-4 underline underline-offset-2">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}
