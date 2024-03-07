export interface Filter {
  nome?: string;
  sexo: string;
  idadeMinima?: number;
  idadeMaxima?: number;
  pagina: number;
}
export interface Person {
  id: number;
  nome?: string;
  idade?: number;
  sexo?: string;
  urlFoto?: string;
}

export interface PersonDetail {}

export interface PageableHttpResponse {
  content: Person[];
  empty: boolean;
  pageable: {
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
  };
  size: number;
  totalElements: number;
  totalPages: number;
}

export interface HttpResponse {
  data: PersonDetail;
}
