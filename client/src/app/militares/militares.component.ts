import { Component, OnInit } from '@angular/core';
import { AppHttpService } from '../app-http.service';

@Component({
  selector: 'app-militares',
  templateUrl: './militares.component.html',
  styleUrls: ['./militares.component.css']
})
export class MilitaresComponent implements OnInit {

  public militares: any;

  constructor(private service: AppHttpService) { }

  ngOnInit() {
    this.service.build('militares')
    .list()
    .subscribe((data) => {
      this.militares = data;
    });
  }

}
