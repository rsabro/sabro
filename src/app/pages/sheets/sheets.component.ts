import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sheets',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  templateUrl: './sheets.component.html',
  styleUrls: ['./sheets.component.scss']
})
export class SheetsComponent implements OnInit {

  header: string[] = [];
  smartphones: { num: string; marca: string; modelo: string; sistema: string; sobre: string; imagem: string }[] = [];
  errorMessage: string | null = null;


  private url: string = "https://script.google.com/macros/s/AKfycbz16p6l9qrtsWWWEGAA3mKtTIPietLgGh2kQmDMOGRzAuMg8gloF26DFoE24_f56WQp/exec";
  private planilha: string = "1a9TXp3CaczHv3JCmZvxfu_KIWpBS4EXP4GoocALB9oc";
  private pagina: string = "Celulares";
  private celulas: string = "A1:F7";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getSmartphones();
  }

  getSmartphones(){
    const params = new HttpParams()
    .set('link', this.planilha)
    .set('pagina', this.pagina)
    .set('celulas', this.celulas);

  const url = `${this.url}?${params.toString()}`;

  this.http.jsonp(url, 'callback').subscribe((response: any) => {
    console.log("Data received via JSONP:", response);
    if (response && response.data) {
      this.header = response.data[0];
      this.smartphones = response.data
      .slice(1)
      .map((row: any[]) => ({
        num: row[0],
        marca: row[1],
        modelo: row[2],
        sistema: row[3],
        sobre: row[4],
        imagem: row[5]
      }));
    } else if (response && response.erro) {
      console.error("Erro do servidor:", response.erro);
      this.errorMessage = response.erro;
    } else {
      console.warn("Resposta inesperada:", response);
    }
  });
  }
}
