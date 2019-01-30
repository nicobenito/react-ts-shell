import * as React from 'react';
import * as enzyme from 'enzyme';
import Hello from './Hello';

it('renders the correct text when no enthusiasm level is given', () => {
    const hello = enzyme.shallow(<Hello name='Nico' />);
    expect(hello.find(".greeting").text()).toEqual('Hello Nico!');
});

it('renders the correct text with an explicit enthusiasm of 1', () => {
    const hello = enzyme.shallow(<Hello name='Nico' enthusiasmLevel={1}/>);
    expect(hello.find(".greeting").text()).toEqual('Hello Nico!')
});

it('throws when the enthusiasm level is 0', () => {
    expect(() => {
      enzyme.shallow(<Hello name='Nico' enthusiasmLevel={0} />);
    }).toThrow();
});