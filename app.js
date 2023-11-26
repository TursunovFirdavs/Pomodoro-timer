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
const link = document.querySelector('#link')
const pomoWrapper = document.querySelector('.pomodoro')
const shortWrapper = document.querySelector('.short-break')
const longWrapper = document.querySelector('.long-break')
const focusNumber = document.querySelector('#numbers')
const focusNumberInShortBreak = document.querySelector('#numbers-to-short')
const focusNumberInLongBreak = document.querySelector('#numbers-to-long')

pomodoroLink.addEventListener('click', () => {
    document.querySelector('body').style.backgroundColor = localStorage.getItem('pomo-theme') ? localStorage.getItem('pomo-theme') : 'rgb(186,73,73)'
    pomodoroStartBtn.style.color = localStorage.getItem('pomo-theme') ? localStorage.getItem('pomo-theme') : 'rgb(186,73,73)'
    pomoPauseBtn.style.color = localStorage.getItem('pomo-theme') ? localStorage.getItem('pomo-theme') : 'rgb(186,73,73)'
    pomoWrapper.style.display = 'block'
    shortWrapper.style.display = 'none'
    longWrapper.style.display = 'none'
    localStorage.setItem('active-link', 'pomodoro')
    pomoStartingMinute = +localStorage.getItem('changed-pomo-str') > 0 ? +localStorage.getItem('changed-pomo-str') : 25
    pomoSecon = (pomoStartingMinute * 60) -1
    pomoCount.innerHTML = `${pomoStartingMinute < 10 ? '0' + pomoStartingMinute : pomoStartingMinute} : 00`
    clearInterval(interval)
    pomodoroStartBtn.style.display = 'inline-block'
    pomoPauseBtn.style.display = 'none'
    localStorage.removeItem('pomo-minute')
    localStorage.removeItem('pomo-second')
    localStorage.removeItem('short-minute')
    localStorage.removeItem('overall-short-second')
    localStorage.removeItem('overall-long-second')
    localStorage.removeItem('overall-pomo-second')
    localStorage.removeItem('pomo-minute')
    localStorage.removeItem('pomo-second')
    if(localStorage.getItem('active-link') === 'pomodoro'){
        pomodoroLink.setAttribute('data', 'active')
        shortBreakLink.removeAttribute('data')
        longBreakLink.removeAttribute('data')
    }
})

shortBreakLink.addEventListener('click', () => {
    document.querySelector('body').style.backgroundColor = localStorage.getItem('short-theme') ? localStorage.getItem('short-theme') : 'rgb(57,112,151)'
    shortBreakStartBtn.style.color = localStorage.getItem('short-theme') ? localStorage.getItem('short-theme') : 'rgb(57,112,151)'
    shortPauseBtn.style.color = localStorage.getItem('short-theme') ? localStorage.getItem('short-theme') : 'rgb(57,112,151)'
    shortBreakStartBtn.style.display = 'inline-block'
    shortPauseBtn.style.display = 'none'
    pomoWrapper.style.display = 'none'
    shortWrapper.style.display = 'block'
    longWrapper.style.display = 'none'
    localStorage.setItem('active-link', 'short-break')
    localStorage.removeItem('overall-short-second')
    localStorage.removeItem('short-minute')
    localStorage.removeItem('short-second')
    shortStartingMinute = +localStorage.getItem('changed-short-str') > 0 ? +localStorage.getItem('changed-short-str') : 5
    shortSecond = (shortStartingMinute * 60) -1
    shortCount.innerHTML = `${shortStartingMinute < 10 ? '0' + shortStartingMinute : shortStartingMinute} : 00`
    clearInterval(interval)
    if(localStorage.getItem('active-link') === 'short-break'){
        pomodoroLink.removeAttribute('data')
        shortBreakLink.setAttribute('data', 'active')
        longBreakLink.removeAttribute('data')
    }
})

