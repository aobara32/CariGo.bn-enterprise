import { LandingHeader } from "@/components/LandingHeader";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, MapPin, Clock, Briefcase, Settings, Target, Rocket, FileText } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  compensation: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  idealFor: string[];
  seniorityTracks?: string[];
}

export default function Careers() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const jobs: Job[] = [
    {
      id: 1,
      title: "Full-Stack Developer (Web / Mobile)",
      department: "Engineering",
      location: "Hybrid (Brunei-Muara preferred)",
      type: "Full-time / Part-time / Internship",
      compensation: "Negotiable (equity options available for core members)",
      description: "Build and maintain our core CariGo platform (web + mobile). Integrate payment APIs, product search, and merchant dashboard features.",
      responsibilities: [
        "Build and maintain our core CariGo platform (web + mobile)",
        "Integrate payment APIs, product search, and merchant dashboard features",
        "Collaborate with design and product teams on UI/UX improvements",
        "Participate in feature planning and sprint reviews",
      ],
      requirements: [
        "Experience with JavaScript / TypeScript or React",
        "Familiarity with Firebase, Firestore, or similar backends",
        "Understanding of API design (REST / GraphQL)",
        "(Nice to have) knowledge of Next.js",
      ],
      idealFor: [
        "Computer science students or self-taught developers",
        "Startups / freelancers seeking real-world app launch experience",
      ],
      seniorityTracks: [
        "Junior Developer: portfolio or code samples welcome",
        "Senior Developer: 3+ years of experience, may lead sub-team and mentor juniors",
      ],
    },
    {
      id: 2,
      title: "UI/UX Designer (Product Design)",
      department: "Design",
      location: "Remote or Hybrid",
      type: "Contract / Freelance / Internship",
      compensation: "Project-based / Monthly retainer",
      description: "Create clean, intuitive user interfaces for both users and vendors. Conduct usability testing and optimize workflows.",
      responsibilities: [
        "Create clean, intuitive user interfaces for both users and vendors",
        "Conduct usability testing and optimize workflows",
        "Collaborate with developers to ensure smooth design implementation",
        "Develop design systems (colors, typography, components)",
      ],
      requirements: [
        "Proficiency in Figma / Adobe XD / Sketch",
        "Portfolio of app or web designs (student projects accepted)",
        "Understanding of responsive design and accessibility basics",
      ],
      idealFor: [
        "Students in design, digital media, or related fields",
        "Visual thinkers who want to shape the look and feel of a growing startup",
      ],
      seniorityTracks: [
        "Junior Designer: no experience required — just enthusiasm and creativity",
        "Senior Designer: experience designing SaaS or marketplace apps",
      ],
    },
    {
      id: 3,
      title: "Business Development & Partnerships Lead",
      department: "Business",
      location: "Brunei (fieldwork possible)",
      type: "Full-time / Part-time",
      compensation: "Base pay + commission + equity (negotiable)",
      description: "Reach out to local retailers and onboard vendors onto the CariGo platform. Build partnerships with payment providers, logistics companies, and local SMEs.",
      responsibilities: [
        "Reach out to local retailers and onboard vendors onto the CariGo platform",
        "Build partnerships with payment providers, logistics companies, and local SMEs",
        "Represent CariGo at events, exhibitions, and meetings with institutions",
        "Prepare basic reports and feedback to improve vendor experience",
      ],
      requirements: [
        "Strong communication and presentation skills (English + Malay)",
        "Confidence in speaking with business owners and partners",
        "Basic understanding of digital platforms or e-commerce concepts",
      ],
      idealFor: [
        "Entrepreneurs, sales enthusiasts, or final-year business students",
        "People who love connecting with Brunei's business community",
      ],
      seniorityTracks: [
        "Business Associate (Junior): no prior experience required — full training provided",
        "Partnership Manager (Senior): 3+ years in business dev, startup, or retail network management",
      ],
    },
    {
      id: 4,
      title: "Marketing & Content Strategist",
      department: "Marketing",
      location: "Remote or Hybrid",
      type: "Freelance / Part-time",
      compensation: "Based on campaign budget / retainer",
      description: "Plan and execute social media campaigns. Write blog posts, app updates, and press materials. Develop marketing materials for vendor acquisition.",
      responsibilities: [
        "Plan and execute social media campaigns (Instagram, TikTok, X, Facebook)",
        "Write blog posts, app updates, and press materials",
        "Develop marketing materials for vendor acquisition",
        "Analyze engagement and growth metrics",
      ],
      requirements: [
        "Writing fluency in English and/or Malay",
        "Familiarity with Canva, CapCut, or social media scheduling tools",
        "(Optional) photography / short-form video editing skills",
      ],
      idealFor: [
        "Students in communication, media, or marketing",
        "Creators with a passion for storytelling and brand building",
      ],
    },
    {
      id: 5,
      title: "Operations & Admin Support",
      department: "Operations",
      location: "Brunei (office / remote mix)",
      type: "Part-time / Internship",
      compensation: "Allowance / Stipend",
      description: "Support merchant onboarding and documentation. Assist in verification (KYC) and database organization. Prepare reports and maintain internal spreadsheets.",
      responsibilities: [
        "Support merchant onboarding and documentation",
        "Assist in verification (KYC) and database organization",
        "Prepare reports and maintain internal spreadsheets",
        "Coordinate schedules for meetings and events",
      ],
      requirements: [
        "Organized, detail-oriented, comfortable with Google Sheets and Docs",
        "Good written English / Malay",
        "Discretion with confidential data",
      ],
      idealFor: [
        "University students seeking operational experience in tech startups",
      ],
    },
  ];

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-accent/5 to-background">
      <LandingHeader />

      <main className="container mx-auto px-4 py-16 md:py-24">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            <span className="font-racing">Join the CariGo Team</span>
            <br className="mb-2" />
            <span className="font-normal text-3xl md:text-4xl">Building Brunei's Next Digital Marketplace</span>
          </h1>
          <div className="text-left max-w-3xl mx-auto mb-8 space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-3 text-foreground">About CariGo</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">
                CariGo is a Brunei-born startup transforming how local commerce works — connecting neighborhood stores with customers through one simple app.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We're currently a small, focused team of three founders and developers, and we're looking for passionate individuals who want to shape the next stage of Brunei's digital innovation.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4 font-semibold">
                If you're creative, driven, and believe local innovation can change everyday life — we want you with us.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Open Positions</h2>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search jobs by title, department, or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 py-6 text-lg"
            />
          </div>
        </div>

        {/* Results Count */}
        <div className="max-w-6xl mx-auto mb-6">
          <p className="text-muted-foreground">
            {filteredJobs.length} {filteredJobs.length === 1 ? "position" : "positions"} available
          </p>
        </div>

        {/* Job Listings */}
        <div className="max-w-6xl mx-auto space-y-6">
          {filteredJobs.length === 0 ? (
            <Card className="p-12 text-center">
              <p className="text-muted-foreground text-lg">
                No jobs found matching your search. Try different keywords.
              </p>
            </Card>
          ) : (
            filteredJobs.map((job) => (
              <Card key={job.id} className="p-8 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-foreground mb-2">
                      {job.title}
                    </h2>
                    <div className="flex flex-wrap gap-3 mb-4">
                      <Badge variant="secondary" className="flex items-center gap-1">
                        <Briefcase className="h-3 w-3" />
                        {job.department}
                      </Badge>
                      <Badge variant="secondary" className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {job.location}
                      </Badge>
                      <Badge variant="secondary" className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {job.type}
                      </Badge>
                    </div>
                  </div>
                  <Button 
                    size="lg" 
                    className="md:mt-0 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
                    onClick={() => navigate(`/careers/apply?job=${encodeURIComponent(job.title)}`)}
                  >
                    Apply Now
                  </Button>
                </div>

                <div className="mb-4">
                  <Badge variant="outline" className="mb-2">
                    Compensation: {job.compensation}
                  </Badge>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {job.description}
                </p>

                <div className="space-y-4 mb-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Responsibilities:</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      {job.responsibilities.map((resp, index) => (
                        <li key={index}>{resp}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Requirements:</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      {job.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Ideal for:</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      {job.idealFor.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  {job.seniorityTracks && job.seniorityTracks.length > 0 && (
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Seniority Tracks:</h3>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {job.seniorityTracks.map((track, index) => (
                          <li key={index}>{track}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </Card>
            ))
          )}
        </div>

        {/* General Benefits Section */}
        <section className="max-w-6xl mx-auto mt-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
             General Benefits
          </h2>
          <Card className="relative overflow-hidden p-8 md:p-10 border-0 shadow-xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
            <div className="pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(closest-side,white,transparent)]">
              <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-primary/30 blur-3xl" />
              <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-accent/30 blur-3xl" />
            </div>

            <div className="relative grid gap-4 md:gap-6 md:grid-cols-2">
              <div className="flex items-start gap-3">
                <div className="mt-1 h-6 w-6 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                  <Settings className="h-3.5 w-3.5" />
                </div>
                <p className="text-foreground/90">Work directly with CariGo's founding team <span className="font-semibold">(core decision-making)</span></p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 h-6 w-6 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                  <Clock className="h-3.5 w-3.5" />
                </div>
                <p className="text-foreground/90">Flexible hours — <span className="font-semibold">remote or hybrid</span> supported</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 h-6 w-6 rounded-full bg-accent/20 text-accent flex items-center justify-center">
                  <Target className="h-3.5 w-3.5" />
                </div>
                <p className="text-foreground/90">Potential for <span className="font-semibold">equity</span> or co‑founder track</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 h-6 w-6 rounded-full bg-accent/20 text-accent flex items-center justify-center">
                  <Rocket className="h-3.5 w-3.5" />
                </div>
                <p className="text-foreground/90">Hands-on exposure to <span className="font-semibold">scaling, launches, funding</span></p>
              </div>
              <div className="flex items-start gap-3 md:col-span-2">
                <div className="mt-1 h-6 w-6 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                  <FileText className="h-3.5 w-3.5" />
                </div>
                <p className="text-foreground/90">Reference letters, certificates, and <span className="font-semibold">mentorship</span> for students or interns</p>
              </div>
            </div>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
}

