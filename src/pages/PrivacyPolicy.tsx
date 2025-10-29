import { LandingHeader } from "@/components/LandingHeader";
import { Footer } from "@/components/Footer";
import { Shield, Eye, Lock, Database, Users, Globe, FileText } from "lucide-react";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  const handleEmailClick = () => {
    window.location.href = '/contact';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+6738228250';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-accent/5 to-background">
      <LandingHeader />

      <main className="container mx-auto px-4 py-16 md:py-24">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground font-racing">
            Privacy Policy
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            CariGo Enterprise is committed to protecting your privacy and personal information. This policy explains how we collect, use, and safeguard your data.
          </p>
          <div className="text-sm text-muted-foreground">
            Last updated: December 2024
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            
            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
                <Shield className="h-6 w-6 text-primary" />
                Our Commitment to Privacy
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                At CariGo Enterprise, we understand the importance of privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform and services.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
                <Database className="h-6 w-6 text-primary" />
                Information We Collect
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Personal Information</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    We may collect personal information that you voluntarily provide to us, including:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-6 leading-relaxed">
                    <li>Name, email address, and phone number</li>
                    <li>Shipping and billing addresses</li>
                    <li>Payment information (processed securely through third-party providers)</li>
                    <li>Account preferences and settings</li>
                    <li>Communication preferences</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Usage Information</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    We automatically collect certain information about your use of our platform:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-6 leading-relaxed">
                    <li>Device information (IP address, browser type, operating system)</li>
                    <li>Usage patterns and preferences</li>
                    <li>Search queries and product interactions</li>
                    <li>Location data (with your consent)</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Third-Party Information</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We may receive information about you from third parties, such as social media platforms, payment processors, and analytics providers, in accordance with their privacy policies.
                  </p>
                </div>
              </div>
            </section>

            {/* How We Use Information */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
                <Eye className="h-6 w-6 text-primary" />
                How We Use Your Information
              </h2>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-foreground">Service Provision</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-6 leading-relaxed">
                      <li>Process orders and transactions</li>
                      <li>Provide customer support</li>
                      <li>Manage your account</li>
                      <li>Deliver products and services</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-foreground">Platform Improvement</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-6 leading-relaxed">
                      <li>Analyze usage patterns</li>
                      <li>Improve user experience</li>
                      <li>Develop new features</li>
                      <li>Optimize performance</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-foreground">Communication</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-6 leading-relaxed">
                      <li>Send order updates</li>
                      <li>Provide customer support</li>
                      <li>Share promotional content</li>
                      <li>Send important notices</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-foreground">Legal Compliance</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-6 leading-relaxed">
                      <li>Comply with legal obligations</li>
                      <li>Prevent fraud and abuse</li>
                      <li>Enforce our terms</li>
                      <li>Protect our rights</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Information Sharing */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
                <Users className="h-6 w-6 text-primary" />
                Information Sharing and Disclosure
              </h2>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">Service Providers</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We may share information with trusted third-party service providers who assist us in operating our platform, such as payment processors, shipping companies, and analytics providers.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">Legal Requirements</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We may disclose information when required by law, court order, or government regulation, or to protect our rights and the safety of our users.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">Business Transfers</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">Consent</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We may share information with your explicit consent or at your direction.
                  </p>
                </div>
              </div>
            </section>

            {/* Data Security */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
                <Lock className="h-6 w-6 text-primary" />
                Data Security
              </h2>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-muted-foreground leading-relaxed">Encryption of sensitive data in transit and at rest</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-muted-foreground leading-relaxed">Regular security assessments and updates</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-muted-foreground leading-relaxed">Access controls and authentication measures</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-muted-foreground leading-relaxed">Employee training on data protection</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-muted-foreground leading-relaxed">Incident response procedures</p>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong>Note:</strong> While we strive to protect your information, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security.
                </p>
              </div>
            </section>

            {/* Your Rights */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
                <Globe className="h-6 w-6 text-primary" />
                Your Rights and Choices
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">Access and Update</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    You have the right to access, update, or correct your personal information. You can do this through your account settings or by contacting us.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">Data Portability</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    You may request a copy of your personal data in a structured, machine-readable format.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">Deletion</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    You may request the deletion of your personal information, subject to certain legal and operational requirements.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">Marketing Communications</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    You can opt out of marketing communications at any time by using the unsubscribe link in our emails or updating your preferences.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">Cookies</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    You can control cookie settings through your browser preferences, though this may affect the functionality of our platform.
                  </p>
                </div>
              </div>
            </section>

            {/* International Transfers */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
                <Globe className="h-6 w-6 text-primary" />
                International Data Transfers
              </h2>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Your information may be transferred to and processed in countries other than Brunei Darussalam. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                When we transfer personal information internationally, we use standard contractual clauses and other appropriate safeguards to protect your information in accordance with this Privacy Policy.
              </p>
            </section>

            {/* Children's Privacy */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
                <Users className="h-6 w-6 text-primary" />
                Children's Privacy
              </h2>
              
              <p className="text-muted-foreground leading-relaxed">
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information promptly.
              </p>
            </section>

            {/* Changes to Policy */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
                <FileText className="h-6 w-6 text-primary" />
                Changes to This Privacy Policy
              </h2>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the updated policy on our website and updating the "Last updated" date.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Your continued use of our services after any changes to this Privacy Policy constitutes your acceptance of the updated policy.
              </p>
            </section>

            {/* Contact Information */}
            <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 border-2 border-primary/30 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                Contact Information
              </h2>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                For questions about this Privacy Policy, please contact us:
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email:</h3>
                  <button 
                    onClick={handleEmailClick}
                    className="text-primary hover:text-primary/80 transition-colors underline"
                  >
                    privacy@carigo.bn
                  </button>
                </div>
                
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Phone:</h3>
                  <button 
                    onClick={handlePhoneClick}
                    className="text-primary hover:text-primary/80 transition-colors underline"
                  >
                    +673 822 8250
                  </button>
                </div>
                
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Address:</h3>
                  <p className="text-foreground">
                    CariGo Enterprise<br />
                    Bandar Seri Begawan<br />
                    Brunei Darussalam
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}