import "./styles.css";

import html from "./html.png";
import css from "./css.png";
import javascript from "./javascript.png";
import react from "./react.png";
import segundapagina from '../Parrallaxsegundapagina/Materias'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import logo from "./Mylogo.jpeg";
import { useEffect, useRef} from "react";
import { Link } from "react-router-dom";

export const Parallax = () => {
  const containerRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const sections = gsap.utils.toArray(".panel");
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + containerRef.current.offsetWidth,
      },
    });
  }, []);

  return (
    <>
      <nav className="indice">
        <img src={logo} className="Mylogo"/>
        <a href="#"> Home </a>
        <a id="Skill_id" href="#"> Skills </a>
        <a href="#"> Contact </a>   
        <a href="#"> Materias </a>
      </nav>
      <section className="banner">
        <div className="banner-content">
          <h2>Olá Devs</h2>
          <h3>Bém vindos ao Meu Portfolio</h3>
        </div>
      </section>
      <div ref={containerRef} className="container" id="Skill_id" >
        <section className="description panel blue">
          <img src={html} />
          <h2>HTML</h2>
          <p>
            Linguagem de marcação pela qual eu comecei dando meus primeiros Paços pela ar de desenvolvimento Web
          </p>
        </section>
        <section className="panel red">
          <img src={css} />
          <h2>CSS</h2>
          <p>
          Linguagem de marcação onde eu comecei a fazer meus primeiros design nos sites que eu criava
          </p>
        </section>
        <section className="description panel blue">
          <img src={javascript} />
          <h2>JAVASCRPIT</h2>
          <p>
            Linguagem de Programação que atualmente e a que eu mais trabalho, <br />
             E a Linguagem que eu comecei criar a logica nos meus projetps
          </p>
        </section>
        <section className="panel red">
          <img src={react} />
          <h2>React JS</h2>
          <p>
          Biblioteca Javascript que por livre e espontania vontade atualmente quis aprender a mecher
          </p>
        </section>
        <section className="panel red">
          <img src={react} />
          <h2>React Native</h2>
          <p>
           Tecnlogia Utilizada Para desenvolvimento App
          </p>
        </section>
      </div>
        <section className="contatos">
          <div className="aling">
            <img src={logo} alt="" />
          </div>

          <div className="midias">
          <p align="center">
              <a href="https://github.com/Anselmo5">
                <img src="https://i.pinimg.com/originals/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.png" />
                </a>
                <a href="https://www.instagram.com/anselmo_henrique02/?next=%2F">
                <img src="https://play-lh.googleusercontent.com/VRMWkE5p3CkWhJs6nv-9ZsLAs1QOg5ob1_3qg-rckwYW7yp1fMrYZqnEFpk0IoVP4LM" />
                </a>
                <a href="https://www.linkedin.com/in/anselmo-henrique-266647233/">
                <img src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw" />
                </a>
        
          </p>
          </div>

          <div className="midia2">
          <p align="center">
              <a href="https://skillicons.dev">
              <img src="https://skillicons.dev/icons?i=git,linux,github,linkedin,react,html,css,javascript,typescript" />
            </a>
          </p>
          </div>
        </section>

    </>
  );
};

export default Parallax