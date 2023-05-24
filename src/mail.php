<?php 

require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

if (isset($_POST['phone'])) {
    $name = isset($_POST['name']) ? $_POST['name'] : "";
    $phone = $_POST['phone'];

    if(empty($name) && empty($phone)) {
        $result = "error";
        $status = "Поля 'Имя' и 'Телефон' обязательны для заполнения";
    } else {
        $body = "<h2>Новое письмо</h2>";
        if (!empty($name)) {
            $body .= "<p><strong>Имя:</strong> {$name}</p>";
        }
        $body .= "<p><strong>Телефон:</strong> {$phone}</p>";

        $body = "<table style='width: 100%;'>$body</table>";

        $mail = new PHPMailer\PHPMailer\PHPMailer();

        try {
            $mail->isSMTP();
            $mail->CharSet = "UTF-8";
            $mail->SMTPAuth   = true;
            $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};
          
            $mail->Host       = 'smtp.mail.ru';
            $mail->Username   = 'd_korochkin@inbox.ru';
            $mail->Password   = 'gndgpS16Gga8hnpTNXAQ';
            $mail->SMTPSecure = 'ssl';
            $mail->Port       = 465;
          
            $mail->setFrom('d_korochkin@inbox.ru', 'Dmitry Korochkin');
          
            $mail->addAddress('abramslost@gmail.com');
            $mail->addAddress('kunica.prosto@yandex.ru');
            $mail->addAddress('d_korochkin@inbox.ru');
            $mail->addAddress('zakaz@on-looker.ru');
          
            $mail->isHTML(true);
            $mail->Subject = 'Заголовок письма';
            $mail->Body = $body;
            $result = $mail->send() ? "success" : "error";
        } catch (Exception $e) {
            $result = "error";
            $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
        }
    }
} else {
    $result = "error";
    $status = "Переменная 'phone' не найдена";
}

if (!isset($status)) {
    $status = "";
}

echo json_encode(["result" => $result, "status" => $status]);
