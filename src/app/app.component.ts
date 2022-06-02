import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'new-app';
 
  krediTutari:number = 10000; //değişken
  vade:number = 36; //değişken
  aylikOdemeniz:number = 0;
  aylikFaizTutari:number = 117.83;
  toplamGeriOdemeniz:number = 0;

  hesapla(){      //metod
      this.aylikOdemeniz = (this.krediTutari /this.vade)  + this.aylikFaizTutari;
      this.toplamGeriOdemeniz = this.aylikOdemeniz * this.vade;                        //değişkenleri çağırırız
  }
  
  
}
