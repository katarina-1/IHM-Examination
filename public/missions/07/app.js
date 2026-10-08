// Koppla in encore-API:t och hantera fel. / Connect the encore API and handle errors.
document.querySelector("#load").addEventListener("click", async () => {
  try {
    // TODO: fetch('/api/encore'), kontrollera response.ok, läs JSON / check response.ok, read JSON.
    const response = await fetch("/api/encore");
    if (!response.ok) throw new Error("HTTP " + response.status);
    const track = await response.json();
    document.querySelector("#encore").textContent = track.title;
  } catch (error) {
    document.querySelector("#status").textContent = "Något gick fel när låten skulle hämtas: " + error.message;
  }
});
