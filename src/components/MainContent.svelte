<script>
  import { page } from "../stores/page";

  import Favorites from "../pages/Favorites.svelte";

  let currentPage = "favorites";

  page.subscribe((value) => {
    currentPage = value;
  });
</script>

<div id="content">
  <Favorites />
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
