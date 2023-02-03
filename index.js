class Room {
    constructor(name) {
      this._name = name;
      this._description = "";
      this._linkedRooms = {};
      this._linkedObjects = {};
      this._character = "";
    }
  
    get name() {
      return this._name;
    }
  
    get description() {
      return this._description;
    }
  
    get character() {
      return this._character
    }
  
    set name(value) {
      if (value.length < 4) {
        alert("Name is too short.");
        return;
      }
      this._name = value;
    }
  
    set description(value) {
      if (value.length < 4) {
        alert("description is too short.");
        return;
      }
      this._description = value;
    }
  
    set character(value) {
      this._character = value;
    }
  
    describe() {
      return `Looking around the <span class="char-name l-b">${this._name}</span> you can see ${this._description}`;
    }
  
    linkRoom(direction, roomToLink) {
      this._linkedRooms[direction] = roomToLink;
    }

    linkObject(type, objectToLink) {
        this._linkedObjects[type] = objectToLink;
    }
  
    getDetails() {
        // get entries from linked rooms object
      const entries = Object.entries(this._linkedRooms);
      // array to hold details
      let details = []

      for (const [direction, room] of entries) {
        let text = `<br>The <span class="name l-b">${room._name}</span> is to the ${direction}`;
        details.push(text);
      }
      return details;
    }
  
    move(direction) {
      if (direction in this._linkedRooms) {
        return this._linkedRooms[direction];
      } else {
        alert("You can't go that way",);
        alert(this._name)
        return this;
      }
    }
}
  
class Box {
    constructor(color) {
        this._key = "Golden"
        this._color = color
    }
    get key() {
        return this._key;
    }
    get color() {
        return this._color;
    }
    set color(value) {
        this._color = value;
    }
  
    describe() {
      return `<b>In ${this._color} box you've found a ${this._key} key.</b>`;
    }
}

class UnluckyBox extends Box {
    constructor(color) {
        super(color);
        this._key = "Silver";
        this._quest = {
            question : "",
            answer : ""
        };
    }
    
    get question() {
        return this._quest["question"];
    }
    get answer() {
        return this._quest["answer"];
    }

    set question(value) {
        if (value.length < 2) {
            alert("Too short");
            return
        }
        this._quest["question"] = value;

    }

    set answer(value) {
        if (value.length < 1) {
            alert("Too short");
            return
        }
        this._quest["answer"] = value;

    }
}
  
class Character {
    constructor(name) {
      this._name = name;
        this._description = ""
      this._conversation = ""
      this._image = ""
    }
    set name(value) {
      if (value.length < 4) {
        alert("Name is too short.");
        return;
      }
      this._name = value;
    }
  
    set description(value) {
      if (value.length < 4) {
        alert("Decription is too short.");
        return;
      }
      this._description = value;
    }
  
    set conversation(value) {
      if (value.length < 4) {
        alert("conversation is too short.");
        return;
      }
      this._conversation = value;
    }

    set image(value) {
      if (value == "") {
        alert("image required");
        return;
      }
      this._image = value;
    }

    get image() {
      return this._image;
    }

    get name() {
      return this._name;
    }
  
    get description() {
      return this._description;
    }
  
    get conversation() {
      return this._conversation;
    }
   
    describe() {
      return `The host of this cave is <span class="name l-b">${this._name}</span>, ${this._description}. `
    }
  
