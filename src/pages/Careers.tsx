import { LandingHeader } from "@/components/LandingHeader";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, MapPin, Clock, Briefcase } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
}

export default function Careers() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const jobs: Job[] = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Bandar Seri Begawan",
      type: "Full-time",
      description: "We're looking for an experienced Frontend Developer to help build the future of e-commerce in Brunei. You'll work on our React-based platform and create amazing user experiences.",
      requirements: [
        "5+ years of experience with React and TypeScript",
        "Strong understanding of modern web technologies",
        "Experience with responsive design and mobile-first approach",
        "Excellent problem-solving skills",
      ],
    },
    {
      id: 2,
      title: "Product Manager",
      department: "Product",
      location: "Bandar Seri Begawan",
      type: "Full-time",
      description: "Join our product team to shape the future of shopping in Brunei. You'll work closely with engineering, design, and business teams to deliver innovative features.",
      requirements: [
        "3+ years of product management experience",
        "Strong analytical and communication skills",
        "Experience with e-commerce platforms",
        "Understanding of local market dynamics",
      ],
    },
    {
      id: 3,
      title: "UX/UI Designer",
      department: "Design",
      location: "Bandar Seri Begawan",
      type: "Full-time",
      description: "Create beautiful and intuitive interfaces for our mobile and web applications. Help us design experiences that delight our users.",
      requirements: [
        "3+ years of UX/UI design experience",
        "Proficiency in Figma and design tools",
        "Portfolio demonstrating mobile-first design",
        "Understanding of accessibility standards",
      ],
    },
    {
      id: 4,
      title: "Backend Developer",
      department: "Engineering",
      location: "Bandar Seri Begawan",
      type: "Full-time",
      description: "Build scalable and reliable backend systems to support our growing platform. Work with modern technologies and cloud infrastructure.",
      requirements: [
        "4+ years of backend development experience",
        "Experience with Node.js, Python, or Go",
        "Knowledge of database systems and API design",
        "Understanding of cloud platforms (AWS, GCP, or Azure)",
      ],
    },
    {
      id: 5,
      title: "Marketing Specialist",
      department: "Marketing",
      location: "Bandar Seri Begawan",
      type: "Full-time",
      description: "Drive growth and engagement through creative marketing campaigns. Help us reach and connect with customers across Brunei.",
      requirements: [
        "2+ years of digital marketing experience",
        "Experience with social media marketing",
        "Strong content creation skills",
        "Understanding of local market and culture",
      ],
    },
    {
      id: 6,
      title: "Data Analyst",
      department: "Analytics",
      location: "Bandar Seri Begawan",
      type: "Full-time",
      description: "Turn data into insights that drive business decisions. Work with large datasets to identify trends and opportunities.",
      requirements: [
        "2+ years of data analysis experience",
        "Proficiency in SQL and data visualization tools",
        "Experience with Python or R for analysis",
        "Strong communication skills",
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground font-racing">
            Careers at CariGo
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Join us in revolutionizing the shopping experience in Brunei. We're building a team of passionate individuals who want to make a real impact.
          </p>
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

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {job.description}
                </p>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Requirements:</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {job.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))
          )}
        </div>

        {/* Why Join Us Section */}
        <section className="max-w-6xl mx-auto mt-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Why Join CariGo?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Innovation</h3>
              <p className="text-muted-foreground">
                Work on cutting-edge technology and shape the future of e-commerce in Brunei
              </p>
            </Card>
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌟</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Growth</h3>
              <p className="text-muted-foreground">
                Continuous learning opportunities and career development in a fast-growing company
              </p>
            </Card>
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Team</h3>
              <p className="text-muted-foreground">
                Collaborate with talented individuals who are passionate about making a difference
              </p>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

