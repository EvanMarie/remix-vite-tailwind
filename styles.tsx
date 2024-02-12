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

export const leading = {
  xxsNormal: "leading-[1.8vh]",
  xxsTight: "leading-[1.5vh]",
  xxsLoose: "leading-[1.6vh]",

  xsNormal: "leading-[2.2vh]",
  xsTight: "leading-[1.7vh]",
  xsLoose: "leading-[2.4vh]",

  smNormal: "leading-[2.4vh]",
  smTight: "leading-[1.9vh]",
  smLoose: "leading-[2.6vh]",

  mdNormal: "leading-[2.9vh]",
  mdTight: "leading-[2.4vh]",
  mdLoose: "leading-[3.1vh]",

  lgNormal: "leading-[3.1vh]",
  lgTight: "leading-[2.6vh]",
  lgLoose: "leading-[3.3vh]",

  xlNormal: "leading-[3.8vh]",
  xlTight: "leading-[3.3vh]",
  xlLoose: "leading-[4vh]",

  xxlNormal: "leading-[4.3vh]",
  xxlTight: "leading-[3.8vh]",
  xxlLoose: "leading-[4.5vh]",

  xxxlNormal: "leading-[4.8vh]",
  xxxlTight: "leading-[4.3vh]",
  xxxlLoose: "leading-[5vh]",

  megaNormal: "leading-[5vh]",
  megaTight: "leading-[4.5vh]",
  megaLoose: "leading-[5.2vh]",

  tooBigNormal: "leading-[5.2vh]",
  tooBigTight: "leading-[4.7vh]",
  tooBigLoose: "leading-[5.4vh]",

  insaneNormal: "leading-[5.8vh]",
  insaneTight: "leading-[5.3vh]",
  insaneLoose: "leading-[6vh]",
};

// BOX SHADOWS
export const insetShadow = "shadow-inset fullHD:shadow-insetHD";
export const insetShadowHover =
  "hover:shadow-inset hover:fullHD:shadow-insetHD";

export const lightShadow = "shadow-dvLightShadow fullHD:shadow-dvLightShadowHD";
export const lightShadowHover =
  "hover:shadow-dvLightShadow hover:fullHD:shadow-dvLightShadowHD";

export const subtleShadow = "shadow-subtleShadow fullHD:shadow-subtleShadowHD";
export const subtleShadowHover =
  "hover:shadow-subtleShadow hover:fullHD:shadow-subtleShadowHD";

export const standoutShadow =
  "shadow-standoutShadow fullHD:shadow-standoutShadowHD";
export const standoutShadowHover =
  "hover:shadow-standoutShadow hover:fullHD:shadow-standoutShadowHD";

export const lightGlow = "shadow-lightGlow fullHD:shadow-lightGlowHD";
export const lightGlowHover =
  "hover:shadow-lightGlow hover:fullHD:shadow-lightGlowHD";

export const shadow3D = "shadow-shadow3D fullHD:shadow-shadow3DHD";
export const shadow3DHover =
  "hover:shadow-shadow3D hover:fullHD:shadow-shadow3DHD";

export const boxGlow = "shadow-boxGlow fullHD:shadow-boxGlowHD";
export const boxGlowHover =
  "hover:shadow-boxGlow hover:fullHD:shadow-boxGlowHD";

export const metallicEdges =
  "shadow-metallicEdges fullHD:shadow-metallicEdgesHD";
export const metallicEdgesHover =
  " hover:shadow-metallicEdges hover:fullHD:shadow-metallicEdgesHD";

// TEXT SHADOWS
export const lightTextShadow = "lightTextShadow lightTextShadowHD";
export const lightTextShadowHover =
  "hover:lightTextShadow hover:lightTextShadowHD";

export const textShadowNone = "none none";
export const textShadowNoneHover = "hover:none hover:none";

export const textShadow = "textShadow textShadowHD";
export const textShadowHover = "hover:textShadow hover:textShadowHD";

export const subtleTextShadow = "subtleTextShadow subtleTextShadowHD";
export const subtleTextShadowHover =
  "hover:subtleTextShadow hover:subtleTextShadowHD";

export const standoutTextShadow = "standoutTextShadow standoutTextShadowHD";
export const standoutTextShadowHover =
  "hover:standoutTextShadow hover:standoutTextShadowHD";

export const textGlow = "textGlow textGlowHD";
export const textGlowHover = "hover:textGlow hover:textGlowHD";

export const textFog = "textFog textFogHD";
export const textFogHover = "hover:textFog hover:textFogHD";

export const boldText = "boldText boldTextHD";
export const boldTextHover = "hover:boldText hover:boldTextHD";

export const boldTextGlow = "boldTextGlow boldTextGlowHD";
export const boldTextGlowHover = "hover:boldTextGlow hover:boldTextGlowHD";

export const boldTextShadowDarkBlue =
  "bold-text-shadow-darkBlue fullHD:bolder-text-shadow-darkBlue";

