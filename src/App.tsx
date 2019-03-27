import React from "react";
import "./App.css";
import { contacts, Person } from "./data";
import { ContactCard } from "./contact-card";

const sortByLastname = (a: Person, b: Person) => {
  return [...a.names].pop()!.localeCompare([...b.names].pop()!);
};

const App: React.FC = () => (
  <div className="App">
    <header className="App-header">
      <h1>My Contacts</h1>
    </header>

    <main>
      {contacts.sort(sortByLastname).map(c => (
        <ContactCard key={c.email} person={c} />
      ))}
    </main>
  </div>
);

export default App;
