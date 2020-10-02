import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  currentpage=4;
 images=[
   {
     title:'A Puppy',
     url:'https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60'
   },
   {
    title:'A Kitty',
    url:'https://images.unsplash.com/photo-1586042091284-bd35c8c1d917?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60'
  },
  {
    title:'Baby Elephant',
    url:'https://images.unsplash.com/photo-1598755257428-e7533d2f8771?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60'
  },
  {
    title:'Chickens',
    url:'https://images.unsplash.com/photo-1562054438-8452d9fb1366?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60'
  },
  {
    title:'A Squirrel',
    url:'https://images.unsplash.com/photo-1507666405895-422eee7d517f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60'
  },
  {
    title:'Puppy With Curly Hairs',
    url:'https://images.unsplash.com/photo-1588104705356-6dc8852e4cf2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60'
  },
  {
    title:'A Cute Puppy',
    url:'https://images.unsplash.com/photo-1586796304259-5fa44d5e3f71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60'
  }
 ];

checkWindowIndex(index:number){
  return Math.abs(this.currentpage-index)<5;
}
}
