import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {window} from 'rxjs/operators';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  now = new Date();
  x = this.now.getDate();
  y = this.now.getMonth();
  p = true;

  months = [
    {
      amis: 'Հունվար',
      day: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
    },
    {
      amis: 'Փետրվար',
      day: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]
    },
    {
      amis: 'Մարտ',
      day: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
    },
    {
      amis: 'Ապրիլ',
      day: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
    },
    {
      amis: 'Մայիս',
      day: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
    },
    {
      amis: 'Հունիս',
      day: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
    },
    {
      amis: 'Հուլիս',
      day: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
    },
    {
      amis: 'Օգոստոս',
      day: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
    },
    {
      amis: 'Սեպտեմբեր',
      day: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
    },
    {
      amis: 'Հոկտեմբեր',
      day: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
    },
    {
      amis: 'Նոյեմբեր',
      day: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
    },
    {
      amis: 'Դեկտեմբեր',
      day: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
    }
  ];

  form: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.form = new FormGroup({
      card_number: new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),
      cardName: new FormControl('', [Validators.required, Validators.pattern('[A-Z\\s]+')]),
      cardVaver: new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),
      cardVaver2: new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),
      cardTaretiv: new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),
      birthDay: new FormControl('0', [Validators.required]),
      birthMonth: new FormControl('0', [Validators.required]),
      vaverDay: new FormControl(this.x, [Validators.required]),
      vaverMonth: new FormControl(this.y, [Validators.required]),
      cardVirtualTaretiv: new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),
      cardPass: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]),
      pass: new FormControl('', [Validators.required, Validators.minLength(8)]),
      passConfirm: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
    console.log(this.form);
  }

  onSubmit() {
    alert('Շնորհակալություն Դուք գրանցված եք');
    console.log(this.form);
  }

  click() {
    alert('cankanum eq pakel ej@?');
    this.p = false;

  }

  getBoolCard() {
    if (this.form.get('card_number').invalid && this.form.get('card_number').touched) {
      return true;
    }
  }

  getBoolCard1() {
    if (this.form.get('card_number').valid && this.form.get('card_number').touched) {
      return true;
    }
  }

  getBoolName() {
    if (this.form.get('cardName').invalid && this.form.get('cardName').touched) {
      return true;
    }
  }

  getBoolName1() {
    if (this.form.get('cardName').valid && this.form.get('cardName').touched) {
      return true;
    }
  }

  getBoolVaver() {
    if (this.form.get('cardVaver').invalid && this.form.get('cardVaver').touched ||
      this.form.get('cardVaver').valid && this.form.get('cardVaver').touched && this.form.get('cardVaver').value > 12) {
      return true;
    }
  }

  getBoolVaver1() {
    if (this.form.get('cardVaver').valid && this.form.get('cardVaver').touched && (this.form.get('cardVaver').value <= 12)) {
      return true;
    }
  }

  getBoolVaver2() {
    if (this.form.get('cardVaver2').invalid && this.form.get('cardVaver2').touched) {
      return true;
    }
  }

  getBoolVaver3() {
    if (this.form.get('cardVaver2').valid && this.form.get('cardVaver2').touched) {
      return true;
    }
  }

  getBoolTaretiv() {
    if ((this.form.get('cardTaretiv').invalid || this.form.get('cardTaretiv').value < 1900 ||
      this.form.get('cardTaretiv').value > 2100) && this.form.get('cardTaretiv').touched) {
      return true;
    }
  }

  getBoolTaretiv1() {
    if (this.form.get('cardTaretiv').valid && this.form.get('cardTaretiv').value >= 1900 &&
      this.form.get('cardTaretiv').value <= 2100 && this.form.get('cardTaretiv').touched) {
      return true;
    }
  }

  getBoolPass() {
    if (this.form.get('cardPass').invalid && this.form.get('cardPass').touched) {
      return true;
    }
  }

  getBoolPass1() {
    if (this.form.get('cardPass').valid && this.form.get('cardPass').touched) {
      return true;
    }
  }

  getBoolVirtualTaretiv() {
    if ((this.form.get('cardVirtualTaretiv').invalid || this.form.get('cardVirtualTaretiv').value < 1900 ||
      this.form.get('cardVirtualTaretiv').value > 2100) && this.form.get('cardVirtualTaretiv').touched) {
      return true;
    }
  }

  getBoolVirtualTaretiv1() {
    if (this.form.get('cardVirtualTaretiv').valid && this.form.get('cardVirtualTaretiv').value >= 1900 &&
      this.form.get('cardVirtualTaretiv').value <= 2100 && this.form.get('cardVirtualTaretiv').touched) {
      return true;
    }
  }


  getBoolVirtualPass() {
    if (this.form.get('pass').invalid && this.form.get('pass').touched) {
      return true;
    }
    /* if (this.form.get('pass').value.pass < 4 )
       return 'Կարճ է!';
     else if (this.form.get('pass').value.pass < 8)
       return 'Ապահով չէ!';
     else if (this.form.get('pass').value.pass < 12)
       return 'Լավ!';
     else return 'Ապահով է!';*/
  }

  getBoolVirtualPass1() {
    if (this.form.get('pass').valid && this.form.get('pass').touched) {
      return true;
    }
  }

  getBoolPassConfirm() {
    if (this.form.get('passConfirm').invalid && this.form.get('passConfirm').touched ||
      this.form.get('passConfirm').value !== this.form.get('pass').value) {
      return true;
    }
  }

  getBoolPassConfirm1() {
    if (this.form.get('passConfirm').valid && this.form.get('passConfirm').touched &&
      this.form.get('passConfirm').value === this.form.get('pass').value) {
      return true;
    }
  }

  }



