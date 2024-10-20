document.addEventListener("DOMContentLoaded", function () {
    // Fetch the JSON data from the gallery.json file
    fetch('../assets/text/art.json')
        .then(response => response.json())
        .then(data => {
            renderGallery(data);
        })
        .catch(error => console.error('Error fetching gallery data:', error));
});

function renderGallery(images) {
    const galleryContainer = document.getElementById('artgallery');

    // Create a container for the gallery
    images.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');

        // Create the image element
        const imgContainer = document.createElement('div');
        imgContainer.classList.add('gallery-image');
        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.title;
        imgContainer.appendChild(img);

        // Create the description element
        const descriptionContainer = document.createElement('div');
        descriptionContainer.classList.add('gallery-description');

        // Create the title
        const title = document.createElement('h2');
        title.textContent = item.title;
        descriptionContainer.appendChild(title);

        // Create content based on description type
        item.description.forEach(contentItem => {
            if (contentItem.type === 'header') {
                const header = document.createElement('h3');
                header.textContent = contentItem.content;
                descriptionContainer.appendChild(header);
            } else if (contentItem.type === 'paragraph') {
                const paragraph = document.createElement('p');
                paragraph.textContent = contentItem.content;
                descriptionContainer.appendChild(paragraph);
            } else if (contentItem.type === 'list') {
                const ul = document.createElement('ul');
                contentItem.content.forEach(listItem => {
                    const li = document.createElement('li');
                    li.textContent = listItem;
                    ul.appendChild(li);
                });
                descriptionContainer.appendChild(ul);
            }
        });

        // Append image and description to the gallery item
        galleryItem.appendChild(imgContainer);
        galleryItem.appendChild(descriptionContainer);

        // Add gallery item to the container
        galleryContainer.appendChild(galleryItem);
    });
}
