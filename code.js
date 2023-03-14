// States vairables for Game Score
let score = 0;
let youWonGG = false;

// States variables for Word Randomizer
let usingWordList;
let currentWord;
let currentWordList;
let random;

// States variables for Input Checker
let inputChecker = false;
let txtInput;

// States variables for Value Replacer
let wordReplacer;
let undefinedChecker;

// Countdown & You Won & You Lost screens
let numberRefresh = 0;
let misspelled = false;

// High Score
let highScore = 0;

// Countdown
function startTimer(duration, display) {
	let timer = duration, minutes, seconds;
	setInterval(function () {
		minutes = parseInt(timer / 60, 10);
		seconds = parseInt(timer % 60, 10);

		minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;

		display.text(minutes + ":" + seconds);

		if (--timer < 0) {
			$('#twoMinutes').remove();

			if (misspelled == false) {
				$('iframe').show();
				document.getElementById("box").src = "iframe/youWon.html";
				$('#cover').show();
				numberRefresh = numberRefresh + 1;
				if (numberRefresh >= 5) {
					location.reload();
				}
			}
		}
	}, 1000);
}

// Get a random word and pushes it into an array
usingWordList = [];
function wordGenerator() {
	let wordList = ["a", "ability", "able", "about", "above", "accept", "according", "account", "across", "act", "action", "activity", "actually", "add", "address", "administration", "admit", "adult", "affect", "after", "again", "against", "age", "agency", "agent", "ago", "agree", "agreement", "ahead", "air", "all", "allow", "almost", "alone", "along", "already", "also", "although", "always", "American", "among", "amount", "analysis", "and", "animal", "another", "answer", "any", "anyone", "anything", "appear", "apply", "approach", "area", "argue", "arm", "around", "arrive", "art", "article", "artist", "as", "ask", "assume", "at", "attack", "attention", "attorney", "audience", "author", "authority", "available", "avoid", "away", "baby", "back", "bad", "bag", "ball", "bank", "bar", "base", "be", "beat", "beautiful", "because", "become", "bed", "before", "begin", "behavior", "behind", "believe", "benefit", "best", "better", "between", "beyond", "big", "bill", "billion", "bit", "black", "blood", "blue", "board", "body", "book", "born", "both", "box", "boy", "break", "bring", "brother", "budget", "build", "building", "business", "but", "buy", "by", "call", "camera", "campaign", "can", "cancer", "candidate", "capital", "car", "card", "care", "career", "carry", "case", "catch", "cause", "cell", "center", "central", "century", "certain", "certainly", "chair", "challenge", "chance", "change", "character", "charge", "check", "child", "choice", "choose", "church", "citizen", "city", "civil", "claim", "class", "clear", "clearly", "close", "coach", "cold", "collection", "college", "color", "come", "commercial", "common", "community", "company", "compare", "computer", "concern", "condition", "conference", "Congress", "consider", "consumer", "contain", "continue", "control", "cost", "could", "country", "couple", "course", "court", "cover", "create", "crime", "cultural", "culture", "cup", "current", "customer", "cut", "dark", "data", "daughter", "day", "dead", "deal", "death", "debate", "decade", "decide", "decision", "deep", "defense", "degree", "Democrat", "democratic", "describe", "design", "despite", "detail", "determine", "develop", "development", "die", "difference", "different", "difficult", "dinner", "direction", "director", "discover", "discuss", "discussion", "disease", "do", "doctor", "dog", "door", "down", "draw", "dream", "drive", "drop", "drug", "during", "each", "early", "east", "easy", "eat", "economic", "economy", "edge", "education", "effect", "effort", "eight", "either", "election", "else", "employee", "end", "energy", "enjoy", "enough", "enter", "entire", "environment", "environmental", "especially", "establish", "even", "evening", "event", "ever", "every", "everybody", "everyone", "everything", "evidence", "exactly", "example", "executive", "exist", "expect", "experience", "expert", "explain", "eye", "face", "fact", "factor", "fail", "fall", "family", "far", "fast", "father", "fear", "federal", "feel", "feeling", "few", "field", "fight", "figure", "fill", "film", "final", "finally", "financial", "find", "fine", "finger", "finish", "fire", "firm", "first", "fish", "five", "floor", "fly", "focus", "follow", "food", "foot", "for", "force", "foreign", "forget", "form", "former", "forward", "four", "free", "friend", "from", "front", "full", "fund", "future", "game", "garden", "gas", "general", "generation", "get", "girl", "give", "glass", "go", "goal", "good", "government", "great", "green", "ground", "group", "grow", "growth", "guess", "gun", "guy", "hair", "half", "hand", "hang", "happen", "happy", "hard", "have", "he", "head", "health", "hear", "heart", "heat", "heavy", "help", "her", "here", "herself", "high", "him", "himself", "his", "history", "hit", "hold", "home", "hope", "hospital", "hot", "hotel", "hour", "house", "how", "however", "huge", "human", "hundred", "husband", "I", "idea", "identify", "if", "image", "imagine", "impact", "important", "improve", "in", "include", "including", "increase", "indeed", "indicate", "individual", "industry", "information", "inside", "instead", "institution", "interest", "interesting", "international", "interview", "into", "investment", "involve", "issue", "it", "item", "its", "itself", "job", "join", "just", "keep", "key", "kid", "kill", "kind", "kitchen", "know", "knowledge", "land", "language", "large", "last", "late", "later", "laugh", "law", "lawyer", "lay", "lead", "leader", "learn", "least", "leave", "left", "leg", "legal", "less", "let", "letter", "level", "lie", "life", "light", "like", "likely", "line", "list", "listen", "little", "live", "local", "long", "look", "lose", "loss", "lot", "love", "low", "machine", "magazine", "main", "maintain", "major", "majority", "make", "man", "manage", "management", "manager", "many", "market", "marriage", "material", "matter", "may", "maybe", "me", "mean", "measure", "media", "medical", "meet", "meeting", "member", "memory", "mention", "message", "method", "middle", "might", "military", "million", "mind", "minute", "miss", "mission", "model", "modern", "moment", "money", "month", "more", "morning", "most", "mother", "mouth", "move", "movement", "movie", "Mr", "Mrs", "much", "music", "must", "my", "myself", "name", "nation", "national", "natural", "nature", "near", "nearly", "necessary", "need", "network", "never", "new", "news", "newspaper", "next", "nice", "night", "no", "none", "nor", "north", "not", "note", "nothing", "notice", "now", "not", "number", "occur", "of", "off", "offer", "office", "officer", "official", "often", "oh", "oil", "ok", "old", "on", "once", "one", "only", "onto", "open", "operation", "opportunity", "option", "or", "order", "organization", "other", "others", "our", "out", "outside", "over", "own", "owner", "page", "pain", "painting", "paper", "parent", "part", "participant", "particular", "particularly", "partner", "party", "pass", "past", "patient", "pattern", "pay", "peace", "people", "per", "perform", "performance", "perhaps", "period", "person", "personal", "phone", "physical", "pick", "picture", "piece", "place", "plan", "plant", "play", "player", "PM", "point", "police", "policy", "political", "politics", "poor", "popular", "population", "position", "positive", "possible", "power", "practice", "prepare", "present", "president", "pressure", "pretty", "prevent", "price", "private", "probably", "problem", "process", "produce", "product", "production", "professional", "professor", "program", "project", "property", "protect", "prove", "provide", "public", "pull", "purpose", "push", "put", "quality", "question", "quickly", "quite", "race", "radio", "raise", "range", "rate", "rather", "reach", "read", "ready", "real", "reality", "realize", "really", "reason", "receive", "recent", "recently", "recognize", "record", "red", "reduce", "reflect", "region", "relate", "relationship", "religious", "remain", "remember", "remove", "report", "represent", "Republican", "require", "research", "resource", "respond", "response", "responsibility", "rest", "result", "return", "reveal", "rich", "right", "rise", "risk", "road", "rock", "role", "room", "rule", "run", "safe", "same", "save", "say", "scene", "school", "science", "scientist", "score", "sea", "season", "seat", "second", "section", "security", "see", "seek", "seem", "sell", "send", "senior", "sense", "series", "serious", "serve", "service", "set", "seven", "several", "shake", "share", "she", "shoot", "short", "shot", "should", "shoulder", "show", "side", "sign", "significant", "similar", "simple", "simply", "since", "sing", "single", "sister", "sit", "site", "situation", "six", "size", "skill", "skin", "small", "smile", "so", "social", "society", "soldier", "some", "somebody", "someone", "something", "sometimes", "son", "song", "soon", "sort", "sound", "source", "south", "southern", "space", "speak", "special", "specific", "speech", "spend", "sport", "spring", "staff", "stage", "stand", "standard", "star", "start", "state", "statement", "station", "stay", "step", "still", "stock", "stop", "store", "story", "strategy", "street", "strong", "structure", "student", "study", "stuff", "style", "subject", "success", "successful", "such", "suddenly", "suffer", "suggest", "summer", "support", "sure", "surface", "system", "table", "take", "talk", "task", "tax", "teach", "teacher", "team", "technology", "television", "tell", "ten", "tend", "term", "test", "than", "thank", "that", "the", "their", "them", "themselves", "then", "theory", "there", "these", "they", "thing", "think", "third", "this", "those", "though", "thought", "thousand", "threat", "three", "through", "throughout", "throw", "thus", "time", "to", "today", "together", "tonight", "too", "top", "total", "tough", "toward", "town", "trade", "traditional", "training", "travel", "treat", "treatment", "tree", "trial", "trip", "trouble", "true", "truth", "try", "turn", "TV", "two", "type", "under", "understand", "unit", "until", "up", "upon", "us", "use", "usually", "value", "various", "very", "victim", "view", "violence", "visit", "voice", "vote", "wait", "walk", "wall", "want", "war", "watch", "water", "way", "we", "weapon", "wear", "week", "weight", "well", "west", "western", "what", "whatever", "when", "where", "whether", "which", "while", "white", "who", "whole", "whom", "whose", "why", "wide", "wife", "will", "win", "wind", "window", "wish", "with", "within", "without", "woman", "wonder", "word", "work", "worker", "world", "worry", "would", "write", "writer", "wrong", "yard", "yeah", "year", "yes", "yet", "you", "young", "your", "yourself"];
	random = Math.floor(Math.random() * wordList.length - 1); // Word randomizer
	currentWord = wordList[random]; // Output for word randomizer
	usingWordList[usingWordList.length] = currentWord; // Adding output to an external array

	if (currentWord === undefined) { // Failsafe against undefined
		undefinedChecker = usingWordList.indexOf(txtInput); // If input and array don't match output: -1

		if (undefinedChecker != -1) {
			usingWordList.splice(undefinedChecker, 1); // Splices value from usingWordList
			wordGenerator();
		}

		else { /* nothing happens */ }
	}
	else { /* nothing happens */ }
}
// Generate blocks and display them
$(document).ready(function () {

	// Preloading blocks and score
	$('#myScore').text("Score: " + score);
	$('#myHScore').text("High Score: " + score);

	for (let z = 1; z <= 5; z++) {
		wordGenerator();
	}

	// Generating div blocks
	let block0 = "<div class='dawd' id=" + 0 + ">" + usingWordList[0] + "</div>";
	let block1 = "<div class='dawd' id=" + 1 + ">" + usingWordList[1] + "</div>";
	let block2 = "<div class='dawd' id=" + 2 + ">" + usingWordList[2] + "</div>";
	let block3 = "<div class='dawd' id=" + 3 + ">" + usingWordList[3] + "</div>";
	let block4 = "<div class='dawd' id=" + 4 + ">" + usingWordList[4] + "</div>";

	// Each div block is assigned a value from the array
	$('#background').prepend(block0);
	$('#background').prepend(block1);
	$('#background').prepend(block2);
	$('#background').prepend(block3);
	$('#background').prepend(block4);

	// Entering input and replacing words in block if input is correct
	$(document).keydown(function (key) {
		if (key.which == 13) { // If user presses Enter
			txtInput = $('#txtInput').val(); // Assign a variable to input	

			if (inputChecker = usingWordList.includes(txtInput)) { // If you wrote the correct word
				wordReplacer = usingWordList.indexOf(txtInput); // If input and array don't match output: -1

				let removedElement;

				if (wordReplacer != -1) {
					removedElement = usingWordList.splice(wordReplacer, 1); // Splices value from usingWordList
				}


				// Output when txtInput is correct
				$('#txtInput').css("background-color", "#90EE90");
				score += 50;
				document.getElementById('txtInput').value = '';
				$('#txtInput').css("color", "black");
				$('#myScore').text("Score: " + score);
				wordGenerator();

				// Replace blocks with new text
				$('#0').text(usingWordList[0]);
				$('#1').text(usingWordList[1]);
				$('#2').text(usingWordList[2]);
				$('#3').text(usingWordList[3]);
				$('#4').text(usingWordList[4]);
			}

			else {

				// Output when txtInput is incorret
				$('#txtInput').css("background-color", "#ffcccb"); // Lets user know when a mistake has been made
				document.getElementById('txtInput').value = '';
				$('#txtInput').css("color", "black");
				$('#myScore').text("Score: " + score);
				$('#cover').css("z-index:", "1000;");
				$('iframe').show();
				$('iframe').attr('src', 'iframe/youLost');

				let misspelled = true; // Stops code from running you won code
				$('#twoMinutes').hide();
				$('iframe').show();
				document.getElementById("box").src = "iframe/youLost.html";
				$('#cover').show();
			}
		}
	});

	// Do this after starting game
	// After user clicks "Start Game"
	$('#startGame').click(function () {
		let twoMinutes = 120,
			display = $('#twoMinutes');
		startTimer(twoMinutes, display);
		$('#cover').hide();
		$('#startGame').hide();
		$('iframe').hide();
		document.getElementById('txtInput').value = '';
		$('#txtInput').focus();
	});

	// Defines ground so that blocks dont fall off the screen
	$('#background').append("<div class='ground'></div>");

	gameGravity();

	function gameGravity() {
		let world;
		let scale = 30;
		let backdrop;
		let physics;
		let where;

		// These variables are used to simplify box2D objects since they are too long
		let b2Vec2 = Box2D.Common.Math.b2Vec2;
		let b2BodyDef = Box2D.Dynamics.b2BodyDef;
		let b2Body = Box2D.Dynamics.b2Body;
		let b2FixtureDef = Box2D.Dynamics.b2FixtureDef;
		let b2Fixture = Box2D.Dynamics.b2Fixture;
		let b2World = Box2D.Dynamics.b2World;
		let b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape;
		let body;

		(function () {

			(function b2(o) {
				for (k in o) {
					if (o.hasOwnProperty(k)) {
						if ($.isPlainObject(o[k])) {
							b2(o[k]);
						}

						else if (/^b2/.test(k)) {
							window[k] = o[k];
						}
					}
				}
			}(Box2D));

			backdrop = new b2World( // Identifies and creates the world, in our case, a background for our game
				new b2Vec2(0, 50), // This is the gravity for backdrop, which is 50/ms**2, about five times earth's gravity 
				true
			);

			// Creating Ground
			(function ($ground) {
				// Applying physics to ground
				physics = new b2FixtureDef;
				physics.density = 2;
				physics.friction = 2;
				physics.restitution = 0;// 0 value because don't want it to react with other shapes or else bouncy AKA elasticity

				// Setting shape
				physics.shape = new b2PolygonShape;
				physics.shape.SetAsBox(
					$ground.outerWidth() / 2 / scale,
					$ground.outerHeight() / 2 / scale
				);

				// Creating shape
				where = new b2BodyDef;
				where.type = b2Body.b2_staticBody;// Static body is fixed object, but it stills obeys physics
				where.position.x = ($ground.offset().left + $ground.outerWidth() / 2) / scale;// Ground will be positioned depending on where it is in the page 
				where.position.y = ($ground.offset().top + $ground.outerHeight() / 2) / scale;// Using CSS elements

				// Forming body and physics when they are generated
				body = backdrop.CreateBody(where);
				body.CreateFixture(physics);
				$ground.data('body', body);
			}($('.ground')));

			// Identifying and applying physics to div element AKA the word block
			$('.dawd').each(function (i, el) {
				let $dawd = $(el);

				physics = new b2FixtureDef;
				physics.density = 0;// 0 value because it gives it weight, which makes the blocks easier to collapse when dropped into game
				physics.friction = 2;
				physics.restitution = 0;// 0 value because don't want it to react with other shapes or else bouncy AKA elasticity

				// Setting shape
				physics.shape = new b2PolygonShape;
				physics.shape.SetAsBox(
					$dawd.outerWidth() / 2 / scale,
					$dawd.outerHeight() / 2 / scale
				);

				// Creating shape
				where = new b2BodyDef;
				where.type = b2Body.b2_dynamicBody;// Dynamic body obeys physics
				where.position.x = ($dawd.offset().left + $dawd.outerWidth() / 2) / scale;
				where.position.y = ($dawd.offset().top + $dawd.outerHeight() / 2) / scale;

				// Forming body and physics when they are generated
				body = backdrop.CreateBody(where);
				body.CreateFixture(physics);
				$dawd.data('body', body);
			});

			// Maintaing physics
			(function () {
				let dt = 30;

				new Loop(function () {
					backdrop.Step(
						1 / dt, // Frame-rate
						5, // Velocity
						2 // # of positions to set
					);

				}, 1000 / dt).start();
			}());

			// Original Coordinates Tracker
			(function () {
				let $entities = $('.dawd');

				$entities.each(function (i, el) {
					let $el = $(el);
					$el.data('origPos', {
						left: $el.offset().left,
						top: $el.offset().top,
						width: $el.outerWidth(),
						height: $el.outerHeight()
					});
				});

				// Start of a loop
				new Loop(function () {

					// Positioning
					let i = $entities.length

					while (i--) {
						(function () {
							let entity = $entities[i];
							let $entity = $(entity);
							body = $entity.data('body');
							let pos = body.GetPosition();
							let ang = body.GetAngle() * 180 / Math.PI;
							let origPos = $entity.data('origPos')

							// This tracks the movement of the blocks, including any rotations
							$entity.css('transform', 'translate3d(' + ~~(pos.x * scale - origPos.left - origPos.width / 2) + 'px, ' + ~~(pos.y * scale - origPos.top - origPos.height / 2) + 'px, 0) rotate3d(0,0,1,' + ~~ang + 'deg)');
						}());
					}
				}).start();
			}());

		}(Box2D));
	}
});