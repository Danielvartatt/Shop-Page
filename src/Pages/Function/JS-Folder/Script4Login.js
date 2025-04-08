export default function LoginAdmin(LoginData) {
  const User = LoginData;

  {
    User.isadmin ? Isadmin() : isntAdmin();
  }
}

function Isadmin() {
  return console.log("is admin");
}
function isntAdmin() {
  return console.log("isn't admin");
}
