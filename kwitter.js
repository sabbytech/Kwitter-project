function login() {
    username=document.getElementById("user_name").nodeValue;
    localStorage.setItem("user_name",username);
    window.location="kwitter_room.html";
}