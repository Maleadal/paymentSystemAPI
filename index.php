<?php
//include configuration file
require_once "config.php";
//prequisite to get the system info
$row = sqlSelect("*", "System", "1=1");
$_SESSION['system_name'] = $row['name'];
$_SESSION['tagline'] = $row['tagline'];
$_SESSION['author'] = $row['creator'];

$system_name = $_SESSION['system_name'];
$tagline = $_SESSION['tagline'];
$author = $_SESSION['author'];

// go to the main page if already logged in
if(isset($_SESSION['name']) != ""){
    header("Location: courses/index.php");
}
//when login button is press
if($_SERVER["REQUEST_METHOD"] == "POST"){
    $user = mysqli_real_escape_string($link, $_POST['user']);
    $pass = mysqli_real_escape_string($link, $_POST['password']);

    $row = array();
    $row = sqlSelect("*","admin","Username = '$user' and Password = '$pass'");
    if($row  > 0){
        $_SESSION['name'] = $row['Username'];
        header("Location: courses/index.php");
      }
      else{
        $login_err = "username or password not correct";
      }
}
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title></title>

    <base href="./">
    <!-- Bootstrap core CSS -->
    <link href="assets/css/bootstrap.css" rel="stylesheet">
    <!-- Custom styles -->
    <link href="assets/css/custom.css" rel="stylesheet">
</head>

<body>

<div class="container-fluid">
    <div class="row">
        <main class="col-md-6 mx-sm-auto px-4">
            <div class="pt-3 pb-2 mb-3 border-bottom text-center">
                <h1 class="h2"><?php echo $system_name;?></h1>
            </div>
            <?php 
                if(!empty($login_err)){
                    echo '<div class="alert alert-danger">' . $login_err . '</div>';
                }        
            ?>
            <form class="form-signin" action='<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>' method="post">
                <h1 class="h3 mb-3 font-weight-normal" style="text-align:center;">LOGIN</h1>

                <label for="inputuser" class="sr-only">username</label>
                <input type="txt" id="inputuser" name="user" class="form-control" placeholder="username" autofocus>

                <label for="inputPassword" class="sr-only">Password</label>
                <input type="password" id="inputPassword" name="password" class="form-control" placeholder="Password">
                <button class="btn btn-lg btn-primary btn-block" id="login" type="submit">LOGIN</button>
            </form>

        </main>
    </div>
</div>
</body>
</html>
