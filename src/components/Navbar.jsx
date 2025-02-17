import { Link } from "react-router";
import { main_logo } from "../assets";
import { navigations, setActiveNavigation } from "../data";
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { MdMenu, MdClose } from "react-icons/md";

const Navbar = () => {
  const comp = useRef(null);
  const linksRef = useRef([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [navItems, setNavItems] = useState(
    setActiveNavigation(navigations[0].id)
  );

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Only animate the mobile menu when it is open
      if (menuOpen) {
        gsap.fromTo(
          ".mobile-menu",
          { opacity: 0, yPercent: "-100" },
          { opacity: 1, yPercent: 0, duration: 0.2, ease: "power4.inOut" }
        );

        // Sequential animation for the menu links
        gsap.fromTo(
          linksRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.2,
            duration: 0.2,
            ease: "power4.inOut",
            delay: 0.5,
          }
        );
      } else {
        // Only animate the mobile menu when it is closing
        if (document.querySelector(".mobile-menu")) {
          gsap.to(".mobile-menu", {
            opacity: 0,
            yPercent: "100",
            duration: 0.2,
            ease: "power4.inOut",
          });

          // Sequential exit animation for the links
          gsap.to(linksRef.current, {
            opacity: 0,
            y: 30,
            stagger: 0.2,
            duration: 0.2,
            ease: "power4.inOut",
            delay: 0.2,
          });
        }
      }
    });

    return () => ctx.revert();
  }, [menuOpen]); // Re-run on menuOpen state change

  useLayoutEffect(() => {
    if (buttonClicked) {
      gsap.to(".menu-toggle", {
        scale: 1.2,
        duration: 0.2,
        ease: "power1.out",
        yoyo: true,
        repeat: 1,
      });
      setButtonClicked(false);
    }
  }, [buttonClicked]);

  const handleNavigationClick = (id) => {
    setNavItems(setActiveNavigation(id));
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto flex justify-between items-center py-4 px-6 md:px-20 max-w-[100rem]">
        {/* Logo */}
        <Link to="/" className="text-center">
          <img src={main_logo} width={100} height={100} />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6" ref={comp}>
          {navItems.map((navigation) => (
            <Link
              to={navigation.url}
              key={navigation.title}
              className={`2xl:text-lg text-sm font-medium hover:text-upforangecrayola ${
                navigation.active
                  ? "text-upforangecrayola"
                  : "text-upfdarkblack"
              } hover:text-upfmelon transition duration-300 ease-in-out`}
              onClick={() => handleNavigationClick(navigation.id)}
            >
              {navigation.title}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl menu-toggle"
          onClick={() => {
            setMenuOpen(!menuOpen);
            setButtonClicked(true); // Trigger the button animation
          }}
        >
          {menuOpen ? <MdClose /> : <MdMenu />}
        </button>
      </div>

      {/* Full-Screen Mobile Menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 w-full h-full bg-upforangecrayola flex flex-col items-center justify-center text-white z-50 transition-opacity duration-300 mobile-menu"
          onClick={() => setMenuOpen(false)} // Click outside to close
        >
          <button
            className="absolute top-6 right-6 text-3xl"
            onClick={() => setMenuOpen(false)}
          >
            <MdClose />
          </button>

          <div className="flex flex-col items-center gap-6 text-xl">
            {navItems.map((navigation, index) => (
              <Link
                to={navigation.url}
                key={navigation.title}
                className={`hover:text-gray-300 transition duration-300 ${
                  navigation.active ? "text-upfdarkblack" : ""
                }`}
                onClick={() => handleNavigationClick(navigation.id)} // Close on click
                ref={(el) => (linksRef.current[index] = el)} // Assign each link ref
              >
                {navigation.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
