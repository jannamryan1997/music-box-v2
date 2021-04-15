import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Chart } from 'chart.js';
@Component({
    selector: 'app-statistics',
    templateUrl: 'statistics.view.html',
    styleUrls: ['statistics.view.scss']
})

export class StatisticsViewComponent implements OnInit, AfterViewInit, OnDestroy {
    private _unsubscribe$ = new Subject<void>();
    private _chart: any;
    constructor() { }

    ngOnInit(): void { }

    ngAfterViewInit() {
        this._initChart();
    }

    private _initChart(): void {
        const canvasElement: any = document.getElementById('chart');
        console.log(canvasElement);
        this._chart = new Chart(canvasElement, {
            type: 'bar',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    
                }
            }
        });
    }

    ngOnDestroy(): void {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }
}
