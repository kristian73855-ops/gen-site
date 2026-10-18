// Задай паролата за отключване тук:
const ACCESS_PASSWORD = "gen32wuahd!!@";

// Списъци за генериране на произволни имейли
const firstNames = ["shadow", "cyber", "ghost", "vortex", "dark", "epic", "ninja", "hyper", "alpha", "phantom", "blaze", "storm"];
const lastNames = ["player", "gamer", "slayer", "pro", "master", "king", "beast", "striker", "god", "sniper", "hunter"];
const domains = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com", "proton.me"];

// Символи за генериране на произволна парола
const passChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%";

function checkPassword() {
    const inputPass = document.getElementById("access-pass").value;
    const errorMsg = document.getElementById("error-msg");

    if (inputPass === ACCESS_PASSWORD) {
        document.getElementById("login-screen").classList.add("hidden");
        document.getElementById("generator-screen").classList.remove("hidden");
    } else {
        errorMsg.innerText = "Incorrect password! Access denied.";
    }
}

// Функция за случайно число
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Функция за случайен текст
function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Функция за генериране на произволна парола
function generateRandomPassword(length = 10) {
    let password = "";
    for (let i = 0; i < length; i++) {
        password += passChars.charAt(Math.floor(Math.random() * passChars.length));
    }
    return password;
}

// Главна функция за генериране на акаунт
function generateAccount() {
    // Сглобяване на имейл
    const fname = getRandomElement(firstNames);
    const lname = getRandomElement(lastNames);
    const num = getRandomInt(10, 9999);
    const domain = getRandomElement(domains);
    
    const generatedEmail = `${fname}_${lname}${num}@${domain}`;
    const generatedPassword = generateRandomPassword(12);

    const fullAccount = `${generatedEmail}:${generatedPassword}`;

    document.getElementById("account-output").innerText = fullAccount;
    document.getElementById("status-msg").innerText = "Account generated successfully!";
}

function copyAccount() {
    const accountText = document.getElementById("account-output").innerText;
    
    if (accountText === "email:password") {
        document.getElementById("status-msg").innerText = "Please generate an account first!";
        return;
    }

    navigator.clipboard.writeText(accountText).then(() => {
        document.getElementById("status-msg").innerText = "Copied to clipboard!";
    });
}