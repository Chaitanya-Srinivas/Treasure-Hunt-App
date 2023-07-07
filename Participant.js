// const groups = require('./Per');
// console.log(groups)
const cryptoHash = require('./hashGene');
const {GENESIS_DATA} = require('./StartPoint');
const {END_DATA} = require('./EndPoint');
const {LocAQues,LocBQues,LocCQues,LocDQues,LocEQues,LocFQues,AnimeAQues,AnimeBQues,AnimeCQues,AnimeDQues,AnimeEQues,AnimeFQues} = require('./Data')
 const teams = [
    'FCBEDA', 'CEDABF', 'DFCBAE', 'EAFDCB',
  'BDAFEC', 'ABECFD', 'FEABCD', 'AECFDB',
  'DFBAEC', 'DCEFBA', 'BECDFA', 'FACEBD',
  'BADFCE', 'AEFDBC', 'FEDCAB', 'FCADBE',
  'BCFAED', 'DBFEAC', 'BDFCAE', 'AFBDCE',
  'CADEFB', 'AFEBDC', 'EDBACF', 'EBADFC',
  'BFDCEA', 'ADCBEF', 'FBEDCA', 'FADBEC',
  'EFBCAD', 'BCEDAF', 'ADBEFC', 'FDEABC',
  'ACDBFE', 'CBFADE', 'DBACEF', 'CFADEB',
  'ECABDF', 'CDEFAB', 'DABCFE', 'EABFDC',
  'ABDECF'
  ]
const fs = require('fs').promises;
// const teams = [
//     'BADEFC', 'CBEFDA',
//   'EDABCF', 'AFCDEB',
//   'DCFABE', 'FEBCAD',
//   'FCDBEA', 'EFBADC'
// ]
let participantTeam = [];
class block {
    constructor ({blockNo, prevHash, hash, LocationQues,LocationAns,AnimeQues,AnimeAns}){
        this.blockNo = blockNo;
        this.prevHash = prevHash;
        this.hash = hash;
        this.LocationQues = LocationQues;
        this.LocationAns = LocationAns;
        this.AnimeQues = AnimeQues;
        this.AnimeAns = AnimeAns;
    }
    static genesis(){
        return new this(GENESIS_DATA);
    }
    static endgenesis(){
        return new this(END_DATA);
    }
    static mineBlock({blockNo,prevBlock,LocationQues,LocationAns,AnimeQues,AnimeAns}){
        let hash;
        const prevHash = prevBlock.hash;
       hash = cryptoHash(blockNo,prevHash,LocationQues,LocationAns,AnimeQues,AnimeAns);
        return new this({
            blockNo,
            prevHash,
            hash,
            LocationQues,
            LocationAns,
            AnimeQues,
            AnimeAns
        })
    }
}
class Blockchain{
    constructor(){
        this.chain = [block.genesis()];
    }
    addBlock({blockNo,LocationQues,LocationAns,AnimeQues,AnimeAns}){
        const newBlock = block.mineBlock({
            prevBlock:this.chain[this.chain.length-1],
            blockNo:blockNo,
            LocationQues:LocationQues,
            LocationAns:LocationAns,
            AnimeQues:AnimeQues,
            AnimeAns:AnimeAns
        });
        this.chain.push(newBlock);
    }
}

for(let j= 0;j<6;j++){
    const blockchain = new Blockchain();
    
        for(let i = 0; i<6;i++){
            let blockNo =  teams[j][i];
         //    let geneNo = 5*Math.random();
         //    geneNo = Math.floor(geneNo);
           
            let LocationQues = ''
            let AnimeQues = ''
            switch(blockNo) {
             case 'A':
                  LocationQues = LocAQues[j].question;
                  LocationAns = LocAQues[j].answer;
                  AnimeQues = AnimeAQues[j].question;
                  AnimeAns = AnimeAQues[j].answer;
               break;
             case 'B':
                  LocationQues = LocBQues[j].question;
                  LocationAns = LocBQues[j].answer;
                  AnimeQues = AnimeBQues[j].question;
                  AnimeAns = AnimeBQues[j].answer;
               break;
             case 'C':
                  LocationQues = LocCQues[j].question;
                  LocationAns = LocCQues[j].answer;
                  AnimeQues = AnimeCQues[j].question;
                  AnimeAns = AnimeCQues[j].answer;
               break;
             case 'D':
                  LocationQues = LocDQues[j].question;
                  LocationAns = LocDQues[j].answer;
                  AnimeQues = AnimeDQues[j].question;
                  AnimeAns = AnimeDQues[j].answer;
               break;
             case 'E':
                  LocationQues = LocEQues[j].question;
                  LocationAns = LocEQues[j].answer;
                  AnimeQues = AnimeEQues[j].question;
                  AnimeAns = AnimeEQues[j].answer;
               break;
             case 'F':
                  LocationQues = LocFQues[j].question;
                  LocationAns = LocFQues[j].answer;
                  AnimeQues = AnimeFQues[j].question;
                  AnimeAns = AnimeFQues[j].answer;
               break;  
             default:
               // code block
           }
            blockchain.addBlock({blockNo:blockNo,
             LocationQues:LocationQues,
             LocationAns:LocationAns,
             AnimeQues:AnimeQues,
             AnimeAns:AnimeAns});
            }
            blockchain.chain.push(block.endgenesis());
    
    
    participantTeam.push(blockchain.chain);
}


