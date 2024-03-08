import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import AbitusApiService from 'src/app/core/services/abitus/abitusApi.service';
import { PersonDetail } from 'src/app/core/services/abitus/responses/abitusHttp.response';

@Component({
  selector: 'app-detail',
  templateUrl: './details.component.html',
})
export class DetailsComponent implements OnInit {
  data: PersonDetail = {};

  constructor(
    private abitusService: AbitusApiService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.search();
  }

  search() {
    this.route.params.subscribe((params) => {
      this.abitusService
        .getById(params['id'])
        .subscribe((response: PersonDetail) => {
          console.log(response);

          this.data = response;
        });
    });
  }

  shareWhatsapp() {
    const message: string = `PESSOA DESAPARECIDA: FÁBIO PEREIRA DA SILVA de 23 anos, está DESAPARECIDO. Saiba mais em: https://desaparecidos.pjc.mt.gov.br/pessoa-desaparecida/8166`;
    const encodedMessage = encodeURIComponent(message);

    const whatsappLink = `https://api.whatsapp.com/send?text=${encodedMessage}`;

    window.open(whatsappLink, '_blank');
  }
}
