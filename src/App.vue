<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="less" rel="stylesheet/less">
@columns: 60;
.gs-item(@n) when (@n > 0) {
  .gs-item(@n - 1);

  &[data-gs-width="@{n}"] {
    width: (100% / @columns) * @n;
  }
  &[data-gs-x="@{n}"] {
    left: (100% / @columns) * @n;
  }
  &[data-gs-min-width="@{n}"] {
    min-width: (100% / @columns) * @n;
  }
  &[data-gs-max-width="@{n}"] {
    max-width: (100% / @columns) * @n;
  }
}

.grid-stack > .grid-stack-item {
  min-width: (100% / @columns) * 1;
}

.grid-stack {
  .grid-stack-item {
    .gs-item(@columns);
  }
}


// .gs-itemApp(@n) when (@n > 0) {
//   .gs-itemApp(@n - 1);

//   &[data-gs-width="@{n}"] {
//     width: 100% ;
//   }
//   &[data-gs-x="@{n}"] {
//     left: 0;
//   }
//   &[data-gs-min-width="@{n}"] {
//     min-width: 100% ;
//   }
//   &[data-gs-max-width="@{n}"] {
//     max-width: 100% ;
//   }
// }

// .dn_app_container .grid-stack > .grid-stack-item {
//   min-width: (100% / @columns) * 1;
// }

// .dn_app_container .grid-stack {
//   .grid-stack-item {
//     .gs-itemApp(@columns);
//   }
// }

</style>
