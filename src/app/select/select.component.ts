import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Input() multiple;
  @Input() search;

  @ViewChild('matSelect') matSelect;
  allColors;
  filteredColors;
  @Input()
  set colors(data) {
      this.filteredColors = data;
      this.allColors = data;
  }
  selectall: boolean = false;
  languages = new FormControl();

  constructor() { }

  ngOnInit() {
  }

  filter(value: string) { 
    let filter = value.toLowerCase();
    this.filteredColors = this.allColors.filter(option => option.toLowerCase().startsWith(filter));
  }

  selectalllang() {
      if  (!this.selectall) {
        this.languages = new FormControl();
        return;
      }else if (this.selectall) {
          this.languages = new FormControl();
          this.languages.setValue(this.allColors);
      }
   }

   submit() {
    this.matSelect.close();
 }
 clear() {
   this.languages = new FormControl();
   this.selectall = false;
 }
}
