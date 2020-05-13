import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;
  
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  onClick() {
    console.log(`${this.username}`);
    this.router.navigate(['/employee/search']);
  }

}