    converse() {
      return `<span class="yellow l-b cursive">${this._name} says:</span><br><br>${this._conversation}. `
    }
}
  
  const EntryCave = new Room("Entry Cave");
  EntryCave.description = "a tiny space with dimmed light in the left corner. It looks like you are already in trouble.";
  const BloodyCave = new Room("Bloody Cave");
  BloodyCave.description = "a long narrow tunnel with bloody wooden table in the end.";
  BloodyCave.character = "Zebra";
  const AbandonedCave = new Room("Abandoned Cave");
  AbandonedCave.description = "an empty cave with weird ancient carvings on the wall.";
  AbandonedCave.character = "Horse";
  const TortureCave = new Room("Torture Cave");
  TortureCave.description = "a very dark place with chains hanging from the ceiling.";
  TortureCave.character = "Octopus";
  const DiscoCave = new Room("Disco Cave");
  DiscoCave.description = "an illuminated room with colorful paintings and music playing in the background."
  DiscoCave.character = "Snake";
  const SpiderCave = new Room("Spider Cave");
  SpiderCave.description = "nothing, which is strange. Where's all the spiders? Oh boy, you don't wanna know.";
  SpiderCave.character = "Joe";
  const CreepyCave = new Room("Creepy Cave");
  CreepyCave.description = "the real face of your fear and creepiness is not just a word anymore.";
  CreepyCave.character = "Albertino";
  const StinkyCave = new Room("Stinky Cave");
  StinkyCave.description = "mold and some mushrooms. Their green colour explains the stinkyness but not fully. You better hold your breath.";
  StinkyCave.character = "Centipede";
  const DiamondCave = new Room("Diamond Cave");
  DiamondCave.description = "a shiny wall of diamons, rubins and sapphires. Don't stare at it too long, your journey is not over yet!";
  DiamondCave.character = "Jaw";
  const QuantumCave = new Room("Quantum Cave");
  QuantumCave.description = "a normal cave. What did you expect? A quantum tunnel? <br> But you made it here. Congrats!";
  QuantumCave.character = "Chupakabra";
  
  EntryCave.linkRoom("south", BloodyCave);
  EntryCave.linkRoom("east", TortureCave);
  BloodyCave.linkRoom("north", EntryCave);
  BloodyCave.linkRoom("east", AbandonedCave);
  AbandonedCave.linkRoom("west", BloodyCave);
  AbandonedCave.linkRoom("north", TortureCave);
  TortureCave.linkRoom("south", AbandonedCave);
  TortureCave.linkRoom("north", DiscoCave);
  TortureCave.linkRoom("west", EntryCave);
  DiscoCave.linkRoom("south", TortureCave);
  DiscoCave.linkRoom("west", SpiderCave);
  SpiderCave.linkRoom("east", DiscoCave);
  SpiderCave.linkRoom("north", CreepyCave);
  CreepyCave.linkRoom("south", SpiderCave);
  CreepyCave.linkRoom("east", StinkyCave );
  StinkyCave.linkRoom("west", CreepyCave);
  StinkyCave.linkRoom("east", DiamondCave);
  DiamondCave.linkRoom("west", StinkyCave);
  DiamondCave.linkRoom("south", QuantumCave);
  QuantumCave.linkRoom("north", DiamondCave);
 
  const Zebra = new Character("Radio-Activated Zebra");
  Zebra.description = "with green and orange stripes that glow like rainbow in the dark";
  Zebra.conversation = "Welcome to my place. There is only one rule - stay alive. For that you must answer the question. Correctly of course";
  Zebra.image = "pics/zebra.jfif";
  const Horse = new Character("Headless Horse");
  Horse.description = "which doesn't have a head but owns an extra butt";
  Horse.conversation = "I may not have a head but my butt definitely compensates that. I prepared a decent question for you";
  Horse.image = "pics/butt.jpg";
  const Octopus = new Character("Infinite Octopus");
  Octopus.description = "with eighteen slimy legs going all over the walls";
  Octopus.conversation = "Bevare, I grew 10 extra legs to catch my food. And I'm hungry now. I will eat you so you better hurry up"
  Octopus.image = "pics/octo.jfif";
  const Snake = new Character("Sneaky Snake");
  Snake.description = "which is so fat that even its enormous length cannot compete its fatness";
  Snake.conversation = "Don't be afraid of me. I'm just a snake. I used to be a rhino but contracted here under the pressure";
  Snake.image = "pics/snake.jpg";
  const Joe = new Character("Triple-Eyed Joe");
  Joe.description = "who is very handsome guy with sky-blue eyes. So what he's got 3 of them. Better more than less";
  Joe.conversation = "Don't be scared of my third nose. I won't sniff you I promise";
  Joe.image = "pics/3eye.jfif";
  const Albertino = new Character("Toxic Albertino");
  Albertino.description = "who is breathing out toxic gasses. Don't stay in this cave for too long";
  Albertino.conversation = "It is mistery how I'm still alive. Perhaps I'm not that toxic for myself";
  Albertino.image = "pics/albert.jpg";
  const Centipede = new Character("Double-Legged Centipede");
  Centipede.description = "with hairy little legs and each leg has its legs too";
  Centipede.conversation = "You definitely can't outrun me. So you better know how to count, more than to 100";
  Centipede.image = "pics/centipede.jpg";
  const Jaw = new Character("Uncle Jaw");
  Jaw.description = "whose jaw dropped years ago. Noone knows the reason exept for Jaw";
  Jaw.conversation = "I'm Jawless Joe's Uncle Jaw. And I'm the most normal one here"
  Jaw.image = "pics/jaw.jpg";
  const Chupakabra = new Character("Chupakabra");
  Chupakabra.description = "which looks like all previous creatures you met, combined";
  Chupakabra.conversation = "I'm your final boss and this time there's no golden key to save you"
  Chupakabra.image = "pics/chupa.jpg";

  const LuckyBoxWhite = new Box("white");
  LuckyBoxWhite.description = "white box";
  const LuckyBoxBlack = new Box("black");
  LuckyBoxBlack.description = "black box";

  const BoxOne = new UnluckyBox("white");
  BoxOne.description = "White box";                                 // white - box1    black - box2
  BoxOne.question = "2 + 2 - 2 * 8";
  BoxOne.answer = "-12";

  const BoxTwo = new UnluckyBox("black");
  BoxTwo.description = "black box";
  BoxTwo.question = "How many kilometers in 1 mile?";
  BoxTwo.answer = "1609";

  const BoxThree = new UnluckyBox("black");
  BoxThree.description = "black box";
  BoxThree.question = "If one of my leg is 20 centimeters long, how long my all legs combined?";
  BoxThree.answer = "360";

  const BoxFour = new UnluckyBox("white");
  BoxFour.description = "white box";
  BoxFour.question = "Which is the <b>4th biggest</b> planet in Solar System?";
  BoxFour.answer = "neptune";

  const BoxFive = new UnluckyBox("white");
  BoxFive.description = "white box";
  BoxFive.question = "How many eyes spiders <b>usually</b> have?";
  BoxFive.answer = "8";

  const BoxSix = new UnluckyBox("white");
  BoxSix.description = "white box";
  BoxSix.question = "f(x) = 3x + 19 <br> <b>f(8) = ?</b>";
  BoxSix.answer = "43";

  const BoxSeven = new UnluckyBox("black");
  BoxSeven.description = "black box";
  BoxSeven.question = "<b>5!</b>";
  BoxSeven.answer = "120";

  const BoxEight = new UnluckyBox("black");
  BoxEight.description = "black box";
  BoxEight.question = "What is the color of <b>Sapphire</b>?";
  BoxEight.answer = "blue";

  const BoxNine = new UnluckyBox("white");
  BoxNine.description = "white box";
  BoxNine.question = "f(x) = x**2 + 3x + 1 <br> <b>f(20) = ?</b>";
  BoxNine.answer = "461";

  const BoxTen = new UnluckyBox("black");
  BoxTen.description = "black box";
  BoxTen.question = "Name the <b>third</b> element in the periodic table";
  BoxTen.answer = "lithium";
  
  BloodyCave.linkObject("character", Zebra);
  BloodyCave.linkObject("box1", BoxOne);
  BloodyCave.linkObject("box2", LuckyBoxBlack);
  AbandonedCave.linkObject("character", Snake);
  AbandonedCave.linkObject("box1", LuckyBoxWhite);
  AbandonedCave.linkObject("box2", BoxTwo);
  TortureCave.linkObject("character", Octopus);
  TortureCave.linkObject("box1", LuckyBoxWhite);
  TortureCave.linkObject("box2", BoxThree);
  DiscoCave.linkObject("character", Horse);
  DiscoCave.linkObject("box1", BoxFour);
  DiscoCave.linkObject("box2", LuckyBoxBlack);
  SpiderCave.linkObject("character", Joe);
  SpiderCave.linkObject("box1", BoxFive);
  SpiderCave.linkObject("box2", LuckyBoxBlack);
  CreepyCave.linkObject("character", Albertino);
  CreepyCave.linkObject("box1", BoxSix);
  CreepyCave.linkObject("box2", LuckyBoxBlack);
  StinkyCave.linkObject("character", Centipede);
  StinkyCave.linkObject("box1", LuckyBoxWhite);
  StinkyCave.linkObject("box2", BoxSeven);
  DiamondCave.linkObject("character", Jaw);
  DiamondCave.linkObject("box1", LuckyBoxWhite);
  DiamondCave.linkObject("box2", BoxEight);
  QuantumCave.linkObject("character", Chupakabra);
  QuantumCave.linkObject("box1", BoxNine);
  QuantumCave.linkObject("box2", BoxTen);

  let textArea = document.getElementById("textarea");
  let characterArea = document.getElementById("chararea");
  let textArea2 = document.getElementById("textarea-2");
  let boxQuestion = document.getElementById("box-info");
  let popup = document.getElementById("pop-up");
  let remaining = document.getElementById("attempt");
  let currentState = 0

