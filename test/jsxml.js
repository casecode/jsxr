import jsdom from 'mocha-jsdom';
import chai, { assert, expect } from 'chai';
import jsxml from '../jsxml';

describe('jsxml', () => {
  // Load browser API
  jsdom();

  it('should return an HTMLElement', () => {
    const ComponentP = (
      <p className='test-p'>This is a test</p>
    );

    const ComponentDiv = (
      <div className='test-div'><ComponentP /></div>
    );

    expect(ComponentP).to.be.an.instanceof(HTMLElement);
    expect(ComponentDiv).to.be.an.instanceof(HTMLElement);

    assert.equal(ComponentDiv.querySelector('p').className, 'test-p');
  });
});
