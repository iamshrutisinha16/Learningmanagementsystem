import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Users, Award, Laptop, Clock, PlayCircle } from "lucide-react";
import { CourseContext } from "../context/CourseContext";
import CourseCard from "../components/CourseCard";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import { motion } from "framer-motion";

function Home() {
  const { courses } = useContext(CourseContext);

  // Features
  const features = [
    {
      icon: <Users size={42} className="text-danger mb-3" />,
      title: "Expert Instructors",
      text: "Learn from world-class mentors and industry experts.",
    },
    {
      icon: <Laptop size={42} className="text-danger mb-3" />,
      title: "Flexible Learning",
      text: "Study at your own pace — anywhere, anytime.",
    },
    {
      icon: <Award size={42} className="text-danger mb-3" />,
      title: "Verified Certificates",
      text: "Earn certificates to showcase your achievements.",
    },
    {
      icon: <Clock size={42} className="text-danger mb-3" />,
      title: "Lifetime Access",
      text: "Revisit your courses anytime you want.",
    },
  ];

  // Stats
  const stats = [
    { count: "50K+", label: "Active Students" },
    { count: "1200+", label: "Courses Available" },
    { count: "400+", label: "Expert Mentors" },
    { count: "30+", label: "Countries Reached" },
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Aarav Sharma",
      text: "The LMS platform made learning fun! I love how interactive the content is.",
    },
    {
      name: "Riya Mehta",
      text: "Flexible and powerful. Got certified and promoted within months!",
    },
    {
      name: "Kabir Patel",
      text: "Best UI and easy access. It really feels like a professional classroom online.",
    },
  ];

  // Categories
  const categories = [
    { title: "Web Development", img: "https://i.pinimg.com/736x/f8/48/8b/f8488b86d5bce5ddb207519b0b033049.jpg" },
    { title: "Data Science", img: "https://i.pinimg.com/736x/6f/08/08/6f08086d7582c9f34850bc07cbe06d87.jpg" },
    { title: "Design & UX", img: "https://i.pinimg.com/736x/aa/aa/65/aaaa651b4747942712192c221fb14074.jpg" },
    { title: "Marketing", img: "https://i.pinimg.com/736x/c6/e0/c6/c6e0c62998bf53d547fb099f6bc831e2.jpg" },
  ];

  return (
    <div className="bg-light">
     {/* Hero Slider */}
<section className="mb-5">
  <div
    id="heroCarousel"
    className="carousel slide"
    data-bs-ride="carousel"
    data-bs-interval="3000" 
  >
    <div className="carousel-inner">
      {/* Slide 1 */}
      <div
        className="carousel-item active"
        style={{
          height: "90vh",
          backgroundImage: "url('https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1500&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="carousel-caption d-flex flex-column justify-content-center h-100" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="display-4 fw-bold text-warning mb-3">Learn & Achieve with LMS</h1>
            <p className="lead text-white mb-4">Expert courses, anytime, anywhere 🚀</p>
            <Link to="/courses" className="btn btn-warning text-danger fw-semibold px-4 py-2 rounded-pill me-2">Explore Courses</Link>
            <Link to="/register" className="btn btn-outline-light fw-semibold px-4 py-2 rounded-pill">Get Started</Link>
          </motion.div>
        </div>
      </div>

      {/* Slide 2 */}
      <div
        className="carousel-item"
        style={{
          height: "90vh",
          backgroundImage: "url('https://i.pinimg.com/1200x/59/08/ad/5908addd814ea6856c73f6096b48207c.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="carousel-caption d-flex flex-column justify-content-center h-100" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="display-4 fw-bold text-warning mb-3">Flexible Learning, Anytime</h1>
            <p className="lead text-white mb-4">Study at your own pace, anywhere in the world 🌏</p>
            <Link to="/courses" className="btn btn-warning text-danger fw-semibold px-4 py-2 rounded-pill me-2">Explore Courses</Link>
            <Link to="/register" className="btn btn-outline-light fw-semibold px-4 py-2 rounded-pill">Get Started</Link>
          </motion.div>
        </div>
      </div>

      {/* Slide 3 */}
      <div
        className="carousel-item"
        style={{
          height: "90vh",
          backgroundImage: "url('https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=1500&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="carousel-caption d-flex flex-column justify-content-center h-100" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="display-4 fw-bold text-warning mb-3">Get Certified & Grow</h1>
            <p className="lead text-white mb-4">Earn verified certificates and boost your career 🚀</p>
            <Link to="/courses" className="btn btn-warning text-danger fw-semibold px-4 py-2 rounded-pill me-2">Explore Courses</Link>
            <Link to="/register" className="btn btn-outline-light fw-semibold px-4 py-2 rounded-pill">Get Started</Link>
          </motion.div>
        </div>
      </div>
    </div>

    {/* Carousel Controls */}
    <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
    </button>
  </div>
</section>

      {/* 2 About */}
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
          <h2 className="fw-bold text-danger mb-4">About Our Platform</h2>
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

      {/* 3 Categories */}
      <section className="py-5 container text-center">
        <h2 className="fw-bold text-danger mb-5">Explore Categories</h2>
        <div className="row g-4">
          {categories.map((cat, i) => (
            <div key={i} className="col-md-3 col-sm-6">
              <div className="card rounded-4 shadow-sm overflow-hidden h-100 hover-animate" style={{ cursor: "pointer" }}>
                <img src={cat.img} className="card-img-top" alt={cat.title} />
                <div className="card-body">
                  <h5 className="fw-bold">{cat.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-5 text-center container">
        <h2 className="fw-bold text-danger mb-4">Why Choose LMS?</h2>
        <p className="text-muted mb-5">Discover what makes our platform unique — simple, engaging, and effective learning.</p>
        <div className="row g-4">
          {features.map((f, i) => (
            <motion.div key={i} className="col-md-3 col-sm-6"
              whileHover={{ y: -10, boxShadow: "0 10px 25px rgba(220,53,69,0.3)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="p-4 bg-white rounded-4 shadow-sm h-100">
                {f.icon}
                <h5 className="fw-bold">{f.title}</h5>
                <p className="text-muted small">{f.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center fw-bold text-danger mb-5">Popular Courses</h2>
          <div className="row g-4 justify-content-center">
            {courses && courses.length > 0 ? courses.slice(0, 3).map((course) => (
              <motion.div key={course._id} className="col-md-4 col-sm-6"
                whileHover={{ y: -8, boxShadow: "0 10px 25px rgba(220,53,69,0.4)" }}
                transition={{ duration: 0.3 }}
              >
                <CourseCard course={course} />
              </motion.div>
            )) : <p className="text-center text-muted">Courses loading or not available yet.</p>}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-5 text-light text-center" style={{ background: "linear-gradient(135deg, #b30000 0%, #ff3333 100%)" }}>
        <div className="container">
          <h2 className="fw-bold text-warning mb-4">Our Global Impact</h2>
          <div className="row g-4">
            {stats.map((stat, i) => (
              <motion.div key={i} className="col-md-3 col-sm-6"
                whileInView={{ scale: [0.8, 1] }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              >
                <div className="p-4 bg-transparent border border-light rounded-4">
                  <h3 className="fw-bold text-warning">{stat.count}</h3>
                  <p>{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-5 bg-white text-center">
        <div className="container">
          <h2 className="fw-bold text-danger mb-5">What Our Students Say</h2>
          <div className="row g-4">
            {testimonials.map((t, i) => (
              <motion.div key={i} className="col-md-4"
                whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-light text-dark rounded-4 shadow-sm p-4 h-100">
                  <PlayCircle size={32} className="text-danger mb-3" />
                  <p className="fst-italic">“{t.text}”</p>
                  <h6 className="fw-bold mt-3 text-danger">{t.name}</h6>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    {/* CTA Section */}
    <section
      className="py-5 text-center text-light position-relative"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/1200x/37/b3/a7/37b3a7f69bbd910b4a830c1831506a4a.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.65)",
          zIndex: 1,
        }}
      ></div>

      {/* Content */}
      <div className="position-relative" style={{ zIndex: 2 }}>
        <h2 className="fw-bold mb-3 text-warning">
          Start your learning adventure today!
        </h2>
        <p className="mb-4">
          Join thousands of learners who are upgrading their careers every day.
        </p>
        <Link
          to="/register"
          className="btn btn-warning text-danger fw-semibold px-5 py-2 rounded-pill shadow"
        >
          Enroll Now
        </Link>
      </div>
    </section>

  </div>
);
}

export default Home;
