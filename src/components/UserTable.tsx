import { AlumniUser } from "@/lib/mockData";

interface UserTableProps {
  filteredData: AlumniUser[];
}

const UserTable = ({ filteredData }: UserTableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b text-left">
            <th className="px-4 py-3 font-medium">ID</th>
            <th className="px-4 py-3 font-medium">Name</th>
            <th className="px-4 py-3 font-medium">Email</th>
            <th className="px-4 py-3 font-medium">Batch</th>
            <th className="px-4 py-3 font-medium">Department</th>
            <th className="px-4 py-3 font-medium">Registration Date</th>
            <th className="px-4 py-3 font-medium">Payment Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((user) => (
            <tr key={user.id} className="border-b hover:bg-muted/50">
              <td className="px-4 py-3">{user.id}</td>
              <td className="px-4 py-3 font-medium">{user.name}</td>
              <td className="px-4 py-3">{user.email}</td>
              <td className="px-4 py-3">{user.batch}</td>
              <td className="px-4 py-3">{user.department}</td>
              <td className="px-4 py-3">{user.registrationDate}</td>
              <td className="px-4 py-3">
                <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                  user.paymentStatus === 'Paid' ? 'bg-green-100 text-green-800' :
                  user.paymentStatus === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {user.paymentStatus}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
