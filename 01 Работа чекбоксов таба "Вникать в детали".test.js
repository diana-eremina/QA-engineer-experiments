const { page_opening } = require('/Users/dianaeremina/Documents/qa-engineer-tests/e2e-task/e2e-tests/nightwatch/tests/functions/page_opening.js')
const { checkbox_unchecking } = require('/Users/dianaeremina/Documents/qa-engineer-tests/e2e-task/e2e-tests/nightwatch/tests/functions/checkbox_unchecking.js')
const { checkbox_checking } = require('/Users/dianaeremina/Documents/qa-engineer-tests/e2e-task/e2e-tests/nightwatch/tests/functions/checkbox_checking.js')
const { h1_in_the_block } = require('/Users/dianaeremina/Documents/qa-engineer-tests/e2e-task/e2e-tests/nightwatch/tests/functions/h1_in_the_block.js')

testcase('Работа чекбоксов таба "Вникать в детали"', () => {
  page_opening()
  //шаг для того, чтобы кейс проходил. Удалить позже.
  step('Кликаем на Таб "Находить несовершенства"', () => {
    browser.click('xpath', '//a[contains(text(),"НАХОДИТЬ НЕСОВЕРШЕНСТВА")]')
})
  //досюда
  step('2. Кликаем на Таб "Вникать в детали"', () => {
    browser.click('xpath','//a[contains(text(),"ВНИКАТЬ В ДЕТАЛИ ПРОЕКТОВ")]')
  })
  expected('Отображается блок с верным заголовком', () => {
    h1_in_the_block({ locator_of_h1: '.info-details > h1', text_of_h1: 'Работать с описаниями проектов'})
  })
  expected('Отображается чек-бокс "Внимательность"', () => {
    browser.waitForElementPresent('.info-details[style="display: block;"] #attention', 5000, 'Чек-бокс "Внимательность" не найден')
  })
  expected('Отображается чек-бокс "Умение рассуждать логически"', () => {
     browser.waitForElementPresent('.info-details[style="display: block;"] #logic', 5000, 'Чек-бокс "Умение рассуждать логически" не найден')
  })

  // снимаем первый чек-бокс
  checkbox_unchecking({ name_of_checkbox: '"Внимательность"', xpath_of_checkbox: '//label[contains(.,"Внимательность")]', id_of_checkbox: 'input#attention' })

  // снимаем второй чек-бокс
  checkbox_unchecking({ name_of_checkbox: '"Умение рассуждать"', xpath_of_checkbox: '//label[contains(.,"Умение рассуждать логически")]', id_of_checkbox: 'input#logic' })

  // отмечаем первый чек-бокс
  checkbox_checking({ name_of_checkbox: '"Внимательность"', xpath_of_checkbox: '//label[contains(.,"Внимательность")]', id_of_checkbox: 'input#attention' })

  // отмечаем второй чек-бокс
  checkbox_checking({ name_of_checkbox: '"Умение рассуждать"', xpath_of_checkbox: '//label[contains(.,"Умение рассуждать логически")]', id_of_checkbox: 'input#logic' })
})
