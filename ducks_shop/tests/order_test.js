Feature('order');

Scenario('test something', ({ I }) => {
    I.amOnPage('/');
    I.waitForVisible(`//h3[@class='title' and text()='Login']`);
    I.waitForVisible(`//button[@name='login' and text()='Login']`);
    I.fillField(`//input[@name='email']`, `Lawrence_Smitham68@hotmail.com`); 
    I.fillField(`//input[@name='password']`, `_q>Y|"x4E&`); 
    I.click(`//button[@name='login']`);
    //I.waitForVisible(`//div[@class='notice success' and contains(text(),now logged in as)]`);
    I.waitForVisible(`//div[@id='box-most-popular']`);
    I.click(`//div[@id='box-most-popular']//span[text()='0']`);
    I.waitForVisible(`//h1[@class='title']`);
    I.fillField(`//input[@type='number']`,4); //вводим кол-во уточек
    I.click(`//button[@type='submit']`); //нажимаем кнопку
    I.waitForVisible(`//span[@class='quantity' and text()='4']`); //убедились ,что в корзине нужное кол-во
    I.click(`//div[@id='cart-wrapper']//a[text()='Checkout »']`); //переходим в корзину
    I.fillField(`//input[@type='number']`,5),3; //увеличиваем кол-во уточек на 1
    I.click(`//button[@value='Update']`); //нажимаем кнопку 'Update'
    I.waitForVisible(`//h2[@class='title' and text()='Customer Details']`);// ждем надписи 'Customer Details'
    I.waitForVisible(`//td[@style='text-align: center;' and text()='5']`);// проверяем кол-во уточек в ордере
    I.waitForVisible(`//td[@class='sum' and text()='0']`);//проверяем что сумма ровна нулю sum=0
    I.click(`//button[@type='submit' and text()='Confirm Order']`);//нажимаем кнопку 'Confirm Order'
    I.waitForVisible(`//h1[@class='title' and text()='Your order is successfully completed!']`);//проверка что наш заказ успешно выполнен
});
