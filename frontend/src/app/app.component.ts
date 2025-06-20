import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  // templateUrl: './app.component.html',
  templateUrl: './nav.component.html',
  // template: `
  //   <h1>Hello world!</h1>
  // `,
  // styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'frontend';
  title = 'home';
}
