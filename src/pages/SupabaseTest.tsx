import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Database, 
  CheckCircle2, 
  XCircle, 
  RefreshCw, 
  Send,
  Info 
} from "lucide-react";
import {
  checkEnvVariables, 
  testSupabaseConnection,
  saveContactForm,
  saveCareerApplication,
  saveSupportForm,
  saveInvestmentForm
} from "@/lib/supabase";
import { toast } from "sonner";

export default function SupabaseTest() {
  const [envStatus, setEnvStatus] = useState<boolean | null>(null);
  const [connectionStatus, setConnectionStatus] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  
  // Test form data
  const [testContact, setTestContact] = useState({
    name: 'Test User',
    email: 'test@example.com',
    category: 'general',
    subject: 'Test Subject',
    message: 'This is a test message'
  });

  const [testCareer, setTestCareer] = useState({
    name: 'Test Applicant',
    email: 'applicant@example.com',
    phone: '+1234567890',
    position: 'Test Position',
    experience: 'Test experience',
    motivation: 'Test motivation',
    resume_url: 'https://example.com/resume.pdf'
  });

  const [testSupport, setTestSupport] = useState({
    donation_amount: '100',
    custom_amount: '',
    donor_name: 'Test Donor',
    donor_email: 'donor@example.com',
    donor_phone: '+1234567890',
    donor_message: 'Test donation message'
  });

  const [testInvestment, setTestInvestment] = useState({
    investment_type: 'equity',
    investment_amount: '50000',
    investor_name: 'Test Investor',
    investor_email: 'investor@example.com',
    investor_phone: '+1234567890',
    investor_company: 'Test Company',
    investor_message: 'Test investment message'
  });

  // Check environment variables
  const handleCheckEnv = async () => {
    setIsLoading(true);
    try {
      const status = checkEnvVariables();
      setEnvStatus(status);
      if (status) {
        toast.success('Environment variables are set correctly');
      } else {
        toast.error('Environment variables are missing');
      }
    } catch (error) {
      setEnvStatus(false);
      toast.error('Error checking environment variables');
    } finally {
      setIsLoading(false);
    }
  };

  // Test Supabase connection
  const handleTestConnection = async () => {
    setIsLoading(true);
    setConnectionStatus(null);
    setErrorMessage('');
    try {
      const status = await testSupabaseConnection();
      setConnectionStatus(status);
      if (status) {
        toast.success('Supabase connection successful!');
        setErrorMessage('');
      } else {
        setErrorMessage('Connection failed. Please check the browser console (F12) for details.');
        toast.error('Supabase connection failed - check console for details');
      }
    } catch (error) {
      setConnectionStatus(false);
      const errorMsg = error instanceof Error ? error.message : 'Unknown error';
      setErrorMessage(`Error: ${errorMsg}`);
      toast.error(`Connection error: ${errorMsg}`);
      console.error('Connection test error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Test contact form submission
  const handleTestContact = async () => {
    setIsLoading(true);
    try {
      await saveContactForm(testContact);
      toast.success('Contact form test successful!');
    } catch (error) {
      toast.error('Contact form test failed');
      console.error('Contact test error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Test career application submission
  const handleTestCareer = async () => {
    setIsLoading(true);
    try {
      await saveCareerApplication(testCareer);
      toast.success('Career form test successful!');
    } catch (error) {
      toast.error('Career form test failed');
      console.error('Career test error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Test support form submission
  const handleTestSupport = async () => {
    setIsLoading(true);
    try {
      await saveSupportForm(testSupport);
      toast.success('Support form test successful!');
    } catch (error) {
      toast.error('Support form test failed');
      console.error('Support test error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Test investment form submission
  const handleTestInvestment = async () => {
    setIsLoading(true);
    try {
      await saveInvestmentForm(testInvestment);
      toast.success('Investment form test successful!');
    } catch (error) {
      toast.error('Investment form test failed');
      console.error('Investment test error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-6 w-6 text-primary" />
              Supabase Connection Test
            </CardTitle>
            <CardDescription>
              Test Supabase connection and form submissions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Alert className="mb-4">
              <Info className="h-4 w-4" />
              <AlertDescription>
                This page is only visible in development mode.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Environment Variables Status */}
        <Card>
          <CardHeader>
            <CardTitle>Environment Variables</CardTitle>
            <CardDescription>Check if Supabase environment variables are set correctly</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {envStatus === true && <CheckCircle2 className="h-5 w-5 text-green-500" />}
                {envStatus === false && <XCircle className="h-5 w-5 text-red-500" />}
                <span>Status</span>
              </div>
              <Badge variant={envStatus ? "default" : "destructive"}>
                {envStatus === null ? "Not checked" : envStatus ? "OK" : "Error"}
              </Badge>
            </div>
            <Button 
              onClick={handleCheckEnv} 
              disabled={isLoading}
              variant="outline"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Check Environment Variables
            </Button>
          </CardContent>
        </Card>

        {/* Connection Status */}
        <Card>
          <CardHeader>
            <CardTitle>Supabase Connection Test</CardTitle>
            <CardDescription>Test connection to Supabase database</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {connectionStatus === true && <CheckCircle2 className="h-5 w-5 text-green-500" />}
                {connectionStatus === false && <XCircle className="h-5 w-5 text-red-500" />}
                <span>Status</span>
              </div>
              <Badge variant={connectionStatus ? "default" : "destructive"}>
                {connectionStatus === null ? "Not checked" : connectionStatus ? "Connected" : "Failed"}
              </Badge>
            </div>
            {errorMessage && connectionStatus === false && (
              <Alert variant="destructive">
                <AlertDescription>{errorMessage}</AlertDescription>
              </Alert>
            )}
            <Button 
              onClick={handleTestConnection} 
              disabled={isLoading}
              variant="outline"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Test Connection
            </Button>
          </CardContent>
        </Card>

        {/* Contact Form Test */}
        <Card>
          <CardHeader>
            <CardTitle>Contact Form Test</CardTitle>
            <CardDescription>Test contact form submission</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              placeholder="Name"
              value={testContact.name}
              onChange={(e) => setTestContact({ ...testContact, name: e.target.value })}
            />
            <Input
              placeholder="Email"
              value={testContact.email}
              onChange={(e) => setTestContact({ ...testContact, email: e.target.value })}
            />
            <Input
              placeholder="Subject"
              value={testContact.subject}
              onChange={(e) => setTestContact({ ...testContact, subject: e.target.value })}
            />
            <Textarea
              placeholder="Message"
              value={testContact.message}
              onChange={(e) => setTestContact({ ...testContact, message: e.target.value })}
            />
            <Button
              onClick={handleTestContact} 
              disabled={isLoading}
              className="w-full"
            >
              <Send className="h-4 w-4 mr-2" />
              Test Contact Form
            </Button>
          </CardContent>
        </Card>

        {/* Career Form Test */}
        <Card>
          <CardHeader>
            <CardTitle>Career Form Test</CardTitle>
            <CardDescription>Test career application form submission</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              placeholder="Name"
              value={testCareer.name}
              onChange={(e) => setTestCareer({ ...testCareer, name: e.target.value })}
            />
            <Input
              placeholder="Email"
              value={testCareer.email}
              onChange={(e) => setTestCareer({ ...testCareer, email: e.target.value })}
            />
            <Input
              placeholder="Phone"
              value={testCareer.phone}
              onChange={(e) => setTestCareer({ ...testCareer, phone: e.target.value })}
            />
            <Input
              placeholder="Position"
              value={testCareer.position}
              onChange={(e) => setTestCareer({ ...testCareer, position: e.target.value })}
            />
            <Button 
              onClick={handleTestCareer} 
              disabled={isLoading}
              className="w-full"
            >
              <Send className="h-4 w-4 mr-2" />
              Test Career Form
            </Button>
          </CardContent>
        </Card>

        {/* Support Form Test */}
        <Card>
          <CardHeader>
            <CardTitle>Support Form Test</CardTitle>
            <CardDescription>Test support/donation form submission</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              placeholder="Donation Amount"
              value={testSupport.donation_amount}
              onChange={(e) => setTestSupport({ ...testSupport, donation_amount: e.target.value })}
            />
            <Input
              placeholder="Donor Name"
              value={testSupport.donor_name}
              onChange={(e) => setTestSupport({ ...testSupport, donor_name: e.target.value })}
            />
            <Input
              placeholder="Email"
              value={testSupport.donor_email}
              onChange={(e) => setTestSupport({ ...testSupport, donor_email: e.target.value })}
            />
            <Button 
              onClick={handleTestSupport} 
              disabled={isLoading}
              className="w-full"
            >
              <Send className="h-4 w-4 mr-2" />
              Test Support Form
            </Button>
          </CardContent>
        </Card>

        {/* Investment Form Test */}
        <Card>
          <CardHeader>
            <CardTitle>Investment Form Test</CardTitle>
            <CardDescription>Test investment form submission</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              placeholder="Investment Amount"
              value={testInvestment.investment_amount}
              onChange={(e) => setTestInvestment({ ...testInvestment, investment_amount: e.target.value })}
            />
            <Input
              placeholder="Investor Name"
              value={testInvestment.investor_name}
              onChange={(e) => setTestInvestment({ ...testInvestment, investor_name: e.target.value })}
            />
            <Input
              placeholder="Email"
              value={testInvestment.investor_email}
              onChange={(e) => setTestInvestment({ ...testInvestment, investor_email: e.target.value })}
            />
            <Button 
              onClick={handleTestInvestment} 
              disabled={isLoading}
              className="w-full"
            >
              <Send className="h-4 w-4 mr-2" />
              Test Investment Form
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

