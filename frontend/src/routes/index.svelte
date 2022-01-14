<script lang="ts">
    import {browser} from '$app/env';

    if (browser) {
        window.document.location = "/home";
    }
</script>

<div class="site">
  <div class="landing">
    <h1 class="message">Please wait a second ...</h1>
    <img src="/assets/2307372_b5ad0a88e9.jpg"
         alt="An astronaut floating in space">
  </div>
</div>

<style lang="scss">
  .landing {
    height: 100vh;

    h1, h2, h3, h4, h5, p, a {
      margin: 0;
      padding: 0;
      color: white;
      font-family: Roboto Mono, sans-serif;
      font-style: normal;
      font-weight: normal;
    }

    .message {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      text-align: center;
    }

    img {
      width: 100%;
      height: 100vh;
      object-fit: cover;
    }
  }

  @import "src/global.scss";
  @import url('https://fonts.googleapis.com/css2?family=M+PLUS+1+Code:wght@300;400;500;600&family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');
</style>