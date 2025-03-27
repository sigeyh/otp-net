let generatedOTP;

function sendOTP() {
  let mobile = document.getElementById("mobile").value;
  if (mobile.length < 10) {
    alert("Please enter a valid mobile number");
    return;
  }
  generatedOTP = Math.floor(1000 + Math.random() * 9000);
  alert("Your OTP is: " + generatedOTP);
  document.getElementById("otpSection").style.display = "block";
}

function verifyOTP() {
  let enteredOTP = document.getElementById("otp").value;
  if (enteredOTP == generatedOTP) {
    alert("OTP Verified Successfully!");
    window.location.href = "nextpage.html";
  } else {
    alert("Incorrect OTP. Please try again.");
  }
}

// PWA Install Prompt
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  if (confirm("Install this app on your home screen?")) {
    deferredPrompt.prompt();
  }
});
