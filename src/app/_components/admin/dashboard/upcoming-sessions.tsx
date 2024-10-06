import { cn } from "@/lib/utils";
import {
  Calendar,
  User,
  Clock,
  ArrowUpRight,
  Users,
  ArrowRight,
  ChevronRight,
  MapPin,
  Webcam,
  UsersRound,
  UserRound,
} from "lucide-react";
import { useState } from "react";

type Session = {
  id: string;
  title: string;
  coach: string;
  date: string;
  time: string;
  location: string;
  status: "Scheduled" | "Cancelled" | "Completed";
  studentsEnrolled: number;
  gameType: string;
  sessionMode: "Online" | "In-Person";
  sessionType: "Individual" | "Group";
};

const ChessSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14px"
    height="14px"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 0C12.5523 0 13 0.447715 13 1V2H14C14.5523 2 15 2.44772 15 3C15 3.55228 14.5523 4 14 4H13L13 6.13426C14.1873 6.46304 15.1164 7.36761 15.6095 8.53557C16.7887 7.70672 18.0146 7.33092 19.1893 7.38765C20.8173 7.46629 22.1801 8.37142 22.9824 9.70379C24.5267 12.2682 23.9536 16.1461 20.2565 19.277L21.1708 21.1056C21.8357 22.4354 20.8688 24 19.382 24H4.61805C3.13129 24 2.1643 22.4354 2.82919 21.1056L3.74347 19.277C0.0464058 16.1461 -0.526611 12.2682 1.01767 9.70378C1.82002 8.37141 3.18278 7.46628 4.8108 7.38766C5.9855 7.33093 7.21132 7.70675 8.3906 8.5356C8.88363 7.36763 9.81271 6.46305 11 6.13427L11 4H10C9.44771 4 9 3.55228 9 3C9 2.44772 9.44771 2 10 2H11V1C11 0.447715 11.4477 0 12 0ZM8.01285 10.8098C6.84088 9.69153 5.74956 9.34466 4.90727 9.38533C4.0034 9.42898 3.2202 9.92317 2.73099 10.7355C1.80208 12.2781 1.87787 15.2648 5.34014 18H10.4437C10.1872 17.422 9.88055 16.7115 9.57338 15.9543C9.19326 15.0173 8.80704 13.9956 8.51427 13.0583C8.27053 12.2779 8.06505 11.476 8.01285 10.8098ZM13.5564 18H18.6599C22.1222 15.2648 22.198 12.2781 21.2691 10.7355C20.7799 9.92318 19.9967 9.42898 19.0928 9.38533C18.2505 9.34464 17.1592 9.6915 15.9872 10.8097C15.935 11.4759 15.7296 12.2779 15.4858 13.0583C15.193 13.9956 14.8068 15.0173 14.4267 15.9543C14.1195 16.7115 13.8129 17.422 13.5564 18ZM18.382 20H12H5.61804L4.61805 22H19.382L18.382 20ZM12 16.5687C12.1822 16.1478 12.3779 15.6844 12.5734 15.2025C12.9433 14.2907 13.307 13.3255 13.5768 12.462C13.8564 11.5668 14 10.8867 14 10.5C14 10.4699 13.9996 10.4401 13.9989 10.4105C13.959 8.87922 12.9603 8 12 8C11.0398 8 10.0411 8.87924 10.0012 10.4105C10.0004 10.4401 10 10.47 10 10.5C10 10.8867 10.1437 11.5668 10.4233 12.462C10.693 13.3255 11.0568 14.2907 11.4267 15.2025C11.6222 15.6844 11.8179 16.1478 12 16.5687Z"
      fill="#000000"
    />
  </svg>
);
const ScrabbleSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14px"
    height="14px"
    viewBox="0 0 76 76"
    version="1.1"
    baseProfile="full"
    enable-background="new 0 0 76.00 76.00"
  >
    <path
      fill="#000000"
      fill-opacity="1"
      stroke-width="0.2"
      stroke-linejoin="round"
      d="M 22,17L 54,17C 56.6233,17 59,19.3767 59,22L 59,54C 59,56.6234 56.6233,59 54,59L 22,59C 19.3766,59 17,56.6234 17,54L 17,22C 17,19.3767 19.3766,17 22,17 Z M 31.8235,27.8033L 31.8235,49.0833L 37.0555,49.0833C 39.3224,49.0833 40.7666,48.9971 41.388,48.8247C 42.2833,48.5754 43.0595,47.9211 43.7165,46.8621C 44.3736,45.803 44.7022,44.5069 44.7022,42.9737C 44.7022,41.7083 44.4729,40.6346 44.0143,39.7526C 43.5557,38.8705 42.9198,38.2479 42.1067,37.8846C 42.72,37.4843 43.2183,36.8655 43.6016,36.0281C 43.9849,35.1907 44.1765,34.2548 44.1765,33.2203C 44.1765,32.0935 43.9376,31.0852 43.4599,30.1955C 42.9821,29.3058 42.3956,28.6846 41.7002,28.3321C 41.0047,27.9796 39.8015,27.8033 38.0904,27.8033L 31.8235,27.8033 Z M 34.7146,31.35L 36.6735,31.35C 38.4613,31.35 39.5441,31.3993 39.9219,31.4978C 40.2998,31.5963 40.6214,31.8457 40.887,32.2459C 41.1526,32.6461 41.2854,33.168 41.2854,33.8114C 41.2854,34.5319 41.1225,35.1022 40.7967,35.5224C 40.4709,35.9427 40.0191,36.2021 39.4415,36.3006L 36.9528,36.3745L 34.7146,36.3745L 34.7146,31.35 Z M 34.7146,39.9211L 37.421,39.9211C 38.8556,39.9211 39.8056,40.005 40.271,40.1728C 40.7364,40.3406 41.1095,40.6462 41.3901,41.0895C 41.6707,41.5328 41.811,42.0978 41.811,42.7843C 41.811,43.4555 41.6796,44.0081 41.4168,44.4422C 41.154,44.8763 40.8295,45.1672 40.4435,45.315C 40.0575,45.4628 39.1827,45.5367 37.8193,45.5367L 34.7146,45.5367L 34.7146,39.9211 Z M 50.6667,50.6667L 50.6667,52.25L 52.25,52.25C 52.25,52.7778 52.25,53.3056 51.7222,53.5694C 51.1944,53.8333 50.1389,53.8333 49.0833,53.8333C 49.0833,54.3611 49.0833,54.8889 49.6111,55.1528C 50.1389,55.4167 51.1944,55.4167 52.25,55.4167C 52.7778,55.4167 53.3056,55.4167 53.5694,54.8889C 53.8333,54.3611 53.8333,53.3056 53.8333,52.25L 53.8333,50.6667C 53.8333,49.6111 53.8333,48.5556 53.5694,48.0278C 53.3056,47.5 52.7778,47.5 52.25,47.5C 51.1944,47.5 50.1389,47.5 49.6111,47.7639C 49.0833,48.0278 49.0833,48.5556 49.0833,49.0833C 50.1389,49.0833 51.1944,49.0833 51.7222,49.3472C 52.25,49.6111 52.25,50.1389 52.25,50.6667L 50.6667,50.6667 Z "
    />
  </svg>
);
const upcomingSessions: Session[] = [
  {
    id: "1",
    title: "Beginner Chess Class: Mastering the Fundamentals",
    coach: "Coach John",
    date: "October 10, 2024",
    time: "10:00 AM - 12:00 PM",
    location: "Room 101",
    status: "Scheduled",
    studentsEnrolled: 12,
    gameType: "Chess",
    sessionMode: "In-Person",
    sessionType: "Group",
  },
  {
    id: "2",
    title: "Intermediate Scrabble Workshop: Advanced Word Strategies",
    coach: "Coach Sarah",
    date: "October 12, 2024",
    time: "2:00 PM - 4:00 PM",
    location: "Room 204",
    status: "Scheduled",
    studentsEnrolled: 8,
    gameType: "Scrabble",
    sessionMode: "In-Person",
    sessionType: "Individual",
  },
  {
    id: "3",
    title: "Advanced Chess Strategy: Tactics and Positional Play",
    coach: "Coach Alex",
    date: "October 14, 2024",
    time: "9:00 AM - 11:00 AM",
    location: "Room 303",
    status: "Scheduled",
    studentsEnrolled: 15,
    gameType: "Chess",
    sessionMode: "Online",
    sessionType: "Group",
  },
  {
    id: "4",
    title: "Scrabble Tournament Prep: Maximizing Scores with High-Value Words",
    coach: "Coach Emily",
    date: "October 16, 2024",
    time: "11:00 AM - 1:00 PM",
    location: "Room 105",
    status: "Scheduled",
    studentsEnrolled: 10,
    gameType: "Scrabble",
    sessionMode: "In-Person",
    sessionType: "Group",
  },
  {
    id: "5",
    title: "Chess Endgame Mastery: Techniques for Winning in the Final Moves",
    coach: "Coach Michael",
    date: "October 18, 2024",
    time: "3:00 PM - 5:00 PM",
    location: "Room 202",
    status: "Scheduled",
    studentsEnrolled: 9,
    gameType: "Chess",
    sessionMode: "In-Person",
    sessionType: "Individual",
  },
];

