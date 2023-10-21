<template>
  <section class="trainers">
    <div class="container">
      <div class="trainers__title-container">
        <h2>Профессиональные тренеры</h2>
      </div>
      <div class="trainers__container">
        <div class="trainer" v-for="trainer in trainers" :key="trainer.id">
          <img class="trainer__img" :src="trainer.img" :alt="trainer.name" />
          <h4 class="trainer__name">{{ trainer.name }}</h4>
          <p class="trainer__desc">{{ trainer.desc }}</p>
          <button class="trainer__btn" @click="openModal(trainer)">
            Подробнее
          </button>
        </div>
      </div>
    </div>

    <TrainerModal
      v-if="menuIsClicked"
      :trainer="selectedTrainer"
      @close="closeModal"
    />
  </section>
  <div class="overlay" v-if="menuIsClicked" @click="closeModal()"></div>
</template>
<script setup>
//TODO В JSON вынести потом
import { ref } from "vue";
import TrainerModal from "./UI/TrainerModal.vue";
const trainers = [
  {
    id: 1,
    img: "src/assets/trainer-1.jpg",
    name: "Ирина Лайм",
    desc: "преподаватель по робототехнике",
    education: {
      startDate: "Сентябрь 1995",
      endDate: "Июнь 2000",
      university:
        "Санкт-Петербургский политехнический университет Петра Великого",
      faculty: "Факультет Компьютерных наук и технологий",
      specialty: "Математика и компьютерные науки",
      formOfStudy: "Очная",
    },
    workExperience: [
      {
        startDate: "Июнь 2000",
        endDate: "Декабрь 2005",
        position: "Программист",
        company: "Компания ABC",
        responsibilities: [
          "Разработка программного обеспечения",
          "Тестирование и отладка программ",
          "Участие в проектировании систем",
        ],
      },
      {
        startDate: "Январь 2006",
        endDate: "Сентябрь 2012",
        position: "Ведущий разработчик",
        company: "Компания XYZ",
        responsibilities: [
          "Руководство проектами",
          "Разработка сложных компонентов системы",
          "Обучение новых сотрудников",
        ],
      },
    ],
  },
  {
    id: 2,
    img: "src/assets/trainer-2.jpg",
    name: "Марина Орлова",
    desc: "преподаватель по робототехнике",
    education: {
      startDate: "Сентябрь 1995",
      endDate: "Июнь 2000",
      university:
        "Санкт-Петербургский политехнический университет Петра Великого",
      faculty: "Факультет Компьютерных наук и технологий",
      specialty: "Математика и компьютерные науки",
      formOfStudy: "Очная",
    },
    workExperience: [
      {
        startDate: "Июнь 2000",
        endDate: "Декабрь 2005",
        position: "Программист",
        company: "Компания ABC",
        responsibilities: [
          "Разработка программного обеспечения",
          "Тестирование и отладка программ",
          "Участие в проектировании систем",
        ],
      },
      {
        startDate: "Январь 2006",
        endDate: "Сентябрь 2012",
        position: "Ведущий разработчик",
        company: "Компания XYZ",
        responsibilities: [
          "Руководство проектами",
          "Разработка сложных компонентов системы",
          "Обучение новых сотрудников",
        ],
      },
    ],
  },
  {
    id: 3,
    img: "src/assets/trainer-3.jpg",
    name: "Максим Петров",
    desc: "преподаватель по программированию",
    education: {
      startDate: "Сентябрь 1995",
      endDate: "Июнь 2000",
      university:
        "Санкт-Петербургский политехнический университет Петра Великого",
      faculty: "Факультет Компьютерных наук и технологий",
      specialty: "Математика и компьютерные науки",
      formOfStudy: "Очная",
    },
    workExperience: [
      {
        startDate: "Июнь 2000",
        endDate: "Декабрь 2005",
        position: "Программист",
        company: "Компания ABC",
        responsibilities: [
          "Разработка программного обеспечения",
          "Тестирование и отладка программ",
          "Участие в проектировании систем",
        ],
      },
      {
        startDate: "Январь 2006",
        endDate: "Сентябрь 2012",
        position: "Ведущий разработчик",
        company: "Компания XYZ",
        responsibilities: [
          "Руководство проектами",
          "Разработка сложных компонентов системы",
          "Обучение новых сотрудников",
        ],
      },
    ],
  },
  {
    id: 4,
    img: "src/assets/trainer-4.jpg",
    name: "Константин Назаров",
    desc: "преподаватель по программированию",
    education: {
      startDate: "Сентябрь 1995",
      endDate: "Июнь 2000",
      university:
        "Санкт-Петербургский политехнический университет Петра Великого",
      faculty: "Факультет Компьютерных наук и технологий",
      specialty: "Математика и компьютерные науки",
      formOfStudy: "Очная",
    },
    workExperience: [
      {
        startDate: "Июнь 2000",
        endDate: "Декабрь 2005",
        position: "Программист",
        company: "Компания ABC",
        responsibilities: [
          "Разработка программного обеспечения",
          "Тестирование и отладка программ",
          "Участие в проектировании систем",
        ],
      },
      {
        startDate: "Январь 2006",
        endDate: "Сентябрь 2012",
        position: "Ведущий разработчик",
        company: "Компания XYZ",
        responsibilities: [
          "Руководство проектами",
          "Разработка сложных компонентов системы",
          "Обучение новых сотрудников",
        ],
      },
    ],
  },
  {
    id: 3,
    img: "src/assets/trainer-3.jpg",
    name: "Максим Петров",
    desc: "преподаватель по программированию",
    education: {
      startDate: "Сентябрь 1995",
      endDate: "Июнь 2000",
      university:
        "Санкт-Петербургский политехнический университет Петра Великого",
      faculty: "Факультет Компьютерных наук и технологий",
      specialty: "Математика и компьютерные науки",
      formOfStudy: "Очная",
    },
    workExperience: [
      {
        startDate: "Июнь 2000",
        endDate: "Декабрь 2005",
        position: "Программист",
        company: "Компания ABC",
        responsibilities: [
          "Разработка программного обеспечения",
          "Тестирование и отладка программ",
          "Участие в проектировании систем",
        ],
      },
      {
        startDate: "Январь 2006",
        endDate: "Сентябрь 2012",
        position: "Ведущий разработчик",
        company: "Компания XYZ",
        responsibilities: [
          "Руководство проектами",
          "Разработка сложных компонентов системы",
          "Обучение новых сотрудников",
        ],
      },
    ],
  },
  {
    id: 3,
    img: "src/assets/trainer-3.jpg",
    name: "Максим Петров",
    desc: "преподаватель по программированию",
    education: {
      startDate: "Сентябрь 1995",
      endDate: "Июнь 2000",
      university:
        "Санкт-Петербургский политехнический университет Петра Великого",
      faculty: "Факультет Компьютерных наук и технологий",
      specialty: "Математика и компьютерные науки",
      formOfStudy: "Очная",
    },
    workExperience: [
      {
        startDate: "Июнь 2000",
        endDate: "Декабрь 2005",
        position: "Программист",
        company: "Компания ABC",
        responsibilities: [
          "Разработка программного обеспечения",
          "Тестирование и отладка программ",
          "Участие в проектировании систем",
        ],
      },
      {
        startDate: "Январь 2006",
        endDate: "Сентябрь 2012",
        position: "Ведущий разработчик",
        company: "Компания XYZ",
        responsibilities: [
          "Руководство проектами",
          "Разработка сложных компонентов системы",
          "Обучение новых сотрудников",
        ],
      },
    ],
  },
];
const selectedTrainer = ref(null);
const menuIsClicked = ref(false);
const openModal = (trainer) => {
  menuIsClicked.value = !menuIsClicked.value;
  selectedTrainer.value = trainer;
};
const closeModal = () => {
  console.log("Нажали на кнопку закрыть ");
  menuIsClicked.value = false;
};
</script>
<style lang="scss" scoped>
.trainers {
  position: relative;
  &__title-container {
    padding: 120px 0 60px;
    h2 {
      font-size: 50px;

      font-weight: 600;
      @media screen and (max-width: 1024px) {
        text-align: center;
      }
      @media screen and (max-width: 624px) {
        font-size: 30px;
      }
    }
  }
  &__btns {
    display: flex;
    align-items: center;
    gap: 10px;
    button {
      border: none;
      background: none;
      cursor: pointer;
      //user-select: none;
    }
  }
}
.trainer {
  &__img {
    margin-bottom: 20px;
    border-radius: 20px;
    height: 300px;
    transition: 0.2s linear;
    &:hover {
      transform: translateY(10px);
    }
    @media screen and (max-width: 624px) {
    }
  }

  &__name {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  &__desc {
    color: rgba(20, 16, 36, 0.7);
    font-size: 18px;
    line-height: 160%;
  }
  &__btn {
    color: #d52027;
    font-weight: 700;

    background: none;
    border: none;
    cursor: pointer;
    &:hover {
      opacity: 0.85;
    }
  }
}
.trainers__container {
  display: flex;
  white-space: nowrap;
  overflow-x: auto;
  align-items: center;
  gap: 40px;
  padding-bottom: 20px;
  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-track {
    color: red;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #141024;
    border-radius: 40px;
  }
}
.overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Затемнение фона */
  z-index: 3;
}
</style>
