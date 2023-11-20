import { Component, OnInit } from '@angular/core';
import { TestservicesService } from 'src/app/services/testservices.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  labels!:string []
  data!: number []
  labelType: string = ""
  /**
   *
   */
  constructor( private apiService: TestservicesService ) {
    this.labels = ["Pokemon Kanto","Pokemon Johto"]
    this.data = [151, 250]
    this.labelType = "Pokemon"
  }

  ngOnInit(): void {
    this.labels = ["Pokemon Kanto","Pokemon Johto"]
    this.data = [151, 250]
    this.labelType = "Pokemon"

    console.log(this.labels, this.data, this.labelType)
    // this.fetchAPIData();
  }
}
