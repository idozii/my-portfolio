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
      "Software Development",
      "Data Structures",
      "Object-Oriented Programming",
      "Database Systems",
      "Software Engineering",
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
        <h2 className="lg:block hidden text-xl font-bold lg:text-start">
          EDUCATION
        </h2>
      </div>
      <>
        {educationEntries.map((edu, index) => (
          <Card
            key={index}
            className="lg:p-6 mb-4 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200"
          >
            <CardHeader className="h-full w-full p-0">
              <CardTitle className="text-base text-slate-400 whitespace-nowrap">
                {edu.timeline}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col p-0">
              <p className="text-foreground font-bold">
                {edu.currentPosition} • {edu.place}
              </p>
              {edu.previousPositions.map((position, index) => (
                <p key={index} className="text-slate-400 text-sm font-bold">
                  {position}
                </p>
              ))}
              <CardDescription className="py-3 text-muted-foreground">
                {edu.description}
              </CardDescription>
              <CardFooter className="p-0 flex flex-wrap gap-2">
                {edu.skills.map((skill, index) => (
                  <Badge key={index}>{skill}</Badge>
                ))}
              </CardFooter>
            </CardContent>
          </Card>
        ))}
      </>
      <div className="lg:px-12 mt-12 flex justify-center">
        <a
          href="/certificates"
          className="inline-flex items-center font-medium leading-tight text-foreground group"
        >
          <span className="border-b border-transparent pb-px transition hover:border-primary motion-reduce:transition-none">
            View My Certificates
          </span>
          <MoveRight className="ml-1 inline-block h-5 w-5 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" />
        </a>
      </div>
    </section>
  );
}