import tesla from '../data/tesla_insights.json';
import microsoft from '../data/microsoft_insights.json';
import openai from '../data/openai_insights.json';
import boeing from '../data/Boeing.json';
import financialData from '../data/financial_insights.json';

const dataMap = {
  tesla: tesla,
  microsoft: microsoft,
  openai: openai,
  boeing: boeing
};

export const getInsights = (company) => {
  return dataMap[company.toLowerCase()] || [];
};

export const getFinancialData = (company) => {
    return financialData.companies.find(c => c.name.toLowerCase() === company.toLowerCase()) || null;
};


export const getAllCompanies = () => {
    return Object.keys(dataMap);
};

// Extract unique values for filters from a dataset
export const getUniqueValues = (insights, field) => {
    const values = new Set();
    insights.forEach(item => {
        if (Array.isArray(item[field])) {
            item[field].forEach(v => values.add(v));
        } else if (item[field]) {
            values.add(item[field]);
        }
    });
    return Array.from(values).sort();
};
