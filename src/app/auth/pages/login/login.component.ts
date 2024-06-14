import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(){
    
    this.authService.login('fernando@gmail.com', '123456').subscribe({
      next: (user) => {
        console.log(user);
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }


}
