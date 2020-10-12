import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePacketDialogComponent } from './create-packet-dialog.component';

describe('CreatePacketDialogComponent', () => {
  let component: CreatePacketDialogComponent;
  let fixture: ComponentFixture<CreatePacketDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePacketDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePacketDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
