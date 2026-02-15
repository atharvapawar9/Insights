import React from 'react';
import { Link } from 'react-router-dom';
import { Filter, TrendingUp, ShieldCheck, Zap, ArrowRight } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
      {/* Navigation */}
      <nav className="border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="bg-slate-900 p-1.5 rounded-none shadow-sm">
                <Filter className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tighter text-slate-900 uppercase">
                Insight<span className="font-light">Lens</span>
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="text-xs font-bold uppercase tracking-wide text-slate-600 hover:text-slate-900 transition-colors"
              >
                Sign In
              </Link>
              <Link
                to="/login"
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-xs font-bold uppercase tracking-widest text-white bg-slate-900 hover:bg-slate-800 rounded-none transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-grow">
        <div className="relative bg-white border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                    <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                        <div className="inline-flex items-center px-3 py-1 rounded-none border border-slate-200 bg-slate-50 text-xs font-bold uppercase tracking-widest text-slate-600 mb-6">
                            <span className="flex h-2 w-2 rounded-full bg-slate-900 mr-2"></span>
                            Now Available in Beta
                        </div>
                        <h1 className="text-4xl tracking-tighter font-extrabold text-slate-900 sm:text-5xl md:text-6xl uppercase">
                            <span className="block xl:inline">Financial Data</span>{' '}
                            <span className="block text-slate-400 xl:inline">Reimagined</span>
                        </h1>
                        <p className="mt-3 text-base text-slate-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 font-light">
                            Unlock the power of your financial data with InsightLens. 
                            Advanced analytics, real-time tracking, and predictive modeling 
                            designed for the modern enterprise.
                        </p>
                        <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                            <Link
                                to="/login"
                                className="inline-flex items-center px-8 py-3 border border-transparent text-sm font-bold uppercase tracking-widest text-white bg-slate-900 hover:bg-slate-800 rounded-none md:text-base md:py-4 md:px-10 transition-colors shadow-lg"
                            >
                                Start Analyzing
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                    <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                        <div className="relative mx-auto w-full rounded-none shadow-xl lg:max-w-md bg-slate-50 border border-slate-200 p-8">
                             <div className="space-y-4">
                                <div className="h-2 bg-slate-200 w-3/4"></div>
                                <div className="h-2 bg-slate-200 w-full"></div>
                                <div className="h-2 bg-slate-200 w-5/6"></div>
                                <br />
                                <div className="flex gap-4">
                                     <div className="h-24 w-1/2 bg-slate-200"></div>
                                     <div className="h-24 w-1/2 bg-slate-200"></div>
                                </div>
                                <br />
                                <div className="h-32 bg-slate-200 w-full"></div>
                             </div>
                             <div className="absolute -top-4 -right-4 bg-slate-900 text-white p-4 text-xs font-bold uppercase tracking-widest shadow-lg">
                                Real-time Analysis
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Features Section */}
        <div className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-base font-bold text-slate-900 tracking-wide uppercase">Why Choose InsightLens</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl uppercase">
                Data-Driven Decisions
              </p>
            </div>

            <div className="mt-20">
              <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
                <div className="group">
                    <div className="flex items-center justify-center h-12 w-12 rounded-none bg-slate-900 text-white mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                        <TrendingUp className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg leading-6 font-bold text-slate-900 uppercase tracking-wide">Predictive Analytics</h3>
                    <p className="mt-4 text-base text-slate-500">
                        Forecast future trends with our advanced machine learning algorithms. 
                        Stay ahead of the curve and make proactive decisions.
                    </p>
                </div>

                <div className="group">
                    <div className="flex items-center justify-center h-12 w-12 rounded-none bg-slate-900 text-white mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                        <ShieldCheck className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg leading-6 font-bold text-slate-900 uppercase tracking-wide">Enterprise Security</h3>
                    <p className="mt-4 text-base text-slate-500">
                        Bank-grade encryption and security protocols ensure that your sensitive financial 
                        data remains protected at all times.
                    </p>
                </div>

                <div className="group">
                    <div className="flex items-center justify-center h-12 w-12 rounded-none bg-slate-900 text-white mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                        <Zap className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg leading-6 font-bold text-slate-900 uppercase tracking-wide">Instant Insights</h3>
                    <p className="mt-4 text-base text-slate-500">
                        No more waiting for reports. Get real-time updates and instant visualization 
                        of your key performance indicators.
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Filter className="w-5 h-5 text-slate-400" />
                    <span className="text-lg font-bold tracking-tighter text-slate-50 uppercase">
                        Insight<span className="font-light text-slate-400">Lens</span>
                    </span>
                 </div>
                <p className="text-slate-400 text-xs uppercase tracking-wide">
                    &copy; 2024 InsightLens Inc. All rights reserved.
                </p>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