const emptyText = () => {
    textArea2.innerHTML = "";
    characterArea.innerHTML = "";
    boxQuestion.innerHTML = "";  
}

const gameOver = () => {
  attempts = 3;
  currentState = 0;
  count = 0;
  emptyText();
  remaining.style.visibility = "hidden";
  popup.style.visibility = "hidden";
  textArea.innerHTML = "";
  boxQuestion.innerHTML = "to restart the game enter<br> <b>restart</b>";
  textArea2.innerHTML = "Game over"
  textArea2.style.fontSize = "30px"
  textArea2.style.fontWeight = "bolder"
}

const victory = () => {
  gameOver();
  textArea2.innerHTML = "Victory!";
  textArea.innerHTML = "Your prize is : <br> banana 🍌"
  textArea.style.fontSize = "20px"
}

const restart = () => {
  emptyText();
  count = 0;
  currentState = 0;
  attempts = 3;
  currentRoom = EntryCave;
  currentBox = null;
  textArea.innerHTML = "";
  remaining.style.visibility = "hidden";
  popup.style.visibility = "hidden";
  boxQuestion.innerHTML = "to start the game enter <br><b>start</b>";
  textArea.style.fontSize = "1rem"
}

function displayRoomInfo(room) {
  console.log(currentState);
  console.log(currentRoom)
    let occupantMsg = ""
    boxQuestion.innerHTML = "";
    
    textContent = "<p>" + room.describe() + "</p>" + "<p>" +
      occupantMsg + "</p>" ;
      
    nextRoom = "<p>" + room.getDetails() + "</p>";

    if (room.character === "") {
      occupantMsg = ""
      textArea.innerHTML = nextRoom;
      
    } else {
        currentCharacter = currentRoom._linkedObjects["character"];
        document.getElementById("image").src = currentCharacter.image;
        textArea.innerHTML = "<p>" + room.describe() + "</p>" + "<p>" + currentCharacter.describe() + "</p>";
        popup.style.visibility = "visible";
        popup.style.fontSize = "smaller";
        characterArea.innerHTML = currentCharacter.converse();
        
        boxQuestion.innerHTML = "<b>You see two boxes: white and black.<br> Choose wisely!</b>"
    }
    
    document.getElementById("buttonarea").innerHTML = '><input type="text" id="usertext" />';
    document.getElementById("usertext").focus();
}

