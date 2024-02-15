import { BiEditAlt } from "react-icons/bi";
import { BsCalendar3, BsInfoCircle } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import {
  FaAppleAlt,
  FaAward,
  FaCat,
  FaEye,
  FaPlusSquare,
  FaRegSave,
  FaSearch,
} from "react-icons/fa";
import { FaArrowTurnUp } from "react-icons/fa6";
import { GiAlarmClock, GiPodiumWinner } from "react-icons/gi";
import { GrGroup } from "react-icons/gr";
import { HiOutlineUserAdd, HiOutlineUserRemove } from "react-icons/hi";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import {
  IoChevronDownCircleOutline,
  IoChevronUpCircleOutline,
  IoCloseCircleOutline,
  IoFilter,
  IoHourglassOutline,
  IoLocationOutline,
  IoReturnUpBackOutline,
} from "react-icons/io5";
import { LuBox, LuListChecks, LuStarOff } from "react-icons/lu";
import {
  MdCategory,
  MdDoneAll,
  MdHourglassDisabled,
  MdInsertEmoticon,
  MdInterests,
  MdOutlineRemoveDone,
} from "react-icons/md";
import {
  PiArrowBendLeftUpBold,
  PiArrowBendRightDownBold,
  PiArrowBendUpLeftBold,
  PiArrowsClockwiseBold,
  PiDotsThreeOutlineVerticalDuotone,
  PiShootingStar,
  PiShootingStarDuotone,
  PiShootingStarFill,
  PiSmiley,
  PiSmileyBlankBold,
  PiStar,
  PiStarFill,
  PiStarHalf,
} from "react-icons/pi";
import {
  RiAliensFill,
  RiArrowLeftSFill,
  RiArrowRightSFill,
} from "react-icons/ri";
import { TbActivityHeartbeat, TbStar, TbStarFilled } from "react-icons/tb";

export const imageFallback = "";
export const defaultAvatar = "/images/avatars/creature1.png";

// MAIN COMPONENT DEFAULTS
// export const inputStyles = `w-full ${col100Bgs.bg22} insetShadow text-col-900 px-[1vh] py-[0.5vh] pr-[2vh] border-[0.2vh] border-solid border-col-700 focus:outline-none focus:border-col-200 transition-400 rounded-[1vh]`;
// export const textAreaStyles = `${col100Bgs.bg22} insetShadow text-col-900 pl-[1.3vh] pr-[2vh] py-[0.7vh] border-[0.2vh] border-solid border-col-700 focus:outline-none focus:border-col-200 transition-400`;
export const iconButtonDefaultRadius = "rounded-[0.5vh] md:rounded-[0.6vh]";
export const DateTimePickerStyles = `text-md absolute mt-[1vh] p-[1.5vh] w-[25vh] px-[1.5vh] justify-center items-center textShadow bg-col-800 shadow3D z-20`;
export const DateTimePickerLabelStyles = `text-col-400 font-semibold`;
export const PanelDefaults = `h-fit min-h-[91vh] xl:w-50% xl:h-[91vh] xl:overflow-y-hidden justify-center`;
export const PanelContainerHeights = `h-fit min-h-full xl:h-full`;

// OTHER STYLES
export const cursiveText = `font-cursive text-col-400 textShadow`;
export const verticalAlign = `h-full items-center`;

// ICONS
export const DefaultIcon = MdInsertEmoticon;
export const StarHollowIcon = TbStar;
export const StarFilledIcon = TbStarFilled;
export const BoxIcon = ImCheckboxUnchecked;
export const CheckIcon = ImCheckboxChecked;
export const Level6Icon = PiShootingStarFill;
export const Level5Icon = PiShootingStar;
export const Level4Icon = PiStarFill;
export const Level3Icon = PiStarHalf;
export const Level2Icon = PiStar;
export const Level1Icon = PiSmiley;
export const PlusIcon = FaPlusSquare;
export const Arrow90UpIcon = FaArrowTurnUp;
export const CloseIcon = IoCloseCircleOutline;
export const ViewIcon = FaEye;
export const EditIcon = BiEditAlt;
export const ClockIcon = GiAlarmClock;
export const DownArrowCircle = IoChevronDownCircleOutline;
export const UpArrowCircle = IoChevronUpCircleOutline;
export const FilterIcon = IoFilter;
export const ShowCompleteIcon = MdDoneAll;
export const HideCompleteIcon = MdOutlineRemoveDone;
export const NoHourglassIcon = MdHourglassDisabled;
export const HourglassIcon = IoHourglassOutline;
export const RecurrentIcon = PiArrowsClockwiseBold;
export const AllIcon = MdCategory;
export const BlankFaceSmiley = PiSmileyBlankBold;
export const InfoIcon = BsInfoCircle;
export const DotsMenuIcon = PiDotsThreeOutlineVerticalDuotone;
export const LeadersIcon = GiPodiumWinner;
export const FriendsIcon = GrGroup;
export const SaveIcon = FaRegSave;
export const CalendarIcon = BsCalendar3;
export const ArrowLeftIcon = RiArrowLeftSFill;
export const ArrowRightIcon = RiArrowRightSFill;
export const SlashStarIcon = LuStarOff;
export const AddFriendIcon = HiOutlineUserAdd;
export const RemoveFriendIcon = HiOutlineUserRemove;
export const CheckListIcon = LuListChecks;
export const StatusIcon = TbActivityHeartbeat;
export const LocationIcon = IoLocationOutline;
export const CatIcon = FaCat;
export const AppleIcon = FaAppleAlt;
export const Box3DIcon = LuBox;
export const AlienIcon = RiAliensFill;
export const ShootingStarIcon = PiShootingStarDuotone;
export const InterestsIcon = MdInterests;
export const ProfileIcon = CgProfile;
export const BadgeIcon = FaAward;
export const ArrowUpLeftIcon = PiArrowBendLeftUpBold;
export const ArrowRightDown = PiArrowBendRightDownBold;
export const ArrowOverLeftIcon = PiArrowBendUpLeftBold;
export const SearchIcon = FaSearch;
export const ReturnPathIcon = IoReturnUpBackOutline;
