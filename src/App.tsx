import { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMoon,
  FaSun,
} from "react-icons/fa";

type Theme = "blue" | "purple" | "orange";

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

export default function App() {
  const [dark, setDark] = useState(false);
  const [theme, setTheme] = useState<Theme>("blue");

  const colors = themeColors[theme];

  useEffect(() => {
    const html = document.documentElement;

    if (dark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [dark]);

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

            <button
              onClick={() => setDark(!dark)}
              className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-300 border px-6 py-1 rounded-full dark:border-gray-600"
            >
              {dark ? <FaSun /> : <FaMoon />}
              Toggle
            </button>
          </div>

          {/* Header */}
          <div className="mb-16">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
              Michael Moura
            </h1>

            <h2 className={`text-lg font-semibold ${colors.primary} mt-1`}>
              Software Engineer
            </h2>

            <div className="flex gap-6 mt-6 text-sm text-gray-700 dark:text-gray-300">
              <a href="malito:michael.moura72@hotmail.com" className="flex items-center gap-2 hover:opacity-70">
                <FaEnvelope /> Email
              </a>
              <a href="https://github.com/Dev-Moura" className="flex items-center gap-2 hover:opacity-70">
                <FaGithub /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/michael-de-souza/" className="flex items-center gap-2 hover:opacity-70">
                <FaLinkedin /> LinkedIn
              </a>
            </div>
            <div className="mt-6">
              <span className="text-4 font-bold text-gray-600 dark:text-gray-200">
                Software Engineering student (4º semestre) com foco em desenvolvimento Back-End Java e interesse em Arquitetura de Software.
                Atualmente atuo como desenvolvedor no BNDES, participando da construção e manutenção de soluções internas, com foco em organização, automação e melhoria de processos.
                Sou formado pelo programa Oracle Next Education (ONE - G7), com foco em Java e Spring Framework, e continuo aprofundando meus conhecimentos em arquitetura, banco de dados e boas práticas de desenvolvimento.
              </span>
            </div>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* LEFT SIDE */}
            <div className="md:col-span-2 space-y-12">
              <SectionCard>
                <h3 className="text-xl font-semibold border-b border-gray-300 dark:border-gray-600 pb-2 mb-6 text-gray-900 dark:text-white">
                  Work Experience
                </h3>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <strong className="text-gray-900 dark:text-white">
                      BNDES
                    </strong>
                    <span className="text-gray-500">12/2024 — Present</span>
                  </div>

                  <p className="text-sm text-gray-700 dark:text-gray-300 font-medium mb-2">
                    Software Development Intern
                  </p>

                  <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>Colaboração em Design Sprint, contribuindo e acompanhando para definição de problema, ideação, prototipação com miro e validação de soluções com stakeholders</li>
                    <li>Automatização de processos internos com Python e Playwright reduzindo tarefas manuais e aumentando eficiência operacional</li>
                    <li>Desenvolvimento de sistemas backoffice para suporte às operações do RH</li>
                    <li>Aplicação de boas práticas de versionamento (Git/GitLab)</li>
                    <li>Participação ativa em ciclos de testes manuais e automatizados</li>
                    <ProjectCard
                      title=""
                      description=""
                      techs={["Python", "Playwright", "API REST", "Html5/Css3", "Copilot"]}
                      badgeColor={colors.badge}
                    />
                  </ul>
                </div>


                <div>
                  <div className="flex justify-between text-sm mt-6">
                    <strong className="text-gray-900 dark:text-white">
                      MGI Technogin
                    </strong>
                    <span className="text-gray-500">10/2023 — 04/2024</span>
                  </div>

                  <p className="text-sm text-gray-700 dark:text-gray-300 font-medium mb-2">
                    Typist Freelancer
                  </p>

                  <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>Atuei também na preservação e organização de documentos físicos, assegurando a integridade do acervo documental.</li>
                    <li>Atuei como digitador, realizando a transcrição e inserção de dados contratuais no sistema da empresa.</li>
                    <li>Responsável por alimentar o banco de dados e garantir a consistência das informações registradas.</li>
                  </ul>
                </div>

              </SectionCard>

              <SectionCard>
                <h3 className="text-xl font-semibold border-b border-gray-300 dark:border-gray-600 pb-2 mb-6 text-gray-900 dark:text-white">
                  Education
                </h3>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <strong className="text-gray-900 dark:text-white">
                      UNIÁMERICA - Engenharia de Software
                    </strong>
                    <span className="text-gray-500">04/2024 - 02/2027</span>
                  </div>

                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Formação focada em arquitetura de software, backend e
                    sistemas escaláveis.
                  </p>
                </div>
              </SectionCard>

              <SectionCard>
                <h3 className="text-xl font-semibold border-b border-gray-300 dark:border-gray-600 pb-2 mb-6 text-gray-900 dark:text-white">
                  Projects
                </h3>

                <ProjectCard
                  title="Condominium Management System"
                  description="Sistema de gestão de moradores com controle de acesso e organização de dados."
                  techs={["Java", "Spring Boot", "MySQL"]}
                  badgeColor={colors.badge}
                />

                <ProjectCard
                  title="Personal Portfolio"
                  description="Portfólio moderno com troca dinâmica de tema e dark mode."
                  techs={["React", "TypeScript", "Tailwind"]}
                  badgeColor={colors.badge}
                />
              </SectionCard>
            </div>

            {/* RIGHT SIDE */}
            <div>
              <SectionCard>
                <h3 className="text-xl font-semibold border-b border-gray-300 dark:border-gray-600 pb-2 mb-6 text-gray-900 dark:text-white">
                  Programming Languages
                </h3>
                <SkillBar name="Java" level={80} color={colors.bar} />
                <SkillBar name="TypeScript" level={60} color={colors.bar} />
                <SkillBar name="Python" level={70} color={colors.bar} />
                <SkillBar name="JavaScript" level={80} color={colors.bar} />
                <SkillBar name="Dart" level={40} color={colors.bar} />
                <SkillBar name="SQL" level={50} color={colors.bar} />
                <SkillBar name="NoSQL" level={50} color={colors.bar} />
                <SkillBar name="Git / Git-lab" level={80} color={colors.bar} />
              </SectionCard>
            <div>
              <SectionCard>
                <h3 className="text-xl font-semibold border-b border-gray-300 dark:border-gray-600 pb-2 mb-6 text-gray-900 dark:text-white">
                  FrameWorks
                </h3>
                <SkillBar name="Spring / Spring Boot / hibernate" level={80} color={colors.bar} />
                <SkillBar name="React.js / Next.js / Nest.js" level={70} color={colors.bar} />
                <SkillBar name="Flutter" level={40} color={colors.bar} />
                <SkillBar name="Pandas" level={40} color={colors.bar} />
              </SectionCard>
            </div>
            <div>
              <SectionCard>
                <h3 className="text-xl font-semibold border-b border-gray-300 dark:border-gray-600 pb-2 mb-6 text-gray-900 dark:text-white">
                  Language
                </h3>
                <SkillBar name="Portugues" level={100} color={colors.bar} />
                <SkillBar name="Inglesh" level={50} color={colors.bar} />
              </SectionCard>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
