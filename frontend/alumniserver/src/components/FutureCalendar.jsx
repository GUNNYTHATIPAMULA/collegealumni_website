import { useState, useEffect } from 'react';
import { ChevronRight,RotateCcw } from 'lucide-react';

const FutureCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [calendarDays, setCalendarDays] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    generateCalendar();
  }, [currentDate]);

  const generateCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // First day of the month
    const firstDay = new Date(year, month, 1);
    // Last day of the month
    const lastDay = new Date(year, month + 1, 0);
    
    // Get day of week for first day (0 = Sunday, 6 = Saturday)
    const startDayOfWeek = firstDay.getDay();
    
    const days = [];
    
    // Add empty cells for days before the 1st of the month
    for (let i = 0; i < startDayOfWeek; i++) {
      days.push({
        date: null,
        isCurrentMonth: false,
        isEmpty: true
      });
    }
    
    // Add current month days
    for (let i = 1; i <= lastDay.getDate(); i++) {
      const currentDateObj = new Date(year, month, i);
      const isPast = currentDateObj < today && 
                     (currentDateObj.getMonth() < today.getMonth() || 
                      currentDateObj.getFullYear() < today.getFullYear());
      
      days.push({
        date: currentDateObj,
        day: i,
        isCurrentMonth: true,
        isPast: isPast,
        isEmpty: false,
        isToday: currentDateObj.toDateString() === today.toDateString()
      });
    }
    
    setCalendarDays(days);
  };

  const changeMonth = (increment) => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + increment, 1);
    const today = new Date();
    
    // Prevent going to previous months
    if (newDate.getFullYear() < today.getFullYear() || 
        (newDate.getFullYear() === today.getFullYear() && newDate.getMonth() < today.getMonth())) {
      return;
    }
    
    setCurrentDate(newDate);
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  const handleDateClick = (day) => {
    if (!day.isPast && !day.isEmpty) {
      setSelectedDate(day.date);
    }
  };

  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

  const isCurrentMonth = (date) => {
    const today = new Date();
    return date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
      {/* Header */}
      <div className="bg-blue-900 px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-white">
            <h2 className="text-2xl font-bold">
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h2>
            {isCurrentMonth(currentDate) && (
              <p className="text-blue-100 text-sm mt-1">Current Month</p>
            )}
          </div>
          <div className="flex gap-2">
            <button
              onClick={goToToday}
              className="px-4 py-2 bg-white text-blue-600 rounded-sm hover:bg-blue-50 transition-colors font-medium text-sm"
            >
              <RotateCcw />
            </button>
            <button
              onClick={() => changeMonth(1)}
              className="px-4 py-2 bg-white text-blue-600 rounded-sm hover:bg-blue-50 transition-colors font-medium"
            >
             <ChevronRight />
            </button>
          </div>
        </div>
      </div>

      {/* Weekday headers */}
      <div className="grid grid-cols-7 gap-px bg-gray-200">
        {weekdays.map(day => (
          <div key={day} className="bg-gray-50 py-3 text-center text-sm font-semibold text-gray-600">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-px bg-gray-200">
        {calendarDays.map((day, index) => {
          if (day.isEmpty) {
            return (
              <div key={index} className="bg-white p-1 min-h-[20px]"></div>
            );
          }

          const isSelected = selectedDate && day.date && 
            selectedDate.toDateString() === day.date.toDateString();

          return (
            <div
              key={index}
              onClick={() => handleDateClick(day)}
              className={`
                bg-white p-1 min-h-[0px] relative transition-all duration-200
                ${!day.isPast && !day.isEmpty ? 'hover:bg-blue-50 cursor-pointer' : 'cursor-not-allowed'}
                ${isSelected ? 'ring-2 ring-blue-500 ring-inset' : ''}
              `}
            >
              <div className="flex justify-between items-start">
                <span className={`
                  inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium
                  ${day.isToday ? 'bg-blue-900 text-white' : 'text-gray-700'}
                  ${day.isPast ? 'text-gray-400' : ''}
                `}>
                  {day.day}
                </span>
              </div>
              
             
              {day.isPast && (
                <div className="absolute inset-0 bg-gray-50 bg-opacity-50"></div>
              )}
            </div>
          );
        })}
      </div>

     
    </div>
  );
};

export default FutureCalendar;