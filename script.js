// Получение информации о пользователе
const userInfo = Telegram.WebApp.initDataUnsafe.user;

// Отображение ID и никнейма
document.getElementById('user-id').innerText = userInfo.id;
document.getElementById('user-name').innerText = userInfo.username || 'Не указан';