import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {
  constructor() { }

  displayArray(array: any[]): void {
    console.log("Array is displayed by Display service:");
    console.log(array);
  }
}
