import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { UserService } from '../user.service';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  token = ''

  constructor(private loginService: LoginService,private userService : UserService, private router: Router) { }

  ngOnInit(): void {
  }
  

  onSubmit(user){
    console.log(user)
    this.loginService.logIn(user).subscribe(response => {  
      if(response.result.code === '400'){
        alert('Incorrect Email or Password')
      }
      else{
      this.token = response.token
      console.log(response.token)
      this.userService.getProfile(response.token).subscribe(response => {
        console.log(response)
        alert('Loged In')
        localStorage.setItem('Token',this.token)
        this.router.navigateByUrl("/shoplist");
        });
       }
      });
  }
}
