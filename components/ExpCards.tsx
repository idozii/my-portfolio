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
        <h2 className="lg:block hidden text-xl font-bold lg:text-start">
          EXPERIENCE
        </h2>
      </div>
      <>
        {jobPositions.map((job, index) => (
          <Card
            key={index}
            className="lg:p-6 mb-4 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200"
          >
            <CardHeader className="h-full w-full p-0">
              <CardTitle className="text-base text-slate-400 whitespace-nowrap">
                {job.timeline}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col p-0">
              <p className="text-foreground font-bold">
                {job.currentPosition} • {job.place}
              </p>
              {job.previousPositions.map((position, index) => (
                <p key={index} className="text-slate-400 text-sm font-bold">
                  {position}
                </p>
              ))}
              <CardDescription className="py-3 text-muted-foreground">
                {job.description}
              </CardDescription>
              <CardFooter className="p-0 flex flex-wrap gap-2">
                {job.skills.map((skill, index) => (
                  <Badge key={index}>{skill}</Badge>
                ))}
              </CardFooter>
            </CardContent>
          </Card>
        ))}
      </>
    </section>
  );
}
