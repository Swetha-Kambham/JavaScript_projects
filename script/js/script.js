//console.log('hello swetha');
//this function called when cliclme button clicked.
function ageIndays()
{
    let year=prompt('What year you were born?');
    let aind=(2020-year)*365;
    console.log(aind);
    //so we have to make it visible in html page of flex-box;
    //for that we are creating the h2 element using dom
    let h2=document.createElement('h2');
    //we are creating the text node in that we are puttinh the what we calculated age in days
    let text1=document.createTextNode('your Age is'+ aind +'days');
    //we are setting id to the h1 tag because if we want to reset then we need id of h1 tag.
    h2.setAttribute('id','id1');
    //now we are add node to h2 tag
    h2.appendChild(text1);
    //now we have to set result(h2) to flex-box whose id='result' in html.
    document.getElementById('result').appendChild(h2);
}
function reset()
{
    //remove content in h2 tag.
    document.getElementById('id1').remove()
}


//<****************Secong project Cat Generator;********************>
//by caling this everytime we create a cat image;
function CatGen()
{
    //firstly create a ima element;
    let image=document.createElement('img');
    //create a var which hold the flex-box div whose id='flex-result' 
    let output=document.getElementById('flex-result');
    //add the image source for the image element which we have already created.
    image.src="https://media.giphy.com/media/WXB88TeARFVvi/giphy.gif";
    output.appendChild(image);
}

//<**********************Rock Paper and Scissors Game Start ***************************>
//choice is the img ,when you click on particular image the entire img tag will come
function Game(choice)
{
    console.log(choice);
    let humanChoice,botChoice;
    //for the each image we give the id as image name.
    humanChoice=choice.id;
    // console.log("Human choice:",humanChoice);
    botChoice=getbotChoice();
    //console.log("Computer Choice:",botChoice);
    results = decideWinner(humanChoice,botChoice);//return arr like [0,1] means [human lost,bot win]
    //console.log(results);
    //we are generate a object having colour and message elements;
    messageResult=FinalM(results);
    //console.log(messageResult.color);
    //you have to print the result in the Html page(messageResults);
    display(humanChoice,botChoice,messageResult);

}
//here we are randomly generate bot choice;
//either rock,paper or Scissors;
function getbotChoice()
{
    //here we are randomly generating 0,1 and 2 because we have 3 options rock,paper,Scissors;
    //Math.random()-->generates random value between 0 to 1;
    //we want upto 3 so we multiply it with 3
    //it gives float values so we are taking floor of that vale;
    let ch=Math.floor(Math.random()*3);
    //ch variable having 0,1,or 2 so we select 
    let values=['rock','paper','Scissors'];
    //here we are selecting the values arr of index(randomly generated)
    return values[ch];
}
function decideWinner(humanCh,computerCh)
{
    //create a object of object for result.if human select rocks and bot select paper then human get-->0,and bot get-->1,so return [0,1]
    let ResultValue={
        'rock':{'Scissors':1,'rock':0.5,'paper':0},
        'paper':{'rock':1,'paper':0.5,'Scissors':0},
        'Scissors':{'paper':1,'Scissors':0.5,'rock':0}
    }
    let hr=ResultValue[humanCh][computerCh];
    let cr=ResultValue[computerCh][humanCh];
    return [hr,cr];//return in the form of an array
}
function FinalM([human,bot])
{
    if(human===0)
    {
        return {message:'you Lost!',color:'red'};
    }
    else if(human===0.5)
    {
        return {message:'You both tied!',color:'blue'};
    }
    else
    {
        return {message:'You Win!',color:'green'};
    }
}
function display(hmch,botch,messageR)
{
    //get the src link from below
    let imagesD={
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'Scissors':document.getElementById('Scissors').src
    }
    //firslt create 3 div elements
    let hv=document.createElement('div');
    let rt=document.createElement('div');
    let re=document.createElement('div');
    //firslt remove all the images in flex-box-rpm ,rock paper scissors;
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('Scissors').remove();
    //then you can take two images ,the choices of human and bot and put message;
    //firslt we have to create an image<>tag and add it to hv,rt divisions;
    hv.innerHTML="<img src='"+imagesD[hmch]+"'"+"height=150 width=150 >";
    rt.innerHTML="<img src='"+imagesD[botch]+"'"+"height=150 width=150>";
    re.innerHTML="<h1 style='color:"+messageR.color+";font-size:40px;'>"+messageR.message+"</h1>"
    //append hchoice,botchoice and text image to flex-box-rps division class
    document.getElementById('flex-box-rps-id').appendChild(hv);
    document.getElementById('flex-box-rps-id').appendChild(re);
    document.getElementById('flex-box-rps-id').appendChild(rt);
    
    
}