const SessionCard = ({
  session,
  index,
}: {
  session: Session;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "w-full p-4 flex flex-col gap-1",
        index !== 0 ? "border-t border-neutral-200/60" : ""
      )}
    >
      <p className="text-neutral-700 font-semibold tracking-tight">
        {session.title}
      </p>

      <div className="flex gap-1 items-center">
        <p className="text-xs px-2 py-1 my-2 bg-neutral-100 border max-w-fit rounded flex items-center gap-1.5 font-medium">
          {session.gameType === "Chess" ? ChessSvg : ScrabbleSvg}
          {session.gameType}
        </p>
        <p className="text-xs px-2 py-1 my-2 bg-neutral-100 border max-w-fit rounded flex items-center gap-1.5 font-medium">
          {session.sessionMode === "Online" ? (
            <Webcam size={14} />
          ) : (
            <MapPin size={14} />
          )}
          {session.sessionMode}
        </p>{" "}
        <p className="text-xs px-2 py-1 my-2 bg-neutral-100 border max-w-fit rounded flex items-center gap-1.5 font-medium">
          {session.sessionType === "Group" ? (
            <UsersRound size={14} />
          ) : (
            <UserRound size={14} />
          )}
          {session.sessionType}
        </p>
      </div>

      <div className="flex text-sm items-center gap-3 text-neutral-500">
        <div className="flex items-center gap-1.5">
          <Calendar size={14} />
          {session.date}
        </div>{" "}
        <div className="flex items-center gap-1.5">
          <Clock size={14} />
          {session.time}
        </div>
      </div>
      <div className="flex text-sm items-center gap-1.5 text-neutral-500">
        <User size={14} />
        Instructor:{" "}
        <span className="text-neutral-700 font-medium"> {session.coach}</span>
      </div>
      <div className="flex text-sm items-center gap-1.5 text-neutral-500">
        <Users size={14} />
        Enrolled Students:{" "}
        <span className="text-neutral-700 font-medium">
          {session.studentsEnrolled}
        </span>
      </div>
      {/* <a
        href=""
        className="mt-2 text-sm text-orange-500 font-medium underline flex items-center"
      >
        more details
        <ArrowUpRight size={12} />
      </a> */}
      <a
        href=""
        className="mt-2 text-sm px-3 bg-neutral-200 max-w-fit py-1 rounded font-medium flex items-center"
      >
        more details
        <ArrowUpRight strokeWidth="3" size={12} />
      </a>
    </div>
  );
};

const UpcomingSessions = () => {
  const [activeGame, setActiveGame] = useState("scrabble");

  return (
    <div className="w-full border rounded-md bg-white">
      <div className="p-4 border-b flex items-center justify-between text-blue-500">
        <h1 className=" font-semibold ">Upcoming sessions</h1>
        <ChevronRight size={14} strokeWidth={4}  />
      </div>
      <div className="flex flex-col  relative bg-white  p-2  rounded-md">
        {upcomingSessions.map((session, index) => {
          return <SessionCard session={session} key={index} index={index} />;
        })}
        <div className=" w-full flex justify-center">
          <button className="text-sm p-3 w-full rounded-md border flex gap-1.5 items-center justify-center">
            view more
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpcomingSessions;
