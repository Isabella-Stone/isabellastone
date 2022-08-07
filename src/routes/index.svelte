<style>
    h1 {
        /* font-size: 20.5px; */
        text-align: center;
        /* vertical-align: middle; */
        /* inline-size: min-content; */
        position: fixed;
        top: 25%;
        bottom: 25%;
    }
    
    .title-word {
        animation: color-animation 4s linear infinite;
    }

    .title-word-1 {
        --color-1: #e7621a;
        --color-2: #125572;
        --color-3: #f18190;
    }

    .title-word-2 {
        --color-1: #e49f0a;
        --color-2: #5f8d88;
        --color-3: #17494D;
    }

    @keyframes color-animation {
        0%    {color: var(--color-1)}
        32%   {color: var(--color-1)}
        33%   {color: var(--color-2)}
        65%   {color: var(--color-2)}
        66%   {color: var(--color-3)}
        99%   {color: var(--color-3)}
        100%  {color: var(--color-1)}
    }

    .container {
        display: grid;
        font-family: "Montserrat", sans-serif;
        place-items: center;  
        text-align: center;
    }

    .title {
        font-weight: 800;
        font-size: 6.5vw;
        text-transform: uppercase;
        /* width: 100%; */
    }

    @media (max-width: 800px) {
        .title {
            /* width: 50%; */
            font-size: 9.5vw;
        }
    }

</style>

<div class="container">
    <h1  class="title">
      <span class="title-word title-word-1">Isabella</span>
      <span class="title-word title-word-2">Stone</span>
    </h1>
</div>




