// describe('page', () => {
//     it('should have the right title', () => {
//         browser.url('https://likejean.github.io/homework-5/')
//         expect(browser.getTitle()).toEqual('Complex Counter App');
//         browser.pause(2000);
//     });
//
//     it('the page header should be Counters', () => {
//
//         expect($('//h1[@class=\'header\']').getText()).toEqual('Counters');
//         browser.pause(2000);
//     });
//
//     it('should verify total is 0', () => {
//         const total = $('//h3').getText();
//         expect(total).toEqual('Total: 0');
//     });
//
//     it('should verify that Limit Field1 present on the page', () =>{
//         expect($('//button[@name="negative"]').isDisplayed()).true;
//
//     });
//
//     it('should verify that Limit Field2 present on the page', () =>{
//         expect($('button[name="positive"]').isDisplayed()).true;
//     });
//
//     it('should verify that Change step options in LF1 present on the page', () =>{
//         const element = $('button[name="positive"]').getText();
//         expect(element).toEqual('CHANGE STEP OPTIONS?')
//     });
//
//     it('should verify that Change step options in LF2present on the page', () =>{
//         const element = $('button[name="negative"]').getText();
//         expect(element).toEqual('CHANGE STEP OPTIONS?')
//     });
//
//     it('should verify that Delete button present on the page', () =>{
//         expect($('[id="1"]').isDisplayed());
//
//     });
//
//     it('should verify that Reset button present on the page', () =>{
//         expect($('[class="btn-primary btn Ripple-parent reset"]').isDisplayed());
//
//     });
//
//
//     it('should verify Default Counter', () => {
//         const element = $$('h3')[1].getText();
//         expect(element).toEqual('1. Default Counter')
//     });
//
//     it('should verify Edit Counter Title', () => {
//         expect($('//label[contains(text(),"Edit")]').getText()).toEqual('Edit Counter Title:');
//
//     });
//
//     it('should verify Default Counter Field', () => {
//         const element = $('[name="edit"]').getValue()
//         expect(element).toEqual('Default Counter')
//
//     });
//
//     it('should verify Enter Counter Title', () => {
//         expect($('//label[contains(text(),"Enter")]').getText()).toEqual('Enter Counter Title:');
//
//     });
//
//     it('should verify Counter Name Field', () => {
//         const element = $('[name="name"]').getValue()
//         expect(element).toEqual('Counter Name')
//
//     });
//
//     it('should verify Enter Initial Count', () => {
//         expect($('//label[contains(text(),\'Enter Initial Count:\')]'))
//
//     });
//
//     it('should verify Enter Initial Count', () => {
//         const element = $('[name="value"]').getValue()
//         expect(element).toEqual('50')
//
//     });
//
//     it('should verify ADD COUNTER', () => {
//         expect($('//label[contains(text(),\'ADD COUNTER\')]'))
//
//     });
//
//
// });


// TEST CASES OF CCA OF MY TEST SUITE

describe('test of Complex Counter', () => {
    it('should have the right title', () => {
        browser.url('https://likejean.github.io/homework-5/')
        expect(browser.getTitle()).toEqual('Complex Counter App');
        browser.pause(2000);
    });

    it('should demonstrate a right click on Add Button ', () => {
        const element = $('//body//button[5]')
        element.click({element: 'Add Button '})
        browser.pause(500);
    });

    it('should demonstrate a right click on Add Button ', () => {
        const element = $('//body//button[5]')
        element.click({element: 'Add Button '})
        browser.pause(500);
    });

    it('should demonstrate the getValue command', () => {
        const input = $('//body//button[5]');
        const value = input.getValue(4)

    });
});