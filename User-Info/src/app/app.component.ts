import { Component } from '@angular/core';
import { Item } from 'src/models/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'User-Info';

  items:Item[] = [
    new Item('Upload Image','upload'),
    new Item('User Info','upload'),
    new Item('People','people'),
    new Item('Confirmation','confirmation'),
  ]
}
