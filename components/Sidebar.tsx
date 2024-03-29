import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { useTheme } from "next-themes";
import Image from "next/image";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <Image
        src="/images/profile.jpg"
        alt="avatar image"
        className="w-32 h-32 mx-auto rounded-full"
        height="128"
        width="128"
        layout="intrinsic"
        quality="100"
      />
      <h3 className="my-4 text-2xl font-medium tracking-wider font-kaushan">
        <span className="text-green">Shashanka </span>
        Nayak
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">
        Fullstack Web Developer
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200"
        href="/assets/Shashanka_Resume_Frontend.pdf"
        download="Shashanka_Resume_Frontend.pdf"
      >
        <GiTie className="w-6 h-6" /> Download Resume
      </a>

      {/* social icons */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full">
        <a
          href="https://www.linkedin.com/in/shashanka-nayak"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a
          href="https://github.com/Shashanka8"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a
          href="https://twitter.com/shashankanayak1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillTwitterCircle className="w-8 h-8 cursor-pointer" />
        </a>
      </div>

      {/* address */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Bangalore, India</span>
        </div>
        <p className="my-2">nayak.shashanka97@gmail.com</p>
        <p className="my-2">+91-9437313754</p>
      </div>
      {/* email button */}
      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none"
        onClick={() => window.open("mailto:nayak.shashanka97@gmail.com")}
      >
        Email Me
      </button>
      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400"
        onClick={changeTheme}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default Sidebar;
