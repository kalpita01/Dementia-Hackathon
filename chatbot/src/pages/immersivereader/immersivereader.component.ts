import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-immersivereader',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './immersivereader.component.html',
  styleUrl: './immersivereader.component.scss'
})
export class ImmersivereaderComponent {

  text: string = "Hello, this is a text."
  private synth = window.speechSynthesis;

  constructor() {}

  readTextAloud(): void {
    if (this.synth.speaking) {
      console.error('SpeechSynthesis is already speaking.');
      return;
    }
    if (this.text !== '') {
      const utterThis = new SpeechSynthesisUtterance(this.text);
      utterThis.onend = () => {
        console.log('SpeechSynthesisUtterance.onend');
      };
      utterThis.onerror = (event) => {
        console.error('SpeechSynthesisUtterance.onerror', event);
      };
      this.synth.speak(utterThis);
    }
  }

}
