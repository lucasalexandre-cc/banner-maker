type UniversityData = {
  id: number;
  name: string;
  acronym: string;
  state: string;
};

type UniversitiesQueryData = {
  universities: Array<UniversityData>;
};

export type { UniversitiesQueryData };
