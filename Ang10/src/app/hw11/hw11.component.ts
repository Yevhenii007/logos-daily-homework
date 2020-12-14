import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hw11',
  templateUrl: './hw11.component.html',
  styleUrls: ['./hw11.component.scss']
})
export class Hw11Component implements OnInit {

  word: string;
  text: string;
  arrAllWords: Array<string> = [];
  allWords: string;

  classWord: string;
  classText: string;
  myPlaceholderWord = 'word here..';
  myPlaceholderText = 'text here..';

  constructor() { }

  ngOnInit(): void {
  }

  addingWord(): void {
    if (!this.word) {
      this.classWord = 'error';
      this.myPlaceholderWord = 'Please write a word!';
    }
    else {
      this.classWord = '';
      this.myPlaceholderWord = 'word here..';

      this.arrAllWords.push(this.word);
      this.allWords = this.arrAllWords.join(', ');
      this.word = '';
    }
  }

  resetAll(): void {
    this.classWord = '';
    this.myPlaceholderWord = 'word here..';

    this.classText = '';
    this.myPlaceholderText = 'text here..';

    this.arrAllWords = [];
    this.allWords = '';
    this.word = '';

    this.text = '';

  }

  cenzor(): void {
    if (!this.text) {
      this.classText = 'error';
      this.myPlaceholderText = 'Please write a text!';
    }
    else {
      this.classText = 'success';
      this.myPlaceholderText = 'text here..';


      for (const findWors of this.arrAllWords) {
        let star = '';

        const reg = new RegExp(findWors, 'gi');

        // tslint:disable-next-line:only-arrow-functions
        this.text = this.text.replace(reg, function(): string {
          // tslint:disable-next-line:prefer-for-of
          for (let i = 0; i < findWors.length; i++) {
            star += '*';
          }
          return star;
        });
      }
    }
  }
}
