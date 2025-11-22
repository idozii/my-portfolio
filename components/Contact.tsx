"use client";

import { Mail } from "lucide-react";
import { Button } from "./ui/button";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Get In Touch
        </h2>
      </div>
      <div className="flex flex-col gap-4 lg:px-6 mb-8">
        <h2 className="lg:block hidden text-4xl font-bold lg:text-start text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-green-500 bg-clip-text animate-fade-in">
          Get In Touch
        </h2>
        <p className="text-base lg:text-start text-slate-700 dark:text-slate-300 leading-relaxed animate-slide-up hover:text-slate-600 dark:hover:text-slate-200 transition-colors duration-300" style={{animationDelay: '0.2s'}}>
          If you&#39;re considering my contribution, have a question, or just
          want to say hi, you can count on hearing back from me!
        </p>
      </div>
      <div className="flex flex-row justify-center items-center gap-4 lg:px-6 mb-4">
        <a
          href="mailto:nguyenduynhattue@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:cursor-pointer w-full animate-slide-up"
          style={{animationDelay: '0.4s'}}
        >
          <Button variant={"default"} className="w-full h-full bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 hover:from-purple-500 hover:via-blue-500 hover:to-green-500 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105">
            <div className="flex flex-row items-center">
              <Mail className="text-white h-6 w-6 animate-pulse-slow" />
              <p className="ml-3 text-xl text-white font-medium">
                Say hello
              </p>
            </div>
          </Button>
        </a>
      </div>
    </section>
  );
}
