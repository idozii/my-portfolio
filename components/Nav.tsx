"use client";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, Linkedin, MoveRight } from "lucide-react";
import { ModeToggle } from "./ui/toggle-mode";
import useActiveSection from "@/hooks/useActiveSection";

type NavItem = {
  name: string;
  href: string;
};

export default function Nav() {
  const activeSection = useActiveSection([
    "about",
    "experience",
    "education",
    "projects",
    "activities",
    "contact",
  ]);

  const navItems: NavItem[] = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Activities", href: "#activities" },
    { name: "Contact", href: "#contact" },
  ];

  const getNavItemClasses = (href: string) => {
    const isActive = activeSection === href.substring(1);
    return {
      linkClass: isActive ? "active" : "",
      indicatorClass: `nav-indicator mr-3 h-px bg-slate-600 transition-all duration-300 ease-in-out ${
        isActive
          ? "w-12 bg-foreground h-0.5"
          : "w-6 group-hover:w-12 group-hover:bg-foreground"
      }`,
      textClass: `nav-text text-xs font-bold uppercase tracking-widest transition-colors duration-300 ease-in-out ${
        isActive
          ? "text-foreground"
          : "text-slate-500 group-hover:text-foreground"
      }`,
    };
  };

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-16 flex flex-col lg:gap-3 gradient-bg">
      <div className="flex flex-col gap-3 lg:pr-16 mt-4 lg:mt-0 animate-slide-up">
        <div className="w-full flex lg:items-center lg:justify-start">
          <Avatar className="w-20 lg:w-28 h-auto border-2 border-primary bg-secondary animate-float shadow-2xl shadow-purple-500/20">
            <AvatarImage src="./avatar.png" />
            <AvatarFallback className="w-20 h-20 lg:w-28 lg:h-28 rounded-full border-1 border-primary gradient-text text-2xl font-bold">
              T N
            </AvatarFallback>   
          </Avatar>
        </div>
        <h1 className="text-[36px] font-bold lg:text-start animate-fade-in bg-gradient-to-r from-purple-600 via-blue-600 to-green-500 bg-clip-text text-transparent animate-pulse-slow">
          Hi, I&#39;m Tony 👋
        </h1>
        <h2 className="text-lg lg:text-start animate-fade-in" style={{animationDelay: '0.2s'}}>
          Data Science Student{" "}<span className="text-transparent bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text font-semibold">@ Macquarie Uni</span>
        </h2>
        <p className="text-base lg:text-start text-muted-foreground leading-relaxed animate-fade-in" style={{animationDelay: '0.4s'}}>
          Passionate about uncovering insights from data through machine learning and deep learning. I love diving deep into complex datasets to discover patterns and build intelligent solutions that make a real impact.
        </p>
        <div className="mt-3 animate-scale-in" style={{animationDelay: '0.6s'}}>
          <a
            href="https://www.linkedin.com/in/tuenguyenduynhat/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center font-medium leading-tight group relative overflow-hidden px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10 hover:from-purple-500/20 hover:to-blue-500/20 transition-all duration-300"
          >
            <span className="border-b border-transparent pb-px transition hover:border-purple-500 motion-reduce:transition-none relative z-10 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              View Full LinkedIn Profile
            </span>
            <MoveRight className="ml-1 inline-block h-5 w-5 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none text-purple-600" />
          </a>
        </div>
      </div>
      <nav className="lg:flex hidden animate-fade-in" style={{animationDelay: '0.8s'}}>
        <ul className="flex flex-col w-max text-start gap-4 uppercase text-xs font-medium">
          {navItems.map((item: NavItem, index) => {
            const { linkClass, indicatorClass, textClass } = getNavItemClasses(
              item.href
            );
            return (
              <li key={item.name} className="group animate-slide-up" style={{animationDelay: `${1 + index * 0.1}s`}}>
                <a 
                  href={item.href} 
                  className={`py-2 flex items-center transition-all duration-300 ease-in-out hover:transform hover:translate-x-2 ${linkClass}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const target = document.querySelector(item.href);
                    if (target) {
                      target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                      });
                    }
                  }}
                >
                  <span className={indicatorClass}></span>
                  <span className={textClass}>{item.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      <ul className="flex flex-row gap-4 mt-4 lg:mt-0 animate-scale-in" style={{animationDelay: '1.5s'}}>
        <Button variant="outline" size="icon" className="hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-blue-500/10 hover:border-purple-400 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-110">
          <a
            href="https://github.com/idozii" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-[1.2rem] w-[1.2rem] transition-colors hover:text-purple-600" />
          </a>
        </Button>
        <Button variant="outline" size="icon" className="hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-green-500/10 hover:border-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-110">
          <a
            href="https://www.linkedin.com/in/tuenguyenduynhat/" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-[1.2rem] w-[1.2rem] transition-colors hover:text-blue-600" />
          </a>
        </Button>
        <div className="hover:scale-110 transition-transform duration-300">
          <ModeToggle />
        </div>
      </ul>
    </header>
  );
}
