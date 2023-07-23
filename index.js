"use strict";

const change = (docToChangeId,showElementId) => {
  let docToChange = document.getElementById(docToChangeId);
  let showElement = document.getElementById(showElementId);
  docToChange.style.display = "none";
  showElement.style.display = "flex";
  console.log("ok")
};
