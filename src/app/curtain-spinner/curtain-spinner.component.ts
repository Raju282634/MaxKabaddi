import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-curtain-spinner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './curtain-spinner.component.html',
  styleUrl: './curtain-spinner.component.css'
})
export class CurtainSpinnerComponent implements OnInit {
  showApp = true;
  counter = 10;
  intervalId: any;

  @ViewChild('bgAudio', { static: false }) bgAudioRef!: ElementRef<HTMLAudioElement>;

  constructor(){}

  ngOnInit(): void {
    this.playMusic();
    this.counterDisplay();
  }
  
  playMusic(): void{
    // Delay ensures DOM is stable before playback
    setTimeout(() => {
      const audioElement = this.bgAudioRef?.nativeElement;

      if (audioElement) {
        audioElement.play().then(() => {
          console.log('Playback started successfully');
        }).catch(err => {
          console.warn('Playback failed:', err);
        });
      }
    }, 100); // 100ms delay is safer than 0ms
    
  }  
  counterDisplay(): void{
    this.intervalId = setInterval(() => {
      this.counter--;
      if (this.counter === 0) {
        clearInterval(this.intervalId);
        this.showApp = false;
      }
    }, 1000);
  }

}
