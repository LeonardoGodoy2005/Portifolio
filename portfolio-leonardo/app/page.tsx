
"use client";

import { useEffect, type MouseEvent } from "react";
import Scene3D from "./components/Scene3D";

const projects = [
  {
    number: "01",
    name: "NEXUS//ZERO",
    category: "CYBERSECURITY · WEB",
    description:
      "Plataforma de análise de exposição e segurança de aplicações web.",
    tags: ["Security", "Web", "Analysis"],
    className: "project-nexus",
    symbol: "N//",
    href: "https://github.com/LeonardoGodoy2005/nexus-zero",
  },
  {
    number: "02",
    name: "Controle Financeiro",
    category: "FRONT-END · DATA",
    description:
      "Interface para acompanhar receitas, despesas e visualizar o saldo financeiro.",
    tags: ["React", "JavaScript", "Charts"],
    className: "project-finance",
    symbol: "∑",
    href: "https://github.com/LeonardoGodoy2005/controle-financeiro",
  },
  {
    number: "03",
    name: "CreatorBox",
    category: "WEB DESIGN · FRONT-END",
    description:
      "Experiência digital para um clube de assinatura com identidade visual própria.",
    tags: ["Web", "UI/UX", "Design"],
    className: "project-creator",
    symbol: "C.",
    href: "https://github.com/LeonardoGodoy2005/CreatorBox",
  },
  {
    number: "04",
    name: "NeuronLabs",
    category: "WEB DEVELOPMENT",
    description:
      "Projeto de desenvolvimento web com foco em uma apresentação tecnológica.",
    tags: ["Web", "Development"],
    className: "project-neuron",
    symbol: "N°",
    href: "https://github.com/LeonardoGodoy2005/NeuronLabs",
  },
  {
    number: "05",
    name: "Foz do Iguaçu",
    category: "WEB EXPERIENCE",
    description:
      "Página web dedicada a um destino turístico, explorando apresentação visual e navegação.",
    tags: ["HTML", "CSS", "JavaScript"],
    className: "project-foz",
    symbol: "FZ",
    href: "https://github.com/LeonardoGodoy2005/Foz-do-Iguacu",
  },
  {
    number: "06",
    name: "Livraria",
    category: "JAVA · OOP",
    description:
      "Projeto acadêmico de biblioteca para trabalhar conceitos de programação orientada a objetos.",
    tags: ["Java", "OOP"],
    className: "project-library",
    symbol: "Ab",
    href: "https://github.com/LeonardoGodoy2005",
  },
];


function handleTilt(event: MouseEvent<HTMLAnchorElement>) {
  const card = event.currentTarget;
  const rect = card.getBoundingClientRect();

  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = ((y - centerY) / centerY) * -7;
  const rotateY = ((x - centerX) / centerX) * 7;

  card.style.setProperty("--rotate-x", `${rotateX}deg`);
  card.style.setProperty("--rotate-y", `${rotateY}deg`);
  card.style.setProperty("--mouse-x", `${x}px`);
  card.style.setProperty("--mouse-y", `${y}px`);

  card.style.transform = `
    perspective(1000px)
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
    translateY(-6px)
    scale3d(1.02, 1.02, 1.02)
  `;
}

function resetTilt(event: MouseEvent<HTMLAnchorElement>) {
  const card = event.currentTarget;

  card.style.transform = "";
  card.style.setProperty("--rotate-x", "0deg");
  card.style.setProperty("--rotate-y", "0deg");
  card.style.setProperty("--mouse-x", "50%");
  card.style.setProperty("--mouse-y", "50%");
}

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    document.querySelectorAll(".reveal").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="noise-overlay" />

      <header className="navbar">
        <a href="#inicio" className="brand">
          LG<span>.</span>
        </a>

        <nav className="nav-links">
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#tecnologias">Tecnologias</a>
          <a href="#contato">Contato</a>
        </nav>

        <a
          className="availability"
          href="mailto:leonardogodoy.dev@gmail.com"
        >
          <span className="status-dot" />
          <span>Conecte-se</span>
          <span className="availability-arrow">↗</span>
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            PORTFÓLIO DIGITAL · 2026
          </div>

          <h1>
            Construindo
            <br />
            o <span className="gradient-text">próximo.</span>
          </h1>

          <p className="hero-description">
            Sou Leonardo Godoy, estudante de Ciência da Computação e
            desenvolvedor em formação. Transformo ideias em experiências
            digitais através de código, tecnologia e criatividade.
          </p>

          <div className="hero-actions">
            <a href="#projetos" className="button-primary">
              Explorar projetos <span>↗</span>
            </a>
            <a href="#sobre" className="button-ghost">
              Conhecer meu trabalho <span>↓</span>
            </a>
          </div>

          <div className="hero-meta">
            <div>
              <span className="meta-number">06<span>+</span></span>
              <span className="meta-label">PROJETOS</span>
            </div>
            <div className="meta-divider" />
            <div>
              <span className="meta-number">WEB</span>
              <span className="meta-label">DESENVOLVIMENTO</span>
            </div>
            <div className="meta-divider" />
            <div>
              <span className="meta-number">DF</span>
              <span className="meta-label">BRASIL</span>
            </div>
          </div>
        </div>

    
<div className="hero-art" aria-label="Objeto tridimensional interativo">
  <Scene3D />

  <div className="floating-label label-top">
    <span className="label-dot" />
    DIGITAL EXPERIENCE
  </div>

  <div className="floating-label label-bottom">
    <span className="label-index">01</span>
    CREATING BEYOND LIMITS
  </div>

  <div className="art-coordinate coordinate-one">-15.78°</div>
  <div className="art-coordinate coordinate-two">47.92°</div>
  <div className="art-cross cross-one">+</div>
  <div className="art-cross cross-two">+</div>
