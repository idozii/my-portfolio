"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoveRight } from "lucide-react";

const educationEntries = [
  {
    timeline: "Jul 2025 - Present",
    currentPosition: "Bachelor of IT (Major in Data Science)",
    place: "Macquarie University",
    previousPositions: [""],
    description:
      "Pursuing advanced studies in Data Science with focus on machine learning, deep learning, and statistical analysis. Active member of Macquarie Associate Computing Students and Macquarie Overseas Vietnamese communities.",
    skills: [
      "Data Science",
      "Machine Learning",
      "Deep Learning",
      "Statistics",
      "Python",
      "Data Analytics",
      "Statistical Inference",
      "Data Visualization",
      "Big Data",
    ],
  },
  {
    timeline: "Jul 2023 - May 2025",
    currentPosition: "Bachelor of Computer Science",
    place: "Ho Chi Minh City University of Technology",
    previousPositions: [""],
    description:
      "Completed foundational studies in computer science with emphasis on programming, algorithms, and software development. Built strong technical foundation in various programming languages and software engineering principles.",
    skills: [
      "Computer Science",
      "Programming",
      "Algorithms",
      "Data Structures",
      "Object-Oriented Programming",
      "Database Systems",
    ],
  },
  {
    timeline: "Aug 2020 - Jul 2023",
    currentPosition: "High School Diploma",
    place: "Le Hong Phong High School for the Gifted",
    previousPositions: [""],
    description:
      "Completed rigorous academic program at a prestigious gifted high school, developing strong analytical and problem-solving skills. Specialized curriculum focused on advanced mathematics and sciences.",
    skills: [
      "Mathematics",
      "Physics",
      "Critical Thinking",
      "Problem Solving",
      "Academic Excellence",
      "Research Skills",
    ],
  },
];

export default function Education() {
  return (
    <section id="education" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Education
        </h2>
      </div>
      <div className="flex flex-col gap-4 lg:px-6 mb-8">
        <h2 className="lg:block hidden text-2xl font-bold lg:text-start text-foreground">
          EDUCATION
        </h2>
      </div>
      <>
        {educationEntries.map((edu, index) => (
          <Card
            key={index}
            className="lg:p-6 mb-4 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-0 bg-transparent hover:bg-slate-50/30 dark:hover:bg-slate-800/20 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg transition-all duration-500 ease-in-out group card-glow hover:shadow-2xl hover:shadow-purple-500/10 hover:scale-[1.02] animate-slide-up relative overflow-hidden"
            style={{animationDelay: `${index * 0.2}s`}}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardHeader className="h-full w-full p-0 relative z-10">
              <CardTitle className="text-sm text-slate-500 dark:text-slate-400 whitespace-nowrap font-medium group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                {edu.timeline}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col p-0 relative z-10">
              <div className="mb-2">
                <h3 className="text-lg font-semibold text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text group-hover:from-purple-500 group-hover:to-blue-500 transition-all duration-300">
                  {edu.currentPosition}
                </h3>
                <p className="text-base text-slate-600 dark:text-slate-300 font-medium group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-green-600 group-hover:bg-clip-text transition-all duration-300">
                  {edu.place}
                </p>
              </div>
              {edu.previousPositions.map((position, posIndex) => (
                <p key={posIndex} className="text-sm text-slate-500 dark:text-slate-400 font-medium mb-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  {position}
                </p>
              ))}
              <CardDescription className="py-2 text-sm text-slate-700 dark:text-slate-300 leading-relaxed group-hover:text-slate-600 dark:group-hover:text-slate-200 transition-colors duration-300">
                {edu.description}
              </CardDescription>
              <CardFooter className="p-0 flex flex-wrap gap-1.5 mt-3">
                {edu.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    className="text-xs bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-800 dark:text-purple-200 hover:from-purple-200 hover:to-blue-200 dark:hover:from-purple-900/50 dark:hover:to-blue-900/50 border-purple-200 dark:border-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                    style={{animationDelay: `${skillIndex * 0.05}s`}}
                  >
                    {skill}
                  </Badge>
                ))}
              </CardFooter>
            </CardContent>
          </Card>
        ))}
      </>
      <div className="lg:px-12 mt-12 flex justify-center">
        <a
          href="/certificates"
          className="inline-flex items-center font-medium leading-tight text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 group"
        >
          <span className="border-b border-transparent pb-px transition hover:border-blue-600 dark:hover:border-blue-400 motion-reduce:transition-none">
            View My Certificates
          </span>
          <MoveRight className="ml-1 inline-block h-5 w-5 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" />
        </a>
      </div>
    </section>
  );
}