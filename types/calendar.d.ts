declare module "react-day-picker" {
  export interface DayPickerProps {
    mode?: "single" | "multiple" | "range";
    selected?: Date | Date[] | { from: Date; to: Date };
    onSelect?: (date: Date | undefined) => void;
    className?: string;
    disabled?: boolean | { before?: Date; after?: Date; dates?: Date[] };
    modifiers?: Record<string, any>;
    modifiersStyles?: Record<string, React.CSSProperties>;
    showOutsideDays?: boolean;
    fixedWeeks?: boolean;
  }

  export function DayPicker(props: DayPickerProps): JSX.Element;
}
