import { Component } from '@angular/core';
import { MSGraphService } from './Services/msgraph.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  LoggedIn = this.MsalService.logedIn$;
  constructor(private MsalService:MSGraphService) {

  }
  title = 'Sereso-Frontend';
}
