<style>
    li {
        padding: 20px 0 20px;
    } 

    .container {
        display: grid;
        font-family: "Montserrat", sans-serif;
        place-items: center;  
        text-align: center;
        padding-right: 30px;
    }

    .facts {
        font-weight: 800;
        font-size: 1.5vw;
        text-transform: uppercase;
    }

    @media (max-width: 820px) {
        .facts {
            font-size: 4vw;
        }
    }

    ul {
        list-style-type: none;
    }
</style>

<div class="container">
    <ul class = "facts">
        <li>I am from <span style="color:#e7621a">Staten Island, NY</span></li>
        <li>My favorite pastimes are listening to <span style="color:#125572">music</span> and <span style="color:#f18190">baking</span></li>
        <li>My current favorite technology is <span style="color:#b7800a">SvelteKit</span></li>
        <li>My favorite class I have taken so far is <span style="color:#5f8d88">Algorithms</span></li>
    </ul>
</div>
