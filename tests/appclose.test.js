

describe('Open App', () => {
after(async () => {
    await driver.terminateApp('com.saucelabs.mydemoapp.android');
});
    it('should launch the app', async () => {
        console.log('✅ Application opened successfully');
        await browser.pause(3000);
    });

});