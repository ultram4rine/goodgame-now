<script>
  import Fa from "svelte-fa";
  import {
    faHeart,
    faStar,
    faTrophy,
    faGear,
  } from "@fortawesome/free-solid-svg-icons";

  let active = "favorites";
  const navs = [
    { name: "favorites", icon: faHeart },
    { name: "streams", icon: faStar },
    { name: "tournaments", icon: faTrophy },
    { name: "settings", icon: faGear },
  ];

  const changeActiveTab = (nav) => {
    active = nav;
  };
</script>

<div class="navbar">
  {#each navs as nav}
    <nav
      id={nav.name}
      class="navbar-button {active === nav.name ? 'active no-hover' : ''}"
      on:click={() => changeActiveTab(nav.name)}
    >
      <Fa icon={nav.icon} />
    </nav>
  {/each}
</div>

<style>
  .navbar {
    width: 40px;
    height: calc(100% - 22px - 1px);
    position: relative;
    float: left;
    background-color: #233056;
    border-right: 1px solid black;
    box-shadow: inset -5px 0 5px -4px black;
  }

  .navbar-button {
    width: 40px;
    height: 40px;
    float: left;
    display: table-cell;
    cursor: pointer;
    text-align: center;
    vertical-align: middle;
    line-height: 40px;
    font-family: icomoon;
    font-size: 22px;
    background-color: #233056;
    color: white;
    box-shadow: inset -5px 0 5px -4px black;
  }
  .navbar-button:hover {
    background-color: #52709c !important;
  }
  .no-hover:hover {
    background-color: #1c2644 !important;
  }
  .active {
    background-color: #1c2644 !important;
  }
</style>
