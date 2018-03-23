import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';
import {Ad} from '../../../models/ad.model';
import {AdsService} from '../../../services/ads.service';

@Component({
  selector: 'app-ads-table',
  templateUrl: './ads-table.component.html',
  styleUrls: ['./ads-table.component.css']
})
export class AdsTableComponent implements AfterViewInit, OnInit {
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource: MatTableDataSource<Ad> = new MatTableDataSource<Ad>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor (private adsService: AdsService) {
  }
  ngOnInit() {
    this.adsService.getAds().subscribe((data) => {
      this.dataSource = new MatTableDataSource<Ad>(data);
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}


