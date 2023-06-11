import { Component  } from '@angular/core';
import { EChartsOption } from 'echarts';
import html2canvas from 'html2canvas';
import  { jsPDF } from 'jspdf';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'Chart-demo';

  public openPDF(): void {
    let DATA: any = document.getElementById('printDiv');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('angular-demo.pdf');
    });
  }

  chartOption:EChartsOption = {
    legend: {
      data: ['SINGLE', 'BULK', 'SWEETHEART'],
      bottom: '0%'
    },
    responsive: true,
    tooltip: {
      trigger: 'axis'
    },

    xAxis: {
      axisLine: { onZero: true },
      data: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thuresday', 'Friday', 'Saturday'],
      type: 'category',
      splitLine: {
        show: false,
      },
      axisLabel: {
        color: '#7b809a',
        fontSize: 12,
      },
    },

    yAxis: {
      axisLabel: {
        color: '#7b809a',
        fontSize: 12,
       // fontWeight: 'bold'
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: 'grey',
          opacity: 0.5
        },
      },
    },
    series: [
      {
        data: [40, 35, 50, 45, 30, 39, 20],
        type: 'bar',
        name: 'SINGLE',
        barMaxWidth: 15,
         color:'#4cc4df',
         stack: 'one',
         itemStyle: {
            borderRadius: [10, 10, 0, 0]
        },
      },
      {
        data: [30, 10, 5, 25, 3, 10, 40],
        type: 'bar',
        name:'BULK',
        barMaxWidth: 15,
        color:'#1e81b6',
        stack: 'Two',
        itemStyle: {
          borderRadius: [10, 10, 0, 0]
      },
      },{
        data: [30, 20, 30, 20, 19, 30, 10],
        type: 'bar',
        name:'SWEETHEART',
        barMaxWidth: 15,
         stack: 'three',
          color:'#a572fa',
          itemStyle: {
          borderRadius: [10, 10, 0, 0]
      },
      }
    ]
  };
}
