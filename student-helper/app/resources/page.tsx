export default function ResourcesPage() {
  return (
    <section className="categories">
      <div className="categories-header">
        <h2>Resources for Students</h2>
        <span style={{ color: "#64748b" }}>Guides &amp; tools</span>
      </div>

      <div className="categories-grid">
        <div className="category-card tech">
          💻 Resume Builders
          <span>Templates &amp; AI tools</span>
        </div>

        <div className="category-card edu">
          📚 Learning Platforms
          <span>Free courses &amp; certifications</span>
        </div>

        <div className="category-card business">
          💼 Career Prep
          <span>Interview &amp; networking</span>
        </div>

        <div className="category-card nonprofit">
          🤝 Volunteer Guides
          <span>How to get involved</span>
        </div>

        <div className="category-card creative">
          🎨 Portfolio Help
          <span>Design &amp; writing samples</span>
        </div>

        <div className="category-card health">
          🏥 Healthcare Paths
          <span>Pre-med &amp; clinical advice</span>
        </div>
      </div>
    </section>
  );
}

