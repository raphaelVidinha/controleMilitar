import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppHttpService } from '../../app-http.service';

@Component({
  selector: 'app-militares-create',
  templateUrl: './militares-create.component.html',
  styleUrls: ['./militares-create.component.css']
})
export class MilitaresCreateComponent implements OnInit {

  public militar: object = {};
  public error: any = null;

  constructor(private service: AppHttpService, private router: Router) { }

  ngOnInit() {
  }

  save(){
    
    this.service.build('militares')
      .create(this.militar)
      .subscribe((data) => {
        this.router.navigate(['/militares']);
      },
      (err) => {
        this.error = err.error.servico_militar_obrigatorio[0];
      });
  }

  showPatentes(){
    let mostrar = document.getElementsByClassName('mostraPatente');
    for (var i = 0; i < mostrar.length; i++) {
      mostrar[i].style.display = 'block';
    }
  }

  hidePatentes(){
    let mostrar = document.getElementsByClassName('mostraPatente');
    for (var i = 0; i < mostrar.length; i++) {
      mostrar[i].style.display = 'none';
    }
  }

}
