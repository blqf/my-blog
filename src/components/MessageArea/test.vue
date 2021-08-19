<template>
  <div class="test-container">
    <MessageArea title="评论列表" :commentInfo="data" @submit="handleSubmit" />
  </div>
</template>

<script>
import MessageArea from "./index";
export default {
  components: {
    MessageArea,
  },
  data() {
    return {
      data: {
        total: 75,
        rows: [
          {
            id: "6ece8D3f-Ca7a-9E4D-9dCB-E2f82ABDc7E6",
            nickname: "邱娜",
            content:
              "义查全五我快高名来日本交半听龙。调制被精严产观深按明件始队头。与或世斯无层总用平却问反十却京。或采完方现安步门想声县题生确干回。道何的持共马育众分百圆观济群。",
            blog: {
              id: "6D2F6eD4-3AB6-D776-1bf9-DbE2c9e17429",
              title: "斗已增指约影",
            },
            createDate: 1620111676990,
            atatar:
              "https://ae01.alicdn.com/kf/H4cd9945926d144a68f11d28f6544534e8.jpg",
          },
          {
            id: "AbB1aC93-9DD1-E175-D7ef-11C32eC58522",
            nickname: "龚刚",
            content:
              "易理满例系西号很两家当世求地。式这么特应关济油做府气往选身报关。例加石九局复参写即花实向。红八风支种且在合四风何自流查道。",
            blog: {
              id: "1c1fEF27-4D1C-f84C-5964-9c156b4EBF89",
              title: "受层机委",
            },
            createDate: 1620117676960,
            atatar:
              "https://ae01.alicdn.com/kf/H836376a811aa4007a332f1be1c1da9d0S.jpg",
          },
          {
            id: "Edb8A9dC-93e9-c55c-1f2f-4efdBd89e4CD",
            nickname: "陈敏",
            content:
              "后两知国派亲队子也行己商电。体命指党门这七消王任还和。区等比近太证龙矿五代技然他。海或第西便规八转验育进节内些边省史。",
            blog: {
              id: "EE76d92d-Cebe-6AD8-97d8-e38ea33C6c5F",
              title: "人的展九",
            },
            createDate: 1620117676960,
            atatar:
              "https://ae01.alicdn.com/kf/Haf82117a9d6a457ea32db037635a9158q.jpg",
          },
          {
            id: "fCA2B51D-7691-ce4d-D3bf-21a7d4E9Ef4f",
            nickname: "邵霞",
            content:
              "干严人成政易将采细没状治没分复般斯。要林参立图选般线民素效具阶。质便五不调重保标般才当何四。",
            blog: {
              id: "38C89BCb-eb62-029e-a15c-e83d8cA813dC",
              title: "能必今及带",
            },
            createDate: 1620117676960,
            atatar:
              "https://ae01.alicdn.com/kf/Haf82117a9d6a457ea32db037635a9158q.jpg",
          },
          {
            id: "caf41DfF-3dBE-808E-d624-3289485D8b4d",
            nickname: "李秀英",
            content:
              "矿七之花布北商于因包使第。她角北布政建量书口发亲发来亲确品。深器低干主风数元所给红件。有样王也步养备且采每她声斯。",
            blog: {
              id: "E19bE3Ef-Ee7D-0dA0-44A4-8CC7BBEc3D59",
              title: "又持走关报效",
            },
            createDate: 1620117676960,
            atatar:
              "https://ae01.alicdn.com/kf/H6176ad0b50424011aa3ecd4fea16694fZ.jpg",
          },
          {
            id: "651cb6C1-DFf3-c2FE-1ECf-ce1e9bcF2622",
            nickname: "黎娟",
            content:
              "称铁术西代与京改列制确这化省须科此合。越属无议如便价听布无里长气法接。",
            blog: {
              id: "95767A4b-6e2e-D8b9-55Cb-4FCdCa8b9176",
              title: "得流林证队将",
            },
            createDate: 1620117676960,
            atatar:
              "https://ae01.alicdn.com/kf/Hdcdb50046da943ff947555e453b16b76X.jpg",
          },
          {
            id: "1fAA3651-F4EB-90BF-bADe-bf2B7673dccc",
            nickname: "朱涛",
            content:
              "光开特周物却求展常易光花斗应识消。治如两风儿理老织放好战交商学律率把。式开议速织回专式会或员此响建火按。九产温身美第实青把军根以以积经。",
            blog: {
              id: "B8eB40c6-Ba6D-E5d6-eE11-cd3656f2Feec",
              title: "反如心身明经",
            },
            createDate: 1620117676960,
            atatar:
              "https://ae01.alicdn.com/kf/Hcfa147ac0dea458ab352957159043359o.jpg",
          },
          {
            id: "3FC9c43f-a0d9-446D-6353-755C1d6994fB",
            nickname: "傅敏",
            content:
              "队采步样关般于积时经备几色先是长。人任断律们实百达在声资号间物。难始然列风马理本切好安离共通。变时情来大务调须许天把品列件角。调区际连叫上认方代学回日报相住教周门。",
            blog: {
              id: "EF9fFdAe-c1eD-6cCE-B93d-BFfeEe585CcF",
              title: "其同保必准小",
            },
            createDate: 1620117676960,
            atatar:
              "https://ae01.alicdn.com/kf/H511268a49c104a7dad8d8c3cad977cff6.jpg",
          },
          {
            id: "1b7c7B7A-1D55-6c6f-46e5-243BDCC9D25C",
            nickname: "余磊",
            content:
              "老其义交技则局年道张张离务东老题。各际可主却当集先完再已任交。造型感会去京结主品直其要千多农代。速委厂运县计厂便到号土主事它青。",
            blog: {
              id: "dde756BA-FDA8-cb97-8Deb-f753E3fC151f",
              title: "军消进非此",
            },
            createDate: 1620117676960,
            atatar:
              "https://ae01.alicdn.com/kf/H6176ad0b50424011aa3ecd4fea16694fZ.jpg",
          },
          {
            id: "C2B11a7d-71f0-3CA6-185F-229EEA00C174",
            nickname: "姚超",
            content:
              "到南月中之般却她认开率点界很马厂标。适中提气物斯织示格眼研生算。",
            blog: {
              id: "E6c5fb2c-B027-A0Ab-7DEf-be2D43dEBD75",
              title: "天及边计机目基",
            },
            createDate: 1620117676960,
            atatar:
              "https://ae01.alicdn.com/kf/Ha5101e5e64c74a7591ba3d5f22fb1ad7K.jpg",
          },
        ],
      },
    };
  },
  methods: {
    handleSubmit(data) {
      console.log(data)
    }
  }
};
</script>

<style scoped>
.test-container {
  padding: 50px;
}
</style>