const pomodoroStartBtn = document.querySelector("#pomodoro-start")
const shortBreakStartBtn = document.querySelector("#short-start")
const longBreakStartBtn = document.querySelector("#long-start")
const pomoPauseBtn = document.querySelector('#pomodoro-pause')
const shortPauseBtn = document.querySelector('#short-pause')
const longPauseBtn = document.querySelector('#long-pause')
const pomoCount = document.querySelector('#pomo-count')
const shortCount = document.querySelector('#short-count')
const longCount = document.querySelector('#long-count')
const pomodoroLink = document.querySelector('#pomodoro-link')
const shortBreakLink = document.querySelector('#short-break-link')
const longBreakLink = document.querySelector('#long-break-link')
const pomoWrapper = document.querySelector('.pomodoro')
const shortWrapper = document.querySelector('.short-break')
const longWrapper = document.querySelector('.long-break')
const focusNumber = document.querySelector('#numbers')
const focusNumberInShortBreak = document.querySelector('#numbers-to-short')
const focusNumberInLongBreak = document.querySelector('#numbers-to-long')


pomodoroLink.addEventListener('click', () => {
    pomoWrapper.style.display = 'block'
    shortWrapper.style.display = 'none'
    longWrapper.style.display = 'none'
    pomodoroLink.setAttribute('data', 'active')
    shortBreakLink.removeAttribute('data')
    longBreakLink.removeAttribute('data')
    pomoStartingMinute = 1
    pomoSecon = (pomoStartingMinute * 60) -1
    pomoCount.innerHTML = `${pomoStartingMinute < 10 ? '0' + pomoStartingMinute : pomoStartingMinute} : 00`
    clearInterval(interval)
    pomodoroStartBtn.style.display = 'inline-block'
    pomoPauseBtn.style.display = 'none'
    localStorage.removeItem('pomo-minute')
    localStorage.removeItem('pomo-second')
})

shortBreakLink.addEventListener('click', () => {
    pomoWrapper.style.display = 'none'
    shortWrapper.style.display = 'block'
    longWrapper.style.display = 'none'
    shortBreakLink.setAttribute('data', 'active')
    longBreakLink.removeAttribute('data')
    pomodoroLink.removeAttribute('data')
    shortStartingMinute = 5
    shortSecond = (shortStartingMinute * 60) -1
    shortCount.innerHTML = `${shortStartingMinute < 10 ? '0' + shortStartingMinute : shortStartingMinute} : 00`
    clearInterval(interval)
})

longBreakLink.addEventListener('click', () => {
    pomoWrapper.style.display = 'none'
    shortWrapper.style.display = 'none'
    longWrapper.style.display = 'block'
    longBreakLink.setAttribute('data', 'active')
    pomodoroLink.removeAttribute('data')
    shortBreakLink.removeAttribute('data')
    longStartingMinute = 15
    longSecond = (longStartingMinute * 60) -1
    longCount.innerHTML = `${longStartingMinute < 10 ? '0' + longStartingMinute : longStartingMinute} : 00`
    clearInterval(interval)
})

let pomoStartingMinute = 1
let pomoSecon = (pomoStartingMinute * 60) -1


if(localStorage.getItem('pomo-minute') != '01' && localStorage.getItem('pomo-second') != '00'){
    pomoCount.removeAttribute('data-timer')
    console.log('true');
    pomoCount.innerHTML = `${localStorage.getItem('pomo-minute')} : ${localStorage.getItem('pomo-second')}`
}

else {
    pomoCount.innerHTML = `${pomoStartingMinute < 10 ? '0' + pomoStartingMinute : pomoStartingMinute} : 00`
}

if(localStorage.getItem('pomo-minute') === null) {
    pomoCount.innerHTML = `${pomoStartingMinute < 10 ? '0' + pomoStartingMinute : pomoStartingMinute} : 00`
    console.log(1);
}

console.log(localStorage.getItem('pomo-minute'));

let interval;
let number = 0

// focus numbers
focusNumberInShortBreak.innerHTML = localStorage.getItem('focus-number') ? `#${localStorage.getItem('focus-number')}` : '#0'
focusNumber.innerHTML = localStorage.getItem('focus-number') ? `#${+localStorage.getItem('focus-number') +1}` : '#1'
focusNumberInLongBreak.innerHTML = localStorage.getItem('focus-number') ? `#${localStorage.getItem('focus-number')}` : '#0'

