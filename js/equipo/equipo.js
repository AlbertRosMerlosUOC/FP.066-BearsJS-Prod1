const botonCopiarGitP1 = document.querySelector("#copy-git-p1");
const textoACopiarGitP1 = document.querySelector("#text-git-p1");
const botonCopiarGSites = document.querySelector("#copy-gsites");
const textoACopiarGSites = document.querySelector("#text-gsites");
const botonCopiarSandbox = document.querySelector("#copy-sandbox");
const textoACopiarSandbox = document.querySelector("#text-sandbox");

botonCopiarGitP1.addEventListener("click", () => {
  const seleccion = document.getSelection();
  const contenido = textoACopiarGitP1.innerText;

  const textareaTemporal = document.createElement("textarea");
  textareaTemporal.value = contenido;
  document.body.appendChild(textareaTemporal);

  textareaTemporal.select();
  textareaTemporal.setSelectionRange(0, 99999);

  document.execCommand("copy");

  document.body.removeChild(textareaTemporal);
});

botonCopiarSandbox.addEventListener("click", () => {
  const seleccion = document.getSelection();
  const contenido = textoACopiarSandbox.innerText;

  const textareaTemporal = document.createElement("textarea");
  textareaTemporal.value = contenido;
  document.body.appendChild(textareaTemporal);

  textareaTemporal.select();
  textareaTemporal.setSelectionRange(0, 99999);

  document.execCommand("copy");

  document.body.removeChild(textareaTemporal);
});

botonCopiarGSites.addEventListener("click", () => {
  const seleccion = document.getSelection();
  const contenido = textoACopiarGSites.innerText;

  const textareaTemporal = document.createElement("textarea");
  textareaTemporal.value = contenido;
  document.body.appendChild(textareaTemporal);

  textareaTemporal.select();
  textareaTemporal.setSelectionRange(0, 99999);

  document.execCommand("copy");

  document.body.removeChild(textareaTemporal);
});
