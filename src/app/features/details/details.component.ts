import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import AbitusApiService from 'src/app/core/services/abitus/abitusApi.service';

import { PersonDetails } from 'src/app/core/models/abitus/personDetails.model';

@Component({
  selector: 'app-detail',
  templateUrl: './details.component.html',
})
export class DetailsComponent implements OnInit {
  data: PersonDetails = {};

  constructor(
    private abitusService: AbitusApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.search();
  }

  search() {
    this.route.params.subscribe((params) => {
      this.abitusService
        .getById(params['id'])
        .subscribe((response: PersonDetails) => {
          console.log(response);

          this.data = response;
        });
    });
  }

  shareWhatsapp() {
    // Devido a estar usando localhost a url não é reconhecida como link no whatsapp
    const link: string = window.location.origin + this.router.url;

    const message: string = `PESSOA DESAPARECIDA: ${this.data.nome} de ${
      this.data.idade
    } anos, está ${
      this.data.sexo === 'MASCULINO' ? 'DESAPARECIDO' : 'DESAPARECIDA'
    }. Saiba mais em: <a>${link}</a>`;

    const whatsappLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappLink, '_blank');
  }
}
