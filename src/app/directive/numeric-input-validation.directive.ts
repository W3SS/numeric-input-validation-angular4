import { Directive, ElementRef, HostListener, Input, Output, EventEmitter } from '@angular/core';
@Directive({
    selector: '[NumericInputValidation]'
})
export class NumericInputValidationDirective {
    @Input() isPositive = false;
    @Output() NumericResponseEvent = new EventEmitter();
    private newValue: string;
    private oldValue: string;
    private regex = /^(^-?(?!(?:[^.]*\.){2}))[0-9.]*$/;
    constructor(private el: ElementRef) { }
    @HostListener('focus', ['$event']) onFocus(event: any) {
        this.oldValue = event.target.value === '' ? null : event.target.value;
    }
    @HostListener('input', ['$event']) onInputChange(event: any) {
        if (this.isPositive) {
            this.regex = /^((?!(?:[^.]*\.){2}))[0-9.]*$/;
        }
        this.newValue = event.target.value;
        if (this.regex.test(this.newValue)) {
            if (this.newValue) {
                this.NumericResponseEvent.emit(+this.newValue);
            } else {
                this.NumericResponseEvent.emit(null);
            }
            this.oldValue = this.newValue === '' ? null : this.newValue;
        } else {
            this.el.nativeElement.value = this.oldValue;
            this.NumericResponseEvent.emit(this.oldValue === null ? this.oldValue : +this.oldValue);
        }
    }
}
