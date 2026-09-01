import { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMoon,
  FaSun,
} from "react-icons/fa";

type Theme = "blue" | "purple" | "orange";
type Lang = "pt" | "en";

const themeColors = {
  blue: {
    primary: "text-blue-600",
    bar: "bg-blue-600",
    badge: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
  },
  purple: {
    primary: "text-purple-600",
    bar: "bg-purple-600",
    badge:
      "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300",
  },
  orange: {
    primary: "text-orange-600",
    bar: "bg-orange-600",
    badge:
      "bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300",
  },
};

function SectionCard({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
        p-8
        rounded-2xl
        border border-gray-200 dark:border-gray-700
        bg-gray-50 dark:bg-gray-900
        transition-all duration-300 ease-in-out
        hover:-translate-y-2
        hover:shadow-xl
        hover:border-gray-300
        dark:hover:border-gray-500
        mb-6
      "
    >
      {children}
    </div>
  );
}

function SkillBar({
  name,
  level,
  color,
}: {
  name: string;
  level: number;
  color: string;
}) {
  return (
    <div className="mb-4">
      <p className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-1">
        {name}
      </p>
      <div className="w-full h-2 bg-gray-300 dark:bg-gray-700 rounded-full">
        <div
          className={`h-2 ${color} rounded-full transition-all duration-700 `}
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

function ProjectCard({
  title,
  description,
  techs,
  badgeColor,
}: {
  title: string;
  description: string;
  techs: string[];
  badgeColor: string;
}) {
  return (
    <div className="mb-8">
      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h4>

      <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {techs.map((tech, index) => (
          <span
            key={index}
            className={`text-xs px-3 py-1 rounded-full font-medium ${badgeColor}`}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

function Footer({ lang }: { lang: Lang }) {
  return (
    <footer className="mt-16 pt-8 border-t border-gray-300 dark:border-gray-700 text-center text-sm text-gray-600 dark:text-gray-400">
      <p>
        {lang === "pt" ? "Criado por" : "Created by"}{" "}
        <span className="font-semibold">
          <a href="https://github.com/Dev-Moura" target="_blank">
            Michael Moura
          </a>
        </span>
      </p>
      <p className="mt-1">
        © {new Date().getFullYear()} —{" "}
        {lang === "pt"
          ? "Todos os direitos reservados."
          : "All rights reserved."}
      </p>
    </footer>
  );
}

export default function App() {
  const [dark, setDark] = useState(false);
  const [theme, setTheme] = useState<Theme>("blue");
  const [lang, setLang] = useState<Lang>("pt");

  const colors = themeColors[theme];

  useEffect(() => {
    const html = document.documentElement;

    if (dark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [dark]);

  const t = {
    toggle: lang === "pt" ? "Idioma" : "Language",
    role: "Software Engineer",
    summary:
      lang === "pt"
        ? "Engenheiro de Software com experiência hands-on em desenvolvimento full stack e automação de processos. Atualmente estagiário de Engenharia de Software no BNDES, onde desenvolvo soluções de automação com Python e Playwright, construo ferramentas internas com Power Platform e colaboro em equipes multifuncionais através de Design Sprints e práticas ágeis. Apaixonado por escrever código limpo e manter arquiteturas escaláveis que resolvem problemas reais. Cursando Bacharelado em Engenharia de Software (Descomplica), com certificações em Python, Java, Spring Boot, SQL e Backend."
        : "Software Engineer with hands-on experience building full-stack applications and automating business processes. Currently a Software Engineering Intern at BNDES, developing automation solutions with Python and Playwright, building internal tools with the Power Platform, and collaborating in cross-functional teams through Design Sprints and agile practices. Passionate about writing clean code and designing scalable architectures that solve real-world problems. Pursuing a Bachelor's in Software Engineering (Descomplica), certified in Python, Java, Spring Boot, SQL, and Backend.",
    expTitle: lang === "pt" ? "Experiência Profissional" : "Work Experience",
    eduTitle: lang === "pt" ? "Formação" : "Education",
    projTitle: lang === "pt" ? "Projetos" : "Projects",
    langTitle:
      lang === "pt" ? "Linguagens de Programação" : "Programming Languages",
    fwTitle: lang === "pt" ? "Frameworks" : "Frameworks",
    idiomasTitle: lang === "pt" ? "Idiomas" : "Languages",
  };

  return (
    <div>
      <div className="min-h-screen bg-gray-200 dark:bg-gray-900 flex justify-center items-center px-6 py-16 transition-colors duration-300">
        <div className="w-full max-w-6xl bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-12 transition-colors duration-300">
          {/* Top Bar */}
          <div className="flex justify-between items-center mb-12">
            <div className="flex gap-3">
              <button
                onClick={() => setTheme("blue")}
                className="w-4 h-4 bg-blue-600 rounded-full"
              />
              <button
                onClick={() => setTheme("purple")}
                className="w-4 h-4 bg-purple-600 rounded-full"
              />
              <button
                onClick={() => setTheme("orange")}
                className="w-4 h-4 bg-orange-500 rounded-full"
              />
            </div>

            <div className="flex gap-3 items-center">
              <button
                onClick={() => setDark(!dark)}
                className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-300 border px-6 py-1 rounded-full dark:border-gray-600"
              >
                {dark ? <FaSun /> : <FaMoon />}
                {lang === "pt" ? "Tema" : "Theme"}
              </button>
              <button
                onClick={() => setLang(lang === "pt" ? "en" : "pt")}
                className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-300 border px-6 py-1 rounded-full dark:border-gray-600"
              >
                <span>{lang === "pt" ? "🇧🇷" : "🇺🇸"}</span>
                {lang === "pt" ? "PT-BR" : "EN-US"}
              </button>
            </div>
          </div>

          {/* Header */}
          <div className="mb-16">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
              Michael Moura
            </h1>

            <h2 className={`text-lg font-semibold ${colors.primary} mt-1`}>
              {t.role}
            </h2>

            <div className="flex gap-6 mt-6 text-sm text-gray-700 dark:text-gray-300">
              <a href="mailto:michael.moura72@hotmail.com" className="flex items-center gap-2 hover:opacity-70">
                <FaEnvelope /> {lang === "pt" ? "Email" : "Email"}
              </a>
              <a href="https://github.com/Dev-Moura" className="flex items-center gap-2 hover:opacity-70">
                <FaGithub /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/michael-de-souza/" className="flex items-center gap-2 hover:opacity-70">
                <FaLinkedin /> LinkedIn
              </a>
            </div>
            <div className="mt-6">
              <span className="text-sm font-bold text-gray-600 dark:text-gray-200">
                {t.summary}
              </span>
            </div>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* LEFT SIDE */}
            <div className="md:col-span-2 space-y-12">
              <SectionCard>
                <h3 className="text-xl font-semibold border-b border-gray-300 dark:border-gray-600 pb-2 mb-6 text-gray-900 dark:text-white">
                  {t.expTitle}
                </h3>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <strong className="text-gray-900 dark:text-white">
                      Banco Nacional do Desenvolvimento Econômico - BNDES
                    </strong>
                    <span className="text-gray-500">
                      {lang === "pt" ? "12/2024 — Atual" : "12/2024 — Present"}
                    </span>
                  </div>

                  <p className="text-sm text-gray-700 dark:text-gray-300 font-medium mb-2">
                    {lang === "pt"
                      ? "Estágio de Engenharia de Software"
                      : "Software Engineering Intern"}
                  </p>

                  <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    {lang === "pt"
                      ? [
                          "Automatização de processos internos com Python e Playwright, reduzindo tarefas manuais e aumentando a eficiência operacional.",
                          "Desenvolvimento de sistemas com Power Apps, Power Automate e SharePoint, criando back-office para suporte às operações do RH.",
                          "Colaboração em Design Sprint, contribuindo na definição de problema, ideação, prototipação com Miro e validação de soluções com stakeholders.",
                          "Aplicação de boas práticas de versionamento (Git/GitLab).",
                          "Participação ativa em ciclos de testes manuais e automatizados.",
                        ]
                      : [
                          "Automating internal processes with Python and Playwright, reducing manual tasks and increasing operational efficiency.",
                          "Developing systems with Power Apps, Power Automate, and SharePoint, building a back-office to support HR operations.",
                          "Collaborating in Design Sprints, contributing to problem definition, ideation, prototyping with Miro, and validating solutions with stakeholders.",
                          "Applying versioning best practices (Git/GitLab).",
                          "Actively participating in manual and automated testing cycles.",
                        ].map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between text-sm mt-6">
                    <strong className="text-gray-900 dark:text-white">
                      MGI Technogin - {lang === "pt" ? "Freelancer" : "Freelance"}
                    </strong>
                    <span className="text-gray-500">10/2023 — 04/2024</span>
                  </div>

                  <p className="text-sm text-gray-700 dark:text-gray-300 font-medium mb-2">
                    {lang === "pt" ? "Digitador" : "Data Entry Clerk"}
                  </p>

                  <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    {lang === "pt"
                      ? [
                          "Transcrição e inserção de dados contratuais no sistema da empresa.",
                          "Alimentação do banco de dados e garantia da consistência das informações registradas.",
                          "Preservação e organização de documentos físicos, assegurando a integridade do acervo documental.",
                        ]
                      : [
                          "Transcription and entry of contractual data into the company's system.",
                          "Feeding the database and ensuring the consistency of recorded information.",
                          "Preservation and organization of physical documents, ensuring the integrity of the documentary archive.",
                        ].map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between text-sm mt-6">
                    <strong className="text-gray-900 dark:text-white">
                      {lang === "pt" ? "Exército Brasileiro" : "Brazilian Army"}
                    </strong>
                    <span className="text-gray-500">03/2019 — 02/2020</span>
                  </div>

                  <p className="text-sm text-gray-700 dark:text-gray-300 font-medium mb-2">
                    {lang === "pt" ? "Militar" : "Military"}
                  </p>

                  <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    {lang === "pt"
                      ? [
                          "Utilização de pacote Office e LibreOffice para gestão de documentos e relatórios.",
                          "Apoio logístico à equipe administrativa.",
                          "Organização e controle de arquivos.",
                        ]
                      : [
                          "Use of Office and LibreOffice packages for document and report management.",
                          "Logistical support to the administrative team.",
                          "Organization and control of files.",
                        ].map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                  </ul>
                </div>
              </SectionCard>

              <SectionCard>
                <h3 className="text-xl font-semibold border-b border-gray-300 dark:border-gray-600 pb-2 mb-6 text-gray-900 dark:text-white">
                  {t.eduTitle}
                </h3>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <strong className="text-gray-900 dark:text-white">
                      Descomplica Faculdade Digital
                    </strong>
                    <span className="text-gray-500">04/2024 - 12/2027</span>
                  </div>

                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {lang === "pt"
                      ? "Bacharelado em Engenharia de Software. Formação focada em arquitetura de software, backend e sistemas escaláveis."
                      : "Bachelor's in Software Engineering. Focused on software architecture, backend, and scalable systems."}
                  </p>
                </div>

                <div>
                  <div className="flex justify-between text-sm mt-6">
                    <strong className="text-gray-900 dark:text-white">
                      Oracle Next Education - G7
                    </strong>
                    <span className="text-gray-500">04/2024 - 01/2025</span>
                  </div>

                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {lang === "pt"
                      ? "Formação focada em Java, Spring Boot, MySQL, Oracle Cloud Infrastructure (OCI), IA Generativa, arquitetura de software, backend e sistemas escaláveis."
                      : "Training focused on Java, Spring Boot, MySQL, Oracle Cloud Infrastructure (OCI), Generative AI, software architecture, backend, and scalable systems."}
                  </p>
                </div>
              </SectionCard>

              <SectionCard>
                <h3 className="text-xl font-semibold border-b border-gray-300 dark:border-gray-600 pb-2 mb-6 text-gray-900 dark:text-white">
                  {t.projTitle}
                </h3>

                <a href="https://github.com/Dev-Moura/teste_app_votacao" target="_blank">
                  <ProjectCard
                    title="App Intenção de Voto"
                    description={
                      lang === "pt"
                        ? "API REST em Python + FastAPI para simular um sistema de intenções de voto. Arquitetura em camadas (routers, services, repositories), validação de dados com Pydantic, tratamento de erros HTTP, testes automatizados com Pytest e containerização com Docker. Inclui documentos automática com Swagger e bloqueio de votos duplicados."
                        : "REST API in Python + FastAPI simulating a voting intention system. Layered architecture (routers, services, repositories), data validation with Pydantic, HTTP error handling, automated tests with Pytest, and Docker containerization. Includes automatic documentation with Swagger and duplicate-vote prevention."
                    }
                    techs={["Python 3.13", "FastAPI", "SQLite", "Pydantic", "Pytest", "Docker"]}
                    badgeColor={colors.badge}
                  />
                </a>

                <a href="https://github.com/Dev-Moura/e-MedCare" target="_blank">
                  <ProjectCard
                    title="E-medcare"
                    description={
                      lang === "pt"
                        ? "Aplicação de consultório médico onde o paciente acessa via login ou cadastro, marca consultas, verifica qual médico vai atendê-lo e acessa prescrições médicas."
                        : "Medical clinic application where patients log in or register, book appointments, see which doctor will attend them, and access medical prescriptions."
                    }
                    techs={["TypeScript", "Node.js", "Next.js", "React", "MongoDB"]}
                    badgeColor={colors.badge}
                  />
                </a>

                <a href="https://github.com/Dev-Moura/JavaProjectCrud" target="_blank">
                  <ProjectCard
                    title="JavaProjectCrud"
                    description={
                      lang === "pt"
                        ? "CRUD no Back-End Java + Spring Boot + PostgreSQL + Tsx com PrimeReact Sakai no Front-End. Aplicação para criar, atualizar, visualizar e deletar usuários."
                        : "CRUD with Java + Spring Boot + PostgreSQL backend and PrimeReact Sakai on the frontend. An application to create, update, view, and delete users."
                    }
                    techs={["Java", "Spring Boot", "PostgreSQL", "React", "TypeScript"]}
                    badgeColor={colors.badge}
                  />
                </a>

                <a href="https://github.com/Dev-Moura/TODO-LIST" target="_blank">
                  <ProjectCard
                    title="To-Do List React + Material UI"
                    description={
                      lang === "pt"
                        ? "Gerenciador de tarefas moderno com React e Material UI: dark mode, categorias e prioridades, edição e deleção de tarefas, e armazenamento local via localStorage."
                        : "Modern task manager built with React and Material UI: dark mode, categories and priorities, task editing and deletion, and local storage via localStorage."
                    }
                    techs={["React", "Material UI", "JavaScript (ES6+)"]}
                    badgeColor={colors.badge}
                  />
                </a>

                <a href="https://github.com/Dev-Moura/ConversorMoedas" target="_blank">
                  <ProjectCard
                    title="Conversor de Moedas"
                    description={
                      lang === "pt"
                        ? "Conversor de Moedas que permite converter valores entre diferentes moedas em tempo real, utilizando uma API de câmbio para buscar cotações atualizadas."
                        : "Currency converter that converts values between different currencies in real time, using an exchange rate API to fetch up-to-date quotes."
                    }
                    techs={["Java", "Consumo de API", "Gson", "Maven"]}
                    badgeColor={colors.badge}
                  />
                </a>

                <ProjectCard
                  title="Projeto de Extensão Condominium Management System"
                  description={
                    lang === "pt"
                      ? "Desenvolvimento de estrutura de banco de dados em nuvem para gestão de moradores, centralizando informações sigilosas e melhorando a segurança administrativa."
                      : "Development of a cloud database structure for resident management, centralizing confidential information and improving administrative security."
                  }
                  techs={[]}
                  badgeColor={colors.badge}
                />
              </SectionCard>
            </div>

            {/* RIGHT SIDE */}
            <div>
              <SectionCard>
                <h3 className="text-xl font-semibold border-b border-gray-300 dark:border-gray-600 pb-2 mb-6 text-gray-900 dark:text-white">
                  {t.langTitle}
                </h3>
                <SkillBar name="Java" level={80} color={colors.bar} />
                <SkillBar name="TypeScript" level={60} color={colors.bar} />
                <SkillBar name="Python" level={70} color={colors.bar} />
                <SkillBar name="JavaScript" level={80} color={colors.bar} />
                <SkillBar name="Dart" level={40} color={colors.bar} />
                <SkillBar name="SQL" level={50} color={colors.bar} />
                <SkillBar name="NoSQL" level={50} color={colors.bar} />
                <SkillBar name="Git / GitLab" level={80} color={colors.bar} />
              </SectionCard>
              <div>
                <SectionCard>
                  <h3 className="text-xl font-semibold border-b border-gray-300 dark:border-gray-600 pb-2 mb-6 text-gray-900 dark:text-white">
                    {t.fwTitle}
                  </h3>
                  <SkillBar name="Spring / Spring Boot / Hibernate" level={80} color={colors.bar} />
                  <SkillBar name="React.js / Next.js / Nest.js" level={70} color={colors.bar} />
                  <SkillBar name="FastAPI / SQLAlchemy" level={70} color={colors.bar} />
                  <SkillBar name="Flutter" level={40} color={colors.bar} />
                  <SkillBar name="Playwright / Pytest" level={60} color={colors.bar} />
                </SectionCard>
              </div>
              <div>
                <SectionCard>
                  <h3 className="text-xl font-semibold border-b border-gray-300 dark:border-gray-600 pb-2 mb-6 text-gray-900 dark:text-white">
                    {t.idiomasTitle}
                  </h3>
                  <SkillBar name="Português" level={100} color={colors.bar} />
                  <SkillBar name="English" level={55} color={colors.bar} />
                </SectionCard>
              </div>
            </div>
          </div>
          <Footer lang={lang} />
        </div>
      </div>
    </div>
  );
}
