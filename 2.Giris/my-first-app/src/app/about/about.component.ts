import { Component, ViewEncapsulation } from "@angular/core";

@Component ({
    selector:"app-about",
    standalone:true,
        templateUrl:'./about.component.html',    //template ile templateUrl farkı template html kodlarını string olarak yazmak zorundayız templateUrl ise fiziki bir dosya göstermek zorundayız
    styleUrl:"./about.component.css",    //styleUrl tek dosya styleUrls birden fazla dosya gösteriliyor
    imports:[], //Dış kaynaktan import ediliyor
    providers:[],//Servisleri dahil ediyor
    encapsulation:ViewEncapsulation.None//html çıktılarında içerisindeki propları yönetmeyi sağlar
})
export class AboutComponent{

}