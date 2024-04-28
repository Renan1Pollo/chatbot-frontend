import { ArrowRightComponent } from './../../icons/arrow-right/arrow-right.component';
import { Component } from '@angular/core';
import { SparkleComponent } from "../../icons/sparkle/sparkle.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [ArrowRightComponent, SparkleComponent]
})
export class HomeComponent {
  constructor(private router: Router) { }

  openChat() {
    this.router.navigate(["chat"])
  }
}
