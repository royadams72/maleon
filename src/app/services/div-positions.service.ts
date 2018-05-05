import { Injectable } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Section } from '../models/section.model'
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class DivPositionsService {
private divObjArr:Array<Section> = [];
public heightsObjs = new Subject<Array<Section>>();
private count:number = 0;

  constructor() { }
  public updateObj(elName:string, elementTop:number){
    let Obj = {
        name:elName,
        height:elementTop
      }
   this.getHeights(Obj)
  }

  public getHeights(divObj:Section){

    if(this.divObjArr.length == 4){
     for(let i =0; i < this.divObjArr.length; i++){
        if (this.divObjArr[i].name == divObj.name){
          this.divObjArr[i] = divObj;
        }
      }
     }else{
        this.divObjArr.push(divObj)
      }
     this.onGetHeights(this.divObjArr);
    }

    public onGetHeights(arr){
    //  console.log(arr)
      return this.heightsObjs.next(arr);
    }
}
