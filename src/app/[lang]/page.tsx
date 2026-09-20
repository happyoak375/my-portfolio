import Image from "next/image";
import { getDictionary } from "../../dictionaries/getDictionary";

export default async function Home({ params }: { params: Promise<{ lang: 'en' | 'es' }> }) {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.lang);

  return (
    <main className="min-h-screen bg-stone-50 bg-grain">
      {/* --- HERO SECTION --- */}
      <section className="flex flex-col items-center justify-center px-6 py-32 text-center max-w-4xl mx-auto space-y-8">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-brand-secondary">
          {dict.hero.headline}
        </h1>
        <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
          {dict.hero.description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <a href="#projects" className="px-8 py-3 rounded-[1.5rem_0.5rem_1.5rem_0.5rem] font-medium bg-brand-primary text-white hover:bg-brand-accent transition-colors duration-300 w-full sm:w-auto shadow-md">
            {dict.hero.viewWork}
          </a>
          <a href="#contact" className="px-8 py-3 rounded-[0.5rem_1.5rem_0.5rem_1.5rem] font-medium border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white transition-colors duration-300 w-full sm:w-auto">
            {dict.hero.startProject}
          </a>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-white rounded-[3rem_1rem_3rem_1rem] shadow-[0_8px_30px_rgb(41,37,36,0.04)] border border-stone-100 p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 hover:-translate-y-1 transition-transform duration-500">

          {/* Headshot Placeholder */}
          <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 relative rounded-[2rem_0.5rem_2rem_0.5rem] overflow-hidden border-4 border-stone-50 shadow-lg bg-stone-200">
            {/* Replace '/headshot.jpg' with your actual image file once you have it */}
            <Image
              src="/headshot.jpg"
              alt={dict.about.imageAlt}
              fill
              className="object-cover"
            />
            {/* Placeholder icon if image is missing */}
            <div className="absolute inset-0 flex items-center justify-center text-stone-400">
              <span className="text-sm font-medium"></span>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold text-brand-secondary mb-4 relative inline-block">
              {dict.about.title}
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-brand-primary/60 rounded-full"></span>
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed mt-6">
              {dict.about.description}
            </p>
          </div>

        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-brand-secondary mb-12 text-center relative inline-block mx-auto left-1/2 -translate-x-1/2">
          {dict.projects.title}
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-brand-accent/40 rounded-full"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {dict.projectList.map((project, index) => (
            <div key={index} className="group bg-white rounded-[2rem_0.5rem_2rem_0.5rem] shadow-[0_8px_30px_rgb(217,119,6,0.06)] border border-stone-100 overflow-hidden hover:-translate-y-2 hover:shadow-[0_15px_40px_rgb(217,119,6,0.12)] transition-all duration-500 flex flex-col">
              <div className="relative h-56 w-full border-b border-stone-100 overflow-hidden">
                <Image
                  src={project.imagePath}
                  alt={`Screenshot of ${project.title}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-brand-secondary mb-3">{project.title}</h3>
                <p className="text-stone-600 mb-6 flex-grow leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-sm rounded-full bg-stone-100 text-stone-700 font-medium border border-stone-200">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="text-brand-primary font-bold hover:text-brand-accent transition-colors inline-flex items-center gap-2 group-hover:underline decoration-2 underline-offset-4">
                  {dict.projects.viewProject} <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-32 text-center">
        <div className="bg-brand-secondary rounded-[3rem_1rem_3rem_1rem] p-8 md:p-16 shadow-2xl relative overflow-hidden border-t-4 border-l-4 border-brand-accent/20">
          {/* Subtle background element for texture within the dark box */}
          <div className="absolute inset-0 opacity-10 bg-grain pointer-events-none"></div>

          <h2 className="text-3xl md:text-4xl font-bold text-stone-50 mb-6 relative z-10">
            {dict.contact.title}
          </h2>
          <p className="text-lg text-stone-300 mb-10 max-w-2xl mx-auto relative z-10 leading-relaxed">
            {dict.contact.description}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <a href="mailto:c.quintero.dev@gmail.com" className="px-8 py-4 rounded-[1.5rem_0.5rem_1.5rem_0.5rem] font-bold bg-brand-primary text-white hover:bg-brand-accent transition-colors duration-300 shadow-lg">
              {dict.contact.emailBtn}
            </a>
            <a href="https://github.com/happyoak375" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-[0.5rem_1.5rem_0.5rem_1.5rem] font-bold border-2 border-stone-500 text-stone-300 hover:border-brand-accent hover:text-brand-accent transition-colors duration-300">
              {dict.contact.githubBtn}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}