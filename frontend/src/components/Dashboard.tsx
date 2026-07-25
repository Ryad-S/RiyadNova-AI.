function Dashboard() {
  return (
    <section className="dashboard">
      <h2>AI Dashboard</h2>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>Business Ideas</h3>
          <p>12 Ideas</p>
        </div>

        <div className="dashboard-card">
          <h3>Market Reports</h3>
          <p>5 Reports</p>
        </div>

        <div className="dashboard-card">
          <h3>Business Plans</h3>
          <p>3 Plans</p>
        </div>

        <div className="dashboard-card">
          <h3>AI Tasks</h3>
          <p>28 Completed</p>
        </div>
      </div>
    </section>
  )
}

export default Dashboard
