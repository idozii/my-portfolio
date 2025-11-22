"use client";
/* eslint-disable */

export default function About() {
  return (
    <section id="about" className="scroll-mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          About
        </h2>
      </div>
      <div className="flex flex-col gap-4 lg:px-6 mb-8">
        <h2 className="lg:block hidden text-2xl font-bold lg:text-start text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-green-500 bg-clip-text animate-fade-in">
          ABOUT
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-start text-sm text-slate-700 dark:text-slate-300 leading-relaxed lg:px-6 animate-slide-up hover:text-slate-600 dark:hover:text-slate-200 transition-colors duration-300">
          I am a data science student at{" "}
          <a href="https://mq.edu.au/" className="text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text hover:from-purple-500 hover:to-blue-500 font-medium transition-all duration-300 hover:shadow-lg" target="_blank" rel="noopener noreferrer">
            Macquarie University
          </a>
          , an active member of the{" "}
          <span className="text-transparent bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text font-medium">Macquarie Associate Computing Students</span>, <span className="text-transparent bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text font-medium">Macquarie AI and Data Science Society</span> and{" "}
          <span className="text-transparent bg-gradient-to-r from-green-600 to-purple-600 bg-clip-text font-medium">Macquarie Overseas Vietnamese</span>. Currently seeking a data science internship opportunity.
        </p>
        <p className="text-start text-sm text-slate-700 dark:text-slate-300 leading-relaxed lg:px-6 animate-slide-up hover:text-slate-600 dark:hover:text-slate-200 transition-colors duration-300" style={{animationDelay: '0.2s'}}>
          My journey into data science began with a simple fascination: <span className="text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text font-medium">how can we uncover hidden stories within numbers?</span> This curiosity grew as I recognized data as an invaluable asset across industries and the key to solving complex challenges.
        </p>
        <p className="text-start text-sm text-slate-700 dark:text-slate-300 leading-relaxed lg:px-6 animate-slide-up hover:text-slate-600 dark:hover:text-slate-200 transition-colors duration-300" style={{animationDelay: '0.4s'}}>
          Driven by the goal of becoming a capable and proficient data professional, I've been engaging in side projects, online learning, and data challenges to continuously refine my skills. I am eager to apply my expertise to help businesses identify gaps, uncover insights, and solve complex problems through data.
        </p>
        <p className="text-start text-sm text-slate-700 dark:text-slate-300 leading-relaxed lg:px-6 animate-slide-up hover:text-slate-600 dark:hover:text-slate-200 transition-colors duration-300" style={{animationDelay: '0.6s'}}>
          Aside from studies, I spend my free time taking photos 📸 (when my gear cooperates!), spending time with my dachshund Toni, and watching badminton matches - the strategic gameplay always inspires my approach to problem-solving.
        </p>
      </div>
    </section>
  );
}