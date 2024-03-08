import { Component, OnInit } from '@angular/core';
import AbitusApiService from '../../core/services/abitus/abitusApi.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Filter } from 'src/app/core/models/abitus/filter.model';
import { PageableResponse } from 'src/app/core/models/abitus/http/pageableResponse.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  formSearch!: FormGroup;
  filters: Filter = { pagina: 0, sexo: '' };
  data: PageableResponse = {
    content: [],
    empty: true,
    pageable: { offset: 0, pageNumber: 0, pageSize: 0, paged: false },
    size: 0,
    totalElements: 0,
    totalPages: 0,
  };

  constructor(
    private abitusService: AbitusApiService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.formSearch = this.formBuilder.group({
      nome: [
        '',
        [
          Validators.minLength(3),
          Validators.maxLength(80),
          Validators.pattern('^[a-zA-ZÀ-ÖØ-öø-ÿs]+$'),
        ],
      ],
      sexo: [''],
      idadeMinima: ['', [Validators.pattern('^[0-9]*$')]],
      idadeMaxima: ['', [Validators.pattern('^[0-9]*$')]],
    });
    this.search();
  }

  search() {
    if (!this.formSearch.valid) {
      alert('Por favor, preencha corretamente todos os campos.');
      return;
    }

    this.abitusService
      .get(this.filters)
      .subscribe((response: PageableResponse) => {
        this.data = response;
        this.filters.pagina = this.data.pageable.pageNumber;
      });
  }

  cleanFilters() {
    this.filters = { pagina: 0, sexo: '' };
  }

  nextPage() {
    if (this.filters.pagina < this.data.totalPages) {
      this.filters.pagina += 1;

      this.search();
    }
  }

  previousPage() {
    if (this.filters.pagina > 1) {
      this.filters.pagina -= 1;

      this.search();
    }
  }
}