// COMPLEX BACKGROUNDS
export const col100Bgs = {
  bg1: "bg-col-100 bg-linear1op25",
  bg2: "bg-col-100 bg-linear1op50",
  bg3: "bg-col-100 bg-linear1op75",
  bg4: "bg-col-100 bg-linear2op25",
  bg5: "bg-col-100 bg-linear2op50",
  bg6: "bg-col-100 bg-linear2op75",
  bg7: "bg-col-100 bg-linear3op25",
  bg8: "bg-col-100 bg-linear3op50",
  bg9: "bg-col-100 bg-linear3op75",
  bg10: "bg-col-100 bg-linear4op25",
  bg11: "bg-col-100 bg-linear4op50",
  bg12: "bg-col-100 bg-linear4op75",
  bg13: "bg-col-100 bg-linear5op25",
  bg14: "bg-col-100 bg-linear5op50",
  bg15: "bg-col-100 bg-linear5op75",
  bg16: "bg-col-100 bg-linear6op25",
  bg17: "bg-col-100 bg-linear6op50",
  bg18: "bg-col-100 bg-linear6op75",
  bg19: "bg-col-100 bg-diagonal1op25",
  bg20: "bg-col-100 bg-diagonal1op50",
  bg21: "bg-col-100 bg-diagonal1op75",
  bg22: "bg-col-100 bg-diagonal2op25",
  bg23: "bg-col-100 bg-diagonal2op50",
  bg24: "bg-col-100 bg-diagonal2op75",
  bg25: "bg-col-100 bg-diagonal3op25",
  bg26: "bg-col-100 bg-diagonal3op50",
  bg27: "bg-col-100 bg-diagonal3op75",
  bg28: "bg-col-100 bg-diagonal4op25",
  bg29: "bg-col-100 bg-diagonal4op50",
  bg30: "bg-col-100 bg-diagonal4op75",
  bg31: "bg-col-100 bg-diagonal5op25",
  bg32: "bg-col-100 bg-diagonal5op50",
  bg33: "bg-col-100 bg-diagonal5op75",
  bg34: "bg-col-100 bg-diagonal6op25",
  bg35: "bg-col-100 bg-diagonal6op50",
  bg36: "bg-col-100 bg-diagonal6op75",
  bg37: "bg-col-100 bg-radial1op25",
  bg38: "bg-col-100 bg-radial1op50",
  bg39: "bg-col-100 bg-radial1op75",
  bg40: "bg-col-100 bg-radial2op25",
  bg41: "bg-col-100 bg-radial2op50",
  bg42: "bg-col-100 bg-radial2op75",
  bg43: "bg-col-100 bg-radial3op25",
  bg44: "bg-col-100 bg-radial3op50",
  bg45: "bg-col-100 bg-radial3op75",
  bg46: "bg-col-100 bg-radial4op25",
  bg47: "bg-col-100 bg-radial4op50",
  bg48: "bg-col-100 bg-radial4op75",
  bg49: "bg-col-100 bg-radial5op25",
  bg50: "bg-col-100 bg-radial5op50",
  bg51: "bg-col-100 bg-radial5op75",
  bg52: "bg-col-100 bg-radial6op25",
  bg53: "bg-col-100 bg-radial6op50",
  bg54: "bg-col-100 bg-radial6op75",
};

export const col200Bgs = {
  bg1: "bg-col-200 bg-linear1op25",
  bg2: "bg-col-200 bg-linear1op50",
  bg3: "bg-col-200 bg-linear1op75",
  bg4: "bg-col-200 bg-linear2op25",
  bg5: "bg-col-200 bg-linear2op50",
  bg6: "bg-col-200 bg-linear2op75",
  bg7: "bg-col-200 bg-linear3op25",
  bg8: "bg-col-200 bg-linear3op50",
  bg9: "bg-col-200 bg-linear3op75",
  bg10: "bg-col-200 bg-linear4op25",
  bg11: "bg-col-200 bg-linear4op50",
  bg12: "bg-col-200 bg-linear4op75",
  bg13: "bg-col-200 bg-linear5op25",
  bg14: "bg-col-200 bg-linear5op50",
  bg15: "bg-col-200 bg-linear5op75",
  bg16: "bg-col-200 bg-linear6op25",
  bg17: "bg-col-200 bg-linear6op50",
  bg18: "bg-col-200 bg-linear6op75",
  bg19: "bg-col-200 bg-diagonal1op25",
  bg20: "bg-col-200 bg-diagonal1op50",
  bg21: "bg-col-200 bg-diagonal1op75",
  bg22: "bg-col-200 bg-diagonal2op25",
  bg23: "bg-col-200 bg-diagonal2op50",
  bg24: "bg-col-200 bg-diagonal2op75",
  bg25: "bg-col-200 bg-diagonal3op25",
  bg26: "bg-col-200 bg-diagonal3op50",
  bg27: "bg-col-200 bg-diagonal3op75",
  bg28: "bg-col-200 bg-diagonal4op25",
  bg29: "bg-col-200 bg-diagonal4op50",
  bg30: "bg-col-200 bg-diagonal4op75",
  bg31: "bg-col-200 bg-diagonal5op25",
  bg32: "bg-col-200 bg-diagonal5op50",
  bg33: "bg-col-200 bg-diagonal5op75",
  bg34: "bg-col-200 bg-diagonal6op25",
  bg35: "bg-col-200 bg-diagonal6op50",
  bg36: "bg-col-200 bg-diagonal6op75",
  bg37: "bg-col-200 bg-radial1op25",
  bg38: "bg-col-200 bg-radial1op50",
  bg39: "bg-col-200 bg-radial1op75",
  bg40: "bg-col-200 bg-radial2op25",
  bg41: "bg-col-200 bg-radial2op50",
  bg42: "bg-col-200 bg-radial2op75",
  bg43: "bg-col-200 bg-radial3op25",
  bg44: "bg-col-200 bg-radial3op50",
  bg45: "bg-col-200 bg-radial3op75",
  bg46: "bg-col-200 bg-radial4op25",
  bg47: "bg-col-200 bg-radial4op50",
  bg48: "bg-col-200 bg-radial4op75",
  bg49: "bg-col-200 bg-radial5op25",
  bg50: "bg-col-200 bg-radial5op50",
  bg51: "bg-col-200 bg-radial5op75",
  bg52: "bg-col-200 bg-radial6op25",
  bg53: "bg-col-200 bg-radial6op50",
  bg54: "bg-col-200 bg-radial6op75",
};

