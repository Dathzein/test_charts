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

  labels2!:string []
  data2!: number []
  labelType2: string = ""
  /**
   *
   */
  constructor( private apiService: TestservicesService ) {
  }

  ngOnInit(): void {
    this.labels = ["Pokemon Kanto","Pokemon Johto"]
    this.data = [151, 250]
    this.labelType = "Pokemon"

    this.labels2 = ["Pokemon Hoen","Pokemon FronteirBattle"]
    this.data2 = [151, 180]
    this.labelType2 = "Pokemon"

    console.log(this.labels, this.data, this.labelType)
    console.log(this.labels2, this.data2, this.labelType2)
    // this.fetchAPIData();
  }
}
