import { Component, EventEmitter, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-input-conversao',
  templateUrl: './input-conversao.component.html',
  styleUrls: ['./input-conversao.component.scss']
})
export class InputConversaoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //record interface chave e valor
  public country: Array<string> = new Array<string>("Real Brasileiro", "Dólar Americano", "Euro"
  );


  public initValor: number = 1;
  public currencyDefoultEua: number = 5;
  public currencyDefoultEu: number = 5.50;
  public outValor: number = this.initValor / this.currencyDefoultEua;

  public selectedValueInit: string = this.country[0];
  public selectedValueOut: string = this.country[1];

  /**
   * SubmitValor
   */
  public SubmitValor() {
    if (this.initValor < 0) {
      this.initValor = 0;
    }

    let i = 0;
    while (this.selectedValueInit == this.selectedValueOut) {
      this.selectedValueOut = this.country[i];
      i++;

    }
    //regra seleceted
    this.initConverterCurrency(this.selectedValueInit, this.selectedValueOut);

  }

  public SubmitOutValor() {
    if (this.outValor < 0) {
      this.outValor = 0;
    }

    //criar um array-> enquanto o nome for igual deve percorrer o array
    let i = 0;
    while (this.selectedValueOut == this.selectedValueInit) {
      this.selectedValueInit = this.country[i];
      i++;

    }

    this.OutConverterCurrency(this.selectedValueOut,this.selectedValueInit);

  }

  public initConverterCurrency(selectedValueInit: string, selectedValueOut: string) {
    if (selectedValueInit === this.country[0]) {
      if (selectedValueOut === this.country[1]) {
        this.outValor = this.initValor / 5;
      }
      else if (selectedValueOut === this.country[2]) {
        this.outValor = this.initValor / 5, 50;
      }


    }
    else if (selectedValueInit === this.country[1]) {
      if (selectedValueOut === this.country[0]) {
        this.outValor = this.initValor * this.currencyDefoultEua;
      }
      else if (selectedValueOut === this.country[2]) {
        this.outValor = this.initValor * (this.currencyDefoultEua / this.currencyDefoultEu);
      }


    }
    else if (selectedValueInit === this.country[1]) {
      if (selectedValueOut === this.country[0]) {
        this.outValor = this.initValor * this.currencyDefoultEua;
      }
      else if (selectedValueOut === this.country[2]) {
        this.outValor = this.initValor * (this.currencyDefoultEua / this.currencyDefoultEu);
      }

    }

    else if (selectedValueInit === this.country[2]) {
      if (selectedValueOut === this.country[0]) {
        this.outValor = this.initValor * this.currencyDefoultEu;
      }
      else if (selectedValueOut === this.country[1]) {
        this.outValor = this.initValor * (this.currencyDefoultEu / this.currencyDefoultEua);
      }


    }


  }
 /*  ======================
  lógica de conversão
  ====================== */
  public OutConverterCurrency(selectedValueOut: string, selectedValueInit: string) {
    if (selectedValueOut === this.country[0]) {
      if (selectedValueInit === this.country[1]) {
        this.initValor = this.outValor / 5;
      }
      else if (selectedValueInit === this.country[2]) {
        this.initValor = this.outValor / 5, 50;
      }


    }
    else if (selectedValueOut === this.country[1]) {
      if (selectedValueInit === this.country[0]) {
        this.initValor = this.outValor * this.currencyDefoultEua;
      }
      else if (selectedValueInit === this.country[2]) {
        this.initValor = this.outValor * (this.currencyDefoultEua / this.currencyDefoultEu);
      }


    }
    else if (selectedValueOut === this.country[1]) {
      if (selectedValueInit === this.country[0]) {
        this.initValor = this.outValor * this.currencyDefoultEua;
      }
      else if (selectedValueInit === this.country[2]) {
        this.initValor = this.outValor * (this.currencyDefoultEua / this.currencyDefoultEu);
      }

    }

    else if (selectedValueOut=== this.country[2]) {
      if (selectedValueInit === this.country[0]) {
        this.initValor = this.outValor * this.currencyDefoultEu;
      }
      else if (selectedValueInit === this.country[1]) {
        this.initValor = this.outValor * (this.currencyDefoultEu / this.currencyDefoultEua);
      }


    }


  }

}



