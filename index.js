const { ethers } = require('ethers')
const axios =  require('axios')
const Web3Modal = require("web3modal")


const NFT = require("./artifacts/contracts/NFT.sol/NFT.json")
const Market = require("./artifacts/contracts/NFTMarket.sol/NFTMarket.json")

const express = require('express');
const app = express();
var qs = require("querystring");
const url = require('url');
var http = require('http').createServer(app);
const config = require("./config")

const nftaddress = config.getnftAddress()
const nftmarketaddress = config.getnftMarketAddress()


app.use(express.static(__dirname + '/public'));
app.use("/public", express.static('./public/'));

loadNFTs()
async function loadNFTs() {
    const provider = new ethers.providers.JsonRpcProvider()
    const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider)
    const marketContract = new ethers.Contract(nftmarketaddress, Market.abi, provider)
    const data = await marketContract.fetchMarketItems()

    
    const items = await Promise.all(data.map(async i => {
        const tokenUri = await tokenContract.tokenURI(i.tokenId)
        const meta = await axios.get(tokenUri)
        let price = ethers.utils.formatUnits(i.price.toString(), 'ether')
        let item = {
            price, 
            tokenId: i.tokenId.toNumber(),
            seller: i.seller,
            owner: i.owner,
            image: meta.data.image,
            name: meta.data.name,
            description: meta.data.description,
        }
        return item
    }))
    loaded = true
    console.log(items)
}

async function buyNft(nft) {
    const web3Modal = new Web3Modal()
    const connection = await web3Modal.connect() // connect to metamask
    const provider = new ethers.providers.Web3Provider(connection)

    const signer = provider.getSigner()
    const contract = new ethers.Contract(nftmarketaddress, Market.abi, signer)

    const price = ethers.utils.parseUnits(nft.price.toString(), 'ether')

    const transaction = await contract.createMarketSale(nftaddress, nft.tokenId, {
        value: price
    })
    await transaction.wait()

    loadNFTs()
}

app.get('/', function(request, response){
    response.sendFile(__dirname + '/public/html/home.html');
});

http.listen(80, () => {
	console.log('listening on *:80');
}); 