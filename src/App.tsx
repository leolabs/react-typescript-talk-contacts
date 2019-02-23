import React, { Component } from "react";
import "./App.css";
import { contacts, Person } from "./data";
import { ContactCard } from "./contact-card";

class App extends Component {
  sortByLastname(a: Person, b: Person) {
    return [...a.names].pop()!.localeCompare([...b.names].pop()!);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>My Contacts</h1>
        </header>

        <main>
          {contacts.sort(this.sortByLastname).map(c => (
            <ContactCard key={c.email} person={c} />
          ))}
        </main>
      </div>
    );
  }
}

export default App;
