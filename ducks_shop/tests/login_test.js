let faker = require('faker');//обьявляем переменную Фейкер(используйм библиотеку)
let randomEmail = faker.internet.email();
let randomPassword = faker.datatype.string();
//console.log('Value of variable random Password = ' + randomPassword); //выводит значение переменной
Feature('login');

Scenario('Registration', ({ I }) => {
    I.amOnPage('/'); // переход на сайт
    I.waitForVisible(`//form[@name='login_form']//a[contains(@href,'create_account')]`),3;   // мы ожидаем увидеть ,что на странице отображено Create Accaunt (XPath локатор)
    I.click(`//form[@name='login_form']//a[contains(@href,'create_account')]`);
    I.waitForVisible(`//h1[@class='title' and text()='Create Account']`),3; // убедимся ,что на этой странице есть Заголовок содержащий текст "Create Account"
    I.fillField(`//input[@name='firstname']`, faker.name.firstName()); // заполняем этот элемент с этим xPath с таким значением
    I.fillField(`//input[@name='lastname']`, faker.name.lastName()); // заполняем поле
    I.fillField(`//input[@name='address1']`, `ул. Баранова`); // заполняем поле
    I.fillField(`//input[@name='postcode']`, `260013`); // заполняем поле
    I.fillField(`//input[@name='city']`, `Калининград`); // заполняем поле
    I.fillField(`//input[@name='email']`, randomEmail); // заполняем поле
    I.fillField(`//input[@name='phone']`, faker.phone.phoneNumber(`+7##########`)); // заполняем поле
    I.fillField(`//input[@name='password']`, randomPassword); // заполняем поле
    I.fillField(`//input[@name='confirmed_password']`, randomPassword); // заполняем поле
    I.uncheckOption(`//input[@name='newsletter']`); // убераем галочку с соответствующего поля
    I.click(`//button[@name='create_account']`); // нажимаем на кнопку 'create_account'
    I.waitForVisible(`//div[@class='notice success' and contains(text(), 'account has been created')]`); // проверяем ,что появился класс 'notice success' с текстом 'account has been created' 
    I.waitForVisible(`//div[@id='box-account']//a[text()='Logout']`); // убераем галочку с рассылки на Емаил
});

Scenario('Log in and log out', ({ I }) => {
    I.amOnPage('/');

    //Авторизация
    I.fillField(`//input[@name='email']`, randomEmail); // используем тот же рандом Емаил что и выше
    I.fillField(`//input[@name='password']`, randomPassword); // используем тот же рандом Пароль что и выше
    I.click(`//button[@name='login']`);
    I.waitForVisible(`//div[@class='notice success' and contains(text(),'now logged in as')]`);
    I.waitForVisible(`//a[contains(text(),'Checkout')]`);

    //Разлогинивание
    I.click(`//div[@id='box-account']//a[text()='Logout']`);
    I.waitForVisible(`//div[@class='notice success' and contains(text(),'now logged out')]`),4;
    I.waitForVisible(`//button[@name='login']`),3;
}); 