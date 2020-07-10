import React from 'react';

export const getOS = () => {
    //TODO: use a better detection library for production
    if(typeof window !== 'undefined') {
        return "linux"
    }

    const osList = ['windows', 'linux', 'x11', 'mac'];
    let  myOS = osList.find(v => window.navigator.appVersion.toLowerCase().indexOf(v) >= 0);
    if (myOS === 'x11') {
        myOS = 'linux'
    }
    return myOS !== undefined ? myOS : "florin"
}

const Action = () => {
    const currentOs = getOS();

    return (
        <div>
            <span>funcCall: {getOS()}</span>
            <div>
                {currentOs === 'linux' && <span>Linux</span>}
                {currentOs === 'windows' && <span>Windows</span>}
            </div>
        </div>
    )
}

export default Action;
