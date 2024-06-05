const Services = () => {
    return (
      <div id="services" className="bg-gray-100 py-20">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Skill Training</h3>
              <p>Providing essential skills in various fields to help youth thrive in their careers.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Mentorship</h3>
              <p>Connecting young people with experienced mentors to guide their professional growth.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Job Opportunities</h3>
              <p>Linking skilled youth with employment opportunities across various industries.</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Services;
  