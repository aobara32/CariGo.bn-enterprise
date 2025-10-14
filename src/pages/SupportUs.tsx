import { LandingHeader } from "@/components/LandingHeader";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Heart, TrendingUp, Users, Shield } from "lucide-react";
import { useState } from "react";

export default function SupportUs() {
  const [donationAmount, setDonationAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [investmentType, setInvestmentType] = useState("equity");

  const predefinedAmounts = ["25", "50", "100", "250", "500", "1000"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-accent/5 to-background">
      <LandingHeader />

      <main className="container mx-auto px-4 py-16 md:py-24">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground font-racing">
            Support CariGo
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Help us build the future of shopping in Brunei. Your support enables us to create innovative solutions and serve our community better.
          </p>
        </div>

        {/* Impact Stats */}
        <section className="max-w-6xl mx-auto mb-16">
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <p className="text-3xl font-bold text-foreground mb-1">10,000+</p>
              <p className="text-sm text-muted-foreground">Active Users</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <p className="text-3xl font-bold text-foreground mb-1">500+</p>
              <p className="text-sm text-muted-foreground">Merchants</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <p className="text-3xl font-bold text-foreground mb-1">BND 2M+</p>
              <p className="text-sm text-muted-foreground">Transactions</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <p className="text-3xl font-bold text-foreground mb-1">4.8/5</p>
              <p className="text-sm text-muted-foreground">User Rating</p>
            </Card>
          </div>
        </section>

        {/* Forms */}
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="donate" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="donate" className="text-lg">
                <Heart className="h-4 w-4 mr-2" />
                Make a Donation
              </TabsTrigger>
              <TabsTrigger value="invest" className="text-lg">
                <TrendingUp className="h-4 w-4 mr-2" />
                Invest in CariGo
              </TabsTrigger>
            </TabsList>

            {/* Donation Form */}
            <TabsContent value="donate">
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-foreground">
                  Support Our Mission
                </h2>
                <p className="text-muted-foreground mb-8">
                  Your donation helps us improve our platform, add new features, and expand our reach across Brunei. Every contribution makes a difference.
                </p>

                <form className="space-y-6">
                  <div>
                    <Label className="text-lg mb-4 block">Select Amount (BND)</Label>
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      {predefinedAmounts.map((amount) => (
                        <button
                          key={amount}
                          type="button"
                          onClick={() => {
                            setDonationAmount(amount);
                            setCustomAmount("");
                          }}
                          className={`py-3 px-4 rounded-lg border-2 font-semibold transition-colors ${
                            donationAmount === amount
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-border hover:border-primary"
                          }`}
                        >
                          ${amount}
                        </button>
                      ))}
                    </div>
                    <div>
                      <Label htmlFor="customAmount" className="mb-2">Custom Amount</Label>
                      <Input
                        id="customAmount"
                        type="number"
                        placeholder="Enter custom amount"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setDonationAmount("");
                        }}
                        className="text-lg"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="donorName">Full Name</Label>
                    <Input id="donorName" type="text" placeholder="John Doe" />
                  </div>

                  <div>
                    <Label htmlFor="donorEmail">Email</Label>
                    <Input id="donorEmail" type="email" placeholder="john@example.com" />
                  </div>

                  <div>
                    <Label htmlFor="donorPhone">Phone Number (Optional)</Label>
                    <Input id="donorPhone" type="tel" placeholder="+673 xxx xxxx" />
                  </div>

                  <div>
                    <Label htmlFor="donorMessage">Message (Optional)</Label>
                    <Textarea
                      id="donorMessage"
                      placeholder="Share why you're supporting CariGo..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full text-lg">
                    Complete Donation
                  </Button>
                </form>
              </Card>
            </TabsContent>

            {/* Investment Form */}
            <TabsContent value="invest">
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-foreground">
                  Invest in the Future
                </h2>
                <p className="text-muted-foreground mb-8">
                  Join us as an investor and be part of Brunei's e-commerce revolution. We're seeking strategic partners who share our vision.
                </p>

                <form className="space-y-6">
                  <div>
                    <Label className="text-lg mb-4 block">Investment Type</Label>
                    <RadioGroup value={investmentType} onValueChange={setInvestmentType}>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2 border rounded-lg p-4 hover:bg-accent transition-colors">
                          <RadioGroupItem value="equity" id="equity" />
                          <Label htmlFor="equity" className="flex-1 cursor-pointer">
                            <div className="font-semibold">Equity Investment</div>
                            <div className="text-sm text-muted-foreground">
                              Acquire ownership stake in CariGo
                            </div>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 border rounded-lg p-4 hover:bg-accent transition-colors">
                          <RadioGroupItem value="convertible" id="convertible" />
                          <Label htmlFor="convertible" className="flex-1 cursor-pointer">
                            <div className="font-semibold">Convertible Note</div>
                            <div className="text-sm text-muted-foreground">
                              Debt that converts to equity at a later stage
                            </div>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 border rounded-lg p-4 hover:bg-accent transition-colors">
                          <RadioGroupItem value="strategic" id="strategic" />
                          <Label htmlFor="strategic" className="flex-1 cursor-pointer">
                            <div className="font-semibold">Strategic Partnership</div>
                            <div className="text-sm text-muted-foreground">
                              Partnership with strategic value beyond capital
                            </div>
                          </Label>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label htmlFor="investmentAmount">Investment Amount (BND)</Label>
                    <Input
                      id="investmentAmount"
                      type="number"
                      placeholder="Minimum: 10,000"
                      className="text-lg"
                    />
                  </div>

                  <div>
                    <Label htmlFor="investorName">Full Name / Company Name</Label>
                    <Input id="investorName" type="text" placeholder="John Doe / ABC Ventures" />
                  </div>

                  <div>
                    <Label htmlFor="investorEmail">Email</Label>
                    <Input id="investorEmail" type="email" placeholder="contact@example.com" />
                  </div>

                  <div>
                    <Label htmlFor="investorPhone">Phone Number</Label>
                    <Input id="investorPhone" type="tel" placeholder="+673 xxx xxxx" />
                  </div>

                  <div>
                    <Label htmlFor="investorCompany">Company / Organization (Optional)</Label>
                    <Input id="investorCompany" type="text" placeholder="Your company name" />
                  </div>

                  <div>
                    <Label htmlFor="investorMessage">Additional Information</Label>
                    <Textarea
                      id="investorMessage"
                      placeholder="Tell us about your background, experience, and what you can bring to CariGo..."
                      rows={5}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full text-lg">
                    Submit Investment Inquiry
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    📄 <strong>Note:</strong> This is an expression of interest. Our team will review your inquiry and contact you with detailed information about our current funding round and investment terms.
                  </p>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Why Support Section */}
        <section className="max-w-4xl mx-auto mt-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Why Your Support Matters
          </h2>
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-2 text-foreground">🚀 Innovation</h3>
              <p className="text-muted-foreground">
                Your support enables us to develop cutting-edge features like AI-powered price comparison, real-time inventory tracking, and personalized shopping experiences.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-2 text-foreground">🌏 Community Impact</h3>
              <p className="text-muted-foreground">
                We're creating jobs, supporting local businesses, and making shopping more accessible and affordable for everyone in Brunei.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-2 text-foreground">📈 Growth</h3>
              <p className="text-muted-foreground">
                Help us expand to more regions, add more merchants, and build features that benefit the entire Bruneian community.
              </p>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

