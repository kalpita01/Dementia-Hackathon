import { Component } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { GamesComponent } from '../games/games.component';
import { ImmersivereaderComponent } from '../immersivereader/immersivereader.component';
import { LocationComponent } from '../location/location.component';
import { GalleryComponent } from '../gallery/gallery.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, GamesComponent, ImmersivereaderComponent, LocationComponent, GalleryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent {

}
