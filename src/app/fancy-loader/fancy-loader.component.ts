import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-fancy-loader',
  templateUrl: './fancy-loader.component.html',
  styleUrls: ['./fancy-loader.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FancyLoaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
