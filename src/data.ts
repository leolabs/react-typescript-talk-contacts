export interface Address {
  street: string;
  houseNumber: string;
  zipCode: number;
  city: string;
}

export interface Person {
  names: string[];
  address?: Address;
  email: string;
  phone: string;
  category: "Friends" | "Work";
}

export const contacts: Person[] = [
  {
    names: ["Leo", "Philipp", "Bernard"],
    email: "leo@example.com",
    phone: "+49 176 12345678",
    address: {
      street: "Jülicher Straße",
      houseNumber: "72a",
      zipCode: 52070,
      city: "Aachen",
    },
    category: "Friends",
  },
  {
    names: ["Moritz", "Gunz"],
    email: "moritz@company.com",
    address: {
      street: "Adalbertsteinweg",
      houseNumber: "2",
      zipCode: 52070,
      city: "Aachen",
    },
    phone: "+49 177 7654321",
    category: "Friends",
  },
  {
    names: ["Luke", "Skywalker"],
    email: "luke@skywalker.org",
    phone: "+01 177 5792740",
    category: "Friends",
  },
  {
    names: ["Elliot", "Anderson"],
    email: "mr.robot@lavabit.com",
    phone: "+01 189 384520",
    category: "Work",
  },
];
