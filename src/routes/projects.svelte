<style>
    .container {
        display: grid;
        font-family: "Montserrat", sans-serif;
        place-items: center;  
        text-align: center;
        /* padding-right: 30px; */
    }

    h1 {
        font-weight: 800;
        font-size: 2vw;
        text-transform: uppercase;
    }

    h2 {
        font-weight: 600;
        font-size: 1.8vw;
        text-transform: uppercase;
    }

    .project1 {
        /* font-weight: 800;
        font-size: 1.5vw;
        text-transform: uppercase; */
        max-width: 800px;
    }

    p {
        font-weight: 600;
        font-size: 1.3vw;
        text-transform: uppercase;
    }

    img {
        width: 100%;
        height: auto;
    }

    a:hover {
        opacity: 50%;
    }

    /* adjust styling for smaller screens */
    @media (max-width: 820px) {
        /* .project1 {
            font-size: 4vw;
        } */
        h1 {
            font-size: 4vw;
        }
        h2 {
            font-size: 4vw;
        }
        p {
            font-size: 3vw;
        }        
    }

</style>

<div class="container">
    <h1>Other projects I've been working on...</h1>
    <div class="project1">
        <h2 style="color:#e7621a">Job Tracker Website</h2>
        <p>This website allows users to login and save jobs that they have either applied for, or want to remember to apply
           for, and easily keep track of whether or not they are accepted</p>
        <p>Technologies used: SvelteKit, Tailwind, Supabase</p>
        <p>Log in and try it yourself <a href="https://jobtracker.stoneisabella.com/" target="_blank" style="color:#b7800a">here</a>!</p>
    </div>
    <img src="./jobsite.png" alt="website demo image">
</div>
