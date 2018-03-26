import { Component, OnInit, ElementRef } from '@angular/core';
import * as d3 from 'd3';
import {Primitive} from 'd3-array';
import {AdsService} from '../../services/ads.service';
import {MatTableDataSource} from '@angular/material';
import {Ad} from '../../models/ad.model';

@Component({
  selector: 'app-histogram',
  templateUrl: './histogram.component.html'
})
export class HistogramComponent implements OnInit {

  el: HTMLElement;
  dataSource;

  constructor(private elementRef: ElementRef, private adsService: AdsService) {
    this.el = elementRef.nativeElement;
    this.adsService.activeAds$.subscribe((ads: Ad[]) => {
      this.dataSource = new MatTableDataSource<Ad>(ads);
    });
  }

  ngOnInit(): void {
    this.drawHistogram();
  }

  drawHistogram() {
    const w = 600;
    const h = 400;

    console.log(this.dataSource);
    const dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
      11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];

    const xScale = d3.scaleBand()
      .domain(d3.range(dataset.length).map((d) => d + ''))
      .rangeRound([0, w])
      .paddingInner(0.05);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(dataset)])
      .range([0, h]);
    // Create SVG element
    const svg = d3.select('#container')
      .append('svg')
      // responsive SVG needs these 2 attributes and no width and height attr
      .attr('preserveAspectRatio', 'xMinYMin meet')
      .attr('viewBox', '0 0 600 400')
      .classed('svg-content-responsive', true);

    // Create bars
    svg.selectAll('rect')
      .data(dataset)
      .enter()
      .append('rect')
      .attr('x', function(d, i) {
        return xScale(i + '');
      })
      .attr('y', function(d) {
        return h - yScale(d);
      })
      .attr('width', xScale.bandwidth())
      .attr('height', function(d) {
        return yScale(d);
      })
      .attr('fill', function(d) {
        return 'rgb(194, 24, ' + Math.round(d * 10) + ')';
      })
      .on('mouseover', function(data) {

        // Get this bar's x/y values, then augment for the tooltip
        const xPosition = parseFloat(d3.select(this).attr('x')) + xScale.bandwidth() / 2;
        const yPosition = parseFloat(d3.select(this).attr('y')) / 2 + h / 2;
        d3.select('#tooltip')
          .style('left', xPosition + 'px')
          .style('top', yPosition + 'px')
          .select('#value')
          .text(data);
        d3.select('#tooltip').classed('hidden', false);
        d3.select(this)
          .attr('fill', 'rgb(255,255,255,0.7');
      })
      .on('mouseout', function(d) {

        // Hide the tooltip
        d3.select('#tooltip').classed('hidden', true);
        d3.select(this)
          .transition('Color')
          .duration(250)
          .attr('fill', 'rgb(194, 24, ' + (d * 10) + ')');
        })
      .on('click', function() {
        d3.select('#tooltip').classed('hidden', true);
        sortBars();
      });
    // Create labels
    svg.selectAll('text')
      .data(dataset)
      .enter()
      .append('text')
      .text(function(d) {
        return d;
      })
      .attr('text-anchor', 'middle')
      .attr('x', function(d, i) {
        return xScale(i + '') + xScale.bandwidth() / 2;
      })
      .attr('y', function(d) {
        return h - yScale(d) + 14;
      })
      .attr('font-family', 'sans-serif')
      .attr('font-size', '11px')
      .attr('fill', 'white');

    let sortOrder = false;

    // Define sort function
    const sortBars = function() { // naming transitions prevents interruptions.  Once named, can interrupt transitions manually.
      sortOrder = !sortOrder;
      svg.selectAll('rect')
        .sort(function(a: Primitive, b: Primitive) {
          if (sortOrder) {
            return d3.ascending(a, b);
          } else {
            return d3.descending(a, b);
          }
        })
        .transition('SortBars')
        .duration(1000)
        .delay((d, i) => i * 50)
        .attr('x', function(d, i) {
          return xScale(i + '');
        });
    };
  }
}
