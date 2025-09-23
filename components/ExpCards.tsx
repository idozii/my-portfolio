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

const jobPositions = [
  {
    timeline: "Jun 2024 - Jul 2025",
    currentPosition: "Teaching Assistant",
    place: "Private Math Tutoring Centre",
    previousPositions: [""],
    description:
      "Supported instructors in delivering mathematics lessons to high school students, focusing on problem-solving skills and conceptual understanding. Assisted in preparing comprehensive teaching materials, exercises, and solutions to enhance student learning outcomes.",
    skills: [
      "Mathematics",
      "Teaching",
      "Problem-Solving",
      "Communication",
      "Teamwork",
      "Student Mentoring",
    ],
  },
  {
    timeline: "Feb 2021 - Dec 2024",
    currentPosition: "Founder",
    place: "UniqueS Facebook Page",
    previousPositions: [""],
    description:
      "Founded and led a creative media team of 30+ members, managing workflows, schedules, and project tracking via Notion and Google Sheets. Designed data-driven posting strategies based on audience engagement trends and performance analytics. Utilized Excel to monitor productivity metrics and optimize resource distribution.",
    skills: [
      "Leadership",
      "Project Management",
      "Team Management",
      "Excel",
      "Notion",
      "Google Sheets",
      "Performance Analysis",
    ],
  },
  {
    timeline: "Feb 2022 - Jun 2023",
    currentPosition: "Videographer",
    place: "LUMIERE LHP Photography Club",
    previousPositions: [""],
    description:
      "Filmed and edited event videos, promotional clips, and school activities to highlight student achievements and campus life. Managed complete video post-production pipeline including color correction, sound mixing, and visual effects for engaging storytelling under tight deadlines.",
    skills: [
      "Video Editing",
      "Sound Mixing",
      "Visual Effects",
    ],
  },
  {
    timeline: "May 2021 - Jun 2022",
    currentPosition: "Head of Photography",
    place: "Chicken Minds",
    previousPositions: [""],
    description:
      "Led photography operations and oversaw video planning, storyboarding, and shot coordination to ensure smooth production workflows. Managed creative direction and technical execution for various multimedia projects.",
    skills: [
      "Photography",
      "Video Planning",
      "Storyboarding",
      "Creative Direction",
      "Production Management",
      "Team Coordination",
      "Technical Execution",
    ],
  },
];

export default function ExpCard() {
  return (
    <section id="experience" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Experience
        </h2>
      </div>
      <div className="flex flex-col gap-4 lg:px-6 mb-8">
        <h2 className="lg:block hidden text-2xl font-bold lg:text-start text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-green-500 bg-clip-text animate-fade-in">
          EXPERIENCE
        </h2>
      </div>
      <>
        {jobPositions.map((job, index) => (
          <Card
            key={index}
            className="lg:p-6 mb-4 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border-slate-200 dark:hover:border-slate-700 dark:lg:hover:bg-slate-800/30 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-50/80 transition-all duration-500 ease-in-out group card-glow hover:shadow-2xl hover:shadow-purple-500/10 hover:scale-[1.02] animate-slide-up relative overflow-hidden"
            style={{animationDelay: `${index * 0.2}s`}}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardHeader className="h-full w-full p-0 relative z-10">
              <CardTitle className="text-sm text-slate-500 dark:text-slate-400 whitespace-nowrap font-medium group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                {job.timeline}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col p-0 relative z-10">
              <div className="mb-2">
                <h3 className="text-lg font-semibold text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text group-hover:from-purple-500 group-hover:to-blue-500 transition-all duration-300">
                  {job.currentPosition}
                </h3>
                <p className="text-base text-slate-600 dark:text-slate-300 font-medium group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-green-600 group-hover:bg-clip-text transition-all duration-300">
                  {job.place}
                </p>
              </div>
              {job.previousPositions.map((position, posIndex) => (
                <p key={posIndex} className="text-sm text-slate-500 dark:text-slate-400 font-medium mb-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  {position}
                </p>
              ))}
              <CardDescription className="py-2 text-sm text-slate-700 dark:text-slate-300 leading-relaxed group-hover:text-slate-600 dark:group-hover:text-slate-200 transition-colors duration-300">
                {job.description}
              </CardDescription>
              <CardFooter className="p-0 flex flex-wrap gap-1.5 mt-3">
                {job.skills.map((skill, skillIndex) => (
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
    </section>
  );
}
