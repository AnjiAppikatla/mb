import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-my-dashboard',
  templateUrl: './my-dashboard.component.html',
  styleUrl: './my-dashboard.component.scss'
})
export class MyDashboardComponent {

  dynamic_column_1: string = "col-md-2";
  dynamic_column_2: string = "col-md-10";
  iconcolumn: string = 'col-md-2'
  text_columns: boolean = true;

  narration1: string = `Amouranth of House Download 
  First of Her Name The Unclean Queen of the Commerce and the First Men Khaleesi of the Touch Grass Sea Rider of Horses Mother of Doggos &plus; Queen of the...`

  narration2: string = `The Official Asmongold channel for all of his stream content (Highlights, Competition, Reactions & More). Asmongold TV is
  owned by Asmongold and run by Daily Dose of Asmongold and CatDany with...`

  myNavList: any = [
    { text: "Dashboard", icons: "fa-table-columns"},
    { text: "Platforms", icons: "fa-table-list"},
    { text: "Influencers", icons: "fa-user"},
    { text: "Campaigns", icons: "fa-bullhorn"},
    { text: "Messages", icons: "fa-message"}
  ]

  supportList: any = [
    { text: "Security", icons: "fa-shield-halved"},
    { text: "Setting", icons: "fa-gear"},
    { text: "Help & Support", icons: "fa-headphones"}
  ]

  cardList: any = [
    { name: "Eric Padamase", avt: 'avt-3', verified: 'N' , subtitle:"@eri.awesome", nar: this.narration1, subscribers: "154560", videos: "23506706", avg: "23690", reviewest: "125"},
    { name: "Amouranth", avt: 'avt-3', verified: 'Y' , subtitle:"@amouranth.official", nar: this.narration2, subscribers: "1975494", videos: "125986113", avg: "376542",reviewest: "1585"},
    { name: "JuliaAwesome", avt: 'avt-3', verified: 'N' , subtitle:"@eri.awesome", nar: this.narration1, subscribers: "154560", videos: "23506706", avg: "23690",reviewest: "125"},
    { name: "Random Streamer", avt: 'avt-3', verified: 'N' , subtitle:"@amouranth.official", nar: this.narration2, subscribers: "1975494", videos: "125986113", avg: "376542",reviewest: "1585"},
  ]

  toggleClick(){
    if(this.dynamic_column_1 == 'col-md-2'){
      this.dynamic_column_1 = 'col-md-1';
      this.dynamic_column_2 = 'col-md-11'
      this.iconcolumn = 'col-md-12 text-center f-25 text-white'
      this.text_columns = false;
    }
    else{
      this.dynamic_column_1 = 'col-md-2';
      this.dynamic_column_2 = 'col-md-10'
      this.iconcolumn = 'col-md-2'
      this.text_columns = true;
    }
  }

}
