document.getElementById('get-joke-btn').addEventListener('click', fetchJoke);

async function fetchJoke() {
    const jokeContainer = document.getElementById('joke');
    jokeContainer.textContent = 'Loading...';
    
    try {
        const response = await fetch('https://v2.jokeapi.dev/joke/Dark');
        const data = await response.json();
        let joke = '';
        if (data.joke) {
            joke = data.joke;
        } else {
            joke = `${data.setup} ... ${data.delivery}`;
        }
        jokeContainer.textContent = joke;
    } catch (error) {
        jokeContainer.textContent = 'Oops! Something went wrong. Try again later.';
        console.error('Error fetching joke:', error);
    }
}
