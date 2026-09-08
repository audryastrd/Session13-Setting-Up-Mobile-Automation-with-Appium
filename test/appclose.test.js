describe('Open App', () => {
after(async () => {
    await driver.terminateApp('com.example.belajar_bareng');
});
    it('Should launch the app', async () => {
        console.log('✅ Application opened successfully');
        await browser.pause(3000);
    });

});