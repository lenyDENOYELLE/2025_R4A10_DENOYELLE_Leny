import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-service',
  standalone: true,
  imports: [],
  templateUrl: './card-service.component.html',
  styleUrl: './card-service.component.sass'
})
export class CardServiceComponent {
  @Input({ required: true, alias: 'title'}) title!: string;
  @Input({ required: true, alias: 'description'}) desc!: string
  @Input({ required: true, alias: 'imgsrc'}) img!: string;
  @Input({ required: false, alias: 'lien'}) lien: string='/';
}
