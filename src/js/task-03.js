const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryListEl = document.querySelector('.gallery');

galleryListEl.style.display = 'flex';
galleryListEl.style.gap = '30px';
galleryListEl.style.flexDirection = 'column-reverse';
galleryListEl.style.alignItems = 'center';
galleryListEl.style.listStyle = 'none';

const makeGalleryCard = images.map(imag => {
  const { url, alt } = imag;
  return `
            <li class="gallery-item">
                <img src="${url}" alt="${alt}" width='800'>
            </li>
  `;

});

galleryListEl.insertAdjacentHTML('beforeend', makeGalleryCard.join(''));