longBreakLink.addEventListener('click', () => {
    document.querySelector('body').style.backgroundColor = localStorage.getItem('long-theme') ? localStorage.getItem('long-theme') : 'rgb(125,83,162)'
    longBreakStartBtn.style.color = localStorage.getItem('long-theme') ? localStorage.getItem('long-theme') : 'rgb(125,83,162)'
    longPauseBtn.style.color = localStorage.getItem('long-theme') ? localStorage.getItem('long-theme') : 'rgb(125,83,162)'
    longBreakStartBtn.style.display = 'inline-block'
    longPauseBtn.style.display = 'none'
    pomoWrapper.style.display = 'none'
    shortWrapper.style.display = 'none'
    longWrapper.style.display = 'block'
    localStorage.removeItem('overall-long-second')
    localStorage.removeItem('long-minute')
    localStorage.removeItem('long-second')
    localStorage.setItem('active-link', 'long-break')
        longStartingMinute = +localStorage.getItem('changed-long-str') > 0 ? +localStorage.getItem('changed-long-str') : 15
        longSecond = (longStartingMinute * 60) -1
        longCount.innerHTML = `${longStartingMinute < 10 ? '0' + longStartingMinute : longStartingMinute} : 00`
        clearInterval(interval)
    if(localStorage.getItem('active-link') === 'long-break'){
        pomodoroLink.removeAttribute('data')
        shortBreakLink.removeAttribute('data')
        longBreakLink.setAttribute('data', 'active')
    }
})

if(localStorage.getItem('active-link') === 'pomodoro'){
    pomodoroLink.setAttribute('data', 'active')
    pomoWrapper.style.display = 'block'
    shortWrapper.style.display = 'none'
    longWrapper.style.display = 'none'
    document.querySelector('body').style.backgroundColor = localStorage.getItem('pomo-theme') ? localStorage.getItem('pomo-theme') : 'rgb(186,73,73)'
    pomodoroStartBtn.style.color = localStorage.getItem('pomo-theme') ? localStorage.getItem('pomo-theme') : 'rgb(186,73,73)'
    pomoPauseBtn.style.color = localStorage.getItem('pomo-theme') ? localStorage.getItem('pomo-theme') : 'rgb(186,73,73)'
}
    
else if(localStorage.getItem('active-link') === 'short-break'){
    shortBreakLink.setAttribute('data', 'active')
    shortWrapper.style.display = 'block'
    pomoWrapper.style.display = 'none'
    longWrapper.style.display = 'none'
    document.querySelector('body').style.backgroundColor = localStorage.getItem('short-theme') ? localStorage.getItem('short-theme') : 'rgb(57,112,151)'
    shortBreakStartBtn.style.color = localStorage.getItem('short-theme') ? localStorage.getItem('short-theme') : 'rgb(57,112,151)'
    shortPauseBtn.style.color = localStorage.getItem('short-theme') ? localStorage.getItem('short-theme') : 'rgb(57,112,151)'
}
else if(localStorage.getItem('active-link') === 'long-break'){
    longBreakLink.setAttribute('data', 'active')
    longWrapper.style.display = 'block'
    pomoWrapper.style.display = 'none'
    shortWrapper.style.display = 'none'
    document.querySelector('body').style.backgroundColor = localStorage.getItem('long-theme') ? localStorage.getItem('long-theme') : 'rgb(125,83,162)'
    longBreakStartBtn.style.color = localStorage.getItem('long-theme') ? localStorage.getItem('long-theme') : 'rgb(125,83,162)'
    longPauseBtn.style.color = localStorage.getItem('long-theme') ? localStorage.getItem('long-theme') : 'rgb(125,83,162)'
}
else {
    pomodoroLink.setAttribute('data', 'active')
    pomoWrapper.style.display = 'block'
    shortWrapper.style.display = 'none'
    longWrapper.style.display = 'none'
    // document.querySelector('body').style.backgroundColor = 'rgb(186,73,73)'
    document.querySelector('body').style.transition = 'none'
    pomodoroStartBtn.style.color = localStorage.getItem('pomo-theme') ? localStorage.getItem('pomo-theme') : 'rgb(186,73,73)'
    pomoPauseBtn.style.color = localStorage.getItem('pomo-theme') ? localStorage.getItem('pomo-theme') : 'rgb(186,73,73)'
}

