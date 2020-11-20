import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: "adult",
  pure: false
})
export class AdultPipe implements PipeTransform {
  transform(value, pipe) {
    console.log('adult pipe run')
    // pipe.transform(this)
    return value.filter(v => v.age >= 18);
  }
}
