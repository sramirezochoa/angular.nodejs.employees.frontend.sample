import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeaderComponent } from './component/app-header/app-header.component';
import { AppFooterComponent } from './component/app-footer/app-footer.component';
import { AppLeftPanelComponent } from './component/app-left-panel/app-left-panel.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppHeaderComponent, AppFooterComponent, AppLeftPanelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'employees-demo';
}
