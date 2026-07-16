var transactionTemplate;
$(document).ready(function () {
  transactionTemplate = $("#transactionTemplate").detach();
  transactionTemplate.show();
});

var count = 0;

function hashColor(name) {
  //https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript
  let hash = 0;
  for (const char of name) {
    hash = (hash << 5) - hash + char.charCodeAt(0);
    hash |= 0; // Constrain to 32bit integer
  }
  return hash;
}

function getTransactionElement(
  location,
  player1,
  game1,
  item,
  itemColor,
  player2,
  game2,
) {
  let avatar1 = AVATAR_IMG.filter((avatar) => avatar.name == game1);
  let img1 = avatar1.length > 0 ? avatar1[0].img : AVATAR_IMG_DEFAULT;
  let color1 = hashColor(player1);

  let avatar2 = AVATAR_IMG.filter((avatar) => avatar.name == game2);
  let img2 = avatar2.length > 0 ? avatar2[0].img : AVATAR_IMG_DEFAULT;
  let color2 = hashColor(player2);

  let element = transactionTemplate.clone();
  $(element).attr("id", "message" + count);
  count++;
  $(element).find("#location").text(location);
  $(element).find("#player1 #name").text(player1);
  $(element).find("#player1 #game").text(game1);
  $(element).find("#player1 img").attr("src", img1);
  $(element).find("#player1 .shadow-color").css("--shadow-color", color1);
  $(element).find("#item div").text(item);
  $(element)
    .find("#item div")
    .css("--shadow-color", ITEM_TEXT_COLOR[itemColor]);
  $(element).find(".recolor").css("--recolor", ITEM_COLOR[itemColor]);
  $(element).find("#player2 #name").text(player2);
  $(element).find("#player2 #game").text(game2);
  $(element).find("#player2 img").attr("src", img2);
  $(element).find("#player2 .shadow-color").css("--shadow-color", color2);
  $(element).addClass("enter");
  return element;
}

function wipeTopMessage(elementId) {
  $("#" + elementId).removeClass("enter");
  $("#" + elementId).addClass("exit");
  setTimeout(() => {
    $("#" + elementId).remove();
  }, 500);
}
