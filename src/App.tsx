import React, { Component } from "react";
import "./App.css";
import { contacts } from "./data";
import { ContactCard } from "./contact-card";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>My Contacts</h1>
        </header>

        <main>
          {contacts.map(c => (
            <ContactCard key={c.email} person={c} />
          ))}
        </main>
      </div>
    );
  }
}

export default App;
