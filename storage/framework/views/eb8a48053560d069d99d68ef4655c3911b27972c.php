<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta  name="csrf-token" content="<?php echo e(csrf_token()); ?>">
    <link href="<?php echo e(asset('css/app.css')); ?>" rel="stylesheet" type="text/css"/>
    <link rel="icon" type="image/x-icon" href="/favicon.ico">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script type='text/javascript'>
             window.Laravel = <?php echo json_encode([
                'csrfToken' => csrf_token(),
            ]); ?>
    </script>
    
</head>
<body>
    <div id="app">
            <router-view></router-view>
    </div>
    <script src="https://webapi.amap.com/maps?v=1.4.8&key=439c66a7d1e29e7a5ff0fbd0e8ee390f"></script>
    <script type="text/javascript" src="<?php echo e(asset('js/app.js')); ?>"></script>
</body>
</html>
