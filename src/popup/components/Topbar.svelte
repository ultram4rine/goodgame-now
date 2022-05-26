<script>
  import { onMount } from "svelte";

  import Fa from "svelte-fa";
  import {
    faSearch,
    faXmark,
    faSync,
    faAngleLeft,
    faAngleRight,
  } from "@fortawesome/free-solid-svg-icons";

  import { authenticated } from "../../stores/auth";
  import { page } from "../../stores/page";

  import { getUser } from "../../api/user";

  let currentPage = "favorites";

  let searchPattern = "";
  let spin = false;
  const startSpin = () => {
    spin = true;
    window.setTimeout(() => {
      spin = false;
    }, 2000);
  };
  let user = {};

  page.subscribe((value) => {
    currentPage = value;
  });

  onMount(async () => {
    try {
      user = await getUser();
      authenticated.set(true);
    } catch (_err) {
      authenticated.set(false);
    }
  });
</script>

<div class="topbar ov">
  {#if currentPage !== "settings"}
    <div class="search-block ov">
      <label for="search" class="icon iconsearch"><Fa icon={faSearch} /></label>
      {#if searchPattern !== ""}
        <span class="icon iconclose" on:click={() => (searchPattern = "")}>
          <Fa icon={faXmark} />
        </span>
      {/if}
      <input
        id="search"
        class="search-input"
        type="text"
        name="query"
        autocomplete="off"
        data-lock="0"
        bind:value={searchPattern}
      />
    </div>
    <div class="refresh" on:click={() => startSpin()}>
      <Fa icon={faSync} {spin} />
    </div>
  {/if}
  {#if $authenticated && currentPage !== "settings"}
    <div class="userbar">
      <img alt="user-avatar" src="https://static.goodgame.ru{user.avatar}" />
      <div class="nickname">{user.nickname}</div>
    </div>
  {/if}
  {#if currentPage === "streams"}
    <div class="pages-buttons">
      <div id="prev" class="button disabled"><Fa icon={faAngleLeft} /></div>
      <div id="next" class="button"><Fa icon={faAngleRight} /></div>
    </div>
  {/if}
</div>

<style>
  .topbar {
    position: relative;
    width: 100%;
    height: 44px;
    background-color: #233056;
    color: #739fd6;
    font-family: -apple-system, Open Sans, sans-serif;
    border-bottom: 1px solid black;
  }

  .refresh {
    position: absolute;
    top: 13.5px;
    left: 208px;
    color: #fff;
    font-size: 17px;
    cursor: pointer;
  }

  .search-block {
    position: relative;
    max-width: 200px;
    margin-top: 4px;
    margin-left: 4px;
    z-index: 1;
  }
  .search-block .icon {
    position: absolute;
    cursor: pointer;
    color: #fff;
  }
  .search-block .icon.iconsearch {
    top: 9px;
    left: 12px;
    font-size: 15px;
  }
  .search-block .icon.iconclose {
    top: 7px;
    right: 14px;
    font-size: 21px;
  }
  .ov {
    overflow: hidden;
  }
  input[type="text"] {
    display: block;
    color: #fff;
    width: 122px;
    font-size: 14px;
    line-height: 20px;
  }
  .search-input {
    background-color: #233056;
    padding: 6px 37px;
    outline: none;
    border: 2px solid #233056;
  }
  .search-input:hover {
    border-color: #445477;
  }
  .search-input:focus {
    outline: none;
    border: 2px solid #768ba9;
    background-color: #0d1221;
  }

  .userbar {
    position: absolute;
    top: 7px;
    right: 4px;
    vertical-align: middle;
    width: 100px;
    height: 30px;
    line-height: 30px;
    float: right;
    font-size: 12px;
    font-family: -apple-system, Open Sans, sans-serif;
    color: #63a0fa;
  }
  .userbar img {
    margin: 5px 5px 0 0;
    width: 20px;
    height: 20px;
    float: left;
  }
  .userbar .nickname {
    width: 70px;
    height: 30px;
    margin-left: 25px;
  }

  .pages-buttons {
    position: absolute;
    top: 7px;
    right: 4px;
    width: 58px;
    height: 30px;
    line-height: 30px;
    margin-right: 20px;
    float: right;
    background-color: #233056;
  }
  .pages-buttons .button {
    cursor: pointer;
    text-align: center;
    width: 25px;
    height: 25px;
    line-height: 27.2px;
    margin-top: 2.5px;
    margin-left: 4px;
    border-radius: 50%;
    background-color: rgba(79, 88, 119, 0.3);
    color: #73adff;
  }
  .pages-buttons .button#prev {
    float: left;
  }
  .pages-buttons .button#next {
    float: right;
  }
  .pages-buttons .button:hover {
    background-color: rgba(79, 88, 119, 0.5) !important;
    color: #4f98ff !important;
  }
  .pages-buttons .button.disabled {
    background: hsla(0, 0%, 49%, 0.3);
    color: #acacac;
  }
  .pages-buttons .button.disabled:hover {
    background: hsla(0, 0%, 49%, 0.3) !important;
    color: #acacac !important;
  }
</style>
