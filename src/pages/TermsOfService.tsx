import { LandingHeader } from "@/components/LandingHeader";
import { Footer } from "@/components/Footer";
import { FileText, Scale, Users, Shield, AlertTriangle, CheckCircle, XCircle } from "lucide-react";

export default function TermsOfService() {
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
            Terms of Service
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            These terms and conditions govern your use of CariGo Enterprise's platform and services. Please read them carefully before using our services.
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
                <FileText className="h-6 w-6 text-primary" />
                Agreement to Terms
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Welcome to CariGo Enterprise. These Terms of Service ("Terms") constitute a legally binding agreement between you and CariGo Enterprise ("we," "us," or "our") regarding your use of our platform, website, and services.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                By accessing or using our services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use our services.
              </p>
              <div className="p-6 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong>Important:</strong> These Terms include provisions for dispute resolution through arbitration. Please review Section 12 carefully.
                </p>
              </div>
            </section>

            {/* Definitions */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
                <Scale className="h-6 w-6 text-primary" />
                Definitions
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">"Platform"</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Refers to our website, mobile applications, and all related services provided by CariGo Enterprise.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">"User" or "You"</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Any individual or entity that accesses or uses our Platform.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">"Content"</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Any information, data, text, images, or other materials uploaded, posted, or transmitted through our Platform.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">"Services"</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    All services provided by CariGo Enterprise, including but not limited to price comparison, product listings, and merchant services.
                  </p>
                </div>
              </div>
            </section>

            {/* Account Registration */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
                <Users className="h-6 w-6 text-primary" />
                Account Registration and Security
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">Account Creation</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    To access certain features of our Platform, you may be required to create an account. You agree to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-6 leading-relaxed">
                    <li>Provide accurate, current, and complete information</li>
                    <li>Maintain and update your account information</li>
                    <li>Keep your password secure and confidential</li>
                    <li>Accept responsibility for all activities under your account</li>
                    <li>Notify us immediately of any unauthorized use</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">Account Termination</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We reserve the right to suspend or terminate your account at any time for violation of these Terms or for any other reason at our sole discretion.
                  </p>
                </div>
              </div>
            </section>

            {/* Acceptable Use */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-primary" />
                Acceptable Use Policy
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-foreground">Permitted Uses</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">You may use our Platform for lawful purposes only, including:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-6 leading-relaxed">
                    <li>Browsing and comparing products and prices</li>
                    <li>Making legitimate purchases through our Platform</li>
                    <li>Accessing merchant information and services</li>
                    <li>Communicating with merchants and other users appropriately</li>
                    <li>Providing feedback and reviews in good faith</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-foreground">Prohibited Activities</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">You agree not to:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-6 leading-relaxed">
                    <li>Violate any applicable laws or regulations</li>
                    <li>Infringe on intellectual property rights</li>
                    <li>Transmit harmful or malicious code</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>Interfere with the proper functioning of our Platform</li>
                    <li>Use automated systems to access our Platform without permission</li>
                    <li>Impersonate others or provide false information</li>
                    <li>Engage in fraudulent or deceptive practices</li>
                    <li>Spam or send unsolicited communications</li>
                    <li>Harass, abuse, or harm other users</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Content and Intellectual Property */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
                <Shield className="h-6 w-6 text-primary" />
                Content and Intellectual Property
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">Our Content</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    All content on our Platform, including text, graphics, logos, images, and software, is owned by CariGo Enterprise or our licensors and is protected by copyright, trademark, and other intellectual property laws.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">User Content</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    You retain ownership of content you submit to our Platform. However, by submitting content, you grant us a non-exclusive, royalty-free, worldwide license to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-6 leading-relaxed">
                    <li>Use, reproduce, and distribute your content on our Platform</li>
                    <li>Modify and adapt your content as necessary</li>
                    <li>Display your content to other users</li>
                    <li>Use your content for promotional purposes</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">Third-Party Content</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our Platform may contain content from third parties, including merchants and other users. We do not control or endorse such content and are not responsible for its accuracy or legality.
                  </p>
                </div>
              </div>
            </section>

            {/* Privacy and Data Protection */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
                <Shield className="h-6 w-6 text-primary" />
                Privacy and Data Protection
              </h2>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Your privacy is important to us. Our collection, use, and protection of your personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                By using our Services, you consent to the collection and use of your information as described in our Privacy Policy. We implement appropriate security measures to protect your personal information, but no system is completely secure.
              </p>
            </section>

            {/* Payment Terms */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-primary" />
                Payment Terms
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">Payment Processing</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Payments for products and services are processed through secure third-party payment processors. We do not store your payment information on our servers.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">Pricing and Fees</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    All prices are displayed in Brunei Dollars (BND) and are subject to change without notice. Additional fees may apply for certain services or transactions.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">Refunds and Cancellations</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Refund and cancellation policies vary by merchant and product type. Please review the specific terms for each purchase. We will assist in resolving disputes when possible.
                  </p>
                </div>
              </div>
            </section>

            {/* Disclaimers and Limitations */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
                <AlertTriangle className="h-6 w-6 text-primary" />
                Disclaimers and Limitations of Liability
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">Service Availability</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We strive to provide continuous service availability, but we do not guarantee uninterrupted access to our Platform. We may suspend or modify our services for maintenance, updates, or other reasons.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">Accuracy of Information</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    While we make every effort to ensure the accuracy of information on our Platform, we cannot guarantee that all product information, prices, and availability are current or accurate.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">Limitation of Liability</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    To the maximum extent permitted by law, CariGo Enterprise shall not be liable for:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-6 leading-relaxed">
                    <li>Indirect, incidental, or consequential damages</li>
                    <li>Loss of profits, data, or business opportunities</li>
                    <li>Damages resulting from third-party actions</li>
                    <li>Damages exceeding the amount paid for our services</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">Third-Party Services</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our Platform may integrate with third-party services. We are not responsible for the availability, content, or practices of such third-party services.
                  </p>
                </div>
              </div>
            </section>

            {/* Indemnification */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
                <XCircle className="h-6 w-6 text-primary" />
                Indemnification
              </h2>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                You agree to indemnify, defend, and hold harmless CariGo Enterprise and its officers, directors, employees, and agents from and against any claims, damages, losses, costs, and expenses (including reasonable attorneys' fees) arising from:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-6 leading-relaxed">
                <li>Your use of our Platform</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any third-party rights</li>
                <li>Content you submit to our Platform</li>
                <li>Your violation of applicable laws</li>
              </ul>
            </section>

            {/* Termination */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
                <XCircle className="h-6 w-6 text-primary" />
                Termination
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">Termination by You</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    You may terminate your account at any time by contacting us or using the account deletion feature in your account settings.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">Termination by Us</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We may terminate or suspend your account immediately, without prior notice, for any reason, including violation of these Terms.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">Effect of Termination</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Upon termination, your right to use our Platform ceases immediately. Provisions of these Terms that by their nature should survive termination shall remain in effect.
                  </p>
                </div>
              </div>
            </section>

            {/* Governing Law */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
                <Scale className="h-6 w-6 text-primary" />
                Governing Law and Dispute Resolution
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">Governing Law</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    These Terms are governed by and construed in accordance with the laws of Brunei Darussalam, without regard to conflict of law principles.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">Dispute Resolution</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Any disputes arising from these Terms or your use of our Platform shall be resolved through binding arbitration in accordance with the rules of the Brunei Darussalam Arbitration Centre.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    You waive any right to participate in class action lawsuits or class-wide arbitration against us.
                  </p>
                </div>
              </div>
            </section>

            {/* Changes to Terms */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
                <FileText className="h-6 w-6 text-primary" />
                Changes to Terms
              </h2>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify you of any material changes by posting the updated Terms on our Platform and updating the "Last updated" date.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Your continued use of our Platform after any changes to these Terms constitutes your acceptance of the updated Terms. If you do not agree to the updated Terms, you must stop using our Platform.
              </p>
            </section>

            {/* Contact Information */}
            <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 border-2 border-primary/30 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                Contact Information
              </h2>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                For questions about these Terms of Service, please contact us:
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email:</h3>
                  <button 
                    onClick={handleEmailClick}
                    className="text-primary hover:text-primary/80 transition-colors underline"
                  >
                    legal@carigo.bn
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