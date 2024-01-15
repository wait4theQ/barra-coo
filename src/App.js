import React from "react";
import "./App.css";
import logo from "./img/logo.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function App() {
  const carouselSettings = {
    showArrows: false,
    showThumbs: false,
    infiniteLoop: true,
    autoPlay: true,
    interval: 3000,
    transitionTime: 500,
    stopOnHover: false,
    dynamicHeight: false,
  };

  return (
    <div className="App">
      <Carousel className="Carousel" {...carouselSettings}>
        <div className="banner">
          <img
            src={require("./img/banner1.jpg")}
            alt="Banner 1"
            className="Carousel-img"
          />
        </div>
        <div className="banner">
          <img
            src={require("./img/banner2.jpg")}
            alt="Banner 2"
            className="Carousel-img"
          />
        </div>
        <div className="banner">
          <img
            src={require("./img/banner3.jpg")}
            alt="Banner 3"
            className="Carousel-img"
          />
        </div>
      </Carousel>

      <header className="App-header">
        <div className="TopBar">
          <p>Rua Tiradentes, 164 - Centro / Quarta a sábado - 19h - 01h</p>
        </div>

        <div className="Header-container Header-border">
          <a href="/" className="Logo-link">
            <img src={logo} className="Bar-logo" alt="logo do bar" />
          </a>

          <nav className="Navigation">
            <ul className="Navigation-list">
              <li className="Navigation-item">
                <a href="#drinks" className="Navigation-link">
                  HOME
                </a>
              </li>
              <li className="Navigation-item">
                <a href="#shots" className="Navigation-link">
                  MENU
                </a>
              </li>
              <li className="Navigation-item">
                <a href="#eventos" className="Navigation-link">
                  EVENTOS
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="description-section">
        <div className="Biography">
          <h2>Barra Cô.</h2>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>

        <div className="Image-container">
          <img
            src={require("./img/sobre.jpg")}
            alt="Descrição do Bar"
            className="Description-image"
          />
        </div>
      </section>

      <section className="gallery" id="portafolio">
        <div className="contenedor">
          <h2 className="subtitulo">Galeria</h2>
          <div className="contenedor-galeria">
            <img
              src={require("./img/barraco bar -01.jpg")}
              alt=""
              className="img-galeria"
            />
            <img
              src={require("./img/barraco bar -02.jpg")}
              alt=""
              className="img-galeria"
            />
            <img
              src={require("./img/barraco bar -03.jpg")}
              alt=""
              className="img-galeria"
            />
            <img
              src={require("./img/barraco bar -07.jpg")}
              alt=""
              className="img-galeria"
            />
            <img
              src={require("./img/barraco bar -08.jpg")}
              alt=""
              className="img-galeria"
            />
            <img
              src={require("./img/barraco bar -17.jpg")}
              alt=""
              className="img-galeria"
            />
            <img
              src={require("./img/barraco bar -18.jpg")}
              alt=""
              className="img-galeria"
            />
            <img
              src={require("./img/barraco bar -19.jpg")}
              alt=""
              className="img-galeria"
            />
            <img
              src={require("./img/barraco bar -27.jpg")}
              alt=""
              className="img-galeria"
            />
            <img
              src={require("./img/barraco bar -29.jpg")}
              alt=""
              className="img-galeria"
            />
            <img
              src={require("./img/barraco bar -32.jpg")}
              alt=""
              className="img-galeria"
            />
            <img
              src={require("./img/barraco bar -22.jpg")}
              alt=""
              className="img-galeria"
            />
           
          </div>
        </div>
      </section>
      <footer className="Footer">
        <div className="links">
          <a href="/">Home</a>
          <a href="/">Galeria</a>
          <a href="/">Menu</a>
          <a href="/">Eventos</a>
        </div>
        <div className="instagram">
          <a
            href="https://www.instagram.com/barra.co.fln/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={require("./img/instagram.png")} alt="Instagram" />
          </a>
        </div>
        <div className="direitos">
          Todos os direitos reservados &copy;Barra Cô. 2024
        </div>
      </footer>
    </div>
  );
}

export default App;
