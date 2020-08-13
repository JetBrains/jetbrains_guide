import React from 'react';
import {render} from '@testing-library/react';

import {Action, getOS} from './Action';


describe('SSR no navigator', () => {
    test('getOS', () => {
        const result = getOS();
        expect(result).toEqual('winlin');
    });

    test('SSR Action Short Form', () => {
        const {getByTitle} = render(<Action id="FindInPath"/>);
        const node = getByTitle('Find In Path');
        expect(node).toBeTruthy();
        expect(node.textContent).toEqual('Ctrl+Shift+F');
    });

    test('SSR Action Long Form', () => {
        const {getByText} = render(<Action id="FindInPath" longForm={true}/>);
        const node = getByText('Find In Path (Ctrl+Shift+F)');
        expect(node).toBeTruthy();
        expect(node.getAttribute('title')).toBeNull();
    });
});

describe('CSR on Default WinLin', () => {
    let navigatorSpy: any;
    beforeEach(() => {
        navigatorSpy = jest.spyOn(window.navigator, 'userAgent', 'get');
        navigatorSpy.mockReturnValue('Win');
    });

    afterEach(() => {
        navigatorSpy.mockRestore();
    });

    test('getOS', () => {
        const result = getOS();
        expect(result).toEqual('winlin');
    });

    test('CSR Mac Action Short Form', () => {
        const {getByTitle} = render(<Action id="FindInPath"/>);
        const node = getByTitle('Find In Path');
        expect(node).toBeTruthy();
        expect(node.textContent).toEqual('Ctrl+Shift+F');
    });

    test('SSR Action Long Form', () => {
        const {getByText} = render(<Action id="FindInPath" longForm={true}/>);
        const node = getByText('Find In Path (Ctrl+Shift+F)');
        expect(node).toBeTruthy();
        expect(node.getAttribute('title')).toBeNull();
    });

});

describe('CSR on Mac', () => {
    let navigatorSpy: any;
    beforeEach(() => {
        navigatorSpy = jest.spyOn(window.navigator, 'userAgent', 'get');
        navigatorSpy.mockReturnValue('Mac');
    });

    afterEach(() => {
        navigatorSpy.mockRestore();
    });

    test('getOS', () => {
        const result = getOS();
        expect(result).toEqual('mac');
    });

    test('CSR Mac Action Short Form', () => {
        const {getByTitle} = render(<Action id="FindInPath"/>);
        const node = getByTitle('Find In Path');
        expect(node).toBeTruthy();
        expect(node.textContent).toEqual('Cmd+Shift+F');
    });

    test('SSR Action Long Form', () => {
        const {getByText} = render(<Action id="FindInPath" longForm={true}/>);
        const node = getByText('Find In Path (Cmd+Shift+F)');
        expect(node).toBeTruthy();
        expect(node.getAttribute('title')).toBeNull();
    });

});
