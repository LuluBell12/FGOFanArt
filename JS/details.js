const images = [
  'cards/達文西_愚者_黎希.png',
  'cards/托內莉可_魔術師_LuluBell.png',
  'cards/瓊安_女祭司_程.png',
  'cards/DATA LOST.png',
  'cards/吉爾伽美什-國王-毛毛羽.png',
  'cards/山之翁_教皇_竹二.PNG',
  'cards/齊格飛克林姆西爾德_戀人_殷瑩士.png',
  'cards/DATA LOST.png',
  'cards/童謠_力量_餅.png',
  'cards/壹与_隱修者_ZAO.jpg',
  'cards/摩根＿命運之輪 零肆.PNG',
  'cards/DATA LOST.png',
  'cards/莫札特_倒吊者_veno chen.jpg',
  'cards/艾蕾什基伽尔_死亡_南宮明樂.jpg',
  'cards/恩奇都_節制_木木.png',
  'cards/蘆屋道滿Alterego_惡魔_栩栩.png',
  'cards/梅林_塔_厚.png',
  'cards/Caster Artoria_星星_七瀨藍.png',
  'cards/薩里耶利_月亮_veno chen.jpg',
  'cards/貝德維爾_太陽_若艾.png',
  'cards/煙霧鏡_審判_艾拉.png',
  'cards/阿周那Alter_世界_樹上青鳥.png',
  'cards/貞德Alter (Avenger)_權杖一_平原.png',
  'cards/織田信長_權杖騎士_四月春.png',
  'cards/恐龍王_權杖國王_艾拉.png',
  'cards/Meltryllis_聖杯ACE_小落.png',
  'cards/阿比蓋爾_聖杯八_車厘子.jpg',
  'cards/阿爾托利亞(saber)_寶劍王牌_四月春.png',
  'cards/DATA LOST.png',
  'cards/光之高揚斯卡婭_錢幣王牌_黎希.png',
  'cards/錢幣五-藤丸立香(男女)-徹楓.png',
  'cards/奧柏隆_錢幣九_黎希.png',
  'cards/所羅門 錢幣十 千賀.png',
];

