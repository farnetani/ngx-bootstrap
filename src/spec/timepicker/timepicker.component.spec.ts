import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimepickerComponent } from '../../timepicker/timepicker.component';
import { TimepickerConfig } from '../../timepicker/timepicker.config';
import { TimepickerActions } from '../../timepicker/reducer/timepicker.actions';

/*function createComponent(htmlTemplate, dtc?: string): ComponentFixture<TimepickerComponent> {
  switch (dtc) {
    case 'OnPush':
      TestBed.overrideComponent(TimepickerComponent, {
        set: {
          template: htmlTemplate,
          changeDetection: ChangeDetectionStrategy.OnPush
        }
      });
      break;
    default:
      TestBed.overrideComponent(TimepickerComponent, {
        set: {template: htmlTemplate}
      });
  }

  const fixture = TestBed.createComponent(TimepickerComponent);
  fixture.detectChanges();
  return fixture as ComponentFixture<TimepickerComponent>;
}*/

describe('Component: timepicker', () => {
  let fixture: ComponentFixture<TimepickerComponent>;
  let context: TimepickerComponent;
  let nativeElement: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimepickerComponent],
      providers: [
        TimepickerConfig,
        TimepickerActions
      ]
    });

    fixture = TestBed.createComponent(TimepickerComponent);
    context = fixture.componentInstance;
    nativeElement = fixture.nativeElement;
    fixture.detectChanges();
  });

  /*validate input fields*/
  // проверить данные в поле минуты
  it('should validate the data in the minutes input', () => {});
  // проверить данные в поле секунды
  it('should validate the data in the seconds input', () => {});
  // изменить активный инпут после нажатия Enter
  it('should change the active input field after enter click', () => {});
  // автоматически заполнить поле ввода, после enter, если введдено не полное значение
  it('should auto complete input field after enter click if enter half value', () => {});
  // автоматическая очистить поля при вводе не корректного значения
  it('should auto clean input field after enter invalid value', () => {});
  // отобразить ошибки на поеле, после ввода не корректного значения
  it('should display error input field after enter invalid value', () => {});

  /*validate input fields with property of 'showMeridian'*/
  // отобразить кнопку AM/PM при состоянии showMeridian по умолчанию
  it('should default state showMeridian display AM/PM button', () => {});
  // отобразить время в формате времени 12h
  it('should display time at time format 12h', () => {});
  // проверить данные в поле ввода Часы при вормате времени 12h
  it('should validate the data in the hours input at time format 12h', () => {});
  // изменить временной период после клика на кнопку AM/PM
  it('should change time period after click on AM/PM button', () => {});
  // не отобразить кнопку AM/PM если showMeridian выключен
  it('should not display AM/PM button if showMeridian switch off', () => {});
  // отобразить время в формате времени 24h
  it('should display time at time format 24h', () => {});
  // проверить данные в поле часы при формате времени 24h
  it('should validate the data in the hours input at time format 24h', () => {});

  /*validate input fields with property of 'max'*/
  // не должно превысить значение поля ввода указанного значения
  it('should not value of the input field exceed the specified value', () => {});
  // изменить значение поля ввода на указанное максимальное значение значение, если оно приывшает указанное максимальное значение
  it('should change the input field to specified value if it exceed the specified value', () => {});

  /*validate input fields with property of 'min'*/
  // не должно быть меньше значения поля ввода указанного значения
  it('should not value of the input field less the specified value', () => {});
  // изменить значение поля ввода на указанное минимальное значение значение, если оно приывшает указанное минимальное значение
  it('should change the input field to specified value if it less the specified value', () => {});

  /*display seconds fields with property of 'showSeconds'*/
  // не отображать поле секунды при значении showSeconds по умолчанию
  it('should default state showSeconds is not display seconds field', () => {});
  // отображать поле секунды если showSeconds включен
  it('should display seconds field if showMeridian switch on', () => {});

  /*input fields with property of 'readonlyInput'*/
  // должна быть возможность ввода значений
  it('should be possible to enter values', () => {});
  // должна отображать кнопки изменения времени
  it('should be display is time change buttons', () => {});
  // не должно быть возможности ввода значений
  it('should be impossible to enter values', () => {});
  // не должны отображаться кнопки изменения времени
  it('should be not display is time change buttons', () => {});

  /*input fields hour with property of 'hourStep'*/
  // добавить в поле ввода часы значение с учетом hourStep
  it('should add to the hour input field value, hourStep value', () => {});
  // вычесть в поле ввода часы значение с учетом hourStep
  it('should subtract to the hour input field value, hourStep value', () => {});

  /*input fields minute with property of 'minuteStep'*/
  // добавить в поле ввода часы значение с учетом minuteStep
  it('should add to the minute input field value, minuteStep value', () => {});
  // вычесть в поле ввода часы значение с учетом minuteStep
  it('should subtract to the minute input field value, minuteStep value', () => {});

  /*default configuration*/
  // поле должно быть пустым
  it('should be empty input fields', () => {});
  // установить время путем нажатия на кнопку изменения времени
  it('should set time in a input field after click on input change button', () => {});

  /*hide change button*/
  // кнопки изменения времени по умолчанию отоброжаются
  it('should display change button in default state', () => {});
  // скрыть кнопки изменения времени
  it('should hide change button', () => {});

  /*validate 'mousewheel'*/
  // включить изменение времени колесом мыши
  it('should can change input value with the mouse wheel', () => {});
  // отключить изменение времени колесом мыши
  it('should can not change input value with the mouse wheel', () => {});

  /*validate 'arrowkeys'*/
  // включить изменение времени кнопками вверх вниз
  it('should can change input value with the arrow keys', () => {});
  // отключить изменение времени кнопками вверх вниз
  it('should can not change input value with the arrow keys', () => {});

  /*custom validate*/
  // отставить поля не заполненными
  it('should leave the input fields not specified', () => {});
  // не верное значение поля
  it('should invalid value in input fields', () => {});
  // верное значение поля
  it('should valid value in input fields', () => {});
});
