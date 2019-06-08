import { Directive, Output, Input, HostListener, EventEmitter } from "@angular/core";

@Directive({
    selector:'[cmSortBy]',
})

export class SortByDirective {
    private sortProperty:string;
    constructor(){
        console.log("directive")
    }
    @Output() 
    sorted:EventEmitter<string> = new EventEmitter<string>()

    @Input('cmSortBy')
    set sortBy(value : string) {
        this.sortProperty = value;
        console.log(this.sortProperty);
    }
    @HostListener('click')
    onclick(){
        console.log(this.sortProperty);
        this.sorted.emit(this.sortProperty);
    }

    
}