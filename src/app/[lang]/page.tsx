import Image from "next/image";
import { getDictionary } from "../../dictionaries/getDictionary";

// We type params as a Promise
export default async function Home({ params }: { params: Promise<{ lang: 'en' | 'es' }> }) {

  // We await the params before passing the language to your dictionary
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.lang);

  return (
    <main className="min-h-screen bg-slate-50">

      {/* --- HERO SECTION --- */}
      <section className="flex flex-col items-center justify-center px-6 py-32 text-center max-w-4xl mx-auto space-y-8">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-brand-secondary">
          {dict.hero.headline}
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          {dict.hero.description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <a href="#projects" className="px-8 py-3 rounded-lg font-medium bg-brand-primary text-white hover:bg-brand-accent transition-colors duration-300 w-full sm:w-auto shadow-sm">
            {dict.hero.viewWork}
          </a>
          <a href="#contact" className="px-8 py-3 rounded-lg font-medium border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white transition-colors duration-300 w-full sm:w-auto">
            {dict.hero.startProject}
          </a>
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-brand-secondary mb-12 text-center">
          {dict.projects.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {dict.projectList.map((project, index) => (
            <div key={index} className="group bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col">

              <div className="relative h-48 w-full border-b border-slate-100 overflow-hidden">
                <Image
                  src={project.imagePath}
                  alt={`Screenshot of ${project.title}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-brand-secondary mb-2">{project.title}</h3>
                <p className="text-slate-600 mb-6 flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-sm rounded-full bg-slate-100 text-slate-600 font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <a href={project.link} className="text-brand-primary font-medium hover:text-brand-accent transition-colors inline-flex items-center gap-1">
                  {dict.projects.viewProject} <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-32 text-center">
        <div className="bg-brand-secondary rounded-2xl p-8 md:p-16 shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {dict.contact.title}
          </h2>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
            {dict.contact.description}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="mailto:your.email@example.com" className="px-8 py-4 rounded-lg font-bold bg-brand-primary text-white hover:bg-brand-accent transition-colors duration-300 shadow-sm">
              {dict.contact.emailBtn}
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-lg font-bold border-2 border-slate-600 text-slate-300 hover:border-white hover:text-white transition-colors duration-300">
              {dict.contact.githubBtn}
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}