import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Filter } from 'lucide-react';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // No auth logic needed, just redirect
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center items-center gap-2 mb-6">
            <div className="bg-slate-900 p-2 rounded-sm shadow-sm">
                <Filter className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold tracking-tighter text-slate-900 uppercase">
                Insight<span className="font-light">Lens</span>
            </h2>
        </div>
        <h2 className="mt-2 text-center text-sm font-bold text-slate-500 tracking-wider uppercase">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-xl border border-slate-100 sm:rounded-none sm:px-10">
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-3 border border-slate-300 rounded-none shadow-sm placeholder-slate-400 focus:outline-none focus:ring-slate-900 focus:border-slate-900 sm:text-sm"
                  defaultValue="demo@insightlens.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-3 py-3 border border-slate-300 rounded-none shadow-sm placeholder-slate-400 focus:outline-none focus:ring-slate-900 focus:border-slate-900 sm:text-sm"
                  defaultValue="demo123"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-slate-900 focus:ring-slate-900 border-slate-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-xs text-slate-500 font-medium">
                  Remember me
                </label>
              </div>

              <div className="text-xs">
                <a href="#" className="font-medium text-slate-600 hover:text-slate-900 underline">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-none shadow-sm text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 uppercase tracking-widest transition-colors"
              >
                Sign in
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-2 bg-white text-slate-500 uppercase tracking-wider">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div>
                <a
                  href="#"
                  className="w-full inline-flex justify-center py-2.5 px-4 border border-slate-300 rounded-none shadow-sm bg-white text-xs font-medium text-slate-500 hover:bg-slate-50 uppercase tracking-wide"
                >
                  <span className="sr-only">Sign in with Twitter</span>
                  Google
                </a>
              </div>

              <div>
                <a
                  href="#"
                  className="w-full inline-flex justify-center py-2.5 px-4 border border-slate-300 rounded-none shadow-sm bg-white text-xs font-medium text-slate-500 hover:bg-slate-50 uppercase tracking-wide"
                >
                  <span className="sr-only">Sign in with GitHub</span>
                  Microsoft
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-4 text-center text-xs text-slate-400">
             Using demo account: <span className="font-mono text-slate-600">demo@insightlens.com</span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