//<****************Challange 4*********************>
//firstly we have to get all the buttons from the page;
let all_buttons=document.getElementsByTagName('button');
//returns the collections of buttons.
console.log(all_buttons);
//we have an option called reser means we have make the all buttons in its original colours for that we have to take the copy of buttons colours list.
let copy_buttons=[];
//copy_buttons having only button class that is btn-primary
//for getting thet class list of buttion we use classList[1]=btn-primary like that classList[0]=btn;
for(let i=0;i<all_buttons.length;i++)
{
    copy_buttons.push(all_buttons[i].classList[1]);
}
console.log(copy_buttons);
//defining the function for changing colour ,which is called in index.html 
function changeColour(btncolour)
{
    if(btncolour.value === 'red')
    {   
        console.log('redcolour');
        buttonRed();
        
    }
    else if(btncolour.value === 'green')
    {
        buttonGreen();
    }
    else if(btncolour.value === 'random')
    {
        buttonRandom();
    }
    else if(btncolour.value === 'reset')
    {
        buttonReset();
    }
}

function buttonRed()
{
    //we have to change the all buttons colour to red
    //for that fistly we take loop for traversing all buttons 
    //then we remove the particular class colour
    //and then add red colour to it

    for(let j=0;j<all_buttons.length;j++)
    {
        //for each button classList remove particular class
        //here removing btn-primary like that;
        all_buttons[j].classList.remove(all_buttons[j].classList[1]);
        //add the "btn-danger" because it is red
        all_buttons[j].classList.add("btn-danger");
    }
}
function buttonGreen()
{
    for(let i=0;i<all_buttons.length;i++)
    {
        all_buttons[i].classList.remove(all_buttons[i].classList[1])
        all_buttons[i].classList.add("btn-success");
    }

}
function buttonRandom()
{
    let choice = ['btn-primary','btn-warning','btn-success','btn-warning'];
    //we have 4 choices among one we have to choose as random.
    //Math.floor(Math.random()*4);
    for(let i=0;i<all_buttons.length;i++)
    {
        let random_num=Math.floor(Math.random()*4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choice[random_num]);
    }
}
function buttonReset()
{
    for(let i=0;i<all_buttons.length;i++)
    {
        all_buttons[i].classList.remove(all_buttons[i].classList[1])
        all_buttons[i].classList.add(copy_buttons[i]);
    }
}


//<<<<<<<<******************Challange 5:BlackJack****************************>>>>>>>>>>

