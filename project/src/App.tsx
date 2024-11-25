import { useState } from 'react';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import type { Employee, LoginCredentials } from './types';

const MOCK_EMPLOYEES: Employee[] = [
  {
    f_Id: '1',
    f_Name: 'hukum',
    f_Email: 'hcgupta@cstech.in',
    f_Mobile: '954010044',
    f_Designation: 'HR',
    f_Image: '',
  },
  {
    f_Id: '2',
    f_Name: 'manish',
    f_Email: 'manish@cstech.in',
    f_Mobile: '954010033',
    f_Designation: 'Sales',
    f_Image: '',
  },
  {
    f_Id: '3',
    f_Name: 'yash',
    f_Email: 'yash@cstech.in',
    f_Mobile: '954010022',
    f_Designation: 'Manager',
    f_Image: '',
  },
  {
    f_Id: '4',
    f_Name: 'abhishek',
    f_Email: 'abhishek@cstech.in',
    f_Mobile: '954010033',
    f_Designation: 'HR',
    f_Image: '',
  },
];

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (credentials: LoginCredentials) => {
    setIsLoading(true);
    // Simulate API call
    console.log('Logging in with credentials:', credentials);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsAuthenticated(true);
    setIsLoading(false);
  };
<hr></hr>
  const handleEdit = (employee: Employee) => {
    console.log('Edit employee:', employee);
  };

  const handleDelete = (id: string) => {
    console.log('Delete employee:', id);
  };
<hr></hr>

  if (!isAuthenticated) {
    return <LoginForm onLogin={handleLogin} isLoading={isLoading} />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="z">
          <h1 className="j">Welcome Admin panel</h1>
        </div>
      </header>
      <main>
        <div className="z">
          <EmployeeList
            employees={MOCK_EMPLOYEES}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>
      </main>
    </div>
  );
}

export default App;

