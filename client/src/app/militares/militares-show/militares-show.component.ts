import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppHttpService } from '../../app-http.service';

@Component({
  selector: 'app-militares-show',
  templateUrl: './militares-show.component.html',
  styleUrls: ['./militares-show.component.css']
})
export class MilitaresShowComponent implements OnInit {

  public militar: object = {};

  constructor(private service: AppHttpService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params
    .subscribe((params) => this.view(params.id));
  }

  view(id){
    this.service.build('militares')
    .get(id)
    .subscribe((data) => this.militar = data);
  }

  delete(id){
    this.service
    .delete(id)
    .subscribe(() => {
      this.router.navigate(['/militares']);
    });
  }

}