export const col300Bgs = {
  bg1: "bg-col-300 bg-linear1op25",
  bg2: "bg-col-300 bg-linear1op50",
  bg3: "bg-col-300 bg-linear1op75",
  bg4: "bg-col-300 bg-linear2op25",
  bg5: "bg-col-300 bg-linear2op50",
  bg6: "bg-col-300 bg-linear2op75",
  bg7: "bg-col-300 bg-linear3op25",
  bg8: "bg-col-300 bg-linear3op50",
  bg9: "bg-col-300 bg-linear3op75",
  bg10: "bg-col-300 bg-linear4op25",
  bg11: "bg-col-300 bg-linear4op50",
  bg12: "bg-col-300 bg-linear4op75",
  bg13: "bg-col-300 bg-linear5op25",
  bg14: "bg-col-300 bg-linear5op50",
  bg15: "bg-col-300 bg-linear5op75",
  bg16: "bg-col-300 bg-linear6op25",
  bg17: "bg-col-300 bg-linear6op50",
  bg18: "bg-col-300 bg-linear6op75",
  bg19: "bg-col-300 bg-diagonal1op25",
  bg20: "bg-col-300 bg-diagonal1op50",
  bg21: "bg-col-300 bg-diagonal1op75",
  bg22: "bg-col-300 bg-diagonal2op25",
  bg23: "bg-col-300 bg-diagonal2op50",
  bg24: "bg-col-300 bg-diagonal2op75",
  bg25: "bg-col-300 bg-diagonal3op25",
  bg26: "bg-col-300 bg-diagonal3op50",
  bg27: "bg-col-300 bg-diagonal3op75",
  bg28: "bg-col-300 bg-diagonal4op25",
  bg29: "bg-col-300 bg-diagonal4op50",
  bg30: "bg-col-300 bg-diagonal4op75",
  bg31: "bg-col-300 bg-diagonal5op25",
  bg32: "bg-col-300 bg-diagonal5op50",
  bg33: "bg-col-300 bg-diagonal5op75",
  bg34: "bg-col-300 bg-diagonal6op25",
  bg35: "bg-col-300 bg-diagonal6op50",
  bg36: "bg-col-300 bg-diagonal6op75",
  bg37: "bg-col-300 bg-radial1op25",
  bg38: "bg-col-300 bg-radial1op50",
  bg39: "bg-col-300 bg-radial1op75",
  bg40: "bg-col-300 bg-radial2op25",
  bg41: "bg-col-300 bg-radial2op50",
  bg42: "bg-col-300 bg-radial2op75",
  bg43: "bg-col-300 bg-radial3op25",
  bg44: "bg-col-300 bg-radial3op50",
  bg45: "bg-col-300 bg-radial3op75",
  bg46: "bg-col-300 bg-radial4op25",
  bg47: "bg-col-300 bg-radial4op50",
  bg48: "bg-col-300 bg-radial4op75",
  bg49: "bg-col-300 bg-radial5op25",
  bg50: "bg-col-300 bg-radial5op50",
  bg51: "bg-col-300 bg-radial5op75",
  bg52: "bg-col-300 bg-radial6op25",
  bg53: "bg-col-300 bg-radial6op50",
  bg54: "bg-col-300 bg-radial6op75",
};

