<script>
  import { page } from "../stores/page";

  import Favorites from "../pages/Favorites.svelte";
  import Streams from "../pages/Streams.svelte";
  import Tournaments from "../pages/Tournaments.svelte";
  import Settings from "../pages/Settings.svelte";

  let currentPage = "favorites";

  page.subscribe((value) => {
    currentPage = value;
  });
</script>

<div id="content">
  {#if currentPage === "favorites"}
    <Favorites />
  {:else if currentPage === "streams"}
    <Streams />
  {:else if currentPage === "tournaments"}
    <Tournaments />
  {:else if currentPage === "settings"}
    <Settings />
  {/if}
</div>

<style>
  #content {
    width: calc(100% - 40px - 1px);
    height: calc(100% - 22px - 1px);
    position: relative;
    float: right;
    background-color: #0d1221;
    overflow-y: auto;
    overflow-x: hidden;
  }
  #content::-webkit-scrollbar {
    -webkit-appearance: none;
  }
  #content::-webkit-scrollbar:vertical {
    width: 11px;
  }
  #content::-webkit-scrollbar:horizontal {
    height: 11px;
  }
  #content::-webkit-scrollbar-thumb {
    min-height: 63px;
    width: 10px;
    border-radius: 7px;
    background-color: rgba(60, 64, 73, 0.5);
  }
</style>
