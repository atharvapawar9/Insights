import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Search } from 'lucide-react';

const CompanySelector = ({ companies, selectedCompany, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredCompanies = companies.filter(c => 
    c.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (company) => {
    onSelect(company);
    setIsOpen(false);
    setSearchTerm('');
  };

  return (
    <div className="relative w-full md:w-72" ref={dropdownRef}>
      <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
        Select Organization
      </label>
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-4 py-3 bg-white border border-slate-300 cursor-pointer hover:border-slate-900 transition-colors"
      >
        <span className="font-bold text-slate-900 uppercase tracking-wide">
          {selectedCompany}
        </span>
        <ChevronDown size={16} className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </div>

      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-slate-900 shadow-xl">
          <div className="p-2 border-b border-slate-100">
            <div className="flex items-center px-2 py-1 bg-slate-50 border border-slate-200">
              <Search size={14} className="text-slate-400 mr-2" />
              <input
                type="text"
                className="w-full bg-transparent text-sm font-medium focus:outline-none"
                placeholder="Find company..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                autoFocus
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
          <div className="max-h-60 overflow-y-auto">
            {filteredCompanies.length > 0 ? (
              filteredCompanies.map((company) => (
                <div
                  key={company}
                  onClick={() => handleSelect(company)}
                  className={`
                    px-4 py-3 cursor-pointer text-sm font-bold uppercase tracking-wide transition-colors
                    ${selectedCompany === company ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}
                  `}
                >
                  {company}
                </div>
              ))
            ) : (
              <div className="px-4 py-3 text-sm text-slate-400 italic">
                No companies found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanySelector;
