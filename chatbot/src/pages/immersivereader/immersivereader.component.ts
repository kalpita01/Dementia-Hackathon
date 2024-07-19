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

  text: string = "In the quiet village of Eldoria, a young girl named Lila discovered an ancient key buried in her garden. Intrigued, she searched for the lock it might open, leading her to an old, abandoned mansion at the edge of the forest. Inside, she found a hidden door covered in vines, perfectly fitting the key she held. With a turn of the key, the door creaked open to reveal a forgotten room filled with shimmering treasures and a dusty, ornate mirror. As Lila gazed into the mirror, it began to glow, and an image of a majestic, enchanted realm appeared. Suddenly, the mirror spoke, inviting her to enter and explore the magical world beyond. Without hesitation, Lila stepped through the mirror and found herself in a land of vibrant colors and mythical creatures. She befriended a talking fox named Finn, who guided her on an adventure to restore harmony to the kingdom. Together, they defeated a wicked sorceress, lifting the curse that had plagued the land.With the kingdom saved, Lila returned home, the mirror promising her return whenever she wished. From that day on, Lila knew that magic was real and that adventure awaited those brave enough to seek it."
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