const infoData = [
  { mainTitle: '0<br>愚者The Fool', subTitle: '李奧納多‧達‧文西', message: 'ILLUST:黎希<br>FB:<a href="https://www.facebook.com/share/xUbb5QuivJj7jz4E/" target="_blank">黎希</a><br>Twitter:@lixiXDDD' },
  { mainTitle: 'I<br>魔術師The Magician', subTitle: '托內莉可', message: 'ILLUST:LuluBell<br>FB:<a href="https://www.facebook.com/profile.php?id=100012230769425&mibextid=ZbWKwL" target="_blank">LuluBell</a><br>Twitter:@_lulululu__bell' },
  { mainTitle: 'II<br>女教皇The High Priestess', subTitle: '瓊安', message: 'ILLUST:程<br>FB:<a href="https://www.facebook.com/profile.php?id=100034119003306&mibextid=LQQJ4d" target="_blank">程小程</a><br>Twitter:@Oaixab3' },
  { mainTitle: 'III<br>皇后The Empress', subTitle: 'Undefined', message: 'ILLUST:<br>FB:<a href="https://example.com" target="_blank"></a>' },
  { mainTitle: 'IV<br>國王The Emperor', subTitle: '吉爾伽美什', message: 'ILLUST:毛毛羽<br>FB:<a href="https://www.facebook.com/profile.php?id=100068437547521&mibextid=LQQJ4d" target="_blank">毛毛羽</a>' },
  { mainTitle: 'V<br>教皇The Hierophant', subTitle: '山之翁', message: 'ILLUST:竹二<br>FB:<a href="https://www.facebook.com/profile.php?id=100010624503028&mibextid=JRoKGi" target="_blank">竹二</a><br>Twitter:@AAAZIK_BAMF' },
  { mainTitle: 'VI<br>戀人The Lovers', subTitle: '齊格飛&克琳姆希爾德', message: 'ILLUST:殷瑩士<br>FB:<a href="https://www.facebook.com/profile.php?id=100087317319901" target="_blank">殷瑩士</a><br>Twitter:@pon20030406' },
  { mainTitle: 'VII<br>戰車The Chariot', subTitle: 'Undefined', message: 'ILLUST:<br>FB:<a href="https://example.com" target="_blank"></a>' },
  { mainTitle: 'VIII<br>力量Strength', subTitle: '童謠', message: 'ILLUST:餅<br>FB:<a href="https://www.facebook.com/tonako.momori?mibextid=dGKdO6" target="_blank">Tonako Momori</a><br>Twitter:@mr_biscuit0116' },
  { mainTitle: 'IX<br>隱者The Hermit', subTitle: '壹與', message: 'ILLUST:ZAO<br>FB:<a href="https://www.facebook.com/profile.php?id=100007448954846&mibextid=ZbWKwL" target="_blank">Jin Zao Cheng</a>' },
  { mainTitle: 'X<br>命運之輪The Wheel of Fortune', subTitle: '摩根', message: 'ILLUST:零肆<br>FB:<a href="https://www.facebook.com/profile.php?id=100050535482562" target="_blank">リタ様のもっふん</a><br>Twitter:@04zero_four' },
  { mainTitle: 'XI<br>正義The Justice', subTitle: 'Undefined', message: 'ILLUST:<br>FB:<a href="https://example.com" target="_blank"></a>' },
  { mainTitle: 'XII<br>倒吊人The Hanged Man', subTitle: '沃夫岡‧阿瑪迪斯‧莫札特', message: 'ILLUST:Veno Chen<br>FB:<a href="https://www.facebook.com/profile.php?id=100083681565224&mibextid=LQQJ4d" target="_blank">Veno Chen</a>' },
  { mainTitle: 'XIII<br>死亡Death', subTitle: '埃列什基伽勒', message: 'ILLUST:明樂<br>FB:<a href="https://example.com" target="_blank">臉書名</a>' },
  { mainTitle: 'XIV<br>節制Temperance', subTitle: '恩奇都', message: 'ILLUST:木木<br>FB:<a href="https://www.facebook.com/profile.php?id=100007650701127" target="_blank">もく 木木 </a><br>Twitter:@3_Orangeeee' },
  { mainTitle: 'XV<br>惡魔The Devil', subTitle: '蘆屋道滿', message: 'ILLUST:栩栩<br>FB:<a href="https://www.facebook.com/xu.yin.946" target="_blank">栩栩如生</a><br>Twitter:@kunugi001234' },
  { mainTitle: 'XVI<br>高塔The Tower', subTitle: '梅林', message: 'ILLUST:厚<br>FB:<a href="https://www.facebook.com/profile.php?id=100003473371235" target="_blank">厚</a><br>Twitter:@klj_sh' },
  { mainTitle: 'XVII<br>星星The Star', subTitle: '阿爾托莉雅‧Caster', message: 'ILLUST:七瀨藍<br>FB:<a href="http://www.facebook.com/chonoran" target="_blank">Ai Nanase</a><br>Twitter:@naganoaoi' },
  { mainTitle: 'XVIII<br>月亮The Moon', subTitle: '安東尼奧‧薩里耶利', message: 'ILLUST:Veno chen<br>FB:<a href="https://www.facebook.com/profile.php?id=100083681565224&mibextid=LQQJ4d" target="_blank">Veno Chen</a>' },
  { mainTitle: 'XIX<br>太陽The Sun', subTitle: '貝德維爾', message: 'ILLUST:若艾<br>FB:<a href="https://www.facebook.com/profile.php?id=100087956006434&mibextid=ZbWKwL" target="_blank">盧艾</a><br>Twitter:@norai0813' },
  { mainTitle: 'XX<br>審判Judgement', subTitle: '特斯卡特利波卡', message: 'ILLUST:艾拉<br>FB:<a href="https://www.facebook.com/profile.php?id=100038906257198&mibextid=ZbWKwL" target="_blank">マンドリカリドの木の剣</a><br>Twitter:@Ella79840488' },
  { mainTitle: 'XXI<br>世界The World', subTitle: '阿周那(Alter)', message: 'ILLUST:樹上青鳥<br>FB:<a href="https://www.facebook.com/qingniao413" target="_blank">樹上青鳥</a><br>Twitter:@__qingniao413' },
  { mainTitle: 'Ace of Wands', subTitle: '貞德(Alter)', message: 'ILLUST:平原<br>FB:<a href="https://www.facebook.com/profile.php?id=100094274112428" target="_blank">マグ メル</a><br>Twitter:@garanheigen' },
  { mainTitle: 'Knihgt of Wands', subTitle: '織田信長', message: 'ILLUST:四月春<br>FB:<a href="https://www.facebook.com/profile.php?id=100075606370874" target="_blank">四月春</a><br>Twitter:@siyue_chun' },
  { mainTitle: 'King of Wands', subTitle: '恐龍王', message: 'ILLUST:艾拉<br>FB:<a href="https://www.facebook.com/profile.php?id=100038906257198&mibextid=ZbWKwL" target="_blank">マンドリカリドの木の剣</a><br>Twitter:@Ella79840488' },
  { mainTitle: 'Ace of Cups', subTitle: 'Meltryllis', message: 'ILLUST:小落<br>FB:<a href="https://www.facebook.com/Charlotte0401?mibextid=ZbWKwL" target="_blank">Charlotte Huang</a>' },
  { mainTitle: 'Eight of Cups', subTitle: '阿比蓋兒', message: 'ILLUST:車厘子<br>FB:<a href="https://www.facebook.com/profile.php?id=100060792966035" target="_blank">水果賢者</a><br>Twitter:@_w0130_' },
  { mainTitle: 'Ace of Swords', subTitle: '阿爾托莉亞‧潘德拉剛', message: 'ILLUST:四月春<br>FB:<a href="https://www.facebook.com/profile.php?id=100075606370874" target="_blank">四月春</a><br>Twitter:@siyue_chun' },
  { mainTitle: 'Knight of Swords', subTitle: 'Undefined', message: 'ILLUST:<br>FB:<a href="https://example.com" target="_blank"></a>' },
  { mainTitle: 'Ace of Pentacles', subTitle: '光之高揚斯卡婭', message: 'ILLUST:黎希<br>FB:<a href="https://www.facebook.com/share/xUbb5QuivJj7jz4E/" target="_blank">黎希</a><br>Twitter:@lixiXDDD' },
  { mainTitle: 'Five of Pentacles', subTitle: '藤丸立香', message: 'ILLUST:徹楓<br>FB:<a href="https://www.facebook.com/profile.php?id=61554357616710" target="_blank">Df Fogg</a><br>Twitter:@coco6210151' },
  { mainTitle: 'Nine of Pentacles', subTitle: '奧伯隆', message: 'ILLUST:黎希<br>FB:<a href="https://www.facebook.com/share/xUbb5QuivJj7jz4E/" target="_blank">黎希</a><br>Twitter:@lixiXDDD' },
  { mainTitle: 'Ten of Pentacles', subTitle: '所羅門', message: 'ILLUST:千賀<br>FB:<a href="https://www.facebook.com/senga1227" target="_blank">千賀</a><br>Twitter:@sengart_1227' },
];

