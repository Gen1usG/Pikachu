const string = `/* css reset */
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}
body{
    min-height: 100vh; 
}

.skin{
    bottom:0;
    background-color: #ffe600;
    position: relative;
    min-height: 55vh;
}

.nose{
    border-top:black 15px solid;
    border-right:transparent 20px solid;
    border-bottom: 15px solid transparent;
    border-left: 20px solid transparent;
    border-radius: 100%;
    width: 0px;
    height: 0px;
    position:relative;
    left:50%;
    top:95px;
    margin-left:-20px;
    z-index: 20;
}
.nose:hover{
    animation: noseWave infinite 200ms;
}

@keyframes noseWave{
    0%{
        transform: rotate(0deg);
    }
    33%{
        transform: rotate(-5deg);
    }
    66%{
        transform: rotate(5deg);
    }
    100%{
        transform: rotate(0deg);
    }
}

.eyes{
    border:3px solid black;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #2e2e2e;
    position:absolute;
    left:50%;
    top:60px;
    transform: translateX(-30px)
}

.leftEye{
    margin-left:150px;
}

.rightEye{
    margin-left:-150px;
}

.eyes::before{
    display: block;
    content:'';
    border:3px solid #000;
    width: 25px;
    height: 25px;
    background-color: #fff;
    border-radius: 50%;
    position:absolute;
    left:6px;
}

.lips{
    border:3px solid black;
    width: 100px;
    height: 30px;
    border-right:none;
    border-bottom:none;
    border-top-left-radius: 50px 30px;
    position: absolute;
    left: 50%;
    top:130px;
    background-color: #ffe600;
    z-index:2;
}
.leftLips{
    transform-origin: right top;
    transform: translateX(-101px) rotate(-160deg)
}
.rightLips{
    transform-origin: right top;
    transform: translateX(-99px) rotate(160deg) rotateY(180deg)
}

.mouth{
    width: 200px;
    height: 200px;
    position: absolute;
    left:50%;
    top:127px;
    transform: translateX(-100px);
    overflow: hidden;
}
.innerMouth{
    width: 100%;
    height: 1000px;
    border:3px solid black;
    background-color: #9b000a;
    border-radius: 50%;
    position: absolute;
    top:-811px;
    overflow: hidden;
}
.touth{
    width: 300px;
    height: 500px;
    margin: 0 auto;
    z-index:1;
    border-radius: 50%;
    position: absolute;
    top:850px;
    left:50%;
    transform: translateX(-150px);
    background-color: #ff485f;
}

.face{
    width: 74px;
    height:74px;
    border:3px solid black;
    border-radius: 50%;
    background-color: #ff0000;
    position: absolute;
    left:50%;
    top:190px;
    transform: translateX(-37px);
}
.leftface{
    margin-left:-200px;
}
.rightface{
    margin-left:200px;
}
`
export default string