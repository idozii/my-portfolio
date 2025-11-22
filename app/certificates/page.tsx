import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

export default function CertificatesPage() {
  const certificates = [
    {
      year: "2025",
      certificate: "SQL Problem Solving",
      at: "UCDavis",
      skills: ["SQL", "Problem Solving", "Database"],
      link: "https://www.coursera.org/account/accomplishments/verify/4ESKONEF5EBT"
    },
    {
      year: "2025",
      certificate: "SQL for Data Science",
      at: "UCDavis",
      skills: ["SQL", "Data Science", "Database Management"],
      link: "https://www.coursera.org/account/accomplishments/verify/GRWFY2MZUV1N"
    },
    {
      year: "2025",
      certificate: "Data Analysis and Visualization with PowerBI",
      at: "Microsoft",
      skills: ["PowerBI", "Data Analysis", "Data Visualization"],
      link: "https://www.coursera.org/account/accomplishments/records/QSYJFVP3BY6N"
    },
    {
      year: "2025",
      certificate: "Data Visualization with Tableau",
      at: "UCDavis",
      skills: ["Tableau", "Data Visualization", "Dashboard Design"],
      link: "https://www.coursera.org/account/accomplishments/specialization/I8C2TDT1IJHZ"
    },
    {
      year: "2025",
      certificate: "Google Cloud Fundamentals: Core Infrastructure",
      at: "Google",
      skills: ["Google Cloud", "Cloud Computing", "Infrastructure"],
      link: "https://www.coursera.org/account/accomplishments/verify/PFGOTC53HBKO"
    },
    {
      year: "2025",
      certificate: "Introduction to Git and GitHub",
      at: "Google",
      skills: ["Git", "GitHub", "Version Control"],
      link: "https://www.coursera.org/account/accomplishments/verify/8RJS5GM8F6ZD"
    },
    {
      year: "2025",
      certificate: "Statistics and Data Analysis with Excel: Essentials",
      at: "Macquarie University", 
      skills: ["Statistics", "Excel", "Data Analysis"],
      link: "https://www.coursera.org/account/accomplishments/verify/AMU1S0A3SW86"
    },
    {
      year: "2025",
      certificate: "Machine Learning",
      at: "DeepLearning.AI",
      skills: ["Machine Learning", "Deep Learning", "AI"],
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/6QRFBWYZQ93W"
    }
  ];

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-green-500/5 pointer-events-none"></div>
      <div className="lg:flex lg:justify-center">
        <main className="flex flex-col pt-6 lg:pt-24 lg:w-full lg:py-24 relative z-10">
          <div className="flex flex-col gap-4 mb-8">
            <h1 className="text-4xl font-bold lg:text-start text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-green-500 bg-clip-text animate-fade-in">
              My Certificates
            </h1>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-purple-200 dark:border-purple-700/50">
                  <th className="py-4 pr-6 text-left text-sm text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text font-semibold">
                    Year
                  </th>
                  <th className="py-4 pr-6 text-left text-sm text-transparent bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text font-semibold">
                    Certificate
                  </th>
                  <th className="py-4 pr-6 text-left text-sm text-transparent bg-gradient-to-r from-green-600 to-purple-600 bg-clip-text font-semibold">
                    At
                  </th>
                  <th className="py-4 pr-6 text-left text-sm text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text font-semibold">
                    Skills
                  </th>
                  <th className="py-4 text-right text-sm text-transparent bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text font-semibold">
                    Link
                  </th>
                </tr>
              </thead>
              <tbody>
                {certificates.map((cert, index) => (
                  <tr 
                    key={index} 
                    className="border-b border-slate-200/50 dark:border-slate-700/50 hover:bg-gradient-to-r hover:from-purple-50/30 hover:via-blue-50/30 hover:to-green-50/30 dark:hover:from-purple-900/10 dark:hover:via-blue-900/10 dark:hover:to-green-900/10 transition-all duration-500 group animate-slide-up hover:scale-[1.01] hover:shadow-lg hover:shadow-purple-500/10"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <td className="py-5 pr-6 text-sm text-slate-500 dark:text-slate-400 font-medium whitespace-nowrap group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                      {cert.year}
                    </td>
                    <td className="py-5 pr-6">
                      <div className="text-base text-foreground font-semibold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-300">
                        {cert.certificate}
                      </div>
                    </td>
                    <td className="py-5 pr-6">
                      <div className="text-sm text-slate-600 dark:text-slate-300 font-medium group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-green-600 group-hover:bg-clip-text transition-all duration-300">
                        {cert.at}
                      </div>
                    </td>
                    <td className="py-5 pr-6">
                      <div className="flex flex-wrap gap-1.5">
                        {cert.skills.map((skill, skillIndex) => (
                          <Badge 
                            key={skillIndex} 
                            className="text-xs bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-800 dark:text-purple-200 hover:from-purple-200 hover:to-blue-200 dark:hover:from-purple-900/50 dark:hover:to-blue-900/50 border-purple-200 dark:border-purple-700 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25 animate-fade-in"
                            style={{animationDelay: `${index * 0.1 + skillIndex * 0.05}s`}}
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </td>
                    <td className="py-5 text-right">
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-125 transform hover:rotate-12"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}