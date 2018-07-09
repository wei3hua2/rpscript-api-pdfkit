/**
 * @module pdfkit
 */

import PDFDocument from 'pdfkit';
import {RpsContext,RpsModule,rpsAction} from 'rpscript-interface';

let MOD_ID = "pdfkit"

export interface ModuleContext {
  pdf?:any;
}

@RpsModule(MOD_ID)
export default class RPSModule {

  constructor(ctx:RpsContext){
  }

  @rpsAction({verbName:'new-pdf'})
  async newPdf (ctx:RpsContext,opts:Object) : Promise<any>{
    let pdfKit = new PDFDocument();

    return pdfKit;
  }

}
