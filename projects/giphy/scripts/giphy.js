const API_KEY = 'l09bSCBP0Se4iS9cFsiGy8Fml8szc6mM';

const $searchBtn = document.getElementById('search-btn');
const $searchInput = document.getElementById('search');

const $content = document.getElementById('content');

const API_URL = 'https://api.giphy.com/v1/gifs/search';

// Отправить запрос на giphy

function searchGifs(options = { keyword: 'tom', limit: 10 }) {
	const request = new XMLHttpRequest();

	request.open(
		'GET',
		API_URL +
			`?api_key=${API_KEY}&q=${options.keyword}&limit=${options.limit}`,
	);

	request.addEventListener('load', function () {
		console.log(request.status);
		const parsed = JSON.parse(request.responseText);

        console.log(parsed);

		parsed.data.forEach(function (gif) {
			const $iframe = document.createElement('iframe');

			$iframe.src = gif.embed_url;

			$iframe.width = 150;
			$iframe.height = 150;

			$content.append($iframe);
		});
	});

	request.send();
}

$searchBtn.addEventListener('click', function() {
    $content.innerHTML = '';

    if (!$searchInput.value) {
        alert('Заполните поле');
        return;
    };

    searchGifs({ keyword: $searchInput.value, limit: 15 });
});

// Полученный ответ