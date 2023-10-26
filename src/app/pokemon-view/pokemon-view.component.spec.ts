import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonViewComponent } from './pokemon-view.component';

describe('PokemonViewComponent', () => {
  let component: PokemonViewComponent;
  let fixture: ComponentFixture<PokemonViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonViewComponent]
    });
    fixture = TestBed.createComponent(PokemonViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
