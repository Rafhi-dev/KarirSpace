export default function QuoteSection(){
    return (
        <div className="flex flex-col gap-[86px]">
        <div className="grid grid-cols-2 max-h-[514px] mt-[60px] gap-[86px] auto-max-cols h-[514px]">
            <div className="flex"><img src="/hompage/worker.jpg" className="rounded-xl" alt="" /></div>
            <div className="flex flex-col justify-center gap-[40px]">
                <div className="text-[50px] w-[531px] font-bold">Good Life Begins With A Good Company</div>
                <div className="text-[16px] text-justify">Ultricies purus dolor viverra mi laoreet at cursus justo. Ultrices purus diam egestas amet faucibus tempor blandit. Elit velit mauris aliquam est diam. Leo sagittis consectetur diam morbi erat aenean. Vulputate praesent congue faucibus in euismod feugiat euismod volutpat . Adipiscing risus amet phasellus imperdiet eget vel pulvinar. Risus in felis faucibus sit. Scelerisque consequat iaculis mauris amet vel felis id tincidunt nunc.</div>
                <div className="flex gap-[24px]"><button className="bg-[#3D82F5] text-white px-4 py-2 rounded-lg hover:scale-102 transform-all duration-300">Search Job</button><button>Learn more</button></div>
            </div>
        </div>
        <div className="flex justify-between">
            <div className="flex flex-col gap-[20px] w-[306px]">
                <div className="text-[40px] text-blue-400 font-bold">12K+</div>
                <div className="text-[24px] font-bold">Clients worldwide</div>
                <div className="text-[16px]">At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum</div>
            </div>
            <div className="flex flex-col gap-[20px] w-[306px]">
                <div className="text-[40px] text-blue-400 font-bold">12K+</div>
                <div className="text-[24px] font-bold">Clients worldwide</div>
                <div className="text-[16px]">At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum</div>
            </div>
            <div className="flex flex-col gap-[20px] w-[306px]">
                <div className="text-[40px] text-blue-400 font-bold">12K+</div>
                <div className="text-[24px] font-bold">Clients worldwide</div>
                <div className="text-[16px]">At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum</div>
            </div>
        </div>
        </div>
    )
}