let pomoStartingMinute = +localStorage.getItem('changed-pomo-str') > 0 ? +localStorage.getItem('changed-pomo-str') : 25
let pomoSecon = localStorage.getItem('overall-pomo-second') ? +localStorage.getItem('overall-pomo-second')-1 : (pomoStartingMinute * 60) -1

if(localStorage.getItem('pomo-minute')  && localStorage.getItem('pomo-second') ){
    pomoCount.removeAttribute('data-timer')
    console.log('true');
    pomoCount.innerHTML = `${localStorage.getItem('pomo-minute')} : ${localStorage.getItem('pomo-second')}`
}

else {
    pomoCount.innerHTML = `${pomoStartingMinute < 10 ? '0' + pomoStartingMinute : pomoStartingMinute} : 00`
}

if(localStorage.getItem('pomo-minute') === null) {
    pomoCount.innerHTML = `${pomoStartingMinute < 10 ? '0' + pomoStartingMinute : pomoStartingMinute} : 00`
}

console.log(localStorage.getItem('pomo-minute'));

let interval;
let number = 0
if(localStorage.getItem('focus-number')){
    number = localStorage.getItem('focus-number')
}
else{
    number = 0
}

// focus numbers
focusNumberInShortBreak.innerHTML = localStorage.getItem('focus-number') ? `#${localStorage.getItem('focus-number')}` : '#0'
focusNumberInLongBreak.innerHTML = localStorage.getItem('focus-number') ? `#${localStorage.getItem('focus-number')}` : '#0'
focusNumber.innerHTML = localStorage.getItem('focus-number') ? `#${+localStorage.getItem('focus-number') +1}` : '#1'
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
            
            localStorage.setItem('overall-pomo-second', pomoSecon)
            localStorage.setItem('pomo-minute', minute)
            localStorage.setItem('pomo-second', second)
        
            if(minute >= 0 && pomoSecon >= 1 ){
                pomoSecon--
            }
            else {
                clearInterval(interval)
            }

            if(minute == 0 && second == 0) {
                number++
                pomoWrapper.style.display = 'none'
                shortWrapper.style.display = 'block'
                document.querySelector('body').style.backgroundColor = localStorage.getItem('short-theme') ? localStorage.getItem('short-theme') : 'rgb(57,112,151)'
                shortBreakStartBtn.style.color = 'rgb(125,83,162)'
                shortPauseBtn.style.color = 'rgb(125,83,162)'
                shortStartingMinute = +localStorage.getItem('changed-short-str') > 0 ? +localStorage.getItem('changed-short-str') : 5
                shortSecond = (shortStartingMinute * 60) -1
                shortCount.innerHTML = `${shortStartingMinute < 10 ? '0' + shortStartingMinute : shortStartingMinute} : 00`
                localStorage.setItem('active-link', 'short-break')
                pomodoroLink.removeAttribute('data')
                shortBreakLink.setAttribute('data', 'active')
                localStorage.setItem('focus-number', number)
                shortPauseBtn.style.display = 'none'
                shortBreakStartBtn.style.display = 'inline-block'
                if(number % 4 == 0) {
                    longWrapper.style.display = 'block'
                    shortWrapper.style.display = 'none'
                    document.querySelector('body').style.backgroundColor = localStorage.getItem('long-theme') ? localStorage.getItem('long-theme') : 'rgb(125,83,162)'
                    longBreakStartBtn.style.color = 'rgb(125,83,162)'
                    longPauseBtn.style.color = 'rgb(125,83,162)'
                    shortBreakLink.removeAttribute('data')
                    longBreakLink.setAttribute('data', 'active')
                    localStorage.setItem('active-link', 'long-break')
                    longPauseBtn.style.display = 'none'
                    longBreakStartBtn.style.display = 'inline-block'
                    longStartingMinute = +localStorage.getItem('changed-long-str') > 0 ? +localStorage.getItem('changed-long-str') : 15
                    longSecond = (longStartingMinute * 60) -1
                    longCount.innerHTML = `${longStartingMinute < 10 ? '0' + longStartingMinute : longStartingMinute} : 00`
                }
            }
            focusNumberInShortBreak.innerHTML = localStorage.getItem('focus-number') ? `#${localStorage.getItem('focus-number')}` : '#0'
            focusNumberInLongBreak.innerHTML = localStorage.getItem('focus-number') ? `#${localStorage.getItem('focus-number')}` : '#0'
            focusNumber.innerHTML = localStorage.getItem('focus-number') ? `#${+localStorage.getItem('focus-number') +1}` : '#1'
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



