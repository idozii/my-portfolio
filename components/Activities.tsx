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
import { ExternalLink } from "lucide-react";

const activities = [
  {
    timeline: "2025",
    title: "InterUni Datathon Participant",
    organization: "University Competition",
    description:
      "Participated in the prestigious InterUni Datathon 2025, competing against teams from multiple universities. Developed a comprehensive ski resort analytics project for season planning, utilizing advanced data science techniques including time series forecasting, predictive modeling, and strategic recommendation systems.",
    skills: [
      "Data Science",
      "Competitive Analysis",
      "Time Series Forecasting",
      "Team Collaboration",
      "Presentation Skills",
      "Statistical Modeling"
    ],
    link: "https://github.com/idozii/InterUni-Datathon-2025",
  },
  {
    timeline: "2025",
    title: "TheNextAnalyst - Power BI Challenge",
    organization: "StartTrain",
    description:
      "Participated in TheNextAnalyst Power BI Challenge by StartTrain, analyzing comprehensive business data to craft actionable strategies. Developed an interactive dashboard revealing key insights: 42.2% ROS profitability, Europe leading revenue generation, USA as top-performing country, and Asia showing promising growth potential. Provided strategic recommendations for Video Games momentum, Web channel optimization, and regional expansion strategies.",
    skills: [
      "Power BI",
      "Business Intelligence",
      "Data Visualization",
      "Strategic Analysis",
      "Dashboard Development",
      "Business Analytics",
      "Regional Analysis",
      "Sales Performance Analysis"
    ],
    link: "https://lnkd.in/gn9eeFzR",
  },
];

export default function Activities() {
  return (
    <section id="activities" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Activities
        </h2>
      </div>
            <div className="flex flex-col gap-4 lg:px-6 mb-8">
        <h2 className="lg:block hidden text-2xl font-bold lg:text-start text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-green-500 bg-clip-text animate-fade-in">
          ACTIVITIES & INTERESTS
        </h2>
      </div>
      <>
        {activities.map((activity, index) => (
          <Card
            key={index}
            className="lg:p-6 mb-4 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border-slate-200 dark:hover:border-slate-700 dark:lg:hover:bg-slate-800/30 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-50/80 transition-all duration-500 ease-in-out group card-glow hover:shadow-2xl hover:shadow-purple-500/10 hover:scale-[1.02] animate-slide-up relative overflow-hidden"
            style={{animationDelay: `${index * 0.2}s`}}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardHeader className="h-full w-full p-0 relative z-10">
              <CardTitle className="text-sm text-slate-500 dark:text-slate-400 whitespace-nowrap font-medium group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                {activity.timeline}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col p-0">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  {activity.title}
                </h3>
                <span className="text-base text-slate-600 dark:text-slate-300 font-medium">
                  • {activity.organization}
                </span>
                {activity.link && (
                  <a
                    href={activity.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 ml-1"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
              <CardDescription className="py-2 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {activity.description}
              </CardDescription>
              <CardFooter className="p-0 flex flex-wrap gap-1.5 mt-3">
                {activity.skills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-900/50 border-blue-200 dark:border-blue-700 transition-colors duration-200"
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