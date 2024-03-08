import React from 'react';
import './App.css';
import teamsData from './CollegeBasketballTeams.json';
// Abby Harris
// Section 001
// app to display the basketball teams for the NCAA march madness tournament
interface Team {
  school: string;
  name: string;
  city: string;
  state: string;
}

function Welcome() {
  return <h1>NCAA Basket Teams - March Madness</h1>;
}

function TeamCard({ school, name, city, state }: Team) {
  return (
    <div className="team-card">
      <h2>{school}</h2>
      <p>Mascot: {name}</p>
      <p>
        Location: {city}, {state}
      </p>
    </div>
  );
}
function TeamList() {
  return (
    <div className="team-container">
      {teamsData.teams.map((team: Team, index: number) => (
        <TeamCard key={index} {...team} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <TeamList />
    </div>
  );
}

export default App;