const textContents = [
    "0<br>THE FOOL",
    "I<br>THE MAGICIAN",
    "II<br>THE HIGH PRIESTESS",
    "III<br>THE EMPRESS",
    "IV<br>THE EMPEROR",
    "V<br>THE HIEROPHANT",
    "VI<br>THE LOVERS",
    "VII<br>THE CHARIOT",
    "VIII<br>STRENGTH",
    "IX<br>THE HANGED",
    "X<br>THE WHEEL of FORTUNE",
    "XI<br>THE JUSTICE",
    "XII<br>THE HANGED MAN",
    "XIII<br>DEATH",
    "XIV<br>THE TEMPERANCE",
    "XV<br>THE DEVIL",
    "XVI<br>THE TOWER",
    "XVII<br>THE STAR",
    "XVIII<br>THE MOON",
    "XIX<br>THE SUN",
    "XX<br>JUDGEMENT",
    "XXI<br>THE WORLD",
    "ACE of WANDS",
    "KNIGHT of WANDS",
    "KING of WANDS",
    "ACE of CUPS",
    "EIGHT of CUPS",
    "ACE of SWORDS",
    "KNIGHT of SWORDS",
    "ACE of PENTACLES",
    "FIVE of PENTACLES",
    "NINE of PENTACLES",
    "TEN of PENTACLES",
  ];

const queryParams = new URLSearchParams(window.location.search);
let index = parseInt(queryParams.get('index'));

const detailImage = document.getElementById('detail-image');
const mainTitle = document.getElementById('main-title');
const subTitle = document.getElementById('sub-title');
const detailMessage = document.getElementById('detail-message');
const imageTextOverlay = document.getElementById('image-text-overlay');

function loadDetail() {

  detailImage.src = images[index];
  mainTitle.innerHTML = infoData[index].mainTitle;
  subTitle.innerHTML = infoData[index].subTitle;
  detailMessage.innerHTML = infoData[index].message;
  imageTextOverlay.querySelector("p").innerHTML = textContents[index];
}

function toggleText() {
  imageTextOverlay.classList.toggle('hidden');
}

function goToNextImage() {
  index = (index + 1) % images.length;
  loadDetail();
}

function goToPreviousImage() {
  index = (index - 1 + images.length) % images.length;
  loadDetail();
}

loadDetail();
