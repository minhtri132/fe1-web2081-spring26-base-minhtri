import { Component } from '@angular/core';

@Component({
  selector: 'app-stories',
  imports: [],
  templateUrl: './stories.html',  
  styleUrl: './stories.css',
})
export class Stories {
  stories = [
    {
      title: 'One Piece',
      author: 'Oda',
      views: 100000,
      born: '1997',
      category: 'Adventure',
      image: 'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.0AhNf_6J8oKqRuiij3G3-gAAAA%3Fpid%3DApi&sp=1773727212T62021bde38665acdbb11e1a6bf858a42d48aecfbb3a73c9e85a43fca376f3fa6'
    },
    {
      title: 'Naruto',
      author: 'Kishimoto',
      views: 90000,
      born: '1997',
      category: 'Adventure',
      image: 'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.0AhNf_6J8oKqRuiij3G3-gAAAA%3Fpid%3DApi&sp=1773727212T62021bde38665acdbb11e1a6bf858a42d48aecfbb3a73c9e85a43fca376f3fa6'
    },
    {
      title: 'Doraemon',
      author: 'Fujiko F Fujio',
      views: 700000,
      born: '1997',
      category: 'Adventure',
      image: 'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.0AhNf_6J8oKqRuiij3G3-gAAAA%3Fpid%3DApi&sp=1773727212T62021bde38665acdbb11e1a6bf858a42d48aecfbb3a73c9e85a43fca376f3fa6'
    },
  ];
}
