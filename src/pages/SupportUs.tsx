import { LandingHeader } from "@/components/LandingHeader";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { PhoneInput } from "@/components/PhoneInput";
import { Heart, TrendingUp, Users, Shield, ExternalLink, Store, Sparkles, HandHeart } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveSupportForm, saveInvestmentForm, type SupportFormData, type InvestmentFormData } from "@/lib/supabase";

export default function SupportUs() {
  const navigate = useNavigate();
  const [donationAmount, setDonationAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [investmentType, setInvestmentType] = useState("equity");
  const [donorPhone, setDonorPhone] = useState("");
  const [investorPhone, setInvestorPhone] = useState("");
  const [isSubmittingDonation, setIsSubmittingDonation] = useState(false);
  const [isSubmittingInvestment, setIsSubmittingInvestment] = useState(false);
  const [donationErrors, setDonationErrors] = useState<{[key: string]: string}>({});
  const [investmentErrors, setInvestmentErrors] = useState<{[key: string]: string}>({});

  const predefinedAmounts = ["25", "50", "100", "250", "500", "1000"];

  const openBIBDTransfer = () => {
    window.open('https://cib.bibd.com.bn/retail/index.html', '_blank', 'noopener,noreferrer');
  };

  const handleDonationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Clear previous errors
    setDonationErrors({});
    
    // Validate form with strict rules
    const formData = new FormData(e.target as HTMLFormElement);
    const errors: {[key: string]: string} = {};
    
    // Get form values first
    const donorName = (formData.get('donorName') as string) || '';
    const donorEmail = (formData.get('donorEmail') as string) || '';
    const donorMessage = (formData.get('donorMessage') as string) || '';
    
    // Amount validation
    if (!(donationAmount || customAmount)) {
      errors.amount = 'Please select or enter an amount';
    } else if (customAmount && isNaN(Number(customAmount))) {
      errors.amount = 'Amount must be a valid number';
    }
    
    // Name validation
    if (!donorName.trim()) {
      errors.donorName = 'Name is required';
    } else if (donorName.length < 2) {
      errors.donorName = 'Name must be at least 2 characters';
    } else if (donorName.length > 100) {
      errors.donorName = 'Name must be less than 100 characters';
    } else if (!/^[a-zA-Z\s\-'\.]+$/.test(donorName)) {
      errors.donorName = 'Name can only contain letters, spaces, hyphens, apostrophes, and periods';
    }
    
    // Email validation
    if (!donorEmail.trim()) {
      errors.donorEmail = 'Email is required';
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(donorEmail)) {
      errors.donorEmail = 'Please enter a valid email address';
    }
    
    // Phone validation (optional)
    if (donorPhone.trim() && !/^\+\d{1,4}\s?\d{4,15}$/.test(donorPhone.trim())) {
      errors.donorPhone = 'Please enter a valid phone number with country code';
    }
    
    // Message validation (optional but if provided, must be valid)
    if (donorMessage.trim() && donorMessage.length < 10) {
      errors.donorMessage = 'Message must be at least 10 characters';
    } else if (donorMessage.length > 2000) {
      errors.donorMessage = 'Message must be less than 2000 characters';
    }
    
    if (Object.keys(errors).length > 0) {
      setDonationErrors(errors);
      return;
    }
    
    setIsSubmittingDonation(true);

    try {
      // Use values from validation
      const supportData: SupportFormData = {
        donation_amount: donationAmount,
        custom_amount: customAmount,
        donor_name: donorName.trim(),
        donor_email: donorEmail.trim(),
        donor_phone: donorPhone || '',
        donor_message: donorMessage || '',
      };

      await saveSupportForm(supportData);

      // Navigate to success screen
      navigate('/form-success?type=donation');

    } catch (error) {
      console.error('Error saving donation form:', error);
      setDonationErrors({ submit: 'Failed to submit donation form. Please try again.' });
    } finally {
      setIsSubmittingDonation(false);
    }
  };

  const handleInvestmentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Clear previous errors
    setInvestmentErrors({});
    
    // Validate form with strict rules
    const formData = new FormData(e.target as HTMLFormElement);
    const errors: {[key: string]: string} = {};
    
    // Get form values first
    const investorName = (formData.get('investorName') as string) || '';
    const investorEmail = (formData.get('investorEmail') as string) || '';
    const investorCompany = (formData.get('investorCompany') as string) || '';
    const investorMessage = (formData.get('investorMessage') as string) || '';
    const investmentAmount = (formData.get('investmentAmount') as string) || '0';
    
    // Name validation
    if (!investorName.trim()) {
      errors.investorName = 'Name is required';
    } else if (investorName.length < 2) {
      errors.investorName = 'Name must be at least 2 characters';
    } else if (investorName.length > 100) {
      errors.investorName = 'Name must be less than 100 characters';
    } else if (!/^[a-zA-Z\s\-'\.]+$/.test(investorName)) {
      errors.investorName = 'Name can only contain letters, spaces, hyphens, apostrophes, and periods';
    }
    
    // Email validation
    if (!investorEmail.trim()) {
      errors.investorEmail = 'Email is required';
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(investorEmail)) {
      errors.investorEmail = 'Please enter a valid email address';
    }
    
    // Phone validation
    if (!investorPhone.trim()) {
      errors.investorPhone = 'Phone is required';
    } else if (!/^\+\d{1,4}\s?\d{4,15}$/.test(investorPhone.trim())) {
      errors.investorPhone = 'Please enter a valid phone number with country code';
    }
    
    // Company validation (optional but if provided, must be valid)
    if (investorCompany.trim() && investorCompany.length < 2) {
      errors.investorCompany = 'Company name must be at least 2 characters';
    } else if (investorCompany.length > 200) {
      errors.investorCompany = 'Company name must be less than 200 characters';
    }
    
    // Message validation (optional but if provided, must be valid)
    if (investorMessage.trim() && investorMessage.length < 10) {
      errors.investorMessage = 'Message must be at least 10 characters';
    } else if (investorMessage.length > 2000) {
      errors.investorMessage = 'Message must be less than 2000 characters';
    }
    
    if (Object.keys(errors).length > 0) {
      setInvestmentErrors(errors);
      return;
    }
    
    setIsSubmittingInvestment(true);

    try {
      // Use values from validation
      const investmentData: InvestmentFormData = {
        investment_type: investmentType,
        investment_amount: investmentAmount,
        investor_name: investorName,
        investor_email: investorEmail,
        investor_phone: investorPhone,
        investor_company: investorCompany,
        investor_message: investorMessage,
      };

      await saveInvestmentForm(investmentData);

      // Navigate to success screen
      navigate('/form-success?type=investment');

    } catch (error) {
      console.error('Error saving investment form:', error);
      setInvestmentErrors({ submit: 'Failed to submit investment inquiry. Please try again.' });
    } finally {
      setIsSubmittingInvestment(false);
    }
  };

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
              {/* Bank Transfer Information */}
              <div className="mb-8 p-6 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 border-2 border-primary/30 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-primary text-center flex items-center justify-center gap-2">
                   Bank Transfer Information
                </h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center py-2 border-b border-primary/20">
                    <span className="font-semibold text-foreground">Bank Name:</span>
                    <span className="text-foreground font-medium">BIBD</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-primary/20">
                    <span className="font-semibold text-foreground">Account Name:</span>
                    <span className="text-foreground font-medium">CariGo Enterprise</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-primary/20">
                    <span className="font-semibold text-foreground">Account Number:</span>
                    <span className="text-foreground font-medium">00-001-01-0204946</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-semibold text-foreground">Swift Code:</span>
                    <span className="text-foreground font-medium">BIBDBNBB</span>
                  </div>
                </div>
                
                <Button 
                  onClick={openBIBDTransfer}
                  size="lg" 
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white text-lg mb-4"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Open BIBD Transfer Page
                </Button>
                
                <p className="text-sm text-muted-foreground text-center">
                  💡 After making the transfer, please contact us with the transaction reference number.
                </p>
              </div>

              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-foreground">
                  Support Our Mission
                </h2>
                <p className="text-muted-foreground mb-8">
                  Your donation helps us improve our platform, add new features, and expand our reach across Brunei. Every contribution makes a difference.
                </p>

                <form className="space-y-6" onSubmit={handleDonationSubmit} noValidate>
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
                        className={donationErrors.amount ? "text-lg border-red-500" : "text-lg"}
                      />
                    </div>
                    {donationErrors.amount && <p className="text-sm text-red-500 mt-1">{donationErrors.amount}</p>}
                  </div>

                  <div>
                    <Label htmlFor="donorName">Full Name</Label>
                    <Input id="donorName" name="donorName" type="text" placeholder="John Doe" className={donationErrors.donorName ? "border-red-500" : ""} />
                    {donationErrors.donorName && <p className="text-sm text-red-500 mt-1">{donationErrors.donorName}</p>}
                  </div>

                  <div>
                    <Label htmlFor="donorEmail">Email</Label>
                    <Input id="donorEmail" name="donorEmail" type="email" placeholder="john@example.com" className={donationErrors.donorEmail ? "border-red-500" : ""} />
                    {donationErrors.donorEmail && <p className="text-sm text-red-500 mt-1">{donationErrors.donorEmail}</p>}
                  </div>

                  <div>
                    <Label htmlFor="donorPhone">Phone Number (Optional)</Label>
                    <PhoneInput
                      value={donorPhone}
                      onChange={setDonorPhone}
                      placeholder="8XXX XXXX"
                    />
                    {donationErrors.donorPhone && <p className="text-sm text-red-500 mt-1">{donationErrors.donorPhone}</p>}
                  </div>

                  <div>
                    <Label htmlFor="donorMessage">Message (Optional)</Label>
                    <Textarea
                      id="donorMessage"
                      name="donorMessage"
                      placeholder="Share why you're supporting CariGo..."
                      rows={4}
                      className={donationErrors.donorMessage ? "border-red-500" : ""}
                    />
                    {donationErrors.donorMessage && <p className="text-sm text-red-500 mt-1">{donationErrors.donorMessage}</p>}
                  </div>

                  {donationErrors.submit && <p className="text-sm text-red-500 mb-4">{donationErrors.submit}</p>}
                  <Button type="submit" size="lg" className="w-full text-lg" disabled={isSubmittingDonation}>
                    {isSubmittingDonation ? "Submitting..." : "Complete Donation"}
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

                <form className="space-y-6" onSubmit={handleInvestmentSubmit} noValidate>
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
                      name="investmentAmount"
                      type="number"
                      placeholder="Minimum: 10,000"
                      className="text-lg"
                    />
                  </div>

                  <div>
                    <Label htmlFor="investorName">Full Name / Company Name</Label>
                    <Input id="investorName" name="investorName" type="text" placeholder="John Doe / ABC Ventures" className={investmentErrors.investorName ? "border-red-500" : ""} />
                    {investmentErrors.investorName && <p className="text-sm text-red-500 mt-1">{investmentErrors.investorName}</p>}
                  </div>

                  <div>
                    <Label htmlFor="investorEmail">Email</Label>
                    <Input id="investorEmail" name="investorEmail" type="email" placeholder="contact@example.com" className={investmentErrors.investorEmail ? "border-red-500" : ""} />
                    {investmentErrors.investorEmail && <p className="text-sm text-red-500 mt-1">{investmentErrors.investorEmail}</p>}
                  </div>

                  <div>
                    <Label htmlFor="investorPhone">Phone Number</Label>
                    <div className={investmentErrors.investorPhone ? "border-2 border-red-500 rounded-md p-1" : ""}>
                      <PhoneInput
                        value={investorPhone}
                        onChange={setInvestorPhone}
                        placeholder="8XXX XXXX"
                      />
                    </div>
                    {investmentErrors.investorPhone && <p className="text-sm text-red-500 mt-1">{investmentErrors.investorPhone}</p>}
                  </div>

                  <div>
                    <Label htmlFor="investorCompany">Company / Organization (Optional)</Label>
                    <Input id="investorCompany" name="investorCompany" type="text" placeholder="Your company name" className={investmentErrors.investorCompany ? "border-red-500" : ""} />
                    {investmentErrors.investorCompany && <p className="text-sm text-red-500 mt-1">{investmentErrors.investorCompany}</p>}
                  </div>

                  <div>
                    <Label htmlFor="investorMessage">Additional Information</Label>
                    <Textarea
                      id="investorMessage"
                      name="investorMessage"
                      placeholder="Tell us about your background, experience, and what you can bring to CariGo..."
                      rows={5}
                      className={investmentErrors.investorMessage ? "border-red-500" : ""}
                    />
                    {investmentErrors.investorMessage && <p className="text-sm text-red-500 mt-1">{investmentErrors.investorMessage}</p>}
                  </div>

                  {investmentErrors.submit && <p className="text-sm text-red-500 mb-4">{investmentErrors.submit}</p>}
                  <Button type="submit" size="lg" className="w-full text-lg" disabled={isSubmittingInvestment}>
                    {isSubmittingInvestment ? "Submitting..." : "Submit Investment Inquiry"}
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
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 rounded-lg bg-primary/10 text-primary">
                  <Store className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-foreground">1. Empowering Local Businesses</h3>
                  <p className="text-muted-foreground leading-relaxed mb-2">
                    Every purchase and partnership helps small shops across Brunei step into the digital era.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Your support allows local entrepreneurs to grow, reach new customers, and keep our economy thriving — right here at home.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 rounded-lg bg-accent/10 text-accent">
                  <Sparkles className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-foreground">2. Building Brunei's Digital Future</h3>
                  <p className="text-muted-foreground leading-relaxed mb-2">
                    CariGo isn't just an app — it's a movement toward a more connected, tech-ready Brunei.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    By supporting us, you're helping create real opportunities for innovation, digital jobs, and a smarter local marketplace.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 rounded-lg bg-primary/10 text-primary">
                  <HandHeart className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-foreground">3. Together, We Create Change</h3>
                  <p className="text-muted-foreground leading-relaxed mb-2">
                    Innovation doesn't happen alone.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Your belief in CariGo fuels the mission to make shopping simpler, fairer, and more sustainable for everyone in Brunei.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-2">
                    Together, we're shaping the future — one local store at a time.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

