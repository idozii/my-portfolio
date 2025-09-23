"use client";
/* eslint-disable */

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 ">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          About
        </h2>
      </div>
      <div className="flex flex-col gap-4 lg:px-6 mb-8">
        <h2 className="lg:block hidden text-xl font-bold lg:text-start">
          ABOUT
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-start text-muted-foreground lg:px-6">
          I am a data science student at{" "}
          <a href="https://mq.edu.au/" className="text-primary dark:text-white font-medium" target="_blank" rel="noopener noreferrer">
            Macquarie University
          </a>
          , an active member of the{" "}
          <span className="text-primary dark:text-white font-medium">Macquarie Associate Computing Students</span> and{" "}
          <span className="text-primary dark:text-white font-medium">Macquarie Overseas Vietnamese</span>. Currently seeking a data science internship opportunity.
        </p>
        <p className="text-start  text-muted-foreground lg:px-6">
          My journey into data science began with a simple fascination: <span className="text-white">how can we uncover hidden stories within numbers?</span> This curiosity grew as I recognized data as an invaluable asset across industries and the key to solving complex challenges.
        </p>
        <p className="text-start text-muted-foreground lg:px-6">
          Driven by the goal of becoming a capable and proficient data professional, I've been engaging in side projects, online learning, and data challenges to continuously refine my skills. I am eager to apply my expertise to help businesses identify gaps, uncover insights, and solve complex problems through data.
        </p>
        <p className="text-start text-muted-foreground lg:px-6">
          Aside from studies, I spend my free time taking photos 📸 (when my gear cooperates!), spending time with my dachshund Toni, and watching badminton matches—the strategic gameplay always inspires my approach to problem-solving.
        </p>
      </div>
    </section>
  );
}