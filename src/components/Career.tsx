import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech (AI & ML)</h4>
                <h5>Newton School of Technology (ADYPU), Pune</h5>
              </div>
              <h3>2024 - 2028</h3>
            </div>
            <p>
              Pursuing Bachelor of Technology in Artificial Intelligence and
              Machine Learning, building strong foundations in algorithms,
              data structures, machine learning, and full-stack development.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance Full‑Stack Developer</h4>
                <h5>Shri Gurukripa Trading Company (Remote)</h5>
              </div>
              <h3>Sep 2025 - Oct 2025</h3>
            </div>
            <p>
              Built an inventory management system using React, Node.js,
              Express.js, and MongoDB for retail billing. Implemented secure
              JWT-based authentication with role-based access control and
              developed purchase, sales, and billing modules with real-time
              stock synchronization.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Open-Source Contributor & Builder</h4>
                <h5>Personal Projects & Community</h5>
              </div>
              <h3>Ongoing</h3>
            </div>
            <p>
              Contributing meaningful pull requests to open-source projects,
              experimenting with AI and full-stack side projects, and
              continuously learning tools like Docker, Prisma, Supabase, and
              modern frontend frameworks.Delivering production-ready CMS-based projects
              including e-commerce, CRM, and import-export automation systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
