document.addEventListener('DOMContentLoaded', () => {
  const genreCards = document.querySelectorAll('.genre-card');

  genreCards.forEach(card => {
    const genreName = card.querySelector('h2').innerText.trim();

    card.addEventListener('click', () => {
      // Redirect based on genre
      if (genreName === "Action") {
        window.location.href = "action.html";
      } else if (genreName === "Drama") {
        window.location.href = "drama.html";
      } else if (genreName === "Comedy") {
        window.location.href = "comedy.html";
      } 
        else if(genreName==="Romance"){
          window.location.href="romantic.html";
        }
        else if(genreName==="Sci-Fi"){
          window.location.href="scifi.html";
        }
        else{
          window.location.href="horror.html";
        }
      // add more genres as needed
    });
  });
});