import { ArrowRightComponent } from './../../icons/arrow-right/arrow-right.component';
import { Component } from '@angular/core';
import { SparkleComponent } from "../../icons/sparkle/sparkle.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [ArrowRightComponent, SparkleComponent]
})
export class HomeComponent {

  openChat(): void {}
}
