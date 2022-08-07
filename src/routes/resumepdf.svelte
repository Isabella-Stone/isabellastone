<svelte:head>
    <title>Isabella Stone Resume</title>
</svelte:head>

<style>
    .container {
      position: relative;
      width: 100%;
      overflow: hidden;
      padding-top: 56.25%;
    }
    
    .responsive-iframe {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 100%;
      border: none;
    }
    </style>

<div class="container">
    <!-- svelte-ignore a11y-missing-attribute -->
    <iframe class="responsive-iframe" src="/resume.pdf#view=fitH" style="position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;"/>
</div>