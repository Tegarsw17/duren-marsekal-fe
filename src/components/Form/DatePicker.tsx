import React from 'react';
import DateTimePicker from 'react-datetime-picker';
import "react-datetime-picker/dist/DateTimePicker.css"
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';


interface DatePickerProps {
    label?: string;
    value: Date | null;
    onChange: (date: Date | null) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ label, value, onChange }) => {
    return (
        <div className="flex flex-col space-y-2">
            {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
            <DateTimePicker
                onChange={onChange}
                value={value}
                format="dd-MM-y HH:mm"
                className="bg-white"
            />
        </div>
    );
};

export default DatePicker;
