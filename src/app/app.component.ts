import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ForYouComponent } from './for-you/for-you.component';
import { NosServicesComponent } from './nos-services/nos-services.component';
import { CustomersComponent } from './customers/customers.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    ForYouComponent,
    NosServicesComponent,
    CustomersComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'tp2_complement_web';
}
