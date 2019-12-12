import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SurveyPagePage } from './survey-page.page';

describe('SurveyPagePage', () => {
  let component: SurveyPagePage;
  let fixture: ComponentFixture<SurveyPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SurveyPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
