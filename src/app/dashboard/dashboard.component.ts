import { Component, OnInit } from '@angular/core';
import * as QuickSightEmbedding from 'amazon-quicksight-embedding-sdk';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dashboard: any;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.GetDashboardURL();
  }

  public GetDashboardURL() {
    // this.RequestAPI('yourbackendapi.com/api/GetDashboardURL')
      // .subscribe((data) => {
        // console.log(data);
        // let url = data["url"];
        this.Dashboard("url");
      // });
  }

public Dashboard(embeddedURL: string) {

    var containerDiv = document.getElementById("dashboardContainer");
    var options = {
      url: embeddedURL,
      container: containerDiv,
      scrolling: "yes",
      height: "700px",
      width: "100%"
    };

    this.dashboard = QuickSightEmbedding.embedDashboard(options);
  }
public RequestAPI(apiURL) {
 return this.http.get<any>(apiURL,
        {
          headers: new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8'
          }),
        });
}

}
