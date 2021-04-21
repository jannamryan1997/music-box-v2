import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Chart } from 'chart.js';
@Component({
    selector: 'app-chart',
    templateUrl: 'chart.component.html',
    styleUrls: ['chart.component.scss']
})

export class ChartComponent implements OnInit, OnDestroy, AfterViewInit {

    private _unsubscribe$ = new Subject<void>();
    private _chart: any;
    public chartId: any;
    @Input('chart')
    set chart($event: any) {
        this.chartId = $event;

    }

    constructor() { }

    ngOnInit(): void { }

    ngAfterViewInit(): void {
        if (this.chartId) {
            this._initChart();
        }
    }

    private _initChart(): void {
        const canvasElement: any = document.getElementById(this.chartId);
        // new function nor object kstexce
        this._chart = new Chart(canvasElement, {
            type: 'bar',
            data: {
                labels: ['Strategi 1', 'Strategi 2', 'Strategi 3', 'Strategi 4', 'Strategi 5', 'Strategi 6', 'Strategi 7', 'Strategi 8'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3, 8, 9],
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
            }
        });

    }

    ngOnDestroy(): void {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }
}
