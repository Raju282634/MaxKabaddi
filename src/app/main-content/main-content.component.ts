import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouteAccessService } from '../services/route-access.service';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent implements OnInit{

  constructor(private routeAccessService : RouteAccessService){}
  
  ngOnInit(): void {
    this.routeAccessService.setHomeVisited(true);
  }

}
