import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature',
  standalone: true
})
export class TemperaturePipe implements PipeTransform {

  transform(value: string | number | null, inputType: 'cel' | 'fah', outputType?: 'cel' | 'fah'): string | null {
    console.log('pipe value', value)
    let val: number;
    if(!value) {
      return null;
    }

    if(typeof value === 'string') {
      val = parseFloat(value);
    } else {
      val = value;
    }

    let outputTemp: string = '';

    if(inputType === 'cel'&& outputType === 'fah') {
      outputTemp = (val * (9 / 5) + 32).toFixed(2) + '' + '°F'
        // outputTemp = (val * (9 / 5) + 32).toString() + '' + '°F';
    } else if(inputType === 'fah' && outputType === 'cel') {
      outputTemp =  ((val - 32) * (5 / 9)).toFixed(2) + '' + '°C';
      // outputTemp =  ((val - 32) * (5 / 9)).toString() + '' + '°C';
    } else {
     outputTemp = val.toString() + '' + `${inputType === 'cel' ? '°C' : '°F'}`;
    }
    return outputTemp;
  }

}
