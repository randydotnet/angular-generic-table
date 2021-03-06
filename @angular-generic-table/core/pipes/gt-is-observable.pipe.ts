import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Pipe({
	name: 'gtIsObservable'
})
export class GtIsObservablePipe implements PipeTransform {
	transform(input: any): boolean {
		return input instanceof Observable;
	}
}
