"use strict";

const change = (docToChangeId, showElementId) => {
  let docToChange = document.getElementById(docToChangeId);
  let showElement = document.getElementById(showElementId);
  docToChange.style.display = "none";
  showElement.style.display = "flex";
};

const takeValue = () => {
  let takeUsername = document.getElementById("usernameValue");
  let takenUsername = document.getElementById("userValue");
  let takeRepository = document.getElementById("repositoryValue");
  let takenRepository = document.getElementById("repoValue");

  const valuetoTransfer = takeUsername.value;
  const repoValueToTransfer = takeRepository.value;
  if (valuetoTransfer === "") {
    takenUsername.textContent = "/ Username";
  } else {
    takenUsername.textContent = valuetoTransfer;
  }

  if (repoValueToTransfer === "") {
    takenRepository.textContent = "/ Repository";
  } else {
    takenRepository.textContent = repoValueToTransfer;
  }
};
