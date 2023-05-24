<?php

require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Получаем данные из формы
$name = $_POST['name'];
$phone = $_POST['phone'];

// Формируем содержимое письма
$body = "<h2>Новое письмо</h2>";
$body .= "<p><strong>Имя:</strong> {$name}</p>";
$body .= "<p><strong>Телефон:</strong> {$phone}</p>";

$body = "<table style='width: 100%;'>$body</table>";

// Настраиваем PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
    $mail->isSMTP();
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 4;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};
  
    // Настройки вашей почты
    $mail->Host       = 'smtp.mail.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'd_korochkin@inbox.ru'; // Логин на почте
    $mail->Password   = 'gndgpS16Gga8hnpTNXAQ'; // Пароль 
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
  
    $mail->setFrom('d_korochkin@inbox.ru', 'Dmitry Korochkin'); // Адрес самой почты и имя отправителя
  
    // Получатель письма
    $mail->addAddress('abramslost@gmail.com');
    $mail->addAddress('kunica.prosto@yandex.ru');
    $mail->addAddress('d_korochkin@inbox.ru');
  
    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = 'Заголовок письма';
    $mail->Body = $body;
    $result = $mail->send() ? "success" : "error";
  } catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
  }

// Отображаем результат
echo json_encode(["result" => $result, "status" => $status]);
