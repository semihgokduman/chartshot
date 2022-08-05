const { chromium } = require("@playwright/test");


(async () => {
  // Make sure to run headed.
  const browser = await chromium.launch({ /*headless: false*/ });

  // Create a new incognito browser context
  const context = await browser.newContext();
  // Create a new page inside context.
  const page = await context.newPage();

  const links = [
    "https://www.chartjs.org/docs/latest/samples/bar/border-radius.html",
    "https://www.chartjs.org/docs/latest/samples/bar/floating.html",
    "https://www.chartjs.org/docs/latest/samples/line/line.html",
    "https://www.chartjs.org/docs/latest/samples/bar/horizontal.html",
  ];



    await page.goto(links[0]);
    await page.locator(".chart-view").screenshot({ path: `./screenshots/${links[0].split('/').reverse()[0].split('.')[0]}.png` });

    await page.goto(links[1]);
    await page.locator(".chart-view").screenshot({ path: `./screenshots/${links[1].split('/').reverse()[0].split('.')[0]}.png` });

    await page.goto(links[2]);
    await page.locator(".chart-view").screenshot({ path: `./screenshots/${links[2].split('/').reverse()[0].split('.')[0]}.png` });

    await page.goto(links[3]);
    await page.locator(".chart-view").screenshot({ path: `./screenshots/${links[3].split('/').reverse()[0].split('.')[0]}.png` });


  // await page.pause();

  // Dispose context once it's no longer needed.
  await context.close();
})();
