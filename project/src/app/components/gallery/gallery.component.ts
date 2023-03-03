import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  title: string = "Card Image 1";
  imgSrc: string = "https://images.unsplash.com/photo-1675468408406-470b28bb2b81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80";
  imgList: string[] = ["https://images.unsplash.com/photo-1675468408406-470b28bb2b81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80", "https://images.unsplash.com/photo-1675456110784-677355878495?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
    "https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60",
  ];
  index = 0;
  
  showMore() {
    this.index++; 

    if (this.index == this.imgList.length)
    {
      this.index = 0;
    }

    this.imgSrc = this.imgList[this.index];
    this.title = "card Image " + (this.index+1);
  }

  

}
