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
          className={`h-2 ${color} rounded-full transition-all duration-700`}
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

  // 🔥 DARK MODE CONTROL VIA HTML
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
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              Michael de Souza
            </h1>

            <h2 className={`text-lg font-semibold ${colors.primary} mt-1`}>
              Software Engineer
            </h2>

            <div className="flex gap-6 mt-6 text-sm text-gray-700 dark:text-gray-300">
              <a href="#" className="flex items-center gap-2 hover:opacity-70">
                <FaEnvelope /> Email
              </a>
              <a href="#" className="flex items-center gap-2 hover:opacity-70">
                <FaGithub /> GitHub
              </a>
              <a href="#" className="flex items-center gap-2 hover:opacity-70">
                <FaLinkedin /> LinkedIn
              </a>
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
                    <span className="text-gray-500">2024 — Present</span>
                  </div>

                  <p className="text-sm text-gray-700 dark:text-gray-300 font-medium mb-2">
                    Software Development Intern
                  </p>

                  <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>Internal systems development</li>
                    <li>Process automation</li>
                    <li>API integrations</li>
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
                      Engenharia de Software
                    </strong>
                    <span className="text-gray-500">2024 — 2028</span>
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
                  Skills
                </h3>

                <SkillBar
                  name="Java / Spring Boot"
                  level={85}
                  color={colors.bar}
                />
                <SkillBar name="SQL" level={80} color={colors.bar} />
                <SkillBar name="TypeScript" level={70} color={colors.bar} />
                <SkillBar name="Git / CI-CD" level={75} color={colors.bar} />
              </SectionCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
