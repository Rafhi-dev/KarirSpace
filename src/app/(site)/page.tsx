
import LogoCarousel from "../components/hompage/logoCarousel";
import Slider from "../components/hompage/slider";
import Navbar from "../components/navbar";

const logo = {
  
  icon: "H",
  logoText: "KarirSpace",
  logoImg: "test"
}

const navitem = [
  {menu: "Home", url: "/"},
  {menu: "Jobs", url: "jobs"},
  {menu: "About Us", url: "about"},
  {menu: "Contact Us", url: "contact"}
]


const logoCarousel = [
  { logo: '/hompage/asana.png' },
  { logo: '/hompage/linear.png' },
  { logo: '/hompage/sportify.png' },
  { logo: '/hompage/slack.png' },
  { logo: '/hompage/adobe.png' },
];

export default function page() {
  return (
    <>
      <div className="bg-blue-300 w-full h-full">
        <div className="mx-10 bg-white">
          <Navbar logo={logo} navbarItem={navitem} />
        </div>
        
              {/*Section 1 slider*/}
              <Slider />
              {/*end Section 1 slider*/}
              
                <LogoCarousel logos={logoCarousel} />
              
              <div className="h-screen bg-white">
                {/*Section 3*/}
                Section 2
               </div>
      </div>
    </>
  );
}
