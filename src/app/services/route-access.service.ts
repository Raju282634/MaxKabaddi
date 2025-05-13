import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RouteAccessService {
  private homeVisisted = false;

  constructor() { }

  setHomeVisited(visited: boolean){
    this.homeVisisted = visited;
  }

  isHomeVisited(): boolean {
    return this.homeVisisted;
  }
}
