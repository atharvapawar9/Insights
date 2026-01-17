import React from 'react';
import { DollarSign, TrendingUp, BarChart3, PieChart } from 'lucide-react';

const StatCard = ({ title, value, subtext, icon, trend }) => {
  const Icon = icon;
  return (
    <div className="bg-white p-6 border border-slate-200 shadow-sm flex flex-col justify-between h-full">
        <div className="flex justify-between items-start mb-4">
            <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{title}</p>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">{value}</h3>
            </div>
            <div className="p-2 bg-slate-50 rounded-full">
                <Icon size={20} className="text-slate-900" />
            </div>
        </div>
        
        <div className="flex items-center text-xs font-mono text-slate-500">
            {trend && (
                <span className={`flex items-center mr-2 font-bold ${trend > 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                    {trend > 0 ? '+' : ''}{trend}%
                </span>
            )}
            <span>{subtext}</span>
        </div>
    </div>
  );
};

const FinancialStatsGrid = ({ data }) => {
  if (!data) return null;

  const { insights } = data;
  const currency = data.currency || '$';
  
  // Helper to format large numbers
  const formatValue = (val, unit) => {
      if (val === null || val === undefined) return 'N/A';
      
      if (unit === 'million') {
          if (val >= 1000) return `${currency}${(val / 1000).toFixed(2)}B`;
          return `${currency}${val.toLocaleString()}M`;
      }
      return `${currency}${val.toLocaleString()}`;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard 
            title="Revenue" 
            value={formatValue(insights.revenue.value, insights.revenue.unit)}
            subtext={`FY ${insights.revenue.latest_year}`}
            icon={DollarSign}
            trend={insights.growth.revenue_yoy_percent}
        />
        <StatCard 
            title="Growth" 
            value={`${insights.growth.revenue_yoy_percent}%`}
            subtext={insights.growth.label}
            icon={TrendingUp}
        />
        <StatCard 
            title="Stock Price" 
            value={insights.stock_price.current_price ? `${currency}${insights.stock_price.current_price}` : 'Private'}
            subtext={insights.stock_price.day_change_percent ? 'Day Change' : 'Not Public'}
            icon={BarChart3}
            trend={insights.stock_price.day_change_percent}
        />
        <StatCard 
            title="Valuation" 
            value={formatValue(insights.market_acquisition.market_cap, insights.market_acquisition.unit)}
            subtext={insights.market_acquisition.note}
            icon={PieChart}
        />
    </div>
  );
};

export default FinancialStatsGrid;
