// Constants
const API_KEY = 'api_key=1cf50e6248dc270629e802686245c2c8';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = `${BASE_URL}/discover/movie?sort_by=popularity.desc&${API_KEY}`;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const SEARCH_URL = `${BASE_URL}/search/movie?${API_KEY}`;

// Elements
const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');
const tagsEl = document.getElementById('tags');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const current = document.getElementById('current');
const themeToggle = document.getElementById('themeToggle');
const menuBtn = document.getElementById('menuBtn');
const overlayContent = document.getElementById('overlay-content');
const root = document.documentElement;
const genres = [
    { "id": 28, "name": "Action" },
    { "id": 12, "name": "Adventure" },
    { "id": 16, "name": "Animation" },
    { "id": 35, "name": "Comedy" },
    { "id": 80, "name": "Crime" },
    { "id": 99, "name": "Documentary" },
    { "id": 18, "name": "Drama" },
    { "id": 10751, "name": "Family" },
    { "id": 14, "name": "Fantasy" },
    { "id": 36, "name": "History" },
    { "id": 27, "name": "Horror" },
    { "id": 10402, "name": "Music" },
    { "id": 9648, "name": "Mystery" },
    { "id": 10749, "name": "Romance" },
    { "id": 878, "name": "Science Fiction" },
    { "id": 10770, "name": "TV Movie" },
    { "id": 53, "name": "Thriller" },
    { "id": 10752, "name": "War" },
    { "id": 37, "name": "Western" }
];

// Variables
let currentPage = 1;
let totalPages = 100;
let lastUrl = '';
let selectedGenre = [];
let activeSlide = 0;
let totalVideos = 0;

// Initialize
document.addEventListener('DOMContentLoaded', init);

function init() {
    setupTheme();
    setGenre();
    getMovies(API_URL);
    setupEventListeners();
}

function setupTheme() {
    if (localStorage.getItem("darkMode") === "1") {
        darkModeOn();
    } else {
        darkModeOff();
    }
}

function darkModeOn() {
    root.classList.add('darkTheme');
    document.querySelector("header div h1 img").setAttribute("src", "./assets/imgs/icon.png");
    document.querySelector("#themeToggle img").setAttribute("src", "assets/imgs/light_mode.svg");
    document.querySelector("#menuBtn img").setAttribute("src", "assets/imgs/lightmenu.svg");
}

function darkModeOff() {
    root.classList.remove('darkTheme');
    document.querySelector("header div h1 img").setAttribute("src", "./assets/imgs/icon2.png");
    document.querySelector("header div h1 img").setAttribute("alt", "logo");
    document.querySelector("#themeToggle img").setAttribute("src", "assets/imgs/dark.png");
    document.querySelector("#menuBtn img").setAttribute("src", "assets/imgs/Hamburger_icon.svg");
}

function setupEventListeners() {
    themeToggle.addEventListener('click', toggleTheme);
    form.addEventListener('submit', searchMovies);
    prev.addEventListener('click', () => pageCall(currentPage - 1));
    next.addEventListener('click', () => pageCall(currentPage + 1));
    menuBtn.addEventListener('click', toggleSideMenu);
}

function toggleTheme() {
    if (root.classList.contains('darkTheme')) {
        localStorage.setItem("darkMode", "0");
        darkModeOff();
    } else {
        localStorage.setItem("darkMode", "1");
        darkModeOn();
    }
}

function toggleSideMenu(e) {
    e.preventDefault();
    document.querySelector(".side").classList.toggle("showside");
}

function setGenre() {
    tagsEl.innerHTML = '';
    genres.forEach(genre => {
        const tag = document.createElement('div');
        tag.classList.add('tag');
        tag.id = genre.id;
        tag.innerText = genre.name;
        tag.addEventListener('click', () => toggleGenre(genre.id));
        tagsEl.append(tag);
    });
}

function toggleGenre(id) {
    if (selectedGenre.includes(id)) {
        selectedGenre = selectedGenre.filter(genreId => genreId !== id);
    } else {
        selectedGenre.push(id);
    }
    getMovies(API_URL + '&with_genres=' + encodeURIComponent(selectedGenre.join(',')));
    highlightSelection();
}

