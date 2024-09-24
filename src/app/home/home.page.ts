import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private text = "texto";

  constructor() {}

    public onChangeText() {
      this.text = "mudado";
    }

    public getText(){
      return this.text;
    }
}