export const col400Bgs = {
  bg1: "bg-col-400 bg-linear1op25",
  bg2: "bg-col-400 bg-linear1op50",
  bg3: "bg-col-400 bg-linear1op75",
  bg4: "bg-col-400 bg-linear2op25",
  bg5: "bg-col-400 bg-linear2op50",
  bg6: "bg-col-400 bg-linear2op75",
  bg7: "bg-col-400 bg-linear3op25",
  bg8: "bg-col-400 bg-linear3op50",
  bg9: "bg-col-400 bg-linear3op75",
  bg10: "bg-col-400 bg-linear4op25",
  bg11: "bg-col-400 bg-linear4op50",
  bg12: "bg-col-400 bg-linear4op75",
  bg13: "bg-col-400 bg-linear5op25",
  bg14: "bg-col-400 bg-linear5op50",
  bg15: "bg-col-400 bg-linear5op75",
  bg16: "bg-col-400 bg-linear6op25",
  bg17: "bg-col-400 bg-linear6op50",
  bg18: "bg-col-400 bg-linear6op75",
  bg19: "bg-col-400 bg-diagonal1op25",
  bg20: "bg-col-400 bg-diagonal1op50",
  bg21: "bg-col-400 bg-diagonal1op75",
  bg22: "bg-col-400 bg-diagonal2op25",
  bg23: "bg-col-400 bg-diagonal2op50",
  bg24: "bg-col-400 bg-diagonal2op75",
  bg25: "bg-col-400 bg-diagonal3op25",
  bg26: "bg-col-400 bg-diagonal3op50",
  bg27: "bg-col-400 bg-diagonal3op75",
  bg28: "bg-col-400 bg-diagonal4op25",
  bg29: "bg-col-400 bg-diagonal4op50",
  bg30: "bg-col-400 bg-diagonal4op75",
  bg31: "bg-col-400 bg-diagonal5op25",
  bg32: "bg-col-400 bg-diagonal5op50",
  bg33: "bg-col-400 bg-diagonal5op75",
  bg34: "bg-col-400 bg-diagonal6op25",
  bg35: "bg-col-400 bg-diagonal6op50",
  bg36: "bg-col-400 bg-diagonal6op75",
  bg37: "bg-col-400 bg-radial1op25",
  bg38: "bg-col-400 bg-radial1op50",
  bg39: "bg-col-400 bg-radial1op75",
  bg40: "bg-col-400 bg-radial2op25",
  bg41: "bg-col-400 bg-radial2op50",
  bg42: "bg-col-400 bg-radial2op75",
  bg43: "bg-col-400 bg-radial3op25",
  bg44: "bg-col-400 bg-radial3op50",
  bg45: "bg-col-400 bg-radial3op75",
  bg46: "bg-col-400 bg-radial4op25",
  bg47: "bg-col-400 bg-radial4op50",
  bg48: "bg-col-400 bg-radial4op75",
  bg49: "bg-col-400 bg-radial5op25",
  bg50: "bg-col-400 bg-radial5op50",
  bg51: "bg-col-400 bg-radial5op75",
  bg52: "bg-col-400 bg-radial6op25",
  bg53: "bg-col-400 bg-radial6op50",
  bg54: "bg-col-400 bg-radial6op75",
};

export const col500Bgs = {
  bg1: "bg-col-500 bg-linear1op25",
  bg2: "bg-col-500 bg-linear1op50",
  bg3: "bg-col-500 bg-linear1op75",
  bg4: "bg-col-500 bg-linear2op25",
  bg5: "bg-col-500 bg-linear2op50",
  bg6: "bg-col-500 bg-linear2op75",
  bg7: "bg-col-500 bg-linear3op25",
  bg8: "bg-col-500 bg-linear3op50",
  bg9: "bg-col-500 bg-linear3op75",
  bg10: "bg-col-500 bg-linear4op25",
  bg11: "bg-col-500 bg-linear4op50",
  bg12: "bg-col-500 bg-linear4op75",
  bg13: "bg-col-500 bg-linear5op25",
  bg14: "bg-col-500 bg-linear5op50",
  bg15: "bg-col-500 bg-linear5op75",
  bg16: "bg-col-500 bg-linear6op25",
  bg17: "bg-col-500 bg-linear6op50",
  bg18: "bg-col-500 bg-linear6op75",
  bg19: "bg-col-500 bg-diagonal1op25",
  bg20: "bg-col-500 bg-diagonal1op50",
  bg21: "bg-col-500 bg-diagonal1op75",
  bg22: "bg-col-500 bg-diagonal2op25",
  bg23: "bg-col-500 bg-diagonal2op50",
  bg24: "bg-col-500 bg-diagonal2op75",
  bg25: "bg-col-500 bg-diagonal3op25",
  bg26: "bg-col-500 bg-diagonal3op50",
  bg27: "bg-col-500 bg-diagonal3op75",
  bg28: "bg-col-500 bg-diagonal4op25",
  bg29: "bg-col-500 bg-diagonal4op50",
  bg30: "bg-col-500 bg-diagonal4op75",
  bg31: "bg-col-500 bg-diagonal5op25",
  bg32: "bg-col-500 bg-diagonal5op50",
  bg33: "bg-col-500 bg-diagonal5op75",
  bg34: "bg-col-500 bg-diagonal6op25",
  bg35: "bg-col-500 bg-diagonal6op50",
  bg36: "bg-col-500 bg-diagonal6op75",
  bg37: "bg-col-500 bg-radial1op25",
  bg38: "bg-col-500 bg-radial1op50",
  bg39: "bg-col-500 bg-radial1op75",
  bg40: "bg-col-500 bg-radial2op25",
  bg41: "bg-col-500 bg-radial2op50",
  bg42: "bg-col-500 bg-radial2op75",
  bg43: "bg-col-500 bg-radial3op25",
  bg44: "bg-col-500 bg-radial3op50",
  bg45: "bg-col-500 bg-radial3op75",
  bg46: "bg-col-500 bg-radial4op25",
  bg47: "bg-col-500 bg-radial4op50",
  bg48: "bg-col-500 bg-radial4op75",
  bg49: "bg-col-500 bg-radial5op25",
  bg50: "bg-col-500 bg-radial5op50",
  bg51: "bg-col-500 bg-radial5op75",
  bg52: "bg-col-500 bg-radial6op25",
  bg53: "bg-col-500 bg-radial6op50",
  bg54: "bg-col-500 bg-radial6op75",
};

