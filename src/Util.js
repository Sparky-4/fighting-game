/*Generating quads given an atlas and a width and height for the tile by adding
 *a quad in an array for each quad in the atlas
 */
function GenerateQuads(atlas, tileWidth, tileHeight, vWidth, vHeight){
	let sheetWidth = atlas.width;
	let sheetHeight = atlas.height;
	
	let sheetCounter = 0;
	let spriteSheet = [];
	
	for(let y = 0; y < sheetHeight; y+=tileHeight)
	{
		for(let x = 0; x < sheetWidth; x+= tileWidth)
		{
			spriteSheet[sheetCounter] = new Quad(x, y,
			tileWidth, tileHeight, atlas, vWidth, vHeight);
			sheetCounter++;
		}
	}
	return spriteSheet;
}

function getMiddle(spriteSheet, width, height, vWidth, vHeight){
	for(let i = 0; i < spriteSheet.length; i++){
		spriteSheet[i].x += (spriteSheet[i].width-width)/2-5;
		spriteSheet[i].width = width;
		spriteSheet[i].vWidth = vWidth;
		spriteSheet[i].y += (spriteSheet[i].height-height)/2-5;
		spriteSheet[i].height = height;
		spriteSheet[i].vHeight = vHeight;
	}

	return spriteSheet;
}

function getMackAttack(spriteSheet){
	for(let i = 0; i < spriteSheet.length; i++){
		spriteSheet[i].width = 40;
		spriteSheet[i].vWidth = 100;
		spriteSheet[i].height = 54;
		spriteSheet[i].vHeight = 150;
		spriteSheet[i].y = 68;
		spriteSheet[i].xOffset = -3;
		
	}

	spriteSheet[0].x = 71;
	spriteSheet[1].x = 269;
	spriteSheet[2].x = 471;
	spriteSheet[3].x = 673;

	spriteSheet[4].x = 882;
	spriteSheet[4].y = 52;
	spriteSheet[4].width = 107;
	spriteSheet[4].height = 69;
	spriteSheet[4].vWidth = 268;
	spriteSheet[4].vHeight = 173;
	spriteSheet[4].yOffset = -23;
	
	spriteSheet[5].x = 1082;
	spriteSheet[5].y = 52;
	spriteSheet[5].width = 107;
	spriteSheet[5].height = 69;
	spriteSheet[5].vWidth = 268;
	spriteSheet[5].vHeight = 173;
	spriteSheet[5].yOffset = -23;

	return spriteSheet;
}

function offset(spriteSheet){
	for(let i = 0; i < spriteSheet.length; i++){
		spriteSheet[i].yOffset = -189;
		spriteSheet[i].xOffset = -211;
	}
	return spriteSheet;
}

function GenerateMackRight(){
	let mackFrames = {
		mackIdle: offset(GenerateQuads(gTextures.mackIdle, 200, 200, 555, 555)),
		// mackIdle: getMiddle(GenerateQuads(gTextures.mackIdle, 200, 200, 200, 200), 36, 54, 100, 150),
        mackRun: offset(GenerateQuads(gTextures.mackRun, 200, 200, 555, 555)),
        // mackRun: getMiddle(GenerateQuads(gTextures.mackRun, 200, 200, 200, 200), 47, 54, 130, 150),
        mackJump: getMiddle(GenerateQuads(gTextures.mackJump, 200, 200, 200, 200), 38, 54, 106, 150),
        mackFall: getMiddle(GenerateQuads(gTextures.mackFall, 200, 200, 200, 200), 48, 54, 134, 150),
        mackAttack1: getMackAttack(GenerateQuads(gTextures.mackAttack1, 200, 200, 200, 200)),
        mackAttack2: getMiddle(GenerateQuads(gTextures.mackAttack2, 200, 200, 200, 200), 36, 54, 100, 150),
        mackDeath: getMiddle(GenerateQuads(gTextures.mackDeath, 200, 200, 200, 200), 36, 54, 100, 150),
        mackHit: getMiddle(GenerateQuads(gTextures.mackHit, 200, 200, 200, 200), 36, 54, 100, 150),
	}
	let spriteSheet = mackFrames.mackIdle.concat(mackFrames.mackRun, mackFrames.mackJump, mackFrames.mackFall, 
		mackFrames.mackAttack1, mackFrames.mackAttack2, mackFrames.mackDeath, mackFrames.mackHit);
	return spriteSheet;
}

function GenerateKenjiRight(){
	let kenjiFrames = {
		kenjiIdle: getMiddle(GenerateQuads(gTextures.kenjiIdle, 200, 200, 200, 200), 36, 54, 100, 150),
        kenjiRun: getMiddle(GenerateQuads(gTextures.kenjiRun, 200, 200, 200, 200), 36, 54, 100, 150),
        kenjiJump: getMiddle(GenerateQuads(gTextures.kenjiJump, 200, 200, 200, 200), 36, 54, 100, 150),
        kenjiFall: getMiddle(GenerateQuads(gTextures.kenjiFall, 200, 200, 200, 200), 36, 54, 100, 150),
        kenjiAttack1: getMiddle(GenerateQuads(gTextures.kenjiAttack1, 200, 200, 200, 200), 36, 54, 100, 150),
        kenjiAttack2: getMiddle(GenerateQuads(gTextures.kenjiAttack2, 200, 200, 200, 200), 36, 54, 100, 150),
        kenjiDeath: getMiddle(GenerateQuads(gTextures.kenjiDeath, 200, 200, 200, 200), 36, 54, 100, 150),
        kenjiHit: getMiddle(GenerateQuads(gTextures.kenjiHit, 200, 200, 200, 200), 36, 54, 100, 150),
	}
	let spriteSheet = kenjiFrames.kenjiIdle.concat(kenjiFrames.kenjiRun, kenjiFrames.kenjiJump, kenjiFrames.kenjiFall, 
		kenjiFrames.kenjiAttack1, kenjiFrames.kenjiAttack2, kenjiFrames.kenjiDeath, kenjiFrames.kenjiHit);
	return spriteSheet;
}