let shortStartingMinute = +localStorage.getItem('changed-short-str') > 0 ? +localStorage.getItem('changed-short-str') : 5
let shortSecond = localStorage.getItem('overall-short-second') ? +localStorage.getItem('overall-short-second')-1 : (shortStartingMinute * 60) -1


if(localStorage.getItem('short-minute')  && localStorage.getItem('short-second') ){
    shortCount.removeAttribute('data-timer')
    console.log('true');
    shortCount.innerHTML = `${localStorage.getItem('short-minute')} : ${localStorage.getItem('short-second')}`
}

else {
    shortCount.innerHTML = `${shortStartingMinute < 10 ? '0' + shortStartingMinute : shortStartingMinute} : 00`
}

if(localStorage.getItem('pomo-minute') === null) {
    pomoCount.innerHTML = `${pomoStartingMinute < 10 ? '0' + pomoStartingMinute : pomoStartingMinute} : 00`
}

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

        localStorage.setItem('overall-short-second', shortSecond)
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

let longStartingMinute = +localStorage.getItem('changed-long-str') > 0 ? +localStorage.getItem('changed-long-str') : 15
let longSecond = localStorage.getItem('overall-long-second') ? +localStorage.getItem('overall-long-second')-1 : (longStartingMinute * 60) -1

if(localStorage.getItem('long-minute')  && localStorage.getItem('long-second') ){
    longCount.removeAttribute('data-timer')
    console.log('true');
    longCount.innerHTML = `${localStorage.getItem('long-minute')} : ${localStorage.getItem('long-second')}`
}

else {
    longCount.innerHTML = `${longStartingMinute < 10 ? '0' + longStartingMinute : longStartingMinute} : 00`
}

if(localStorage.getItem('long-minute') === null) {
    longCount.innerHTML = `${longStartingMinute < 10 ? '0' + longStartingMinute : longStartingMinute} : 00`
}

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

        localStorage.setItem('overall-long-second', longSecond)
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




// settings
const settingsBtn = document.querySelector('#settings')
const settingContainer = document.querySelector('.setting-container')
const closeIcon = document.querySelector('#close')
const settingBG = document.querySelector('.settings-bg')
const form = document.querySelector('form')
const pomoInput = document.querySelector('#pomo-input')
const shortInput = document.querySelector('#short-input')
const longInput = document.querySelector('#long-input')
const settingThemeWrapper = document.querySelector('.settings_themes')
const allThemes = document.querySelector('.all-thems')
const pomoTheme = document.querySelector('#pomo-theme')
const shortTheme = document.querySelector('#short-theme')
const longTheme = document.querySelector('#long-theme')
// colors
const orchidColor = document.querySelector('.orchid')
const chocoColor = document.querySelector('.choco')
const redColor = document.querySelector('.red')
const blueColor = document.querySelector('.blue')
const darkBluedColor = document.querySelector('.dark-blue')
const darkGreenColor = document.querySelector('.dark-green')
const greenColor = document.querySelector('.green')

settingsBtn.addEventListener('click', () => {
    settingContainer.style.display = 'block'
})

closeIcon.addEventListener('click', () => {
    settingContainer.style.display ='none'
})

settingBG.addEventListener('click', () => {
    settingContainer.style.display ='none'
})

