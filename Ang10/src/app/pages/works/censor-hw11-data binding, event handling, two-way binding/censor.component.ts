import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-censor',
  templateUrl: './censor.component.html',
  styleUrls: ['./censor.component.scss']
})
export class CensorComponent implements OnInit {

  word: string;
  text: string;
  arrAllWords: Array<string> = [];
  allWords: string;

  classWord = 'form-control';
  classText = 'form-control';
  myPlaceholderWord = 'word here..';
  myPlaceholderText = 'text here..';

  constructor() { }

  ngOnInit(): void {
  }

  addingWord(): void {
    if (!this.word) {
      this.classWord = 'form-control error';
      this.myPlaceholderWord = 'Please write a word!';
    }
    else {
      this.classWord = 'form-control ';
      this.myPlaceholderWord = 'word here..';

      this.arrAllWords.push(this.word);
      this.allWords = this.arrAllWords.join(', ');
      this.word = '';
    }
  }

  resetAll(): void {
    this.classWord = 'form-control ';
    this.myPlaceholderWord = 'word here..';

    this.classText = 'form-control';
    this.myPlaceholderText = 'text here..';

    this.arrAllWords = [];
    this.allWords = '';
    this.word = '';

    this.text = '';

  }

  cenzor(): void {
    if (!this.text) {
      this.classText = 'form-control error';
      this.myPlaceholderText = 'Please write a text!';
    }
    else {
      this.classText = 'form-control success';
      this.myPlaceholderText = 'text here..';


      for (const findWors of this.arrAllWords) {
        let star = '';

        const reg = new RegExp(findWors, 'gi');

        this.text = this.text.replace(reg, () => {
          for (const word of findWors) {
            star += '*';
          }
          return star;
        });
      }
    }
  }
}
