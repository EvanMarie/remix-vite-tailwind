import { useState } from "react";
import DatePicker from "./datePicker";
import HStackFull from "./hStackFull";
import TimePicker from "./timePicker";

export default function InputDateTime({ dueDate }: { dueDate: Date }) {
  const [isEditDate, setIsEditDate] = useState(false);
  const [isEditTime, setIsEditTime] = useState(false);
  const containerHeight = isEditDate || isEditTime ? "min-h-[38vh]" : "";
  return (
    <HStackFull className={`justify-evenly ${containerHeight}`}>
      <DatePicker
        isEditDate={isEditDate}
        setIsEditDate={setIsEditDate}
        setIsEditTime={setIsEditTime}
        dueDate={dueDate}
      />
      <TimePicker
        selectedTime={new Date()}
        onSelectTime={() => {}}
        setIsEditDate={setIsEditDate}
        isEditTime={isEditTime}
        setIsEditTime={setIsEditTime}
      />
    </HStackFull>
  );
}
