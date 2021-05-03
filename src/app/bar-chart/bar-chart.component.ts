import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType,  ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { Treands1Service } from '../treands1.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor(private trends1service: Treands1Service) { }

  // BAR CHART FOR LOCATION
  barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Number of Onboardees',

        },
        ticks: {
          beginAtZero: true,
          stepSize: 1
        }
      }]
    }
  };

  barChartLabels: Label[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] =
    [{
      data: [],
      label: 'Onboardees Joined'
    }];


  // PIE CHART FOR DEMANDED SKILLS
  // dmdChartOptions: ChartOptions = {
  //   responsive: true,
  //   legend: {
  //     position: 'right',
  //   },
  //   tooltips: {
  //     enabled: true,
  //     mode: 'single',
      // callbacks: {
      //   label: function (tooltipItems, data) {
      //     return ''+data.labels![tooltipItems.index!]+' '+data.datasets![0].data![tooltipItems.index!] + ' %';
      //   }
      // }
  //   },
  // };

  // dmdChartLabels!: Label[];
  // dmdChartData!: number[];
  // dmdChartType: ChartType = 'pie';
  // dmdChartLegend = true;

// PIE CHART FOR SKILLS OF SELECTED ONBOARDEES
// slChartOptions: ChartOptions = {
//   responsive: true,
//   legend: {
//     position: 'right',
//   },
//   tooltips: {
//     enabled: true,
//     mode: 'single',
//   },
// };

//   slChartLabels!: Label[];
//   slChartData!: number[];
// slChartType: ChartType = 'pie';
// slChartLegend = true;
  
  ngOnInit(): void {
    // this.trends1service.getcountPerYear().subscribe(data => {
    //   this.setBarGraphValues(data);
    //   console.log(data);
    })

    // this.trends1service.getcountPerYear().subscribe(data => {
    //   //console.log("Skill Data: ", Object.keys(data));
    //   this.setDmdChartValues(data);
    // })

    // this.trends1service.getSelectedSkillData().subscribe(data => {
    //   console.log("Skill Data: ", Object.keys(data));
    //   this.setSelectedChartValues(data);
    // })
  }

  setBarGraphValues(data : any) {
    for (const i in data) {
      console.log(data[i].date);
      console.log(data[i].id);
      this.barChartLabels.push(data[i].date);
      this.barChartData[0].data!.push(data[i].id);
    }
  }

  // setDmdChartValues(data: any) {
  //   for (const i in data) {
  //   this.dmdChartLabels.push(data[i].date);
  //   this.dmdChartData.push(data[i].id);
  //   }
  // }

  // setSelectedChartValues(data) {
  //   this.slChartLabels = Object.keys(data);
  //   this.slChartData = Object.values(data);
  // }

}




// barChartOptions: ChartOptions = {
//   responsive: true,
// };
// barChartLabels: Label[] = ['Apple', 'Banana', 'Kiwifruit', 'Blueberry', 'Orange', 'Grapes'];
// barChartType: ChartType = 'bar';
// barChartLegend = true;
// barChartPlugins = [];

// barChartData: ChartDataSets[] = [
//   { data: [45, 37, 60, 70, 46, 33], 
//     label: 'Best Fruits' 
//   }
// ];
