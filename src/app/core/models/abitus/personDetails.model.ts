import { LastOccurrence } from "./lastOccurrence.model";

export interface PersonDetails {
    id?: number;
    nome?: string;
    idade?: number;
    sexo?: string;
    urlFoto?: string;
    ultimaOcorrencia?: LastOccurrence
  }