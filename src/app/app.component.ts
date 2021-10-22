import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ifedili';

  $ = (s: any) => document.querySelector(s)

  exitMenu() {
    this.$("#menu").classList.add("exit")
    setTimeout(() => {
      this.$("#menu").classList.remove("exit")
      this.$("#menu").style.transform = "scale(0)";
      this.$("#menu").style.opacity = "0";
    }, 500);
    console.log("exit")
  }

  showMenu() {
    this.$("#menu").style.transform = "scale(1)";
    this.$("#menu").style.opacity = "1";
    console.log("open")
  }
}
