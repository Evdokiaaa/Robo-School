<template>
  <div class="phone__modal">
    <div class="phone__modal-container">
      <h4 class="phone__number" ref="phoneNumber">+7 800 000 11 22</h4>
      <button
        class="phone__number-copy"
        @click="copyNumber"
        :class="{ checked: isClicked }"
      >
        {{ buttonText }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const phoneNumber = ref(null);
const isClicked = ref(false);
const buttonText = ref("Copy");
const copyNumber = () => {
  const range = document.createRange();
  range.selectNode(phoneNumber.value);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  isClicked.value = true;
  buttonText.value = "Copied";
};
</script>
<style scoped lang="scss">
.phone {
  &__modal {
    position: absolute;
    width: 300px;
    height: 120px;
    background-color: #5031cd;
    color: #fff;
    top: 70px;
    right: 10px;
    padding: 20px 10px;
    text-align: center;
    border-radius: 15px;
  }
  &__number {
    font-size: 24px;
    &-copy {
      border-radius: 10px;
      outline: none;
      border: none;
      padding: 5px;
      font-size: 20px;
      width: 100%;
      margin-top: 5px;
    }
  }
}
.phone__animation-enter {
  opacity: 0;
}

.phone__animation-enter-active {
  opacity: 1;
  transition: 2s linear;
}
.checked {
  color: #fff;
  background-color: rgb(2, 152, 2);
}
</style>
