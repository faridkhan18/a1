import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name:'convertToSpaces'
})
export class convertToSpacesPipe implements PipeTransform{
    transform(value: string, character:string):String {
        console.log("From custome pipe "+value+"::"+character)
        return  value.replace(character, '');
    }

}