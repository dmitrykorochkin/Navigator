<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require_once '/path/to/vendor/autoload.php';

// Задайте параметры SMTP-сервера
$mail = new PHPMailer(true);
$mail->isSMTP();
$mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
$mail->Username   = 'abramslost@gmail.com'; // Логин на почте
$mail->Password   = 'ohskwfjqwzqrodlo'; // Пароль 
$mail->SMTPSecure = 'ssl';
$mail->Port       = 465;

// Задайте параметры письма
$mail->setFrom('abramslost@gmail.com'); // здесь должен быть ваш email
$mail->addAddress('kunica.prosto@yandex.ru'); // здесь должен быть адрес получателя
$mail->Subject = 'Новая заявка с сайта';
$mail->isHTML(true);
$mail->Body = '<p>Имя: '.$_POST['name'].'</p><p>Телефон: '.$_POST['tel'].'</p>';

// Отправьте письмо
try {
    $mail->send();
    echo 'Письмо отправлено.';
} catch (Exception $e) {
    echo 'Письмо не отправлено. Ошибка: ', $mail->ErrorInfo;
}
