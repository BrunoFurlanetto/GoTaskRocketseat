import { Component } from '@angular/core';
import {WelcomeSection} from '../welcome-section/welcome-section';

@Component({
  selector: 'app-main-content',
  imports: [
    WelcomeSection
  ],
  templateUrl: './main-content.html',
  styleUrl: './main-content.css',
})
export class MainContent {

}
