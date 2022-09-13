document.querySelector(".download").addEventListener("click", async () => {
  let api = await fetch(
    "https://api.github.com/repos/avysis/avysis/releases"
  );
  let json = await api.json();
  let a = document.createElement("a");
  a.href = json[0].assets[0].browser_download_url;
  a.click();
});
