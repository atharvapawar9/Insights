import React, { useState, useMemo } from 'react';
import { Search, Filter, Menu, User } from 'lucide-react';
import { getInsights, getAllCompanies, getUniqueValues } from './utils/dataLoader';
import InsightCard from './components/InsightCard';
import Filters from './components/Filters';
import CompanySelector from './components/CompanySelector';

function App() {
  const allCompanies = getAllCompanies();
  const [selectedCompany, setSelectedCompany] = useState('tesla');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter State
  const [activeFilters, setActiveFilters] = useState({
    strategicBin: [],
    impactLevel: [],
    horizon: [],
    roles: []
  });

  // Load Insights
  const insights = useMemo(() => getInsights(selectedCompany), [selectedCompany]);

  // Derived Filters
  const availableFilters = useMemo(() => ({
    strategicBin: getUniqueValues(insights, 'strategicBin'),
    horizon: getUniqueValues(insights, 'horizon'),
    roles: getUniqueValues(insights, 'roles')
  }), [insights]);

  const handleCompanyChange = (company) => {
    setSelectedCompany(company);
    setActiveFilters({
      strategicBin: [],
      impactLevel: [],
      horizon: [],
      roles: []
    });
    setSearchQuery('');
  };

  const handleFilterChange = (category, values) => {
    setActiveFilters(prev => ({ ...prev, [category]: values }));
  };

  const clearAllFilters = () => {
    setActiveFilters({
      strategicBin: [],
      impactLevel: [],
      horizon: [],
      roles: []
    });
    setSearchQuery('');
  };

  // Filtering Logic
  const filteredInsights = useMemo(() => {
    return insights.filter(insight => {
      // Search
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch = !searchQuery || 
        insight.title.toLowerCase().includes(searchLower) || 
        insight.summary.toLowerCase().includes(searchLower);

      if (!matchesSearch) return false;

      // Strategic Bin
      if (activeFilters.strategicBin.length > 0 && !activeFilters.strategicBin.includes(insight.strategicBin)) {
        return false;
      }

      // Time Horizon
      if (activeFilters.horizon.length > 0 && !activeFilters.horizon.includes(insight.horizon)) {
        return false;
      }

      // Roles (Array intersection)
      if (activeFilters.roles.length > 0) {
        const hasRole = insight.roles.some(role => activeFilters.roles.includes(role));
        if (!hasRole) return false;
      }

      // Impact Level
      if (activeFilters.impactLevel.length > 0) {
        let level = 'Low';
        if (insight.impactScore >= 8.5) level = 'High';
        else if (insight.impactScore >= 7.0) level = 'Medium';
        
        if (!activeFilters.impactLevel.includes(level)) return false;
      }

      return true;
    });
  }, [insights, activeFilters, searchQuery]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Top Navigation */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-4">
              <div className="bg-slate-900 p-2">
                <Filter className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold tracking-tighter text-slate-900 uppercase">
                Insight<span className="font-light">Intelligence</span>
              </h1>
            </div>
            
            <div className="flex items-center gap-4">
               <div className="hidden md:flex items-center px-4 py-2 bg-slate-50 border border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-900">
                  <User className="w-3 h-3 mr-2" />
                  John Doe (Head of Strategy)
               </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
           {/* Company Selector */}
           <div className="w-full md:w-auto z-20">
             <CompanySelector 
                companies={allCompanies} 
                selectedCompany={selectedCompany} 
                onSelect={handleCompanyChange} 
             />
           </div>

           {/* Search Bar */}
           <div className="relative w-full md:w-96">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-slate-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-3 border border-slate-200 leading-5 bg-white placeholder-slate-400 focus:outline-none focus:bg-white focus:border-slate-900 focus:ring-0 sm:text-sm text-slate-900 transition duration-150 ease-in-out font-mono"
                placeholder="Search insights..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
           </div>
           
           <button 
             className="md:hidden flex items-center px-4 py-2 border border-slate-300 text-sm font-bold text-slate-900 bg-white hover:bg-slate-50 uppercase tracking-wider"
             onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
           >
             <Filter className="w-4 h-4 mr-2" />
             Filters
           </button>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Sidebar Filters */}
          <div className={`${mobileFiltersOpen ? 'block' : 'hidden'} md:block w-full md:w-64 shrink-0`}>
             <Filters 
                filters={availableFilters} 
                activeFilters={activeFilters} 
                onFilterChange={handleFilterChange}
                onClearAll={clearAllFilters}
             />
          </div>

          {/* Results Grid */}
          <div className="flex-1">
             <div className="mb-8 flex items-end justify-between border-b border-slate-200 pb-4">
                <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
                  Insights found
                </h2>
                <div className="text-sm text-slate-500 font-mono">
                   FILTERED BY: <span className="font-bold text-slate-900 uppercase">{selectedCompany}</span>
                </div>
             </div>
             
             {filteredInsights.length > 0 ? (
               <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                 {filteredInsights.map(insight => (
                   <InsightCard key={insight.id} insight={insight} />
                 ))}
               </div>
             ) : (
               <div className="text-center py-24 bg-slate-50 border border-slate-200 border-dashed">
                  <Filter className="mx-auto h-12 w-12 text-slate-300 mb-4" />
                  <h3 className="text-lg font-bold text-slate-900 uppercase tracking-widest">No insights found</h3>
                  <p className="mt-2 text-sm text-slate-500 font-mono">Try adjusting your filters or search query.</p>
                  <button 
                    onClick={clearAllFilters}
                    className="mt-6 px-6 py-3 border border-slate-900 text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 uppercase tracking-wider transition-colors"
                  >
                    Clear all filters
                  </button>
               </div>
             )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