function highlightSelection() {
    const tags = document.querySelectorAll('.tag');
    tags.forEach(tag => tag.classList.remove('highlight'));
    selectedGenre.forEach(id => document.getElementById(id).classList.add('highlight'));
    addClearButton();
}

function addClearButton() {
    let clearBtn = document.getElementById('clear');
    if (!clearBtn) {
        clearBtn = document.createElement('div');
        clearBtn.classList.add('tag', 'highlight');
        clearBtn.id = 'clear';
        clearBtn.innerText = 'Clear x';
        clearBtn.addEventListener('click', clearGenres);
        tagsEl.prepend(clearBtn);
    } else {
        clearBtn.classList.add('highlight');
    }
}

function clearGenres() {
    selectedGenre = [];
    setGenre();
    getMovies(API_URL);
}

function getMovies(url) {
    lastUrl = url;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.results.length !== 0) {
                showMovies(data.results);
                currentPage = data.page;
                totalPages = data.total_pages;
                updatePagination();
            } else {
                main.innerHTML = '<h1 class="no-results">No Results Found</h1>';
            }
        });
}

function showMovies(data) {
    main.innerHTML = '';
    data.forEach(movie => {
        const { title, poster_path, vote_average, overview, id } = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
            <img src="${poster_path ? IMG_URL + poster_path : 'http://via.placeholder.com/1080x1580'}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getColor(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                ${overview}
                <br/> 
                <button class="know-more" id="${id}">Know More</button>
            </div>
        `;
        main.appendChild(movieEl);
        document.getElementById(id).addEventListener('click', () => openNav(movie));
    });
}

function getColor(vote) {
    return vote >= 8 ? 'green' : vote >= 5 ? 'orange' : 'red';
}

function searchMovies(e) {
    e.preventDefault();
    const searchTerm = search.value;
    selectedGenre = [];
    setGenre();
    if (searchTerm) {
        getMovies(SEARCH_URL + '&query=' + encodeURIComponent(searchTerm));
    } else {
        getMovies(API_URL);
    }
}

function updatePagination() {
    current.innerText = currentPage;
    prev.classList.toggle('disabled', currentPage <= 1);
    next.classList.toggle('disabled', currentPage >= totalPages);
    tagsEl.scrollIntoView({ behavior: 'smooth' });
}

function pageCall(page) {
    if (page > 0 && page <= totalPages) {
        const url = new URL(lastUrl);
        url.searchParams.set('page', page);
        getMovies(url.toString());
    }
}

function openNav(movie) {
    fetch(`${BASE_URL}/movie/${movie.id}/videos?${API_KEY}`)
        .then(res => res.json())
        .then(videoData => {
            if (videoData && videoData.results.length > 0) {
                const videos = videoData.results
                    .filter(video => video.site === 'YouTube')
                    .map((video, idx) => `
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/${video.key}" title="${video.name}" class="embed ${idx === 0 ? 'show' : 'hide'}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    `);
                overlayContent.innerHTML = `
                    <h1 class="no-results">${movie.original_title}</h1>
                    <br/>
                    ${videos.join('')}
                `;
                document.getElementById("myNav").style.width = "100%";
                totalVideos = videos.length;
                activeSlide = 0;
                showVideos();
            } else {
                overlayContent.innerHTML = '<h1 class="no-results">No Results Found</h1>';
            }
        });
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

function showVideos() {
    document.querySelectorAll('.embed').forEach((embed, idx) => {
        embed.classList.toggle('show', idx === activeSlide);
        embed.classList.toggle('hide', idx !== activeSlide);
    });
    document.querySelectorAll('.dot').forEach((dot, idx) => {
        dot.classList.toggle('active', idx === activeSlide);
    });
}

document.getElementById('left-arrow').addEventListener('click', () => {
    activeSlide = activeSlide > 0 ? activeSlide - 1 : totalVideos - 1;
    showVideos();
});

document.getElementById('right-arrow').addEventListener('click', () => {
    activeSlide = activeSlide < totalVideos - 1 ? activeSlide + 1 : 0;
    showVideos();
});