//here you need to create a object list which maintains scores and division of both you and dealer;
let blackJackGame={
    'you':{'Scorespan':'#you','div':'#your-box','score':0},
    'dealer':{'Scorespan':'#opp','div':'#dealer-box','score':0},
    //these are the card name which we have in images folder
    'cards':['2','3','4','5','6','7','8','9','10','A','J','K','Q'],
    'cardValues':{'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'A':[1,11],'J':10,'K':10,'Q':10},
    'loses':0,
    'draws':0,
    'wins':0,
    //means this stand means still you in stand.
    'isStand':false,
    //if turns over then you switch to deal;
    'turnOvers':false,
}
//both are not change so we put const.that will take the entire object of you in blackjackGame.
const You=blackJackGame['you'];
const Dealer=blackJackGame['dealer'];


//here we are writing an eventlistiner when the button hit click;
//this is the way to to slect a button and make click method here itself;

//b1->button id for that we are adding the eventlistner whenevr hit button clicked then blackjackhit method called;
//we have to put '#' in front of button id;
document.querySelector('#b1').addEventListener('click',blackjackHit);
document.querySelector('#b2').addEventListener('click',delarsLogic);
document.querySelector('#b3').addEventListener('click',blackjackHitDeal);
//if u want add sound then
const soundHit=new Audio("script/sounds/swish.m4a");
const soundLose=new Audio("script/sounds/aww.mp3");
const soundWin=new Audio("script/sounds/cash.mp3");
//whenever hit button clicked card img element created and add it to division of you.


function blackjackHit()
{
    if(blackJackGame['isStand']===false)
    {
        let card=randomCard();
        showcard(card,You);
        UpdateScore(card,You);
        showScore(You);
    }
}

//we have to pick a random card;
function randomCard()
{
    let randV=Math.floor(Math.random()*13);
    return blackJackGame['cards'][randV];
}

function showcard(card,activePlayer)
{
    //if score is less than 21 then show card
    if(activePlayer['score']<=21)
    {
        let cardImage=document.createElement('img');
        //this take card as varible name
        cardImage.src=`script/images/${card}.png`;
        document.querySelector(activePlayer['div']).appendChild(cardImage);
        soundHit.play();
    }
}
function blackjackHitDeal()
{
   
    //this select all the images that youbox has;
    //it has to make it zero.
    //if all the turnsover then allow to click button deal;
    if (blackJackGame['turnOvers']===true)
    {
        blackJackGame['isStand']=false
        let yourPro=document.querySelector('#your-box').querySelectorAll('img');
        for(let i=0;i<yourPro.length;i++)
        {
            yourPro[i].remove();
        }
        //we have to make score to zero
        You['score']=0;
        console.log(You['score']);
        //it is displayed in html page You:0
        document.querySelector(You['Scorespan']).textContent=0;
        document.querySelector(You['Scorespan']).style.color="#ffffff";
        //this select all elements of delaer box and remove them.
        let delarCards=document.querySelector('#dealer-box').querySelectorAll('img');
        for(let j=0;j<delarCards.length;j++)
        {
            delarCards[j].remove();
        }
        
        Dealer['score']=0;
        //it should be displayed in html plage like dealer:0
        document.querySelector('#Rwinner').textContent="Let's Play";
        document.querySelector('#Rwinner').style.color="black";

        //make let's play after deal click into origin position.
        document.querySelector(Dealer['Scorespan']).textContent=0;
        document.querySelector(Dealer['Scorespan']).style.color="#ffffff";

        //make turnsover to false;
        blackJackGame['turnOvers']=true;
    }
}
function UpdateScore(card,activePlayer)
{
    //here active player is You or Dealer
    //we are updating the score
    //if adding ace to score make it below 21 then add 11,otherwise add 1;
    if(card==='A')
    {
        if(activePlayer['score']+blackJackGame['cardValues'][card][1]<=21)
        {
            activePlayer['score']+=11;
        }
        else
        {
            activePlayer['score']+=1;
        }
    }
    else
    {
        activePlayer['score']+=blackJackGame['cardValues'][card];
    }
   
}
function showScore(activePlayer)
{
    if(activePlayer['score']<=21)
    {
        document.querySelector(activePlayer['Scorespan']).textContent=activePlayer['score'];
    }
    else
    {
        document.querySelector(activePlayer['Scorespan']).textContent="Bust!";
        document.querySelector(activePlayer['Scorespan']).style.color="red";

    }
}

//delar call
async function delarsLogic()
{
   //when this is delaers stand then your's chances are over.
   blackJackGame['isStand']=true;
   //we have to automate the process of dealse;
   //score is >16 and someone click blackjackgame;
   while(Dealer['score'] < 16 && blackJackGame['isStand'] === true)
   {
        let card=randomCard();
        showcard(card,Dealer);
        UpdateScore(card,Dealer);
        showScore(Dealer);
        await sleep(1000);
   }
  //bot doesn't know where to stop so ,here why 15 means limit is 21 right.
    blackJackGame['turnOvers']=true;
    let win=computeWinner();
    showResult(win);
}

function sleep(ms)
{
    return new Promise(resolve => setTimeout(resolve,ms));
}


//compute Winner

function computeWinner()
{
    //here you need to update wins,loses and draws.
    let winner;
    //if the dealer score is bust and you are <=21 || your score is greater than dealer--> then you won
    if(You['score']<=21){

        if(You['score']>Dealer['score'] || (Dealer['score']>21))
        {
            blackJackGame['wins']+=1;
            winner=You;
        }
        else if(Dealer['score']>You['score'])
        {
            blackJackGame['loses']+=1;
            winner=Dealer;
        }
        else if(You['score']===Dealer['score'])
        {
            blackJackGame['draws']+=1;
        }
    }
    //when the you and delaer bust
    else if(Dealer['score']>21 && You['score']>21)
    {
        blackJackGame['draws']+=1;
    }
    //when you bust and dealer not.
    else if(You['score']>21 && Dealer['score']<=21)
    {
        blackJackGame['loses']+=1;
        winner=Dealer;
    }
    
    return winner;
}

function showResult(winner)
{
    let message,messageclr;
    if (blackJackGame['turnOvers']===true)
    {
        if(winner===You)
        {
            //add win to table wins column
            document.querySelector('#wins').textContent=blackJackGame['wins'];
            message='You Win!';
            messageclr='green';
            soundWin.play();
            
        }
        else if(winner===Dealer)
        {
            document.querySelector('#loses').textContent=blackJackGame['loses'];
            message='You Lost!';
            messageclr='red';
            soundLose.play();
        }
        else
        {
            message='Draw';
            messageclr='blue';
            document.querySelector('#draws').textContent=blackJackGame['draws'];
            soundHit.play();
            
        }
        
        //show in the html page 
        document.querySelector('#Rwinner').textContent=message;
        document.querySelector('#Rwinner').style.color=messageclr;
    }
}
