import { Component, Input } from '@angular/core';

import { Person } from 'src/app/core/models/abitus/person.model';

@Component({
  selector: 'home-card',
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() content: Person = {
    id: 0,
    nome: undefined,
    idade: undefined,
    sexo: undefined,
    urlFoto: undefined,
  };
}
