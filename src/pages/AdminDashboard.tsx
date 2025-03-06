
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "@/components/AdminSidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import StatCard from "@/components/StatCard";
import { UserPlus, Users, CreditCard, Calendar } from "lucide-react";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("adminAuth") === "true";
    if (!isAuthenticated) {
      navigate("/admin/login");
      return;
    }
    setIsLoading(false);
  }, [navigate]);

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />
      
      <div className="flex-1 p-6 lg:p-10 overflow-auto">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard 
            icon={<Users className="h-8 w-8 text-primary" />}
            value={1234}
            label="Total Alumni"
          />
          <StatCard 
            icon={<UserPlus className="h-8 w-8 text-green-500" />}
            value={56}
            label="New Registrations"
            suffix="This month"
          />
          <StatCard 
            icon={<CreditCard className="h-8 w-8 text-amber-500" />}
            value={240000}
            label="Registration Fees"
            prefix="₹"
            suffix="This year"
          />
          <StatCard 
            icon={<Calendar className="h-8 w-8 text-blue-500" />}
            value={12}
            label="Upcoming Events"
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Registrations</CardTitle>
              <CardDescription>New alumni registrations in the last 30 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-72 bg-gray-100 rounded flex items-center justify-center">
                Registration Chart Placeholder
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Batch Distribution</CardTitle>
              <CardDescription>Alumni distribution by graduation year</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-72 bg-gray-100 rounded flex items-center justify-center">
                Batch Distribution Chart Placeholder
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
