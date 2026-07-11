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

    let avatar2 = AVATAR_IMG.filter((avatar) => avatar.name == game2);
    let img2 = avatar2.length > 0 ? avatar2[0].img : AVATAR_IMG_DEFAULT;

    let element = transactionTemplate.clone();
    $(element).attr("id", "message" + count);
    count++;
    $(element).find("#location").text(location);
    $(element).find("#player1 #name").text(player1);
    $(element).find("#player1 #game").text(game1);
    $(element).find("#player1 img").attr("src", img1);
    $(element).find("#item div").text(item);
    $(element)
      .find("#item div")
      .css("--shadow-color", ITEM_TEXT_COLOR[itemColor]);
    $(element).find(".recolor").css("--recolor", ITEM_COLOR[itemColor]);
    $(element).find("#player2 #name").text(player2);
    $(element).find("#player2 #game").text(game2);
    $(element).find("#player2 img").attr("src", img2);
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
