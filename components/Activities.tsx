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
    timeline: "Sep 2025",
    title: "Best Static Visualization (Undergraduate) - DataViz @MQ 2025",
    organization: "Macquarie University",
    description:
      "Developed award-winning Tableau dashboard analyzing global energy data to evaluate progress toward SDG7. Focused on energy affordability, access rates, carbon intensity, and clean energy share across regions.",
    skills: [
      "Data Analysis",
      "Tableau",
      "Data Visualization",
      "Statistical Analysis",
      "Dashboard Design",
      "Storytelling with Data"
    ],
    link: "https://bit.ly/3K2sHMW",
  },
  {
    timeline: "Aug 2025",
    title: "InterUni Datathon 2025",
    organization: "University Competition",
    description:
      "Competed against multiple university teams developing comprehensive ski resort analytics project. Utilized time series forecasting, predictive modeling, and strategic recommendations for season planning.",
    skills: [
      "Data Science",
      "Time Series Forecasting",
      "Predictive Modeling",
      "Team Collaboration",
      "Statistical Modeling"
    ],
    link: "https://github.com/idozii/InterUni-Datathon-2025",
  },
  {
    timeline: "Jul 2025",
    title: "TheNextAnalyst - Power BI Challenge",
    organization: "StartTrain",
    description:
      "Created interactive Power BI dashboard revealing key business insights including 42.2% ROS profitability and regional performance. Provided strategic recommendations for product optimization and expansion.",
    skills: [
      "Power BI",
      "Business Intelligence",
      "Data Visualization",
      "Strategic Analysis",
      "Business Analytics"
    ],
    link: "https://lnkd.in/gn9eeFzR",
  }
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
            className="lg:p-6 mb-4 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-0 bg-transparent hover:bg-slate-50/30 dark:hover:bg-slate-800/20 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg transition-all duration-500 ease-in-out group card-glow hover:shadow-2xl hover:shadow-purple-500/10 hover:scale-[1.02] animate-slide-up relative overflow-hidden"
            style={{animationDelay: `${index * 0.2}s`}}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardHeader className="h-full w-full p-0 relative z-10">
              <CardTitle className="text-sm text-slate-500 dark:text-slate-400 whitespace-nowrap font-medium group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                {activity.timeline}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col p-0 relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-lg font-semibold text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text group-hover:from-purple-500 group-hover:to-blue-500 transition-all duration-300">
                  {activity.title}
                </h3>
                <span className="text-base text-slate-600 dark:text-slate-300 font-medium group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-green-600 group-hover:bg-clip-text transition-all duration-300">
                  • {activity.organization}
                </span>
                {activity.link && (
                  <a
                    href={activity.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 ml-1 hover:scale-125 transform hover:rotate-12"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                )}
              </div>
              <CardDescription className="py-2 text-sm text-slate-700 dark:text-slate-300 leading-relaxed group-hover:text-slate-600 dark:group-hover:text-slate-200 transition-colors duration-300">
                {activity.description}
              </CardDescription>
              <CardFooter className="p-0 flex flex-wrap gap-1.5 mt-3">
                {activity.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    className="text-xs bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-800 dark:text-purple-200 hover:from-purple-200 hover:to-blue-200 dark:hover:from-purple-900/50 dark:hover:to-blue-900/50 border-purple-200 dark:border-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 animate-fade-in"
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