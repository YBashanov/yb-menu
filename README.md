## Menu
Универсальное настраиваемое меню для любого сайта
<br>[Пример](http://be-in-info.ru/npm/ybashanov/yb-menu/)
<br>
<br>


### Зависимости
- [callback-qa](https://www.npmjs.com/package/callback-qa)
<br>
<br>
<br>


### Пропсы
- Object <b>menu</b>
<br>
объект настроек (тут задаются: структура, поведение, надписи, ссылки)
- String <b>ruleForCompare</b>
<br>
Строка. Правило для разрешения отображения определенного блока (например, в случаях ограничения доступов локальной политикой)
<br>
<br>
<br>


### Объект настроек menu
<details>
  <summary>String <b>className</b> (default="", не обязательный)</summary>
  <div>
  Указание пользовательского класса.
  <br>Используется, если требуется выделить конкретный элемент меню среди остальных.
  <br>Или если стандарнтых настроек стилей не достаточно.
  <br>
  <br>
  </div>
</details>

<details>
  <summary>String <b>showType</b> (default="view")</summary>
  <div>
  Указание поведения блока дочерних элементов.
  <br>
  <b>Варианты</b>
  <ul>
    <li>
    "view" - дочерние элементы видны всегда (никогда не скрываются)
    </li>
    <li>
    "hover" - дочерние элементы появятся по наведению
    </li>
    <li>
    "click" - дочерние элементы появятся/скрываются по клику
    <br>(вложенность не реализована: т.е. если элементу level2 задан "клик",
    то у элемента level3, дочернего для level2, клик будет работать некорректно)
    </li>
    <li>
    "hide" - дочерние элементы нельзя увидеть, блок всегда скрыт
    <br>(поведение для особых случаев)
    </li>
  </ul>
  <br>
  <br>
  </div>
</details>

<details>
  <summary>Array<Object> <b>data</b></summary>
  <div>
  Массив объектов, в которых указываются ссылки и некоторые свойства ссылок.
  <br>
  <br><b>Поля объектов массива data</b>
  <ul>
    <li>
    String <b>label</b>
    <br>default=undefined
    <br>Текстовая надпись блока
    </li>
    <li>
    String <b>href</b>
    <br>default=undefined
    <br>Абсолютный или относительный адрес, на который ссылается блок
    <br>Если не указан - блок ни на что не ссылается (ссылка отсутствует)
    </li>
    <li>
    Boolean <b>isDisabled</b>
    <br>default=false
    <br>Если=true, блок отображается серым, а также не будет работать переход по ссылке (если ссылка указана)
    </li>
    <li>
    Array<String> <b>rules</b>
    <br>Массив строк. Если одна из строк совпадет со строкой, указанной в props.ruleForCompare,
    то текущий блок будет отображаться. В случае отсутствия совпадений - блок не будет отображаться.
    <br>Если rules не указан - блок будет отображаться без проверок.
    </li>
    <li>
    Object <b>children</b>
    <br>Объект настроек - полностью повторяет текущий объект настроек <b>props.menu</b>,
    т.е. в нем существуют все перечисленные выше свойства: className, showType, data
    </li>
  </ul>
  <br>
  <br>
  </div>
</details>
<br>
<br>



### Примеры подключения и использования


<details>
  <summary>Пример импорта модуля, подключения стилей</summary>
  <div>

  ```javascript
  // подключение собственно модуля
  import Menu from "yb-menu";
  // здесь же подключаем файл с ВАШИМИ стилями для меню
  // (пример содержимого такого файла будет ниже)
  import '../CustomMenu.less';
  ```
  </div>
</details>


<details>
  <summary>Пример использования yb-menu в render (jsx)</summary>
  <div>

  ```javascript
  // самый простой вариант
  <Menu
      menu={this.menuData}
  />
  // вариант с использованием правил сравнения: для показа некоторых блоков
  // (например, спец.разделов для авторизованных пользователей)
  <Menu
      menu={this.menuData}
      ruleForCompare="iAmLoggedIn"
  />
  ```
  </div>
</details>


<details>
  <summary>Пример объекта настроек menu</summary>
  <div>
  Здесь полная структура меню с тремя уровнями вложенности.

  ```javascript
  this.menuData = {
      data : [
          {
              label : "level1 Ссылка",
              href : "/#some_path",
              children : {
                  showType : "hover",
                  data : [
                      {
                          label : "level2 Ссылка",
                          href : "/#some_path"
                      },
                      {
                          label : "level2 isDisabled",
                          isDisabled : true
                      }
                  ]
              }
          },
          {
              label : "level1 Ссылка",
              href : "/#some_path",
              //rules : ["rule1", "rule2", "rule3"],
              children : {
                  showType : "hover",
                  className : "boldHref",
                  data : [
                      {
                          label : "level2 Нет ссылки (bold)",
                          children : {
                              showType : "view",
                              data : [
                                  {
                                      label : "level3 Ссылка",
                                      href : "/#some_path"
                                  },
                                  {
                                      label : "level3 Ссылка",
                                      href : "/#some_path"
                                  }
                              ]
                          }
                      },
                      {
                          label : "level2 Нет ссылки (bold)",
                          children : {
                              showType : "view",
                              data : [
                                  {
                                      label : "level3 Нет ссылки"
                                  },
                                  {
                                      label : "level3 Ссылка",
                                      href : "/#some_path"
                                  }
                              ]
                          }
                      }
                  ]
              }
          }
      ]
  };
  ```
  </div>
</details>


<details>
  <summary>Пример содержимого файла с пользовательскими стилями</summary>
  <div>
  Файл <b>CustomMenu.less</b> c ВАШИМ дизайном

  ```javascript
  // Переменные less
  @text-color: #111111;
  @text-hover-color: #498dff;
  @text-disable: #aaaaaa;
  @line-hover-color: #777777;

  .Tahoma_16 {
    font-family: Tahoma, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
  }
  .Tahoma_bold {
    font-family: Tahoma, sans-serif;;
    font-weight: bold;
  }


  // реализация пользовательских стилей
  // верстка и шрифты
  .Menu {
    // растяжка
    position: relative;

    // ---------- 1й уровень ----------
    .level.level_1 {
      background-color: #FFFFFF;
      // растяжка
      //width: 100%;

      > .item {
        display: inline-block;
        padding:0 30px;

        &:nth-child(3) {
          padding-left: 0;
        }
        &:last-child  {
          padding-right: 0;
        }

        > .label {
          padding: 12px 0 10px 0;
          cursor: pointer;
          .Tahoma_16;
          color: @text-color;
        }
        &:hover {
          > .label {
            border-bottom: 2px solid @line-hover-color;
          }
        }


        // ---------- 2й уровень ----------
        .level.level_2 {
          // растяжка
          //width: 100%;
          //position: absolute;
          //left: 0;

          border-top: 1px solid #E6E6E6;
          .box-shadow(0 4px 8px -5px rgba(0, 0, 0, 0.16));


          background-color: #FFFFFF;
          padding-top: 24px;
          padding-bottom: 24px;


          // левая и правая стороны - если требуется выйти за пределы
          // центральной области верстки
          > .wings {
            display: block;
            top: 0;
            height: 100%;
            background-color: #fff;

            box-shadow: 0 4px 8px -5px rgba(0, 0, 0, 0.16);
          }


          // имя className в объекте menu (жирный текст)
          &.boldHref {
            > .item {
              display: inline-block;
              margin: 0 30px;

              &:nth-child(3) {
                margin-left: 0;
              }
              &:last-child  {
                margin-right: 0;
              }

              > .label {
                .Tahoma_bold;
              }
              &:hover {
                > .label {
                  cursor: default;
                  color: @text-color;
                }
              }
            }
          }

          // без дополнительного className (обычный текст)
          > .item {
            display: block;
            margin-bottom: 12px;

            color: @text-color;

            > .label {
              .Tahoma_16;
            }
            > .label.isDisabled_true {
              color: @text-disable;
            }

            &:hover {
              > .label {
                cursor: pointer;
                color: @text-hover-color;
              }
              > .label.isDisabled_true {
                cursor: default;
                color: @text-disable;
              }
            }


            // ---------- 3й уровень ----------
            .level.level_3 {
              padding-top: 12px;

              > .item {
                display: block;
                margin-bottom: 12px;

                > .label {
                  .Tahoma_16;
                }

                &:hover {
                  > .label {
                    cursor: pointer;
                    color: @text-hover-color;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  ```
  </div>
</details>

<br>




