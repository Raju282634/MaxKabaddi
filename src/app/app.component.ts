import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from "./header/header.component";
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet, HttpClientModule, HeaderComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'MaxKabaddi';
  showApp = false;
  counter = 10;
  intervalId: any;

  @ViewChild('bgAudio', { static: false }) bgAudioRef!: ElementRef<HTMLAudioElement>;

  constructor(){}

  ngOnInit(): void {
    this.playMusic();
    this.counterDisplay();
  }
  
  playMusic(): void{
    const audioElement = this.bgAudioRef?.nativeElement;
    if (audioElement) {
      audioElement.play().then(() => {
        console.log('Playback started successfully');
      }).catch(err => {
        console.warn('Playback failed:', err);
      });
    }
  }
  
  counterDisplay(): void{
    this.intervalId = setInterval(() => {
      this.counter--;
      if (this.counter === 0) {
        clearInterval(this.intervalId);
        this.showApp = true;
      }
    }, 1000);
  }

}
