import { RecommendCardProps } from "@/src/components/atoms/RecommendJobCard/types";
import { JobDetail } from "@/src/services";

// @ts-ignore
export const jobDetailMock: JobDetail = {
  id: "2",
  job_type: "Contract / Temporary",
  title: "High hourly wage! Delivery staff",
  location: "東京都 Prefecture, 特別区部 City ",
  salary: "1820",
  tags: ["High wage", "Uniform", "Social insurance", "Daytime", "Short term"],
  description:
    'This job involves delivering, loading and assembling furniture in pairs (10-15 deliveries per day). You will usually go with a veteran, taxi will gradually learn the work. For delivery work, you will also receive passenger training from senior staff, so don\'t worry! [Delivery area] Tachikawa City, Kunitachi City, Chofu City, Mitaka City, Ome City, Akiruno City, etc. [About vehicles] Since deliveries are made with company vehicles, there is no need to bring or lease vehicles. All vehicles are equipped with rear-view monitors and car navigation systems. At first, you will be in the passenger seat learning the route and work flow, and then you will gradually start driving while observing driving techniques.\n\n Fixed-hour system Working hours details Actual working hours: 8 hours per day Average number of working days: 12 to 20 days per month [Working hours] 8:30-17:30 (1-hour break) *Working 2 days or more per week is OK (only weekdays or weekends are OK!) *Some overtime",requirements:"1) A license to drive a 2-ton vehicle is required. (2) Those who obtained a regular driver\'s license by March 11, 2017 (Heisei 29) are also eligible. The driver\'s license states that "Semi-medium-sized vehicles that can be driven as a semi-medium-sized vehicle are limited to semi-medium-sized vehicles (5 tons)." We welcome the following people! *Those who want to work a side job or do two jobs *Those who want to earn a stable income by working 4-5 days a week.',
  is_recommended: false,
  created_at: "",
  deleted_at: undefined,
  updated_at: "",
};

// @ts-ignore
export const mockRecommendedJob: RecommendCardProps[] = [
  {
    id: "1",
    description:
      "High hourly wage of 1,200 yen ✨ Monthly income of 115,200 yen for 3 days a week",
    imageSrc: "/icons/side-img2.svg",
    salary: "¥ Hourly wage 1,820 yen",
    location: "東京都 Prefecture, 特別区部 City ",
  },
  {
    id: "2",
    description:
      "High hourly wage of 1,200 yen ✨ Monthly income of 115,200 yen for 3 days a week",
    imageSrc: "/icons/side-img.svg",
    salary: "¥ Hourly wage 1,820 yen",
    location: "東京都 Prefecture, 特別区部 City ",
  },
  {
    id: "3",
    description:
      "High hourly wage of 1,200 yen ✨ Monthly income of 115,200 yen for 3 days a week",
    imageSrc: "/icons/side-img2.svg",
    salary: "¥ Hourly wage 1,820 yen",
    location: "東京都 Prefecture, 特別区部 City ",
  },
  {
    id: "4",
    description:
      "High hourly wage of 1,200 yen ✨ Monthly income of 115,200 yen for 3 days a week",
    imageSrc: "/icons/side-img.svg",
    salary: "¥ Hourly wage 1,820 yen",
    location: "東京都 Prefecture, 特別区部 City ",
  },
];
