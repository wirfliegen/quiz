/* global $ */
var memberPlacement;
var imgSrc;
var totalScore;
$(".question").hide();
function displayResult(){
    if(totalScore >= 15){
        return $(".result").html("<h2>Congratulations! You got " + memberPlacement + "!</h2>" + "<img src=" + imgSrc + ">");
    }else{
        return $(".result").html("<h2>You didn't answer every question. Go back and try again.</h2>");
    }
}
function placement(){
    if (totalScore > 15 && totalScore <= 23){
        memberPlacement = "Kanan";
        imgSrc="Kanan.png";
    }else if(totalScore > 23 && totalScore <= 30){
        memberPlacement = "Dia";
        imgSrc="Dia.png";
    }else if(totalScore > 30 && totalScore <= 36){
        memberPlacement = "Hanamaru";
        imgSrc="Hanamaru.png";
    }else if(totalScore > 36 && totalScore <= 42){
        memberPlacement = "Mari";
        imgSrc="Mari.png";
    }else if(totalScore > 42 && totalScore <= 48){
        memberPlacement = "Yoshiko";
        imgSrc="Yoshiko.png";
    }else if(totalScore > 48 && totalScore <= 55){
        memberPlacement = "Riko";
        imgSrc="Riko.png";
    }else if(totalScore > 55 && totalScore <= 61){
        memberPlacement = "Ruby";
        imgSrc="Ruby.png";
    }else if(totalScore > 61 && totalScore <= 67){
        memberPlacement = "You";
        imgSrc="You.png";
    }else if(totalScore > 67 && totalScore <= 74){
        memberPlacement = "Chika";
        imgSrc="Chika.png";
    }
}
function description(){
    if(memberPlacement === "Kanan"){
        return $(".result").append("<h4>You're Kanan! You never lose your cool, even in tough situations. You're very supportive and put your friends' needs above your own.</4>");
    }else if(memberPlacement === "Dia"){
        return $(".result").append("<h4>You're Dia! You're very refined, polite, and a bit of a perfectionist.</h4>");
    }else if(memberPlacement === "Hanamaru"){
        return $(".result").append("<h4>You're Hanamaru! You're hardworking, an avid reader, and a bit out of the know when it comes to technology.</h4>");
    }else if(memberPlacement === "Mari"){
        return $(".result").append("<h4>You're Mari! You're very cheerful and you love making jokes!</h4>");
    }else if(memberPlacement === "Yoshiko"){
        return $(".result").append("<h4>You're Yoshiko! You're bright, self-assured, smart, and thoughtful!</h4>");
    }else if(memberPlacement === "Riko"){
        return $(".result").append("<h4>You're Riko! You're reserved and modest, but you can also crack under pressure.</h4>");
    }else if(memberPlacement === "Ruby"){
        return $(".result").append("<h4>You're Ruby! You're very shy and timid, but your friends support you no matter what.</h4>");
    }else if(memberPlacement === "You"){
        return $(".result").append("<h4>You're You! You're energetic, positive, and charismatic!</h4>");
    }else if(memberPlacement === "Chika"){
        return $(".result").append("<h4>You're Chika! You're very sociable and determined, but you also have a sensitive side.</h4>");
    }
}

    $("button").click(function() {
        memberPlacement = "TBD";
        imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = Number($("input[name='question1']:checked").val());
        $("#color").text(q1Result);
        var q2Result = Number($("input[name='question2']:checked").val());
        $("#song").text(q2Result);
        var q3Result = Number($("input[name='question3']:checked").val());
        $("#food").text(q3Result);
        var q4Result = Number($("input[name='question4']:checked").val());
        $("#sign").text(q4Result);
        var q5Result = Number($("input[name='question5']:checked").val());
        $("#sms").text(q5Result);
        var q6Result = Number($("input[name='question6']:checked").val());
        $("#subgroup").text(q6Result);
        var q7Result = Number($("input[name='question7']:checked").val());
        $("#season").text(q7Result);
        var q8Result = Number($("input[name='question8']:checked").val());
        $("#obnoxiousHater").text(q8Result);
        var q9Result = Number($("input[name='question9']:checked").val());
        $("#voice").text(q9Result);
        totalScore = q1Result + q2Result + q3Result + q4Result + q5Result + q6Result + q7Result + q8Result + q9Result;
        placement();
        displayResult();
        description();
    });