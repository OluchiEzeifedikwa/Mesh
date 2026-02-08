// src/components/Dashboard.js
function Dashboard() {
    return (
      <div className="container-fluid py-4">
        <div className="row g-4">
          
          {/* Sidebar */}
          <div className="col-12 col-md-3 col-lg-2 bg-light p-3 rounded">
            <h5 className="mb-3">Dashboard</h5>
            <ul className="nav flex-md-column gap-2">
              <li className="nav-item">Home</li>
              <li className="nav-item">Profile</li>
              <li className="nav-item">Settings</li>
            </ul>
          </div>
  
          {/* Main content */}
          
  
              <div className="col-12 col-sm-6 col-xl-3">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h6 className="card-title">Posts</h6>
                    <p className="fs-4 fw-bold">320</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
  

    );
  }
  
  export default Dashboard;
  