import { LayoutType, changeLayoutClass, loadLayoutClass } from "./toggle";

function main() {
    console.log('Hello World!');
    
    loadLayoutClass();
    (window as any).toggleLayout = (value?: LayoutType) => changeLayoutClass(value);
}

main();