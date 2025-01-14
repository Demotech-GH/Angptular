import { Component } from '@angular/core';

@Component({
  selector: 'app-paperopoli',
  templateUrl: './paperopoli.component.html',
  standalone: true,
  styleUrls: ['./paperopoli.component.css']
})
export class PaperopoliComponent {
  playDuckSound() {
    const audio = new Audio("duck-sound.mp3"); // Assicurati che il file audio esista in questa posizione
    audio.play();
  }
}
