import { LayoutType, changeLayoutClass, loadLayoutClass } from "./toggle";

const toggleLayout = (value?: LayoutType) => changeLayoutClass(value);


// Main function
function main() {
    // Load the layout class
    loadLayoutClass();

    // Note: This is just for testing purposes
    (window as any).toggleLayout = toggleLayout;
    
    // This hello world is just to show that the app.ts is working
    console.log('%cHello World!', 'color: green; font-size: 20px; font-weight: bold;');
}

main();
