import {expect} from 'chai';

import {transformToCallbacked} from "../../src/core";

it('transformToCallbacked', done => {
  transformToCallbacked((a, b)=>a+b)(3,4,(err, res) => {
    expect(res).to.equal(7);
    done();
  });
});