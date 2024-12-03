import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

interface CalendarProps {
  selectedDate?: Date;
  onDateChange?: (date: Date) => void;
  className?: string;
  disabled?: boolean;
  disabledDates?: Date[];
  minDate?: Date;
  maxDate?: Date;
}

export function Calendar({
  selectedDate,
  onDateChange,
  className,
  disabled = false,
  disabledDates = [],
  minDate,
  maxDate,
}: CalendarProps) {
  const disabledDays = {
    before: minDate,
    after: maxDate,
    dates: disabledDates,
  };

  return (
    <DayPicker
      mode="single"
      selected={selectedDate}
      onSelect={(date) => date && onDateChange?.(date)}
      className={className}
      disabled={disabled || disabledDays}
      modifiers={{
        disabled: disabled,
      }}
      modifiersStyles={{
        disabled: { textDecoration: "line-through" },
      }}
      showOutsideDays
      fixedWeeks
    />
  );
}
