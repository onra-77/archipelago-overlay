import { Client } from "https://unpkg.com/archipelago.js/dist/archipelago.min.js";

Array.prototype.random = function () {
  return this[Math.floor(Math.random() * this.length)];
};

$(document).ready(function () {
  $("#error").hide();

  var client = new Client();

  var loginMode = true;

  let params = new URLSearchParams(document.location.search);
  let address = decodeURIComponent(params.get("address"));
  let player = params.get("player");
  let password = params.get("password");
  let holdTime = params.get("holdtime") ?? 10;

  $("#holdTime").on("change", function () {
    let value = $("#holdTime").val();
    if (!isNaN(value)) {
      holdTime = value;
    }
  });

  //Functions
  function log(message) {
    console.log("AP message: " + message);
  }

  function error(message) {
    console.error(message);
    $("#error").show();
    $("#error").html(message);
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
      player1.name,
      game1,
      itemName,
      useful,
      player2.name,
      game2,
    );
    let elementId = $(element).attr("id");
    $("#transactionList").append(element);
    setTimeout(() => wipeTopMessage(elementId), holdTime * 1000);
  }

  function fakeFeed() {
    let player1 = FAKE_NAMES.random();
    let player2 = FAKE_NAMES.random();
    let game1 = AVATAR_IMG.random().name;
    let game2 = AVATAR_IMG.random().name;
    let item = FAKE_ITEMS.random();
    let location = FAKE_LOCATIONS.random();
    let useful = ["progression", "useful", "trap", "filler"].random();
    let element = getTransactionElement(
      location,
      player1,
      game1,
      item,
      useful,
      player2,
      game2,
    );
    let elementId = $(element).attr("id");
    if (loginMode) {
      $("#transactionList").append(element);
      setTimeout(() => wipeTopMessage(elementId), holdTime * 1000);
      setTimeout(() => fakeFeed(), (holdTime / 2 - 0.1) * 1000);
    }
  }

  //login logic
  if (address && player) {
    // If the user typed in just a port, assume it was for archipelago.gg
    if (!address.match(/^[A-Za-z0-9._%:-]*$/)) {
      error("Incorrect address! (expecting archipelago.gg:12345)");
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
  } else {
    fakeFeed();
  }

  $("#connect").on("click", () => {
    $("#error").hide();

    let uri = $("#address").val();
    if (!uri) {
      error("Missing address!");
      return;
    }
    if (!uri.match(/^[A-Za-z0-9._%:-]*$/)) {
      error("Incorrect address! (expecting archipelago.gg)");
      return;
    }
    let port = $("#port").val();
    if (!port) {
      error("Missing port!");
      return;
    }
    if (!port.match(/^[0-9]*$/)) {
      error("Incorrect port! (expecting 12345)");
      return;
    }
    params.set("address", encodeURIComponent(uri + ":" + port));

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
    $("#transactionList").empty();
    loginMode = false;
    $("#error").hide();
    $("#login").hide();
    $("#settings").hide();
    if (password) {
      client
        .login(address, player, undefined, {
          password: password,
        })
        .then(() => {
          log("Connected to the Archipelago server (with password)!");
        })
        .catch((err) => {
          error(
            `Could not connect to game ${address} with player ${player} and password <span style="color: black; background: black; span:hover {color: white}">${password}</span>`,
          );
        });
    } else {
      client
        .login(address, player)
        .then(() => {
          log("Connected to the Archipelago server!");
        })
        .catch((err) => {
          error(`Could not connect to game ${address} with player ${player}`);
        });
    }
  }

  //active listeners
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
