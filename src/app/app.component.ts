import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor(private weatherService: WeatherService) {

    }
    ifTrue: boolean = false;
    cityName: string = 'pune';
    weatherData?: WeatherData;

    ngOnInit(): void {
        this.getWeatherData(this.cityName);
        this.cityName = '';
    }

    onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName = '';
    }

    private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName)
    .subscribe({
        next: (response) => {
        this.weatherData = response;
        if(this.weatherData?.main?.temp >19){
            this.ifTrue=true;
        }
        else{
            this.ifTrue=false;
        }
        console.log(response);
        }
    });
    }
}