import {expect} from 'chai';
import m from 'mocha';

import RPSModule from '../src/index';
import { RpsContext } from 'rpscript-interface';

m.describe('pdfkit', () => {

  m.it('should create new pdf object', async function () {
    let ctx = new RpsContext;
    let md = new RPSModule(ctx);

    let output = await md.newPdf(ctx,{});

  }).timeout(0);

})
