import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { auth } from '../../config/firebase-config';
import { useProjects } from '../../hooks/useProjects';
import { useHealth } from '../../hooks/useHealth';
import './dashboard.css';

const Dashboard = () => {
  const { addProject, fetchProjects } = useProjects();
  const { addHealthLog, fetchHealthLogs } = useHealth();

  const { user } = useSelector((state) => state.auth);
  const { items: projects, status: projectStatus } = useSelector((state) => state.projects);
  const { logs: healthLogs, status: healthStatus } = useSelector((state) => state.health);

  // --- FORM STATE 1: PROJECTS ---
  const [projName, setProjName] = useState('');
  const [clientName, setClientName] = useState('');

  // --- FORM STATE 2: HEALTH LOGS ---
  const [selectedProjId, setSelectedProjId] = useState('');
  const [hoursWorked, setHoursWorked] = useState('');
  const [mood, setMood] = useState('3');
  const [burnout, setBurnout] = useState('1');
  const [notes, setNotes] = useState('');

  // Sync initial arrays from Firestore on view initialization
  useEffect(() => {
    fetchProjects();
    fetchHealthLogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCreateProject = async (e) => {
    e.preventDefault();
    if (!projName.trim() || !clientName.trim()) return;

    const successfullyAdded = await addProject({ name: projName, client: clientName });
    if (successfullyAdded) {
      setProjName('');
      setClientName('');
    }
  };

  const handleCreateLog = async (e) => {
    e.preventDefault();
    if (!selectedProjId || !hoursWorked) {
      alert('Please pick a project and input your hours.');
      return;
    }

    const successfullyLogged = await addHealthLog({
      projectId: selectedProjId,
      hoursWorked,
      mood,
      burnout,
      notes
    });

    if (successfullyLogged) {
      setHoursWorked('');
      setNotes('');
      setMood('3');
      setBurnout('1');
      // Re-trigger project pull to update aggregated hours instantly inside UI
      fetchProjects();
    }
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div>
          <h1>DevPulse Central Workspace</h1>
          <p>Operator Session: <strong>{user?.email}</strong></p>
        </div>
        <button className="logout-btn" onClick={() => auth.signOut()}>Log Out</button>
      </header>

      <main className="dashboard-grid">
        {/* PANEL 1: REGISTRATION ENTRY FORMS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
          
          <section className="dashboard-card">
            <h3>Add New Project</h3>
            <form onSubmit={handleCreateProject}>
              <div className="form-group">
                <label>Project Title</label>
                <input type="text" className="form-control" placeholder="e.g., Inventory API" value={projName} onChange={(e) => setProjName(e.target.value)} required />
              </div>
              <div className="form-group">
                <label>Client Organization</label>
                <input type="text" className="form-control" placeholder="e.g., Startup Incubator" value={clientName} onChange={(e) => setClientName(e.target.value)} required />
              </div>
              <button type="submit" className="submit-btn">Register Project</button>
            </form>
          </section>

          <section className="dashboard-card">
            <h3>Log Production Session</h3>
            <form onSubmit={handleCreateLog}>
              <div className="form-group">
                <label>Target Project</label>
                <select className="form-control" value={selectedProjId} onChange={(e) => setSelectedProjId(e.target.value)} required>
                  <option value="">-- Choose Project --</option>
                  {projects.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label>Hours Invested</label>
                <input type="number" step="0.5" className="form-control" placeholder="e.g., 4.5" value={hoursWorked} onChange={(e) => setHoursWorked(e.target.value)} required />
              </div>
              <div className="form-group">
                <label>Current Mental Mood ({mood}/5)</label>
                <input type="range" min="1" max="5" className="form-control" value={mood} onChange={(e) => setMood(e.target.value)} />
              </div>
              <div className="form-group">
                <label>Burnout Multiplier ({burnout}/5)</label>
                <input type="range" min="1" max="5" className="form-control" value={burnout} onChange={(e) => setBurnout(e.target.value)} />
              </div>
              <div className="form-group">
                <label>Engineering Session Notes</label>
                <textarea className="form-control" rows="2" placeholder="Tasks done or blocker descriptions..." value={notes} onChange={(e) => setNotes(e.target.value)}></textarea>
              </div>
              <button type="submit" className="submit-btn green">Record Telemetry</button>
            </form>
          </section>
        </div>

        {/* PANEL 2: PROJECT MANAGEMENT TRACKER */}
        <section className="dashboard-card">
          <h3>Tracked Projects</h3>
          {projectStatus === 'loading' ? <p className="empty-text">Syncing projects...</p> : (
            <div className="item-scroll-container">
              {projects.length === 0 ? <p className="empty-text">No registered engines.</p> : projects.map(p => (
                <div key={p.id} className="data-card-item">
                  <h4>{p.name}</h4>
                  <p>Organization: {p.client}</p>
                  <div className="badge-row">
                    <span className="badge neutral">{p.totalHours || 0} Total Hours</span>
                    <span className="badge success">{p.status}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* PANEL 3: HEALTH TELEMETRY AUDIT LOG */}
        <section className="dashboard-card">
          <h3>Developer Health Stream</h3>
          {healthStatus === 'loading' ? <p className="empty-text">Syncing telemetry...</p> : (
            <div className="item-scroll-container">
              {healthLogs.length === 0 ? <p className="empty-text">No recorded logs yet.</p> : healthLogs.map(l => {
                const connectedProject = projects.find(p => p.id === l.projectId);
                return (
                  <div key={l.id} className="data-card-item log-item">
                    <h4>{connectedProject ? connectedProject.name : 'Unknown System'}</h4>
                    <p><em>"{l.notes || 'No log details added.'}"</em></p>
                    <div className="badge-row">
                      <span className="badge neutral">{l.hoursWorked} hrs</span>
                      <span className={`badge ${l.mood >= 4 ? 'success' : l.mood <= 2 ? 'danger' : 'warning'}`}>Mood: {l.mood}/5</span>
                      <span className={`badge ${l.burnout >= 4 ? 'danger' : l.burnout >= 3 ? 'warning' : 'success'}`}>Burnout: {l.burnout}/5</span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default Dashboard;