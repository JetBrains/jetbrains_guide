import { configure } from 'enzyme';
// import * as Adapter from 'enzyme-adapter-react-16';

const Adapter: any = require('enzyme-adapter-react-16');
configure({ adapter: new Adapter() });

// @ts-ignore
global.___loader = {
    enqueue: jest.fn(),
};
