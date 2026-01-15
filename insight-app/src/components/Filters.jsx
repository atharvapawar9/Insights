import React from 'react';
import { X } from 'lucide-react';

const content = {
    strategicBin: "Strategic Bin",
    impactLevel: "Impact Level", // Note: JSON uses impactScore (number), maybe map to High/Med/Low? Or use numeric ranges? 
    // Requirement says: Impact Level (High / Medium / Low). 
    // Data has impactScore. I need to map it or data might have another field?
    // Checking data: "impactScore": 9.2. No explicit level. I will map scores to levels in the Filter logic or Data Loader.
    // Wait, the prompt says "Impact Level (High / Medium / Low)". InsightCard logic uses Score.
    // I should probably synthesize "Impact Level" from score or if it's missing, use score.
    // Actually, I'll filter by Impact Level buckets: High (8.5+), Medium (7.0-8.4), Low (<7.0).
    
    // Let's implement generic Filter Group first.
};

const FilterSection = ({ title, options, selected, onChange, multi = false }) => {
    if (!options || options.length === 0) return null;

    return (
        <div className="mb-6">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">{title}</h3>
            <div className="space-y-2">
                {options.map((option) => {
                     const isSelected = multi ? selected.includes(option) : selected === option;
                     return (
                        <label key={option} className="flex items-center space-x-3 cursor-pointer group">
                            <div className={`
                                w-4 h-4 border flex items-center justify-center transition-colors duration-200
                                ${isSelected ? 'bg-slate-900 border-slate-900' : 'border-slate-300 group-hover:border-slate-500'}
                            `}>
                                {isSelected && <div className="w-2 h-2 bg-white" />}
                            </div>
                            <span className={`text-sm ${isSelected ? 'text-slate-900 font-bold' : 'text-slate-600 group-hover:text-slate-900'}`}>
                                {option}
                            </span>
                             {/* Hidden input for semantics if needed, but div logic works for custom styling */}
                             <input 
                                type="checkbox" 
                                className="hidden"
                                checked={isSelected}
                                onChange={() => onChange(option, !isSelected)} // Toggle generic
                             />
                        </label>
                     );
                })}
            </div>
        </div>
    );
};

const Filters = ({ filters, activeFilters, onFilterChange, onClearAll }) => {
    // Helper to toggle multi-select values
    const handleMultiChange = (category, value) => {
        const current = activeFilters[category] || [];
        const newValues = current.includes(value)
            ? current.filter(v => v !== value)
            : [...current, value];
        onFilterChange(category, newValues);
    };

    // Helper for single select (or treating multi as toggle)
    // The requirement says "Filters should be combinable". Usually strategic bins are one-or-many?
    // "Users must be able to filter insights using multiple bins... Filters should be combinable"
    // So Multi-select for everything is safest.

    return (
        <div className="w-64 shrink-0 pr-6 border-r border-slate-200 h-full overflow-y-auto hidden md:block">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-bold text-slate-900">Filters</h2>
                {(Object.values(activeFilters).some(v => v.length > 0)) && (
                    <button 
                        onClick={onClearAll}
                        className="text-xs text-slate-500 hover:text-red-600 flex items-center"
                    >
                        <X size={12} className="mr-1" /> Clear
                    </button>
                )}
            </div>

            <FilterSection 
                title="Strategic Bin" 
                options={filters.strategicBin} 
                selected={activeFilters.strategicBin || []} 
                onChange={(val) => handleMultiChange('strategicBin', val)} 
                multi 
            />

             {/* Functional Bin was in data, maybe use as well? Or just 'Tags'? 
                 Data has 'functionalBin', 'roles', 'strategicBin'.
                 Prompt asks for: Strategic Bin, Impact Level, Time Horizon, Role, Tags.
             */}
             
            <FilterSection 
                title="Impact Level" 
                options={['High', 'Medium', 'Low']} 
                selected={activeFilters.impactLevel || []} 
                onChange={(val) => handleMultiChange('impactLevel', val)}
                multi
            />

            <FilterSection 
                title="Time Horizon" 
                options={filters.horizon} 
                selected={activeFilters.horizon || []} 
                onChange={(val) => handleMultiChange('horizon', val)}
                multi
            />

            <FilterSection 
                title="Roles" 
                options={filters.roles} 
                selected={activeFilters.roles || []} 
                onChange={(val) => handleMultiChange('roles', val)}
                multi
            />
        </div>
    );
};

export default Filters;
