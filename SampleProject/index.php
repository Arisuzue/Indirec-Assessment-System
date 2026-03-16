<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Indirect Assessment System</title>
    <link rel="stylesheet" href="style.css">
    <style>
        body {
            background-image: url('background/BGlogin.jpg');
            background-size: cover;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="form-box active" id="login-form">
            <form action="">    
                <h2>Login</h2>
                <input type="email" name="email" placeholder="Email" required>
                <input type="password" name="password" placeholder="Password" required>
                <button type="submit">Login</button>
                <p>Don't have an account? <a href="#" onclick="showForm('register-form')">Register</a></p>
            </form>
        </div>
 
        <div class="form-box" id="register-form">
            <form action="">    
                <h2>Register</h2>
                <input type="text" name="first_name" placeholder="FirstName" required>
                <input type="text" name="last_name" placeholder="Last Name" required>
                <input type="email" name="email_address" placeholder="Email Address" required>
                <select name="Program" required>
                    <option value="">Program</option>
                    <option value="BSCPE">Bachelo Of Science in Computer Engineering</option>
                    <option value="BSCE">Bachelor of Science in Civil Engineering</option>
                    <option value="BSECE">Bachelor of Science in Electronics Engineering</option>
                </select>
                <!-- <input type="number" name="student_id" placeholder="Student ID" required> -->
                <input type="text" name="student_id" placeholder="Student ID" required>
                <button type="submit" name="register">Register</button>
                <p>Already have an account? <a href="#" onclick="showForm('login-form')">Login</a></p>
            </form>
        </div>
    </div>
    
    <script src="script.js"></script>
</body>
</html>    