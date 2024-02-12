import { useState } from "react";
import Box from "~/components/buildingBlocks/box";
import Button from "~/components/buildingBlocks/button";
import Flex from "~/components/buildingBlocks/flex";
import HStack from "~/components/buildingBlocks/hStack";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import Icon from "~/components/buildingBlocks/icon";
import IconButton from "~/components/buildingBlocks/iconButton";
import Text from "~/components/buildingBlocks/textComponents";
import VStack from "~/components/buildingBlocks/vStack";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CalendarIcon,
  CloseIcon,
  DateTimePickerLabelStyles,
  DateTimePickerStyles,
  inputStyles,
  lightTextShadow,
  subtleShadow,
  textShadow,
  transition400,
  verticalAlign,
} from "styles";
import useEscapeKey from "~/utils/useEscapeKey";
import FlexFull from "./flexFull";
import Transition from "./transition";

// Assuming Box, Icon, VStack, CalendarIcon, inputStyles, and shadow3D are correctly imported

interface CalendarProps {
  selectedDate: Date;
  onSelect: (date: Date) => void;
}

const Calendar = ({ selectedDate, onSelect }: CalendarProps) => {
  const startDay = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth(),
    1
  ).getDay();
  const daysInMonth = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth() + 1,
    0
  ).getDate();
  const today = new Date();

  // Ensure today's date is set to start of day for comparison (to ignore hours, minutes, seconds)
  today.setHours(0, 0, 0, 0);

  // Days of the week
  const weekDays = ["S", "M", "T", "W", "T", "F", "S"];
  const days = weekDays.map((day, index) => (
    <div
      key={index}
      className="p-[0.1vh] text-center font-semibold text-dt-500 w-[3vh] h-[2.5vh] flex-shrink-0 flex justify-center items-center"
    >
      {day}
    </div>
  ));

  for (let i = 0; i < startDay; i++) {
    days.push(
      <div key={`empty-${i}`} className="p-2 border border-transparent" />
    );
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const dayDate = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      day
    );
    const isPast = dayDate < today;

    days.push(
      <Flex className="w-[2.3vh] md:w-[3vh] md:h-[2.5vh] flex-shrink-0 flex justify-center items-center">
        <button
          key={day}
          disabled={isPast}
          className={`py-[0.1vh] px-[0.3vh] w-full h-full text-center ${
            isPast
              ? "text-dt-120 hover:bg-transparent cursor-not-allowed"
              : "hover:bg-dt-200 hover:text-dt-900"
          }`}
          onClick={() => !isPast && onSelect(dayDate)}
        >
          {day}
        </button>
      </Flex>
    );
  }

  return (
    <div
      className={`w-[24vh] grid grid-cols-7 gap-y-[0.7vh] gap-x-[1.5vh] px-[1.5vh] justify-center items-center  ${textShadow}`}
    >
      {days}
    </div>
  );
};

export default function DatePicker({
  isEditDate,
  setIsEditDate,
  setIsEditTime,
  dueDate,
}: {
  isEditDate: boolean;
  setIsEditDate: (isEditDate: boolean) => void;
  setIsEditTime: (isEditTime: boolean) => void;
  dueDate: Date;
}) {
  const [selectedDate, setSelectedDate] = useState<Date>(dueDate);
  // const [showCalendar, setShowCalendar] = useState<boolean>(false);

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setIsEditDate(false);
  };

  const goToNextMonth = () => {
    setSelectedDate(
      new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1)
    );
  };

  const goToPreviousMonth = () => {
    setSelectedDate(
      new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1)
    );
  };
  const monthYearFormat = selectedDate.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  const goToToday = () => {
    setSelectedDate(new Date()); // Sets the selectedDate to today's date
    setIsEditDate(false); // Optionally, hide the calendar after selecting today's date
  };

  useEscapeKey(() => setIsEditDate(false));
  return (
    <div className="relative">
      <Box className="relative">
        <Icon
          icon={CalendarIcon}
          className="absolute top-[0.8vh] right-[1.1vh] text-dt-900 hover:cursor-pointer"
          iconSize="text-[2.3vh]"
          onClick={() => {
            setIsEditDate(!isEditDate);
            setIsEditTime(false);
          }}
        />
        <input
          type="text"
          readOnly
          value={selectedDate.toISOString().substring(0, 10)}
          className={`form-input w-[18vh] lg:w-[25vh] font-semibold ${inputStyles} cursor-pointer`}
          onClick={() => {
            setIsEditDate(!isEditDate);
            setIsEditTime(false);
          }}
        />
      </Box>
      {isEditDate && (
        <Transition>
          <VStack className={`${DateTimePickerStyles} left-0`}>
            <FlexFull className="justify-between mb-[0.5vh] items-center">
              <IconButton
                isSmall
                icon={ArrowLeftIcon}
                onClick={goToPreviousMonth}
              />
              <Text className={`${DateTimePickerLabelStyles}`}>
                {monthYearFormat}
              </Text>
              <IconButton
                isSmall
                icon={ArrowRightIcon}
                onClick={goToNextMonth}
              />
            </FlexFull>
            <Calendar selectedDate={selectedDate} onSelect={handleDateSelect} />
            <HStackFull className="justify-between">
              <Button
                isUnstyled
                onClick={goToToday}
                className={`text-[1.6vh] leading-[1.6vh] h-[2.5vh] px-[0.5vh] bg-dt-700 hover:bg-dt-600 flex items-center ${subtleShadow} ${textShadow} ${transition400}`}
              >
                Today{" "}
              </Button>
              <Button
                isUnstyled
                onClick={() => setIsEditDate(false)}
                className={`text-[1.6vh] leading-[1.6vh] h-[2.5vh] px-[0.2vh] bg-dt-400 text-dt-900 hover:bg-dt-200 flex items-center ${subtleShadow} ${lightTextShadow} ${transition400}`}
              >
                <HStack gap={`gap-[0px] ${verticalAlign} pb-[0.5vh]`}>
                  <Icon icon={CloseIcon} />
                  <Text>Close</Text>
                </HStack>
              </Button>
            </HStackFull>
          </VStack>
        </Transition>
      )}
    </div>
  );
}
