"use client";
import Image from "next/image";
import { useState } from "react";
import "./styles.scss";

export default function Navbar() {
  const [navBg, setNavBg] = useState(false);

  const changeNavBg = () => {
    if (window.scrollY >= 100) {
      setNavBg(true);
    } else {
      setNavBg(false);
    }
  };

  window.addEventListener("scroll", changeNavBg);

  return (
    <>
      <nav className="navbar nav-underline navbar-expand-md container-fluid position-fixed z-3">
        <div
          className={
            navBg
              ? "nav-glass content_nav_bx container-fluid ms-5 me-5 mt-1 pt-1 pe-4 pb-1 ps-4 navbar-reveal-animation"
              : " nav-content_nav_bx container-fluid ms-5 me-5 mt-1 pt-1 pe-4 pb-1 ps-4 navbar-reveal-animation"
          }
        >
          <a
            className="navbar-brand navbar__logo"
            href="/"
            rel="noopener noreferrer"
            aria-label="Logo"
          >
            <Image
              src="/svg/global-svg/logotype-consunales.svg"
              width={100}
              height={100}
              alt="Logo consunales"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav gap-4 container-fluid d-flex justify-content-end align-items-center">
              <a
                className="navbar-bar__link nav-link fw-bold"
                href="/"
                rel="noopener"
              >
                Inicio
              </a>
              <a
                className="navbar-bar__link nav-link fw-bold"
                href="/pages/experience"
                rel="noopener"
              >
                Nuestra experiencia
              </a>
              <a
                className="navbar-bar__link nav-link fw-bold"
                href="/pages/about-us"
                rel="noopener"
              >
                Nosotros
              </a>
              <a
                className="navbar-bar__link nav-link fw-bold"
                href="/pages/services"
                rel="noopener"
              >
                Servicios
              </a>
              <a
                className="navbar-bar__link nav-link fw-bold"
                href="/pages/work-us"
                rel="noopener"
              >
                Trabaja con nosotros
              </a>
              <a
                className="navbar-bar__link nav-link fw-bold"
                href="/pages/contact"
                rel="noopener"
              >
                Contáctanos
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
