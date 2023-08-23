import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../app/service/api.service'

@Component({
  selector: 'app-show-requests',
  templateUrl: './show-requests.component.html',
  styleUrls: ['./show-requests.component.css']
})
export class ShowRequestsComponent {

  artists: any;

  constructor(public apiService: ApiService) { }

  ngOnInit() {
    this.getArtists();
  }

  getArtists() {
    this.apiService.getData().subscribe(data => {

      this.artists = data.artists.artist;

      console.log('resultado: ', data.artists.artist);

    })
  }
}