form.addEventListener('submit', (e) => {
    e.preventDefault()

    // seting new timers
    localStorage.setItem('changed-pomo-str', pomoInput.value)
    localStorage.setItem('changed-short-str', shortInput.value)
    localStorage.setItem('changed-long-str', longInput.value)
    localStorage.removeItem('overall-pomo-second')
    localStorage.removeItem('overall-short-second')
    localStorage.removeItem('overall-long-second')
    clearInterval(interval)
    pomoPauseBtn.style.display = 'none'
    pomodoroStartBtn.style.display = 'inline-block'
    pomoStartingMinute = +localStorage.getItem('changed-pomo-str') > 0 ? +localStorage.getItem('changed-pomo-str') : 10
    pomoSecon = localStorage.getItem('overall-pomo-second') ? +localStorage.getItem('overall-pomo-second')-1 : (pomoStartingMinute * 60) -1
    pomoCount.innerHTML = `${pomoStartingMinute < 10 ? '0' + pomoStartingMinute : pomoStartingMinute} : 00`

    shortPauseBtn.style.display = 'none'
    shortBreakStartBtn.style.display = 'inline-block'
    shortStartingMinute = +localStorage.getItem('changed-short-str') > 0 ? +localStorage.getItem('changed-short-str') : 5
    shortSecond = localStorage.getItem('overall-short-second') ? +localStorage.getItem('overall-short-second')-1 : (shortStartingMinute * 60) -1
    shortCount.innerHTML = `${shortStartingMinute < 10 ? '0' + shortStartingMinute : shortStartingMinute} : 00`
    
    console.log(allThemes.getAttribute('data-theme'));
    longPauseBtn.style.display = 'none'
    longBreakStartBtn.style.display = 'inline-block'
    longStartingMinute = +localStorage.getItem('changed-long-str') > 0 ? +localStorage.getItem('changed-long-str') : 10
    longSecond = localStorage.getItem('overall-long-second') ? +localStorage.getItem('overall-long-second')-1 : (longStartingMinute * 60) -1
    longCount.innerHTML = `${longStartingMinute < 10 ? '0' + longStartingMinute : longStartingMinute} : 00`

    settingContainer.style.display = 'none'

    // to change without refresh
    if(localStorage.getItem('active-link') === 'pomodoro' && localStorage.getItem('pomo-theme')) {
        document.querySelector('body').style.backgroundColor = localStorage.getItem('pomo-theme') ? localStorage.getItem('pomo-theme') : 'rgb(186,73,73)'
        pomodoroStartBtn.style.color = localStorage.getItem('pomo-theme') ? localStorage.getItem('pomo-theme') : 'rgb(186,73,73)'
        pomoPauseBtn.style.color = localStorage.getItem('pomo-theme') ? localStorage.getItem('pomo-theme') : 'rgb(186,73,73)'    
    }
    if(localStorage.getItem('active-link') === 'short-break' && localStorage.getItem('short-theme')) {
        document.querySelector('body').style.backgroundColor = localStorage.getItem('short-theme') ? localStorage.getItem('short-theme') : 'rgb(57,112,151)'
        shortBreakStartBtn.style.color = localStorage.getItem('short-theme') ? localStorage.getItem('short-theme') : 'rgb(57,112,151)'
        shortPauseBtn.style.color = localStorage.getItem('short-theme') ? localStorage.getItem('short-theme') : 'rgb(57,112,151)'    
    }
    if(localStorage.getItem('active-link') === 'long-break' && localStorage.getItem('long-theme')) {
        document.querySelector('body').style.backgroundColor = localStorage.getItem('long-theme') ? localStorage.getItem('long-theme') : 'rgb(125,83,162)'
        longBreakStartBtn.style.color = localStorage.getItem('long-theme') ? localStorage.getItem('long-theme') : 'rgb(125,83,162)'
        longPauseBtn.style.color = localStorage.getItem('long-theme') ? localStorage.getItem('long-theme') : 'rgb(125,83,162)'    
    }
})

pomoTheme.addEventListener('click', () => {
    settingThemeWrapper.style.display = 'none'
    allThemes.style.display = 'flex'
    allThemes.setAttribute('data-theme', 'pomo')
})

shortTheme.addEventListener('click', () => {
    settingThemeWrapper.style.display = 'none'
    allThemes.style.display = 'flex'
    allThemes.setAttribute('data-theme', 'short')
})

