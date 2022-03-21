const plants = [
  {
    id: 1,
    sort: "🌼",
    name: "브룬펠시아",
    type: "가지과",
    eng: "Brunfelsia species",
  },

  {
    id: 2,
    sort: "🌼",
    name: "국화",
    type: "국화과",
    eng: "Chrysanthemum spp",
  },

  {
    id: 3,
    sort: "🌼",
    name: "데이지",
    type: "국화과",
    eng: "Chrysanthemum species",
  },
  {
    id: 4,
    sort: "🌼",
    name: "수국",
    type: "국화과",
    eng: "Hydrangea arborescens",
  },

  {
    id: 5,
    sort: "🌼",
    name: "카모마일",
    type: "국화과",
    eng: "Anthemis nobilis",
  },
  {
    id: 6,
    sort: "🌼",
    name: " 라벤더",
    type: "꿀풀과",
    eng: "Lavendula angustifolia",
  },
  {
    id: 7,
    sort: "🌼",
    name: "칼랑코에",
    type: "돌나물과",
    eng: "Kalanchoe spp",
  },
  {
    id: 8,
    sort: "🌼",
    name: "란타나",
    type: "마편초과",
    eng: "Lantana camara",
  },
  {
    id: 9,
    sort: "🌼",
    name: "나팔꽃",
    type: "메꽃과",
    eng: "Ipomoea spp",
  },
  {
    id: 10,
    sort: "🌼",
    name: "델리피움",
    type: "미나리아재비과",
    eng: "Delphinium species",
  },
  {
    id: 11,
    sort: "🌼",
    name: "작약",
    type: "미나리아재비과",
    eng: "Paeonis officinalis",
  },
  {
    id: 12,
    sort: "🌼",
    name: "크레마치스",
    type: "미나리아재비과",
    eng: "Clematis sp",
  },
  {
    id: 13,
    sort: "🌼",
    name: "크리스마스 로즈",
    type: "미나리아재비과",
    eng: "Helleborus niger",
  },
  {
    id: 14,
    sort: "🌼",
    name: "은방울꽃",
    type: "백합과",
    eng: "Convallaria majalis",
  },
  {
    id: 15,
    sort: "🌼",
    name: "크로커스 (사프란)",
    type: "백합과",
    eng: "Colchicum autumnale",
  },
  {
    id: 16,
    sort: "🌼",
    name: "튤립",
    type: "백합과",
    eng: "Tulipa spp",
  },

  {
    id: 17,
    sort: "🌼",
    name: "히야신스",
    type: "백합과",
    eng: "Hyacinthus orientalis",
  },

  {
    id: 18,
    sort: "🌼",
    name: "베고니아",
    type: "베고니아과",
    eng: "Begonia semperflorens cultivar",
  },

  {
    id: 19,
    sort: "🌼",
    name: "글라디올리스 (글라디올러스)",
    type: "붓꽃과",
    eng: "Gladiolus species",
  },

  {
    id: 20,
    sort: "🌼",
    name: "붓꽃 (아이리스)",
    type: "붓꽃과",
    eng: "Iris species",
  },

  {
    id: 21,
    sort: "🌼",
    name: "카네이션",
    type: "석죽과",
    eng: "Dianthus caryophyllus",
  },

  {
    id: 22,
    sort: "🌼",
    name: "채송화",
    type: "쇠비름과",
    eng: "Portulaca oleracea",
  },

  {
    id: 23,
    sort: "🌼",
    name: "수선화",
    type: "수선과",
    eng: "Narcissus spp",
  },

  {
    id: 24,
    sort: "🌼",
    name: "아마릴리스",
    type: "수선과",
    eng: "Amaryllis spp",
  },

  {
    id: 25,
    sort: "🌼",
    name: "시클라멘",
    type: "앵초과",
    eng: "Cyclamen spp",
  },

  {
    id: 26,
    sort: "🌼",
    name: "프리뮬러",
    type: "앵초과",
    eng: "Primula vulgaris",
  },

  {
    id: 27,
    sort: "🌼",
    name: "금낭화",
    type: "양귀비과",
    eng: "Dicentra spectabilis",
  },

  {
    id: 28,
    sort: "🌼",
    name: "양귀비",
    type: "양귀비과",
    eng: "Papaver somniferum",
  },

  {
    id: 29,
    sort: "🌼",
    name: "가드니아 (치자)",
    type: "장미과",
    eng: "Gardenia jasminoides",
  },

  {
    id: 30,
    sort: "🌼",
    name: "제라늄",
    type: "쥐손이풀과",
    eng: "Pelargonium species",
  },

  {
    id: 31,
    sort: "🌼",
    name: "진달래",
    type: "진달래과",
    eng: "Rhododendron spp",
  },
  {
    id: 32,
    sort: "🌼",
    name: "철죽",
    type: "진달래과",
    eng: "Rhododendron spp",
  },

  {
    id: 33,
    sort: "🌼",
    name: "카라 (칼라)",
    type: "천남성과",
    eng: "Zantedeschia aethiopica",
  },

  {
    id: 34,
    sort: "🌼",
    name: "디기탈리스 (폭스글러브)",
    type: "현삼과",
    eng: "Digitalis purpurea",
  },

  {
    id: 35,
    sort: "🌼",
    name: "페리윙클 (일일초)",
    type: "협죽도과",
    eng: "Vinca rosea",
  },

  {
    id: 36,
    sort: "🌼",
    name: "협죽도",
    type: "협죽도과",
    eng: "Nerium oleander",
  },

  {
    id: 37,
    sort: "🌳",
    name: "개운죽 (산데리아나 골드)",
    type: "",
    eng: "Dracaena sanderiana 'Virens'",
  },

  {
    id: 38,
    sort: "🌳",
    name: "고무나무",
    type: "",
    eng: "Ficus sp.",
  },

  {
    id: 39,
    sort: "🌳",
    name: "극락조화",
    type: "",
    eng: "Strelitzia reginae",
  },

  {
    id: 40,
    sort: "🌳",
    name: "나한송",
    type: "",
    eng: "Podocarpus macrophylla",
  },

  {
    id: 41,
    sort: "🌳",
    name: "남천 나무",
    type: "",
    eng: "Nandina domestica",
  },

  {
    id: 42,
    sort: "🌳",
    name: "담쟁이 덩쿨(아이비)",
    type: "",
    eng: "Hedera helix",
  },

  {
    id: 43,
    sort: "🌳",
    name: "드라세나(행운목)",
    type: "",
    eng: "Dracaena fragrans",
  },

  {
    id: 44,
    sort: "🌳",
    name: "등나무",
    type: "",
    eng: "Wisteria spp.",
  },

  {
    id: 45,
    sort: "🌳",
    name: "디펜바키아",
    type: "",
    eng: "Dieffenbachia",
  },

  {
    id: 46,
    sort: "🌳",
    name: "몬스테라(필로덴드론)",
    type: "",
    eng: "공기정화식물 Monstera deliciosa",
  },

  {
    id: 47,
    sort: "🌳",
    name: "벚나무",
    type: "줄기, 잎, 씨앗에 독성이 있음",
    eng: "Prunus serrulata",
  },

  {
    id: 48,
    sort: "🌳",
    name: "벤자민",
    type: "",
    eng: "Ficus benjamina",
  },

  {
    id: 49,
    sort: "🌳",
    name: "벨라도나",
    type: "",
    eng: "Atropa belladonna",
  },

  {
    id: 50,
    sort: "🌳",
    name: "산세베리아",
    type: "공기정화식물",
    eng: "Sansevieria trifasciata",
  },

  {
    id: 51,
    sort: "🌳",
    name: "살구나무",
    type: "줄기, 잎, 씨앗에 독성이 있음",
    eng: "Prunus armeniaca",
  },

  {
    id: 52,
    sort: "🌳",
    name: "소철",
    type: "",
    eng: "Cycas and Zamia species",
  },

  {
    id: 53,
    sort: "🌳",
    name: "쉐플레라 (홍콩야자)",
    type: "공기정화식물",
    eng: "Schefflera or Brassia actinoplylla",
  },

  {
    id: 54,
    sort: "🌳",
    name: "스타티필룸",
    type: "",
    eng: "Spathiphyllum",
  },

  {
    id: 55,
    sort: "🌳",
    name: "싱고니움",
    type: "공기정화식물",
    eng: "Syngonium podophyllum",
  },

  {
    id: 56,
    sort: "🌳",
    name: "아글라오네마",
    type: "공기정화식물",
    eng: "Aglaonema modestum",
  },

  {
    id: 57,
    sort: "🌳",
    name: "안스리움",
    type: "공기정화식물",
    eng: "scherzeranum",
  },

  {
    id: 58,
    sort: "🌳",
    name: "연필선인장",
    type: "다육식물",
    eng: "Euphorbia tirucalli",
  },

  {
    id: 59,
    sort: "🌳",
    name: "염자",
    type: "다육식물",
    eng: "Crassula arborescens",
  },

  {
    id: 60,
    sort: "🌳",
    name: "옥천앵두",
    type: "",
    eng: "Solanum pseudocapsicum",
  },

  {
    id: 61,
    sort: "🌳",
    name: "와네키(콤팩타)",
    type: "공기정화식물",
    eng: "Dracaena deremensis",
  },

  {
    id: 62,
    sort: "🌳",
    name: "용혈수",
    type: "",
    eng: "Dracaena spp.",
  },

  {
    id: 63,
    sort: "🌳",
    name: "유카",
    type: "공기정화식물",
    eng: "Yucca spp.",
  },

  {
    id: 64,
    sort: "🌳",
    name: "유칼립투스",
    type: "공기정화식물",
    eng: "Yucca spp.",
  },

  {
    id: 65,
    sort: "🌳",
    name: "주목",
    type: "",
    eng: "Podocarpus macrophylla",
  },

  {
    id: 66,
    sort: "🌳",
    name: "천리향(서향나무)",
    type: "",
    eng: "Daphne odora",
  },

  {
    id: 67,
    sort: "🌳",
    name: "칼라듐",
    type: "",
    eng: "Caladium hortulanum",
  },

  {
    id: 68,
    sort: "🌳",
    name: "크라슐라",
    type: "다육식물",
    eng: "Crassula argentea",
  },

  {
    id: 69,
    sort: "🌳",
    name: "토끼풀",
    type: "",
    eng: "Oxalis spp.",
  },

  {
    id: 70,
    sort: "🌳",
    name: "포인세티아",
    type: "",
    eng: "크리스마스 식물 Euphorbia pulcherrima",
  },

  {
    id: 71,
    sort: "🌳",
    name: "포토스(스킨답서스)",
    type: "",
    eng: "공기정화식물 Epipremnum aureum",
  },

  {
    id: 72,
    sort: "🌳",
    name: "플로리다 뷰티",
    type: "",
    eng: "Dracaena surculosa",
  },

  {
    id: 73,
    sort: "🌳",
    name: "형광스킨답서스",
    type: "",
    eng: "Epipremnum aureum",
  },

  {
    id: 74,
    sort: "🌳",
    name: "호랑가시나",
    type: "",
    eng: "Ilex opaca",
  },

  {
    id: 75,
    sort: "🌳",
    name: "호스타",
    type: "",
    eng: "Hosta plataginea",
  },
  {
    id: 76,
    sort: "🌳",
    name: "회양목",
    type: "",
    eng: "Buxus spp.",
  },
  {
    id: 77,
    sort: "🌳",
    name: "은행",
    type: "섭취 시 문제",
    eng: "maidenhair tree, ginkgo",
  },
  {
    id: 78,
    sort: "🌼",
    name: "샤프란",
    type: "섭취 시 문제",
    eng: "crocus",
  },
];

