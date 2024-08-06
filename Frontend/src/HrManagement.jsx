import React, { useState } from 'react';
import HrInfo from './HrInfo';
import AddNewHr from './AddNewHr';
import EditHrInfo from './EditHrInfo';
import DeleteHr from './DeleteHr';

const HrManagement = () => {
  const [currentView, setCurrentView] = useState('view');
  const [selectedHr, setSelectedHr] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);

  const handleAddHrClick = () => {
    setCurrentView('add');
  };

  const handleEditHrClick = (hr) => {
    setSelectedHr(hr);
    setCurrentView('edit');
  };

  const handleViewHrClick = () => {
    setCurrentView('view');
  };

  const handleHrUpdate = () => {
    setRefreshKey((oldKey) => oldKey + 1);
    setCurrentView('view');
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'add':
        return <AddNewHr onAdd={handleHrUpdate} />;
      case 'edit':
        return selectedHr ? (
          <EditHrInfo hr={selectedHr} onUpdate={handleHrUpdate} />
        ) : (
          <p>Please select an HR to edit</p>
        );
      case 'view':
      default:
        return (
          <>
            <HrInfo key={refreshKey} />
            {selectedHr && (
              <DeleteHr hrId={selectedHr.id} onDelete={handleHrUpdate} />
            )}
          </>
        );
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <h3>HR Management</h3>
        <div className="mb-3">
          <button className="btn btn-primary me-2" onClick={handleAddHrClick}>
            Add HR
          </button>
          <button className="btn btn-secondary me-2" onClick={handleViewHrClick}>
            View HR
          </button>
          <button
            className="btn btn-warning me-2"
            onClick={() => handleEditHrClick(selectedHr)}
          >
            Edit HR
          </button>
        </div>
        {renderCurrentView()}
      </div>
    </div>
  );
};

export default HrManagement;
