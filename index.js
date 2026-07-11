import { Client } from "https://unpkg.com/archipelago.js/dist/archipelago.min.js";

var ITEM_COLOR = {
  progression: "300deg",
  useful: "150deg",
  trap: 0,
  filler: "200deg",
};
var ITEM_TEXT_COLOR = {
  progression: "#d269ec",
  useful: "#68e78e",
  trap: "#ee6969",
  filler: "#4cd3f5",
};
var AVATAR_IMG = [
  { name: "Outer Wilds", img: "./character/outer_wilds.png" },
  { name: "Celeste (Open World)", img: "./character/celeste.png" },
  { name: "Hollow Knight", img: "./character/hollow_knight.png" },
  { name: "Dark Souls III", img: "./character/dark_souls_3.png" },
  { name: "Pokemon Emerald", img: "./character/pokemon.png" },
  { name: "Super Mario 64", img: "./character/super_mario.png" },
  { name: "Terraria", img: "./character/terraria.png" },
  { name: "Stardew Valley", img: "./character/stardew_valley.png" },
  { name: "Ocarina of Time", img: "./character/zelda_ocarina.png" },
  { name: "Risk of Rain 2", img: "./character/risk_of_rain.png" },
  { name: "Kingdom Hearts 2", img: "./character/kingdom_hearts.png" },
  { name: "Starcraft 2", img: "./character/starcraft.png" },
  { name: "A Link to the Past", img: "./character/zelda_ocarina.png" }, //should be its own pic
  { name: "Undertale", img: "./character/undertale.png" },
  { name: "Minecraft", img: "./character/minecraft.png" },
];
var AVATAR_IMG_DEFAULT = "./character/unknown.png";

$(document).ready(function () {
  $("#error").hide();

  var client = new Client();
  var transactionTemplate = $("#transactionTemplate").detach();
  transactionTemplate.show();

  let params = new URLSearchParams(document.location.search);
  let port = params.get("port");
  let player = params.get("player");
  let password = params.get("password");
  let holdTime = params.get("holdtime") ?? 10_000;

  var count = 0;

  function log(message) {
    console.log("AP message: " + message);
  }

  function error(message) {
    console.error(message);
    $("#error").show();
    $("#error").html(message);
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

  function processMessage(item) {
    let player1 = item.sender;
    let player2 = item.receiver;
    let itemName = item.name;
    let location = item.locationName;
    let game1 = item.locationGame;
    let game2 = item.game;
    let useful = item.useful
      ? "useful"
      : item.trap
        ? "trap"
        : item.progression
          ? "progression"
          : "filler";
    let element = getTransactionElement(
      location,
      player1,
      game1,
      itemName,
      useful,
      player2,
      game2,
    );
    let elementId = $(element).attr("id");
    $("#transactionList").append(element);
    setTimeout(() => wipeTopMessage(elementId), holdTime);
  }

  function wipeTopMessage(elementId) {
    $("#" + elementId).removeClass("enter");
    $("#" + elementId).addClass("exit");
    setTimeout(() => {
      $("#" + elementId).remove();
    }, 500);
  }

  if (port && player) {
    if (!port.match(/^[0-9]{1,5}$/)) {
      error(`Not a valid port: '${port}'. Must be like '12345'`);
      return;
    }
    if (!player.match(/^[A-Za-z0-9 _-]*$/)) {
      error(`Player must not be empty`);
      return;
    }
    if (!/^\d+$/.test(holdTime)) {
      error(`Invalid hold time:${holdTime}`);
      return;
    }
    login();
  }

  $("#connect").on("click", () => {
    $("#error").hide();

    let port = $("#port").val();
    if (!port || !port.match(/^[0-9]{1,5}$/)) {
      error(`Not a valid port: '${port}'. Must be like '12345'`);
      return;
    } else {
      params.set("port", port);
    }

    let player = $("#player").val();
    if (player && player.match(/^[A-Za-z0-9 _-]*$/)) {
      params.set("player", player);
    } else if (player) {
      error("Invalid player, avoid special characters");
      return;
    } else {
      error(`Player must not be empty`);
      return;
    }

    let password = $("#passw").val();
    if (password && password.match(/^[^`"'()<>]*$/)) {
      params.set("password", password);
    } else if (password) {
      error("Invalid password, avoid escape characters ()\`\"'<>");
      return;
    }

    let newHoldTime = $("#holdTime").val();
    if (newHoldTime && /^\d+$/.test(newHoldTime)) {
      if (newHoldTime != 10_000) {
        params.set("holdtime", newHoldTime);
        holdTime = newHoldTime;
      }
    } else if (holdTime) {
      error("Invalid hold time, must be a number");
      return;
    }

    window.location.search = params;
    login();
  });

  function login() {
    $("#error").hide();
    $("#login").hide();
    if (password) {
      client
        .login("archipelago.gg:" + port, player, undefined, {
          password: password,
        })
        .then(() => {
          log("Connected to the Archipelago server (with password)!");
        })
        .catch((err) => {
          error(
            `Could not connect to game archipelago.gg:${port} with player ${player} and password <span style="color: black; background: black; span:hover {color: white}">${password}</span>`,
          );
        });
    } else {
      client
        .login("archipelago.gg:" + port, player)
        .then(() => {
          log("Connected to the Archipelago server!");
        })
        .catch((err) => {
          error(
            `Could not connect to game archipelago.gg:${port} with player ${player}`,
          );
        });
    }
  }

  let hasRunOnce = false;
  client.items.on("itemsReceived", (items) => {
    if (!hasRunOnce) {
      hasRunOnce = true;
      for (let item of items) {
        log(item);
        processMessage(item);
      }
    }
  });

  client.messages.on("itemSent", (text, item, nodes) => {
    log(text);
    processMessage(item);
  });
});
