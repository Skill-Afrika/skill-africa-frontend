const Footer = () => {
  return (
    <div className="px-16 py-12 text-lg font-normal flex flex-col gap-10 md:gap-12">
      <div className="flex justify-between">
        <div className="flex md:flex-row flex-col justify-between gap-4 md:gap-8">
          <h1>Events</h1>
          <h1>Blogs</h1>
          <h1>Contact us</h1>
        </div>
        <div className="flex md:flex-row flex-col justify-between gap-4 md:gap-8">
          <h1>Events</h1>
          <h1>Blogs</h1>
          <h1>Contact us</h1>
        </div>
      </div>
      <div
        className="h-1"
        style={{ backgroundColor: "rgba(4, 2, 27, 0.3)" }}
      ></div>
      <div className="flex justify-between">
        <div className="flex justify-between md:flex-row flex-col gap-4 md:gap-8">
          <h1>@SkillAfrica</h1>
          <h1>All right reserved</h1>
        </div>
        <div className="flex justify-between md:flex-row flex-col gap-4 md:gap-8">
          <h1>Terms of services</h1>
          <h1>Privacy policy</h1>
        </div>
      </div>
    </div>
  );
};
export default Footer;
