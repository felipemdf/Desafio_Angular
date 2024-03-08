import { Person } from "../person.model";

export interface PageableResponse {
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