export const col600Bgs = {
  bg1: "bg-col-600 bg-linear1op25",
  bg2: "bg-col-600 bg-linear1op50",
  bg3: "bg-col-600 bg-linear1op75",
  bg4: "bg-col-600 bg-linear2op25",
  bg5: "bg-col-600 bg-linear2op50",
  bg6: "bg-col-600 bg-linear2op75",
  bg7: "bg-col-600 bg-linear3op25",
  bg8: "bg-col-600 bg-linear3op50",
  bg9: "bg-col-600 bg-linear3op75",
  bg10: "bg-col-600 bg-linear4op25",
  bg11: "bg-col-600 bg-linear4op50",
  bg12: "bg-col-600 bg-linear4op75",
  bg13: "bg-col-600 bg-linear5op25",
  bg14: "bg-col-600 bg-linear5op50",
  bg15: "bg-col-600 bg-linear5op75",
  bg16: "bg-col-600 bg-linear6op25",
  bg17: "bg-col-600 bg-linear6op50",
  bg18: "bg-col-600 bg-linear6op75",
  bg19: "bg-col-600 bg-diagonal1op25",
  bg20: "bg-col-600 bg-diagonal1op50",
  bg21: "bg-col-600 bg-diagonal1op75",
  bg22: "bg-col-600 bg-diagonal2op25",
  bg23: "bg-col-600 bg-diagonal2op50",
  bg24: "bg-col-600 bg-diagonal2op75",
  bg25: "bg-col-600 bg-diagonal3op25",
  bg26: "bg-col-600 bg-diagonal3op50",
  bg27: "bg-col-600 bg-diagonal3op75",
  bg28: "bg-col-600 bg-diagonal4op25",
  bg29: "bg-col-600 bg-diagonal4op50",
  bg30: "bg-col-600 bg-diagonal4op75",
  bg31: "bg-col-600 bg-diagonal5op25",
  bg32: "bg-col-600 bg-diagonal5op50",
  bg33: "bg-col-600 bg-diagonal5op75",
  bg34: "bg-col-600 bg-diagonal6op25",
  bg35: "bg-col-600 bg-diagonal6op50",
  bg36: "bg-col-600 bg-diagonal6op75",
  bg37: "bg-col-600 bg-radial1op25",
  bg38: "bg-col-600 bg-radial1op50",
  bg39: "bg-col-600 bg-radial1op75",
  bg40: "bg-col-600 bg-radial2op25",
  bg41: "bg-col-600 bg-radial2op50",
  bg42: "bg-col-600 bg-radial2op75",
  bg43: "bg-col-600 bg-radial3op25",
  bg44: "bg-col-600 bg-radial3op50",
  bg45: "bg-col-600 bg-radial3op75",
  bg46: "bg-col-600 bg-radial4op25",
  bg47: "bg-col-600 bg-radial4op50",
  bg48: "bg-col-600 bg-radial4op75",
  bg49: "bg-col-600 bg-radial5op25",
  bg50: "bg-col-600 bg-radial5op50",
  bg51: "bg-col-600 bg-radial5op75",
  bg52: "bg-col-600 bg-radial6op25",
  bg53: "bg-col-600 bg-radial6op50",
  bg54: "bg-col-600 bg-radial6op75",
};

