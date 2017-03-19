///<reference path="../../typings/index.d.ts"/>

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);

function sayHello(name: string){
    return `Hello from ${name}`;
}

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = sayHello(name);
}

showHello('greeting', 'TypeScript');