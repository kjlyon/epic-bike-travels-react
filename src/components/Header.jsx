import data from '../data'


export default function Header() {
    const tripsTotal = data;
    const milesCompleted = data.reduce((sum, entry) => entry.completed ? sum + Number(entry.distance): sum, 0);
    const tripsCompleted = data.reduce((sum, entry) => entry.completed ? sum + 1 : sum, 0);



    return (
      <div className="header-container">
        <div class="header">
            <h1 class="header-title">Epic Bike Travels</h1>
        </div>
        <div className="stats-box">
          <div className="stats-item">{tripsCompleted} of {data.length} Trips Completed</div>
          <div className="stats-item">{milesCompleted} Miles Completed</div>
        </div>
      </div>
    );
  }