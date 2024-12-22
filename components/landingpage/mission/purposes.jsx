const purposes = [
  {
    textHead: "Tech Skills Training",
    textBody:
      "We offer comprehensive training programs in in-demand tech skills such as software development, data science, cybersecurity, and artificial intelligence.",
    outlines: ["Practical and Industry-Relevant", "Job-Ready Graduates"],
  },

  {
    textHead: "Leadership Development",
    textBody:
      "We recognize the importance of leadership skills alongside technical skills. We invite industry leaders and experts to provide essential leadership training.",
    outlines: [
      "Soft Skills Development",
      "Strategic Thinking",
      "Ethical Leadership",
    ],
  },

  {
    textHead: "Community Building",
    textBody:
      "We are committed to fostering a robust community of nation-builders who support and inspire each other.",
    outlines: [
      "Networking Events",
      "Collaborative Projects",
      "Mentorship Programs",
    ],
  },
];

export default function Purposes() {
  return (
    <>
      <div className='md:m-10 m-5 md:flex justify-between items-center bg-orange-50 rounded-md'>
        {purposes.map((purpose, index) => {
          return (
            <>
              <div key={index} className='relative md:w-1/3 p-5'>
                <div className='text-lg font-semibold'>{purpose.textHead}</div>
                <div className='my-2'>{purpose.textBody}</div>
                {index !== purposes.length - 1 && (
                  <div className='md:block hidden absolute top-0 right-0 h-full w-[1px] bg-orange-500' />
                )}

                {purpose.outlines.map((list, index) => {
                  return (
                    <ul key={index} className='list-disc list-inside'>
                      <li>{list}</li>
                    </ul>
                  );
                })}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
