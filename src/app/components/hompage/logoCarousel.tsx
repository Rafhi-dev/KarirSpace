'use client';

interface logoType {
  logo: string
}

interface logoProp {
  logos: logoType[]
}


export default function LogoCarousel({logos}: logoProp) {
  return (
    <div className="bg-[#F5F5F5] py-[20px] border border-gray-300 overflow-hidden">
      <div className="flex justify-between px-12">
        {logos.map((item, index) => (
          <img key={index} src={item.logo} alt={`${item.logo}-${index}`} />
        ))}
      </div>
    </div>
  );
}
