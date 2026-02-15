import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import Skills from "./Skills";
import CustomCursor from "../Component/Cursor";
import Hero from "../Component/Hero";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import { useRef } from "react";
import { Store } from "lucide-react";
import { MonitorCog } from "lucide-react";
import { BookOpenText } from "lucide-react";
import { UserStar } from "lucide-react";
import { BookCopy } from "lucide-react";

function Home() {
  const aboutRef = useRef(null);
  const skillref = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const scrollHandler = (elemRef) => {
    if (elemRef.current) {
      window.scrollTo({
        top: elemRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const linkClasses =
    "relative cursor-pointer  text-white hover:text-red hover:scale-130 transition duration-300 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full";
  return (
    <>
      <div className=" top-2 fixed left-0 w-full   rounded-full bg-transparent">
        <div className="max-w-3xl mx-auto  flex justify-between items-center py-4 px-6">
          {/* Logo */}
          <NavLink to="/" className="flex  items-center gap-2">
            <img
              src="https://cdn-icons-png.freepik.com/512/10169/10169752.png"
              alt="logo"
              className="w-13 h-13  hover:scale-110 transition-transform duration-300"
            />

            <span className="text-xl  hover:scale-110 font-extrabold  text-gray-800 tracking-wide">
              <span className="text-fuchsia-900">Y</span>
              <span className="text-red-600">a</span>
              <span className="to-indigo-500">sh</span>
              <span className="text-white">.dev</span>
            </span>
          </NavLink>

          {/* Nav Links */}
          <nav className="hidden backdrop-blur-lg bg-blend-color-burn p-6 rounded-full md:flex items-center gap-10 text-2xl font-bold">
            <span
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className={linkClasses}
            >
              <Store />
            </span>

            <span
              onClick={() => scrollHandler(projectRef)}
              className={linkClasses}
            >
              <MonitorCog />
            </span>

            <span
              onClick={() => scrollHandler(aboutRef)}
              className={linkClasses}
            >
              <BookOpenText />
            </span>
            <span
              onClick={() => scrollHandler(skillref)}
              className={linkClasses}
            >
              <BookCopy />
            </span>

            <span
              onClick={() => scrollHandler(contactRef)}
              className={linkClasses}
            >
              <UserStar />
            </span>
          </nav>
        </div>
      </div>
      <CustomCursor />

      <Hero />

      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={skillref}>
        <Skills />
      </div>

      <div ref={projectRef}>
        <Project />
      </div>

      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default Home;
