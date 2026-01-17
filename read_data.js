const fs = require('fs');
const path = 'c:\\Users\\A\\OneDrive\\Desktop\\Insights\\data\\FInancial Insights.json';
try {
  const data = fs.readFileSync(path, 'utf8');
  console.log('File content length:', data.length);
  console.log('File content subset:', data.substring(0, 500));
} catch (err) {
  console.error('Error reading file:', err);
}
