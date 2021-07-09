var body=[];
var dt=3;
var G=.1;
var n=7;
var text1="Robin's Portfolio";
var text2="F&O = 1810410.99";
var text3="Foreign = 24787";
var text4="ETF & Mutal funds = 91159.94";
var text5="Bonds = 30610";
var text6="Equity = 235355.64";
var text7="Crypto = 9036.8";

function setup(){
	var W=windowWidth;
	var H=windowHeight;
	createCanvas(W,H);
	background(0);
	body[0]=new planets(W/2,H/2,3,2400);
	body[0].col="#ffc300";
	body[1]=new planets(W/2-330,H/2,2,.005);
	body[1].col="#709dd8";
	body[2]=new planets(W/2-220,H/2,.9,.002);
	body[2].col="#e0c870";
	body[3]=new planets(W/2-100,H/2,23,.0005);
	body[3].col="#ffffff";
	body[4]=new planets(W/2-430,H/2,181,.0005);
	body[4].col="#9900cc";
	body[5]=new planets(W/2-480,H/2,2,.0005);
	body[5].col="#009900";
	body[6]=new planets(W/2-150,H/2,3,.0010);
	body[6].col="#990000";

	body[1].vy=.64;
	body[2].vy=.8;
	body[3].vy=1.2;
	body[4].vy=0.5;
	body[5].vy=0.5;
	body[6].vy=0.8;


}

function draw(){
	background(0,0,0,40);
	fill("#26d38e");
	strokeWeight(0);
	textSize(30);
	
	text(text1,width-390,60);
	fill("#9900cc");
	textSize(15);
	textStyle(NORMAL);
	text(text2,width-370,70,250,500);
	fill("#009900");
	textSize(15);
	textStyle(NORMAL);
	text(text3,width-370,90,250,500);
	fill("#e0c870");
	textSize(15);
	textStyle(NORMAL);
	text(text4,width-370,110,250,500);
	fill("#ffc300");
	textSize(15);
	textStyle(NORMAL);
	text(text5,width-370,130,250,500);
	fill("#ffffff");
	textSize(15);
	textStyle(NORMAL);
	text(text6,width-370,150,250,500);
	fill("#990000");
	textSize(15);
	textStyle(NORMAL);
	text(text7,width-370,170,250,500);
	

	// background(10,10,35);
	for(var i=0; i<n; i++){
		body[i].display();
	}
	for(var i=0; i<n; i++){
		body[i].fx=0;
		body[i].fy=0;
		for(var j=0; j<n; j++){
			if(i!=j){
				body[i].attraction(body[j]);
			}
		}
	}

	for(var i=0; i<n; i++){
		body[i].update();
	}


}
