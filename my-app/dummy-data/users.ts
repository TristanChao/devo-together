export interface User {
  firstName: string,
  lastName: string,
  id: string,
  bio?: string,
  city?: string,
  homeChurch?: string,
  homeChurchCity?: string,
  favVerse?: string,
}

export let users: User[] = [
  {
    id: "s2YDuF46NHCWQtSMXv75",
    firstName: "Tristan",
    lastName: "Chao",
    city: "Lake Forest, CA",
    homeChurch: "Berean Community Church",
    homeChurchCity: "Irvine",
    favVerse: "1 John 3:1"
  },
  {
    id: "CN3mDLXlCXJ11eI2g93g",
    firstName: "Caleb",
    lastName: "Kim",
  },
  {
    id: "ousDQTPJiFH1qm0r7yvZ",
    firstName: "George",
    lastName: "Wu",
  },
  {
    id: "P4hlSNOdzdrKjfmTqNMm",
    firstName: "Vincent",
    lastName: "Nguyen",
  },
  {
    id: "seYqq3g5dkLoMxt7oVho",
    firstName: "Karsten",
    lastName: "Ma",
  },
]