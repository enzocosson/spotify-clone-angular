import { Component, Inject, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { LibraryComponent } from './layout/library/library.component';
import {FaIconLibrary, FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { faCirclePlay, faHome, faSearch, faBook, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FontAwesomeModule, HeaderComponent, LibraryComponent, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  implements OnInit{
  title = 'spotify-clone';

  constructor(private faIconLibrary: FaIconLibrary) {}

  ngOnInit(): void {
    this.initFontAwesomeIcons();
  }

  private initFontAwesomeIcons() {
    this.faIconLibrary.addIcons(faCirclePlay, faHome, faSearch, faBook, faPlus);
  }

}
