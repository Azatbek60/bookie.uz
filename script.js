window.onload = () => {
  const defaultBtn = document.querySelector('.nav-btn.active');
  loadPage('home/home.html', defaultBtn);
};

function loadPage(pageUrl, element) {
  fetch(pageUrl)
    .then(response => {
      if (!response.ok) throw new Error("Fayl topilmadi: " + pageUrl);
      return response.text();
    })
    .then(data => {
      const mainContent = document.getElementById('main-content');
      if (mainContent) {
        mainContent.innerHTML = data;
      }
    })
    .catch(error => console.error("Xatolik:", error));

  if (element) {
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');
  }
}

