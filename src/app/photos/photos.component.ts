import { Component, OnInit } from '@angular/core';
import { PicturesService } from '../pictures.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  pictures: any[];

  constructor(private pictureService: PicturesService) { }

  ngOnInit() {
    this.getPictures();
  }


  getPictures(): void {
    this.pictureService.getPictures().subscribe(pictures => this.pictures = pictures);
  }

}
