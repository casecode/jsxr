import jsdom from 'mocha-jsdom';
import chai, { assert, expect } from 'chai';
import jsxr from '../src/jsxr';

describe('jsxr', () => {
  // Load browser API
  jsdom();

  it('should return an HTMLElement with attributes', () => {
    const Test = (
      <div className='test' data-x='x'></div>
    );

    expect(Test).to.be.an.instanceof(HTMLElement);
    assert.equal(Test.getAttribute('data-x'), 'x');
  });

  it('should accept custom components', () => {
    const Letters = (
      <ul>
        {['A', 'B', 'C'].map((item, idx) => {
          return <li data-item-idx={ idx }>{ item }</li>;
        })}
      </ul>
    );

    const Container = (
      <div className='container'>
        <Letters className='letters-list' />
      </div>
    );

    const lettersList = Container.querySelector('.letters-list');
    const firstItemIdx = lettersList.querySelector('li').getAttribute('data-item-idx');

    expect(lettersList).to.be.an.instanceof(HTMLElement);
    assert.equal(parseInt(firstItemIdx, 10), 0);
    assert.equal(lettersList.children.length, 3);
  });

  it('should should inline styles', () => {
    const rules = {
      backgroundColor: '#fff',
      marginBottom: '20px',
    };

    const Test = <div className='test' style={ rules }></div>;

    assert.equal(Test.style.backgroundColor, '#fff');
    assert.equal(Test.style.marginBottom, '20px');
  });
});