function openBox(box) {
   
    if (currentBox._key == "Golden") {
      
        emptyText();
        boxQuestion.innerHTML = box.describe();
        popup.style.visibility = "hidden";
        textArea.innerHTML = "<p>" + currentRoom.getDetails() + "</p>";
    } else {
        console.log(box);
        currentState = 1;
        remaining.style.visibility = "visible";
        textArea2.innerHTML = "";
        textArea.innerHTML = box.describe();;
        boxQuestion.innerHTML = "<i><b>Answer a question:</b></i> <br>" + "<p>" + box.question + "</p>";  
        remaining.innerHTML = `attempts remaining: 3`
    }
}
    
function startGame() {
  document.getElementById("usertext").focus();
  currentRoom = EntryCave 
  currentBox = null
  let count = 0
  currentState = 0;
  let attempts = 3;
  
  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      
      console.log("attempts" , attempts);
      command = document.getElementById("usertext").value;
      const directions = ["north", "south", "east", "west"]

      document.getElementById("usertext").value = ""

      if (directions.includes(command.toLowerCase())) {
        console.log(currentRoom);
        currentRoom = currentRoom.move(command) 
        displayRoomInfo(currentRoom);
      } else if (command === "start") {
        displayRoomInfo(currentRoom) 

      } else if (command === "white") {
        currentBox = currentRoom._linkedObjects["box1"];
        openBox(currentBox);
      } else if (command === "black") {
        currentBox = currentRoom._linkedObjects["box2"];
        openBox(currentBox);
      } else if (currentBox !== null && command == currentBox.answer) {
        if (currentRoom == QuantumCave) { victory(); return }
        popup.style.visibility = "hidden";
        remaining.innerHTML = ""
        remaining.style.visibility = "hidden";
        textArea.innerHTML = "<p>" + currentRoom.getDetails() + "</p>";
        emptyText();
        boxQuestion.innerHTML = "<b>Correct!</b>";
       
        currentState = 0;
        attempts = 3;
        count = 0;

      } else if (count <= 3 && currentState == 1) {
            
        if (count == 2) {
          gameOver();
        }
        count++
        attempts--
        remaining.innerHTML = `attempts remaining: ${attempts}`

      } else if (command === "restart") {
        restart();
      } else if (command === "win") {
        victory();
      } else if (command === "lose") {
        gameOver();
      } else {
        alert("that is not a valid command please try again")
      }            
    }
  });
}

 startGame();
  