import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharacterForm } from './character-form/character-form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CharacterForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('lesson-05-forms');
}
