import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

export default function CertificatesPage() {
  const certificates = [
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
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-center">
        <main className="flex flex-col pt-6 lg:pt-24 lg:w-full lg:py-24">
          <div className="flex flex-col gap-4 mb-8">
            <h1 className="text-4xl font-bold lg:text-start">
              My Certificates
            </h1>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <th className="py-3 pr-6 text-left text-slate-600 dark:text-slate-400 font-medium">
                    Year
                  </th>
                  <th className="py-3 pr-6 text-left text-slate-600 dark:text-slate-400 font-medium">
                    Certificate
                  </th>
                  <th className="py-3 pr-6 text-left text-slate-600 dark:text-slate-400 font-medium">
                    At
                  </th>
                  <th className="py-3 pr-6 text-left text-slate-600 dark:text-slate-400 font-medium">
                    Skills
                  </th>
                  <th className="py-3 text-right text-slate-600 dark:text-slate-400 font-medium">
                    Link
                  </th>
                </tr>
              </thead>
              <tbody>
                {certificates.map((cert, index) => (
                  <tr key={index} className="border-b border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="py-4 pr-6 text-slate-400 font-medium whitespace-nowrap">
                      {cert.year}
                    </td>
                    <td className="py-4 pr-6">
                      <div className="text-foreground font-medium">
                        {cert.certificate}
                      </div>
                    </td>
                    <td className="py-4 pr-6">
                      <div className="text-slate-500 font-medium">
                        {cert.at}
                      </div>
                    </td>
                    <td className="py-4 pr-6">
                      <div className="flex flex-wrap gap-1">
                        {cert.skills.map((skill, skillIndex) => (
                          <Badge 
                            key={skillIndex} 
                            variant="secondary"
                            className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </td>
                    <td className="py-4 text-right">
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
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