import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Target, Clock, Zap, FileText } from 'lucide-react';

const InsightCard = ({ insight }) => {
  const [expanded, setExpanded] = useState(false);

  // Helper to determine impact color - Minimalist High Contrast
  const getImpactColor = (score) => {
    if (score >= 8.5) return 'bg-black text-white border-black';
    if (score >= 7.0) return 'bg-white text-slate-900 border-slate-900';
    return 'bg-white text-slate-500 border-slate-300';
  };

  const impactLabel = (score) => {
    if (score >= 8.5) return 'High Impact';
    if (score >= 7.0) return 'Medium Impact';
    return 'Low Impact';
  };

  return (
    <div className="bg-white border border-slate-200 hover:border-slate-900 transition-colors duration-200">
      {/* Header / Primary Content */}
      <div className="p-6 cursor-pointer" onClick={() => setExpanded(!expanded)}>
        <div className="flex justify-between items-start gap-4">
          <div className="flex-1">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="inline-flex items-center px-2 py-0.5 text-xs font-bold uppercase tracking-wider bg-slate-100 text-slate-900">
                <Target className="w-3 h-3 mr-1" />
                {insight.strategicBin}
              </span>
              <span className={`inline-flex items-center px-2 py-0.5 text-xs font-bold uppercase tracking-wider border ${getImpactColor(insight.impactScore)}`}>
                <Zap className="w-3 h-3 mr-1" />
                {impactLabel(insight.impactScore)}
              </span>
              <span className="inline-flex items-center px-2 py-0.5 text-xs font-bold uppercase tracking-wider bg-white text-slate-500 border border-slate-200">
                <Clock className="w-3 h-3 mr-1" />
                {insight.horizon}
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-tight mb-2 font-mono">
              {insight.title}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed max-w-3xl mb-4">
              {insight.summary}
            </p>
            
            {/* key talking point - always visible */}
            <div className="bg-slate-50 border-l-2 border-slate-900 p-3 mt-4">
               <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Conversation Starter</h4>
               <p className="text-slate-900 text-sm font-medium italic">
                 "{insight.talkingPoint}"
               </p>
            </div>
          </div>
          <div className="text-slate-400 mt-1">
            {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>
        </div>
      </div>

      {/* Expanded Content */}
      {expanded && (
        <div className="bg-slate-50 border-t border-slate-200 px-6 py-6 space-y-6">
          
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="block text-xs text-slate-400 font-semibold uppercase mb-1">Source</span>
              <div className="flex items-center text-slate-700">
                <FileText className="w-3.5 h-3.5 mr-2 text-slate-400" />
                {insight.sourceType}
              </div>
            </div>
            <div>
               <span className="block text-xs text-slate-400 font-semibold uppercase mb-1">Confidence</span>
               <span className="text-slate-700 font-medium">{insight.confidence}</span>
            </div>
          </div>

          <div>
             <span className="block text-xs text-slate-400 font-bold uppercase tracking-wider mb-2">Who Should Care</span>
             <div className="flex flex-wrap gap-2">
                {insight.roles.map((role) => (
                  <span key={role} className="inline-flex items-center px-2 py-1 text-xs font-medium bg-white border border-slate-300 text-slate-700 hover:bg-slate-50">
                    {role}
                  </span>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InsightCard;
