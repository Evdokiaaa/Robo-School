<template>
  <div class="trainers__modal">
    <div class="trainer__modal-container">
      <div class="trainers__top">
        <img :src="trainer.img" :alt="trainer.name" />
        <div class="trainer__info">
          <h4 class="trainer__info-name">{{ trainer.name }}</h4>
          <p class="trainer__info-desc">{{ trainer.desc }}</p>
          <div class="trainer__info-socials">
            <!--TODO Тут будут социальные сети. сделать v-if='social'-->
          </div>
        </div>
        <div class="close">
          <button class="close__btn" @click="$emit('close')">Закрыть</button>
        </div>
      </div>
      <div class="trainers__bottom">
        <div class="trainer__achievements">
          <p class="trainer__achievements-1" @click="showEducation">
            Образование
          </p>
          <p class="trainer__achievements-1" @click="showExp">Опыт работы</p>
          <p class="trainer__achievements-1" @click="showRewards">Награды</p>
        </div>
        <div class="trainers__bottom-content">
          <div class="trainers__achievement" v-if="selectedTab === 'education'">
            <p>Дата начала: {{ trainer.education.startDate }}</p>
            <p>Дата окончания: {{ trainer.education.endDate }}</p>
            <p>Университет: {{ trainer.education.university }}</p>
            <p>Факультет: {{ trainer.education.faculty }}</p>
            <p>Специальность: {{ trainer.education.specialty }}</p>
            <p>Форма обучения: {{ trainer.education.formOfStudy }}</p>
          </div>
          <div
            class="selected trainers__achievement"
            v-else-if="selectedTab === 'experience'"
          >
            <div
              v-for="(experience, index) in trainer.workExperience"
              :key="index"
            >
              <h3>Позиция: {{ experience.position }}</h3>
              <p>Дата начала: {{ experience.startDate }}</p>
              <p>Дата окончания: {{ experience.endDate }}</p>
              <p>Компания: {{ experience.company }}</p>
              <ul>
                <li
                  v-for="(responsibility, i) in experience.responsibilities"
                  :key="i"
                >
                  {{ responsibility }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const selectedTab = ref("education");
const props = defineProps({
  trainer: {
    type: Object,
    required: true,
  },
});
const showEducation = () => {
  selectedTab.value = "education";
};
const showExp = () => {
  selectedTab.value = "experience";
};
</script>
<style lang="scss" scoped>
.trainers__modal {
  position: fixed;
  top: 10%;
  left: 25%;
  right: 0;
  width: 940px;
  height: 768px;
  background-color: rgba(0, 0, 0, 0.3);
  background: #f3f3f3;
  border-radius: 12px;
  color: #000;
}
.trainers {
  &__top {
    display: flex;
    justify-content: space-between;
    img {
      width: 150px;
      border-radius: 20px;
    }
  }
}
.trainer {
  &__info {
    flex-basis: 65%;
    &-name {
      font-size: 24px;
      color: #000;
      margin-bottom: 10px;
    }
    &-desc {
      color: rgba(20, 16, 36, 0.7);
    }
  }
}
.close {
  &__btn {
    border: none;
    background: none;
    color: rgba(20, 16, 36, 0.7);
    cursor: pointer;
  }
}
.close__modal {
}
.trainer__modal-container {
  padding: 40px;
}
.trainers__bottom {
  padding-top: 40px;
}
.trainer__achievements {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-bottom: 1px solid #fff;
  padding-bottom: 20px;
}
.trainers__bottom-content {
  max-width: 100%;
  height: 400px;
  padding-top: 40px;
  white-space: nowrap;
  overflow-y: scroll;
}
.selected {
  div {
    margin-bottom: 20px;
  }
}
.trainers__achievements {
  cursor: pointer;
}
</style>
