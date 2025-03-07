
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RegisterForm from "@/components/RegisterForm";
import { Separator } from "@/components/ui/separator";

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold">Alumni Registration</h1>
            <p className="text-muted-foreground mt-2">
              Join the GMIT Alumni Network to stay connected with your alma mater
            </p>
          </div>
          
          <Separator className="my-6" />
          
          <div className="bg-card shadow-card rounded-lg p-6 md:p-8">
            <RegisterForm />
          </div>
          
          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>By registering, you agree to our Terms of Service and Privacy Policy.</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Register;
