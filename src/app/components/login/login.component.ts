import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject, takeUntil} from 'rxjs';
import {AuthService} from '../../core/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  message!: string;
  private unsubscribe: Subject<void> = new Subject();

  constructor(public authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.setMessage();
  }

  isNotLoggedIn(): boolean {
    return !this.authService.isLoggedIn;
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  ngOnDestroy(): void {
    console.log('[takeUntil ngOnDestroy]');
    this.unsubscribe.complete();
  }
  onLogin(): void {
    this.message = 'Trying to log in ...';
    const observer = {
      next: () => {
        this.setMessage();
        if (this.authService.isLoggedIn) {
          const redirect = this.authService.redirectUrl
            ? this.authService.redirectUrl
            : '/admin';
          this.router.navigate([redirect]);
        }
      },
      error: (err: any) => console.log(err),
      complete: () => console.log('[takeUntil] complete')
    };
    this.authService
      .login()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(observer);
  }
  onLogout(): void {
    this.authService.logout();
    this.setMessage();
  }
  private setMessage(): void {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in with Admin Role' : 'out');
  }
}
