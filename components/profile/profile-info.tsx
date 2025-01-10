import { useState } from "react";
import Overview from "./ui/profile-overview";
import WorksExp from "./ui/works-exp";

const profileNavs = [
  { id: "overview", nav: "Profile Overview" },
  { id: "works", nav: "Works/Projects" },
  { id: "experience", nav: "Work Experience" },
];

export const ProfileInfo = ({ data }: any) => {
  const [active, setActive] = useState("overview");

  const renderTabContent = () => {
    switch (active) {
      case "overview":
        return <Overview data={data} />;
      case "works":
        return <WorksExp />;

      default:
        return null;
    }
  };

  return (
    <>
      <div className='flex flex-wrap items-center gap-3 mt-10'>
        {profileNavs.map((profile, index) => {
          return (
            <div
              key={index}
              onClick={() => setActive(profile.id)}
              className={
                profile.id === active
                  ? "font-semibold text-orange-500 bg-orange-200 bg-opacity-50 rounded-full px-3 py-1"
                  : "text-slate-600 cursor-pointer px-3 py-1"
              }>
              {profile.nav}
            </div>
          );
        })}
      </div>
      {renderTabContent()}
    </>
  );
};
