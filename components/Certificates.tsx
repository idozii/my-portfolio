"use client";
import { ExternalLink } from "lucide-react";

const certificates = [
  {
    year: "2025",
    title: "Introduction to Git and GitHub",
    issuer: "Google",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/8RJS5GM8F6ZD",
  },
  {
    year: "2025",
    title: "Statistics and Data Analysis with Excel: Essentials",
    issuer: "Macquarie University",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/AMU1S0A3SW86",
  },
  {
    year: "2025",
    title: "Machine Learning",
    issuer: "DeepLearning.AI",
    credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/certificate/6QRFBWYZQ93W",
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Certificates
        </h2>
      </div>
      <div className="flex flex-col gap-4 lg:px-6 mb-8">
        <h2 className="lg:block hidden text-xl font-bold lg:text-start">
          MY CERTIFICATES
        </h2>
      </div>
      <div className="lg:px-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <tbody>
              {certificates.map((cert, index) => (
                <tr key={index} className="border-b border-slate-200 dark:border-slate-700">
                  <td className="py-4 pr-6 text-slate-400 font-medium whitespace-nowrap">
                    {cert.year}
                  </td>
                  <td className="py-4 pr-6">
                    <div className="text-foreground font-medium">
                      {cert.title}
                    </div>
                    <div className="text-slate-500 text-sm">
                      {cert.issuer}
                    </div>
                  </td>
                  <td className="py-4 text-right">
                    <a
                      href={cert.credentialUrl}
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
      </div>
    </section>
  );
}