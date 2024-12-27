export function getDaysOfMonth(year = new Date().getFullYear(), month = new Date().getMonth()) {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysArray = [];
    const today = new Date();
  
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const dayName = date.toLocaleDateString('en-US', { weekday: 'short' }); // e.g., Mon, Tue
      const isCurrentDay = 
        date.getFullYear() === today.getFullYear() &&
        date.getMonth() === today.getMonth() &&
        date.getDate() === today.getDate();
  
      daysArray.push({dayName,day,isCurrentDay});
    }
  
    return daysArray;
  }
// console.log(getDaysOfMonth(2024,10))


function createDataArray(dayArr, index) {
    return {
      name: {
        name: `ATI-${index}`,
        type: 'Issue Summary',
      },
      logged: [...Array.from({ length: dayArr.length }, () => (Math.random() < 0.5 ? 0 : 4.5))],
      total: 0,
    };
  }

export function generateArrayWithTotal(dayArr, index) {
    const data = createDataArray(dayArr, index);
  
    // Calculate the total sum of the `logged` array
    data.total = data.logged.reduce((sum, value) => sum + value, 0);
  
    return data;
  }