export const col700Bgs = {
  bg1: "bg-col-700 bg-linear1op25",
  bg2: "bg-col-700 bg-linear1op50",
  bg3: "bg-col-700 bg-linear1op75",
  bg4: "bg-col-700 bg-linear2op25",
  bg5: "bg-col-700 bg-linear2op50",
  bg6: "bg-col-700 bg-linear2op75",
  bg7: "bg-col-700 bg-linear3op25",
  bg8: "bg-col-700 bg-linear3op50",
  bg9: "bg-col-700 bg-linear3op75",
  bg10: "bg-col-700 bg-linear4op25",
  bg11: "bg-col-700 bg-linear4op50",
  bg12: "bg-col-700 bg-linear4op75",
  bg13: "bg-col-700 bg-linear5op25",
  bg14: "bg-col-700 bg-linear5op50",
  bg15: "bg-col-700 bg-linear5op75",
  bg16: "bg-col-700 bg-linear6op25",
  bg17: "bg-col-700 bg-linear6op50",
  bg18: "bg-col-700 bg-linear6op75",
  bg19: "bg-col-700 bg-diagonal1op25",
  bg20: "bg-col-700 bg-diagonal1op50",
  bg21: "bg-col-700 bg-diagonal1op75",
  bg22: "bg-col-700 bg-diagonal2op25",
  bg23: "bg-col-700 bg-diagonal2op50",
  bg24: "bg-col-700 bg-diagonal2op75",
  bg25: "bg-col-700 bg-diagonal3op25",
  bg26: "bg-col-700 bg-diagonal3op50",
  bg27: "bg-col-700 bg-diagonal3op75",
  bg28: "bg-col-700 bg-diagonal4op25",
  bg29: "bg-col-700 bg-diagonal4op50",
  bg30: "bg-col-700 bg-diagonal4op75",
  bg31: "bg-col-700 bg-diagonal5op25",
  bg32: "bg-col-700 bg-diagonal5op50",
  bg33: "bg-col-700 bg-diagonal5op75",
  bg34: "bg-col-700 bg-diagonal6op25",
  bg35: "bg-col-700 bg-diagonal6op50",
  bg36: "bg-col-700 bg-diagonal6op75",
  bg37: "bg-col-700 bg-radial1op25",
  bg38: "bg-col-700 bg-radial1op50",
  bg39: "bg-col-700 bg-radial1op75",
  bg40: "bg-col-700 bg-radial2op25",
  bg41: "bg-col-700 bg-radial2op50",
  bg42: "bg-col-700 bg-radial2op75",
  bg43: "bg-col-700 bg-radial3op25",
  bg44: "bg-col-700 bg-radial3op50",
  bg45: "bg-col-700 bg-radial3op75",
  bg46: "bg-col-700 bg-radial4op25",
  bg47: "bg-col-700 bg-radial4op50",
  bg48: "bg-col-700 bg-radial4op75",
  bg49: "bg-col-700 bg-radial5op25",
  bg50: "bg-col-700 bg-radial5op50",
  bg51: "bg-col-700 bg-radial5op75",
  bg52: "bg-col-700 bg-radial6op25",
  bg53: "bg-col-700 bg-radial6op50",
  bg54: "bg-col-700 bg-radial6op75",
};

export const col800Bgs = {
  bg1: "bg-col-800 bg-linear1op25",
  bg2: "bg-col-800 bg-linear1op50",
  bg3: "bg-col-800 bg-linear1op75",
  bg4: "bg-col-800 bg-linear2op25",
  bg5: "bg-col-800 bg-linear2op50",
  bg6: "bg-col-800 bg-linear2op75",
  bg7: "bg-col-800 bg-linear3op25",
  bg8: "bg-col-800 bg-linear3op50",
  bg9: "bg-col-800 bg-linear3op75",
  bg10: "bg-col-800 bg-linear4op25",
  bg11: "bg-col-800 bg-linear4op50",
  bg12: "bg-col-800 bg-linear4op75",
  bg13: "bg-col-800 bg-linear5op25",
  bg14: "bg-col-800 bg-linear5op50",
  bg15: "bg-col-800 bg-linear5op75",
  bg16: "bg-col-800 bg-linear6op25",
  bg17: "bg-col-800 bg-linear6op50",
  bg18: "bg-col-800 bg-linear6op75",
  bg19: "bg-col-800 bg-diagonal1op25",
  bg20: "bg-col-800 bg-diagonal1op50",
  bg21: "bg-col-800 bg-diagonal1op75",
  bg22: "bg-col-800 bg-diagonal2op25",
  bg23: "bg-col-800 bg-diagonal2op50",
  bg24: "bg-col-800 bg-diagonal2op75",
  bg25: "bg-col-800 bg-diagonal3op25",
  bg26: "bg-col-800 bg-diagonal3op50",
  bg27: "bg-col-800 bg-diagonal3op75",
  bg28: "bg-col-800 bg-diagonal4op25",
  bg29: "bg-col-800 bg-diagonal4op50",
  bg30: "bg-col-800 bg-diagonal4op75",
  bg31: "bg-col-800 bg-diagonal5op25",
  bg32: "bg-col-800 bg-diagonal5op50",
  bg33: "bg-col-800 bg-diagonal5op75",
  bg34: "bg-col-800 bg-diagonal6op25",
  bg35: "bg-col-800 bg-diagonal6op50",
  bg36: "bg-col-800 bg-diagonal6op75",
  bg37: "bg-col-800 bg-radial1op25",
  bg38: "bg-col-800 bg-radial1op50",
  bg39: "bg-col-800 bg-radial1op75",
  bg40: "bg-col-800 bg-radial2op25",
  bg41: "bg-col-800 bg-radial2op50",
  bg42: "bg-col-800 bg-radial2op75",
  bg43: "bg-col-800 bg-radial3op25",
  bg44: "bg-col-800 bg-radial3op50",
  bg45: "bg-col-800 bg-radial3op75",
  bg46: "bg-col-800 bg-radial4op25",
  bg47: "bg-col-800 bg-radial4op50",
  bg48: "bg-col-800 bg-radial4op75",
  bg49: "bg-col-800 bg-radial5op25",
  bg50: "bg-col-800 bg-radial5op50",
  bg51: "bg-col-800 bg-radial5op75",
  bg52: "bg-col-800 bg-radial6op25",
  bg53: "bg-col-800 bg-radial6op50",
  bg54: "bg-col-800 bg-radial6op75",
};

