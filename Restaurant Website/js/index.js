// words = ['WELCOME TO JUNO', 'JOIN THE RESTAURANT', 'JUNO IS A RESTAURANT', 'JUNO IS GOOD']
//         txt = ['Helakljkashfnasjkdfnkasdnfjknasjkfnksdfnckasndkfnsdkfnsdjkfnajksdhufhejknafkjndufheuijnkjeafnuisdhfkejanafhnkd', 'jksakjdhasjkdfjahkjfashdfihnasdjkdfnjkahfksdjfhjksdhafjksdhkjfsdfh', 'sdjkafhsjkdjkfnasdkfhksdhjfbasdjkhfjksfhkasdhfjkhasdkfhsdhfkjsdhjkfjksdbcfbaskbfsdjknccndmc', 'ajksbdfjashjkfhsdjkafhjksdhkjfhkasdksdfajhfjksdahfjksdhk', 'kadbkfjsdhfnsdjkfhjksdhafjksdkfnksdmknfjsdkfjdsfsdd', 'dsa,fnsdkfnsdm,fnmsdjbfjsdbafskbuhbasdfsdjhfsdjhfsdjnmf']
//         num = -1;
//         para_num = -1;
//         function changeName() {
//             num += 1;
//             if (num <= 3){
//                 $('#mainName').html(words[num])
//             } else {
//                 num = -1
//             }
//             setTimeout(changeName, 5000)
//         }
        // function changeTxt(){
        //     para_num += 1;
        //     if (para_num <= 6){
        //         $('#paragraph-one').html(txt[num]);
        //     } else {
        //         num = -1;
        //     }
        //     setTimeout(changeTxt, 3000)
        // }
        // changeTxt()

        // changeName()

newMan = " WE BUILD, BRAND & MANAGE RESTAURANTS THAT WIN";
runAddNum = 0;
runAddValue = ""
function runAddName() {
    runAddNum += 1;
    if (runAddNum <= newMan.length - 1){
        runAddValue += newMan[runAddNum]
        console.log($('#mainName').html(runAddValue));
    }
        setTimeout(runAddName, 100)
    }

    runAddName()

function rightArrow(){
    carouselLength = 0
    carouselMargin = 0;
    $('#rightArrow').on('click', function() {
            carouselMargin = carouselMargin - 260
            $('.testInner').css('margin-left', carouselMargin)
            carouselLength += 1;
            console.log(carouselLength)
            if (carouselLength == 8) {
                carouselMargin = 0;
                carouselLength = 0;
            }
    })
    $('#leftArrow').on('click', function() {
            carouselMargin = carouselMargin + 260
            $('.testInner').css('margin-left', carouselMargin)
            carouselLength -= 1;
            console.log(carouselLength)
            if (carouselLength == 0 || carouselLength == -1) {
                carouselMargin = -2020;
                carouselLength = 8;
            }
    })

}

rightArrow()











// changeValues 




// BARS
