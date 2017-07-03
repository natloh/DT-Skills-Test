var feed = new Instafeed({
    get: 'user',
    //userId: '439020677',
    userId: '30962692',
    clientId: '52c40a879ac04a708b80203110d4a5a5',
    target: 'dt-instagram-feed',
    accessToken: '30962692.52c40a8.b3d4e04507a14a4ebe4fccefd6623621',
    resolution: 'low_resolution',
    links: false,
    template: '<div><img src="{{image}}" /></div>'
});
feed.run();


//var pageBlocks = document.getElementsByClassName('page-block');
//pageBlocks[1].style.marginTop = pageBlocks[0].offsetHeight + 'px';



// QUIZ APP
// ========

    var quizApp = document.getElementById('quiz-app');
    var questionsContainer = quizApp.getElementsByClassName('questions-container')[0];
    var q = questionsContainer.getElementsByClassName('question');
    var qCount = q.length;
    var r = questionsContainer.getElementsByClassName('results')[0];
    var aContainer = questionsContainer.getElementsByClassName('answer-container')[0];
    var qBtns = aContainer.getElementsByClassName('button');
    var qNum = 0;

    var a = {
        0:0,
        1:1,
        2:1,
        3:1,
        4:0,
        5:0,
        6:2
    }

    var qs = {
        0: ['helvetica', 'arial', 'gotham', 'futura'],
        1: ['960 X 400', '1136 x 640', '1024 X 768', '1280 X 768'],
        2: ['dissolve', 'multiply', 'color', 'difference'],
        3: ['8', '12', '16', '24'],
        4: ['veer', 'vsco', 'hf&j', 'house industries'],
        5: ['unicorn', 'jackelope', 'pegasus', 'centaur'],
        6: ['clear', 'wunderlist', 'flipboard', 'cheddar']
    }

    var score = 0;

    var initQuiz = function() {
        score = 0;
        r.className = 'results';
        qNum = 0;

        //Reset classes
        for (var i=0; i<qCount - 1; i++) {
            if (i == 0) {
                q[i].className = 'question active';
            } else {
                q[i].className = 'question';
            }
        }
        for (var i=0; i<r.getElementsByClassName('result').length; i++) {
            r.getElementsByClassName('result')[i].style.display = 'none';
        }

        for (var k=0; k<qBtns.length; k++) {
            qBtns[k].className += qBtns[k].className ? ' btn-' + k : 'btn-' + k;

            qBtns[k].addEventListener("click", function(e) {
                e.preventDefault();
                console.log('click');
                aContainer.className += aContainer.className ? ' answered' : 'answered';
                if (checkAnswer(a, qNum, e, this)) {
                    aContainer.getElementsByClassName('correct')[0].className += aContainer.getElementsByClassName('correct')[0].className ? ' answer-result' : 'answer-result';
                    score++;
                    console.log(score);
                } else {
                    aContainer.getElementsByClassName('incorrect')[0].className += aContainer.getElementsByClassName('incorrect')[0].className ? ' answer-result' : 'answer-result';
                }

                setTimeout(function(){
                    q[qNum].className = 'question completed';
                    qNum++;
                    if (qNum < qCount) {
                        //console.log(q[qNum].className);
                        q[qNum].className += q[qNum].className ? ' active' : 'active';
                        changeAnswers(qNum);
                    } else {
                        showResults(score, qCount);
                    }
                }, 1000);
            });
        }

        changeAnswers();
    }

    var changeAnswers = function (qNum) {
        if ( qNum === undefined ) {
            qNum = 0;
        }

        setTimeout(function(){
            aContainer.getElementsByClassName('correct')[0].className = 'correct';
            aContainer.getElementsByClassName('incorrect')[0].className = 'incorrect';
            aContainer.className = 'answer-container';
        }, 500);

        for (var k=0; k<qBtns.length; k++) {
            qBtns[k].innerText = qs[qNum][k];
        }
    }

    var checkAnswer = function(cAnswer, qNum, e, btn) {
        if ( qNum === undefined ) {
            qNum = 0;
        }

        //button has class name of btn-[aAnswer] ? correct : incorrect;
        if (btn.classList.contains('btn-' + cAnswer[qNum])) {
            return true
        } else {
            return false
        }
    }

    var showResults = function(score, qCount) {
        console.log(score);
        
        r.className += r.className ? ' active' : 'active';
        aContainer.className += aContainer.className ? ' done' : 'done';

        // 7 6 , 5 4 3 , 2 1 0 
        if (score > 5 ){
            r.getElementsByClassName('good')[0].style.display = 'block';
        } else if (score > 2 ){
            r.getElementsByClassName('ok')[0].style.display = 'block';
        } else {
            r.getElementsByClassName('bad')[0].style.display = 'block';
        } 

        r.getElementsByClassName('your')[0].innerText = score;
        r.getElementsByClassName('total')[0].innerText = '/' + qCount;

        r.getElementsByClassName('twitter')[0].href = 'https://twitter.com/intent/tweet?original_referer=https://dt.natloh.com&via=dtelepathy&text=I%20got%20a%20' + score + '%2F' + qCount +'%20on%20the%20dt%20design%20test.%20Try%20it%20yourself.&url=http%3A%2F%2Fwww.dtelepathy.com%2F';
        r.getElementsByClassName('facebook')[0].href = 'https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fwww.dtelepathy.com&title=Try+Your+Luck+With+The+dt+Design+Quiz&description=I+got+a+' + score + '%2F' + qCount +'.+Can+you+do+better+than+me?';

        r.getElementsByClassName('retake')[0].addEventListener("click", function(e){
            e.preventDefault();
            initQuiz();
        });
    }

    initQuiz();



// PARALLAX
// =========
    
    // TITLE BLOCK
    var controller = new ScrollMagic.Controller();
    
    var titleBlock = new ScrollMagic.Scene({
            triggerElement: "#page-title-block",
            triggerHook: 'onLeave'
        })
        .setPin("#page-title-block")
        //.addIndicators()
        .addTo(controller);

    //BACKGROUND VIDEO

    var perksBlock = new ScrollMagic.Scene({
            triggerElement: "#perks-vid-sticky",
            triggerHook: 'onLeave'
        })
        .setPin("#perks-vid-sticky")
        //.addIndicators()
        .addTo(controller);
        

    var playVid = new ScrollMagic.Scene({
            triggerElement: "#perks-vid-sticky",
            triggerHook: 'onEnter'
        })
        .addTo(controller)
        //.addIndicators()
        .on("enter", function (e) {
            document.getElementById('hero-video-video').play();
        });
        

// MARQUEE
// =========

    marqueeInit({
        uniqueid: 'examples-marquee',
        style: {
            'padding': '30px',
            //'width': '100%',
            //'border': '1px solid #CC3300'
        },
        inc: 5, //speed - pixel increment for each iteration of this marquee's movement
        mouse: 'cursor driven', //mouseover behavior ('pause' 'cursor driven' or false)
        moveatleast: 2,
        neutral: 150,
        persist: true,
        savedirection: true,
    });


