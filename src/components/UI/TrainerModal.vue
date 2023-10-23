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
        <div class="close" @click="$emit('close')">
          <button class="close__btn"></button>
        </div>
      </div>
      <div class="trainers__bottom">
        <div class="trainer__achievements">
          <p
            class="trainer__achievements-1"
            @click="showEducation"
            :class="{ redText: isEducationActive }"
          >
            Образование
          </p>
          <p
            class="trainer__achievements-1"
            @click="showExp"
            :class="{ redText: isExpActive }"
          >
            Опыт работы
          </p>
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

const isEducationActive = ref(true);
const isExpActive = ref(false);
const showEducation = () => {
  selectedTab.value = "education";
  isEducationActive.value = true;
  isExpActive.value = false;
};
const showExp = () => {
  selectedTab.value = "experience";
  isEducationActive.value = false;
  isExpActive.value = true;
};
</script>
<style lang="scss" scoped>
.trainers__modal {
  position: absolute;
  z-index: 100;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  max-width: 940px;
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
    @media screen and (max-width: 625px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
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
    @media screen and (max-width: 625px) {
      text-align: center;
      margin-top: 10px;
    }
  }
}
.close {
  cursor: pointer;
  &__btn {
    border: none;
    background: none;
    color: rgba(20, 16, 36, 0.7);
    cursor: pointer;
  }
}

.trainer__modal-container {
  padding: 40px;
}
.trainers__bottom {
  padding-top: 40px;
}
.trainer__achievements {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-bottom: 1px solid #1410241c;
  padding-bottom: 20px;
  @media screen and (max-width: 625px) {
    display: flex;
    justify-content: space-around;
  }
  @media screen and (max-width: 375px) {
    flex-direction: column;
    align-items: center;
  }
}
.trainers__bottom-content {
  max-width: 100%;
  height: 400px;
  padding-top: 40px;
  white-space: nowrap;
  overflow-y: scroll;
  @media screen and (max-width: 625px) {
    height: 300px;
  }
  @media screen and (max-width: 375px) {
    height: 250px;
  }
}
.selected {
  div {
    margin-bottom: 20px;
  }
}
.trainer__achievements-1 {
  cursor: pointer;
}
.redText {
  color: red;
}
</style>
