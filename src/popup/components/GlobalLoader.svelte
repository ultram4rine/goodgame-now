<script>
  import { loading } from "../../stores/loading";

  let state = "";

  loading.subscribe((value) => {
    state = value;
  });
</script>

<div class="global-loader {state}">
  <div class="left" />
  <div class="right" />
</div>

<style>
  .global-loader {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 101;
    height: 2px;
    display: block;
  }

  .left,
  .right {
    right: 50%;
    left: 50%;
  }

  .global-loader .left,
  .global-loader .right {
    position: absolute;
    background: #43b85b;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }

  .global-loader.loading .left {
    transition: left 2s ease;
    left: 3%;
  }
  .global-loader.loading .right {
    transition: right 2s ease;
    right: 3%;
  }

  .global-loader.loaded .left {
    transition: right 0.5s ease-in 0.3s, left 0.3s ease;
    left: 0;
    right: 100%;
  }
  .global-loader.loaded .right {
    transition: left 0.5s ease-in 0.3s, right 0.3s ease;
    left: 100%;
    right: 0;
  }
</style>
