import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
@Component({
selector: 'pm-star',
templateUrl: './star.component.html',
styleUrls:['./star.component.css']
})
export class StarComponent implements OnChanges{

    @Input() rating: number; //This property is exposed 
    //and expects the data from the parent component
    @Output() notify:  EventEmitter<string> = new EventEmitter<string>();
    //This is the notify event which is emitted from this
    //nested component 
    starWidth: number;

    ngOnChanges():void{
        this.starWidth=this.rating * 75 / 5 ;
    }

    onClick(){
        this.notify.emit(`The rating ${this.rating} was clicked!!!`);
    }
}