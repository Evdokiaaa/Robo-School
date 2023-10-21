<template>
  <div class="burger__menu">
    <div class="menu-btn">
      <div class="menu-btn__burger"></div>
    </div>
    <ul class="menu__items">
      <li class="menu__item">О школе</li>
      <li class="menu__item">Тренеры</li>
      <li class="menu__item">Стоимость</li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.burger__menu {
  position: absolute;
  background: red;
}
.menu__items {
  width: 200px;
  background-color: white;
  padding: 10px;
  list-style: none;
  display: none;
}

.menu__item {
  cursor: pointer;
  padding: 5px 0;
}
</style>
