import { Component, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material';

export interface Keyword {
  name: string;
}

@Component({
  selector: 'app-keyword-chips',
  templateUrl: './keyword-chips.component.html',
  styleUrls: ['./keyword-chips.component.css']
})

export class KeywordChipsComponent {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  keywords: Keyword[] = [
    {name: 'whatever'}
  ];
  
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

   
    if ((value || '').trim()) {
      this.keywords.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(keyword: Keyword): void {
    const index = this.keywords.indexOf(keyword);

    if (index >= 0) {
      this.keywords.splice(index, 1);
    }
  }
}
