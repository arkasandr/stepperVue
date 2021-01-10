// вы можете как угодно изменять программу и код
// добавлять любые переменные и модели
// ваша задача реализовать так, как показано на видео, чтобы оно работало

const App = {
    data() {
        return {
            activeIndex: 0, // то, что позволяет определить текущий активный шаг
            finishIndex: 0,
            steps: [
                {
                    title: 'Основы',
                    text: 'В блоке вы познакомитесь со всеми основами Vue.js на практике. На протяжении блока мы напишем реактивное приложение, в процессе разработки которого разберем вся базу фреймворка.'
                },
                {
                    title: 'Компоненты',
                    text: 'Один из самых важных блоков в курсе, где вы узнаете все о компонентах. В блоке мы напишем 2 разных приложения и создадим более 5 различных UI компонентов как в реальной разработке. Блок расскажет про абсолютно все составляющие, которые есть в компонентах: взаимодействие, slots, асинхронные и динамические компоненты и тонна примеров.'
                },
                {
                    title: 'Роутер',
                    text: 'В данном блоке вы узнаете все о том, как работает мультиязычность во Vue. Мы создадим миниклон Gmail в данном блоке, где вы на практике увидите как работать с динамическим роутером.'
                },
                {
                    title: 'Vuex',
                    text: 'В блоке вы узнаете абсолютно все про Vuex. Вы узнаете как работать с данными, какие есть лучшие практики по их программированию и структурированию. Все на практике.'
                },
                {
                    title: 'Composition',
                    text: 'Одним из наиболее важных обновлений в Vue 3 является появление альтернативного синтаксиса Composition API. В этом блоке вы узнаете все, чтобы полностью пользоваться данными синтаксисом на практических примерах. Помимо этого вы узнаете как работать совместно с Vue Router и Vuex.'
                },
            ]
        }
    },
    methods: {
        // когда нажимаем кнопку назад
        prev() {
            this.activeIndex--
            console.log('Шаг: ' + this.activeIndex)

        },

        // начать заново
        reset() {
            this.activeIndex = 0
        },

        // кнопка вперед или закончить
        nextOrFinish() {
            if (this.activeIndex < 4) {
                this.activeIndex++
                console.log('Шаг: ' + this.activeIndex)
            } else {
                this.finishIndex = 1
                console.log('Закончить: ' + this.finishIndex)
            }
        },

        // когда нажимаем на определенный шаг
        setActive(idx) {

        }

    },
    computed: {

        // тут стоит определить несколько свойств:
        // 1. текущий выбранный шаг
        isActiveStep() {
            return this.activeIndex
        },

        // 2. выключена ли кнопка назад
        isPreviousButtonTurnOf() {
            this.finishIndex = 0
            return this.activeIndex < 1
        },

        // 3. находимся ли мы на последнем шаге
        isLastStepActive() {
            console.log('isLastStepActive: ' + this.finishIndex)
            return this.finishIndex !== 0
        }

    }
}

Vue.createApp(App).mount('#app')