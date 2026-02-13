// ===== Mock Data & Types =====
export interface Owner {
  firstName: string;
  lastName: string;
  nationalCode: string;
  birthDate: string; // YYYY-MM-DD
  phone: string;
}

export interface Code {
  region: string;
  neighborhood: string;
  block: string;
  property: string;
  building: string;
  apartment?: string;
  unit?: string;
}

export interface FormData {
  code: Code;
  hasEndWork: boolean;
  endWorkDate?: string;
  structureType: "فلزی" | "بتن" | "آجر";
  description: string;
  owner: Owner;
  createdAt: string; // ISO timestamp
}

// ---------- داده اولیه ----------
export const mockData: FormData[] = [
  {
    code: {
      region: "01",
      neighborhood: "02",
      block: "123",
      property: "456",
      building: "01",
      apartment: "007",
      unit: "002",
    },
    hasEndWork: true,
    endWorkDate: "2026-02-12",
    structureType: "فلزی",
    description: "ملک نمونه شماره 1",
    owner: {
      firstName: "علی",
      lastName: "رضایی",
      nationalCode: "0012345678",
      birthDate: "1370-01-01",
      phone: "09123456789",
    },
    createdAt: "2026-02-12T18:22:10.000Z",
  },
  {
    code: {
      region: "02",
      neighborhood: "01",
      block: "456",
      property: "789",
      building: "02",
      apartment: "003",
      unit: "001",
    },
    hasEndWork: false,
    structureType: "بتن",
    description: "ملک نمونه شماره 2",
    owner: {
      firstName: "سارا",
      lastName: "محمدی",
      nationalCode: "0098765432",
      birthDate: "1365-05-15",
      phone: "09121234567",
    },
    createdAt: "2026-02-12T19:00:00.000Z",
  },
];
