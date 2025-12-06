function changeValues () {
    $('.mission').on('click', function () {
        $('.visionBox').hide()
        $('.missionBox').show()
        $('.valueBox').hide()
        console.log('Hello')
    })
    $('.vision').on('click', function () {
        $('.visionBox').show()
        $('.missionBox').hide()
        $('.valueBox').hide()
    })
    $('.values').on('click', function () {
        $('.visionBox').hide()
        $('.missionBox').hide()
        $('.valueBox').show()
    })
}

changeValues()

barsNum = 1;
