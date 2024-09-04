import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
  onSubmit(){
    //handle contact form submission logic here
    console.log('Form submitted');
    //you cuold include logic to send the form data to backend here
  }
}
