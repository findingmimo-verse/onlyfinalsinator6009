import Streak from '/src/components/streak'; // adjust path as needed

function MapPage() {
  return (
    <div>
      <h1>Semester Map</h1>
      <button onClick={() => navigate('/gpa')} style={{ position: 'absolute', top: 20, right: 20 }}>
        📊 GPA Tracker
      </button>
    </div>
  );
}

export default MapPage;
