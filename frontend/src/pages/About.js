import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "animate.css";

function About() {
  return (
    <>
      <div className="bg-light">
        {/* Banner Section */}
        <section
          className="position-relative text-light text-center d-flex align-items-center justify-content-center"
          style={{
            height: "60vh",
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1920&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="position-relative z-2 animate__animated animate__fadeInDown">
            <h1 className="fw-bold text-warning display-5">About Us</h1>
          </div>
        </section>
      </div>

      {/* About Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Image */}
            <div className="col-md-6 mb-4 mb-md-0">
              <img
                src="https://i.pinimg.com/1200x/32/ab/f1/32abf165cd1801e680c10148112b8fe5.jpg"
                alt="About LMS"
                className="img-fluid rounded-4 shadow animate__animated animate__fadeInLeft"
              />
            </div>

            {/* Right Text */}
            <div className="col-md-6">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <h2 className="fw-bold text-danger mb-4">
                  About Our Platform
                </h2>
                <p className="text-muted mb-4">
                        LMS is the ultimate platform to upgrade your skills, learn from experts, and achieve your career goals.  
                        Our library contains thousands of interactive courses across multiple domains including Web Development, Data Science, Design, and Marketing.  
                        Get verified certificates, mentorship, and lifetime access to resources to accelerate your career growth.
                </p>
                <p className="text-muted mb-4">
                       Whether you are a beginner or a professional, LMS provides flexible learning paths tailored to your needs.  
                       Join a global community of learners and achieve your goals with confidence.
                </p>
                <Link
                  to="/about"
                  className="btn btn-warning fw-semibold px-4 py-2 rounded-pill shadow"
                >
                  Learn More
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
   {/* Why Choose LMS */}
<section className="py-5 bg-light">
  <div className="container">
    <h2 className="fw-bold text-danger text-center mb-5">
      Why Choose LMS?
    </h2>

    <div className="row g-4">
      {/* Box 1 */}
      <div className="col-md-4">
        <div className="p-4 h-100 bg-white rounded-4 shadow-sm text-center">
          <div className="mb-3 fs-1 text-warning">📘</div>
          <h5 className="fw-bold text-danger">Easy to Learn</h5>
          <p className="text-muted mb-0">
            Simple interface and well-structured courses that anyone can follow.
          </p>
        </div>
      </div>

      {/* Box 2 */}
      <div className="col-md-4">
        <div className="p-4 h-100 bg-white rounded-4 shadow-sm text-center">
          <div className="mb-3 fs-1 text-warning">⏱️</div>
          <h5 className="fw-bold text-danger">Flexible Learning</h5>
          <p className="text-muted mb-0">
            Learn anytime, anywhere at your own pace without pressure.
          </p>
        </div>
      </div>

      {/* Box 3 */}
      <div className="col-md-4">
        <div className="p-4 h-100 bg-white rounded-4 shadow-sm text-center">
          <div className="mb-3 fs-1 text-warning">🎯</div>
          <h5 className="fw-bold text-danger">Career Focused</h5>
          <p className="text-muted mb-0">
            Build real-world skills that help you grow professionally.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Our Mission */}
<section className="py-5 bg-white">
  <div className="container">
    <div className="row align-items-center g-5">

      {/* Left Image */}
      <div className="col-md-6">
        <img
          src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=900&q=80"
          alt="Our Mission"
          className="img-fluid rounded-4 shadow"
        />
      </div>

      {/* Right Content */}
      <div className="col-md-6">
        <h2 className="fw-bold text-danger mb-4">Our Mission</h2>

        <div className="d-flex mb-3">
          <span className="fs-3 me-3 text-warning">🌍</span>
          <p className="text-muted mb-0">
            To make quality education accessible and affordable for learners worldwide.
          </p>
        </div>

        <div className="d-flex mb-3">
          <span className="fs-3 me-3 text-warning">🚀</span>
          <p className="text-muted mb-0">
            To empower students with practical skills and career-ready knowledge.
          </p>
        </div>

        <div className="d-flex">
          <span className="fs-3 me-3 text-warning">🤝</span>
          <p className="text-muted mb-0">
            To support lifelong learning through innovation and guidance.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>


    </>
  );
}

export default About;

