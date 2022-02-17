import { NUMBER_TYPE } from '@angular/compiler/src/output/output_ast';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(public dialog: MatDialog) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogExample);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }



}




@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-example.html',
  styles: ['table {width:1200px;}']

})
export class DialogExample implements AfterViewInit {
  displayedColumns: string[] = ['POSITION', 'BOOKINGNO', 'STATUS', 'SHIPPER', 'CONSIGNEE', 'OS', 'COUNTRY', 'RECEIPT', 'LAND'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    console.log("table values",this.dataSource);
  }

}
export interface PeriodicElement {
 
  POSITION: number;
  BOOKINGNO: number;
  STATUS: string;
  SHIPPER: string;
  CONSIGNEE: string;
  OS: string;
  COUNTRY: string;
  RECEIPT: string;
  LAND: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  { POSITION: 1, BOOKINGNO: 10214458, STATUS: 'DISPATCHED', SHIPPER: 'HILARY', CONSIGNEE: 'ELEZHBETH', OS: 'HLOS', COUNTRY: 'AMERICA', RECEIPT: "CHENNAI", LAND: "INDIA" },
  { POSITION: 2, BOOKINGNO: 10215558, STATUS: 'NOT DISPATCHED', SHIPPER: 'HIMOS', CONSIGNEE: 'LINFGRH', OS: 'LLO', COUNTRY: 'CANADA', RECEIPT: "MUMBAI", LAND: "INDIA" },
  { POSITION: 3, BOOKINGNO: 10214844, STATUS: 'DISPATCHED', SHIPPER: 'GEORGE', CONSIGNEE: 'ROTRIGUGR', OS: 'HSLO', COUNTRY: 'INDIA', RECEIPT: "VIZAG", LAND: "INDIA" },
  { POSITION: 4, BOOKINGNO: 10986321, STATUS: ' NOT DISPATCHED', SHIPPER: 'FERNANDAS', CONSIGNEE: 'PALAMN', OS: 'ALO', COUNTRY: 'AFRICA', RECEIPT: "CHENNAI", LAND: "INDIA" },
  { POSITION: 5, BOOKINGNO: 10986325, STATUS: 'DISPATCHED', SHIPPER: 'DONALD', CONSIGNEE: 'LOTURNO', OS: 'KDO', COUNTRY: 'SAVANNAH', RECEIPT: "COCHIN", LAND: "INDIA" },
  { POSITION: 6, BOOKINGNO: 10214458, STATUS: 'DISPATCHED', SHIPPER: 'HILARY', CONSIGNEE: 'ELEZHBETH', OS: 'HLOS', COUNTRY: 'AMERICA', RECEIPT: "CHENNAI", LAND: "INDIA" },
  { POSITION: 7, BOOKINGNO: 10215558, STATUS: 'NOT DISPATCHED', SHIPPER: 'HIMOS', CONSIGNEE: 'LINFGRH', OS: 'LLO', COUNTRY: 'CANADA', RECEIPT: "MUMBAI", LAND: "INDIA" },
  { POSITION: 8, BOOKINGNO: 10214844, STATUS: 'DISPATCHED', SHIPPER: 'GEORGE', CONSIGNEE: 'ROTRIGUGR', OS: 'HSLO', COUNTRY: 'INDIA', RECEIPT: "VIZAG", LAND: "INDIA" },
  { POSITION: 9, BOOKINGNO: 10986321, STATUS: ' NOT DISPATCHED', SHIPPER: 'FERNANDAS', CONSIGNEE: 'PALAMN', OS: 'ALO', COUNTRY: 'AFRICA', RECEIPT: "CHENNAI", LAND: "INDIA" },
  { POSITION: 10, BOOKINGNO: 10986325, STATUS: 'DISPATCHED', SHIPPER: 'DONALD', CONSIGNEE: 'LOTURNO', OS: 'KDO', COUNTRY: 'SAVANNAH', RECEIPT: "COCHIN", LAND: "INDIA" },
];
