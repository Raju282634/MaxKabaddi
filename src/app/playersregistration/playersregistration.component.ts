import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-playersregistration',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './playersregistration.component.html',
  styleUrl: './playersregistration.component.css'
})
export class PlayersregistrationComponent {
  player = {
    fullName: '',
    dob: '',
    gender: '',
    mobile: '',
    address: '',
    state: '',
    district: '',
    position: '',
    experience: 0
  };

  states: string[] = [];
  districts: string[] = [];
  stateDistrictMap: { [key: string]: string[] } = {};

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<{ [key: string]: string[] }>('assets/state-districts.json')
      .subscribe((data: any) => {
        this.stateDistrictMap = data;
        this.states = Object.keys(data);
      });
  }

  onStateChange() {
    const selectedState = this.player.state;
    this.districts = this.stateDistrictMap[selectedState] || [];
    this.player.district = '';
  }

  onSubmit() {
    console.log('Submitted player data:', this.player);
    alert('Registration submitted successfully!');
  }

}