export const col900Bgs = {
  bg1: "bg-col-900 bg-linear1op25",
  bg2: "bg-col-900 bg-linear1op50",
  bg3: "bg-col-900 bg-linear1op75",
  bg4: "bg-col-900 bg-linear2op25",
  bg5: "bg-col-900 bg-linear2op50",
  bg6: "bg-col-900 bg-linear2op75",
  bg7: "bg-col-900 bg-linear3op25",
  bg8: "bg-col-900 bg-linear3op50",
  bg9: "bg-col-900 bg-linear3op75",
  bg10: "bg-col-900 bg-linear4op25",
  bg11: "bg-col-900 bg-linear4op50",
  bg12: "bg-col-900 bg-linear4op75",
  bg13: "bg-col-900 bg-linear5op25",
  bg14: "bg-col-900 bg-linear5op50",
  bg15: "bg-col-900 bg-linear5op75",
  bg16: "bg-col-900 bg-linear6op25",
  bg17: "bg-col-900 bg-linear6op50",
  bg18: "bg-col-900 bg-linear6op75",
  bg19: "bg-col-900 bg-diagonal1op25",
  bg20: "bg-col-900 bg-diagonal1op50",
  bg21: "bg-col-900 bg-diagonal1op75",
  bg22: "bg-col-900 bg-diagonal2op25",
  bg23: "bg-col-900 bg-diagonal2op50",
  bg24: "bg-col-900 bg-diagonal2op75",
  bg25: "bg-col-900 bg-diagonal3op25",
  bg26: "bg-col-900 bg-diagonal3op50",
  bg27: "bg-col-900 bg-diagonal3op75",
  bg28: "bg-col-900 bg-diagonal4op25",
  bg29: "bg-col-900 bg-diagonal4op50",
  bg30: "bg-col-900 bg-diagonal4op75",
  bg31: "bg-col-900 bg-diagonal5op25",
  bg32: "bg-col-900 bg-diagonal5op50",
  bg33: "bg-col-900 bg-diagonal5op75",
  bg34: "bg-col-900 bg-diagonal6op25",
  bg35: "bg-col-900 bg-diagonal6op50",
  bg36: "bg-col-900 bg-diagonal6op75",
  bg37: "bg-col-900 bg-radial1op25",
  bg38: "bg-col-900 bg-radial1op50",
  bg39: "bg-col-900 bg-radial1op75",
  bg40: "bg-col-900 bg-radial2op25",
  bg41: "bg-col-900 bg-radial2op50",
  bg42: "bg-col-900 bg-radial2op75",
  bg43: "bg-col-900 bg-radial3op25",
  bg44: "bg-col-900 bg-radial3op50",
  bg45: "bg-col-900 bg-radial3op75",
  bg46: "bg-col-900 bg-radial4op25",
  bg47: "bg-col-900 bg-radial4op50",
  bg48: "bg-col-900 bg-radial4op75",
  bg49: "bg-col-900 bg-radial5op25",
  bg50: "bg-col-900 bg-radial5op50",
  bg51: "bg-col-900 bg-radial5op75",
  bg52: "bg-col-900 bg-radial6op25",
  bg53: "bg-col-900 bg-radial6op50",
  bg54: "bg-col-900 bg-radial6op75",
};

// TRANSITIONS
export const transition300 = `transition-all duration-300 ease-in-out`;
export const transition400 = `transition-all duration-400 ease-in-out`;
export const transition500 = `transition-all duration-500 ease-in-out`;
export const transition600 = `transition-all duration-600 ease-in-out`;
export const transition700 = `transition-all duration-700 ease-in-out`;
export const transition800 = `transition-all duration-800 ease-in-out`;

// BUTTON STYLES
// export const normalButtonColors = `bg-col-900 text-col-100 text-stroke-5-col900 ${textShadow} hover:bg-col-100 hover:text-col-900 hover:textShadow border-[0.2vh] md:border-[0.3vh] border-solid border-col-700 hover:border-col-500 ${transition700} ${subtleShadow}`;
export const normalButtonColors = "bg-col-900 hover:bg-col-300";
export const negativeButtonColors = `bg-red-400 text-col-800 text-stroke-3-col100 ${lightTextShadow} hover:bg-red-300 hover:text-col-800 border-[0.2vh] border-solid border-col-900 hover:border-[0.2vh] hover:border-solid hover:border-col-800 ${transition500} `;
export const normalButtonPadding = `px-[1.5vh] py-[0.5vh]`;
export const smallButtonPadding = `px-[1.5vh] py-[0.2vh]`;
export const smallButtonBase = `w-fit ${normalButtonColors} h-[3vh] font-semibold ${subtleShadow} text-md ${metallicEdgesHover}`;
export const normalButtonBase = `w-fit ${normalButtonColors} h-[4vh] font-semibold ${subtleShadow} text-[2vh] align-center ${metallicEdgesHover}`;
export const isUnstyledStyles = `w-fit flex-shrink-0 font-semibold items-center rounded-none`;
export const negativeStyles = `w-fit ${negativeButtonColors} ${subtleShadow} h-[4vh] text-lg font-semibold ${metallicEdgesHover}`;
export const negativeSmallStyles = `w-fit  ${negativeButtonColors} ${subtleShadow} h-[3vh] text-md font-semibold ${metallicEdgesHover}`;
export const buttonGradientRadius = "rounded-[0.4vh]";

