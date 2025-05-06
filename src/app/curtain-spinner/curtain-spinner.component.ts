import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-curtain-spinner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './curtain-spinner.component.html',
  styleUrl: './curtain-spinner.component.css'
})
export class CurtainSpinnerComponent {
  showApp = true;
  counter = 10;
  intervalId: any;

  ngOnInit(): void {
     this.counterDisplay();
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
