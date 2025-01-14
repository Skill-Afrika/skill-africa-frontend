import { experienceDetails } from "@/types/types";

export default function WorksExperience({
  project,
}: {
  project: experienceDetails;
}) {
  const getDate = (date: string) => {
    const options = { month: "long", year: "numeric" } as const;
    return new Intl.DateTimeFormat("en-US", options).format(new Date(date));
  };

  const getEndDate = (date: string) => {
    const options = { month: "long", year: "numeric" } as const;
    return project.current_role
      ? "Till Now"
      : new Intl.DateTimeFormat("en-US", options).format(new Date(date));
  };

  const description = project.description.split("\n").map((des) => des.trim());

  return (
    <div className='mb-5'>
      <div className='text-xl font-semibold'>{project.job_title}</div>
      <div className='mt-1'>
        at {project.company} | {project.location || "Lagos, Nigeria"} |{" "}
        {getDate(project.start_date)} - {getEndDate(project.end_date)}
      </div>
      <ul className='list-disc list-inside font-thin my-2 text-slate-700 text-sm'>
        {description.map((desc) => (
          <li>{desc}</li>
        ))}
      </ul>
    </div>
  );
}
