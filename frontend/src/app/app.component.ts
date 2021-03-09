import {AfterViewInit, Component} from '@angular/core';
import {AuthService} from './services/auth/auth.service';
import * as Feather from 'feather-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  title = 'frontend';

  public constructor(public auth: AuthService) {
  }

  ngAfterViewInit(): void {
    Feather.replace();
  }
}
