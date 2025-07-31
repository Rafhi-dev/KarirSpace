import FeaturedJobs from "../components/hompage/FeaturedJobs";
import JobCategory from "../components/hompage/JobCategory";
import LogoCarousel from "../components/hompage/logoCarousel";
import QuoteSection from "../components/hompage/quioteSection";
import Slider from "../components/hompage/slider";
import Navbar from "../components/navbar";

const logo = {
  icon: "H",
  logoText: "KarirSpace",
  logoImg: "test",
};

const navitem = [
  { menu: "Home", url: "/" },
  { menu: "Jobs", url: "jobs" },
  { menu: "About Us", url: "about" },
  { menu: "Contact Us", url: "contact" },
];

const logoCarousel = [
  { logo: "/hompage/asana.png" },
  { logo: "/hompage/linear.png" },
  { logo: "/hompage/sportify.png" },
  { logo: "/hompage/slack.png" },
  { logo: "/hompage/adobe.png" },
];

const setJob = [
  {
    position: "Front-end",
    salary: "$1000 - $3000",
    companyName: "Google Inc.",
    location: "New York, Amerika",
  },
  {
    position: "Back-end",
    salary: "$1500 - $3500",
    companyName: "Amazon",
    location: "Seattle, Amerika",
  },
  {
    position: "Full Stack Developer",
    salary: "$2000 - $4000",
    companyName: "Meta",
    location: "San Francisco, Amerika",
  },
  {
    position: "UI/UX Designer",
    salary: "$1200 - $2500",
    companyName: "Netflix",
    location: "Los Angeles, Amerika",
  },
  {
    position: "DevOps Engineer",
    salary: "$1800 - $3800",
    companyName: "Microsoft",
    location: "Redmond, Amerika",
  },
  {
    position: "Mobile Developer",
    salary: "$1400 - $3200",
    companyName: "Apple",
    location: "Cupertino, Amerika",
  },
  {
    position: "Data Scientist",
    salary: "$2200 - $4500",
    companyName: "IBM",
    location: "Boston, Amerika",
  },
  {
    position: "QA Engineer",
    salary: "$1100 - $2300",
    companyName: "Dropbox",
    location: "Austin, Amerika",
  },
  {
    position: "Product Manager",
    salary: "$2500 - $5000",
    companyName: "Airbnb",
    location: "San Francisco, Amerika",
  },
  {
    position: "Front-end",
    salary: "$1300 - $3100",
    companyName: "Spotify",
    location: "Stockholm, Swedia",
  },
  {
    position: "Back-end",
    salary: "$1600 - $3400",
    companyName: "Shopify",
    location: "Ottawa, Kanada",
  },
  {
    position: "Machine Learning Engineer",
    salary: "$2300 - $4800",
    companyName: "OpenAI",
    location: "San Francisco, Amerika",
  },
];

const setCategory = [
  { category: "Finance & Service", totalJob: 3000 },
  { category: "Software Development", totalJob: 5200 },
  { category: "Design & Creative", totalJob: 2100 },
  { category: "Marketing & Sales", totalJob: 4300 },
  { category: "Healthcare & Medicine", totalJob: 1800 },
  { category: "Education & Training", totalJob: 2500 },
  { category: "Customer Support", totalJob: 1600 },
  { category: "Engineering & Architecture", totalJob: 3100 }
];


export default function page() {
  return (
    <>
      <div className="bg-white  w-full h-full">

        {/*Section 1 slider*/}
        <Slider />
        {/*end Section 1 slider*/}

        <LogoCarousel logos={logoCarousel} />
        {/* Featured Jobs */}
        <div className="bg-white px-[60px] py-[23px]">
          <FeaturedJobs jobs={setJob} />
        </div>

        {/* Browse by Category */}
        <div className="bg-[#3D82F51A] px-[60px] py-[23px] ">
          <JobCategory categoryJobs={setCategory} />
        </div>

        {/*Section Quote*/}
        <div className="px-[60px] py-[60px]">
          <QuoteSection />
        </div>

      </div>
    </>
  );
}
