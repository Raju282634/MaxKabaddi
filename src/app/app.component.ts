import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CurtainSpinnerComponent } from "./curtain-spinner/curtain-spinner.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from "./header/header.component";
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet, HttpClientModule, CurtainSpinnerComponent, HeaderComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MaxKabaddi';
}
