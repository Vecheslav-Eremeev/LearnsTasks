'use strict';

let login = prompt('Enter login');

let message = (login == 'Сотрудник')? 'Привет':
    (login == 'Директор')? 'Здравствуйте':
    (login == '')? 'Нет логина': '';

