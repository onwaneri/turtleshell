import React, { useState } from 'react';

const LandingPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbzW0KtwPEZtJwpf8YqB4jYPldUakJul0otz7yByyX4srhn2tbajpqXj0lvC6-EZbitG/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Since we're using no-cors mode, we can't check response.ok
      // Instead, we'll assume success if no error is thrown
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error:', error);
      setFormStatus('error');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-green-500">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="mb-8 flex flex-col items-center">
            <p className="text-white text-xl font-semibold">A Northwestern University Venture</p>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Revolutionizing Tableware for Accessibility
          </h1>
          <h2 className="text-4xl md:text-5xl text-white/90 mb-12 animate-fade-in-up">
            Meet the CoolTray: The bowl with 360° handles-designed for safe, easy microwave use for everyone.
          </h2>
          <div className="space-y-6">
            <a
              href="#kickstarter"
              className="inline-block bg-white text-blue-600 hover:bg-blue-50 text-xl font-bold py-4 px-12 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-bounce-subtle"
            >
              Support Our Kickstarter
            </a>
            <p className="text-white text-xl">
              Help us bring accessible tableware to the world!
            </p>
          </div>
        </div>
      </section>

      {/* Brief Intro */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-2xl text-gray-700 leading-relaxed">
              Everyday objects like bowls and plates haven't changed in centuries. For people with motor control issues, these outdated designs make meal prep difficult and sometimes unsafe. We're here to change that.
            </p>
          </div>
        </div>
      </section>

      {/* About the Founders */}
      <section className="py-24 bg-gradient-to-r from-green-50 to-blue-50 relative">
        <img 
          src="/turtleshell-outline-logo.png" 
          alt="TurtleShell Outline Logo" 
          className="absolute left-0 top-1/2 w-40 opacity-10 filter mix-blend-multiply -translate-y-1/2" 
          style={{ filter: 'hue-rotate(120deg) saturate(2)' }}
        />
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center text-blue-600 mb-16">
            Meet the Team
          </h2>
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                <img 
                  src="/nd-photo.jpg" 
                  alt="ND Nwaneri" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-blue-600 mb-4">ND Nwaneri</h3>
              <p className="text-gray-600 mb-2">Computer Engineering & Neuroscience</p>
              <p className="text-gray-700">ND is a freshman at Northwestern University from Iowa City, Iowa. He's passionate about using technology to improve people's lives and hopes to enter the field of biotechnology while focusing on human-centered work.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                <img 
                  src="/ben-photo.jpg" 
                  alt="Ben Runde" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Ben Runde</h3>
              <p className="text-gray-600 mb-2">Manufacturing & Design Engineering and Economics</p>
              <p className="text-gray-700">Ben is a freshman at Northwestern University from McLean, Virginia. He's passionate about the intersection of Human Centered Design and generative Design, and exploring the policies and environments that lead to increased innovation and productivity to maximize growth and advancement in economies and societies.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                <img 
                  src="/milo-photo.jpg" 
                  alt="Milo Fernandez" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Milo Fernandez</h3>
              <p className="text-gray-600 mb-2">Biomedical Engineering</p>
              <p className="text-gray-700">Milo is a freshman at Northwestern University studying Biomedical Engineering. He grew up in Greater Boston, and has interests in biomechanics and rehabilitation, stemming from a history of athletic involvement and various exposures to medicine.</p>
            </div>
          </div>
          <div className="mt-12 text-center text-gray-700">
            <p>ND and Milo will be working full-time on TurtleShell Tableware this summer as part of Northwestern's Jumpstart at The Garage.</p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center text-blue-600 mb-16">
            Why We Started
          </h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-700 space-y-8">
            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-2xl shadow-lg">
              <p className="mb-6">
                Most tableware hasn't evolved in thousands of years. While these designs work "well enough" for many, they create real barriers for people with disabilities. We saw an opportunity to make a difference by redesigning a basic object-the bowl-to be safer and easier to use for everyone.
              </p>
              <p>
                After talking with organizations and individuals across the country, we learned just how widespread this problem is. That's why we created the CoolTray as part of our mission to make everyday life more accessible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The CoolTray */}
      <section className="py-24 bg-gradient-to-r from-green-50 to-blue-50 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center text-blue-600 mb-16">
            The CoolTray: Accessible, Safe, and Easy
          </h2>
          
          {/* Feature Showcase */}
          <div className="mb-16">
            <div className="relative max-w-4xl mx-auto">
              {/* Interactive Feature Points */}
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-lg font-bold">1</span>
                    <h3 className="text-xl font-bold text-purple-900">Thermo Insulated Grip</h3>
                  </div>
                  <p className="text-gray-700">Protects users hands from hot containers | fits in most microwaves</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-lg font-bold">2</span>
                    <h3 className="text-xl font-bold text-purple-900">Wide Base</h3>
                  </div>
                  <p className="text-gray-700">Makes it easy and stable to place foods or containers within the Cool Tray</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-lg font-bold">3</span>
                    <h3 className="text-xl font-bold text-purple-900">Splash Guard</h3>
                  </div>
                  <p className="text-gray-700">High wall to prevent spillage from containers placed in the Cool Tray from getting on the user or surroundings</p>
                </div>
              </div>

              {/* Question Title */}
              <div className="text-center mt-12">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
                  Why Do We Need to Touch HOT Containers When Using the Microwave???
                </h3>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <div className="transform hover:scale-105 transition-transform duration-300">
                <img
                  src="/cooltray-product.jpg"
                  alt="CoolTray - 360° Handle Bowl"
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-6 py-2 rounded-full font-bold">
                  New!
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                The CoolTray is a microwave-safe bowl with 360° ergonomic handles, making it easy to grip from any angle. Its heat-insulated design helps users safely remove hot dishes from the microwave without spills or burns.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-lg">
                  <span className="bg-green-500 text-white rounded-full p-2 mr-4">✓</span>
                  360° ergonomic handles for easy gripping
                </li>
                <li className="flex items-center text-lg">
                  <span className="bg-green-500 text-white rounded-full p-2 mr-4">✓</span>
                  Heat-insulated to protect hands
                </li>
                <li className="flex items-center text-lg">
                  <span className="bg-green-500 text-white rounded-full p-2 mr-4">✓</span>
                  Durable, high-quality materials
                </li>
                <li className="flex items-center text-lg">
                  <span className="bg-green-500 text-white rounded-full p-2 mr-4">✓</span>
                  Promotes independence for people with motor control challenges
                </li>
                <li className="flex items-center text-lg">
                  <span className="bg-green-500 text-white rounded-full p-2 mr-4">✓</span>
                  Dishwasher and microwave safe
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Value & Revenue Model */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center text-blue-600 mb-16">
            How We Create Value
          </h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-700">
            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-2xl shadow-lg">
              <p>
                TurtleShell Tableware empowers users to prepare meals safely and independently. Our first product, the CoolTray, is produced using injection molding for quality and affordability. We plan to sell in bulk to schools for the disabled, then expand to e-commerce for individuals and caregivers. Your support helps us scale and reach more people.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-24 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center text-blue-600 mb-16">
            Our Progress So Far
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              "Completed first CoolTray prototype",
              "Conducted interviews and outreach with organizations nationwide",
              "Confirmed strong interest from potential users",
              "Preparing for real-life user testing and product refinement",
              "ND and Milo working full-time on the venture this summer"
            ].map((milestone, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center">
                  <span className="bg-green-500 text-white rounded-full p-2 mr-4">✓</span>
                  <p className="text-lg text-gray-700">{milestone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center text-blue-600 mb-16">
            Get in Touch
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-center text-gray-700 mb-8">
              Have questions, feedback, or want to partner with us? Fill out the form below or email us.
            </p>
            <form onSubmit={handleSubmit} className="space-y-8 bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-2xl shadow-xl">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              {formStatus === 'success' && (
                <p className="text-green-600 text-center">Thank you for your message! We'll get back to you soon.</p>
              )}
              {formStatus === 'error' && (
                <p className="text-red-600 text-center">Sorry, there was an error sending your message. Please try again later.</p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Sticky Kickstarter CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-blue-600 text-white py-4 px-6 shadow-lg transform translate-y-0 transition-transform duration-300 hover:translate-y-1">
        <div className="container mx-auto flex justify-between items-center">
          <p className="text-lg font-bold">Support TurtleShell Tableware on Kickstarter!</p>
          <a
            href="#kickstarter"
            className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Back Our Project
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-8 mt-24 relative">
        <div className="container mx-auto flex flex-col items-center">
          <img 
            src="/turtleshell-logo.png" 
            alt="TurtleShell Logo" 
            className="h-16 mb-4 drop-shadow-lg" 
          />
          <p className="text-lg">&copy; {new Date().getFullYear()} TurtleShell Tableware. All rights reserved.</p>
        </div>
        <img 
          src="/turtleshell-outline-logo.png" 
          alt="TurtleShell Outline Logo" 
          className="absolute right-8 bottom-8 w-24 opacity-10 filter mix-blend-multiply" 
          style={{ filter: 'hue-rotate(120deg) saturate(2)' }}
        />
      </footer>
    </div>
  );
};

export default LandingPage; 