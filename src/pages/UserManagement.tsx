
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "@/components/AdminSidebar";
import UserTable from "@/components/UserTable";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SearchIcon, Download, Upload, Filter } from "lucide-react";
import { mockAlumniData } from "@/lib/mockData";

const UserManagement = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(mockAlumniData);

  useEffect(() => {
    // Check if user is authenticated
    const isAuthenticated = localStorage.getItem("adminAuth") === "true";
    if (!isAuthenticated) {
      navigate("/admin/login");
      return;
    }
    
    setIsLoading(false);
  }, [navigate]);

  useEffect(() => {
    if (searchQuery) {
      const lowercasedQuery = searchQuery.toLowerCase();
      const filtered = mockAlumniData.filter(user => 
        user.name.toLowerCase().includes(lowercasedQuery) || 
        user.email.toLowerCase().includes(lowercasedQuery) ||
        user.batch.toString().includes(lowercasedQuery) ||
        user.department.toLowerCase().includes(lowercasedQuery)
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(mockAlumniData);
    }
  }, [searchQuery]);

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar activePage="users" />
      
      <div className="flex-1 p-6 lg:p-10 overflow-auto">
        <h1 className="text-2xl font-bold mb-6">User Management</h1>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Alumni Database</CardTitle>
            <CardDescription>
              View and manage all registered alumni members
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search by name, email, batch, or department..." 
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="gap-2">
                  <Download className="h-4 w-4" />
                  Export
                </Button>
                <Button variant="outline" className="gap-2">
                  <Upload className="h-4 w-4" />
                  Import
                </Button>
              </div>
            </div>
            
            <UserTable data={filteredData} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserManagement;
