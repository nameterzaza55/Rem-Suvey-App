import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-survey-page',
  templateUrl: './survey-page.page.html',
  styleUrls: ['./survey-page.page.scss'],
})
export class SurveyPagePage implements OnInit {
  items = [
    'ทำเลสะดวกสบายในการเดินทาง',
    'ราคา หรือโปรโมชั่นที่เหมาะสม',
    'สภาพแวดล้อม/สิ่งอำนวยความสะดวกในโครงการ',
    'วัสดุ/อุปกรณ์/ความั่นใจเรื่องคุณภาพการก่อสร้าง',
    'การจัดวางฟังก์ชั่นและพื้นที่ใช้สอยบ้านลงตัว',
    'ความมั่นใจในเรื่องความรับผิดชอบต่อลูกค้า/บริการหลังการขาย'
  ];

  constructor() {

  }

  ngOnInit() {
  }

  reorderItems(event) {
    console.log(event);
    const itemToMove = this.items.splice(event.detail.from, 1)[0];
    this.items.splice(event.detail.to, 0, itemToMove);
    event.detail.complete();
  }

  Send(){
    console.log(this.items);
    
  }

}