longTheme.addEventListener('click', () => {
    settingThemeWrapper.style.display = 'none'
    allThemes.style.display = 'flex'
    allThemes.setAttribute('data-theme', 'long')
})


 
orchidColor.addEventListener('click', () => {
    if(allThemes.getAttribute('data-theme') === 'pomo'){
        localStorage.setItem('pomo-theme', 'rgb(125,83,162)')
    }
    if(allThemes.getAttribute('data-theme') === 'short'){
        localStorage.setItem('short-theme', 'rgb(125,83,162)')
    }
    if(allThemes.getAttribute('data-theme') === 'long'){
        localStorage.setItem('long-theme', 'rgb(125,83,162)')
    }
    settingThemeWrapper.style.display = 'flex'
    allThemes.style.display = 'none'
})

chocoColor.addEventListener('click', () => {
    if(allThemes.getAttribute('data-theme') === 'pomo'){
        localStorage.setItem('pomo-theme', 'chocolate')
    }
    if(allThemes.getAttribute('data-theme') === 'short'){
        localStorage.setItem('short-theme', 'chocolate')
    }
    if(allThemes.getAttribute('data-theme') === 'long'){
        localStorage.setItem('long-theme', 'chocolate')
    }
    settingThemeWrapper.style.display = 'flex'
    allThemes.style.display = 'none'
})

redColor.addEventListener('click', () => {
    if(allThemes.getAttribute('data-theme') === 'pomo'){
        localStorage.setItem('pomo-theme', 'rgb(186,73,73)')
    }
    if(allThemes.getAttribute('data-theme') === 'short'){
        localStorage.setItem('short-theme', 'rgb(186,73,73)')
    }
    if(allThemes.getAttribute('data-theme') === 'long'){
        localStorage.setItem('long-theme', 'rgb(186,73,73)')
    }
    settingThemeWrapper.style.display = 'flex'
    allThemes.style.display = 'none'
})

blueColor.addEventListener('click', () => {
    if(allThemes.getAttribute('data-theme') === 'pomo'){
        localStorage.setItem('pomo-theme', 'rgb(57,112,151)')
    }
    if(allThemes.getAttribute('data-theme') === 'short'){
        localStorage.setItem('short-theme', 'rgb(57,112,151)')
    }
    if(allThemes.getAttribute('data-theme') === 'long'){
        localStorage.setItem('long-theme', 'rgb(57,112,151)')
    }
    settingThemeWrapper.style.display = 'flex'
    allThemes.style.display = 'none'
})

darkBluedColor.addEventListener('click', () => {
    if(allThemes.getAttribute('data-theme') === 'pomo'){
        localStorage.setItem('pomo-theme', 'navy')
    }
    if(allThemes.getAttribute('data-theme') === 'short'){
        localStorage.setItem('short-theme', 'navy')
    }
    if(allThemes.getAttribute('data-theme') === 'long'){
        localStorage.setItem('long-theme', 'navy')
    }
    settingThemeWrapper.style.display = 'flex'
    allThemes.style.display = 'none'
})

darkGreenColor.addEventListener('click', () => {
    if(allThemes.getAttribute('data-theme') === 'pomo'){
        localStorage.setItem('pomo-theme', 'darkgreen')
    }
    if(allThemes.getAttribute('data-theme') === 'short'){
        localStorage.setItem('short-theme', 'darkgreen')
    }
    if(allThemes.getAttribute('data-theme') === 'long'){
        localStorage.setItem('long-theme', 'darkgreen')
    }
    settingThemeWrapper.style.display = 'flex'
    allThemes.style.display = 'none'
})

greenColor.addEventListener('click', () => {
    if(allThemes.getAttribute('data-theme') === 'pomo'){
        localStorage.setItem('pomo-theme', 'seagreen')
    }
    if(allThemes.getAttribute('data-theme') === 'short'){
        localStorage.setItem('short-theme', 'seagreen')
    }
    if(allThemes.getAttribute('data-theme') === 'long'){
        localStorage.setItem('long-theme', 'seagreen')
    }
    settingThemeWrapper.style.display = 'flex'
    allThemes.style.display = 'none'
})

