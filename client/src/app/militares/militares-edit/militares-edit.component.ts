import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppHttpService } from '../../app-http.service';

@Component({
  selector: 'app-militares-edit',
  templateUrl: './militares-edit.component.html',
  styleUrls: ['./militares-edit.component.css']
})
export class MilitaresEditComponent implements OnInit {

  public militar: object = {};

  constructor(private service: AppHttpService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe((params) => this.view(params.id));
  }

  view(id){
    this.service.build('militares')
    .get(id)
    .subscribe((data) => this.militar = data);
  }

  save(){
    
    this.service.build('militares')
      .update(this.militar.id, this.militar)
      .subscribe(() => {
        this.router.navigate(['/militares/' + this.militar.id]);
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
