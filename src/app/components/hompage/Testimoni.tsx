import { Quote, Star } from "lucide-react";

interface testiType {
  star: number;
  subject: string;
  testi: string;
  clientName: string;
  company: string;
}

interface testiProp {
  testi: testiType[];
}

export default function Testimoni({ testi }: testiProp) {
  return (
    <>
      <div className="flex flex-col pb-[120px] gap-[60px]">
        <div className="flex flex-col gap-[40px]">
          <div className="text-center pt-[60px]">
            <p className="text-[50px] font-bold">
              {" "}
              Testimonials from Our Cuctomers
            </p>
            <p className="text-center text-gray-700">
              At eu lobortis pretium tincidunt amet lacus ut aenean aliquet amet
              lacus ut aenean aliquet
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 auto-grid-max gap-[24px]">
          {testi.map((item, index) => {
            return (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-md border border-gray-100"
              >
                {/* Bintang */}
                <div className="flex space-x-1 mb-3">
                  {[...Array(item.star)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                {/* Judul */}
                <h3 className="text-lg font-semibold mb-2">{item.subject}</h3>

                {/* Testimoni */}
                <p className="text-gray-600 italic mb-6">{item.testi}</p>

                {/* Avatar & Nama */}
                <div className="flex mt-[57px] items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img
                      className="w-10 h-10 rounded-full object-cover"
                      src="https://placehold.co/100"
                      alt="Marco Kihn"
                    />
                    <div>
                      <p className="font-semibold ">{item.clientName}</p>
                      <p className="text-gray-500 ">{item.company}</p>
                    </div>
                  </div>

                  {/* Quote Icon */}
                  <Quote className="w-[40px] h-[30px] rotate-180 text-teal-500 fill-teal-500 -mt-15" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
