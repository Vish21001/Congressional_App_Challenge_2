export default function SavedPage() {
  return (
    <section className="categories">
      <div className="categories-header">
        <h2>Your Saved Opportunities</h2>
        <span style={{ color: "#64748b" }}>Quick access</span>
      </div>

      <div className="categories-grid">
        <div className="category-card tech">
          💻 Software Internship
          <span>Remote · Summer</span>
        </div>

        <div className="category-card nonprofit">
          🤝 Nonprofit Volunteer
          <span>Education-focused</span>
        </div>

        <div className="category-card business">
          💼 Business Analyst Intern
          <span>Hybrid · Paid</span>
        </div>

        <div className="category-card creative">
          🎨 Graphic Design Role
          <span>Portfolio-based</span>
        </div>
      </div>
    </section>
  );
}

