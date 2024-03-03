import { NavbarDummyData } from "@/data/NavbarData";
import React, { useState } from "react";
import { Container } from "../share";
import Image from "next/image";
import Menu from "./manuControler/Menu";
import { FiMenu } from "react-icons/fi";
import MobileNavbar from "./mobileMenuControler/MobileNavbar";
import Link from "next/link";
import { motion } from "framer-motion";
import SzhsinMenuDesktop from "./szhsin-menu/SzhsinMenuDesktop";

function NavBar() {
  const [MobileNavbarState, setMobileNavbarState] = useState(false);
  const { Logo, Menus } = NavbarDummyData;

  return (
    <section className="sticky top-0 left-0 w-full bg-white border-b z-10">
      <Container fullWidth isContainer={false} class_name="lg:!px-9">
        <div className="flex justify-between items-center gap-2 flex-wrap">
          {/* logo  */}
          <motion.div
            className="flex-wrap"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.3,
            }}
          >
            <Link rel="canonical" href="/" className="hidden md:inline">
              <Image
                src={Logo}
                alt={"logo"}
                width={160}
                quality={100}
                priority={true}
              />
            </Link>
            <Link rel="canonical" href="/" className="md:hidden">
              <Image
                src={Logo}
                alt={"logo"}
                width={100}
                quality={100}
                priority={true}
              />
            </Link>
          </motion.div>

          {/* menu  */}
          <div className="flex justify-center items-center flex-wrap md:hidden">
            {/* menu-berar-icon and menu for mobile  */}
            <div className="menu-berar-icon md:pr-4 pr-2">
              <FiMenu
                size={28}
                color="#011F21"
                className="cursor-pointer"
                onClick={() => setMobileNavbarState(!MobileNavbarState)}
              />
              {/* mobile bar  */}
              {MobileNavbarState && (
                <MobileNavbar
                  menuData={Menus}
                  logoAsset={Logo}
                  MobileNavbarState={MobileNavbarState}
                  setMobileNavbarState={setMobileNavbarState}
                />
              )}
            </div>
            {/* NAVBAR for desktop */}
            <div className="NAVBAR desktop-menu">
              <Menu menuData={Menus} />
            </div>
          </div>
        
        <SzhsinMenuDesktop />
        </div>
      </Container>
    </section>
  );
}

export default NavBar;
