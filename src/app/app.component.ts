import { Component } from '@angular/core';
import { faSquareFull } from '@fortawesome/free-solid-svg-icons';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { faGlobeEurope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  faSquareFull = faSquareFull;
  faFolderOpen = faFolderOpen;
  faLaptop = faLaptop;
  faVideo = faVideo;
  faGraduationCap = faGraduationCap;
  faDesktop = faDesktop;
  faGlobeEurope = faGlobeEurope;
}
