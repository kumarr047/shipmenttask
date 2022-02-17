import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {


  constructor(public dialog: MatDialog) {}
 
  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }
  ngOnInit(): void {
    
  }

  
}


@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
  styles: ['.width-100{width:1200px;}']
})
export class DialogElementsExampleDialog {

 detailstable=[
  {
    startPlace:'Elantas PDG INC',
    endPlace:'Savannah'
  },

   {
     startPlace:'Savannah',
     endPlace:'Singapore'
   },
   {
    startPlace:'Chennai',
    endPlace:'Singapore'
  },
  {
    startPlace:'Savannah',
    endPlace:'Mumbai'
  },
  {
    startPlace:'Elantas PDG INC',
    endPlace:'Savannah'
  },

   
 ]



}
