import { Router } from '@angular/router';
import { RouteGuardService } from './../../services/route-guard.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();

  constructor(
    private routeGuardService: RouteGuardService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  logout() {
    this.routeGuardService.logoutApp();
    this.router.navigate(['']);

  }



}