// console.log(blockchain.chain[1].AnimeAns);


console.log(participantTeam.length);

const checkcommonelements = (no) => {
    let same = [];

    let qw=0;
    while(qw<no){
        let count=0;
        for(let r=1;r<=6;r++){
            for(let p=1;p<=6;p++){
                if(participantTeam[no][r].blockNo==participantTeam[qw][p].blockNo){
                        if(participantTeam[no][r].LocationQues==participantTeam[qw][p].LocationQues){
                            count++;
                        }
                }
            }
        }
        same.push(count);
        qw++;
    }
console.log(`${no+1}th team`,same);
let flag =0;
for(let ele=0;ele<same.length;ele++){
    if(same[ele]>=3){
   flag=1;
}
}
if(flag==1)return 0;
else return 1;}



for(let y=6;y<40;y++)
{ let blockchain1 = new Blockchain();
    for(let z=0;z<6;z++){
        if(z<3){
            for(let r=0;r<6;r++){
                if(teams[r][z+3]==teams[y][z]){
                  let blockNo1 = teams[y][z];
                  let LocationQues1 = participantTeam[r][z+3+1].LocationQues;
                  let LocationAns1 = participantTeam[r][z+3+1].LocationAns;
                  let AnimeQues1 = participantTeam[r][z+3+1].AnimeQues;
                  let AnimeAns1 = participantTeam[r][z+3+1].AnimeAns;
                  blockchain1.addBlock({blockNo:blockNo1,
                    LocationQues:LocationQues1,
                    LocationAns:LocationAns1,
                    AnimeQues:AnimeQues1,
                    AnimeAns:AnimeAns1});
                }
                }
        }
        else{
            for(let r=0;r<6;r++){
                if(teams[r][z-3]==teams[y][z]){
                  let blockNo1 = teams[y][z];
                  let LocationQues1 = participantTeam[r][z-3+1].LocationQues;
                  let LocationAns1 = participantTeam[r][z-3+1].LocationAns;
                  let AnimeQues1 = participantTeam[r][z-3+1].AnimeQues;
                  let AnimeAns1 = participantTeam[r][z-3+1].AnimeAns;
                  blockchain1.addBlock({blockNo:blockNo1,
                    LocationQues:LocationQues1,
                    LocationAns:LocationAns1,
                    AnimeQues:AnimeQues1,
                    AnimeAns:AnimeAns1});
                }
                }
        }
        
        }
       
        participantTeam.push(blockchain1.chain);
        const res = checkcommonelements(participantTeam.length-1);
        if(res==0)participantTeam.pop();

    }
   
    // console.log(participantTeam);
    console.log(participantTeam.length);
    fs.writeFile('teams.txt', JSON.stringify(participantTeam));

    let p= [];
    const arrTeam = [];
    participantTeam.forEach((team)=>{
            team.forEach((item)=>{
                const{blockNo}= item;
                const{LocationQues}= item;
                const{LocationAns}= item;
                const{AnimeQues}= item;
                const {AnimeAns} = item;
                let l= {blockNo,LocationQues,LocationAns,AnimeQues,AnimeAns};
                p= [...p,l];
            })
    })
    console.log("I m P",p)
    const csvString = [
        [
          "blockNo",
          "LocationQues",
          "LocationAns",
          "AnimeQues",
          "AnimeAns"
        ],
        ...p.map(item => [
          item.blockNo,
          item.LocationQues,
          item.LocationAns,
          item.AnimeQues,
          item.AnimeAns
        ])
      ]
       .map(e => e.join(",")) 
       .join("\n");
    
    console.log(csvString);
     
// console.log(participantTeam[0][1]);
// console.log(blockchain);

// module.exports = Blockchain;
// module.exports = participantTeam;