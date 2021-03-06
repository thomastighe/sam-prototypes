import { Component, OnInit } from '@angular/core';
import { SamModelService } from '../../model/sam-model.service';

@Component({
  selector: 'app-sam-header',
  templateUrl: './sam-header.component.html',
  styleUrls: ['./_styles.scss', './_structure.scss']
})
export class SamHeaderComponent implements OnInit {

  constructor(public model: SamModelService) { }

  ngOnInit() {
  }

}
