import React from "react";
import { Person, Address } from "./data";

interface ContactCardProps {
  person: Person;
}

const generateName = (names: string[]) => names.join(" ");

const generateAddress = (address: Address) =>
  `${address.street} ${address.houseNumber}\n` +
  `${address.zipCode} ${address.city}`;

export const ContactCard: React.FC<ContactCardProps> = ({ person }) => (
  <div className="contact">
    <h2>{generateName(person.names)}</h2>
    <p>{person.category}</p>
    <p>E-Mail: {person.email}</p>
    <p>Phone: {person.phone}</p>
    {person.address && <address>{generateAddress(person.address)}</address>}
  </div>
);
