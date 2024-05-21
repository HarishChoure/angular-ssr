import { Component } from '@angular/core';
import { ApiHandlerService } from '../api-handler.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  apiResponse!: any;
  show= false;
  constructor(private apiHandlerService: ApiHandlerService) {
    console.log("test component")
  } 

  ngOnInit(): void {
    this.callFetchApi();
  }

  callFetchApi(): void {
    this.apiHandlerService.fetchDataFromApi().subscribe((response)=>{
      this.apiResponse = response;
      this.show = true;
    })
    console.log("api call")
  }
}
