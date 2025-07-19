import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-live-preview',
  templateUrl: './live-preview.component.html',
  styleUrls: ['./live-preview.component.css'],
  standalone :true,
  imports : [FormsModule, CommonModule]
})
export class LivePreviewComponent {

  public text = ""

}
