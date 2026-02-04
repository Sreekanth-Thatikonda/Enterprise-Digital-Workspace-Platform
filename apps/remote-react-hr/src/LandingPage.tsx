
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <header className="header">
        <h1>HR Management Portal</h1>
        <nav>
          <button onClick={() => navigate('/')}>Home</button>
          <button onClick={() => navigate('/login')}>Login</button>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h2>Welcome to the Next Gen HR Platform</h2>
          <p>Manage efficient workflows with our Digital Workspace.</p>
          <Button label="Get Started" className="cta-button" onClick={() => console.log('Get Started')} />
        </section>

        <section className="features">
          <div className="feature-card">
            <h3>Employee Directory</h3>
            <p>Access and manage employee information securely.</p>
          </div>
          <div className="feature-card">
            <h3>Leave Management</h3>
            <p>Streamlined process for leave requests and approvals.</p>
          </div>
          <div className="feature-card">
            <h3>Performance Reviews</h3>
            <p>Track and evaluate performance seamlessly.</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Enterprise Digital Workspace. All rights reserved.</p>
      </footer>

      <style>{`
        .landing-page {
          font-family: 'Inter', sans-serif;
          color: #333;
          line-height: 1.6;
        }
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          background-color: #fff;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .header h1 {
          margin: 0;
          font-size: 1.5rem;
          color: #2563eb;
        }
        .header nav button {
          margin-left: 1rem;
          background: none;
          border: none;
          cursor: pointer;
          font-weight: 500;
          color: #555;
        }
        .hero {
          text-align: center;
          padding: 4rem 2rem;
          background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
        }
        .hero h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          color: #1e293b;
        }
        .cta-button {
          background-color: #2563eb;
          color: white;
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 1rem;
          margin-top: 1rem;
          transition: background-color 0.2s;
        }
        .cta-button:hover {
          background-color: #1d4ed8;
        }
        .features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          padding: 4rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        .feature-card {
          padding: 2rem;
          background: white;
          border-radius: 8px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          text-align: center;
        }
        .feature-card h3 {
          color: #1e293b;
          margin-bottom: 0.5rem;
        }
        .footer {
          text-align: center;
          padding: 2rem;
          background-color: #1e293b;
          color: #94a3b8;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
