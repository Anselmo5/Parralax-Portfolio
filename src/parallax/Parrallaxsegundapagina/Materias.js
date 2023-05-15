import "./styles.css";

import html from "./html.png";
import css from "./css.png";
import javascript from "./javascript.png";
import react from "./react.png";
import Parallax from "../parallax-2/Parallax";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import logo from "./Mylogo.jpeg";
import { useEffect, useRef } from "react";

export const Materias = () => {
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
      <nav>
        <img src={logo} className="Mylogo"/>
        <a href="{Parallax}"> Home </a>
        <a  id="Skill_id" href="#"> Skills </a>
        <a href="#"> Contact </a>
      </nav>
      <section className="banner">
        <div className="banner-content">
          <h2>Materias</h2>
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
      <section className="footer">
        <h2>Contact</h2>
        <form>
          <input type="text" placeholder="Your email" />

          <textarea rows={6} placeholder="Message" />
          <button>SUBMIT</button>
        </form>
      </section>

    
    </>
  );
};

export default Materias