(function () {
  var front = document.getElementById("hoodie-front");
  var back = document.getElementById("hoodie-back");
  var btnFront = document.getElementById("view-front");
  var btnBack = document.getElementById("view-back");

  function show(view) {
    var isFront = view === "front";
    front.classList.toggle("hidden", !isFront);
    back.classList.toggle("hidden", isFront);
    btnFront.classList.toggle("active", isFront);
    btnBack.classList.toggle("active", !isFront);
  }
  btnFront.addEventListener("click", function () { show("front"); });
  btnBack.addEventListener("click", function () { show("back"); });

  var bagCount = 0;
  var countEl = document.getElementById("bag-count");
  var messageEl = document.getElementById("bag-message");
  document.getElementById("add-to-bag").addEventListener("click", function () {
    bagCount += 1;
    countEl.textContent = bagCount;
    var size = document.getElementById("size").value;
    messageEl.textContent = "Bag me add ho gaya — Hoodie (Size " + size + ") × " + bagCount + ". Ye demo hai, real order nahi hoga.";
  });
  document.getElementById("bag-button").addEventListener("click", function () {
    messageEl.scrollIntoView({ behavior: "smooth", block: "center" });
  });
})();
