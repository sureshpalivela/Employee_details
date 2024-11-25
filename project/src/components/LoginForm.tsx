import React, { useState } from 'react';
import { KeyRound, User } from 'lucide-react';
import type { LoginCredentials } from '../types';

interface LoginFormProps {
  onLogin: (credentials: LoginCredentials) => void;
  isLoading?: boolean;
}

export default function LoginForm({ onLogin, isLoading = false }: LoginFormProps) {
  const [credentials, setCredentials] = useState<LoginCredentials>({
    f_userName: '',
    f_Pwd: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(credentials);
  };

  return (
    <div className="A">
      <div className="B">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Login Page</h1>
          <p className="mt-2 text-gray-600">Please sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <div className="inset">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                required
                className="block"
                placeholder="Username"
                value={credentials.f_userName}
                onChange={(e) =>
                  setCredentials({ ...credentials, f_userName: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <div className="inset">
                <KeyRound className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="password"
                required
                className="block"
                placeholder="Password"
                value={credentials.f_Pwd}
                onChange={(e) =>
                  setCredentials({ ...credentials, f_Pwd: e.target.value })
                }
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="full"
          >
            {isLoading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>
      </div>
    </div>
  );
}