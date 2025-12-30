# EthExplorer (In Progress)

![EthExplorer Screenshot](http://i.imgur.com/NHFYq0x.png)

## License

GPL (see LICENSE)

## Installation

Install [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git "Git installation") if you haven't already

Clone the repo

`git clone https://github.com/etherparty/explorer`

Download [Nodejs and npm](https://docs.npmjs.com/getting-started/installing-node "Nodejs install") if you don't have them

Start the program. All dependencies will be automatically downloaded

`npm start`

Then visit http://localhost:8000 in your browser of choice. You might get an error message:

`geth --rpc --rpccorsdomain "http://localhost:8000"`

Install [geth](https://github.com/ethereum/go-ethereum/wiki/Building-Ethereum "Geth install") if you don't already have it, then run the above command.

Then refresh the page in your browser 

# 我的修改
1.修改了网页的名称为：zsy的Ether Block Explorer  
2.修改页脚版权信息 (Footer) 为 2025 张舒扬实训项目 | 基于 Etherparty 开源改造
3.将输入栏的内容改为中文方便阅读并且加长了长度，不至于显示不完
4.     在app.js中增加控制台调试日志，方便监控连接状态
        console.log("=== 张舒扬实训项目启动 ===");
        console.log("正在尝试连接本地以太坊节点: " + eth_node_url);
5.在app.js中加入了查询geth是否开启成功的功能，并在网页端那里写上了启动时间
6.在app.js中加入了查询连接的peer数量并且在main.html下面加入了可以查询的命，查询成功了
