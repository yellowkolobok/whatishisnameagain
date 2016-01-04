var nameFirst =["баба", "база", "бега", "беда", "бета", "била", "биса", "бита", "блуа", "бола", "бона", "бора", "буза", "бука", "буна", "бура", "буса", "буча", "бяка", "байка", "бакча", "балда", "балка", "банда", "банка", "барда", "баржа", "барка", "баска", "басма", "баста", "бахча", "башка", "бедра", "бейка", "белка", "белла", "берма", "берта", "биота", "биржа", "бирка", "бирма", "бисса", "битва", "битка", "блоха", "блуза", "бляха", "бобра", "божба", "бойга", "бойка", "бомба", "бонза", "бонна", "ботва", "бочка", "брага", "брада", "брама", "браса", "брыла", "бубна", "бугра", "будда", "будка", "будра", "буйка", "буква", "букса", "булга", "булка", "булла", "бурда", "бурка", "бурса", "бурча", "бутса", "бухта", "бюкса", "бяшка"];
var nameSecond =["бак", "бек", "бок", "бук", "бык", "бах", "бух", "вех", "дох", "дух", "дых", "жох", "жух", "лох", "лях", "мах", "мех", "мох", "них", "нюх", "пах", "пух", "пых", "сах", "сих", "сох", "тех", "тух", "цех", "чах", "чех", "чих", "чох", "чух", "шах", "бич", "вич", "зач", "кеч", "кич", "коч", "луч", "меч", "мяч", "нач", "поч", "соч", "сыч", "теч", "туч"];
var surnameFirst =["балкер", "бампер", "бартер", "барьер", "башнер", "бербер", "бестер", "бойлер", "боксер", "бракер", "бретер", "бридер", "брокер", "брудер", "брюмер", "буккер", "бункер", "бустер", "бюргер", "вагнер", "ваучер", "вахтер", "винтер", "виппер", "вольер", "востер", "гейгер", "гейзер", "геллер", "геттер", "гитлер", "глезер", "гравер", "гример", "гунтер", "денвер", "джокер", "диггер", "диптер", "доплер", "драгер", "дублер", "думпер", "жестер", "жиклер", "жолнер", "жостер", "зенкер", "зуммер", "кайзер", "канцер", "каптер", "картер", "карцер", "карьер", "каупер", "квакер", "кейпер", "кеплер", "кернер", "киллер", "клакер", "клевер", "клепер", "кливер", "клипер", "корнер", "костер", "коттер", "коупер", "кратер", "крекер", "крешер", "куафер", "курьер", "куттер", "лайнер", "лейнер", "лестер", "линтер", "лифтер", "лихтер", "логгер", "ломбер", "маклер", "маркер", "мастер", "маузер", "меггер", "миксер", "микшер", "мистер", "монтер", "офицер", "партер", "паупер", "пиккер", "пинчер", "пионер", "планер", "плейер", "подпер", "подтер", "понтер", "портер", "постер", "призер", "пример", "припер", "притер", "промер", "протер", "пфефер", "размер", "распер", "растер", "рейбер", "рейдер", "рейтер", "роббер", "роджер", "ролкер", "роллер", "сардер", "свитер", "сейнер", "секлер", "сервер", "сестер", "сеттер", "сканер", "скутер", "спикер", "стажер", "стайер", "стакер", "стимер", "стокер", "суфлер", "таймер", "танжер", "танкер", "тендер", "терьер", "тессер", "тестер", "тиккер", "торшер", "тостер", "тралер", "тревер", "тренер", "трувер", "ухажер", "фарсер", "фермер", "филлер", "фильер", "фланер", "флюгер", "фразер", "фрайер", "фрезер", "фризер", "фример", "фурьер", "хоппер", "цербер", "чартер", "чеддер", "честер", "шалбер", "шалнер", "шахтер", "шкипер", "шликер", "шлягер", "шпалер", "шредер", "штекер", "штуцер", "шустер"];
var surnameSecond = ["бич", "вич", "луч", "меч", "мяч", "сыч", "кетч", "китч", "кэтч", "матч", "путч", "скетч", "скотч", "бенч", "врач", "ганч", "грач", "греч", "драч", "знач", "карч", "кекч", "кетч", "китч", "клич", "ключ", "кэтч", "ленч", "лэнч", "матч", "науч", "неуч", "омач", "ороч", "отеч", "перч", "плач", "плеч", "прич", "проч", "путч", "рвач", "сныч", "спич", "ткач", "харч", "хрыч"];

function capit(str) 
{
    var first = str.substr(0,1).toUpperCase();
    return first + str.substr(1);
}

//var name = capit(nameFirst[Math.floor(nameFirst.length*Math.random())]+nameSecond[Math.floor(nameSecond.length*Math.random())]);
//var surname = capit(surnameFirst[Math.floor(surnameFirst.length*Math.random())]+surnameSecond[Math.floor(surnameSecond.length*Math.random())]);

function strangeName(){
    var name = capit(nameFirst[Math.floor(nameFirst.length*Math.random())]+nameSecond[Math.floor(nameSecond.length*Math.random())]);
    var surname = capit(surnameFirst[Math.floor(surnameFirst.length*Math.random())]+surnameSecond[Math.floor(surnameSecond.length*Math.random())]);
    document.getElementById('inputGen').innerHTML = "And his name is: " + "<b>" + name + " " + surname + "</b>";
};

document.getElementById('inputBtn').onclick = strangeName;
