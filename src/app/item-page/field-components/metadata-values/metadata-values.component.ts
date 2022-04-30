import { Component, Input } from '@angular/core';
import { MetadataValue, MetadataMap } from '../../../core/shared/metadata.models';
import { Observable ,  BehaviorSubject } from 'rxjs';
import { LocaleService } from 'src/app/core/locale/locale.service'; // import LocaleService 
export const LANG_COOKIE = 'dsLanguage';
/**
 * This component renders the configured 'values' into the ds-metadata-field-wrapper component.
 * It puts the given 'separator' between each two values.
 */
@Component({
  selector: 'ds-metadata-values',
  styleUrls: ['./metadata-values.component.scss'],
  templateUrl: './metadata-values.component.html'
})
export class MetadataValuesComponent {
  // kware edit 

  /**
   * The metadata values to display
   */
   @Input() mdValues: MetadataValue[];
  
   metadata$: Observable<MetadataMap>;
   /**
    * The seperator used to split the metadata values (can contain HTML)
    */
   @Input() separator: string;
   @Input() linktext: any;
  link  :any
  check : boolean;
   /**
    * The label for this iteration of metadata values
    */
   @Input() label: string;

   constructor(
    public localeService : LocaleService  /* kware edit - call service from LocaleService */
   ){
     
   }
   
   ngOnInit(): void {
     //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
     //Add 'implements OnInit' to the class.
     
     this.link=this.label.split('.')[2];
    if(this.link === 'type') this.link="itemtype";
    // if(this.link === 'date') this.link="issued";

    if(this.link === 'date') this.link="dateIssued";
    
     this.check= this.link === 'abstract' || this.link === 'citation' || this.link === 'description' || this.link === 'isbn' ? false : true;
     
   }


  //  end kware edit

}
