import { Component } from '@angular/core';
import { focusShadow } from '../../../../animations/focus';
import { ViewMode } from '../../../../../core/shared/view-mode.model';
import { listableObjectComponent } from '../../../../object-collection/shared/listable-object/listable-object.decorator';
import { SearchResultGridElementComponent } from '../../search-result-grid-element.component';
import { Item } from '../../../../../core/shared/item.model';
import { ItemSearchResult } from '../../../../object-collection/shared/item-search-result.model';
import { getItemPageRoute } from '../../../../../item-page/item-page-routing-paths';
import { LocaleService } from 'src/app/core/locale/locale.service'; // import LocaleService 
import { TruncatableService } from 'src/app/shared/truncatable/truncatable.service';
import { BitstreamDataService } from 'src/app/core/data/bitstream-data.service';
@listableObjectComponent('PublicationSearchResult', ViewMode.GridElement)
@listableObjectComponent(ItemSearchResult, ViewMode.GridElement)
@Component({
  selector: 'ds-item-search-result-grid-element',
  styleUrls: ['./item-search-result-grid-element.component.scss'],
  templateUrl: './item-search-result-grid-element.component.html',
  animations: [focusShadow]
})
/**
 * The component for displaying a grid element for an item search result of the type Publication
 */
export class ItemSearchResultGridElementComponent extends SearchResultGridElementComponent<ItemSearchResult, Item> {
 
constructor(
  public localeService : LocaleService ,
  protected truncatableService: TruncatableService,
  protected bitstreamDataService: BitstreamDataService
){
  super(truncatableService, bitstreamDataService)
}
  /**
   * Route to the item's page
   */
  itemPageRoute: string;

  

  ngOnInit(): void {
    super.ngOnInit();
    this.itemPageRoute = getItemPageRoute(this.dso);
  }
// kware edit 

    // replace comma ', or ;' to '،' if language  is Arabic
  convertComma(str :String):String{
    var newstr="";
    if(this.localeService.getCurrentLanguageCode() === 'ar'){
      var regx = /;|,/gi 
     newstr = str.replace(regx, "،"); 
     return newstr;

    }
    else{
      return str
    }
  }
  // replace comma ',' to '،' if language  is Arabic
  regxComma():String{
    if(this.localeService.getCurrentLanguageCode() === 'ar') return '،'
    else return ','
  }
     // replace comma ';' to '؛' if language  is Arabic
   regxColon():String{
    if(this.localeService.getCurrentLanguageCode() === 'ar') return '؛'
    else return ';'
  }


  // end kware edit
}
