interface categoryType {
  category: string;
  totalJob: number;
}

interface categoryProp {
  categoryJobs: categoryType[];
}

export default function JobCategory({ categoryJobs }: categoryProp) {
  return (
    <>
      <div className="flex flex-col gap-[40px]">
        {" "}
        <div className="text-center text-[50px] pt-[60px] font-bold">
          Browse by Category
        </div>
        <div className="text-center text-gray-700">
          At eu lobortis pretium tincidunt amet lacus ut aenean aliquet amet
          lacus ut aenean aliquet
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 auto-cols-max py-[60px] gap-[24px]">
        {categoryJobs.map((item, index) => {
          return (
            <div key={index} className="border flex flex-col py-[57px] items-center justify-center gap-[30px] bg-white rounded-[20px] shadow-sm">
              <div className="h-[40px] w-[40px] flex text-blue-500 items-center justify-center">
                <img src="/category/agriculture 2.svg" alt="" />
              </div>
              <div className="flex text-[24px] items-center justify-center text-center font-bold">{item.category}</div>
              <div className="bg-[#3D82F51A] px-2 py-1 text-[#3B82F6] rounded-md">
                {item.totalJob} <span>Jobs</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
