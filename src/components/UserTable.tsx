
import { useState } from "react";
import {
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  XCircle,
  Filter,
  Download,
  Search,
  Eye,
  Edit,
  Trash2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface User {
  id: string;
  name: string;
  email: string;
  graduationYear: string;
  department: string;
  paymentStatus: "paid" | "pending" | "failed";
  registrationDate: string;
}

// Mock data for development
const initialUsers: User[] = [
  {
    id: "1",
    name: "Rahul Sharma",
    email: "rahul.sharma@example.com",
    graduationYear: "2022",
    department: "Computer Science & Engineering",
    paymentStatus: "paid",
    registrationDate: "2023-06-15",
  },
  {
    id: "2",
    name: "Priya Patel",
    email: "priya.patel@example.com",
    graduationYear: "2021",
    department: "Information Technology",
    paymentStatus: "paid",
    registrationDate: "2023-06-10",
  },
  {
    id: "3",
    name: "Amit Kumar",
    email: "amit.kumar@example.com",
    graduationYear: "2020",
    department: "Electrical Engineering",
    paymentStatus: "pending",
    registrationDate: "2023-06-05",
  },
  {
    id: "4",
    name: "Sneha Gupta",
    email: "sneha.gupta@example.com",
    graduationYear: "2019",
    department: "Civil Engineering",
    paymentStatus: "failed",
    registrationDate: "2023-05-28",
  },
  {
    id: "5",
    name: "Raj Malhotra",
    email: "raj.malhotra@example.com",
    graduationYear: "2022",
    department: "Mechanical Engineering",
    paymentStatus: "paid",
    registrationDate: "2023-05-20",
  },
  {
    id: "6",
    name: "Neha Singh",
    email: "neha.singh@example.com",
    graduationYear: "2021",
    department: "Computer Science & Engineering",
    paymentStatus: "paid",
    registrationDate: "2023-05-15",
  },
  {
    id: "7",
    name: "Vikram Desai",
    email: "vikram.desai@example.com",
    graduationYear: "2020",
    department: "Information Technology",
    paymentStatus: "pending",
    registrationDate: "2023-05-10",
  },
  {
    id: "8",
    name: "Ananya Reddy",
    email: "ananya.reddy@example.com",
    graduationYear: "2019",
    department: "Electronics & Communication Engineering",
    paymentStatus: "paid",
    registrationDate: "2023-05-05",
  },
];

const UserTable = () => {
  const [users] = useState<User[]>(initialUsers);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [viewUserDialogOpen, setViewUserDialogOpen] = useState(false);
  
  const itemsPerPage = 5;
  
  // Filter users based on search term
  const filteredUsers = users.filter((user) => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.department.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Calculate pagination
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedUsers = filteredUsers.slice(startIndex, startIndex + itemsPerPage);
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  
  const handleViewUser = (user: User) => {
    setSelectedUser(user);
    setViewUserDialogOpen(true);
  };
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page on search
  };
  
  return (
    <>
      <div className="bg-white rounded-xl shadow-sm border border-border/50 overflow-hidden">
        <div className="p-4 border-b border-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h3 className="text-lg font-semibold">Registered Alumni</h3>
          
          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <div className="relative flex-grow sm:flex-grow-0 sm:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search alumni..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="pl-8 h-9"
              />
            </div>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="h-9 w-9 p-0">
                  <Filter className="h-4 w-4" />
                  <span className="sr-only">Filter</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>Filter By</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Payment Status</DropdownMenuItem>
                <DropdownMenuItem>Department</DropdownMenuItem>
                <DropdownMenuItem>Graduation Year</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button variant="outline" size="sm" className="h-9">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-border">
            <thead className="bg-muted/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Department
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Year
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Payment
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Registration Date
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-border">
              {paginatedUsers.map((user) => (
                <tr key={user.id} className="hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div>
                        <div className="font-medium text-sm">{user.name}</div>
                        <div className="text-xs text-muted-foreground">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm">{user.department}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm">{user.graduationYear}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge 
                      variant={
                        user.paymentStatus === "paid" 
                          ? "default" 
                          : user.paymentStatus === "pending" 
                            ? "outline" 
                            : "destructive"
                      }
                      className={cn(
                        "font-normal",
                        user.paymentStatus === "pending" && "border-amber-500 text-amber-600",
                      )}
                    >
                      {user.paymentStatus === "paid" && (
                        <CheckCircle2 className="mr-1 h-3 w-3" />
                      )}
                      {user.paymentStatus === "pending" && (
                        <div className="mr-1 h-3 w-3 rounded-full bg-amber-500" />
                      )}
                      {user.paymentStatus === "failed" && (
                        <XCircle className="mr-1 h-3 w-3" />
                      )}
                      {user.paymentStatus.charAt(0).toUpperCase() + user.paymentStatus.slice(1)}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm">{new Date(user.registrationDate).toLocaleDateString()}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => handleViewUser(user)}>
                          <Eye className="mr-2 h-4 w-4" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))}
              
              {/* Empty state */}
              {paginatedUsers.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-10 text-center">
                    <div className="text-muted-foreground">No alumni found</div>
                    {searchTerm && (
                      <div className="text-sm mt-2">
                        Try adjusting your search for better results
                      </div>
                    )}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        {filteredUsers.length > 0 && (
          <div className="px-6 py-3 flex items-center justify-between border-t border-border">
            <div className="text-sm text-muted-foreground">
              Showing <span className="font-medium">{startIndex + 1}</span> to{" "}
              <span className="font-medium">
                {Math.min(startIndex + itemsPerPage, filteredUsers.length)}
              </span>{" "}
              of <span className="font-medium">{filteredUsers.length}</span> results
            </div>
            
            <nav className="flex items-center space-x-1">
              <Button
                variant="outline"
                size="sm"
                className="h-8 w-8 p-0"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous page</span>
              </Button>
              
              {Array.from({ length: totalPages }).map((_, index) => {
                const page = index + 1;
                // Show current page and 1 page before and after
                if (
                  page === 1 ||
                  page === totalPages ||
                  (page >= currentPage - 1 && page <= currentPage + 1)
                ) {
                  return (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={() => handlePageChange(page)}
                    >
                      {page}
                    </Button>
                  );
                }
                // Show ellipsis
                if (
                  (page === 2 && currentPage > 3) ||
                  (page === totalPages - 1 && currentPage < totalPages - 2)
                ) {
                  return (
                    <span
                      key={page}
                      className="h-8 w-8 flex items-center justify-center text-muted-foreground"
                    >
                      ...
                    </span>
                  );
                }
                return null;
              })}
              
              <Button
                variant="outline"
                size="sm"
                className="h-8 w-8 p-0"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next page</span>
              </Button>
            </nav>
          </div>
        )}
      </div>
      
      {/* View User Dialog */}
      <Dialog open={viewUserDialogOpen} onOpenChange={setViewUserDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Alumni Details</DialogTitle>
          </DialogHeader>
          
          {selectedUser && (
            <div className="space-y-4">
              <div className="border rounded-lg p-4 space-y-3">
                <div className="flex flex-col">
                  <span className="text-xs text-muted-foreground">Name</span>
                  <span className="font-medium">{selectedUser.name}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-muted-foreground">Email</span>
                  <span>{selectedUser.email}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-muted-foreground">Department</span>
                  <span>{selectedUser.department}</span>
                </div>
                <div className="flex justify-between">
                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground">Graduation Year</span>
                    <span>{selectedUser.graduationYear}</span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-xs text-muted-foreground">Payment Status</span>
                    <Badge 
                      variant={
                        selectedUser.paymentStatus === "paid" 
                          ? "default" 
                          : selectedUser.paymentStatus === "pending" 
                            ? "outline" 
                            : "destructive"
                      }
                      className={cn(
                        "font-normal mt-1",
                        selectedUser.paymentStatus === "pending" && "border-amber-500 text-amber-600",
                      )}
                    >
                      {selectedUser.paymentStatus === "paid" && (
                        <CheckCircle2 className="mr-1 h-3 w-3" />
                      )}
                      {selectedUser.paymentStatus === "pending" && (
                        <div className="mr-1 h-3 w-3 rounded-full bg-amber-500" />
                      )}
                      {selectedUser.paymentStatus === "failed" && (
                        <XCircle className="mr-1 h-3 w-3" />
                      )}
                      {selectedUser.paymentStatus.charAt(0).toUpperCase() + selectedUser.paymentStatus.slice(1)}
                    </Badge>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setViewUserDialogOpen(false)}>
                  Close
                </Button>
                <Button>
                  <Edit className="mr-2 h-4 w-4" />
                  Edit
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UserTable;
