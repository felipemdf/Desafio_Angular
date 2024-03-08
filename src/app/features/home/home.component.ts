import { Component, OnInit } from '@angular/core';
import AbitusApiService from '../../core/services/abitus/abitusApi.service';
import {
  Filter,
  PageableHttpResponse,
  Person,
} from 'src/app/core/services/abitus/responses/abitusHttp.response';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  formSearch!: FormGroup;

  filters: Filter = { pagina: 0, sexo: '' };

  missingPeople: Person[] = [];
  totalPages: number = 1;

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
      .subscribe((response: PageableHttpResponse) => {
        console.log(response);

        this.missingPeople = response.content;
        this.totalPages = response.totalPages;
      });
  }

  cleanFilters() {
    this.filters = { pagina: 0, sexo: '' };
  }

  nextPage() {
    if (this.filters.pagina < this.totalPages) {
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