</div>


        <a href="#sobre" className="scroll-indicator">
          <span className="scroll-line" />
          ROLE PARA EXPLORAR
        </a>

        <div className="hero-index">LG / 001 — PORTFOLIO</div>
      </section>

      <section className="intro-section section-shell reveal" id="sobre">
        <div className="section-label">
          <span>01</span> / SOBRE MIM
        </div>

        <div className="intro-content">
          <h2>
            Tecnologia é a ferramenta.
            <br />
            <span className="muted-text">
              Criar soluções é o objetivo.
            </span>
          </h2>

          <div className="intro-bottom">
            <p>
              Curso Ciência da Computação na Universidade Católica de
              Brasília e atuo na área de TI na Procuradoria-Geral do
              Distrito Federal. Estou construindo minha trajetória com
              projetos práticos, explorando desenvolvimento web,
              arquitetura de software e segurança digital.
            </p>

            <a
              href="https://www.linkedin.com/in/leonardo-godoy-b56361300"
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              Mais sobre minha trajetória <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="projects-section section-shell" id="projetos">
        <div className="section-heading reveal">
          <div>
            <div className="section-label">
              <span>02</span> / TRABALHOS SELECIONADOS
            </div>
            <h2>
              Ideias em
              <br />
              <span className="gradient-text">movimento.</span>
            </h2>
          </div>

          <p>
            Uma seleção de projetos que representam minha evolução,
            experimentação e aprendizado em tecnologia.
          </p>
        </div>

        

<div className="projects-grid">
  {projects.map((project) => (
    <a
      key={project.number}
      href={project.href}
      target="_blank"
      rel="noreferrer"
      className={`project-card ${project.className} reveal`}
      onMouseMove={handleTilt}
      onMouseLeave={resetTilt}
    >
      <div className="project-visual">
        {project.className === "project-nexus" && (
          <div className="scanner-visual" aria-hidden="true">
            <div className="scanner-ring scanner-ring-outer" />
            <div className="scanner-ring scanner-ring-middle" />
            <div className="scanner-ring scanner-ring-inner" />
            <div className="scanner-cross scanner-cross-x" />
            <div className="scanner-cross scanner-cross-y" />
            <div className="scanner-sweep" />
            <div className="scanner-core" />

            <span className="scanner-node scanner-node-1" />
            <span className="scanner-node scanner-node-2" />
            <span className="scanner-node scanner-node-3" />
            <span className="scanner-node scanner-node-4" />

            <div className="scanner-target">
              <span />
            </div>
          </div>
        )}

        <div className="project-visual-grid" />

        <div className="project-symbol">{project.symbol}</div>
        <div className="project-orbit" />

        <div className="project-topline">
          <span>PROJECT / {project.number}</span>
          <span>↗</span>
        </div>

        <div className="project-bottomline">
          <span>{project.category}</span>
          <span className="project-mini-dot" />
        </div>
      </div>

      <div className="project-info">
        <div className="project-title-row">
          <h3>{project.name}</h3>
          <span className="project-arrow">↗</span>
        </div>

        <p>{project.description}</p>

        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </a>
  ))}
</div>

<a
  href="https://github.com/LeonardoGodoy2005"
  target="_blank"
  rel="noreferrer"
  className="all-projects-link reveal"
>
  Explorar todos os repositórios <span>↗</span>
</a>
</section>



<section className="tech-section section-shell reveal" id="tecnologias">
        <div className="section-label">
          <span>03</span> / FERRAMENTAS
        </div>

        <div className="tech-layout">
          <h2>
            As ferramentas
            <br />
            <span className="muted-text">por trás das ideias.</span>
          </h2>

          <div className="tech-content">
            <p>
              Tecnologias que utilizo nos meus estudos e projetos,
              ampliando meu repertório a cada experiência.
            </p>

            <div className="tech-list">
              {[
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "HTML5",
                "CSS3",
                "Java",
                "SQL",
                "Git",
                "GitHub",
                "Docker",
                "AWS",
              ].map((tech, index) => (
                <span key={tech} className="tech-chip">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section section-shell reveal" id="contato">
        <div className="contact-orb" />

        <div className="section-label">
          <span>04</span> / PRÓXIMO CAPÍTULO
        </div>

        <h2>
          Vamos criar
          <br />
          algo <span className="gradient-text">relevante.</span>
        </h2>

        <p>
          Estou aberto a conexões, oportunidades e projetos que me
          desafiem a ir além.
        </p>

        <a
          href="mailto:leonardogodoy.dev@gmail.com"
          className="button-primary contact-button"
        >
          Entrar em contato <span>↗</span>
        </a>

        <div className="contact-links">
          <a
            href="https://github.com/LeonardoGodoy2005"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB ↗
          </a>
          <a
            href="https://www.linkedin.com/in/leonardo-godoy-b56361300"
            target="_blank"
            rel="noreferrer"
          >
            LINKEDIN ↗
          </a>
        </div>
      </section>

      <footer className="footer">
        <a href="#inicio" className="brand">
          LG<span>.</span>
        </a>
        <span>DESENHADO E DESENVOLVIDO POR LEONARDO GODOY</span>
        <a href="#inicio" className="back-top">
          VOLTAR AO TOPO ↑
        </a>
      </footer>
    </main>
  );
}
