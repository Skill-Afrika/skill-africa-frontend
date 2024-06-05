const Testimonials = () => {
    return (
      <div id="testimonials" className="bg-white py-20">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">What People Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <p className="mb-4">"Skill Afrika has changed my life by providing the skills I needed to succeed in my career."</p>
              <p className="font-bold">- Jane Doe</p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <p className="mb-4">"The mentorship program helped me navigate my professional journey with confidence."</p>
              <p className="font-bold">- John Smith</p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <p className="mb-4">"Thanks to Skill Afrika, I found a job that I love and that helps me support my family."</p>
              <p className="font-bold">- Amina Khan</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Testimonials;
  