

// const search = new Filter('search', 'data-caption');

 baguetteBox.run('.gallery');


// let searchBox = document.querySelector('#search');
// let images = document.querySelectorAll('.image');

// searchBox.oninput = () => {

//     images.forEach(hide => hide.style.display = 'none');
    
//     let value = searchBox.value;
//     images.forEach(filter => {
//         let caption = filter.getAttribute('data-caption');
//       if(value === caption) {
//         filter.style.display = 'block';
//       }
//     });
// };
 
function search_bar() {
    let input = document.getElementById('search').value;
    input = input.toLowerCase();
    let images = document.getElementsByClassName('image');
      
    for (let i = 0; i < images.length; i++) { 
        let img = images[i];
        let caption = img.getAttribute("data-caption").toLowerCase();

        if (!caption.includes(input)) {
            images[i].style.display="none";
        }
        else {
            images[i].style.display="";                 
        }
    }
}