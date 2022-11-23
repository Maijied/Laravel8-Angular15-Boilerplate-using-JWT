import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {TokenService} from "../services/token.service";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-order-management',
  templateUrl: './order-management.component.html',
  styleUrls: ['./order-management.component.css']
})
export class OrderManagementComponent {
  constructor(private router:Router,
              private token:TokenService,
              private Auth:AuthService) {
  }
  logout(event:MouseEvent){
    event.preventDefault();
    this.token.remove();
    this.Auth.changeAuthStatus(false);
    this.router.navigateByUrl('/login');
  }
}
