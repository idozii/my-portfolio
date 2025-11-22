"use client";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoveUpRight } from "lucide-react";

const jobProjects = [
  {
    imagePath: "/crop.jpeg",
    title: "Crop & Soil Recommendation System",
    description:
      "An intelligent agricultural web application that uses machine learning to recommend optimal crops and fertilizers based on soil conditions. Features multiple ML algorithms including Random Forest, SVM, Neural Networks, and an ensemble model for accurate predictions. Built with Flask, scikit-learn, and interactive visualizations.",
    skills: [
      "Python",
      "Machine Learning",
      "Flask",
      "Scikit-learn",
      "Data Science",
      "HTML/CSS",
      "JavaScript",
      "Pandas",
      "NumPy"
    ],
    link: "https://crop-and-soil-1.onrender.com/",
  },
  {
    imagePath: "/interuni.png",
    title: "InterUni Datathon 2025 - Ski Resort Analysis",
    description:
      "Comprehensive data analysis project for the InterUni Datathon 2025, analyzing ski resort data to identify optimal timing and locations for the 2025-2026 ski season. Features predictive modeling, time series forecasting, and strategic recommendations based on historical visitation patterns, weather conditions, and resort characteristics.",
    skills: [
      "Python",
      "Data Science",
      "Pandas",
      "NumPy", 
      "Matplotlib",
      "Scikit-learn",
      "Time Series Analysis",
      "Statistical Analysis",
      "Data Visualization"
    ],
    link: "https://github.com/idozii/InterUni-Datathon-2025",
  },
  {
    imagePath: "/finwise.png",
    title: "FinWise - Intelligent Investment Assistant",
    description:
      "AI-powered investment platform that predicts stock and cryptocurrency prices with intelligent recommendations. Features multiple ML models including Prophet, ARIMA, XGBoost, and Random Forest for time series forecasting. Built with FastAPI backend, React frontend, and comprehensive dashboard visualizations for financial analysis.",
    skills: [
      "Python",
      "Machine Learning",
      "FastAPI",
      "React",
      "Prophet",
      "XGBoost",
      "Time Series Forecasting",
      "Financial Analysis",
      "PostgreSQL"
    ],
    link: "https://github.com/idozii/FinWise-Intelligent-Investment-Assistant",
  },
  {
    imagePath: "/cybersentinel.jpg",
    title: "CyberSentinel - AI-powered Security Dashboard",
    description:
      "Advanced cybersecurity system that uses AI to detect phishing attempts, brute force attacks, and DDoS incidents in real-time. Implements Isolation Forest and Autoencoder models for anomaly detection. Features comprehensive dashboard visualization and uses multiple security datasets for training and validation.",
    skills: [
      "Python",
      "Cybersecurity",
      "FastAPI",
      "React",
      "Machine Learning",
      "Isolation Forest",
      "Autoencoder",
      "PostgreSQL",
      "Elasticsearch"
    ],
    link: "https://github.com/idozii/CyberSentinel-AI-powered-Security-Dashboard",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Projects
        </h2>
      </div>
      <div className="flex flex-col gap-4 lg:px-6 mb-8">
        <h2 className="lg:block hidden text-2xl font-bold lg:text-start text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-green-500 bg-clip-text animate-fade-in">
          PROJECTS
        </h2>
      </div>
      <>
        {jobProjects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:cursor-pointer block animate-slide-up"
            style={{animationDelay: `${index * 0.2}s`}}
          >
            <Card className="group lg:p-6 mb-4 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-0 bg-transparent hover:bg-slate-50/30 dark:hover:bg-slate-800/20 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg transition-all duration-500 ease-in-out card-glow hover:shadow-2xl hover:shadow-purple-500/10 hover:scale-[1.02] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="h-full w-full lg:w-1/3 mb-4 p-0 relative z-10">
                <Image
                  src={project.imagePath}
                  alt={`Screenshot of ${project.title}`}
                  width={1920}
                  height={1080}
                  priority
                  className="mt-2 rounded-[0.5rem] group-hover:shadow-lg group-hover:shadow-purple-500/20 transition-all duration-300 group-hover:scale-105"
                />
              </CardHeader>
              <CardContent className="flex flex-col p-0 w-full lg:w-2/3 relative z-10">
                <h3 className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent group-hover:from-purple-500 group-hover:to-blue-500 transition-all duration-300">
                  {project.title}{" "}
                  <MoveUpRight className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none text-purple-600 group-hover:text-purple-500" />
                </h3>
                <CardDescription className="py-2 text-sm text-slate-700 dark:text-slate-300 leading-relaxed group-hover:text-slate-600 dark:group-hover:text-slate-200 transition-colors duration-300">
                  {project.description}
                </CardDescription>
                <CardFooter className="p-0 flex flex-wrap gap-1.5 mt-3">
                  {project.skills.map((skill, skillIndex) => (
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
          </a>
        ))}
      </>
    </section>
  );
}
