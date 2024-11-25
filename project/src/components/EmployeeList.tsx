import { Mail, Phone, Briefcase } from 'lucide-react';
import type { Employee } from '../types';

interface EmployeeListProps {
  employees: Employee[];
  onEdit?: (employee: Employee) => void;
  onDelete?: (id: string) => void;
}

export default function EmployeeList({
  employees,
  onEdit,
  onDelete,
}: EmployeeListProps) {
  return (
    <div className="A">
      {employees.map((employee) => (
        <div
          key={employee.f_Id}
          className="B"
        >
          <div className="r">
            <img
              src={employee.f_Image || 'https://source.unsplash.com/random/400x200'}
              alt={employee.f_Name}
              className="w-full h-full object-cover"
            />
            <div className="inset" />
            <div className="abs">
              <h3 className="txt">{employee.f_Name}</h3>
              <p className="text-white/90">{employee.f_Designation}</p>
            </div>
          </div>

          <div className="p">
            <div className="k">
              <Mail className="h" />
              <span className="text-sm">{employee.f_Email}</span>
            </div>
            <div className="y">
              <Phone className="h-4 w-4" />
              <span className="text-sm">{employee.f_Mobile}</span>
            </div>
            <div className="y">
              <Briefcase className="h-4 w-4" />
              <span className="text-sm">{employee.f_Designation}</span>
            </div>

            <div className="flex">
              {onEdit && (
                <button
                  onClick={() => onEdit(employee)}
                  className="C"
                >
                  Edit
                </button>
              )}
              {onDelete && (
                <button
                  onClick={() => onDelete(employee.f_Id)}
                  className="D"
                >
                  Delete
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}