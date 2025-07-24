function attendre(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}
  
async function animerProgress(id, duree) {
  return new Promise(resolve => {
    const progress = document.querySelector(`#${id} progress`);
    progress.value = 0;
    progress.max = 100;
  
    const intervalMs = 20;
    const increment = 100 / (duree / intervalMs);
  
    const intervalId = setInterval(() => {
      progress.value += increment;

      if (progress.value >= 100) {
        progress.value = 100;
        clearInterval(intervalId);
        resolve();
      }
    }, intervalMs);
  });
}
  
async function lancerMission(){
  try {
    await animerProgress("preparation", 2000);
    await animerProgress("expedition", 1500);
    await animerProgress("livraison", 2500);
    document.getElementById("resultat").textContent = "✅ Colis livré avec succès !";
  } catch (error) {
    console.error(error);
   }
 }
  
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("launch").addEventListener("click", lancerMission);
});  