// pomodoro start
pomodoroStartBtn.addEventListener('click', () => {
    pomodoroStartBtn.style.display = 'none'
    pomoPauseBtn.style.display = 'inline-block'
        interval = setInterval(function() {
            pomoCount.removeAttribute('data-timer')
            let minute = Math.floor(pomoSecon / 60)
            let second = pomoSecon % 60
            
            console.log(pomoStartingMinute);
            console.log(pomoSecon);

            second = second < 10 ? '0' + second : second
            minute = minute < 10 ? '0' + minute : minute
            // console.log(second);
    
            localStorage.setItem('pomo-minute', minute)
            localStorage.setItem('pomo-second', second)
        
            if(minute >= 0 && pomoSecon >= 1 ){
                pomoSecon--
            }
            else {
                clearInterval(interval)
            }

            if(minute == 0 && second == 0) {
                pomoWrapper.style.display = 'none'
                shortWrapper.style.display = 'block'
                pomodoroLink.removeAttribute('data')
                shortBreakLink.setAttribute('data', 'active')
                number++
                localStorage.setItem('focus-number', number)
                if(number % 4 == 0) {
                    longWrapper.style.display = 'block'
                    shortWrapper.style.display = 'none'
                    shortBreakLink.removeAttribute('data')
                    longBreakLink.setAttribute('data', 'active')
                }
            }
            pomoCount.innerHTML = `${localStorage.getItem('pomo-minute')} : ${localStorage.getItem('pomo-second')}`
        },
        1000
        )
    }
)

// pomodoro pause
pomoPauseBtn.addEventListener('click', () => {
    clearInterval(interval)
    pomodoroStartBtn.style.display = 'inline-block'
    pomoPauseBtn.style.display = 'none'
})



let shortStartingMinute = 5
let shortSecond = (shortStartingMinute * 60) -1

if(shortCount.getAttribute('data-timer')) {
    shortCount.innerHTML = `${shortStartingMinute < 10 ? '0' + shortStartingMinute : shortStartingMinute} : 00`
}

// short break start
shortBreakStartBtn.addEventListener('click', () => {
    shortBreakStartBtn.style.display = 'none'
    shortPauseBtn.style.display = 'inline-block'
        interval = setInterval(function () {
        shortCount.removeAttribute('data-timer')
        let minute = Math.floor(shortSecond / 60)
        let second = shortSecond % 60
    
        second = second < 10 ? '0' + second : second
        minute = minute < 10 ? '0' + minute : minute
        console.log(second);

        localStorage.setItem('short-minute', minute)
        localStorage.setItem('short-second', second)
    
        if(minute >= 0 && shortSecond >= 1 ){
            shortSecond--
        }
        else {
            clearInterval(a)
        }
        shortCount.innerHTML = `${localStorage.getItem('short-minute')} : ${localStorage.getItem('short-second')}`
    },
    1000
    )
})

// short break pause
shortPauseBtn.addEventListener('click', () => {
    clearInterval(interval)
    shortBreakStartBtn.style.display = 'inline-block'
    shortPauseBtn.style.display = 'none'
})

let longStartingMinute = 15
let longSecond = (longStartingMinute * 60) -1

if(longCount.getAttribute('data-timer')) {
    longCount.innerHTML = `${longStartingMinute < 10 ? '0' + longStartingMinute : longStartingMinute} : 00`
}

// long break start
longBreakStartBtn.addEventListener('click', () => {
    longBreakStartBtn.style.display = 'none'
    longPauseBtn.style.display = 'inline-block'
        interval = setInterval(function () {
        longCount.removeAttribute('data-timer')
        let minute = Math.floor(longSecond / 60)
        let second = longSecond % 60
    
        second = second < 10 ? '0' + second : second
        minute = minute < 10 ? '0' + minute : minute
        console.log(second);

        localStorage.setItem('long-minute', minute)
        localStorage.setItem('long-second', second)
    
        if(minute >= 0 && longSecond >= 1 ){
            longSecond--
        }
        else {
            clearInterval(a)
        }
        longCount.innerHTML = `${localStorage.getItem('long-minute')} : ${localStorage.getItem('long-second')}`
    },
    1000
    )
})

longPauseBtn.addEventListener('click', () => {
    clearInterval(interval)
    longBreakStartBtn.style.display = 'inline-block'
    longPauseBtn.style.display = 'none'
})