const list = document.querySelector(".list");
const searchBtn = document.querySelector(".searchBtn");
const searchBar = document.querySelector(".searchBar");
const showBtn = document.querySelector(".showBtn");
const flowerBtn = document.querySelector(".flowerBtn");
const treeBtn = document.querySelector(".treeBtn");

function showList(v) {
  list.innerHTML = "";
  const res = plants.forEach((plant) => {
    const li = document.createElement("li");
    li.setAttribute("class", "element");
    if (plant.name.includes(v)) {
      li.innerHTML = `
      <p class="name">${plant.name}</p>
      <p class="type">${plant.type}</p>
      <p class="eng">${plant.eng}</p>
      <p>-</p>
      `;
    } else if (plant.sort === v) {
      li.innerHTML = `
        <p class="sort">${plant.sort}</p>
        <p class="name">${plant.name}</p>
        <p class="type">${plant.type}</p>
        <p class="eng">${plant.eng}</p>
        <p>-</p>
        `;
    }
    list.appendChild(li);
  });
}

showBtn.addEventListener("click", (event) => {
  event.preventDefault();
  showList("");
});

searchBar.addEventListener("keypress", (key) => {
  if (key.key == "Enter") {
    const v = searchBar.value;
    if (v === "") {
      alert("검색어를 입력하세요");
      list.innerHTML = "";
    } else {
      showList(v);
      searchBar.value = null;
    }
  }
});

flowerBtn.addEventListener("click", (event) => {
  event.preventDefault();
  showList(event.target.innerHTML);
  console.log(event);
});
treeBtn.addEventListener("click", (event) => {
  event.preventDefault();
  showList(event.target.innerHTML);
});
