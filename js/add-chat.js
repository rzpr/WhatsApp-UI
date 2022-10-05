var chat = `
 <div class="list-chat">
    <img src="assets/Avatar.jpg" alt="Avatar">
    <div class="chat-item">
      <ul>
        <p class="name">
          Reza Priatna
        </p>
        <br>
        <p class="msg">
          Halo Lagi Apa Nih?
        </p>
      </ul>
      <ul>
        <p class="msg-time">
          14:36
        </p>
        <br>
        <p class="msg-new">
          1
        </p>
      </ul>
    </div>
  </div>
`
let i = 0;
let len = 5
let text = "";
for (; i < len; ) {
  text += chat;
  i++;
}
document.getElementById("root").innerHTML = text;
