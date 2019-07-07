import {Component} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
    selector: 'process-yad2',
    templateUrl: 'process-yad2.component.html',
})
export class ProcessYad2Component {

    constructor(public dialogRef: MatDialogRef<ProcessYad2Component>) {

    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    process(data): void {
        data = JSON.parse(data);
        console.log("data",data);
        this.dialogRef.close();
    }

    processRaw(script) {
        return "var s = document.createElement( 'script' );\n" +
                "s.setAttribute( 'src', 'https://code.jquery.com/jquery-3.4.1.min.js' );\n" +
                "document.body.appendChild( s );\n" +
                "setTimeout(function() {var a = $('body').append("+JSON.stringify(script)+");},1000);";
    }

}