// MAIN COMPONENT DEFAULTS
export const navHeight = "h-[5vh]";
export const navPadding = "pt-[5vh]";
export const footerHeight = "h-[4vh]";
export const footerPadding = "pb-[4vh]";
export const contentHeight = "h-[91vh] min-h-[91vh]";
export const inputStyles = `w-full ${col100Bgs.bg22} ${insetShadow} text-col-900 px-[1vh] py-[0.5vh] pr-[2vh] border-[0.2vh] border-solid border-col-700 focus:outline-none focus:border-col-200 ${transition400} rounded-[1vh]`;
export const textAreaStyles = `${col100Bgs.bg22} ${insetShadow} text-col-900 pl-[1.3vh] pr-[2vh] py-[0.7vh] border-[0.2vh] border-solid border-col-700 focus:outline-none focus:border-col-200 ${transition400}`;
export const buttonDefaultRadius = "rounded-[0.7vh]";
export const iconButtonDefaultRadius = "rounded-[0.5vh] md:rounded-[0.6vh]";
export const DateTimePickerStyles = `text-md absolute mt-[1vh] p-[1.5vh] w-[25vh] px-[1.5vh] justify-center items-center ${textShadow}  bg-col-800 ${shadow3D} z-20`;
export const DateTimePickerLabelStyles = `text-col-400 font-semibold`;
export const PanelDefaults = `h-fit min-h-[91vh] xl:w-50% xl:h-[91vh] xl:overflow-y-hidden justify-center`;
export const PanelContainerHeights = `h-fit min-h-full xl:h-full`;

// OTHER STYLES
export const scaleItem = `hover:cursor-pointer hover:transform hover:scale-101 transition-all duration-500`;
export const scaleItemLg = `hover:cursor-pointer hover:transform hover:scale-102 transition-all duration-500`;
export const scaleItemXl = `hover:cursor-pointer hover:transform hover:scale-105 transition-all duration-500`;
export const scaleItemXxl = `hover:cursor-pointer hover:transform hover:scale-107 transition-all duration-500`;
export const cursiveText = `font-cursive text-col-400 ${textShadow}`;
export const verticalAlign = `h-full items-center`;

// BORDERS
export const border100 = "border-solid border-[0.2vh] border-col-100";
export const hoverBorder100 =
  "hover:border-solid hover:border-[0.2vh] hover:border-col-100";
export const borderBottom100 = "border-solid border-b-[0.2vh] border-col-100";
export const border200 = "border-solid border-[0.2vh] border-col-200";
export const hoverborder200 =
  "hover:border-solid hover:border-[0.2vh] hover:border-col-200";
export const borderBottom200 = "border-solid border-b-[0.2vh] border-col-200";
export const border300 = "border-solid border-[0.2vh] border-col-300";
export const hoverBorder300 =
  "hover:border-solid hover:border-[0.2vh] hover:border-col-300";
export const borderBottom300 = "border-solid border-b-[0.2vh] border-col-300";
export const border400 = "border-solid border-[0.2vh] border-col-400";
export const hoverBorder400 =
  "hover:border-solid hover:border-[0.2vh] hover:border-col-400";
export const borderBottom400 = "border-solid border-b-[0.2vh] border-col-400";
export const border500 = "border-solid border-[0.2vh] border-col-500";
export const hoverBorder500 =
  "hover:border-solid hover:border-[0.2vh] hover:border-col-500";
export const borderBottom500 = "border-solid border-b-[0.2vh] border-col-500";
export const border600 = "border-solid border-[0.2vh] border-col-600";
export const hoverBorder600 =
  "hover:border-solid hover:border-[0.2vh] hover:border-col-600";
export const borderBottom600 = "border-solid border-b-[0.2vh] border-col-600";
export const border700 = "border-solid border-[0.2vh] border-col-700";
export const hoverBorder700 =
  "hover:border-solid hover:border-[0.2vh] hover:border-col-700";
export const borderBottom700 = "border-solid border-b-[0.2vh] border-col-700";
export const border800 = "border-solid border-[0.2vh] border-col-800";
export const hoverBorder800 =
  "hover:border-solid hover:border-[0.2vh] hover:border-col-800";
export const borderBottom800 = "border-solid border-b-[0.2vh] border-col-800";
export const border900 = "border-[0.2vh] border-solid border-col-900";
export const hoverBorder900 =
  "hover:border-solid hover:border-[0.2vh] hover:border-col-900";
export const borderBottom900 = "border-solid border-b-[0.2vh] border-col-900";
export const border970 = "border-solid border-[0.2vh] border-col-970";
export const hoverBorder970 =
  "hover:border-[0.2vh] hover:border-solid hover:border-col-970";
export const borderBottom970 = "border-solid border-b-[0.2vh] border-col-970";

// OVERLAYS
export const defaultOverlayColor = "bg-col-850";
export const defaultOverlayBlur = "backdrop-blur-md";
export const insetOverlay = `${insetShadow} bg-col-930`;

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
