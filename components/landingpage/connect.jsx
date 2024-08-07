const Connect = () => {
  return (
    <div className="w-full md:px-16 px-10 flex flex-col items-center justify-center pb-16">
      <div
        className="pt-8 md:pt-14 h-96 mx-8 flex flex-col justify-center items-center gap-4 md:gap-8 mt-16 md:px-12 px-6 rounded-3xl"
        style={{ backgroundColor: "rgba(190, 189, 253, 0.5)" }}
      >
        <h1 className="text-center md:text-4xl text-xl font-semibold">
          Connect with other freelancers just like you!
        </h1>
        <a
          href="/community"
          className="text-white md:px-4 md:py-3 px-2 py-1 rounded-3xl text-xs md:text-lg"
          style={{ backgroundColor: "rgba(4, 2, 27, 1)" }}
        >
          Join the community
        </a>
      </div>
    </div>
  );
};
export default Connect;
