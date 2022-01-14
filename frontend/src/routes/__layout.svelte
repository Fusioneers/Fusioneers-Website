<script context="module" lang="ts">
    import type {Load} from '@sveltejs/kit';
    import {store} from './store';
    import type {Page} from "../../lib/types";

    export const load: Load = async ({fetch}) => {
        const res = await fetch('/site');
        const content = await res.json();
        const pages = content.site.data.attributes.pages.data

        store.update(() => pages);

        return {props: {pages: pages}};
    };
</script>

<script lang="ts">
    import type {Page} from '../../lib/types';

    export let pages: Page[] = [];

    function openNav() {
        console.log("Nav")
        document.getElementById("mobile-nav").style.width = "100%";
    }

    function closeNav() {
        console.log("Close")
        document.getElementById("mobile-nav").style.width = "0%";
    }
</script>

<div class="site">
  <div class="toolbar" id="toolbar">
    <div class="title-bar">
      <h1 class="title">Fusioneers</h1>
    </div>
    <nav class="navigation">
      {#each pages as page}
        <a href={page.attributes.title.toLowerCase()}>{page.attributes.title}</a>
      {/each}
    </nav>
    <div on:click={openNav} class="hamburger">
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
    </div>
  </div>
  <div id="mobile-nav" class="overlay">
    <a href="javascript:void(0)" class="closebtn" on:click={closeNav}>&times;</a>
    <div class="overlay-content">
      {#each pages as page}
        <a on:click={closeNav} href={"../" + page.attributes.title.toLowerCase()}>{page.attributes.title}</a>
      {/each}
    </div>
  </div>
  <slot></slot>
</div>

<style lang="scss">
  @import "src/global";
  @import url('https://fonts.googleapis.com/css2?family=Advent+Pro&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style>