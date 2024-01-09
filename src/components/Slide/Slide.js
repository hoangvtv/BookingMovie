import React from "react";
import $ from "jquery";
import "./Slide.module";

export default function Slide() {
  return (
    <div className="container">
      <div className="header" style={{ margin: "10px 30px" }}>
        <img src="avatar.jpg" className="logo" />
        <ul>
          <li>HOME</li>
          <li>CATEGORY</li>
          <li>INFO</li>
          <li>CONTACT</li>
        </ul>
      </div>
      <div className="effect">
        <div className="birt">
          <img src="bird1.gif" alt="" />
        </div>
      </div>
      <div className="list">
        <div className="item" id="item_0">
          <img src="img2.jpg" alt="" />
          <div className="content">
            <h2>HO VIET HOANG</h2>
            <div className="content1">
              Tính rủ anh đi cháy phố, chưa kịp cháy phố mà anh cháy mất tiêu{" "}
              <br />
              Tính rủ anh đi cháy phố, chưa kịp cháy phố mà anh cháy mất tiêu{" "}
              <br />
            </div>
            <div className="button">See More</div>
          </div>
        </div>
        <div className="item" id="item_1">
          <img src="img1.jpeg" alt="" />
          <div className="content">
            <h2>HO VIET HOANG</h2>
            <div className="content1">
              Tính rủ anh đi cháy phố, chưa kịp cháy phố mà anh cháy mất tiêu{" "}
              <br />
              Tính rủ anh đi cháy phố, chưa kịp cháy phố mà anh cháy mất tiêu{" "}
              <br />
            </div>
            <div className="button">See More</div>
          </div>
        </div>
        <div className="item " id="item_2">
          <img src="img3.jpg" alt="" />
          <div className="content">
            <h2>HO VIET HOANG</h2>
            <div className="content1">
              Tính rủ anh đi cháy phố, chưa kịp cháy phố mà anh cháy mất tiêu{" "}
              <br />
              Tính rủ anh đi cháy phố, chưa kịp cháy phố mà anh cháy mất tiêu{" "}
              <br />
            </div>
            <div className="button">See More</div>
          </div>
        </div>
      </div>
      <button id="next">
        <i className="fa-solid fa-angle-right" />
      </button>
    </div>
  );
}

$(document).ready(function () {
  var count_group = $(".list .item").length;
  var active = 0;
  var deg_bg = 0;
  var begin = true;
  function Load() {
    if (begin) {
      begin = false;
    } else {
      $(
        "#item_" +
          (active - 2 < -1
            ? count_group - 2
            : active - 2 < 0
            ? count_group - 1
            : active - 2)
      ).removeClass("hide");
      $("#item_" + (active - 1 < 0 ? count_group - 1 : active - 1)).removeClass(
        "active"
      );
      $("#item_" + (active - 1 < 0 ? count_group - 1 : active - 1)).addClass(
        "hide"
      );
    }

    $("#item_" + active).removeClass("hide");
    $("#item_" + active).addClass("active");

    $(".dots-page div").removeClass("active");
    $("#dot_" + active).addClass("active");
    $(".effect").addClass("start");
    beginPosition();

    setTimeout(function () {
      $(".effect").removeClass("start");
    }, 3000);
  }
  Load();

  $("#next").on("click", function () {
    active = active + 1 >= count_group ? 0 : active + 1;
    Load();
  });
  $("#prev").on("click", function () {
    active = active - 1 < 0 ? count_group - 1 : active - 1;
  });
});
$(".button").hover(
  function () {
    if ($(".effect").hasClass("start")) {
      return;
    }
    $(".birt").css("right", "31%");
    $(".birt").css("bottom", "16%");
    $(".birt").css("transform", "rotateY(192deg) rotate(-97deg)");
  },
  function () {
    beginPosition();
  }
);

function beginPosition() {
  $(".birt").css("right", "50%");
  $(".birt").css("bottom", "25%");
  $(".birt").css("transform", "rotateY(192deg) rotate(-40deg)");
}

$(".item").hover(
  function (event) {
    var $PosTop = event.pageY;
    var $PosLeft = event.pageX;
    var $height = $(".item").height();
    var $width = $(".item").width();
    var defaultTop = 25;
    var defaultLeft = 50;
    var topNew = $PosTop > $height / 2 + 30 ? defaultTop - 10 : defaultTop + 10;
    var leftNew =
      $PosLeft > $width / 3 + 30 ? defaultLeft - 10 : defaultLeft + 10;
    $(".birt").css("right", leftNew + "%");
    $(".birt").css("bottom", topNew + "%");
    console.log($PosTop, $height / 2 + 30);
  },
  function () {
    beginPosition();
  }
);
