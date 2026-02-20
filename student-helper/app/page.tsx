export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="ai-badge">✨ AI-Powered Assistance</div>
        <h1>Find Your Next Opportunity</h1>
        <p>
          Discover internships, volunteer work, and more tailored to your skills
          and interests.
        </p>

        <div className="search-card">
          <div className="search-icon" aria-hidden="true">
            🔍
          </div>
          <div className="search-title">What are you looking for?</div>
          <div className="search-sub">
            Tell us your interests or choose from the suggestions below
          </div>

          <div className="pill-row" id="pill-row">
            <div className="pill">💻 Tech internships</div>
            <div className="pill">🤝 Volunteer work</div>
            <div className="pill">🏥 Healthcare internships</div>
            <div className="pill">🎨 Creative work</div>
            <div className="pill">🔬 Research work</div>
            <div className="pill">💼 Business internships</div>
          </div>

          <div className="search-input">
            <input
              id="search-input"
              placeholder="What kind of opportunity are you looking for?"
            />
            <button id="search-btn" type="button">
              ➤
            </button>
          </div>
        </div>
      </section>

      <section className="categories">
        <div className="categories-header">
          <h2>Browse by Category</h2>
          <span className="view-all">View All →</span>
        </div>

        <div className="categories-grid">
          <div className="category-card tech">
            💻 Technology<span>1 opportunity</span>
          </div>
          <div className="category-card health">
            🏥 Healthcare<span>1 opportunity</span>
          </div>
          <div className="category-card edu">
            📚 Education<span>1 opportunity</span>
          </div>
          <div className="category-card nonprofit">
            🤝 Nonprofit<span>3 opportunities</span>
          </div>
          <div className="category-card business">
            💼 Business<span>2 opportunities</span>
          </div>
          <div className="category-card creative">
            🎨 Creative Arts<span>2 opportunities</span>
          </div>
        </div>
      </section>
    </>
  );
}
