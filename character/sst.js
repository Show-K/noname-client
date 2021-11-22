"use strict";
game.import("character",function(lib,game,ui,get,ai,_status){
	var sst={
		name:"sst",//武将包命名（必填）
		connect:true,//该武将包是否可以联机（必填）
		characterSort:{
			sst:{
				sst_64:["sst_mario","sst_donkey_kong","sst_link","sst_samus","sst_yoshi","sst_kirby","sst_luigi","sst_captain_falcon","sst_jigglypuff","sst_fox","sst_pikachu"],
				sst_melee:["sst_bowser","sst_peach","sst_zelda","sst_sheik","sst_dr_mario","sst_ganondorf","sst_mr_game_watch","sst_marth","sst_young_link","sst_pichu","sst_falco"],
				sst_brawl:["sst_zero_suit_samus","sst_wario","sst_pokemon_trainer_red","sst_meta_knight","sst_ike","sst_toon_link","sst_wolf","sst_snake","sst_dedede","sst_lucario","sst_sonic","sst_pokemon_trainer_blue"],
				sst_4:["sst_villager","sst_rosalina","sst_little_mac","sst_greninja","sst_palutena","sst_lucina","sst_bowser_jr","sst_koopalings","sst_ryu","sst_mega_man","sst_corrin","sst_mii_fighters"],
				sst_ultimate:["sst_dark_samus","sst_daisy","sst_chrom","sst_ridley","sst_simon","sst_richter","sst_k_rool","sst_isabelle","sst_incineroar","sst_terry","sst_byleth_male","sst_byleth_female","sst_ken","sst_joker","sst_steve","sst_alex","sst_hero","sst_min_min","sst_pyra_mythra","sst_sephiroth","sst_enderman"],
				sst_spirits:["sst_dark_link","sst_sans","sst_waluigi","sst_master_hand","sst_spring_man","sst_rex","sst_cuphead_mugman","sst_krystal","sst_geno"],
				sst_players:["sst_mnm","sst_yumiko","sst_massy","sst_haine","sst_oc","sst_mr_8","sst_kyuukou","sst_windier","sst_rentianshu","sst_srf","sst_miumiu","sst_ma","sst_feiji"],
			},
		},
		character:{
			//武将格式:
			//"武将名字":["性别","势力",体力,[技能],[]],
			//格式内每一样东西都不能缺少，否则无法导入该武将包及其以下内容
			//士兵
			shibing1sst_light:["male","sst_light",0,[],["unseen"]],
			shibing2sst_light:["female","sst_light",0,[],["unseen"]],
			shibing1sst_darkness:["male","sst_darkness",0,[],["unseen"]],
			shibing2sst_darkness:["female","sst_darkness",0,[],["unseen"]],
			shibing1sst_spirit:["male","sst_spirit",0,[],["unseen"]],
			shibing2sst_spirit:["female","sst_spirit",0,[],["unseen"]],
			shibing1sst_reality:["male","sst_reality",0,[],["unseen"]],
			shibing2sst_reality:["female","sst_reality",0,[],["unseen"]],
			shibing1sst_smash:["male","sst_smash",0,[],["unseen"]],
			shibing2sst_smash:["female","sst_smash",0,[],["unseen"]],
			//身份武将
			sst_mario:["male","sst_light",4,["sst_jueyi"],[]],
			sst_link:["male","sst_light",4,["sst_qingyong"],[]],
			sst_yoshi:["male","sst_light",4,["sst_tanshi"],[]],
			sst_wario:["male","sst_darkness",4,["sst_haoduo"],[]],
			sst_villager:["male","sst_light",4,["sst_huandai"],[]],
			sst_zelda:["female","sst_light",3,["sst_anzhi","sst_yinjie","sst_qinwei"],["zhu"]],
			sst_ganondorf:["male","sst_darkness",5,["sst_chengli","sst_huoluan","sst_yane"],["zhu"]],
			sst_dr_mario:["male","sst_light",4,["sst_quji"],[]],
			sst_palutena:["female","sst_light",3,["sst_qiji","sst_shengbing"],[]],
			sst_marth:["male","sst_light",4,["sst_hanmang","sst_jianbu"],[]],
			sst_rosalina:["female","sst_light",3,["sst_xingchen","sst_zhuansheng"],[]],
			sst_zero_suit_samus:["female","sst_light",3,["sst_guangsuo","sst_qingying"],[]],
			sst_luigi:["male","sst_light",3,["sst_que","sst_guiyun"],[]],
			sst_bowser:["male","sst_darkness",5,["sst_xiduo","sst_xiongao","sst_yujun"],["zhu"]],
			sst_peach:["female","sst_light",3,["sst_hongyan","sst_yice","sst_qiuyuan"],["zhu"]],
			sst_byleth_female:["female","sst_light",3,["sst_potian","sst_shenjiao"],[]],
			sst_byleth_male:["male","sst_light",4,["sst_yanchuan","sst_tianmai"],[]],
			sst_massy:["male","sst_reality",5,["sst_shenfa","sst_shenwu"],[]],
			sst_samus:["female","sst_light",3,["sst_qiongtu","sst_juezhan"],[]],
			sst_ridley:["male","sst_darkness",5,["sst_baozheng","sst_furan"],[]],
			sst_dark_samus:["female","sst_darkness",3,["sst_yingliu","sst_shunxing"],[]],
			sst_mr_game_watch:["male","sst_darkness",3,["sst_shenpan"],[]],
			sst_mnm:["male","sst_reality",5,["sst_qixiao","sst_xuansha"],[]],
			sst_yumiko:["female","sst_reality",3,["sst_yingji","sst_huxiao"],[]],
			sst_haine:["male","sst_reality",3,["sst_yiqing","sst_mingxi"],[]],
			sst_terry:["male","sst_light",4,["sst_elang","sst_paoxiao"],[]],
			sst_simon:["male","sst_darkness",4,["sst_shengfa","sst_shengbian"],[]],
			sst_incineroar:["male","sst_darkness",4,["sst_weihe","sst_fuchou"],[]],
			sst_greninja:["male","sst_darkness",3,["sst_huanbian","sst_yingxi"],[]],
			sst_kirby:["male","sst_light",3,["sst_qushi","sst_xinghuo"],[]],
			sst_k_rool:["male","sst_darkness",4,["sst_badao","sst_jinjia"],[]],
			sst_donkey_kong:["male","sst_light",4,["sst_baochui"],[]],
			sst_richter:["male","sst_darkness",4,["sst_shengxi","sst_xuelun"],[]],
			sst_pokemon_trainer_red:["male","sst_light",4,["sst_xiandu"],[]],
			sst_isabelle:["female","sst_light",3,["sst_wenxu","sst_mihu"],[]],
			sst_chrom:["male","sst_light",4,["sst_niming","sst_cuifeng"],[]],
			sst_daisy:["female","sst_light",3,["sst_renqing","sst_manchan"],["zhu"]],
			sst_meta_knight:["male","sst_darkness",4,["sst_canyun"],[]],
			sst_little_mac:["male","sst_light",2,["sst_douhun","sst_juejing"],[]],
			sst_lucina:["female","sst_light",4,["sst_suxing","sst_shengyi"],[]],
			sst_oc:["male","sst_reality",4,["sst_baling"],[]],
			sst_mr_8:["male","sst_reality",3,["sst_yingzi","sst_geliao"],[]],
			sst_dark_link:["male","sst_spirit",4,["sst_jingyue"],[]],
			sst_kyuukou:["male","sst_reality",4,["sst_jianxiang","sst_baochao"],[]],
			sst_windier:["female","sst_reality",3,["sst_chixing","sst_chuanxiao"],[]],
			sst_rentianshu:["male","sst_reality",4,["sst_jilve","sst_yuanchuan"],[]],
			sst_srf:["male","sst_reality",3,["sst_diebu","sst_bielian"],[]],
			sst_bowser_jr:["male","sst_darkness",3,["sst_guaibi","sst_daonao"],[]],
			sst_koopalings:["male","sst_darkness",7,["sst_shimo","sst_qiebao","sst_duzhi"],[]],
			sst_ryu:["male","sst_light",4,["sst_tandao","sst_bodong"],[]],
			sst_ken:["male","sst_light",4,["sst_yanyang","sst_shenglong"],[]],
			sst_sans:["male","sst_spirit",1,["sst_juexin","sst_yebao","sst_caijue"],[]],
			sst_waluigi:["male","sst_spirit",4,["sst_zhamou"],[]],
			sst_master_hand:["male","sst_spirit",4,["sst_zhuzai","sst_zhixu"],["zhu"]],
			sst_ike:["male","sst_light",4,["sst_tugu"],[]],
			sst_sheik:["female","sst_darkness",3,["sst_nixing","sst_shouyin"],[]],
			sst_miumiu:["female","sst_reality",3,["sst_qichang","sst_shizhu"],[]],
			sst_toon_link:["male","sst_light",4,["sst_yufeng","sst_chihang"],[]],
			sst_wolf:["male","sst_darkness",4,["sst_xishou"],[]],
			sst_young_link:["male","sst_darkness",3,["sst_shishi","sst_jiamian"],[]],
			sst_ocarina_of_time_link:["male","sst_light",4,["sst_shisu","sst_yongfeng"],["unseen"]],
			sst_spring_man:["male","sst_spirit",4,["sst_shenbi","sst_lanbo"],[]],
			sst_joker:["male","sst_darkness",3,["sst_daoxin","sst_fanni"],[]],
			sst_rex:["male","sst_spirit",3,["sst_qianban","sst_tanyun"],[]],
			sst_cuphead_mugman:["male","sst_spirit",3,["sst_zhuizhai","sst_fanfei"],[]],
			sst_krystal:["female","sst_spirit",3,["sst_liaoyi","sst_shuanghan"],[]],
			sst_snake:["male","sst_darkness",4,["sst_qianlong"],[]],
			sst_mega_man:["male","sst_light",4,["sst_guangpao","sst_tewu"],[]],
			sst_captain_falcon:["male","sst_light",4,["sst_jijing"],[]],
			sst_jigglypuff:["female","sst_light",3,["sst_yinyao","sst_anke"],[]],
			sst_lucario:["male","sst_darkness",4,["sst_bodao","sst_juyuan"],[]],
			sst_pichu:["male","sst_light","2/3",["sst_tieyan","sst_gaoya"],[]],
			sst_dedede:["male","sst_darkness",4,["sst_baoshi","sst_wangyan"],["zhu"]],
			sst_corrin:["none","sst_smash",2,["sst_juelu","sst_longwei"],[]],
			sst_corrin_male:["male","sst_darkness",2,["sst_juelu","sst_longwei"],["unseen"]],
			sst_corrin_female:["female","sst_light",2,["sst_juelu","sst_longwei"],["unseen"]],
			sst_steve:["male","sst_light",4,["sst_tankuang"],[]],
			sst_ma:["male","sst_reality",4,["sst_fumiao","sst_huayu"],["zhu"]],
			sst_feiji:["male","sst_reality",4,["sst_xuhuang"],[]],
			sst_sonic:["male","sst_light",4,["sst_jibu","sst_juechen"],[]],
			sst_hero:["male","sst_light",4,["sst_songmo","sst_yonghun"],[]],
			sst_fox:["male","sst_light",4,["sst_powei"],[]],
			sst_mii_fighters:["none","sst_smash",4,["sst_bianshe"],[]],
			sst_alex:["female","sst_light",3,["sst_qiaoqi","sst_fumo"],[]],
			sst_min_min:["female","sst_light",3,["sst_longbo","sst_fengcu"],[]],
			sst_pikachu:["male","sst_light",3,["sst_fulei","sst_duoshan"],[]],
			sst_falco:["male","sst_light",4,["sst_juao"],[]],
			sst_pyra_mythra:["female","sst_light",3,["sst_xuanyi","sst_fuxin"],[]],
			sst_enderman:["male","sst_darkness",2,["sst_lingying","sst_fankui","sst_xiangzhu"],[]],
			sst_sephiroth:["male","sst_darkness",5,["sst_fenshi","sst_xingduo"],[]],
			sst_pokemon_trainer_blue:["female","sst_light",3,["sst_jiliu"],[]],
			sst_geno:["male","sst_spirit",3,["sst_xingjiang","sst_fuyuan"],[]],
		},//武将（必填）
		characterFilter:{
			sst_corrin:function(mode){
				return mode=="identity";
			},
			sst_corrin_male:function(mode){
				return mode=="identity";
			},
			sst_corrin_female:function(mode){
				return mode=="identity";
			},
		},
		characterIntro:{
			/*
			"<br>"+
			"系列：（）<br>"+
			"初登场：（）<br>"+
			"武将作者：Yumikohimi<br>"+
			"武将作者：mario not mary<br>"+
			"武将作者：Show-K<br>"+
			"--------------------------------<br>"+
			"<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"

			"+
			"
			*/
			sst_mario:"0001. 马力欧/Mario/マリオ<br>"+
			"系列：Mario（马力欧）<br>"+
			"初登场：Donkey Kong（森喜刚）<br>"+
			"武将作者：mario not mary、Show-K<br>"+
			"--------------------------------<br>"+
			"超级标志性的角色！这位游戏巨星常常从酷霸王手中拯救世界。他有惊人的跳跃能力和多种变身道具。在闲暇时刻，他还会参与体育运动，擅长的项目数也数不清。在大乱斗里，他是一个值得信赖的全能型斗士。让我们一起来说：“是我，马力欧！”<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"太激昂了，太生生不息了……现在总算从T0削下去了……然后貌似又升了，并且貌似和库巴玩得很开心。",
			sst_link:"0172. 林克/Link/リンク<br>"+
			"系列：The Legend of Zelda（塞尔达传说）<br>"+
			"初登场：The Legend of Zelda（塞尔达传说）<br>"+
			"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"传统上林克的标志性特征是绿衣绿帽，不过在旷野之息中林克反而穿着蓝色的英杰服，也不戴帽子了。在大乱斗里，他的剑和盾让他攻守兼备，而他的弓、回旋镖和炸弹则给战斗增加了更多的变数。在前几代大乱斗里林克还会使用勾爪——所以说他是怎么同时带这么多东西上场的啊！<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"“醒醒吧……”",
			sst_yoshi:"0297. 耀西/Yoshi/ヨッシー<br>"+
			"系列：Yoshi（耀西）<br>"+
			"初登场：Super Mario World（超级马力欧世界）<br>"+
			"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"耀西经常和马力欧一起冒险，可以说是他最好的搭档。耀西可以吃掉几乎任何大小合适的生物，然后马上生出蛋来。借助他的浮空跳能力，他在大乱斗中非常适合空战。<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"耀西~！",
			sst_wario:"0729. 瓦力欧/Wario/ワリオ<br>"+
			"系列：Wario（瓦力欧）<br>"+
			"初登场：Super Mario Land: 6 Golden Coins（超级马力欧大陆 六个金币）<br>"+
			"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"瓦力欧简直就是恶趣味的集合体。这个怪人自称是马力欧的发小，并且相当厌恶马力欧。同时他还视财如命。在大乱斗中，他是个灵活的重量级斗士，还可以通过积攒屁来释放强力攻击——真的是太恶趣味了！<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"瓦！瓦！瓦！！！",
			sst_villager:"0825. 村民（男孩）/Villager (Boy)/むらびと（男の子）<br>"+
			"系列：Animal Crossing（动物森友会）<br>"+
			"初登场：Animal Crossing（动物森友会）<br>"+
			"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"在动物森友会系列中和动物们平和的生活在一起的年轻人，当然他也不拒绝在大乱斗里大显身手。他的上必杀技其实来自于《气球大战》这个游戏，而下必杀技则能生动地为大家说明不要在别人砍树的时候站在旁边。<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"“因为什么都没有，所以什么都做得到”",
			sst_zelda:"0173. 塞尔达/Zelda/ゼルダ<br>"+
			"系列：The Legend of Zelda（塞尔达传说）<br>"+
			"初登场：The Legend of Zelda（塞尔达传说）<br>"+
			"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"塞尔达传说系列就是以这位坚强的公主命名的。在不同的作品里她的形象也不同，但她总是肩负重任。在大乱斗里，她擅长使用多种魔法，但是移动速度不是特别快。她在大乱斗四代和五代中的下必杀是幻影铠甲，而二代和三代的下必杀则是变身希克。<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"林克，这就是三角力量……",
			sst_ganondorf:"0175. 加侬多夫【盖侬多夫】/Ganondorf/ガノンドロフ<br>"+
			"系列：The Legend of Zelda（塞尔达传说）<br>"+
			"初登场：The Legend of Zelda: Ocarina of Time（塞尔达传说 时之笛）<br>"+
			"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"加侬多夫是拥有力量三角的魔王，意欲将海拉鲁大陆毁灭。除了人形态之外，他还可以变成巨大的野猪魔兽。当然，在大多数作品里，他的野心都会被林克摧毁。在大乱斗里，他虽然行动缓慢但威力强大，很容易就会把对手击飞，非常适合轻度玩家使用。<br>"+
			"——封羽翎烈、无敌阿尔宙斯，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"你知道吗？海拉鲁的历史，就是一部被叫做盖侬的魔善侵袭的历史……",
			sst_dr_mario:"0008. 马力欧医生/Dr. Mario/ドクターマリオ<br>"+
			"系列：Mario（马力欧）<br>"+
			"初登场：Dr. Mario（马力欧医生）<br>"+
			"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"在1990年的益智游戏《马力欧医生》中，马力欧换上了白大褂，准备在医学界大展身手。在大乱斗世界中，他是能够投掷药丸、使用超级床单反弹攻击的全能型斗士。他比马力欧要慢，但是攻击也更高。<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"一开始技能就没设计好，但我还是要占个位置……现在设计好了，然而后来又被改了N多次……",
			sst_palutena:"0705. 帕露蒂娜/Palutena/パルテナ<br>"+
			"系列：Kid Icarus（光神话）<br>"+
			"初登场：Kid Icarus: Of Myths and Monsters（光神话 神话与怪物）<br>"+
			"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"在《新光神话：帕露蒂娜之镜》中，这位光之女神通过心灵感应和彼特交流，并且赐予他各种对冒险有帮助的奇迹。在大乱斗中，她也有能适应各种场合的技能。以及，在大乱斗四代中，她的每个自定义技能都和基础技能完全不同，可以将她打造成不同风格的斗士。<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"稍微认真点也没关系哦～",
			sst_marth:"0610. 马尔斯/Marth/マルス<br>"+
			"系列：Fire Emblem（火焰纹章）<br>"+
			"初登场：Fire Emblem: Shadow Dragon and the Blade of Light（火焰纹章 暗黑龙与光之剑）<br>"+
			"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"初代《火焰纹章》的主角，阿提利亚王国的王子，也是英雄的后裔。在大乱斗中，他是一个标志性的剑人，剑法精湛而优雅。他的剑尖比剑根能的攻击力更高，还可以使用防反来应对对方的攻击。<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"“那正是英雄王本人”",
			sst_rosalina:"0009. 罗莎塔/Rosalina/ロゼッタ<br>"+
			"系列：Mario（马力欧）<br>"+
			"初登场：Super Mario Galaxy（超级马力欧 银河）<br>"+
			"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"神秘的罗莎塔和琪琪们一起生活在长尾星天文台。在大乱斗中，罗莎塔和琪琪能同时在不同位置攻击。如果你能将对手夹在罗莎塔和琪琪中间，她们就能合力打出超高伤害！<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"欢迎来到新的银河。",
			sst_zero_suit_samus:"0266. 零装甲萨姆斯/Zero Suit Samus/ゼロスーツサムス<br>"+
			"系列：Metroid（密特罗德）<br>"+
			"初登场：（）<br>"+
			"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"即使不穿能量装甲，萨姆斯也很强。虽然没有装甲形态的高火力，但她的动力鞋给了她高机动性。而她的麻痹手枪既可以定住对手，也能发射等离子鞭进行抓取或回场。<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"“化整为零。”",
			sst_luigi:"0004. 路易吉/Luigi/ルイージ<br>"+
			"系列：Mario（马力欧）<br>"+
			"初登场：Mario Bros.（马力欧兄弟）<br>"+
			"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"虽说有专门为他庆贺的“路易吉年（2013年）”，也曾经在某种意义上成为了电影明星，但这些关注只是让他变得更内向和不知所措了。不论是在原作中还是在大乱斗中，他都倾向于模仿哥哥的举动，不过他也将哥哥的部分招式改良了，比如他的超级跳跃拳在特定时机击飞力超高。以及，他的嘲讽都是100%纯原创的哦！<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"和哥哥一起！",
			sst_bowser:"0007. 酷霸王/Bowser/クッパ<br>"+
			"系列：Mario（马力欧）<br>"+
			"初登场：Super Mario Bros.（超级马力欧兄弟）<br>"+
			"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"马力欧的死对头，也是桃花公主老被绑架的罪魁祸首。他的阴谋基本上都没有实现，相反，有时候他甚至还会和马力欧合作。在大乱斗中，他是全游戏最重的人物，并且不会被轻攻击打出硬直。你必须得揍得足够大力才能将他击飞！<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"就算是调整强度了，依旧没有武将图片……",
			sst_peach:"0005. 桃花公主/Peach/ピーチ<br>"+
			"系列：Mario（马力欧）<br>"+
			"初登场：Super Mario Bros.（超级马力欧兄弟）<br>"+
			"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"蘑菇王国的公主，也是强大和可爱可以共存的最好证明。在大乱斗中，桃花公主可以在空中飘浮，随后突然落地掏出一堆武器来——包括但不限于平底锅、阳伞和奇诺比奥——所以她到底把这些都放在哪的啊？<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"哦～我赢了吗？",
			sst_byleth_female:"1381. 贝雷丝/Byleth (Female)/ベレス<br>"+
			"系列：Fire Emblem（火焰纹章）<br>"+
			"初登场：Fire Emblem: Three Houses（火焰纹章 风花雪月）<br>"+
			"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"作为士官学校的老师，除了教学生战斗技巧之外，还可以请他们喝茶聊天。5年前亲密的学生们5年后却要各自为敌，实在令人唏嘘。顺便，5年后贝老师的头发会变成绿色。<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"老师真的很希望你们都能活下来……",
			sst_byleth_male:"1380. 贝雷特/Byleth (Male)/ベレト<br>"+
			"系列：Fire Emblem（火焰纹章）<br>"+
			"初登场：Fire Emblem: Three Houses（火焰纹章 风花雪月）<br>"+
			"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"赛罗斯骑士团前任团长杰拉尔特的儿子/女儿，因为在意外中救了几名学生，成为了加尔古·玛库士官学校的教师。缺乏情绪起伏，被称为灰色恶魔。<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"“你还算是个男人嘛？！”",
			sst_massy:"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"Massy，唯一的神！",
			sst_samus:"0264. 萨姆斯/Samus/サムス<br>"+
			"系列：Metroid（密特罗德）<br>"+
			"初登场：Metroid（密特罗德）<br>"+
			"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"萨姆斯·亚兰是游戏历史上第一个女主角，以只身一人在外星球的作战闻名。她的能量装甲是高等文明“鸟人族”的成果，给了她强大的火力、防护力和升级的可能性。在大乱斗中，虽然她是道具人，但是她的体术也不差。她的蓄力射击威力惊人。<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"“萨姆斯，很不幸的消息……”",
			sst_ridley:"0267. 利德雷/Ridley/リドリー<br>"+
			"系列：Metroid（密特罗德）<br>"+
			"初登场：Metroid（密特罗德）<br>"+
			"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"萨姆斯的死对头，是杀害了她至亲的仇人，也是宇宙海盗的干部之一。看上去像是野兽，但是具有高度智慧。虽然一直到这代大乱斗才成为斗士，但在之前的大乱斗里也以其他的形式露过面。<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"“没有任何洗白的余地与必要”",
			sst_dark_samus:"0265. 黑暗萨姆斯/Dark Samus/ダークサムス<br>"+
			"系列：Metroid（密特罗德）<br>"+
			"初登场：（）<br>"+
			"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"萨姆斯的废弃盔甲、究极密特罗德和有机矿石“啡宗”结合的产物，不但有强大的恢复能力，还能精神控制其他生物和制造自己的分身。它在3ds和WiiU版《任天堂明星大乱斗》中作为辅助模型的时候还能使用啡宗的力量攻击，成为斗士之后各个招式倒是完全和萨姆斯一样了，遗憾。<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"“堕入黑暗”",
			sst_mr_game_watch:"0689. Mr. Game & Watch/Mr.ゲーム & ウォッチ<br>"+
			"系列：Game & Watch（游戏手表）<br>"+
			"初登场：Game & Watch（游戏手表）<br>"+
			"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"Game & Watch是任天堂于80年代推出的一系列游戏及其设备的统称，既能玩游戏也能当时钟，这一设备也是之后的GB以及DS掌机的雏形。在大乱斗中，Game & Watch先生会使用来自原作的各种要素攻击。不过因为它是真实意义上的纸片人，所以非常轻，容易被击飞。<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"“是9！是9！”",
			sst_mnm:"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"这才是大佬！九州第一库巴！完全虐爆我！连续让我回炉重造！",
			sst_yumiko:"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"那个九州第一库巴的女朋友！依然是完全虐爆我！不过比MNM好相处……",
			sst_haine:"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"公认的渣男！",
			sst_terry:"1356. 特瑞·博加德/Terry Bogard/テリー・ボガード<br>"+
			"系列：Fatal Fury（饿狼传说）<br>"+
			"初登场：Fatal Fury（饿狼传说）<br>"+
			"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"被称为“传说之狼”的传奇格斗家，多次夺得KOF的冠军，实际上却是一个南镇街头的无业游民。年少时为了替养父杰夫报仇而踏上了击败吉斯的旅途。师从中华武术大师唐福禄门下，招数却都是从杰夫那里学来的。在南镇的大街小巷的一次次的战斗中，他逐渐对和吉斯之间无穷无尽的复仇产生了质疑，但吉斯并没有给他反悔的机会。<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"OK！",
			sst_simon:"1050. 西蒙·贝尔蒙特/Simon Belmont/シモン・ベルモンド<br>"+
			"系列：Castlevania（恶魔城）<br>"+
			"初登场：Castlevania（恶魔城）<br>"+
			"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"初代《恶魔城》的主角，最著名的吸血鬼猎人之一，个性勇敢莽撞。依靠除魔圣鞭和其他神圣武器击败了百年后卷土重来的德古拉，并且通过焚烧德古拉遗体破解了他给自己施加的诅咒。在原作中还有如骑士般武装或是清秀优雅的形象，大乱斗中的这个形象是他最初登场时的样子。<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"“滚回黑暗。”",
			sst_incineroar:"0419. 炽焰咆哮虎/Incineroar/ガオガエン<br>"+
			"系列：Pokémon（宝可梦）<br>"+
			"初登场：Pokémon Sun and Moon（宝可梦 太阳/月亮）<br>"+
			"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"以反派摔角手为原型的宝可梦，是《宝可梦：太阳/月亮》中初始宝可梦火斑喵的最终进化。性格暴躁又任性，但讨厌欺凌弱小这类无聊的事。对于强大的对手会拿出干劲来。在大乱斗中，它主要使用各种与摔角有关的招式。<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"鸿渐，就当成鸿渐了。",
			sst_greninja:"0418. 甲贺忍蛙/Greninja/ゲッコウガ<br>"+
			"系列：Pokémon（宝可梦）<br>"+
			"初登场：（）<br>"+
			"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"甲贺忍蛙是水+恶属性的宝可梦，完全想不到最初呆萌的呱呱泡蛙会进化成这样。它和所有忍者一样敏捷而致命，投掷的飞水手里剑甚至能切割金属。在大乱斗中，它是高速型的斗士，回场能力也非常不错。<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"“变幻自在”",
			sst_kirby:"0323. 卡比/Kirby/カービィ<br>"+
			"系列：Kirby（星之卡比）<br>"+
			"初登场：Kirby\x27s Dream Land（星之卡比）<br>"+
			"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"圆圆滚滚的可爱卡比在波普之星过着平静的生活。它可以吸入物品或者生物，并且将它们吐出来或者复制能力。在大乱斗中，卡比吸入斗士之后可以复制他们的通常必杀技。它虽然很容易被击飞，但回场能力还不错。<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"樱井亲儿子，粉红恶魔，灯火之星。",
			sst_k_rool:"0136. 库鲁鲁王/King K. Rool/キングクルール<br>"+
			"系列：Donkey Kong（森喜刚）<br>"+
			"初登场：Donkey Kong Country（超级森喜刚）<br>"+
			"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"就像马力欧的死对头是酷霸王一样，森喜刚的死对头是库鲁鲁王。他是个性格恶劣的鳄鱼，拥有坚硬的肚皮铠甲和闪亮的皇冠。想要他和森喜刚合作甚至成为朋友是几乎不可能的。<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"真的当过很多职业，不仅是王……",
			sst_donkey_kong:"0134. 森喜刚/Donkey Kong/ドンキーコング<br>"+
			"系列：Donkey Kong（森喜刚）<br>"+
			"初登场：Donkey Kong（森喜刚）<br>"+
			"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"丛林的王者，也是最狂热的香蕉狂魔。他的冒险总是以某人偷了他的香蕉开始。在大乱斗中，他的力度和投技是众所周知的。虽然体积很大，但是速度也不是特别慢。他的前投掷还能扛着对手走哦！要合理利用这一点！<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"砸人很疼的。",
			sst_richter:"1051. 里希特·贝尔蒙特/Richter Belmont/リヒター・ベルモンド<br>"+
			"系列：Castlevania（恶魔城）<br>"+
			"初登场：Castlevania: Rondo of Blood（恶魔城X 血之轮回）<br>"+
			"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"《恶魔城X：血之轮回》的主角，吸血鬼猎人家族的后代，他从德古拉手中救出了自己的恋人，还曾经和德古拉的儿子阿鲁卡多并肩作战。他擅长使用杂技般灵活的体术与敌人周旋，还能解放除鞭子外其他神圣武器的力量，进行更强力的攻击。<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"“我有愧于此称……”",
			sst_pokemon_trainer_red:"0412. 宝可梦训练家（男性）/Pokémon Trainer (Male)/ポケモントレーナー（男性）<br>"+
			"系列：Pokémon（宝可梦）<br>"+
			"初登场：Pokémon Red and Blue（宝可梦 红蓝）<br>"+
			"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"历代《宝可梦》的主线里都有一个以冠军为目标的训练师，带着宝可梦博士给的初始宝可梦踏上旅途。他们还会骑自行车或者滑轮滑。在大乱斗中，宝可梦训练师会一直在场地后面，负责切换宝可梦和为他的同伴加油鼓劲。<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"“……”",
			sst_isabelle:"0827. 西施惠/Isabelle/しずえ<br>"+
			"系列：Animal Crossing（动物森友会）<br>"+
			"初登场：Animal Crossing: New Leaf（来吧！动物森友会）<br>"+
			"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"在3DS版《动物森友会》中，她是村民们的可靠秘书；而在NS版中，她也为每个无人岛居民提供生活服务。她有时可能健忘，但总的来说很靠谱。有个叫西施德的弟弟。她在3DS和WiiU版《任天堂明星大乱斗》中是辅助模型，NS版中则成为了斗士。<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"大家都爱的秘书西施惠！",
			sst_chrom:"0613. 库洛姆/Chrom/クロム<br>"+
			"系列：Fire Emblem（火焰纹章）<br>"+
			"初登场：Fire Emblem Awakening（火焰纹章 觉醒）<br>"+
			"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"伊利斯圣王国的王子，英雄王马尔斯的后代。他率领一个保卫王国的自卫团。虽然他在训练时经常很莽以至于搞砸事情，但在战场上他是非常可靠的。他还会在鲁弗莱的最终必杀中出场。<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"“运命改变了！”",
			sst_daisy:"0006. 菊花公主/Daisy/デイジー<br>"+
			"系列：Mario（马力欧）<br>"+
			"初登场：Super Mario Land（超级马力欧大陆）<br>"+
			"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"虽然是萨拉萨大陆的公主，但菊花公主完全没有身为王族的优雅，反而相当活泼任性，这也是她的独特之处。据说路易吉对她很着迷？和桃花公主不同，菊花公主只被绑架过一次。<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"嘿！我是黛西！",
			sst_meta_knight:"0324. 魅塔骑士/Meta Knight/メタナイト<br>"+
			"系列：Kirby（星之卡比）<br>"+
			"初登场：（）<br>"+
			"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"卡比的神秘劲敌，披风可以变成翅膀的样子。在大乱斗里，他以剑术和强大的空战能力著称。他拥有多段跳，并且所有的必杀技都能用来回场。在Wii版《任天堂明星大乱斗》里，他的强度甚至破坏了平衡。<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"“Fight me.”",
			sst_little_mac:"0932. 小麦克/Little Mac/リトル・マック<br>"+
			"系列：Punch-Out!!（击拳热斗！！）<br>"+
			"初登场：Punch-Out!!（击拳热斗！！）<br>"+
			"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"击拳热斗系列的主角，虽然身材矮小，但斗志满满。无论是在世界拳击大赛中面对高大的对手们，还是在大乱斗中面对游戏明星们，都毫不畏惧。在大乱斗中，他的拳法简单粗暴。当KO槽蓄满时，他就可以使用击飞力超强的上勾拳。<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"加油！麦克！",
			sst_lucina:"0611. 露琪娜/Lucina/ルキナ<br>"+
			"系列：Fire Emblem（火焰纹章）<br>"+
			"初登场：Fire Emblem Awakening（火焰纹章 觉醒）<br>"+
			"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"库洛姆的女儿，伊利斯圣王国的公主，从悲惨的未来穿越到现在，阻止那种未来发生。她最初以女扮男装，自称马尔斯的形态出现。在大乱斗中，她的技能和马尔斯是一样的，但没有马尔斯那种剑尖与剑根的伤害差异。<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"“为了终结这个世界的战争……我会努力的。”",
			sst_oc:"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"霸凌你哦！",
			sst_mr_8:"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"据说大乱斗人都叫他东北吴彦祖。",
			sst_dark_link:"????.<br>"+
			"系列：The Legend of Zelda（塞尔达传说）<br>"+
			"初登场：（）<br>"+
			"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"<br>"+
			//"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"又一个老摸没写介绍的武将，而我也不知道怎么写……",
			sst_kyuukou:"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"经典白给！",
			sst_windier:"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"说话的时候总是带一个笑哭的表情，很神奇。",
			sst_rentianshu:"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"很老的任豚了，他也是推广这次的大乱斗Ultimate的人之一。",
			sst_srf:"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"看来又是一个渣男。",
			sst_bowser_jr:"0010. 酷霸王Jr. /Bowser Jr. /クッパJr.<br>"+
			"系列：Mario（马力欧）<br>"+
			"初登场：Super Mario Sunshine（超级马力欧 阳光）<br>"+
			"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"酷霸王超宠爱的孩子，有标志性的带大嘴巴图案的围脖。和他爸一样，酷霸王Jr.也想打败马力欧。在大乱斗中，他乘坐全副武装的酷霸王小丑飞船出战。如果被击中飞船而不是本体，受伤会更少，所以要注意走位。<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"老摸又没写介绍，他的父亲表示对老摸非常生气。",
			sst_koopalings:"0011. 伊吉/Iggy/イギー<br>"+
			"0012. 温缇/Wendy/ウェンディ<br>"+
			"0013. 雷米/Lemmy/レミー<br>"+
			"0014. 洛伊/Roy/ロイ（スーパーマリオブラザーズ）<br>"+
			"0015. 拉里/Larry/ラリー<br>"+
			"0016. 洛德威格/Ludwig/ルドウィッグ<br>"+
			"0017. 莫顿/Morton/モートン<br>"+
			"系列：Mario（马力欧）<br>"+
			"初登场：Super Mario Bros. 3（超级马力欧兄弟3）<br>"+
			"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"伊吉戴着黑框眼镜，梳着个菠萝发型，有些爱搞恶作剧。他说话语气卖萌，但是笑起来又疯疯癫癫的。他还喜欢训练汪汪，在《新超级马力欧兄弟2》中，他就靠一只暴躁的汪汪来对付马力欧。<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"酷霸王7人组中唯一的一个女孩子。她非常莽，也非常傲慢自大，并且将桃花公主和菊花公主视为对手。虽然性格像是假小子，但是也不排斥用粉色蝴蝶结和高跟鞋展示自己女性化的一面。在《新超级马力欧兄弟U》中，她还展示了自己优雅的溜冰技巧。<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"酷霸王7人组中身材最矮小的一个，是个一脸怪相又不失稚气的小捣蛋。在《新超级马力欧兄弟U》中，他是第一关的Boss，踩在球上投掷炸弹攻击，与此同时炫彩的头发一抖一抖的。不要低估他的实力哦！<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"酷霸王7人组中的重量级选手，经常四处耀武扬威。他的粉色墨镜虽然没什么压迫感，但他灵活可变的速度却威胁不小。在《超级马力欧兄弟3》中，他通过制造地震和使用魔法来攻击马力欧，还真是挺棘手的！<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"酷霸王7人组中年纪最小的一个，总是想在各种事情上赢过别人——即使别人并没有想与他竞争。他高耸的蓝色头发非常引人注目。在《新超级马力欧兄弟Wii》里，他在第一关出现。虽说他的蓝色火球和刺壳旋转看起来很难对付，但其实他的行动非常套路化。<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"酷霸王7人组中最聪明的一个，有非常标志性的蓝色中分头。虽然可以表现的很成熟，但是他更喜欢装逼。在《新超级马力欧兄弟Wii》里，他是第七关的Boss，可以使用追踪魔法弹，还会故意悬在空中躲避攻击。<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"酷霸王7人组中体格最大的一个。他标志性的特征是三根呆毛——不对，应该是脸上的星星标记。他四肢发达头脑简单，在《新超级马力欧兄弟2》中，他在第四关出现，你不打他他就不会动。也许他真的是很不爱动吧！<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"老摸又没写介绍，他们的养父表示对老摸比较生气。",
			sst_ryu:"0977. 隆/Ryu/リュウ<br>"+
			"系列：Street Fighter（街头霸王）<br>"+
			"初登场：Street Fighter（街头霸王）<br>"+
			"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"隆，武道上永恒的探求者，凭借着从刚拳处学来的波动流暗杀术，他遍历全球挑战强者，在夺得大赛冠军后却淡泊名利不去领奖，因为他的目标只有一个，也是豪鬼留给他的问题：战斗的意义，除了杀戮，还有什么？他也曾为了追求力量迷失自我，将自己沉浸在杀意中，但现在的他已经将阴影从心中驱逐，俨然一代宗师。<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"你必须击败我的升龙拳才能得到一线转机。",
			sst_ken:"0978. 肯/Ken/ケン<br>"+
			"系列：Street Fighter（街头霸王）<br>"+
			"初登场：Street Fighter（街头霸王）<br>"+
			"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"肯是隆的头号挚友兼劲敌，两人师出同门，与风餐露宿四处苦行的隆不同，肯有着自己的家族与财大气粗的产业，据说现在空手道网课也办的红红火火。他在年轻时因为急躁吃过不少败仗，但现在的他已经有了自己的家庭，即便如此，在顾家的闲暇也一定要挤出时间与挚友对战几局，才是男人的快乐。<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"我准备好了，来吧。",
			sst_sans:"????. Sans/サンス<br>"+
			"系列：Undertale（传说之下）<br>"+
			"初登场：Undertale（传说之下）<br>"+
			"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"<br>"+
			"——翻译自《维基百科》<br>"+
			"--------------------------------<br>"+
			"外面是多么美好的一天啊，鸟儿在歌唱，花儿在绽放……",
			sst_waluigi:"0035. 瓦路易吉/Waluigi/ワルイージ<br>"+
			"系列：Mario（马力欧）<br>"+
			"初登场：Mario Tennis（马力欧网球）<br>"+
			"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"一看他那个硬而扭曲的胡子，还有红色的鹰钩鼻，就知道这是个带恶人了。他自称是路易吉的劲敌，性格狡猾，行动敏捷。当作为辅助模型被召唤时，他会将离他最近的斗士猛踩到地里，然后用网球拍殴打他的受害者。不知道为什么，在国外希望瓦路易基参战大乱斗的呼声相当高，甚至都成为烂梗了。<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"金钱，名声，邀请函，都会是本大爷的！",
			sst_master_hand:"1095. 大师之手/Master Hand/マスターハンド<br>"+
			"系列：Super Smash Bros.（任天堂明星大乱斗）<br>"+
			"初登场：Super Smash Bros.（任天堂明星大乱斗）<br>"+
			"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"创造大乱斗世界的神秘之手。它会在取胜乱斗中所有对手被打败后出现在终点。它的招数极其多样，并且在生命不足时会变得更强大。如果知道什么时候攻击，什么时候躲闪，应对它就不是难事！<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"右手，代表着创造。",
			sst_ike:"0614. 艾克（苍炎之轨迹）/Ike (Path of Radiance)/アイク（蒼炎の軌跡）<br>"+
			"系列：Fire Emblem（火焰纹章）<br>"+
			"初登场：Fire Emblem: Path of Radiance（火焰纹章 苍炎之轨迹）<br>"+
			"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"《火焰纹章：苍炎之轨迹》的主角，父亲被神秘的漆黑骑士所杀，于是继承了父亲的佣兵团，并且承担了保卫未来女皇的任务。拥有恐怖的力量，他的剑本来是双手剑，但他可以单手使用。<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"大！天！空！",
			sst_sheik:"0174. 希克/Sheik/シーク<br>"+
			"系列：The Legend of Zelda（塞尔达传说）<br>"+
			"初登场：The Legend of Zelda: Ocarina of Time（塞尔达传说 时之笛）<br>"+
			"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"在《塞尔达传说：时之笛》中，希克自称是从灾难中幸存的希卡族人，不过她其实是塞尔达公主为了躲避加侬多夫的追捕而女扮男装的形态。在大乱斗中，希克以高速连招为主，和塞尔达的战斗风格有很大差别。<br>"+
			"——封羽翎烈、无敌阿尔宙斯，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"“接下来这段旋律，你要铭记于心……”",
			sst_miumiu:"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"据说家里裙子比其他女生还要多。",
			sst_toon_link:"0177. 卡通林克/Toon Link/トゥーンリンク<br>"+
			"系列：The Legend of Zelda（塞尔达传说）<br>"+
			"初登场：The Legend of Zelda: The Wind Waker（塞尔达传说 风之杖）<br>"+
			"武将作者：mario not mary、Yumikohimi<br>"+
			"--------------------------------<br>"+
			"这个林克来自《塞尔达传说：风之律动》，偶尔也会被称为猫眼林克。在大乱斗中，他的技能组看似和另外两个林克相同，但他的炸弹爆炸范围更大，上必杀滞空时间也更长。<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"“故事到处都有，传说仅此一个。”",
			sst_wolf:"0384. 沃鲁夫/Wolf O\x27Donnell/ウルフ<br>"+
			"系列：Star Fox（星际火狐）<br>"+
			"初登场：Star Fox 64（星际火狐64）<br>"+
			"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"沃鲁夫曾经为安德罗斯效力，和“星际火狐”小队多次交战。在安德罗斯被流放后，他自己组建了“星狼”小队。虽然偶尔也会和火狐并肩作战，但总体而言他们还是死对头。他的通常必杀技射出的子弹比火狐和佛克都要强力。<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"游戏结束了！星际火狐！",
			sst_young_link:"0176. 幼年林克/Young Link/こどもリンク<br>"+
			"系列：The Legend of Zelda（塞尔达传说）<br>"+
			"初登场：The Legend of Zelda: Ocarina of Time（塞尔达传说 时之笛）<br>"+
			"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"《塞尔达传说：时之笛》中的林克，在原作中可以通过时之笛切换幼年和成年两个形态。幼年形态是不能使用大师剑的。在大乱斗中，他的通常必杀技射出的是火箭，相比另两个林克的箭性能更好。<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"老摸有时候能写出让我吐血的武将……比如这个……",
			sst_ocarina_of_time_link:"0176. 幼年林克/Young Link/こどもリンク<br>"+
			"系列：The Legend of Zelda（塞尔达传说）<br>"+
			"初登场：The Legend of Zelda: Ocarina of Time（塞尔达传说 时之笛）<br>"+
			"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"《塞尔达传说：时之笛》中的林克，在原作中可以通过时之笛切换幼年和成年两个形态。幼年形态是不能使用大师剑的。在大乱斗中，他的通常必杀技射出的是火箭，相比另两个林克的箭性能更好。<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"物是人非，沧海桑田……",
			sst_spring_man:"1287. 弹簧人/Spring Man/スプリングマン<br>"+
			"系列：ARMS（神臂斗士）<br>"+
			"初登场：ARMS（神臂斗士）<br>"+
			"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"在弹簧竞技场进行修炼的、热血的弹簧斗士。他的梦想是有朝一日能在ARMS大奖赛中打败最强铜领，夺得冠军。他最喜欢吃披萨，靠自己的手臂，可以在吃的时候拉出长长的奶酪丝。在大乱斗中，作为辅助模型的他会使用弹簧手臂连击对手。<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"然而却是面面参战了……",
			sst_joker:"1304. Joker（怪盗）/Joker (Phantom Thief)/ジョーカー（怪盗）<br>"+
			"系列：Persona（女神异闻录）<br>"+
			"初登场：Persona 5（女神异闻录5）<br>"+
			"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"P5主人公在异世界的形态，是由反抗意识觉醒了人格面具的样子。初始人格面具为亚森——大乱斗里也是这家伙，戴着白鸟外形眼部为黑色的面具。身穿黑色的风衣，棕色古巴高跟鞋，灰衬衫和黑色长裤，配上标志性的红色手套。代号“Joker”，是“王牌”的意思。<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"“真不愧是Joker！”",
			sst_rex:"0966. 莱克斯/Rex/レックス<br>"+
			"系列：Xenoblade Chronicles（异度神剑）<br>"+
			"初登场：Xenoblade Chronicles 2（异度神剑2）<br>"+
			"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"平时生活在巨神兽“青龙”的身上，以打捞为生的少年，梦想是登上远方的世界树，去往“乐园”。有一次接受了报酬丰厚的打捞沉船委托，并意外的唤醒了沉船中的异刃“焰”。他接受了焰分给他的一半生命，并立志要带她一起去乐园。<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"“莱克斯，你一个人……也已经没问题了吧。”",
			sst_cuphead_mugman:"1398. 茶杯头/Cuphead/カップヘッド<br>"+
			"系列：Cuphead（茶杯头）<br>"+
			"初登场：Cuphead（茶杯头）<br>"+
			"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"人如其名，脑袋是个茶杯，甚至还可以拿下来或者用吸管吸里面的水。他和弟弟马克杯人误入魔鬼的赌场并被魔鬼欺骗，不得不帮助魔鬼回收他其他债主的灵魂——这些债主可一个比一个难缠。所以说，一开始就不要跟魔鬼打交道啊！<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"“不要和恶魔做交易。”",
			sst_krystal:"0387. 水晶/Krystal/クリスタル<br>"+
			"系列：Star Fox（星际火狐）<br>"+
			"初登场：Star Fox Adventures（星际火狐冒险）<br>"+
			"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"她曾经被囚禁在水晶中，这段经历太符合她的名字了。火狐在救出水晶之后邀请她加入小队，在小队中，她的读心能力发挥了很大作用。她之后还和火狐坠入爱河，不知读心能力是促成了还是阻碍了他们的关系呢？<br>"+
			"——煤球，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"可惜当初没能在Brawl参战，后来彻底没机会了……",
			sst_snake:"0749. 固蛇/Solid Snake/ソリッド・スネーク<br>"+
			"系列：Metal Gear（合金装备）<br>"+
			"初登场：（）<br>"+
			"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"前Foxhound成员，IQ达180，能操流利六国语言。有“传说之佣兵”的称号，被称为“将不可能化为可能的男人”，是潜入任务中的专家，藏身纸皮箱躲过守卫进行潜入行动的桥段一直就为人津津乐道。<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"“The Man Who Makes the Impossible Possible.”",
			sst_mega_man:"0864. 洛克人/Mega Man/ロックマン<br>"+
			"系列：Mega Man（洛克人）<br>"+
			"初登场：Mega Man（洛克人）<br>"+
			"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"CAPCOM公司的元祖洛克人系列的主角，首次登场于1987年。他需要通过各个关卡，打败关底的机器人Boss得到他们的武器。在大乱斗中，他所使用的各种技能就来源于此，总共超过10种。<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"有段时间老摸一直在玩洛克人……",
			sst_captain_falcon:"0591. 飞隼队长/Captain Falcon/キャプテン・ファルコン<br>"+
			"系列：F-Zero（零式赛车）<br>"+
			"初登场：F-Zero（零式赛车）<br>"+
			"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"在F-Zero赛车大赛中，飞隼队长驾驶着他的“蓝色猎鹰”取得了优秀的成绩。虽然参战了大乱斗，但他的真实身份仍然是个谜。他的速度和力量都很强，还有演出效果爆炸的招牌技能“飞隼拳”，可以在落地的时候尝试使用哦！<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"亮招来见。",
			sst_jigglypuff:"0409. 胖丁/Jigglypuff/プリン<br>"+
			"系列：Pokémon（宝可梦）<br>"+
			"初登场：（）<br>"+
			"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"胖丁是一般+妖精属性的宝可梦，以其催眠性的歌声闻名。在大乱斗中，它空战很强，还有多段跳的能力。不过它的缺点是太轻了，如果露出破绽，很容易就会被击飞。<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"睡觉即死连！另外唱歌真好zzzzzzzz……",
			sst_lucario:"0417. 路卡利欧/Lucario/ルカリオ<br>"+
			"系列：Pokémon（宝可梦）<br>"+
			"初登场：（）<br>"+
			"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"路卡利欧是格斗+钢属性的宝可梦，通过观察和操纵波导来攻击。路卡利欧受到的伤害越多，自身的伤害也越高，最多可以造成1.8倍的伤害，此时波导弹也会变大！如果敌人没有击杀路卡利欧，那就很难办了。<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"波导之力永存吾心。",
			sst_pichu:"0410. 皮丘/Pichu/ピチュー<br>"+
			"系列：Pokémon（宝可梦）<br>"+
			"初登场：（）<br>"+
			"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"皮卡丘尚未进化时就是皮丘。它还不擅长蓄电。惊讶或者发笑时，就会立刻进行放电。在大乱斗中，虽然皮丘各个技能的力度比皮卡丘强，但它每次放电都会伤到自己。<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"自损八百，可伤敌一千——某张姓女子。",
			sst_dedede:"0325. 帝帝帝大王/King Dedede/デデデ大王<br>"+
			"系列：Kirby（星之卡比）<br>"+
			"初登场：Kirby\x27s Dream Land（星之卡比）<br>"+
			"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"他自称这片大陆的大王，但其实没什么统治的欲望。他是个大吃货，所以不出意外的是个重型斗士。和他有关的bgm都很魔性。虽然体积大、速度慢，但是可以多段跳。他的火箭锤威力非常惊人。<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"你休想欺负我的瓦豆鲁迪！",
			sst_corrin:"0618. 神威（男性）/Corrin (Male)/カムイ（男性）<br>"+
			"0619. 神威（女性）/Corrin (Female)/カムイ（女性）<br>"+
			"系列：Fire Emblem（火焰纹章）<br>"+
			"初登场：Fire Emblem Fates（火焰纹章if）<br>"+
			"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"《火焰纹章：if》的主角，形象和性别可以自定义。出生和成长分别在两个文化截然不同的王国，在成人后又卷入两国之间的冲突。拥有龙的血统，可以将身体的部分或全部变为龙形态。<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"《火焰纹章：if》的主角，形象和性别可以自定义。因为常年被关在城堡里，所以对人情世故一无所知，因此很被亲友们担心。手里的剑是最终形态的“夜刀神”，只认她一个主人。<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"我选择……",
			sst_corrin_male:"0618. 神威（男性）/Corrin (Male)/カムイ（男性）<br>"+
			"系列：Fire Emblem（火焰纹章）<br>"+
			"初登场：Fire Emblem Fates（火焰纹章if）<br>"+
			"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"《火焰纹章：if》的主角，形象和性别可以自定义。出生和成长分别在两个文化截然不同的王国，在成人后又卷入两国之间的冲突。拥有龙的血统，可以将身体的部分或全部变为龙形态。<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"我选择……<br>（已选择男性）",
			sst_corrin_female:"0619. 神威（女性）/Corrin (Female)/カムイ（女性）<br>"+
			"系列：Fire Emblem（火焰纹章）<br>"+
			"初登场：Fire Emblem Fates（火焰纹章if）<br>"+
			"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"《火焰纹章：if》的主角，形象和性别可以自定义。因为常年被关在城堡里，所以对人情世故一无所知，因此很被亲友们担心。手里的剑是最终形态的“夜刀神”，只认她一个主人。<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"我选择……<br>（已选择女性）",
			sst_steve:"1428. 史蒂夫/Steve/スティーブ<br>"+
			"系列：Minecraft（我的世界）<br>"+
			"初登场：Minecraft（我的世界）<br>"+
			"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"来自一个由立方体构成的世界的神秘人物，身为一名探险家（同时还是一名矿工），他将（和他心爱的镐子）探索这个世界，并与各位斗士们进行一次武艺切磋。<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"“想挖到钻石吗？尝试在Y=11找找！”<br>"+
			"--------------------------------<br>"+
			"（Show-K注：Steve能参战我是真的很惊讶，猜到他会来却又猜不到他会在这个时候来吧……）",
			sst_ma:"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"我们都是初级人～",
			sst_feiji:"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"打了吗？还没有！",
			sst_sonic:"0775. 索尼克/Sonic the Hedgehog/ソニック・ザ・ヘッジホッグ<br>"+
			"系列：Sonic the Hedgehog（刺猬索尼克）<br>"+
			"初登场：Sonic the Hedgehog（刺猬索尼克）<br>"+
			"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"索尼克系列的主角，很好相处，喜欢用速度证明自己的实力。事实上，他是大乱斗中跑步速度最快的斗士。他可以利用速度优势躲避攻击并进行快攻。在过去，索尼克系列曾经对马力欧系列形成了强力的竞争。<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"“SONIC SPEED！”",
			sst_hero:"1324. 勇者（勇者斗恶龙XI S）/Hero (DRAGON QUEST XI S)/勇者（ドラゴンクエストXI S）<br>"+
			"1325. 勇者（勇者斗恶龙III）/Hero (DRAGON QUEST III)/勇者（ドラゴンクエストIII）<br>"+
			"1326. 勇者（勇者斗恶龙IV）/Hero (DRAGON QUEST IV)/勇者（ドラゴンクエストIV）<br>"+
			"1327. 勇者（勇者斗恶龙VIII）/Hero (DRAGON QUEST VIII)/勇者（ドラゴンクエストVIII）<br>"+
			"系列：Dragon Quest（勇者斗恶龙）<br>"+
			"初登场：Dragon Quest（勇者斗恶龙）<br>"+
			"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"勇者斗恶龙系列中的每个主角都不会说话，名字也是玩家自定义的，但他们的设定各不相同。《勇者斗恶龙XI S》中的勇者左手有世界树的标志，然而因为国王被魔王控制，他很长一段时间都被污蔑为恶魔之子并遭到追捕。<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"系列中最为标志性的勇者，通常被称为洛特，《勇者斗恶龙》和《勇者斗恶龙II》的主角都是他的后代。他为了完成父亲未竟的讨伐魔王大业，而和三个同伴一同冒险。这也是拥有转职系统的第一作。<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"这位勇者虽然肩负击败魔王的预言，生活却很平静，直到魔王发现了他隐居的村庄并将之洗劫。勇者的青梅竹马为掩护他逃跑而牺牲。一无所有的勇者决心解开自己的身世之谜，完成使命。<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"这位勇者本来是一名皇家护卫，邪恶小丑诅咒了整个王国，将人们都变成了动植物，他只能带着变成动物的国王与公主逃离，寻找击败小丑的方法。他口袋里有一只名为Munchie的仓鼠，如果给它吃奶酪，它也会帮助战斗。<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"在？你超级摸奖了。",
			sst_fox:"0382. 火狐/Fox McCloud/フォックス<br>"+
			"系列：Star Fox（星际火狐）<br>"+
			"初登场：Star Fox（星际火狐）<br>"+
			"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"火狐是星际佣兵小队“星际火狐”的队长，多次和邪恶的安德罗斯交战。他的飞机驾驶技术出神入化，即使在大乱斗里难得开一次飞机，他也能依靠自身的高速进行战斗。他的反射盾可以反射对方的飞行道具，同时增加其威力。<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"这里是火狐，前来支援！",
			sst_mii_fighters:"1090. Mii格斗类型/Mii Brawler/Miiファイター 格闘タイプ<br>"+
			"1091. Mii剑术类型/Mii Swordfighter/Miiファイター 剣術タイプ<br>"+
			"1092. Mii射击类型/Mii Gunner/Miiファイター 射撃タイプ<br>"+
			"系列：Super Smash Bros.（任天堂明星大乱斗）<br>"+
			"初登场：Super Smash Bros. for Nintendo 3DS/Super Smash Bros. for Wii U（任天堂明星大乱斗3DS/任天堂明星大乱斗Wii U）<br>"+
			"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"这个斗士的形象以玩家的Mii形象为基准。他/她擅长近身格斗，十分敏捷，以各种高机动性的技能灵活应战，并且冲刺和跳跃性能非常优秀。和对手贴身大干一场吧——你很快就能击败他们的！<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"以玩家的Mii形象为基准，使用剑的斗士。攻击距离相当不错，但是出招相应较慢。当然，你可以给他装上蓄力、反击或飞行道具技能。<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"带有臂炮的Mii斗士，非常适合喜欢远距离战的玩家。Mii射击类型有很多类型的飞行道具，你可以自取所需、灵活运用。不过也不要忘了多用A键的各种技能哦！<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"好吧，全部自定义。",
			sst_alex:"1429. 艾莉克斯/Alex/アレックス（Minecraft）<br>"+
			"系列：Minecraft（我的世界）<br>"+
			"初登场：Minecraft（我的世界）<br>"+
			"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"身为史蒂夫的女朋友，她也一同来到了大乱斗的世界，并在这里继续进行她的创造与建设，小心她所布置的各种机关！它们可能会让你陷入大麻烦。<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"好像Minecraft官方的确有说过她是史蒂夫的女朋友。",
			sst_min_min:"1289. 面面/Min Min/ミェンミェン<br>"+
			"1414. 面面（斗士）/Min Min (Fighter)/ミェンミェン（ファイター）<br>"+
			"系列：ARMS（神臂斗士）<br>"+
			"初登场：ARMS（神臂斗士）<br>"+
			"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"代表自家的拉面馆“面天饭食堂”出战的格斗拉面少女，超喜欢吃拉面。她可以将对手的攻击踢回去，也可以让左臂化为龙臂，增加攻击力。她还在原作最后一次狂欢多人赛中取得了总冠军哦！<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"在2020年6月，面面作为第6个DLC斗士加入了大乱斗，打破了“有命魂和Mii服装的系列就无法参战”的前例。她使用A和B分别控制双臂的机制相当特殊，而踢回飞行道具、龙臂等要素也很还原。总之大家跟着她一起来喊——“我爱拉面！”<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"我！爱！拉！面！",
			sst_pikachu:"0407. 皮卡丘/Pikachu/ピカチュウ<br>"+
			"系列：Pokémon（宝可梦）<br>"+
			"初登场：（）<br>"+
			"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"世界知名的超人气宝可梦！皮卡丘是电属性宝可梦，红红的脸颊储存电力用来作战。在大乱斗里，皮卡丘的强度算是非常高的，能使用迅速而强力的攻击。他的电光石火可以改变2次方向。<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"皮～卡～丘！",
			sst_falco:"0383. 佛克/Falco Lombardi/ファルコ<br>"+
			"系列：Star Fox（星际火狐）<br>"+
			"初登场：Star Fox（星际火狐）<br>"+
			"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"“星际火狐”小队里才华横溢、不拘小节的队员。在加入火狐的小队之前，他曾经在多个帮派待过。在大乱斗里，他的跳跃和空战能力很不错，并且可以将反射盾踢出去进行攻击。<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"放心，一个也别想逃。",
			sst_pyra_mythra:"1458. 焰（斗士）/Pyra(Fighter)/ホムラ（ファイター）<br>"+
			"1459. 光（斗士）/Mythra(Fighter)/ヒカリ（ファイター）<br>"+
			"系列：Xenoblade Chronicles（异度神剑）<br>"+
			"初登场：Xenoblade Chronicles 2（异度神剑2）<br>"+
			"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"没错，不是莱克斯参战，而是天之圣杯参战了！——当然，莱克斯还是会在进场、炫耀和胜利画面中出现的。作为斗士的焰速度较慢，但伤害和击杀能力非常强。如有需要，她还能随时切换为光。立绘姿势来源于之前出的手办。<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"光的机动性和回场能力明显高于焰，但她的招式伤害较低。此外，在恰当的时机闪避还能触发“因果律预测”，创造反击机会。灵活运用天之圣杯不同形态的特点是取胜的关键。立绘姿势同样来源于之前出的手办。<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"最终，少年遇到了少女。",
			sst_enderman:"1434. 末影人/Enderman/エンダーマン<br>"+
			"系列：Minecraft（我的世界）<br>"+
			"初登场：Minecraft（我的世界）<br>"+
			"武将作者：mario not mary、Yumikohimi<br>"+
			"--------------------------------<br>"+
			"细长的四肢，紫色的眼睛。这比黑夜更黑暗的生物可不是你瞪眼的理想对象。它们通常出现在下界和末地，在主世界较为稀有。而更为稀有的，是曾经与它的眼神接触，然后幸存下来讲述其恐怖经历的玩家。不过放心，参加这次大乱斗的末影人并不会这样做，而是用各种技巧来击垮对手。<br>"+
			"——谁的错820、封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"小黑！",
			sst_sephiroth:"1439. 萨菲罗斯/Sephiroth/セフィロス<br>"+
			"系列：Final Fantasy（最终幻想）<br>"+
			"初登场：Final Fantasy VII（最终幻想VII）<br>"+
			"武将作者：mario not mary<br>"+
			"--------------------------------<br>"+
			"曾经是神罗公司里最伟大的战士，也是人和外星生命“杰诺瓦”进行融合的实验产物。他了解到自己身世之后，逐渐对人类产生恨意，开始了一系列的毁灭活动。只要有足够杰诺瓦细胞，他就能够重生。似乎以在战斗中和精神上折磨克劳德为乐。<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"Sephiroth♪~",
			sst_pokemon_trainer_blue:"0413. 宝可梦训练家（女性）/Pokémon Trainer (Female)/ポケモントレーナー（女性）<br>"+
			"系列：Pokémon（宝可梦）<br>"+
			"初登场：Pokémon Red and Blue（宝可梦 红蓝）<br>"+
			"武将作者：南柯<br>"+
			"--------------------------------<br>"+
			"在早一些的《宝可梦》游戏中，如果你选择了女性训练家，则你的劲敌就会变成男性，反之亦然。从《宝可梦：X/Y》开始，训练家们不但可以选择肤色，还可以更换服装了——夺冠虽然重要，但打扮也不可或缺！<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"来看看新人设计的第一个武将！",
			sst_geno:"0104. Geno/ジーノ<br>"+
			"系列：Mario（马力欧）<br>"+
			"初登场：Super Mario RPG（超级马力欧RPG）<br>"+
			"武将作者：Show-K<br>"+
			"--------------------------------<br>"+
			"他是星之族的一员，本来没有身体，本名也是无法拼读的“❤♪!?”，所以选择附身在一个叫Geno的木偶上行动。他总是自信满满，擅长分析问题，战斗能力也相当出色。他会和马力欧、桃花公主、酷霸王和Mallow一起打败恶人。<br>"+
			"——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>"+
			"--------------------------------<br>"+
			"所以Square什么时候能把超级马力欧RPG交一下！",
		},//武将介绍（选填）
		characterTitle:{
			sst_mario:"炎烈意决",
			sst_link:"无言的勇者",
			sst_yoshi:"贪吃的守护者",
			sst_wario:"恶贯满盈",
			sst_villager:"采菊东篱",
			sst_zelda:"沉毅的王女",
			sst_ganondorf:"苏醒的魔王",
			sst_dr_mario:"末日郎中",
			sst_palutena:"光之神话",
			sst_marth:"英雄王",
			sst_rosalina:"众星捧月",
			sst_zero_suit_samus:"战火零星",
			sst_luigi:"绿叶清风",
			sst_bowser:"侵天之火",
			sst_peach:"灼灼其华",
			sst_byleth_female:"神祖破天",
			sst_byleth_male:"春雨天劾",
			sst_massy:"唯一神",
			sst_samus:"银河战士",
			sst_ridley:"狡猾的死神",
			sst_dark_samus:"暗流涌动",
			sst_mr_game_watch:"平面住民",
			sst_mnm:"傲世轻物",
			sst_yumiko:"酸甜可喵",
			sst_haine:"渣男",
			sst_terry:"饿狼传说",
			sst_simon:"除魔圣鞭",
			sst_incineroar:"擂台的猛火",
			sst_greninja:"水无常形",
			sst_kirby:"灯火之星",
			sst_k_rool:"暴君",
			sst_donkey_kong:"丛林的王者",
			sst_richter:"血之轮回",
			sst_pokemon_trainer_red:"白银山的王者",
			sst_isabelle:"尽忠职守",
			sst_chrom:"英雄王的血裔",
			sst_daisy:"泥金万点",
			sst_meta_knight:"暗夜",
			sst_little_mac:"顽强的斗魂",
			sst_lucina:"觉醒的圣王女",
			sst_oc:"恶霸",
			sst_mr_8:"东北吴彦祖",
			sst_dark_link:"镜中花月影",
			sst_kyuukou:"灶台上的猛火",
			sst_windier:"笑哭怪人",
			sst_rentianshu:"星火的第一章",
			sst_srf:"步弄清影",
			sst_bowser_jr:"漫天乱书",
			sst_koopalings:"坐镇七方",
			sst_ryu:"求道的武者",
			sst_ken:"红莲格斗王",
			sst_sans:"审判之眼",
			sst_waluigi:"奸巧狞猾",
			sst_master_hand:"秩序之光",
			sst_ike:"战场的屠夫",
			sst_sheik:"倩影扫弦音",
			sst_miumiu:"端砚点朱砂",
			sst_toon_link:"海风奏鸣曲",
			sst_wolf:"贪狼吞星",
			sst_young_link:"时光的笛音",
			sst_ocarina_of_time_link:"时光的笛音",
			sst_spring_man:"拳簧",
			sst_joker:"心之怪盗",
			sst_rex:"天之御刃者",
			sst_cuphead_mugman:"推杯换盏",
			sst_krystal:"冰清玉洁",
			sst_snake:"潜龙谍影",
			sst_mega_man:"蓝色英雄",
			sst_captain_falcon:"风驰电掣",
			sst_jigglypuff:"轻音留香",
			sst_lucario:"波导的勇者",
			sst_pichu:"刹那光火",
			sst_dedede:"恶食大王",
			sst_corrin:"一步千年",
			sst_corrin_male:"一步千年",
			sst_corrin_female:"一步千年",
			sst_steve:"世界创造者",
			sst_ma:"用晦而藏明",
			sst_feiji:"通巧晓变",
			sst_sonic:"音爆刺猬",
			sst_hero:"龙寻者",
			sst_fox:"狐舞星河",
			sst_mii_fighters:"瞬缘传说",
			sst_alex:"世界探索者",
			sst_min_min:"玉盘珍馐",
			sst_pikachu:"电光一闪",
			sst_falco:"鹰击长空",
			sst_pyra_mythra:"天之圣杯",
			sst_enderman:"末地住民",
			sst_sephiroth:"片翼天使",
			sst_pokemon_trainer_blue:"三位一体",
			sst_geno:"星路战士",
		},//武将标题（用于写称号或注释）（选填）
		skill:{
			//后台技能
			_sst_start:{
				trigger:{global:"gameStart"},
				charlotte:true,
				silent:true,
				content:function(){
					_status.sst_started=true;
				},
			},
			_sst_sex_select:{
				trigger:{global:"gameStart"},
				charlotte:true,
				silent:true,
				firstDo:true,
				priority:2020,
				filter:function(event,player){
					return player.sex=="none";
				},
				content:function(){
					"step 0"
					player.chooseControl("male","female").set("prompt","请选择性别").set("ai",function(){return ["male","female"].randomGet()});
					"step 1"
					if(["sst_corrin"].contains(player.name)){
						player.setAvatar(player.name,player.name+"_"+result.control);
					}
					player.sex=result.control;
					game.log(player,"将性别变为了","#y"+get.translation(result.control));
				},
			},
			_sst_group_select:{
				trigger:{global:"gameStart"},
				charlotte:true,
				silent:true,
				firstDo:true,
				priority:2019,
				filter:function(event,player){
					return !lib.config.sst_smash&&player.group=="sst_smash";
				},
				content:function(){
					"step 0"
					player.chooseControl("sst_light","sst_darkness","sst_spirit","sst_reality").set("prompt","请选择势力").set("ai",function(){return ["sst_light","sst_darkness","sst_spirit","sst_reality"].randomGet()});
					"step 1"
					player.changeGroup(result.control);
					//game.log(player,"将性别变为了","#y"+get.translation(result.control));
				},
			},
			_sst_sonic_phase:{
				trigger:{player:"phaseBegin"},
				charlotte:true,
				silent:true,
				firstDo:true,
				priority:2020,
				content:function(){
					player.addTempSkill("sst_phase_sonic","roundStart");
				},
			},
			sst_phase_sonic:{
				charlotte:true,
			},
			_sst_judge_count:{
				trigger:{player:"judgeBegin"},
				charlotte:true,
				silent:true,
				content:function(){
					if(!_status.sst_judge_count) _status.sst_judge_count=0;
					_status.sst_judge_count++;
				},
			},
			//标准技能
			//Mario
			sst_jueyi:{
				trigger:{player:"useCardToPlayer"},
				filter:function(event,player){
					return event.getParent().targets.contains(event.target)&&event.target.countCards("h")>player.countCards("h");
				},
				forced:true,
				logTarget:"target",
				content:function(){
					player.draw();
					trigger.getParent().directHit.push(trigger.target);
				},
				ai:{
					directHit_ai:true,
					skillTagFilter:function(player,tag,arg){
						return arg.target.countCards("h")>player.countCards("h");
					},
				},
			},
			//Link
			sst_qingyong:{
				trigger:{
					player:"phaseUseBefore",
				},
				frequent:true,
				content:function(){
					"step 0"
					player.draw();
					"step 1"
					var next=player.chooseToUse("倾勇：你可以将一张牌当【杀】对一名其他角色使用（不受距离限制，不计入使用次数）");
					next.logSkill="sst_qingyong";
					//next.set("openskilldialog",get.prompt2("sst_qingyong"));
					next.set("norestore",true);
					next.set("_backupevent","sst_qingyongx");
					next.backup("sst_qingyongx");
					next.set("addCount",false);
					next.set("filterTarget",function(card,player,target){
						return lib.filter.targetEnabled2({name:"sha"},player,target);
					});
				},
			},
			sst_qingyongx:{
				viewAs:{name:"sha"},
				filterCard:true,
				position:"he",
				check:function(card){return 5-get.value(card)},
			},
			//Yoshi
			sst_tanshi:{
				trigger:{
					global:"gainBegin",
				},
				filter:function(event,player){
					//return event.num>0&&event.player.countCards("h")>player.countCards("h");
					return event.player!=player&&event.getParent("phaseDraw")&&event.getParent("phaseDraw").player==event.player&&!event.getParent("phaseDraw").numFixed&&event.player.countCards("h")>player.countCards("h");
				},
				direct:true,
				content:function(){
					"step 0";
					player.chooseBool(get.prompt("sst_tanshi",trigger.player),"你可以获得"+get.translation(trigger.player)+"所摸的"+get.cnNumber(trigger.cards.length)+"张牌").set("ai",function(){
						return get.attitude(_status.event.player,_status.event.targetx)<0;
					}).set("targetx",trigger.player);
					"step 1"
					if(result.bool){
						player.logSkill("sst_tanshi",trigger.player);
						game.log(player,"获得了",trigger.player,"所摸的",get.cnNumber(trigger.cards.length),"张牌");
						trigger.player=player;
						//player.gain(trigger.cards,trigger.player,"gain2");
					}
				},
				ai:{
					expose:0.2,
				},
			},
			//Wario
			sst_haoduo:{
				trigger:{
					player:["gainEnd","loseEnd"],
				},
				filter:function(event,player){
					if(event.name=="lose"){
						return event.hs&&event.hs.length&&player.isMinHandcard()&&event.getParent(2).name!="sst_haoduo"&&game.hasPlayer(function(current){
							return current.countCards("h");
						});
					}
					else if(event.name=="gain"){
						return event.cards&&event.cards.length&&player.hasCard(function(card){
							return event.cards.contains(card);
						},"h")&&player.isMinHandcard()&&event.getParent(2).name!="sst_haoduo";
					}
				},
				direct:true,
				content:function(){
					"step 0"
					player.chooseTarget(get.prompt("sst_haoduo"),"你可以与一个手牌最多的角色交换手牌",function(card,player,target){
						return target.isMaxHandcard();
					}).set("ai",function(target){
						var player=_status.event.player;
						var valp=0;
						var cardsp=player.getCards("h");
						for(var i=0;i<cardsp.length;i++){
							valp+=get.value(cardsp[i]);
						}
						valp=valp/cardsp.length;
						var valt=0;
						var cardst=target.getCards("h");
						for(var i=0;i<cardst.length;i++){
							valt+=get.value(cardst[i]);
						}
						valt=valt/cardst.length;
						return get.sgn(get.attitude(player,target)*(valp-valt));
					});
					"step 1"
					if(result.targets){
						player.logSkill("sst_haoduo",result.targets);
						player.swapHandcards(result.targets[0]);
					}
				},
				ai:{
					nolose:1,
					noh:1,
					expose:0.2,
				},
			},
			//Villager
			sst_huandai:{
				group:["sst_huandai2"],
				trigger:{
					player:"phaseZhunbeiBegin",
				},
				filter:function(event,player){
					return game.hasPlayer(function(current){
						return current!=player&&current.countCards("h");
					});
				},
				direct:true,
				content:function(){
					"step 0"
					player.chooseTarget(get.prompt2("sst_huandai"),function(card,player,target){
						return target!=player&&target.countCards("h");
						//return target!=player;
					}).set("ai",function(target){
						return get.attitude(target,_status.event.player);
					});
					"step 1"
					if(result.targets){
						player.logSkill("sst_huandai",result.targets);
						result.targets[0].chooseCard([1,Infinity],"还贷：是否交给"+get.translation(player)+"任意张手牌？").set("ai",function(card){
							var player=_status.event.player;
							var target=_status.event.targetx;
							if(get.attitude(player,target)>0) return 8-get.value(card);
							return 0;
						}).set("targetx",player);
						//player.storage.sst_huandai_target=result.targets[0];
						event.target=result.targets[0];
					}
					else{
						event.finish();
					}
					"step 2"
					if(result.cards&&result.cards.length){
						event.target.give(result.cards,player);
						player.storage.sst_huandai_target=event.target;
						player.storage.sst_huandai=result.cards.length;
					}
				},
				ai:{
					effect:{
						player:function(card,player){
							if(player.storage.sst_huandai_target&&player.countUsed()<player.storage.sst_huandai) return [1,2];
						},
					},
				},
			},
			sst_huandai2:{
				trigger:{
					player:"phaseJieshuBegin",
				},
				filter:function(event,player){
					return player.storage.sst_huandai&&player.storage.sst_huandai_target;
				},
				forced:true,
				content:function(){
					if (player.countUsed()>=player.storage.sst_huandai){
						player.line(player.storage.sst_huandai_target,"green");
						player.storage.sst_huandai_target.draw(player.storage.sst_huandai);
					}
					else{
						player.storage.sst_huandai_target.line(player);
						player.damage(player.storage.sst_huandai_target);
					}
					delete player.storage.sst_huandai_target;
					delete player.storage.sst_huandai;
				},
			},
			//Zelda
			sst_anzhi:{
				trigger:{
					global:"useCard",
				},
				filter:function(event,player){
					return event.player.countUsed()>5-player.countDisabled()&&event.player.countCards("he");
				},
				direct:true,
				content:function(){
					player.discardPlayerCard(get.prompt("sst_anzhi",trigger.player),trigger.player,"he").set("logSkill",["sst_anzhi",trigger.player]);
				},
				ai:{
					threaten:function(player,target){
						return 1+player.countDisabled()*0.2;
					},
					expose:0.2,
				},
			},
			sst_yinjie:{
				trigger:{
					global:"phaseZhunbeiBegin",
				},
				filter:function(event,player){
					return event.player!=player&&event.player.hp>=player.hp&&5-player.countDisabled();
				},
				logTarget:"player",
				check:function(event,player){
					return get.attitude(player,event.player)<0;
				},
				content:function(){
					"step 0"
					player.chooseToDisable();
					"step 1"
					player.discard(player.getCards("h"));
					trigger.player.storage.sst_yinjie=player;
					//trigger.player.addTempSkill("sst_yinjie_range");
					trigger.player.addTempSkill("sst_yinjie2");
					trigger.player.markSkillCharacter("sst_yinjie2",player,"印结",get.translation(player)+"与你相互距离为1，本回合内你使用牌只能指定"+get.translation(player)+"为目标，结束阶段，"+get.translation(player)+"获得你所有牌");
					//player.storage.sst_yinjie=trigger.player;
					//player.addTempSkill("sst_yinjie_target");
				},
				ai:{
					threaten:function(player,target){
						if(5-player.countDisabled()) return 3;
					},
					expose:0.3,
				},
			},
			sst_yinjie2:{
				trigger:{
					player:["phaseJieshuBegin"],
				},
				filter:function(event,player){
					return true;
				},
				direct:true,
				forced:true,
				onremove:function(player){
					player.unmarkSkill("sst_yinjie2");
				},
				content:function(){
					if(player.storage.sst_yinjie.isAlive()){
						player.storage.sst_yinjie.logSkill("sst_yinjie",player);
						player.storage.sst_yinjie.gain(player.getCards("he"),player,"giveAuto");
					}
				},
				mod:{
					globalFrom:function(from,to,num){
						if(from.storage.sst_yinjie==to){
							return -Infinity;
						}
					},
					globalTo:function(from,to,num){
						if(from==to.storage.sst_yinjie){
							return -Infinity;
						}
					},
					playerEnabled:function(card,player,target){
						if(player.storage.sst_yinjie!=target) return false;
					},
				},
				ai:{
					nokeep:true,
				},
			},
			sst_qinwei:{
				unique:true,
				zhuSkill:true,
				filter:function(event,player){
					return player.hasZhuSkill("sst_qinwei");
				},
				mod:{
					attackFrom:function(from,to,distance){
						if(from.hasZhuSkill("sst_qinwei")&&from.storage.range) return distance-from.storage.range;
					},
					globalFrom:function(from,to,distance){
						if (from.hasZhuSkill("sst_qinwei")&&from.storage.distance_from) return distance-1;//攻击距离加1
					},
					globalTo:function(from,to,distance){
						if (to.hasZhuSkill("sst_qinwei")&&to.storage.distance_to) return distance+1;//防御距离加1
					},
				},
				group:["sst_qinwei_check"],
				subSkill:{
					check:{
						trigger:{
							global:["equipEnd","loseEnd","die"],
						},
						filter:function(event,player){
							//return event.player==players[0];
							return player.hasZhuSkill("sst_qinwei");
						},
						silent:true,
						content:function(){
							"step 0"
							var players=game.filterPlayer();
							players.remove(player);
							for(var i=0;i<players.length;i++){
								if(players[i].group!=player.group){
									players.remove(players[i]);
									if(i<players.length) i--;
								}
							}
							players.sort(function(a,b){
								return Math.max(1,get.distance(player,a))-Math.max(1,get.distance(player,b));
							});
							var distance=Math.max(1,get.distance(player,players[0]));
							for(var i=0;i<players.length;i++){
								if(Math.max(1,get.distance(player,players[i]))>distance){
									players.splice(i);
									break;
								}
							}
							event.players=players;
							"step 1"
							//player.draw();
							//var skills=trigger.player.getSkills("e",true);
							//if(player.storage.sst_qinwei&&player.storage.sst_qinwei.length>0){
							//for(var i=0;i<player.storage.sst_qinwei.length;i++){
							//if(!player.hasSkill(player.storage.sst_qinwei[i])){
							player.removeAdditionalSkill("sst_qinwei");
							player.storage.range=0;
							player.storage.distance_from=false;
							player.storage.distance_to=false;
							//}
							//}
							//}
							"step 2"
							//var es=trigger.player.getSkills("e",true);
							var players=event.players;
							var es=[];
							player.storage.range=0;
							for(var i=0;i<players.length;i++){
								es=es.concat(players[i].getSkills("e",true));
								if(players[i].getAttackRange(true)-1>player.storage.range) player.storage.range=players[i].getAttackRange(true)-1;
								if(players[i].getEquip(4)) player.storage.distance_from=true;
								if(players[i].getEquip(3)) player.storage.distance_to=true;
							}
							if(es){
								//player.storage.sst_qinwei=es;
								for(var i=0;i<es.length;i++){
									//if(!player.hasSkill(es[i])){
									player.addAdditionalSkill("sst_qinwei",es[i],true);
									//}
								}
							}
						},
					},
				},
			},
			//Ganondorf
			sst_chengli:{
				trigger:{player:"phaseJieshuBegin"},
				filter:function(event,player){
					return !player.getDamagedHp();
				},
				forced:true,
				content:function () {
					player.loseHp();
				},
				group:["sst_chengli2","sst_chengli3","sst_chengli4"],
			},
			sst_chengli2:{
				enable:"chooseToUse",
				filter:function(event,player){
					/*
					if(event.type=="wuxie"||event.type=="respondShan"||!player.getDamagedHp()) return false;
					var list=["sha", "tao", "shan", "jiu", "taoyuan", "wugu", "juedou", "huogong", "jiedao", "tiesuo", "guohe", "shunshou", "wuzhong", "wanjian", "nanman"];
					if (get.mode() == "guozhan") {
						list = list.concat(["xietianzi", "shuiyanqijunx", "lulitongxin", "lianjunshengyan", "chiling", "diaohulishan", "yuanjiao", "huoshaolianying"]);
					}
					for (var i = 0; i < list.length; i++) {
						if (event.filterCard({ name: list[i] }, player)) return true;
					}
					return false;
					*/
					return event.type!="wuxie"&&event.type!="respondShan"&&player.getDamagedHp();
				},
				chooseButton:{
					dialog:function(){
						var list=[];
						for(var i=0;i<lib.inpile.length;i++){
							var name=lib.inpile[i];
							if(name=="wuxie") continue;
							if(name=="sha"){
								list.push(["基本","","sha"]);
								list.push(["基本","","sha","fire"]);
								list.push(["基本","","sha","thunder"]);
								list.push(["基本","","sha","ice"]);
							}
							else if(get.type(name)=="trick") list.push(["锦囊","",name]);
							else if(get.type(name)=="basic") list.push(["基本","",name]);
						}
						return ui.create.dialog("逞力",[list,"vcard"]);
					},
					filter:function (button, player) {
						var evt = _status.event.getParent();
						if (evt && evt.filterCard) {
							return evt.filterCard({ name: button.link[2] }, player, evt);
						}
						return true;
					},
					backup:function (links, player) {
						return {
							filterCard: true,
							selectCard: 1,
							popname: true,
							position: "he",
							viewAs: { name: links[0][2], nature: links[0][3] },
						}
					},
					prompt:function (links, player) {
						return "将一张牌当" + get.translation(links[0][2]) + "使用";
					},
				},
				ai:{
					order:8,
					useful:-1,
					value:-1,
					save:true,
					respondSha:true,
					halfneg:true,
					skillTagFilter:function(player){
						if(!player.countCards("he")) return false;
					},
				},
			},
			sst_chengli3:{
				prompt:"将一张牌当作闪使用",
				enable:"chooseToUse",
				filter:function(event,player){
					return player.getDamagedHp();
				},
				filterCard:true,
				selectCard:1,
				position:"he",
				viewAs:{name:"shan"},
				ai:{
					skillTagFilter:function(player){
						return player.getDamagedHp();
					},
					respondShan:true,
				},
			},
			sst_chengli4:{
				enable:"chooseToUse",
				filterCard:true,
				selectCard:1,
				position:"he",
				viewAsFilter:function(player){
					return player.getDamagedHp();
				},
				viewAs:{name:"wuxie"},
				/*
				check:function(card){
					if (card.name == "wuxie") return 1000;
					return 0;
				},
				*/
				prompt:"将一张牌当作无懈可击使用",
				/*
				threaten:1.2,
				ai:{
					basic:{
						useful:[6,4],
						value:[6,4],
					},
					result:{
						player:1,
					},
					expose:0.2,
				},
				*/
			},
			sst_huoluan:{
				trigger:{player:"useCardAfter"},
				filter:function(event,player){
					var num=player.countUsed();
					if(_status.currentPhase==player) num--;
					return num>0;
				},
				forced:true,
				content:function(){
					var num=player.countUsed();
					if(_status.currentPhase==player) num--;
					player.chooseToDiscard("祸乱：弃置"+get.cnNumber(num)+"张牌",num,true,"he");
				},
				ai:{
					effect:{
						player:function(card,player,target){
							if(player.countCards("h")==1) return [1,-4]
							return [1,-player.countUsed()/2];
						},
					},
				},
				group:["sst_huoluan2"],
			},
			sst_huoluan2:{
				trigger:{
					player:"loseAfter",
				},
				filter:function (event, player) {
					if(player.countCards("h")) return false;
					return event.hs&&event.hs.length>0;
				},
				forced:true,
				content:function () {
					player.loseMaxHp();
				},
			},
			sst_yane:{
				trigger:{
					global:["phaseZhunbeiBegin"],
				},
				filter:function (event, player) {
					var players = game.filterPlayer();
					for (var i = 0; i < players.length; i++) {
						if (players[i].group != player.group) {
							players.remove(players[i]);
							if (i < players.length) i--;
						}
					}
					return players.contains(event.player)&&player.hasZhuSkill("sst_yane");
				},
				unique:true,
				zhuSkill:true,
				logTarget:"player",
				check:function(event,player){
					if(get.attitude(player,event.player)<0) return get.damageEffect(event.player,player,player)>0;
					if(get.attitude(player,event.player)>0) return event.player.hp-event.player.getDamagedHp()>0;
					return false;
				},
				content:function(){
					trigger.player.damage(player);
					trigger.player.draw(2);
				},
			},
			//Dr. Mario
			sst_quji:{
				mark:true,
				intro:{
					mark:function(dialog,content,player){
						if(player!=game.me) return "牌堆顶的牌始终对"+get.translation(player)+"可见";
						if(get.itemtype(_status.pileTop)!="card") return "牌堆顶无牌";
						dialog.add([_status.pileTop]);
					},
				},
				group:["sst_quji2"],
			},
			sst_quji2:{
				usable:1,
				trigger:{
					global:["useCard"],
				},
				filter:function(event,player){
					return player.countCards("h")||get.itemtype(_status.pileTop)=="card";
				},
				direct:true,
				content:function(){
					"step 0"
					var cards=[];
					if(ui.cardPile.childNodes.length<1){
						var discardcards=get.cards();
						game.cardsDiscard(discardcards);
					}
					for(var i=0;i<1;i++){
						if(ui.cardPile.childNodes.length>i) cards.push(ui.cardPile.childNodes[i]);
					}
					var effect=0;
					if(trigger.card.name=="wuxie"||trigger.card.name=="shan"){
						if(get.attitude(player,trigger.player)<-1){
							effect=-1;
						}
					}
					else if(trigger.targets&&trigger.targets.length){
						for(var i=0;i<trigger.targets.length;i++){
							effect+=get.effect(trigger.targets[i],trigger.card,trigger.player,player);
						}
					}
					var info=[get.prompt("sst_quji2",trigger.player)];
					if(get.itemtype(_status.pileTop)=="card"){
						info.push("<div class=\"text center\">牌堆顶的牌</div>");
						info.push(cards);
					}
					if(player.countCards("h")){
						info.push("<div class=\"text center\">"+get.translation(player)+"的手牌区</div>");
						info.push(player.getCards("h"));
					}
					var next=player.chooseButton();
					next.set("createDialog",info);
					next.set("filterButton",function(button){
						var card=_status.event.cardx;
						return get.suit(button.link)==get.suit(card);
					});
					next.set("ai",function(button){
						var bool=false;
						var player=_status.event.player;
						var trigger=_status.event.getTrigger();
						if(_status.event.effect<0){
							if(trigger.card.name=="sha"){
								var target=trigger.targets[0];
								if(target==player){
									if(!player.countCards("h","shan")) bool=true;
								}
								else{
									if(target.hp==1||(target.countCards("h")<=2&&target.hp<=2)) bool=true;
								}
							}
							else{
								bool=true;
							}
						}
						if(bool){
							if(button.link==_status.pileTop) return 10;
							return 5-get.useful(button.link);
						}
						return 0;
					});
					next.set("cardx",trigger.card);
					next.set("effect",effect);
					event.cards=cards;
					"step 1"
					if(result.bool){
						player.logSkill("sst_quji",trigger.player);
						//delete player.storage.sst_quji;
						if(result.links[0]==event.cards[0]){
							game.cardsDiscard(result.links);
							player.$throw(result.links);
							player.popup("牌堆顶");
							game.log(player,"弃置了牌堆顶的",result.links);
						}
						else{
							player.discard(result.links);
						}
						trigger.cancel();
						game.delayx();
					}
				},
				ai:{
					expose:0.2,
				},
			},
			//Palutena
			sst_qiji:{
				enable:"phaseUse",
				filter:function (event, player) {
					if (player.hasSkill("sst_qiji_turn")) {
						return !player.hasSkill("sst_qiji_discard") && player.countCards("he") >= 3;
					}
					else if (player.hasSkill("sst_qiji_discard")) {
						return !player.hasSkill("sst_qiji_turn");
					}
					return true;
				},
				//complexSelect:true,
				filterCard:true,
				selectCard:function(card){
					var player=_status.event.player;
					if(player.hasSkill("sst_qiji_turn")){
						return 3;
					}
					else if(player.hasSkill("sst_qiji_discard")){
						return 0;
					}
					return [0,3];
				},
				filterTarget:function(card,player,target){
					var length=ui.selected.cards.length;
					return (length==0||length==3);
				},
				prompt:function(){
					var player=_status.event.player;
					if(player.hasSkill("sst_qiji_turn")){
						return "选择三张牌：你弃置这三张牌，令目标翻面";
					}
					else if(player.hasSkill("sst_qiji_discard")){
						return "不选择牌：你翻面，令目标摸三张牌";
					}
					return "不选择牌：你翻面，令目标摸三张牌<br>选择三张牌：你弃置这三张牌，令目标翻面";
				},
				check:function(card){
					var player=_status.event.player;
					if(!ui.selected.cards.length&&!player.hasSkill("sst_qiji_turn")) return 0;
					return 8-get.value(card);
				},
				//prompt:"不选择牌：你翻面，令目标摸三张牌<br>选择三张牌：你弃置这三张牌，令目标翻面",
				content:function(){
					//player.line(target,"green");
					if(cards.length==0){
						player.turnOver();
						target.draw(3);
						player.addTempSkill("sst_qiji_turn","phaseUseAfter");
					}
					else{
						target.turnOver();
						player.addTempSkill("sst_qiji_discard","phaseUseAfter");
					}
				},
				position:"he",
				subSkill:{
					turn:{
						sub:true,
					},
					discard:{
						sub:true,
					},
				},
				ai:{
					order:function(){
						var player=_status.event.player;
						if(!player.hasSkill("sst_qiji_turn")) return 5;
						return 3;
					},
					result:{
						target:function(player,target){
							if(!ui.selected.cards.length){
								if(target==player) return 3;
								return 2;
							}
							else{
								if(target.hasSkillTag("noturn")) return 0;
								if(target.classList.contains("turnedover")){
									if(target==player) return 3;
									return 2;
								}
								else{
									return -2;
								}
							}
						},
						player:function(player,target){
							return 1;
						},
					},
					expose:0.2,
				}
			},
			sst_shengbing:{
				trigger:{
					player:["loseEnd"],
				},
				filter:function (event, player) {
					return event.es && event.es.length;
				},
				direct:true,
				content:function () {
					"step 0"
					player.chooseTarget(get.prompt2("sst_shengbing"),function(card,player,target){
						var bool=true;
						for (var i=0;i<_status.event.esx.length;i++) {
							if(!target.isEmpty(get.subtype(_status.event.esx[i]))){
								bool=false;
								break;
							}
						}
						return player!=target&&bool;
					}).set("esx",trigger.es).set("ai",function(target){
						return get.attitude(_status.event.player,target);
					});
					"step 1"
					if (result.targets) {
						player.logSkill("sst_shengbing",result.targets);
						for (var i = 0; i < trigger.es.length; i++) {
							result.targets[0].equip(trigger.es[i]);
						}
						game.delayx();
						result.targets[0].chooseToDiscard("圣兵：弃置一张牌","he", true);
						if(!result.targets[0].hasSkill("sst_shengbing2")){
							result.targets[0].addTempSkill("sst_shengbing2",{player:"phaseUseBefore"});
						}
						else{
							if(!result.targets[0].storage.sst_shengbing2) result.targets[0].storage.sst_shengbing2=0;
						}
						result.targets[0].storage.sst_shengbing2++;
						result.targets[0].storage.sst_shengbing = player;
						result.targets[0].markSkillCharacter("sst_shengbing2", player, "圣兵", "下一个出牌阶段你可以额外使用"+get.cnNumber(result.targets[0].storage.sst_shengbing2)+"张【杀】");
					}
				},
				ai:{
					expose:0.2,
				}
			},
			sst_shengbing2:{
				silent:true,
				init:function (player){
					player.storage.sst_shengbing2=0;
				},
				onremove:function (player) {
					player.unmarkSkill("sst_shengbing2");
					player.addTempSkill("sst_shengbing3","phaseUseAfter");
					//player.unmarkSkill("sst_shengbing_check");
					player.markSkillCharacter("sst_shengbing3", player.storage.sst_shengbing, "圣兵", "此出牌阶段你可以额外使用"+get.cnNumber(player.storage.sst_shengbing2)+"张【杀】");
				},
			},
			sst_shengbing3:{
				onremove:function (player){
					delete player.storage.sst_shengbing2;
				},
				mod:{
					onremove:function (player) {
						player.unmarkSkill("sst_shengbing3");
					},
					cardUsable:function (card, player, num) {
						if (card.name == "sha") return num + 1;
					},
				},
			},
			//Marth
			sst_hanmang:{
				trigger:{
					source:["damageBegin1"],
				},
				filter:function (event, player) {
					return player.getAttackRange() == Math.max(1, get.distance(player, event.player));
				},
				forced:true,
				content:function () {
					trigger.num++;
				},
				ai:{
					damageBonus:true,
				},
			},
			sst_jianbu:{
				trigger:{
					player:["phaseDrawBegin2"],
				},
				filter:function(event,player){
					return !event.numFixed;
				},
				direct:true,
				content:function(){
					"step 0"
					var list=["1. 少摸一张牌，本回合你计算与其他角色距离-1", "2. 额外摸一张牌，本回合你计算与其他角色距离+1"];
					player.chooseControl("cancel2").set("choiceList",list).set("ai",function(){
						var player=_status.event.player;
						if(player.countCards("h")>3&&player.countCards("h","sha")>1){
							return 0;
						}
						if(player.countCards("h","sha")>2){
							return 0;
						}
						if(player.hp-player.countCards("h")>1){
							return 1;
						}
						return "cancel2";
					}).set("prompt",get.prompt("sst_jianbu")).set("prompt2",get.translation("sst_jianbu_info"));
					"step 1"
					if(result.index==0){
						player.logSkill("sst_jianbu");
						trigger.num--;
						player.addTempSkill("sst_jianbu_less");
						player.markSkillCharacter("sst_jianbu_less",player,"剑步","本回合你计算与其他角色距离-1");
					}
					else if(result.index==1){
						player.logSkill("sst_jianbu");
						trigger.num++;
						player.addTempSkill("sst_jianbu_more");
						player.markSkillCharacter("sst_jianbu_more",player,"剑步","本回合你计算与其他角色距离+1");
					}
				},
			},
			sst_jianbu_less:{
				onremove:function(player){
					player.unmarkSkill("sst_jianbu_less");
				},
				mod:{
					globalFrom:function(from,to,distance){
						return distance-1;
					},
				},
			},
			sst_jianbu_more:{
				onremove:function(player){
					player.unmarkSkill("sst_jianbu_more");
				},
				mod:{
					globalFrom:function(from,to,distance){
						return distance+1;
					},
				},
			},
			//Rosalina
			sst_xingchen:{
				trigger:{
					player:["loseEnd"],
				},
				filter:function(event,player){
					//if(event.type=="use") return false;
					if(event.getParent().name!="discard") return false;
					for(var i=0;i<event.hs.length;i++){
						if(get.position(event.hs[i],true)=="d"){
							return true;
						}
					}
					return false;
				},
				check:function(event,player){
					return game.hasPlayer(function(current){
						return current!=player&&get.attitude(player,current)>0;
					});
				},
				content:function(){
					"step 0"
					event.cards=[];
					for(var i=0;i<trigger.hs.length;i++){
						if(get.position(trigger.hs[i],true)=="d"){
							event.cards.push(trigger.hs[i]);
						}
					}
					"step 1"
					if(event.cards.length>1){
						player.chooseCardButton("将“星尘”牌分配给其他角色",true,event.cards,[1,event.cards.length]).set("ai",function(button){
							if(ui.selected.buttons.length==0) return 1;
							return 0;
						});
					}
					else if(event.cards.length==1){
						event._result={links:event.cards.slice(0),bool:true};
					}
					else{
						if(_status.currentPhase&&_status.currentPhase.isAlive()) _status.currentPhase.draw();
						event.finish();
					}
					"step 2"
					if(result.bool){
						for(var i=0;i<result.links.length;i++){
							event.cards.remove(result.links[i]);
						}
						event.togive=result.links.slice(0);
						player.chooseTarget("将"+get.translation(result.links)+"交给一名其他角色",true,function(card,player,target){
							return player!=target;
						}).set("ai",function(target){
							var att=get.attitude(_status.event.player,target);
							if(_status.event.enemy){
								return -att;
							}
							else if(att>0){
								return att/(1+target.countCards("h"));
							}
							else{
								return att/100;
							}
						}).set("enemy",get.value(event.togive[0],player,"raw")<0);
					}
					"step 3"
					if(result.targets.length){
						result.targets[0].gain(event.togive,"gain2");
						player.line(result.targets[0],"green");
						//game.log(result.targets[0],"获得了"+event.togive);
						event.goto(1);
					}
				},
			},
			sst_zhuansheng:{
				unique:true,
				mark:true,
				limited:true,
				skillAnimation:true,
				animationStr:"转生",
				animationColor:"water",
				init:function (player){
					player.storage.sst_zhuansheng=false;
				},
				intro:{
					content:"limited",
				},
				logTarget:"player",
				trigger:{
					global:"dieBefore",
				},
				content:function (){
					"step 0"
					trigger.cancel();
					player.awakenSkill("sst_zhuansheng");
					player.storage.sst_zhuansheng=true;
					/*
					var hs=player.getCards("hej");
					player.$throw(hs);
					player.lose(player.getCards("hej"));
					*/
					player.discard(player.getCards("hej"));
					"step 1"
					//var group=lib.character[trigger.player.name][1];
					if(!_status.characterlist){
						var list=[];
						for(var i in lib.character){
							if(lib.filter.characterDisabled2(i)||lib.filter.characterDisabled(i)) continue;
							list.push(i);
						}
						game.countPlayer2(function(current){
							list.remove(current.name);
							list.remove(current.name1);
							list.remove(current.name2);
						});
						_status.characterlist=list;
					}
					_status.characterlist.randomSort();
					var name=_status.characterlist[0];
					var group=lib.character[_status.characterlist[0]][1];
					_status.characterlist.remove(name);
					event.toRemove=trigger.player.name;
					event.toChange=name;
					if(event.change) event.trigger("removeCharacterBefore");
					event.group=group;
					"step 2"
					var name=event.toChange;
					game.log(trigger.player,"将武将变更为","#g"+get.translation(name));
					trigger.player.reinit(trigger.player.name,name);
					if(event.group!="shen") trigger.player.changeGroup(event.group,false);
					//player.update();
					"step 3"
					if(trigger.player.hp<Math.ceil(trigger.player.maxHp/2)){
						trigger.player.recover(trigger.player.maxHp-trigger.player.hp-Math.floor(trigger.player.maxHp/2));
					}
				},
				check:function(event,player){
					//if(event.player==player) return true;
					return get.attitude(player,event.player)>0;
				}
			},
			//Zero Suit Samus
			sst_guangsuo:{
				trigger:{player:"useCardAfter"},
				global:"sst_guangsuo2",
				filter:function(event,player){
					//game.log(event.targets);
					if(get.name(event.card)!="sha") return false;
					var bool=false;
					for(var i=0;i<event.targets.length;i++){
						if(!event.targets[i].isLinked()){
							bool=true;
							break;
						}
					}
					return bool;
				},
				direct:true,
				content:function(){
					"step 0"
					event.num=0;
					event.targets=trigger.targets;
					for(var i=0;i<event.targets.length;i++){
						if(event.targets[i].isLinked()||!event.targets[i].isAlive()) event.targets.remove(event.targets[i]);
					}
					event.targets.sort(lib.sort.seat);
					"step 1"
					if(event.num<event.targets.length){
						player.chooseBool(get.prompt("sst_guangsuo",event.targets[event.num]),"你可以横置"+get.translation(event.targets[event.num])).set("ai",function(){
							return get.attitude(_status.event.player,_status.event.targetx)<0;
						}).set("targetx",event.targets[event.num]);
					}
					else{
						event.finish();
					}
					"step 2"
					if(result.bool){
						player.logSkill("sst_guangsuo",event.targets[event.num])
						event.targets[event.num].link(true);
					}
					event.num++;
					event.goto(1);
				},
				ai:{
					expose:0.2,
				},
			},
			sst_guangsuo2:{
				mod:{
					cardSavable:function (card,player){
						if(!_status.currentPhase) return;
						if(_status.currentPhase.isAlive()&&_status.currentPhase.hasSkill("sst_guangsuo")&&_status.currentPhase!=player&&player.isLinked()){
							return false;
						}
					},
					cardEnabled:function (card,player){
						if(!_status.currentPhase) return;
						if(_status.currentPhase.isAlive()&&_status.currentPhase.hasSkill("sst_guangsuo")&&_status.currentPhase!=player&&player.isLinked()){
							return false;
						}
					},
					cardRespondable:function (card,player){
						if(!_status.currentPhase) return;
						if(_status.currentPhase.isAlive()&&_status.currentPhase.hasSkill("sst_guangsuo")&&_status.currentPhase!=player&&player.isLinked()){
							return false;
						}
					},
				},
			},
			sst_qingying:{
				enable:"phaseUse",
				usable:1,
				filter:function (event, player) {
					return true;
				},
				filterCard:function(){return false;},
				selectCard:-1,
				filterTarget:function (card,player,target){
					return target.countCards("ej");
				},
				content:function () {
					player.discardPlayerCard(target,"ej",true);
					if (target == player) {
						player.draw(2);
						player.addTempSkill("sst_qingying2");
						player.markSkillCharacter("sst_qingying2",player,"轻影","你本回合使用牌无距离与次数限制");
					}
				},
				ai:{
					expose:0.2,
					result:{
						target:function(player,target){
							var js=target.getCards("j");
							if(js.length){
								var jj=js[0].viewAs?{name:js[0].viewAs}:js[0];
								if(js.length>1||get.effect(target,jj,target,player)<0){
									return 3;
								}
							}
							if(target==player&&target.countCards("e")) return 2;
							if(target.countCards("e")) return -1;
							return 0;
						},
					},
					order:5,
				},
			},
			sst_qingying2:{
				onremove:function (player){
					player.unmarkSkill("sst_qingying2");
				},
				mod:{
					targetInRange:function (card,player,target){
						return true;
					},
					cardUsable:function (card,player,num){
						return Infinity;
					},
				},
			},
			//Luigi
			sst_que:{
				trigger:{
					player:["phaseZhunbeiBegin"],
				},
				filter:function(event,player){
					return game.hasPlayer(function(current){
						return player!=current&&current.countCards("h");
					});
				},
				direct:true,
				content:function(){
					"step 0"
					player.chooseTarget(get.prompt("sst_que"),"你可以观看一名其他角色的手牌，然后获得其中至多"+get.cnNumber(player.getDamagedHp()+1)+"张黑色牌",function(card,player,target){
						return target!=player&&target.countCards("h");
					}).set("ai",function(target){
						if(get.attitude(_status.event.player,target)>0) return 0;
						return -get.attitude(_status.event.player,target);
					});
					"step 1"
					if(result.bool){
						player.logSkill("sst_que",result.targets);
						//var cards=result.targets[0].getCards("h");
						/*
						if(player.isOnline2()){
							player.send(function(cards,id){
								ui.create.dialog("驱厄",cards).videoId=id;
							},cards,event.videoId);
						}
						event.dialog=ui.create.dialog("驱厄",cards);
						event.dialog.videoId=event.videoId;
						if(!event.isMine()){
							event.dialog.style.display="none";
						}
						*/
						/*
						player.chooseCardButton("驱厄：你可以获得最多"+get.cnNumber(player.getDamagedHp()+1)+"张黑色牌",cards,[1,player.getDamagedHp()+1]).set("filterButton",function(button){
							return get.color(button.link)=="black";
						}).set("ai",function(button){
							if(get.attitude(player,_status.event.targetx)>0) return -1;
							return get.value(button.link);
						}).set("targetx",result.targets[0]);
						event.target=result.targets[0];
						*/
						player.gainPlayerCard("驱厄：你可以获得最多"+get.cnNumber(player.maxHp-player.hp+1)+"张黑色牌",result.targets[0],[1,player.maxHp-player.hp+1],"h","visible").set("filterButton",function(button){
							return get.color(button.link)=="black";
						});
					}
					/*
					"step 2"
					if(result.bool){
						player.gain(result.links,event.target,"giveAuto");
						//game.log(player,"获得了"+get.cnNumber(result.links.length)+"张牌");
					}
					*/
				},
				ai:{
					expose:0.2,
				},
			},
			sst_guiyun:{
				trigger:{
					player:["phaseJieshuBegin"],
				},
				filter:function(event,player){
					return !player.countUsed()||!player.getHistory("lose",function(evt){
						return evt.type=="discard";
					}).length;
				},
				forced:true,
				content:function(){
					player.addTempSkill("sst_guiyun2",{player:"phaseZhunbeiBegin"});
					player.markSkillCharacter("sst_guiyun2", player, "诡运", "取消你即将受到的所有伤害直到你的下一个准备阶段");
				},
				/*
				ai:{
					effect:{
						player:function(card,player){
							if(!player.needsToDiscard()&&player.countUsed()==0&&!player.getHistory("lose",function(evt){
								return evt.type=="discard";
							}).length) return [-1,-3];
						},
					},
				},
				*/
			},
			sst_guiyun2:{
				trigger:{
					player:["damageBegin4"],
				},
				filter:function(event){
					return true;
				},
				onremove:function (player) {
					player.unmarkSkill("sst_guiyun2");
				},
				forced:true,
				charlotte:true,
				content:function(){
					trigger.cancel();
				},
				ai:{
					nofire:true,
					nothunder:true,
					nodamage:true,
					effect:{
						target:function(card,player,target){
							if(get.tag(card,"damage")) return "zeroplayertarget";
						},
					},
				},
			},
			//Bowser
			sst_xiduo:{
				locked:false,
				init:function(player){
					player.storage.sst_xiduo=[];
				},
				trigger:{
					player:["phaseZhunbeiBegin"],
				},
				filter:function(event,player){
					var targets=lib.skill.sst_xiduo.logTarget(event,player);
					return targets.length;
				},
				logTarget:function(event,player){
					var targets=game.filterPlayer(function(current){
						return current.hp<player.hp;
					});
					targets.sortBySeat(player);
					return targets;
				},
				prompt:function(event,player){
					var targets=lib.skill.sst_xiduo.logTarget(event,player);
					return "你可以令"+get.translation(targets)+"选择一项：1. 令你获得其一张牌；2. 你对其使用牌无距离与次数限制且其非锁定技失效";
				},
				check:function(event,player){
					var targets=lib.skill.sst_xiduo.logTarget(event,player);
					var fin=0;
					for(var i=0;i<targets.length;i++){
						if(get.attitude(player,targets[i])>0){
							fin-=0.5;
						}
						else{
							fin++;
						}
					}
					return fin>0;
				},
				//direct:true,
				content:function(){
					"step 0"
					var targets=lib.skill.sst_xiduo.logTarget(trigger,player);
					event.targets=targets;
					"step 1"
					if(event.targets.length){
						var target=event.targets.shift();
						event.target=target;
						//player.line(target,"green");
						if(target&&target.countCards("he")){
							target.chooseBool("袭夺：令"+get.translation(player)+"获得你一张牌，否则本回合"+get.translation(player)+"对你使用牌无距离与次数限制且你非锁定技失效").set("ai",function(){
								var player=_status.event.player;
								var source=_status.event.getTrigger().player;
								if(get.attitude(source,player)>0) return false;
								var cards=source.getCards("he");
								var val=0;
								for(var i=0;i<cards.length;i++){
									val+=get.value(cards[i]);
								}
								val=val/cards.length;
								if(_status.event.getRand()>0.5){
									return 5-val>0;
								}
								return false;
							});
						}
						else{
							if(!target.hasSkill("fengyin")){
								target.addTempSkill("fengyin");
							}
							//target.addTempSkill("sst_xiduo2");
							player.storage.sst_xiduo.push(target);
							//target.markSkillCharacter("sst_xiduo2", player, "袭夺", "本回合非锁定技失效且不能使用或打出牌");
							event.redo();
						}
					}
					else{
						event.finish();
					}
					"step 2"
					if(result.bool){
						player.gainPlayerCard(event.target,"he",true);
					}
					else{
						if(!event.target.hasSkill("fengyin")){
							event.target.addTempSkill("fengyin");
						}
						//event.target.addTempSkill("sst_xiduo2");
						player.storage.sst_xiduo.push(target);
						//event.target.markSkillCharacter("sst_xiduo2", player, "袭夺", "本回合非锁定技失效且不能使用或打出牌");
					}
					event.goto(1);
				},
				mod:{
					targetInRange:function(card,player,target){
						if(player.storage.sst_xiduo.contains(target)){
							return true;
						}
					},
					cardUsableTarget:function(card,player,target){
						if(player.storage.sst_xiduo.contains(target)) return true;
					},
					/*
					cardUsable:function(card,player,num){
						if(typeof num=="number"&&game.hasPlayer(function(current){
							return player.storage.sst_xiduo.contains(current);
						})) return num+100;
					},
					playerEnabled:function(card,player,target){
						if(game.hasPlayer(function(current){
							return player.storage.sst_xiduo.contains(current);
						})&&!player.storage.sst_xiduo.contains(target)){
							var num=player.getCardUsable(card)-100;
							if(num<=0) return false;
						}
					},
					*/
				},
				group:["sst_xiduo_clear"],
				subSkill:{
					clear:{
						trigger:{global:"phaseAfter"},
						silent:true,
						content:function(){
							player.storage.sst_xiduo=[];
						},
					},
				},
				ai:{
					expose:0.1,
				},
			},
			sst_xiongao:{
				trigger:{global:"useCard"},
				filter:function(event,player){
					return event.player!=player&&player.countCards("h")>=player.hp;
				},
				forced:true,
				popup:false,
				content:function(){
					trigger.directHit.add(player);
				},
				ai:{
					nogain:1,
					neg:true,
					effect:{
						player:function(card,player){
							if(player.countCards("h")>=player.hp) return [1,1];
						},
					},
				},
			},
			sst_yujun:{
				unique:true,
				zhuSkill:true,
				global:"sst_yujun2",
			},
			sst_yujun2:{
				enable:"chooseToUse",
				prompt:function(){
					var player=_status.event.player;
					var list=game.filterPlayer(function(target){
						return target.hasZhuSkill("sst_yujun",player);
					});
					var str="选择一名目标角色。若"+get.translation(list);
					if(list.length>1) str+="中的一人";
					str+="允许，则你可以将允许的角色";
					str+="的一张手牌当【杀】对目标角色使用";
					return str;
				},
				filter:function(event,player){
					if(event.filterCard&&!event.filterCard({name:"sha"},player,event)) return false;
					if(player.hasZhuSkill("sst_yujun")) return false;
					//if(player.group!="shu") return false;
					if(!lib.filter.cardUsable({name:"sha"},player)) return false;
					return game.hasPlayer(function(target){
						return target.hasZhuSkill("sst_yujun",player)&&target.group==player.group&&target.countCards("h");
					});
				},
				filterTarget:function(card,player,target){
					if(_status.event._backup&&
						typeof _status.event._backup.filterTarget=="function"&&
						!_status.event._backup.filterTarget({name:"sha"},player,target)){
						return false;
					}
					return player.canUse({name:"sha"},target);
				},
				popup:false,
				content:function(){
					"step 0"
					game.log(player,"尝试请求","#g【驭军】");
					player.chooseTarget("请选择一位拥有驭军的角色",true,function(card,player,target){
						var list=game.filterPlayer(function(target){
							return target.hasZhuSkill("sst_yujun",player);
						});
						return list.contains(target)&&target.countCards("h");
					}).set("ai",function(target){
						return get.attitude(_status.event.player,target);
					});
					"step 1"
					if(result.bool){
						player.line(result.targets[0],"green");
						result.targets[0].chooseControl("允许","拒绝").set("prompt","是否允许"+get.translation(player)+"将你的一张手牌当【杀】对"+get.translation(target)+"使用？").set("ai",function(){
							var player=_status.event.player;
							var target=_status.event.targetx;
							if(get.attitude(player,target)>0){
								return "允许";
							}
							else{
								return "拒绝";
							}
						}).set("targetx",player);
						event.request=result.targets[0];
					}
					else{
						event.finish();
					}
					"step 2"
					player.addSkill("sst_yujun3");
					if(result.control=="允许"){
						event.request.logSkill("sst_yujun");
						var cards=event.request.getCards("h");
						player.chooseCardButton("驭军：你可以将"+get.translation(event.request)+"的一张手牌当作【杀】对"+get.translation(target)+"使用",cards).set("ai",function(button){
							return 5-get.value(button.link);
						});
					}
					else{
						game.log(event.request,"拒绝了",player,"的请求");
						event.request.chat("拒绝");
						event.finish();
					}
					"step 3"
					if(result.links&&result.links.length){
						event.request.line(player,"green");
						//game.log(result.links);
						//event.request.$throw(result.links);
						event.request.lose(result.links,"visible",ui.ordering).set("type","use");
						player.useCard({name:"sha"},result.links,target);
					}
				},
				ai:{
					respondSha:true,
					skillTagFilter:function(player){
						return game.hasPlayer(function(current){
							return current.hasZhuSkill("sst_yujun",player)&&current.countCards("h")&&get.attitude(player,current)>0;
						});
					},
					result:{
						target:function(player,target){
							//if(player.hasSkill("sst_yujun_deny")) return 0;
							if(!game.hasPlayer(function(current){
								return current.hasZhuSkill("sst_yujun",player)&&current.countCards("h");
							})) return 0;
							if(player.hasSkill("sst_yujun3")) return 0;
							var list=game.filterPlayer(function(current){
								return current.hasZhuSkill("sst_yujun",player);
							});
							var bool=false;
							for(var i=0;i<list.length;i++){
								if(get.attitude(player,list[i])>0){
									bool=true;
									break;
								}
							}
							if(!bool) return 0;
							return get.effect(target,{name:"sha"},player,target);
						},
					},
					order:function(){
						return get.order({name:"sha"})-0.1;
					},
					expose:0.5,
				},
			},
			sst_yujun3:{
				trigger:{global:["useCardAfter","useSkillAfter","phaseAfter"]},
				silent:true,
				filter:function(event){
					return event.skill!="sst_yujun2";
				},
				content:function(){
					player.removeSkill("sst_yujun3");
				},
			},
			//Peach
			sst_hongyan:{
				mod:{
					suit:function(card,suit){
						if(suit=="spade") return "heart";
					},
				},
			},
			sst_yice:{
				trigger:{
					target:"useCardToTarget",
				},
				filter:function(event,player){
					return event.getParent().targets.contains(player)&&player.countCards("h")&&["basic","trick"].contains(get.type(event.card))&&game.hasPlayer(function(target){
						return !event.getParent().targets.contains(target)&&target.countCards("h");
					});
				},
				direct:true,
				content:function(){
					"step 0"
					player.chooseTarget(get.prompt("sst_yice"),"你可以与一名不是"+get.translation(trigger.card)+"目标的角色展示并交换一张手牌，若展示时颜色相同，"+get.translation(trigger.card)+"对你无效；不同，该角色摸一张牌",function(card,player,target){
						return !_status.event.targetsx.contains(target)&&target.countCards("h");
					}).set("targetsx",trigger.getParent().targets).set("ai",function(target){
						if(get.effect(_status.event.player,_status.event.cardx)<0){
							if(get.attitude(player,target)<=0) return 5-target.countCards("h");
							return get.attitude(_status.event.player,target);
						}
						return 0;
					}).set("cardx",trigger.card);
					"step 1"
					if(result.targets){
						player.logSkill("sst_yice",result.targets);
						event.target=result.targets[0];
						var sendback=function(){
							if(_status.event!=event){
								return function(){
									event.resultOL=_status.event.resultOL;
								};
							}
						};
						if(player.isOnline()){
							player.wait(sendback);
							event.ol=true;
							player.send(function(){
								game.me.chooseCard("请选择一张要展示并交换的手牌",true).set("glow_result",true).ai=function(card){
									return 11-get.useful(card);
								};
								game.resume();
							});
						}
						else{
							event.localPlayer=true;
							player.chooseCard("请选择一张要展示并交换的手牌",true).set("glow_result",true).ai=function(card){
								return 11-get.useful(card);
							};
						}
						if(event.target.isOnline()){
							event.target.wait(sendback);
							event.ol=true;
							event.target.send(function(){
								game.me.chooseCard("请选择一张要展示并交换的手牌",true).set("glow_result",true).ai=function(card){
									return 11-get.useful(card);
								};
								game.resume();
							});
						}
						else{
							event.localTarget=true;
						}
					}
					else{
						event.finish();
					}
					"step 2"
					if(event.localPlayer){
						event.card1=result.cards[0];
					}
					if(event.localTarget){
						var rand=Math.random()<0.4;
						event.target.chooseCard("请选择一张要展示并交换的手牌",true).set("glow_result",true).ai=function(card){
							return 11-get.useful(card);
						};
					}
					"step 3"
					if(event.localTarget){
						event.card2=result.cards[0];
					}
					if(!event.resultOL&&event.ol){
						game.pause();
					}
					"step 4"
					try{
						if(!event.card1) event.card1=event.resultOL[player.playerid].cards[0];
						if(!event.card2) event.card2=event.resultOL[event.target.playerid].cards[0];
						if(!event.card1||!event.card2){
							throw("err");
						}
					}
					catch(e){
						console.log(e);
						event.finish();
						return;
					}
					game.broadcastAll(function(card1,card2){
						card1.classList.remove("glow");
						card2.classList.remove("glow");
					},event.card1,event.card2);
					"step 5"
					game.broadcastAll(function(){
						ui.arena.classList.add("thrownhighlight");
					});
					game.addVideo("thrownhighlight1");
					player.$compare(event.card1,event.target,event.card2);
					game.delay(4);
					"step 6"
					game.log(player,"展示了",event.card1);
					game.log(event.target,"展示了",event.card2);
					var color1=get.color(event.card1);
					var color2=get.color(event.card2);
					if(color1==color2){
						//player.discard(event.card1).set("animate",false);
						//trigger.getParent().targets.remove(player);
						//trigger.getParent().triggeredTargets2.remove(player);
						trigger.getParent().excluded.add(player);
					}
					else{
						//player.discard(event.card1).set("animate",false);
						event.target.draw();
					}
					"step 7"
					var clone=event.card1.clone;
					if(clone){
						clone.style.transition="all 0.5s";
						clone.style.transform="scale(1.2)";
						clone.delete();
						game.addVideo("deletenode",player,get.cardsInfo([clone]));
					}
					game.broadcast(function(card){
						var clone=card.clone;
						if(clone){
							clone.style.transition="all 0.5s";
							clone.style.transform="scale(1.2)";
							clone.delete();
						}
					},event.card1);
					var clone2=event.card2.clone;
					if(clone2){
						clone2.style.transition="all 0.5s";
						clone2.style.transform="scale(1.2)";
						clone2.delete();
						game.addVideo("deletenode",player,get.cardsInfo([clone2]));
					}
					game.broadcast(function(card){
						var clone2=card.clone;
						if(clone2){
							clone2.style.transition="all 0.5s";
							clone2.style.transform="scale(1.2)";
							clone2.delete();
						}
					},event.card2);
					//player.$giveAuto(event.card1,event.target);
					//event.target.$giveAuto(event.card2,player);
					player.$gain2(event.card2,event.target);
					event.target.$gain2(event.card1,player);
					game.log(player,"从",event.target,"获得了",event.card2);
					game.log(event.target,"从",player,"获得了",event.card1);
					event.target.gain(event.card1,player);
					player.gain(event.card2,event.target);
					game.broadcastAll(function(){
						ui.arena.classList.remove("thrownhighlight");
					});
					game.addVideo("thrownhighlight2");
					game.delay();
				},
				ai:{
					threaten:0.8,
				},
			},
			sst_qiuyuan:{
				unique:true,
				zhuSkill:true,
				global:"sst_qiuyuan2",
			},
			sst_qiuyuan2:{
				trigger:{
					global:"useCard2",
				},
				filter:function(event,player){
					if(event.targets.contains(player)&&!lib.filter.targetEnabled2(event.card,event.player,player)) return false;
					var bool=false;
					for(var i=0;i<event.targets.length;i++){
						if(event.targets[i]!=player&&event.targets[i].hasZhuSkill("sst_qiuyuan",player)&&event.targets[i].group==player.group){
							bool=true;
							break;
						}
					}
					if(get.type(event.card)=="trick"){
						return bool&&get.tag(event.card,"damage");
					}
					else if(get.name(event.card)=="sha"){
						return bool;
					}
					return false;
				},
				direct:true,
				content:function(){
					"step 0"
					var check=false;
					var att=0;
					var target;
					for(var i=0;i<trigger.targets.length;i++){
						if(trigger.targets[i].hasZhuSkill("sst_qiuyuan",player)&&trigger.targets[i].group==player.group&&get.attitude(player,trigger.targets[i])){
							att=get.attitude(player,trigger.targets[i]);
							target=trigger.targets[i];
						}
					}
					if(att<=0) return false;
					att-=target.hp;
					att-=player.getDamagedHp();
					if(player.hasSkillTag("maixie"))att+=1;
					att+=get.effect(player,trigger.card,trigger.player,player);
					check=att>0;
					player.chooseTarget(get.prompt("sst_qiuyuan"),"选择一名目标角色。你可以摸一张牌，将"+get.translation(trigger.card)+"的目标改为自己",function(card,player,target){
						return target.hasZhuSkill("sst_qiuyuan",player)&&_status.event.targetsx.contains(target);
					}).set("targetsx",trigger.targets).set("ai",function(target){
						if(_status.event.check) return get.attitude(player,target);
					}).set("check",check);
					"step 1"
					if(result.bool){
						result.targets[0].logSkill("sst_qiuyuan");
						player.line(result.targets,"green");
						//game.delay();
						player.draw();
						trigger.targets.remove(result.targets[0]);
						trigger.targets.push(player);
						result.targets[0].line(player,"green");
						game.log(player,"代替",result.targets[0],"成为了目标");
					}
				},
				ai:{
					expose:0.5,
				},
			},
			//Byleth (Female)
			sst_potian:{
				trigger:{
					player:"phaseZhunbeiBegin",
				},
				filter:function (event,player){
					return player.countCards("he");
				},
				direct:true,
				content:function (){
					"step 0"
					var check=false;
					var cards=player.getCards("he");
					var val=0;
					for(var i=0;i<cards.length;i++){
						val+=get.value(cards[i]);
					}
					val=val/cards.length;
					check=val<=5||player.hasCard(function(card){
						return get.type(card)=="basic";
					},"he");
					player.chooseCard(get.prompt2("sst_potian"),"he",[1,Infinity],function(card){
						var suit=get.suit(card);
						//game.log(1,suit);
						for(var i=0;i<ui.selected.cards.length;i++){
							//game.log(2,get.suit(ui.selected.cards[i]));
							if(get.suit(ui.selected.cards[i])==suit) return false;
						}
						return true;
					}).set("complexCard",true).set("ai",function(card){
						//if(!_status.event.check) return 0;
						if(get.type(card)=="basic"){
							return 11-get.value(card);
						}
						return 8-get.value(card);
					});
					"step 1"
					if(result.cards&&result.cards.length) {
						player.logSkill("sst_potian");
						var cards=result.cards;
						player.$throw(cards,1000);
						player.lose(cards,ui.discardPile,"visible").set("type","_chongzhu");
						game.log(player,"将",cards,"置入了弃牌堆");
						var num=0;
						for(var i=0;i<cards.length;i++){
							if(get.type(cards[i])=="basic") num++;
						}
						player.storage.sst_potian=num;
						player.draw(cards.length);
						player.addTempSkill("sst_potian2");
						if(player.storage.sst_shenjiao){
							player.markSkillCharacter("sst_potian2",player.storage.sst_shenjiao,"破天","你使用的杀基础伤害为"+num+"直到回合结束");
						}
						else{
							player.markSkillCharacter("sst_potian2",player,"破天","你使用的杀基础伤害为"+num+"直到回合结束");
						}
					}
				},
			},
			sst_potian2:{
				trigger:{
					player:["useCard1"],
				},
				filter:function (event,player){
					return event.card&&get.name(event.card)=="sha";
				},
				forced:true,
				onremove:function (player){
					player.unmarkSkill("sst_potian2");
				},
				content:function () {
					if(typeof trigger.baseDamage!="number") trigger.baseDamage=1;
					trigger.baseDamage+=player.storage.sst_potian-1;
				},
				ai:{
					damageBonus:true,
					effect:{
						player:function (card,player){
							if(player.storage.sst_potian==0&&get.name(card)=="sha") return [-1,-3];
						},
					},
				},
			},
			sst_shenjiao:{
				trigger:{player:"loseEnd"},
				filter:function(event,player){
					if(event.type=="_chongzhu") return true;
					if(event.getParent().skill=="_chongzhu") return true;
					return false;
				},
				/*
				prompt:function(event,player){
					var cards=[];
					for(var i=0;i<event.cards2.length;i++){
						if(get.position(event.cards2[i],true)=="d"||(event.type=="sst_potian"&&(event.cards2[i].original=="e"||event.cards2[i].original=="j"))){
							cards.push(event.cards2[i]);
						}
					}
					var str="";
					if(event.type=="sst_potian") str="，然后你令该角色于其下一个回合内拥有【破天】";
					return "你可以将"+get.translation(cards)+"交给一名其他角色"+str;
				},
				*/
				direct:true,
				content:function (){
					"step 0"
					event.cards=[];
					for(var i=0;i<trigger.cards2.length;i++){
						if(get.position(trigger.cards2[i],true)=="d"){
							event.cards.push(trigger.cards2[i]);
						}
					}
					var str="你可以将"+get.translation(event.cards)+"交给一名其他角色";
					if(trigger.getParent().name=="sst_potian") str+="，然后你令该角色于其下一个回合内拥有【破天】";
					player.chooseTarget(get.prompt("sst_shenjiao"),str,function(card,player,target){
						return player!=target;
					}).set("ai",function(target){
						//if(!_status.event.player.hasFriend()) return 0;
						return get.attitude(_status.event.player,target);
					});
					"step 1"
					if(result.targets&&result.targets.length){
						player.logSkill("sst_shenjiao",result.targets);
						result.targets[0].gain(event.cards,"gain2");
						//game.log(result.targets[0],"获得了"+event.togive);
						if(trigger.getParent().name=="sst_potian"){
							result.targets[0].addTempSkill("sst_shenjiao2",{player:"phaseBefore"});
							result.targets[0].storage.sst_shenjiao=player;
							result.targets[0].markSkillCharacter("sst_shenjiao2",player,"身教","下一个回合内拥有【破天】");
						}
					}
				},
				ai:{
					expose:0.3,
				},
			},
			sst_shenjiao2:{
				silent:true,
				onremove:function (player) {
					player.unmarkSkill("sst_shenjiao2");
					player.addTempSkill("sst_potian");
				},
			},
			//Byleth (Male)
			sst_yanchuan:{
				enable:"phaseUse",
				usable:1,
				filterTarget:function (card,player,target){
					return player!=target;
				},
				viewAsfilter:function(player){
					if(!player.countCards("he")) return false;
				},
				filterCard:true,
				selectCard:1,
				discard:false,
				lose:false,
				delay:false,
				position:"he",
				content:function (){
					"step 0"
					target.gain(cards,player,"giveAuto");
					"step 1"
					if(!player.storage.sst_yanchuan) player.storage.sst_yanchuan=[];
					function countSkillTimes(current) {
						return current==this;
					}
					var num=player.storage.sst_yanchuan.filter(countSkillTimes,target).length;
					if(num) player.draw(num);
					player.storage.sst_yanchuan.push(target);
				},
				ai:{
					order:3,
					expose:0.2,
					threaten:function(player,target){
						var players=game.filterPlayer();
						var num=0;
						players.remove(player);
						function countSkillTimes(current) {
							return current==this;
						}
						for(var i=0;i<players.length;i++){
							if(player.storage.sst_yanchuan) num=Math.max(num,player.storage.sst_yanchuan.filter(countSkillTimes,players[i]).length);
						}
						return 1+num/8;
					},
					result:{
						target:function (player,target){
							if(target.hasSkillTag("nogain")) return 0;
							if(player.countCards("h")==player.countCards("h","du")) return -1;
							return 1;
						},
						player:function (player,target){
							var num=0;
							var players=game.filterPlayer();
							function countSkillTimes(current) {
								return current==this;
							}
							if(player.storage.sst_yanchuan) num+=player.storage.sst_yanchuan.filter(countSkillTimes,target).length;
							if(players.length<=2) return 1+num;
							return get.attitude(player,target)+num;
						}
					},
				},
			},
			sst_tianmai:{
				unique:true,
				enable:"chooseToUse",
				mark:true,
				limited:true,
				skillAnimation:true,
				animationStr:"天脉",
				animationColor:"metal",
				init:function (player){
					player.storage.sst_tianmai=false;
				},
				filter:function (event,player){
					if(player.storage.sst_tianmai) return false;
					if(event.type=="dying"){
						if(player==event.dying) return false;
						return true;
					}
					return false;
				},
				filterTarget:function(card,player,target){
					return target==_status.event.dying;
				},
				//direct:true,
				delay:false,
				selectTarget:-1,
				prompt:function(){
					return "限定技，一名其他角色的濒死阶段，你可以令其将体力回复至与本回合开始相同，其重置武将牌，当前回合结束，由该角色的回合开始一个新的轮次。";
				},
				content:function (){
					"step 0"
					//player.logSkill("sst_tianmai",target);
					player.awakenSkill("sst_tianmai");
					player.storage.sst_tianmai=true;
					player.storage.sst_tianmai_target=target;
					if(target.hp<target.storage.sst_tianmai_count) target.recover(target.storage.sst_tianmai_count-target.hp);
					"step 1"
					target.link(false);
					target.turnOver(false);
					"step 2"
					player.addSkill("sst_tianmai_phase");
					var evt=_status.event.getParent("dying");
					if(evt&&evt.name=="dying"){
						var next=game.createEvent("sst_tianmai_reset");
						_status.event.next.remove(next);
						evt.after.push(next);
						next.set("targetx",target);
						next.setContent(function(){
							var evt=_status.event.getParent("phase");
							if(evt){
								_status.roundStart=_status.event.targetx;
								game.resetSkills();
								_status.event=evt;
								_status.event.finish();
								_status.event.untrigger(true);
							}
						});
					}
				},
				ai:{
					order:0.5,
					expose:0.3,
					skillTagFilter:function (player){
						if(player.storage.sst_tianmai) return false;
					},
					result:{
						target:3,
					},
					save:true,
				},
				intro:{
					content:"limited",
				},
				group:["sst_tianmai_count"],
				subSkill:{
					count:{
						trigger:{
							global:"phaseBegin",
						},
						silent:true,
						filter:function (event,player){
							return true;
						},
						content:function (){
							var players=game.filterPlayer();
							players.remove(player);
							for(var i=0;i<players.length;i++){
								players[i].storage.sst_tianmai_count=players[i].hp;
							}
						},
						sub:true,
					},
					phase:{
						trigger:{
							global:"phaseBefore",
						},
						silent:true,
						filter:function (event,player){
							return true;
						},
						content:function (){
							if(player.storage.sst_tianmai_target!=trigger.player){
								var evt=_status.event.getParent("phase");
								if(evt){
									game.resetSkills();
									_status.event=evt;
									_status.event.finish();
									_status.event.untrigger(true);
								}
							}
							else{
								//delete player.storage.sst_tianmai_target;
								game.log("由",trigger.player,"的回合开始一个新的轮次");
								player.removeSkill("sst_tianmai_phase");
							}
						},
						sub:true,
					},
				},
			},
			//Massy
			sst_shenfa:{
				trigger:{
					player:"useCardToPlayered",
				},
				filter:function (event,player){
					if(event.getParent().triggeredTargets3.length>1) return false;
					return get.name(event.card)=="sha";
				},
				logTarget:"targets",
				forced:true,
				content:function (){
					"step 0"
					event.num=0;
					"step 1"
					//game.log(player.storage.sst_shenfa1);
					if(!player.storage.sst_shenfa1){
						//player.logSkill("sst_shenfa",trigger.targets);
						//game.log("player.storage.sst_shenfa1");
						//game.log(event.num,trigger.targets.length,event.num<trigger.targets.length);
						if(event.num<trigger.targets.length){
							//game.log("trigger.targets[event.num].chooseControl");
							trigger.targets[event.num].chooseControl("此【杀】不可被响应","此【杀】伤害+1").set("ai",function(){
								if(trigger.targets[event.num].hasUsableCard("shan")){
									return "此【杀】伤害+1";
								}
								else{
									return "此【杀】不可被响应";
								}
							});
						}
						else{
							event.finish();
						}
					}
					else if(player.storage.sst_shenfa1){
						event.goto(3);
					}
					"step 2"
					//game.log("result.control");
					if(result.control=="此【杀】不可被响应"){
						game.log(trigger.targets[event.num],"选择了","#y此【杀】不可被响应");
						//game.log("此【杀】不可被响应");
						trigger.targets[event.num].chat("此【杀】不可被响应");
						trigger.getParent().directHit.addArray(game.players);
					}
					else{
						game.log(trigger.targets[event.num],"选择了","#y此【杀】伤害+1");
						//game.log("此【杀】伤害+1");
						trigger.targets[event.num].chat("此【杀】伤害+1");
						//if(!player.storage.sst_shenfa) player.storage.sst_shenfa=[];
						//player.storage.sst_shenfa.push(trigger.target);
						trigger.getParent().baseDamage++;
					}
					event.num++;
					event.goto(1);
					"step 3"
					//game.log("!player.storage.sst_shenfa2");
					//player.logSkill("sst_shenfa",trigger.targets)
					if(!player.storage.sst_shenfa2){
						//game.log("player.chooseControl");
						player.chooseControl("此【杀】不可被响应","此【杀】伤害+1").set("ai",function(){
							return ["此【杀】不可被响应","此【杀】伤害+1"].randomGet();
						});
					}
					else if(player.storage.sst_shenfa2){
						//game.log("trigger.directHit.addArray");
						trigger.getParent().directHit.addArray(game.players);
						//if(!player.storage.sst_shenfa) player.storage.sst_shenfa=[];
						//player.storage.sst_shenfa.addArray(trigger.targets);
						trigger.getParent().baseDamage++;
						event.finish();
					}
					"step 4"
					if(result.control=="此【杀】不可被响应"){
						game.log(player,"选择了","#y此【杀】不可被响应");
						//game.log("此【杀】不可被响应: 2");
						player.chat("此【杀】不可被响应");
						trigger.getParent().directHit.addArray(game.players);
					}
					else{
						game.log(player,"选择了","#y此【杀】伤害+1");
						//game.log("此【杀】伤害+1: 2");
						player.chat("此【杀】伤害+1");
						//if(!player.storage.sst_shenfa) player.storage.sst_shenfa=[];
						//player.storage.sst_shenfa.addArray(trigger.targets);
						trigger.getParent().baseDamage++;
					}
				},
				intro:{
					content:function (storage,player){
						if(player.storage.sst_shenfa1){
							if(player.storage.sst_shenfa2){
								return "锁定技，你使用【杀】指定目标后，你令此【杀】不可被响应，且此【杀】伤害+1。";
							}
							return "锁定技，你使用【杀】指定目标后，你选择一项：此【杀】不可被响应，或此【杀】伤害+1。";
						}
					},
				},
				ai:{
					damageBonus:true,
					threaten:function(player,target){
						if(player.storage.sst_shenfa1){
							if(player.storage.sst_shenfa2) return 2;
							return 1.5;
						}
					},
				},
			},
			sst_shenwu:{
				trigger:{
					player:["phaseJieshuBegin"],
				},
				filter:function (event,player){
					return !player.getStat("damage");
				},
				forced:true,
				content:function () {
					"step 0"
					player.draw();
					"step 1"
					if(player.storage.sst_shenfa1){
						if(!player.storage.sst_shenfa2){
							player.loseMaxHp();
							game.log(player,"升级了","#g【神罚】");
							player.popup("技能升级");
							/*
							game.broadcastAll(function(){
								lib.translate["sst_shenfa_info"]="锁定技，你使用【杀】指定目标后，你令此【杀】不可被响应，且此【杀】伤害+1。";
							});
							*/
							player.storage.sst_shenfa2=true;
							player.markSkill("sst_shenfa");
						}
					}
					else{
						player.loseMaxHp();
						game.log(player,"升级了","#g【神罚】");
						player.popup("技能升级");
						/*
						game.broadcastAll(function(){
							lib.translate["sst_shenfa_info"]="锁定技，你使用【杀】指定目标后，你选择一项：此【杀】不可被响应，或此【杀】伤害+1。";
						});
						*/
						player.storage.sst_shenfa1=true;
						player.markSkill("sst_shenfa");
					}
				},
			},
			//Samus
			sst_qiongtu:{
				init:function(player){
					//0: Draw
					//1: Attack Range
					//2: Max HP
					player.storage.sst_qiongtu=[0,0,0];
				},
				locked:false,
				forced:true,
				trigger:{source:"damageSource"},
				filter:function(event,player){
					//0: Draw
					return player.storage.sst_qiongtu[0]<3;
				},
				content:function(){
					"step 0"
					//0: Draw
					player.storage.sst_qiongtu[0]++;
					"step 1"
					if(player.hasSkill("sst_juezhan")&&!lib.skill.sst_qiongtu.sst_juezhan_all_deleted(player)){
						var next=game.createEvent("sst_juezhan_delete");
						next.player=player;
						next.setContent(lib.skill.sst_qiongtu.sst_juezhan_delete);
					}
				},
				mod:{
					attackFrom:function(from,to,distance){
						//1: Attack Range
						return distance-from.storage.sst_qiongtu[1];
					},
				},
				sst_juezhan_all_deleted:function(player){
					var bool=true;
					for(var i=0;i<player.storage.sst_juezhan.length;i++){
						if(player.storage.sst_juezhan[i]){
							bool=false;
							break;
						}
					}
					return bool;
				},
				sst_juezhan_delete:function(){
					"step 0"
					var choice=[];
					var list=[];
					if(player.storage.sst_juezhan[0]){
						choice.push("选项一");
						list.push("选项一：你带有「伤害」标签的牌均视为【杀】。");
					}
					if(player.storage.sst_juezhan[1]){
						choice.push("选项二");
						list.push("选项二：你使用牌不能指定与你距离1以外的目标。");
					}
					if(player.storage.sst_juezhan[2]){
						choice.push("选项三");
						list.push("选项三：你的装备区被废除。");
					}
					player.chooseControl(choice,"cancel2").set("ai",function(){
						var choice=_status.event.choicex;
						if(choice.contains("选项三")) return "选项三";
						if(choice.contains("选项二")) return "选项二";
						return "选项一";
					}).set("choicex",choice).set("choiceList",list).set("displayIndex",false).set("prompt","茕途：你可以删除〖绝战〗一个｛｝内的内容");
					"step 1"
					if(result.control&&result.control!="cancel2"){
						switch(result.control){
							case "选项一":{
								player.storage.sst_juezhan[0]=false;
								break;
							}
							case "选项二":{
								player.storage.sst_juezhan[1]=false;
								break;
							}
							case "选项三":{
								player.storage.sst_juezhan[2]=false;
								player.enableEquip("equip1");
								player.enableEquip("equip2");
								player.enableEquip("equip3");
								player.enableEquip("equip4");
								player.enableEquip("equip5");
								break;
							}
						}
						game.log(player,"更改了","#g【绝战】","的描述");
						player.popup("更改描述");
					}
				},
				group:["sst_qiongtu2","sst_qiongtu3","sst_qiongtu4"],
			},
			sst_qiongtu2:{
				forced:true,
				trigger:{player:"phaseDrawBegin2"},
				filter:function(event,player){
					//0: Draw
					return player.storage.sst_qiongtu[0]&&!event.numFixed;
				},
				content:function(){
					//0: Draw
					trigger.num+=player.storage.sst_qiongtu[0];
				},
			},
			sst_qiongtu3:{
				trigger:{player:"phaseDiscardEnd"},
				frequent:true,
				filter:function(event,player){
					//1: Attack Range
					return player.storage.sst_qiongtu[1]<3&&event.cards&&event.cards.length;
				},
				content:function(){
					"step 0"
					//1: Attack Range
					player.storage.sst_qiongtu[1]=Math.min(3,player.storage.sst_qiongtu[1]+trigger.cards.length);
					"step 1"
					if(player.hasSkill("sst_juezhan")&&!lib.skill.sst_qiongtu.sst_juezhan_all_deleted(player)){
						var next=game.createEvent("sst_juezhan_delete");
						next.player=player;
						next.setContent(lib.skill.sst_qiongtu.sst_juezhan_delete);
					}
				},
			},
			sst_qiongtu4:{
				forced:true,
				trigger:{global:["respond","useCard"]},
				filter:function(event,player){
					//2: Max HP
					if(player.storage.sst_qiongtu[2]>=3) return false;
					if(!event.respondTo) return false;
					if(player!=event.respondTo[0]) return false;
					return true;
				},
				content:function(){
					"step 0"
					player.gainMaxHp();
					//2: Max HP
					player.storage.sst_qiongtu[2]++;
					"step 1"
					if(player.hasSkill("sst_juezhan")&&!lib.skill.sst_qiongtu.sst_juezhan_all_deleted(player)){
						var next=game.createEvent("sst_juezhan_delete");
						next.player=player;
						next.setContent(lib.skill.sst_qiongtu.sst_juezhan_delete);
					}
				},
			},
			sst_juezhan:{
				init:function(player){
					player.storage.sst_juezhan=[true,true,true];
					//player.logSkill("sst_juezhan");
					player.$disableEquip("equip1");
					player.$disableEquip("equip2");
					player.$disableEquip("equip3");
					player.$disableEquip("equip4");
					player.$disableEquip("equip5");
				},
				mod:{
					cardname:function(card,player){
						if(player.storage.sst_juezhan[0]&&card.name!="sha"&&lib.card[card.name].ai&&lib.card[card.name].ai.tag&&lib.card[card.name].ai.tag.damage) return "sha";
					},
					playerEnabled:function(card,player,target){
						if(player.storage.sst_juezhan[1]&&get.distance(player,target)>1) return false;
					},
				},
			},
			//Ridley
			sst_baozheng:{
				trigger:{
					player:"phaseDrawBegin1",
				},
				filter:function (event,player){
					return true;
				},
				forced:true,
				content:function (){
					"step 0"
					trigger.changeToZero();
					"step 1"
					player.loseHp();
					"step 2"
					if(player.getDamagedHp()){
						player.chooseTarget(player.maxHp-player.hp,true,function(card,player,target){
							return player!=target&&target.countCards("hej");
						}).set("ai",function(target){
							var player=_status.event.player;
							if(get.attitude(player,target)<0) return (target.countCards("he",function(card){
								return card.name=="tengjia"||get.value(card)>0;
							})>0)?1.5:-1.5;
							var js=target.getCards("j");
							if(js.length){
								var jj=js[0].viewAs?{name:js[0].viewAs}:js[0];
								if(js.length==1&&get.effect(target,jj,target,player)>=0){
									return 1.5;
								}
								return -3;
							}
							return 0;
						});
					}
					else{
						event.finish();
					}
					"step 3"
					if(result.bool){
						player.line(result.targets,"green");
						event.targets=result.targets;
						event.targets.sort(lib.sort.seat);
						event.num=0;
					}
					"step 4"
					if(!player.storage.sst_baozheng) player.storage.sst_baozheng=[];
					if(event.num<event.targets.length){
						if(event.targets[event.num].countCards("hej")){
							player.gainPlayerCard(event.targets[num],"hej",true);
							/*
							player.choosePlayerCard("hej",event.targets[event.num],true).set("filterButton",function(button){
								return lib.filter.canBeGained(button.link,player,event.targets[event.num]);
							});
							*/
						}
					}
					else{
						event.finish();
					}
					"step 5"
					if(result.cards&&result.cards.length){
						player.storage.sst_baozheng.addArray(result.cards);
						//player.gain(result.cards,event.targets[event.num],"give");
						event.num++;
						event.goto(4);
					}
				},
				ai:{
					halfneg:true,
					pretao:true,
					expose:0.1,
				},
				group:["sst_baozheng2","sst_baozheng_clear"],
				subSkill:{
					clear:{
						trigger:{
							global:"phaseAfter",
						},
						silent:true,
						content:function (){
							delete player.storage.sst_baozheng;
						},
						sub:true,
					},
				},
			},
			sst_baozheng2:{
				enable:["chooseToUse"],
				filterCard:function (card,player){
					if(!player.storage.sst_baozheng) return false;
					return player.storage.sst_baozheng.contains(card);
				},
				position:"he",
				viewAs:{
					name:"sha",
				},
				viewAsFilter:function (player){
					if(!player.storage.sst_baozheng) return false;
					if(!player.hasCard(function(card){
						return player.storage.sst_baozheng.contains(card);
					},"he")) return false;
				},
				prompt:"将暴征获得的牌当杀使用",
				check:function (card){return 4-get.value(card)},
				ai:{
					skillTagFilter:function (player){
						if(!player.storage.sst_baozheng) return false;
						if(!player.hasCard(function(card){
							return player.storage.sst_baozheng.contains(card);
						},"he")) return false;
					},
					respondSha:true,
					basic:{
						useful:[5,1],
						value:[5,1],
					},
					order:function(item){
						if(_status.event.player.hasSkillTag("presha",true,null,true)) return 10;
						if(lib.linked.contains(get.nature(item))) return 3.1;
						return 3;
					},
					result:{
						target:function(player,target,card,isLink){
							if(!isLink&&player.hasSkill("jiu")&&!target.hasSkillTag("filterDamage",null,{
								player:player,
								card:card,
								jiu:true,
							})){
								if(get.attitude(player,target)>0){
									return -7;
								}
								else{
									return -4;
								}
							}
							return -1.5;
						},
					},
					tag:{
						respond:1,
						respondShan:1,
						damage:function(card){
							if(card.nature=="poison") return;
							return 1;
						},
						natureDamage:function(card){
							if(card.nature) return 1;
						},
						fireDamage:function(card,nature){
							if(card.nature=="fire") return 1;
						},
						thunderDamage:function(card,nature){
							if(card.nature=="thunder") return 1;
						},
						poisonDamage:function(card,nature){
							if(card.nature=="poison") return 1;
						},
					},
				},
			},
			sst_furan:{
				trigger:{
					player:"dying",
				},
				filter:function (event,player){
					return true;
				},
				forced:true,
				content:function (){
					"step 0"
					player.discard(player.getCards("h"));
					"step 1"
					if(player.hp<1){
						player.recover(1-player.hp);
					}
					"step 2"
					player.loseMaxHp();
				},
				ai:{
					halfneg:true,
				},
			},
			//Dark Samus
			sst_yingliu:{
				trigger:{
					player:"phaseZhunbeiAfter",
				},
				forced:true,
				content:function(){
					"step 0"
					player.phaseDraw();
					player.phaseUse();
					"step 1"
					var stat=player.getStat();
					stat.card={};
					for(var i in stat.skill){
						var bool=false;
						var info=lib.skill[i];
						if(info.enable!=undefined){
							if(typeof info.enable=="string"&&info.enable=="phaseUse") bool=true;
							else if(typeof info.enable=="object"&&info.enable.contains("phaseUse")) bool=true;
							if(typeof info.enable=="string"&&info.enable=="phaseDraw") bool=true;
							else if(typeof info.enable=="object"&&info.enable.contains("phaseDraw")) bool=true;
						}
						if(bool) stat.skill[i]=0;
					}
				},
			},
			sst_shunxing:{
				group:["sst_shunxing2","sst_shunxing3"],
				ai:{
					threaten:2,
				},
			},
			sst_shunxing2:{
				trigger:{
					player:"phaseDrawBefore",
				},
				filter:function(event,player){
					return true;
				},
				direct:true,
				content:function(){
					"step 0"
					var check,i,num=0,num2=0,players=game.filterPlayer();
					for(var i=0;i<players.length;i++){
						if(player!=players[i]&&players[i].countCards("h")){
							var att=get.attitude(player,players[i]);
							if(att<=0){
								num++;
							}
							if(att<0){
								num2++;
							}
						}
					}
					check=(num>=2&&num2>0);

					player.chooseBool(get.prompt("sst_shunxing"),"你可以跳过此摸牌阶段，然后获得其他角色区域内的一张牌").set("ai",function(){
						if(!_status.event.check) return false;
						if(player.hasCard(function(card){
							return get.name(card)=="bingliang";
						},"j")) return false;
						/*
						var val=0;
						var cards=player.getCards("h");
						for(var i=0;i<cards.length;i++){
							val+=get.value(cards[i]);
						}
						val=val/cards.length;
						return val>=7;
						*/
						return true;
					}).set("check",check);
					"step 1"
					if(result.bool){
						trigger.cancel();
						player.logSkill("sst_shunxing");
						game.log(player,"跳过了此摸牌阶段");
						player.chooseTarget("获得一名其他角色区域内的一张牌",true,function(card,player,target){
							return target!=player&&target.countCards("hej");
						}).set("ai",function(target){
							return 1-get.attitude(_status.event.player,target);
						})
					}
					else{
						event.finish();
					}
					"step 2"
					if(result.bool){
						result.targets.sortBySeat();
						player.line(result.targets,"green");
						event.targets=result.targets;
						if(!event.targets.length) event.finish();
					}
					else{
						event.finish();
					}
					"step 3"
					player.gainMultiple(event.targets,"hej",true);
					"step 4"
					game.delayx();
				},
				ai:{
					expose:0.2,
				},
			},
			sst_shunxing3:{
				trigger:{
					player:"phaseUseBefore",
				},
				filter:function(event,player){
					return true;
				},
				direct:true,
				content:function(){
					"step 0"
					var check;
					if(player.countCards("h")>player.hp+1){
						check=false;
					}
					else if(player.countCards("h",{name:["wuzhong"]})){
						check=false;
					}
					else{
						check=true;
					}
					player.chooseBool(get.prompt("sst_shunxing"),"你可以跳过此出牌阶段，然后重铸任意张红色手牌").set("ai",function(){
						if(!_status.event.check) return false;
						if(player.hasCard(function(card){
							return get.name(card)=="lebu";
						},"j")) return false;
						var val=0;
						var cards=player.getCards("h");
						for(var i=0;i<cards.length;i++){
							val+=get.value(cards[i]);
						}
						val=val/cards.length;
						return player.hasCard(function(card){
							return get.color(card)=="red";
						},"h")&&val<=4;
					}).set("check",check);
					"step 1"
					if(result.bool){
						trigger.cancel();
						player.logSkill("sst_shunxing");
						game.log(player,"跳过了此出牌阶段");
						player.chooseCard("h",[1,Infinity],"请选择要重铸的红色手牌",function(card){
							return get.color(card)=="red";
						}).set("ai",function(card){
							return 8-get.value(card);
						});
					}
					else{
						event.finish();
					}
					"step 2"
					if(result.cards&&result.cards.length) {
						var cards=result.cards;
						player.$throw(cards,1000);
						player.lose(cards,ui.discardPile,"visible").set("type","_chongzhu");
						game.log(player,"将",cards,"置入了弃牌堆");
						player.draw(cards.length);
					}
				},
			},
			//Mr. Game & Watch
			sst_shenpan:{
				//skillAnimation:true,
				//animationStr:"审判",
				//animationColor:"metal",
				trigger:{
					player:"useCardToPlayered",
				},
				filter:function(event,player){
					return event.targets.length==1&&(get.name(event.card)=="sha"||get.type(event.card)=="trick");
				},
				direct:true,
				content:function(){
					"step 0";
					player.chooseBool(get.prompt("sst_shenpan",trigger.target),"你可以判定，然后根据判定结果执行相应的效果").set("ai",function(){
						return get.attitude(_status.event.player,_status.event.targetx)<0;
					}).set("targetx",trigger.target);
					"step 1"
					if(result.bool){
						player.logSkill("sst_shenpan",trigger.target,"green");
						player.judge(function(card){
							var num=get.number(card);
							switch(num){
								case 1:return -2;
								case 2:return -1;
								case 3:return 1;
								case 4:return 2;
								case 5:return 2;
								case 6:return 2;
								case 7:{
									if(player.getDamagedHp()){
										return 2;
									}
									else{
										return 0;
									}
								}
								case 8:return 3;
								case 9:return 4;
							}
						});
					}
					else{
						event.finish();
					}
					"step 2"
					//if(result.number>=1&&result.number<=9) player.popup(get.translation(result.number));
					switch(result.number){
						case 1:player.popup("①");player.loseHp();break;
						case 2:player.popup("②");player.chooseToDiscard("审判：弃置一张牌","he",true);break;
						case 3:player.popup("③");trigger.getParent().directHit.addArray(game.players);break;
						case 4:{
							player.popup("④");
							player.line(trigger.target);
							trigger.target.damage(player);
							break;
						}
						case 5:{
							player.popup("⑤");
							player.line(trigger.target,"thunder");
							trigger.target.damage(player,"thunder");
							break;
						}
						case 6:{
							player.popup("⑥");
							player.line(trigger.target,"fire");
							trigger.target.damage(player,"fire");
							break;
						}
						case 7:player.popup("⑦");player.recover();break;
						case 8:{
							player.popup("⑧");
							player.line(trigger.target,"green");
							trigger.target.turnOver();
							break;
						}
						case 9:{
							player.popup("⑨");
							//player.awakenSkill("sst_shenpan");
							player.line(trigger.target);
							for(var i=0;i<game.players.length;i++){
								game.players[i].chat("是9！是9！");
							}
							event.nine=true;
							break;
						}
					}
					game.delayx();
					"step 3"
					if(event.nine){
						player.popup("⑨");
						player.line(trigger.target,"fire");
						game.delayx();
					}
					else{
						event.finish();
					}
					"step 4"
					player.popup("⑨");
					player.line(trigger.target,"green");
					game.delayx();
					"step 5"
					player.popup("⑨");
					player.line(trigger.target,"thunder");
					game.delayx();
					"step 6"
					player.popup("⑨");
					player.line(trigger.target,"black");
					trigger.target.damage(3,player);
				},
				ai:{
					threaten:2,
					damage:true,
					expose:0.2,
				},
			},
			//mario not mary
			sst_qixiao:{
				enable:"phaseUse",
				filter:function(event,player){
					if(player.storage.sst_qixiao){
						if(player.getStat().skill["sst_qixiao"]>=2) return false;
					}
					else{
						if(player.getStat().skill["sst_qixiao"]>=1) return false;
					}
					return true;
				},
				filterTarget:function(card,player,target){
					return lib.filter.targetEnabled2({name:"sha",nature:"fire"},player,target);
				},
				selectTarget:function(){
					if(_status.event.player.storage.sst_qixiao) return [1,2];
					return 1;
				},
				multitarget:true,
				multiline:true,
				line:false,
				delay:false,
				prompt:function(){
					var player=_status.event.player;
					if(player.storage.sst_qixiao){
						return "出牌阶段限两次，你可以失去两点体力，视为对至多两名角色使用火【杀】（不受使用次数限制），你每以此法造成伤害后，摸两张牌。";
					}
					else{
						return "出牌阶段限一次，你可以失去一点体力，视为对一名角色使用火【杀】（不受使用次数限制），你每以此法造成伤害后，摸一张牌。";
					}
				},
				content:function(){
					if(player.storage.sst_qixiao){
						player.loseHp(2);
					}
					else{
						player.loseHp();
					}
					if(player.storage.sst_qixiao){
						player.useCard({name:"sha",nature:"fire",isCard:true},targets,false,"sst_qixiao");
					}
					else{
						player.useCard({name:"sha",nature:"fire",isCard:true},target,false,"sst_qixiao");
					}
				},
				ai:{
					order:1,
					result:{
						target:function(player,target){
							if(player.hp>2&&player.hp>target.hp&&target.countCards("he")<4){
								return get.effect(target,{name:"sha",nature:"fire"},player,target);
							}
							return 0;
						}
					}
				},
				intro:{
					content:function(storage,player){
						if(player.storage.sst_qixiao){
							return "出牌阶段限两次，你可以失去两点体力，视为对至多两名角色使用火【杀】（不受使用次数限制），你每以此法造成伤害后，摸两张牌。";
						}
					}
				},
				group:["sst_qixiao2"],
			},
			sst_qixiao2:{
				trigger:{source:"damageEnd"},
				forced:true,
				filter:function(event,player){
					return event.getParent().skill=="sst_qixiao";
				},
				content:function(){
					if(player.storage.sst_qixiao){
						player.draw(2);
					}
					else{
						player.draw();
					}
				},
			},
			sst_xuansha:{
				skillAnimation:true,
				animationColor:"fire",
				juexingji:true,
				unique:true,
				trigger:{player:"phaseZhunbeiBegin"},
				filter:function(event,player){
					return player.hp<=1&&!player.storage.sst_xuansha;
				},
				forced:true,
				//priority:3,
				content:function(){
					player.gainMaxHp();
					game.log(player,"更改了","#g【奇嚣】","的描述");
					player.popup("更改描述");
					/*
					game.broadcastAll(function(){
						lib.translate["sst_qixiao_info"]="出牌阶段限两次，你可以失去两点体力，视为对至多两名角色使用火【杀】（不受使用次数限制），你每以此法造成伤害后，摸两张牌。";
					});
					*/
					player.storage.sst_qixiao=true;
					player.markSkill("sst_qixiao");
					player.addTempSkill("sst_xuansha2");
					player.awakenSkill(event.name);
					player.storage.sst_xuansha=true;
				},
				ai:{
					threaten:function(player,target){
						if(target.hp==1) return 2;
						return 0.5;
					},
					maixie:true,
					effect:{
						target:function(card,player,target){
							if(!target.hasFriend()) return;
							if(get.tag(card,"damage")==1&&target.hp==2&&!target.isTurnedOver()&&
							_status.currentPhase!=target&&get.distance(_status.currentPhase,target,"absolute")<=3) return [0.5,1];
						}
					}
				},
			},
			sst_xuansha2:{
				mod:{
					cardname:function(card,player){
						return "tao";
					},
				},
				ai:{
					save:true,
					respondTao:true,
					pretao:true,
					nokeep:true,
				},
			},
			//Yumikohimi
			sst_yingji:{
				enable:"phaseUse",
				usable:1,
				filterTarget:function(card,player,target){
					return lib.filter.targetEnabled2({name:"sha"},player,target);
				},
				line:false,
				delay:false,
				content:function(){
					if(get.distance(player,target)-1>0) target.draw(get.distance(player,target)-1);
					player.useCard({name:"sha",isCard:true},target,false,"sst_yingji");
				},
				ai:{
					order:1,
					result:{
						target:function(player,target){
							return get.effect(target,{name:"sha"},player,target)+Math.max(0,get.distance(player,target)-1)*2;
						}
					}
				},
			},
			sst_huxiao:{
				trigger:{
					global:"useCard2",
				},
				filter:function (event,player){
					if(get.name(event.card)!="sha") return false;
					return game.hasPlayer(function(current){
						//return !event.targets.contains(current)&&player.canUse(event.card,current);
						return (get.zhu(player,"shouyue")||player.hasCard(function(card){
							return get.color(card)=="red";
						},"he"))&&!event.targets.contains(current)&&lib.filter.targetEnabled2(event.card,player,current);
					});
				},
				direct:true,
				content:function (){
					"step 0"
					player.chooseCardTarget({
						filterCard:function(card,player){
							if(get.zhu(player,"shouyue")) return true;
							return get.color(card)=="red";
						},
						position:"he",
						filterTarget:function(card,player,target){
							return !_status.event.targetsx.contains(target)&&lib.filter.targetEnabled2(_status.event.cardx,_status.event.sourcex,target);
						},
						ai1:function(card){
							return 5-get.useful(card);
						},
						ai2:function(target){
							var player=_status.event.player;
							return get.effect(target,_status.event.cardx,_status.event.sourcex,player);
						},
						prompt:"###"+get.prompt("sst_huxiao")+"###弃置一张红色牌，然后为"+get.translation(trigger.card)+"指定一个额外目标",
					}).set("targetsx",trigger.targets).set("sourcex",trigger.player).set("cardx",trigger.card);
					"step 1"
					if(result.bool){
						if(!event.isMine()&&!_status.connectMode) game.delayx();
						event.card=result.cards[0];
						event.targets=result.targets;
					}
					else{
						event.finish();
					}
					"step 2"
					player.logSkill("sst_huxiao",event.targets);
					player.discard(event.card);
					trigger.targets.addArray(event.targets);
				},
				ai:{
					expose:0.2,
				},
			},
			//Haine
			sst_yiqing:{
				trigger:{
					player:"useCardToPlayered",
				},
				filter:function(event,player){
					var history=player.getAllHistory("useCard",function(evt){
						return true;
					});
					if(!history||!history.length) return false;
					var num=history.length-2;
					if(num<0) return false;
					return event.targets&&event.targets.length==1&&!history[num].targets.contains(event.targets[0]);
					/*
					if(!player.storage.sst_yiqing) return false;
					return event.targets&&event.targets.length==1&&!player.storage.sst_yiqing.contains(event.targets[0]);
					*/
				},
				forced:true,
				content:function(){
					player.draw("nodelay");
				},
				intro:{
					mark:function(dialog,content,player){
						/*
						var history=player.getAllHistory("useCard",function(evt){
							return true;
						});
						if(!history||!history.length) return;
						var num=history.length-1;
						if(num<0) return;
						*/
						if(!player.storage.sst_yiqing) return;
						//if(history[num].targets&&history[num].targets.length){
						if(player.storage.sst_yiqing&&player.storage.sst_yiqing.length){
							dialog.addText("上一张牌指定的目标："+get.translation(player.storage.sst_yiqing));
						}
						else{
							dialog.addText("上一张牌没有指定目标");
						}
					},
					content:function(storage,player){
						if(!storage) return;
						if(storage&&storage.length){
							return "上一张牌指定的目标："+get.translation(storage);
						}
						else{
							return "上一张牌没有指定目标";
						}
					},
				},
				ai:{
					threaten:2,
					effect:{
						player:function(card,player,target){
							/*
							var history=player.getAllHistory("useCard",function(evt){
								return true;
							});
							if(!history||!history.length) return;
							var num=history.length-1;
							if(num<0) return;
							*/
							if(!player.storage.sst_yiqing) return;
							//if(history[num].targets&&!history[num].targets.contains(target)){
								if(player.storage.sst_yiqing&&!player.storage.sst_yiqing.contains(target)){
								return [1,3];
							}
						},
					},
				},
				group:["sst_yiqing_use"],
				subSkill:{
					use:{
						trigger:{player:"useCard"},
						silent:true,
						filter:function(event,player){
							return true;
						},
						content:function(){
							/*
							var history=player.getAllHistory("useCard",function(evt){
								return true;
							});
							if(history&&history.length){
								player.updateMarks();
								player.markSkill("sst_yiqing");
							}
							else{
								player.updateMarks();
								player.unmarkSkill("sst_yiqing");
							}
							*/
							/*
							var num=history.length-1;
							if(history[num].targets&&history[num].targets.length){
								player.updateMarks();
								player.markSkill("sst_yiqing");
							}
							else{
								player.updateMarks();
								player.unmarkSkill("sst_yiqing");
							}
							*/
							player.storage.sst_yiqing=trigger.targets;
							//player.updateMarks();
							//player.markSkill("sst_yiqing");
						},
						sub:true,
					},
				},
			},
			sst_mingxi:{
				trigger:{
					player:"phaseUseEnd",
				},
				filter:function(event,player){
					var history=player.getHistory("useCard");
					if(history.length<2) return false;
					var num=3;
					var bools=[true,true,true];
					var targets=[];
					var types=[];
					var suits=[];
					for(var i=0;i<history.length;i++){
						if(!history[i].targets) continue;
						for(var j=0;j<history[i].targets.length;j++){
							if(targets.contains(history[i].targets[j])) bools[0]=false;
							targets.push(history[i].targets[j]);
						}
					}
					for(var i=0;i<history.length;i++){
						if(types.contains(get.type(history[i].card,"trick"))) bools[1]=false;
						types.push(get.type(history[i].card,"trick"));
						if(suits.contains(get.suit(history[i].card))) bools[2]=false;
						suits.push(get.suit(history[i].card));
					}
					for(var i=0;i<bools.length;i++){
						if(!bools[i]) num--;
					}
					return num>0;
				},
				direct:true,
				content:function (){
					"step 0"
					var history=player.getHistory("useCard");
					var num=3;
					var bools=[true,true,true];
					var targets=[];
					var types=[];
					var suits=[];
					for(var i=0;i<history.length;i++){
						if(!history[i].targets) continue;
						for(var j=0;j<history[i].targets.length;j++){
							if(targets.contains(history[i].targets[j])) bools[0]=false;
							targets.push(history[i].targets[j]);
						}
					}
					for(var i=0;i<history.length;i++){
						if(types.contains(get.type(history[i].card,"trick"))) bools[1]=false;
						types.push(get.type(history[i].card,"trick"));
						if(suits.contains(get.suit(history[i].card))) bools[2]=false;
						suits.push(get.suit(history[i].card));
					}
					for(var i=0;i<bools.length;i++){
						if(!bools[i]) num--;
					}
					player.chooseTarget(get.prompt("sst_mingxi"),"你可以展示至多"+get.cnNumber(num)+"名角色的手牌",[1,num],function(card,player,target){
						return target.countCards("h");
					}).set("ai",function(target){
						var player=_status.event.player;
						if(get.attitude(player,target)>0) return 0;
						return -get.attitude(player,target);
					});
					"step 1"
					if(result.targets&&result.targets.length){
						var targets=result.targets;
						targets.sort(lib.sort.seat);
						player.logSkill("sst_mingxi",targets);
						for(var i=0;i<targets.length;i++){
							targets[i].showHandcards();
						}
					}
				},
			},
			//Terry
			sst_elang:{
				trigger:{player:"phaseZhunbeiBegin"},
				filter:function(event,player){
					return game.hasPlayer(function(current){
						return current.countCards("h")>=player.countCards("h");
					});
				},
				direct:true,
				content:function(){
					player.chooseUseTarget("###"+get.prompt("sst_elang")+"###视为对一名手牌数不小于你的角色使用一张【决斗】，若如此做，结算结束后，你可以获得此【决斗】流程内打出的所有【杀】",{name:"juedou",isCard:true},game.filterPlayer(function(current){
						return current.countCards("h")>=player.countCards("h");
					}),false).logSkill="sst_elang";
				},
				group:["sst_elang2"],
				subSkill:{
					cards:{
						trigger:{
							player:"juedouAfter",
						},
						silent:true,
						filter:function (event,player){
							//var evt=event.getParent();
							//game.log(event);
							//game.log(event.getParent(3));
							return event.getParent(3)&&event.getParent(3).name=="sst_elang"&&event["targetCards"].length+event["playerCards"].length>0;
						},
						content:function (){
							var cards=[];
							cards.addArray(trigger["targetCards"].slice(0));
							cards.addArray(trigger["playerCards"].slice(0));
							/*
							for(var i=0;i<cards.length;i++){
								if(get.position(cards[i])!="d") cards.remove(cards[i--]);
							}
							*/
							player.storage.sst_elang=cards;
							/*
							if(!cards.length) event.finish();
							else{
								var evt=trigger.getParent("useCard");
								if(evt&&evt.name=="useCard"){
									var next=game.createEvent("sst_elang_gain");
									next.player=player;
									next.cards=cards;
									event.next.remove(next);
									evt.after.push(next);
									next.setContent(function(){
										player.logSkill("sst_elang");
										player.gain(cards,"gain2");
									});
								}
							}
							*/
						},
					},
				},
			},
			/*
			sst_elang2:{
				trigger:{
					player:"juedouAfter",
				},
				direct:true,
				filter:function (event,player){
					//var evt=event.getParent();
					//game.log(event);
					//game.log(event.getParent(3));
					return event.getParent(3)&&event.getParent(3).name=="sst_elang"&&event["targetCards"].length+event["playerCards"].length>0;
				},
				content:function (){
					var cards=[];
					cards.addArray(trigger["targetCards"].slice(0));
					cards.addArray(trigger["playerCards"].slice(0));
					for(var i=0;i<cards.length;i++){
						if(get.position(cards[i])!="d") cards.remove(cards[i--]);
					}
					if(!cards.length) event.finish();
					else{
						var evt=trigger.getParent("useCard");
						if(evt&&evt.name=="useCard"){
							var next=game.createEvent("sst_elang_gain");
							next.player=player;
							next.cards=cards;
							event.next.remove(next);
							evt.after.push(next);
							next.setContent(function(){
								player.logSkill("sst_elang");
								player.gain(cards,"gain2");
							});
						}
					}
				},
			},
			*/
			sst_elang2:{
				trigger:{player:"juedouAfter"},
				frequent:true,
				prompt:function(){
					return "###"+get.prompt("sst_elang")+"###你可以获得此【决斗】流程内打出的所有【杀】";
				},
				filter:function (event,player){
					return event.getParent(3)&&event.getParent(3).name=="sst_elang"&&event["targetCards"].length+event["playerCards"].length;
				},
				content:function (){
					"step 0"
					var cards=[];
					cards.addArray(trigger["targetCards"].slice(0));
					cards.addArray(trigger["playerCards"].slice(0));
					for(var i=0;i<cards.length;i++){
						if(get.position(cards[i])!="d") cards.remove(cards[i--]);
					}
					player.gain(cards,"gain2");
				},
			},
			sst_paoxiao:{
				mod:{
					cardUsable:function(card,player,num){
						if(card.name=="sha") return Infinity;
					}
				},
				trigger:{
					player:"useCard",
				},
				filter:function (event,player){
					if(event.card.name!="sha") return false;
					var history=player.getHistory("useCard",function(evt){
						return evt.card.name=="sha";
					});
					return history&&history.indexOf(event)==1;
				},
				frequent:true,
				content:function (){
					player.draw("nodelay");
				},
			},
			//Simon
			sst_shengfa:{
				trigger:{
					global:"phaseZhunbeiBegin",
				},
				filter:function(event,player) {
					return event.player!=player;
				},
				logTarget:"player",
				check:function(event,player){
					if(get.attitude(player,event.player)>=0) return false;
					return get.damageEffect(event.player,player,player)+get.damageEffect(player)+1>0;
				},
				content:function(){
					player.draw();
					player.storage.sst_shengfa=trigger.player;
					player.addTempSkill("sst_shengfa2");
				},
				ai:{
					damage:true,
					expose:0.2,
				},
			},
			sst_shengfa2:{
				trigger:{
					global:"phaseJieshuBegin",
				},
				filter:function(event,player) {
					return event.player!=player&&player.storage.sst_shengfa==event.player;
				},
				forced:true,
				content:function(){
					if(!trigger.player.getStat("damage")){
						player.damage("nosource");
					}
					else{
						player.line(trigger.player,"green");
						trigger.player.damage(player);
					}
					if(player.storage.sst_shengfa) delete player.storage.sst_shengfa;
				},
			},
			sst_shengbian:{
				mod:{
					/*
					attackFrom:function(from,to,distance){
						//game.log(distance);
						var dist=0;
						if(from.getEquip(1)){
							var info=get.info(from.getEquip(1));
							if(info.distance&&info.distance.attackFrom){
								dist=info.distance.attackFrom;
							}
						}
						if(from.getEquip(4)) dist--;
						//game.log("weapon",dist);
						return distance-dist-from.countCards("h")+1;
					},
					*/
					inRange:function(from,to){
						if(from!=to&&get.distance(from,to)<=from.countCards("h")){
							return true;
						}
						else{
							return false;
						}
					},
				},
			},
			//Incineroar
			sst_weihe:{
				trigger:{
					source:"damageEnd",
				},
				filter:function(event,player) {
					return event.card&&event.card.name=="sha"&&!event.player.isDead();
				},
				direct:true,
				forced:true,
				content:function(){
					player.logSkill("sst_weihe",trigger.player);
					if(!trigger.player.storage.sst_weihe) trigger.player.storage.sst_weihe=0;
					trigger.player.storage.sst_weihe++;
					trigger.player.addTempSkill("sst_weihe2",{player:"phaseEnd"});
					trigger.player.unmarkSkill("sst_weihe2");
					trigger.player.markSkillCharacter("sst_weihe2",player,"威吓","你即将造成的伤害-"+trigger.player.storage.sst_weihe+"直至你下个回合结束");
				},
			},
			sst_weihe2:{
				trigger:{source:"damageBegin1"},
				filter:function(event,player){
					return true;
				},
				forced:true,
				onremove:function (player) {
					player.unmarkSkill("sst_weihe2");
					delete player.storage.sst_weihe;
				},
				content:function(){
					trigger.num-=player.storage.sst_weihe;
				},
				ai:{
					effect:{
						player:function(card,player,target){
							if(get.tag(card,"damage")){
								if(player.hasSkillTag("jueqing",false,target)) return;
								return "zeroplayertarget";
							}
						},
					},
				},
			},
			sst_fuchou:{
				intro:{
					mark:function(dialog,storage,player){
						dialog.addAuto(player.getCards("s",function(card){
							return card.hasGaintag("sst_fuchou");
						}));
					},
					markcount:function(storage,player){
						return player.getCards("s",function(card){
							return card.hasGaintag("sst_fuchou");
						}).length;
					},
					onunmark:function(storage,player){
						var cards=player.getCards("s",function(card){
							return card.hasGaintag("sst_fuchou");
						});
						if(cards.length){
							player.lose(cards,ui.discardPile);
							player.$throw(cards,1000);
							game.log(cards,"被置入了弃牌堆");
						}
					},
				},
				trigger:{global:"roundStart"},
				check:function(event,player){
					return (player.maxHp-player.hp<2)||!player.hasUsableCard("shan");
				},
				content:function(){
					player.addTempSkill("sst_fuchou1","roundStart");
					player.addTempSkill("sst_fuchou5","roundStart");
				},
				group:["sst_fuchou2","sst_fuchou3","sst_fuchou4"],
			},
			sst_fuchou1:{
				trigger:{player:"damageEnd"},
				frequent:true,
				filter:function(event,player){
					return get.itemtype(event.cards)=="cards"&&get.position(event.cards[0],true)=="o";
				},
				content:function(){
					if(get.itemtype(trigger.cards)=="cards"&&get.position(trigger.cards[0],true)=="o"){
						/*
						player.lose(trigger.cards,ui.special,"toStorage");
						player.$gain2(trigger.cards);
						player.storage.sst_fuchou=player.storage.sst_fuchou.concat(trigger.cards);
						player.syncStorage("sst_fuchou");
						player.markSkill("sst_fuchou");
						game.log(player,"将",trigger.cards,"置于武将牌上");
						*/
						player.$gain2(trigger.cards);
						game.log(player,"将",trigger.cards,"置于武将牌上");
						player.loseToSpecial(trigger.cards,"sst_fuchou");
						player.markSkill("sst_fuchou");
					}
				},
				ai:{
					maixie:true,
					maixie_hp:true,
					threaten:0.8,
					effect:{
						target:function (card,player,target){
							if(player.hasSkillTag("jueqing",false,target)) return [1,-1];
							if(get.tag(card,"damage")&&player!=target) return [1,0.6];
						},
					},
				},
			},
			sst_fuchou2:{
				trigger:{player:"loseAfter"},
				silent:true,
				filter:function(event,player){
					if(!event.ss||!event.ss.length) return false;
					for(var i in event.gaintag_map){
						if(event.gaintag_map[i].contains("sst_fuchou")) return true;
						return false;
					}
				},
				content:function(){
					"step 0"
					var num=player.getCards("s",function(card){
						return card.hasGaintag("sst_fuchou");
					}).length;
					if(num){
						player.markSkill("sst_fuchou");
					}
					else{
						player.unmarkSkill("sst_fuchou");
					}
					"step 1"
					game.updateRoundNumber();
				},
			},
			sst_fuchou3:{
				trigger:{player:["useCardBefore","respondBefore"]},
				silent:true,
				filter:function(event,player){
					if(!event.card) return false;
					var cards=event.cards;
					for(var i=0;i<cards.length;i++){
						//game.log(cards[i].hasGaintag("sst_fuchou"));
						if(cards[i].hasGaintag("sst_fuchou")) return true;
					}
					return false;
				},
				content:function(){
					//player.logSkill("sst_fuchou3");
					trigger.skill="sst_fuchou";
				},
			},
			/*
			sst_fuchou2:{
				trigger:{player:"chooseToRespondBegin"},
				filter:function(event,player){
					if(event.responded) return false;
					var sst_fuchou=player.storage.sst_fuchou;
					if(!sst_fuchou||!sst_fuchou.length) return false;
					//lib.skill.sst_fuchou.sync(sst_fuchou);
					player.syncStorage("sst_fuchou");
					for(var i=0;i<sst_fuchou.length;i++){
						if(event.filterCard(sst_fuchou[i],player,event)&&lib.filter.cardRespondable(sst_fuchou[i],player,event)) return true;
					}
					return false;
				},
				direct:true,
				content:function(){
					"step 0"
					player.chooseButton(["复仇",player.storage.sst_fuchou]).set("filterButton",function(button){
						var evt=_status.event.getTrigger();
						if(evt&&evt.filterCard){
							return evt.filterCard(button.link,_status.event.player,evt)&&lib.filter.cardRespondable(button.link,_status.event.player,evt);
						}
						return true;
					}).set("ai",function(button){
						var evt=_status.event.getTrigger();
						if(evt&&evt.ai){
							var tmp=_status.event;
							_status.event=evt;
							var result=evt.ai(button.link,_status.event.player,evt);
							_status.event=tmp;
							return result;
						}
						return 1;
					});
					"step 1"
					if(result.bool){
						player.logSkill("sst_fuchou2");
						trigger.untrigger();
						trigger.responded=true;
						trigger.result={bool:true,card:result.links[0],cards:result.links.slice(0)};
						player.storage.sst_fuchou.remove(result.links[0]);
						player.syncStorage("sst_fuchou");
						player.updateMarks();
						if(!player.storage.sst_fuchou||!player.storage.sst_fuchou.length){
							player.unmarkSkill("sst_fuchou");
						}
					}
				},
				ai:{
					order:1,
					useful:-1,
					value:-1,
				},
			},
			sst_fuchou3:{
				enable:"chooseToUse",
				filter:function(event,player){
					var sst_fuchou=player.storage.sst_fuchou;
					if(!sst_fuchou||!sst_fuchou.length) return false;
					//lib.skill.sst_fuchou.sync(sst_fuchou);
					player.syncStorage("sst_fuchou");
					for(var i=0;i<sst_fuchou.length;i++){
						if(event.filterCard(sst_fuchou[i],player,event)) return true;
					}
					return false;
				},
				chooseButton:{
					dialog:function(event,player){
						return ui.create.dialog("复仇",player.storage.sst_fuchou,"hidden");
					},
					filter:function(button,player){
						var evt=_status.event.getParent();
						if(evt&&evt.filterCard){
							return evt.filterCard(button.link,player,evt);
						}
						return true;
					},
					check:function(button){
						if(button.link.name=="du") return 10;
						var player=_status.event.player;
						if(player.getUseValue(button.link)>0) return get.order(button.link);
						return -1;
					},
					backup:function(links,player){
						return {
							filterCard:function(){return false;},
							selectCard:-1,
							viewAs:links[0],
							onuse:function(result,player){
								//player.logSkill("sst_fuchou3_backup");
								player.storage.sst_fuchou.remove(result.card);
								player.syncStorage("sst_fuchou");
								player.updateMarks();
								if(!player.storage.sst_fuchou||!player.storage.sst_fuchou.length){
									player.unmarkSkill("sst_fuchou");
								}
							}
						}
					},
					prompt:function(links,player){
						return "选择"+get.translation(links)+"的目标";
					},
				},
				ai:{
					order:function(item,player){
						var event=_status.event;
						if(event.type!="phase") return 4;
						if(!player) return -1;
						var sst_fuchou=player.storage.sst_fuchou;
						if(!sst_fuchou||!sst_fuchou.length) return -1;
						var order=0;
						for(var i=0;i<sst_fuchou.length;i++){
							if(player.getUseValue(sst_fuchou[i])>0){
								var order2=get.order(sst_fuchou[i]);
								if(order2>order) order=order2;
							}
						}
						return order+0.1;
					},
					result:{
						player:function(player){
							if(_status.event.dying) return get.attitude(player,_status.event.dying);
							return 1;
						}
					},
					useful:-1,
					value:-1,
				},
			},
			*/
			sst_fuchou4:{
				trigger:{source:"damageBegin1"},
				forced:true,
				filter:function(event,player){
					//game.log(event.card);
					//game.log(event.getParent(2));
					//return event.card&&event.getParent(2).skill=="sst_fuchou3_backup";
					//return event.card&&event.card.hasGaintag("sst_fuchou");
					return event.getParent(2).skill=="sst_fuchou";
				},
				content:function(){
					trigger.num++;
				},
				ai:{
					damageBonus:true,
				},
			},
			sst_fuchou5:{
				trigger:{global:"useCard"},
				forced:true,
				popup:false,
				charlotte:true,
				content:function(){
					trigger.directHit.add(player);
				},
			},
			//Greninja
			sst_huanbian:{
				init:function(player){
					if(!player.storage.sst_huanbian_used) player.storage.sst_huanbian_used=[];
				},
				enable:"chooseToUse",
				filterCard:function(card,player){
					return true;
				},
				position:"he",
				viewAs:function(cards,player){
					if(player.storage.sst_huanbian){
						if(player.storage.sst_huanbian_nature) return {name:player.storage.sst_huanbian,nature:player.storage.sst_huanbian_nature};
						return {name:player.storage.sst_huanbian};
					}
					return null;
				},
				filter:function(event,player){
					if(event.type=="wuxie"||event.type=="respondShan") return false;
					if(player.storage.sst_huanbian&&player.countCards("he")){
						var card=player.storage.sst_huanbian_nature?{name:player.storage.sst_huanbian,nature:player.storage.sst_huanbian_nature}:{name:player.storage.sst_huanbian};
						if(!lib.filter.cardUsable(card,player)) return false;
						return !player.storage.sst_huanbian_used.contains(player.storage.sst_huanbian+player.storage.sst_huanbian_nature);
					}
					return false;
				},
				prompt:function(){
					var player=_status.event.player;
					var str="将一张牌当作";
					if(player.storage.sst_huanbian_nature) str+=get.translation(player.storage.sst_huanbian_nature);
					if(player.storage.sst_huanbian) str+=get.translation(player.storage.sst_huanbian);
					str+="使用"
					return str;
				},
				onuse:function(result,player){
					player.storage.sst_huanbian_used.push(player.storage.sst_huanbian+player.storage.sst_huanbian_nature);
				},
				check:function(card){return 5-get.value(card)},
				intro:{
					mark:function(dialog,content,player){
						if(player.storage.sst_huanbian){
							dialog.addText("使用的上一张基本牌或普通锦囊牌："+get.translation(player.storage.sst_huanbian_nature)+get.translation(player.storage.sst_huanbian));
						}
					},
					content:function(storage,player){
						if(storage){
							return "使用的上一张基本牌或普通锦囊牌："+get.translation(player.storage.sst_huanbian_nature)+get.translation(storage);
						}
					},
				},
				ai:{
					skillTagFilter:function(player){
						if(player.storage.sst_huanbian&&player.countCards("he")){
							if(!lib.filter.cardUsable({name:player.storage.sst_huanbian},player)) return false;
							if(!player.storage.sst_huanbian_used) return true;
							return !player.storage.sst_huanbian_used.contains(player.storage.sst_huanbian);
						}
						return false;
					},
					order:8,
					useful:-1,
					value:-1,
					respondSha:true,
					respondTao:true,
					save:true,
				},
				group:["sst_huanbian2","sst_huanbian3","sst_huanbian_use","sst_huanbian_phase"],
				subSkill:{
					use:{
						trigger:{
							player:"useCard1",
						},
						silent:true,
						firstDo:true,
						filter:function(event,player,name){
							//if(name=="phaseBeginStart") return true;
							var type=get.type(event.card);
							return type=="basic"||type=="trick";
						},
						content:function(){
							//if(event.triggername=="phaseBeginStart") delete player.storage.suijiyingbian;
							player.storage.sst_huanbian=trigger.card.name;
							player.storage.sst_huanbian_nature=trigger.card.nature;
							//player.updateMarks();
							//player.markSkill("sst_huanbian");
						},
						sub:true,
					},
					phase:{
						trigger:{global:"phaseAfter"},
						silent:true,
						content:function(){
							player.storage.sst_huanbian_used=[];
						},
						sub:true,
					},
				},
			},
			sst_huanbian2:{
				prompt:"将一张牌当作闪使用",
				enable:"chooseToUse",
				filter:function(event,player){
					return player.storage.sst_huanbian=="shan"&&!player.storage.sst_huanbian_used.contains("shan")&&player.countCards("he");//&&!_status.dying.length;
				},
				onuse:function(result,player){
					player.storage.sst_huanbian_used.push("shan");
				},
				filterCard:true,
				position:"he",
				selectCard:1,
				viewAs:{name:"shan"},
				ai:{
					skillTagFilter:function(player){
						return player.storage.sst_huanbian=="shan"&&player.countCards("he")&&!player.storage.sst_huanbian_used.contains("shan");
					},
					respondShan:true,
				},
			},
			sst_huanbian3:{
				enable:"chooseToUse",
				filterCard:true,
				selectCard:1,
				position:"he",
				filter:function(event,player){
					if(player.storage.sst_huanbian=="wuxie"&&player.countCards("he")){
						return !player.storage.sst_huanbian_used.contains("wuxie");
					}
					return false;
				},
				viewAs:{name:"wuxie"},
				prompt:"将一张牌当作无懈可击使用",
				onuse:function(result,player){
					player.storage.sst_huanbian_used.push("wuxie");
				},
				ai:{
					skillTagFilter:function(player){
						return player.storage.sst_huanbian=="wuxie"&&player.countCards("he")&&!player.storage.sst_huanbian_used.contains("wuxie");
					},
				},
			},
			sst_yingxi:{
				trigger:{player:"damageBefore"},
				direct:true,
				filter:function(event,player){
					return event.source&&event.source.countDiscardableCards(player,"he");
				},
				content:function(){
					//player.discardPlayerCard(get.prompt("sst_yingxi",trigger.source),trigger.source,get.buttonValue,"he").set("logSkill",["sst_yingxi",trigger.source]);
					player.discardPlayerCard(get.prompt("sst_yingxi",trigger.source),trigger.source,"he").set("logSkill",["sst_yingxi",trigger.source]);
				},
				ai:{
					expose:0.2,
					maixie_defend:true,
					effect:{
						target:function(card,player,target){
							if(player.countCards("he")>1&&get.tag(card,"damage")){
								if(player.hasSkillTag("jueqing",false,target)) return [1,-1.5];
								if(get.attitude(target,player)<0) return [1,1];
							}
						}
					}
				}
			},
			//Kirby
			sst_qushi:{
				trigger:{
					source:"damageEnd",
				},
				filter:function(event,player) {
					return true;
				},
				direct:true,
				content:function(){
					"step 0"
					var list=[];
					var listm=[];
					var listv=[];
					if(trigger.player.name1!=undefined) listm=lib.character[trigger.player.name1][3];
					else listm=lib.character[trigger.player.name][3];
					if(trigger.player.name2!=undefined) listv=lib.character[trigger.player.name2][3];
					listm=listm.concat(listv);
					var func=function(skill){
						var info=get.info(skill);
						if(get.is.locked(skill)||info.charlotte||info.forced||info.zhuanhuanji||info.zhuSkill||info.unique) return false;
						return true;
					};
					for(var i=0;i<listm.length;i++){
						if(func(listm[i])&&!player.hasSkill(listm[i])) list.add(listm[i]);
					}
					if(list.length){
						player.chooseControl(list,"摸一张牌","cancel2").set("prompt",get.prompt("sst_qushi",trigger.player)).set("prompt2",get.translation("sst_qushi_info")).set("ai",function(){
							return list.randomGet();
						});
					}
					else{
						player.logSkill("sst_qushi");
						player.draw();
						event.finish();
					}
					"step 1"
					if(result.control!="cancel2"){
						if(result.control!="摸一张牌"){
							player.logSkill("sst_qushi",trigger.player);
							player.popup(result.control,"thunder");
							game.log(player,"获得了技能","#g【"+get.translation(result.control)+"】");
							player.addAdditionalSkill("sst_qushi",result.control,true);
						}
						else{
							player.logSkill("sst_qushi");
							player.draw();
						}
					}
				},
				group:["sst_qushi_remove"],
				subSkill:{
					remove:{
						unique:true,
						charlotte:true,
						trigger:{
							player:"damageEnd",
						},
						silent:true,
						content:function (){
							player.removeAdditionalSkill("sst_qushi");
						},
						sub:true,
					},
				},
			},
			sst_xinghuo:{
				global:"sst_xinghuo2",
			},
			sst_xinghuo2:{
				skillAnimation:true,
				animationColor:"fire",
				trigger:{
					player:"die",
				},
				filter:function(event,player) {
					return game.hasPlayer(function(current){
						return current!=player&&current.hasSkill("sst_xinghuo");
					});
				},
				direct:true,
				forceDie:true,
				content:function (){
					"step 0"
					event.players=game.filterPlayer(function(current){
						return current!=player&&current.hasSkill("sst_xinghuo");
					});
					event.num=0;
					"step 1"
					if(event.num<event.players.length){
						event.num1=1;
						event.num2=1;
						var controls=["draw_card"];
						if(event.players[event.num].isDamaged()){
							event.num2=Math.min(event.num2,event.players[event.num].maxHp-event.players[event.num].hp);
							controls.push("recover_hp");
						}
						controls.push("cancel2");
						var prompt="星火：";
						if(event.players[event.num].isHealthy()){
							prompt+="你可以令"+get.translation(event.players[event.num])+"摸一张牌";
						}
						else{
							prompt+="你可以令"+get.translation(event.players[event.num])+"摸一张牌或回复一点体力";
						}
						player.chooseControl(controls).set("forceDie",true).set("prompt",get.prompt("sst_xinghuo",event.players[event.num])).set("prompt2",prompt).set("ai",function(){
							var player=_status.event.player;
							var target=_status.event.targetx;
							var num1=_status.event.num1;
							var num2=_status.event.num2;
							if(get.attitude(player,target)<=0) return "cancel2";
							if(target.isDamaged()&&get.recoverEffect(target)>0&&(
								target.hp==1||target.needsToDiscard()||
								target.hasSkillTag("maixie_hp")||num2>num1||
								(num2==num1&&target.needsToDiscard(1))
							)){
								return "recover_hp";
							}
							else{
								return "draw_card";
							}
						}).set("targetx",event.players[event.num]).set("num1",event.num1).set("num2",event.num2);
					}
					else{
						event.finish();
					}
					"step 2"
					if(result.control!="cancel2"){
						event.players[event.num].logSkill("sst_xinghuo");
						player.line(event.players[event.num],"green");
						if(result.control=="draw_card"){
							event.players[event.num].draw(event.num1);
						}
						else{
							event.players[event.num].recover(event.num2);
						}
						event.num++;
						event.goto(1);
					}
				},
			},
			//K. Rool
			sst_badao:{
				trigger:{
					player:"phaseZhunbeiBegin",
				},
				filter:function (event,player){
					return game.hasPlayer(function(current){
						return current!=player&&current.countCards("hej");
					});
				},
				direct:true,
				content:function (){
					"step 0"
					player.chooseTarget(get.prompt2("sst_badao"),function(card,player,target){
						return target!=player&&target.countCards("hej");
					}).set("ai",function(target){
						var player=_status.event.player;
						if(get.attitude(player,target)<0) return (target.countCards("he",function(card){
							return card.name=="tengjia"||get.value(card)>0;
						})>0)?1.5:-1.5;
						var js=target.getCards("j");
						if(js.length){
							var jj=js[0].viewAs?{name:js[0].viewAs}:js[0];
							if(js.length==1&&get.effect(target,jj,target,player)>=0){
								return 1.5;
							}
							return -3;
						}
						return 0;
					});
					"step 1"
					if(result.targets){
						player.logSkill("sst_badao",result.targets);
						player.gainPlayerCard(result.targets[0],"hej",true);
					}
					else{
						event.finish();
					}
					"step 2"
					event.players=game.filterPlayer(function(current){
						return current!=player&&current.inRange(player);
					});
					event.players.sortBySeat();
					player.line(event.players,"green");
					"step 3"
					if(event.players.length){
						event.current=event.players.shift();
						if(player.isAlive()){
							event.current.chooseToUse("是否对"+get.translation(player)+"使用一张基本牌？",player,-1).set("filterCard",function(card){
								return get.type(card)=="basic"&&get.name(card)!="shan"&&lib.filter.targetEnabled2(card,_status.event.player,_status.event.targetx);
							}).set("targetx",player);
							/*
							event.current.chooseToUse("是否对"+get.translation(player)+"使用一张基本牌？").set("targetRequired",true).set("complexSelect",true).set("filterTarget",function(card,player,target){
								if(target!=_status.event.sourcex&&!ui.selected.targets.contains(_status.event.sourcex)) return false;
								return lib.filter.filterTarget.apply(this,arguments);
							}).set("filterCard",function(card){
								return get.type(card)=="basic";
							}).set("sourcex",player);
							*/
						}
						event.redo();
					}
				},
				ai:{
					expose:0.2,
				},
			},
			sst_jinjia:{
				trigger:{
					player:"damageBegin3",
				},
				filter:function (event,player){
					return event.num>0;
				},
				forced:true,
				content:function (){
					"step 0"
					//player.logSkill("sst_jinjia");
					trigger.num--;
					if(player.hasSkill("sst_jinjia_damaged")){
						player.turnOver();
						player.removeSkill(event.name);
						game.log(player,"失去了技能","#g【金甲】");
						event.finish();
					}
					else{
						player.addTempSkill("sst_jinjia_damaged");
					}
					"step 1"
					if(trigger.num>0) event.goto(0);
				},
				ai:{
					maixie_defend:true,
					threaten:0.9,
					effect:{
						target:function(card,player,target){
							if(player.hasSkillTag("jueqing")) return;
							if(target.hujia) return;
							if(player._sst_jinjia_tmp) return;
							if(target.hasSkill("sst_jinjia_ai")) return;
							if(_status.event.getParent("useCard",true)||_status.event.getParent("_wuxie",true)) return;
							if(get.tag(card,"damage")){
								if(target.getHistory("damage").length>0){
									return [1,-2];
								}
								else{
									if(get.attitude(player,target)>0&&target.hp>1){
										return 0;
									}
									if(get.attitude(player,target)<0&&!player.hasSkillTag("damageBonus")){
										if(card.name=="sha") return;
										var sha=false;
										player._sst_jinjia_tmp=true;
										var num=player.countCards("h",function(card){
											if(card.name=="sha"){
												if(sha){
													return false;
												}
												else{
													sha=true;
												}
											}
											return get.tag(card,"damage")&&player.canUse(card,target)&&get.effect(target,card,player,player)>0;
										});
										delete player._sst_jinjia_tmp;
										if(player.hasSkillTag("damage")){
											num++;
										}
										if(num<2){
											var enemies=player.getEnemies();
											if(enemies.length==1&&enemies[0]==target&&player.needsToDiscard()){
												return;
											}
											return 0;
										}
									}
								}
							}
						}
					}
				},
			},
			sst_jinjia_damaged:{},
			sst_jinjia_ai:{},
			//Donkey Kong
			sst_baochui:{
				trigger:{player:"phaseDiscardEnd"},
				init:function(player){
					if(!player.storage.sst_baochui) player.storage.sst_baochui=[];
				},
				filter:function(event,player){
					return event.cards&&event.cards.length&&event.cards.filterInD("d")&&event.cards.filterInD("d").length;
				},
				frequent:true,
				content:function(){
					var cards=trigger.cards.filterInD("d");
					player.lose(cards,ui.special,"toStorage");
					player.$gain2(cards);
					player.storage.sst_baochui=player.storage.sst_baochui.concat(cards);
					player.syncStorage("sst_baochui");
					player.markSkill("sst_baochui");
					game.log(player,"将",cards,"置于武将牌上");
				},
				intro:{
					content:"cards",
					onunmark:function(storage,player){
						if(storage&&storage.length){
							player.$throw(storage,1000);
							game.cardsDiscard(storage);
							game.log(storage,"被置入了弃牌堆");
							storage.length=0;
						}
					},
				},
				ai:{
					threaten:2,
				},
				group:["sst_baochui2","sst_baochui3"],
			},
			sst_baochui2:{
				enable:"chooseToUse",
				prompt:function(){
					if(_status.event.player.storage.sst_baochui.length){
						return "你可以将武将牌上的所有牌视为伤害为"+Math.min(3,_status.event.player.storage.sst_baochui.length)+"的【杀】使用";
					}
				},
				filter:function(event,player){
					if(event.filterCard&&!event.filterCard({name:"sha"},player,event)) return false;
					if(!lib.filter.cardUsable({name:"sha"},player)) return false;
					return player.storage.sst_baochui.length;
				},
				filterTarget:function(card,player,target){
					if(_status.event._backup&&
						typeof _status.event._backup.filterTarget=="function"&&
						!_status.event._backup.filterTarget({name:"sha"},player,target)){
						return false;
					}
					return player.canUse({name:"sha"},target);
				},
				direct:true,
				line:false,
				delay:false,
				content:function(){
					var cards=player.storage.sst_baochui;
					player.storage.sst_baochui_num=cards.length;
					player.useCard({name:"sha"},cards,target,"sst_baochui");
					player.storage.sst_baochui.length=0;
					player.syncStorage("sst_baochui");
					player.updateMarks();
					player.unmarkSkill("sst_baochui");
				},
				ai:{
					respondSha:true,
					skillTagFilter:function(player){
						if(!player.storage.sst_baochui.length) return false;
					},
					result:{
						target:function(player,target){
							var num=0;
							if(player.storage.sst_baochui.length) num=player.storage.sst_baochui.length;
							return get.effect(target,{name:"sha"},player,target)-3+num;
						}
					},
					order:function(){
						return get.order({name:"sha"})+1;
					},
				},
			},
			sst_baochui3:{
				trigger:{player:"useCard1"},
				direct:true,
				forced:true,
				filter:function(event,player){
					return event.skill=="sst_baochui";
				},
				content:function(){
					//trigger.directHit.addArray(game.players);
					if(typeof trigger.baseDamage!="number") trigger.baseDamage=1;
					trigger.baseDamage+=Math.min(3,player.storage.sst_baochui_num)-1;
				},
				ai:{
					damageBonus:true,
				},
			},
			//Richter
			sst_shengxi:{
				global:["sst_shengxi2","sst_shengxi4"],
				onremove:function(player){
					var players=game.filterPlayer();
					var cards=[];
					for(var i=0;i<players.length;i++){
						cards=cards.concat(players[i].getCards("h",function(card){
							return card.hasGaintag("sst_shengxi");
						}));
					}
					if(cards.length) for(var i=0;i<players.length;i++){
						cards[i].removeGaintag("sst_shengxi");
						cards[i].removeGaintag("viewHandcard");
					}
				},
				ai:{
					threaten:1.5,
				},
			},
			sst_shengxi2:{
				direct:true,
				trigger:{player:"useCardToPlayer"},
				filter:function(event,player){
					var cards=event.target.getCards("h",function(card){
						return !card.hasGaintag("sst_shengxi");
					});
					return game.hasPlayer(function(current){
						return current.hasSkill("sst_shengxi")&&(player==current||event.targets.contains(current));
					})&&cards&&cards.length;
				},
				content:function(){
					"step 0"
					player.choosePlayerCard(trigger.target,"h",get.prompt2("sst_shengxi")).set("filterButton",function(button){
						return !button.link.hasGaintag("viewHandcard");
					}).set("targetx",trigger.target).set("ai",function(button){
						if(get.attitude(_status.event.player,_status.event.targetx)<0){
							var val=get.buttonValue(button);
							return val;
						}
						else{
							return 0;
						}
					});
					"step 1"
					if(result.cards&&result.cards.length){
						player.logSkill("sst_shengxi",trigger.target);
						var card=result.cards[0];
						trigger.target.$give(card,trigger.target,false);
						card.addGaintag("viewHandcard");
						card.addGaintag("sst_shengxi");
						game.log(player,"明置了",trigger.target,"的",card);
					}
				},
				ai:{
					expose:0.2,
					effect:{
						player:function(card,player,target){
							if(get.tag(card,"multitarget")) return [1,3];
							if(card&&typeof card.hasGaintag=="function"&&card.hasGaintag("sst_shengxi")) return [1,3];
						},
					},
				},
			},
			sst_shengxi4:{
				enable:"chooseToUse",
				filter:function(event,player){
					var sst_shengxi=[];
					var players=game.filterPlayer();
					players.remove(player);
					for(var i=0;i<players.length;i++){
						sst_shengxi=sst_shengxi.concat(players[i].getCards("h",function(card){
							return card.hasGaintag("sst_shengxi");
						}));
					}
					if(!sst_shengxi||!sst_shengxi.length) return false;
					for(var i=0;i<sst_shengxi.length;i++){
						if(event.filterCard(sst_shengxi[i],player,event)) return true;
					}
					return false;
				},
				chooseButton:{
					dialog:function(event,player){
						var sst_shengxi=[];
						var players=game.filterPlayer();
						players.remove(player);
						for(var i=0;i<players.length;i++){
							sst_shengxi=sst_shengxi.concat(players[i].getCards("h",function(card){
								return card.hasGaintag("sst_shengxi");
							}));
						}
						return ui.create.dialog("圣袭",sst_shengxi,"hidden");
					},
					filter:function(button,player){
						var evt=_status.event.getParent();
						if(evt&&evt.filterCard){
							return evt.filterCard(button.link,player,evt);
						}
						return true;
					},
					check:function(button){
						if(button.link.name=="du") return 10;
						var player=_status.event.player;
						if(player.getUseValue(button.link)>0) return get.order(button.link);
						return -1;
					},
					backup:function(links,player){
						return {
							filterCard:function(){return false;},
							selectCard:-1,
							viewAs:links[0],
							onuse:function(result,player){
								player.logSkill("sst_shengxi");
								var owner=get.owner(result.card);
								owner.lose(result.card,"visible",ui.ordering).set("type","use");
								owner.line(player,"green");
								game.log(player,"使用了",owner,"的",result.card);
							}
						}
					},
					prompt:function(links,player){
						return "选择"+get.translation(links)+"的目标";
					},
				},
				ai:{
					order:function(item,player){
						var event=_status.event;
						if(event.type!="phase") return 4;
						if(!player) return -1;
						var sst_shengxi=[];
						var players=game.filterPlayer();
						players.remove(player);
						for(var i=0;i<players.length;i++){
							sst_shengxi=sst_shengxi.concat(players[i].getCards("h",function(card){
								return card.hasGaintag("sst_shengxi");
							}));
						}
						if(!sst_shengxi||!sst_shengxi.length) return -1;
						var order=0;
						for(var i=0;i<sst_shengxi.length;i++){
							if(player.getUseValue(sst_shengxi[i])>0){
								var order2=get.order(sst_shengxi[i]);
								if(order2>order) order=order2;
							}
						}
						return order+1;
					},
					result:{
						player:function(player){
							if(_status.event.dying) return get.attitude(player,_status.event.dying);
							return 1;
						}
					},
					useful:-1,
					value:-1,
				},
			},
			sst_xuelun:{
				trigger:{player:"die"},
				logTarget:"source",
				forced:true,
				skillAnimation:true,
				animationColor:"fire",
				forceDie:true,
				filter:function(event,player){
					return event.source;
				},
				content:function(){//trigger.source
					var target=trigger.source;
					target.addSkillLog(player.skills);
				},
			},
			//Red
			sst_xiandu:{
				trigger:{global:"phaseUseBegin"},
				direct:true,
				init:function(player){
					if(!player.storage.sst_xiandu) player.storage.sst_xiandu=[];
				},
				/*
				intro:{
					content:"cards",
					onunmark:function(storage,player){
						if(storage&&storage.length){
							player.$throw(storage,1000);
							game.cardsDiscard(storage);
							game.log(storage,"被置入了弃牌堆");
							storage.length=0;
						}
					},
				},
				*/
				intro:{
					name:"先读",
					content:"cardCount",
					onunmark:"throw",
				},
				filter:function(event,player){
					return event.player!=player;
				},
				content:function(){
					"step 0"
					player.chooseCard("h",get.prompt("sst_xiandu",trigger.player),"你可以扣置一张手牌，于"+get.translation(trigger.player)+"本回合第一次使用牌时亮出。若这两张牌的类别：相同，你可以对"+get.translation(trigger.player)+"造成一点伤害或摸两张牌；不同，"+get.translation(trigger.player)+"对你造成一点伤害。出牌阶段结束时，你将此牌置入弃牌堆").set("ai",function(card){
						//var player=_status.event.player;
						var target=_status.event.targetx;
						if(target.countUsed(null,true)>0) return 0;
						var cards=target.getCards("h",function(card){
							return target.hasUseTarget(card);
						});
						if(!cards||!cards.length) return 0;
						var map={};
						for(var i=0;i<cards.length;i++){
							var type=get.type(cards[i],"trick");
							map[type]=true;
						}
						if(map.equip){
							if(get.type(card,"trick")=="equip") return 8-get.useful(card);
							return 0;
						}
						if(map.trick){
							if(get.type(card,"trick")=="trick") return 7-get.useful(card);
							return 0;
						}
						if(map.basic){
							if(get.type(card,"trick")=="basic") return 5-get.useful(card);
							return 0;
						}
						return 0;
					}).set("targetx",trigger.player);
					"step 1"
					if(result.cards&&result.cards.length){
						player.logSkill("sst_xiandu",trigger.player);
						player.lose(result.cards,ui.special,"toStorage");
						player.$giveAuto(result.cards,player,false);
						player.storage.sst_xiandu=player.storage.sst_xiandu.concat(result.cards);
						player.syncStorage("sst_xiandu");
						player.markSkill("sst_xiandu");
						game.log(player,"扣置了一张手牌");
						game.delayx();
					}
				},
				group:["sst_xiandu2","sst_xiandu3"],
			},
			sst_xiandu2:{
				trigger:{global:"useCard"},
				direct:true,
				forced:true,
				filter:function(event,player){
					if(_status.currentPhase!=event.player) return false;
					if(event.player.countUsed(null,true)>1) return false;
					return player.storage.sst_xiandu&&player.storage.sst_xiandu.length;
				},
				content:function(){
					"step 0"
					player.logSkill("sst_xiandu",trigger.player);
					player.showCards(player.storage.sst_xiandu);
					"step 1"
					var card=player.storage.sst_xiandu[0];
					if(get.type(card,"trick")==get.type(trigger.card,"trick")){
						player.chooseControl("对"+get.translation(trigger.player)+"造成一点伤害","摸两张牌","cancel2").set("ai",function(){
							var player=_status.event.player;
							var target=_status.event.targetx;
							if(get.damageEffect(target,player,player)-4>0){
								return "对"+get.translation(target)+"造成一点伤害";
							}
							else{
								return "摸两张牌";
							}
						}).set("targetx",trigger.player);
					}
					else{
						trigger.player.line(player,"green");
						player.damage(trigger.player);
						event.finish();
					}
					"step 2"
					if(result.control=="对"+get.translation(trigger.player)+"造成一点伤害"){
						player.line(trigger.player,"green");
						trigger.player.damage(player);
					}
					else if(result.control=="摸两张牌"){
						player.draw(2);
					}
				},
				ai:{
					damage:true,
				},
			},
			sst_xiandu3:{
				trigger:{global:"phaseUseEnd"},
				forced:true,
				filter:function(event,player){
					return player.storage.sst_xiandu&&player.storage.sst_xiandu.length;
				},
				content:function(){
					player.unmarkSkill("sst_xiandu");
				},
			},
			//Isabelle
			sst_wenxu:{
				trigger:{global:"useCardAfter"},
				logTarget:"player",
				filter:function(event,player){
					return event.player!=player&&_status.currentPhase==event.player&&get.itemtype(event.cards)=="cards"&&get.position(event.cards[0],true)=="o";
				},
				check:function(event,player){
					/*
					if(!player.hasFriend()&&(player.countCards("h","tao")+player.countCards("h","jiu")||player.hp>1)){
					//if(get.attitude(player,event.player)<=0){
						var val=0;
						for(var i=0;i<event.cards.length;i++){
							val+=get.value(event.cards[i]);
						}
						return val>=5;
					}
					*/
					if(get.attitude(player,event.player)>0) return event.player.getCardUsable("sha")<event.player.countCards("h","sha");
					return false;
				},
				content:function(){
					var cards=trigger.cards;
					player.gain(cards,"gain2");
					player.addTempSkill("sst_wenxu_phase");
					trigger.player.addTempSkill("sst_wenxu2");
					trigger.player.addMark("sst_wenxu2",1,false);
				},
				group:["sst_wenxu3"],
				subSkill:{
					phase:{},
				},
			},
			sst_wenxu2:{
				mod:{
					cardUsable:function(card,player,num){
						if(card.name=="sha") return num+player.countMark("sst_wenxu2");
					}
				},
				onremove:true,
			},
			sst_wenxu3:{
				trigger:{global:"phaseJieshuBegin"},
				filter:function(event,player){
					//game.log(event.player.getCardUsable("sha"));
					return player.hasSkill("sst_wenxu_phase")&&event.player.getCardUsable("sha")-event.player.countUsed("sha",true)>0;
				},
				forced:true,
				content:function(){
					trigger.player.line(player,"green");
					player.damage(trigger.player);
				},
			},
			sst_mihu:{
				trigger:{
					player:"useCardToPlayer",
				},
				filter:function(event,player){
					//game.log(event.getParent());
					if(!player.getDamagedHp()) return false;
					//game.log(event.getParent());
					//if(event.getParent().triggeredTargets3.length>1) return false;
					//if(get.type(event.card)!="basic"&&get.type(event.card)!="trick") return false;
					return event.targets.length==1&&!event.getParent().sst_mihu;
				},
				forced:true,
				content:function(){
					"step 0"
					player.judge();
					"step 1"
					var source=trigger.target;
					switch(result.suit){
						case "spade":{
							var target=source.getPrevious();
							while(!lib.filter.targetEnabled2(trigger.card,player,target)){
								target=target.getPrevious();
							}
							//trigger.untrigger();
							trigger.getParent().sst_mihu=true;
							//trigger.getParent().targets.length=0;
							//trigger.getParent().triggeredTargets2.length=0;
							//trigger.getParent().targets.push(source.getPrevious());
							trigger.getParent().targets.remove(source);
							//trigger.getParent().triggeredTargets2.remove(source);
							trigger.getParent().targets.push(target);
							source.line(target,"green");
							//trigger.getParent().triggeredTargets2.push(source.getPrevious());
							break;
						}
						case "club":{
							var target=source.getNext();
							while(!lib.filter.targetEnabled2(trigger.card,player,target)){
								target=target.getNext();
							}
							//trigger.untrigger();
							trigger.getParent().sst_mihu=true;
							//trigger.getParent().targets.length=0;
							//trigger.getParent().triggeredTargets2.length=0;
							//trigger.getParent().targets.push(source.getNext());
							trigger.getParent().targets.remove(source);
							//trigger.getParent().triggeredTargets2.remove(source);
							trigger.getParent().targets.push(target);
							source.line(target,"green");
							//trigger.getParent().triggeredTargets2.push(source.getNext());
							break;
						}
					}
				},
			},
			//Chrom
			sst_niming:{
				trigger:{global:"judge"},
				check:function(event,player){
					var result=event.judge(event.player.judging[0]);
					var attitude=get.attitude(player,event.player);
					if(attitude==0||result==0) return false;
					if(attitude>0){
						return result<0;
					}
					else{
						return result>0;
					}
				},
				content:function(){
					"step 0"
					var card=get.cards()[0];
					event.card=card;
					game.cardsGotoOrdering(card).relatedEvent=trigger;
					"step 1"
					player.$throw(card);
					card.clone.classList.add("thrownhighlight");
					if(trigger.player.judging[0].clone){
						trigger.player.judging[0].clone.classList.remove("thrownhighlight");
						game.addVideo("deletenode",player,get.cardsInfo([trigger.player.judging[0].clone]));
					}
					game.cardsDiscard(trigger.player.judging[0]);
					trigger.player.judging[0]=card;
					game.log(trigger.player,"的判定牌改为",card);
					game.delay(2);
				},
				ai:{
					rejudge:true,
					tag:{
						rejudge:1,
					},
				},
			},
			sst_cuifeng:{
				trigger:{
					player:"phaseZhunbeiBegin",
				},
				filter:function(event,player){
					return true;
				},
				//frequent:true,
				check:function(event,player){
					return game.hasPlayer(function(current){
						return player.canUse({name:"sha"},current)&&get.effect(current,{name:"sha"},player,player);
					});
				},
				content:function(){
					"step 0"
					player.judge(function(card){
						var color=get.color(card);
						switch(color){
							case "black":return -1;
							case "red":return 1;
							default:return 0;
						}
					});
					"step 1"
					player.chooseUseTarget({name:"sha"},[result.card],false).set("viewAs",true);
				},
				group:["sst_cuifeng2"],
			},
			sst_cuifeng2:{
				trigger:{player:"useCard1"},
				forced:true,
				filter:function(event,player){
					return event.getParent(2).name=="sst_cuifeng";
				},
				content:function(){
					if(get.color(trigger.card)=="black"){
						player.loseHp();
						if(typeof trigger.baseDamage!="number") trigger.baseDamage=1;
						trigger.baseDamage++;
					}
					else if(get.color(trigger.card)=="red"){
						player.recover();
					}
				},
				ai:{
					damageBonus:true,
				},
			},
			/*
			sst_renqing:{
				trigger:{global:"phaseJudgeAfter"},
				filter:function(event,player){
					return event.player==player||(player.storage.sst_manchan2&&player.storage.sst_manchan2.length&&player.storage.sst_manchan2.contains(event.player));
				},
				direct:true,
				content:function(){
					"step 0"
					if(trigger.player!=player) player.storage.sst_manchan2.remove(trigger.player);
					var list=["draw","use","discard"];
					if(trigger.player.getHistory("skipped").contains("phaseDraw")) list.remove("draw");
					if(trigger.player.getHistory("skipped").contains("phaseUse")) list.remove("use");
					if(trigger.player.getHistory("skipped").contains("phaseDiscard")) list.remove("discard");
					if(!list.length){
						event.finish();
					}
					else{
						var list2=[];
						for(var i=0;i<list.length;i++){
							list2.push(game.createCard("sst_phase_"+list[i]+"_card","",""))
						}
						player.chooseButton(["###是否发动【任情】？###你可以声明并修改本回合摸牌阶段、出牌阶段、弃牌阶段的执行顺序（先选择的在前）",list2],list2.length);
					}
					"step 1"
					player.logSkill("sst_renqing",trigger.player);
					player.addTempSkill("sst_renqing_used");
					player.storage.sst_renqing={
						playerx:trigger.player,
						phaseDraw:false,
						phaseUse:false,
						phaseDiscard:false,
					};
					//player.storage.sst_renqing["playerx"]=trigger.player;
					player.$throw(result.links);
					var order="";
					for(var i=0;i<result.links.length;i++){
						switch(get.name(result.links[i])){
							case "sst_phase_draw_card":{
								trigger.player.phaseDraw();
								player.storage.sst_renqing["phaseDraw"]=true;
								order+="摸牌阶段";
								break;
							}
							case "sst_phase_use_card":{
								trigger.player.phaseUse();
								player.storage.sst_renqing["phaseUse"]=true;
								order+="出牌阶段";
								break;
							}
							case "sst_phase_discard_card":{
								trigger.player.phaseDiscard();
								player.storage.sst_renqing["phaseDiscard"]=true;
								order+="弃牌阶段";
								break;
							}
						}
						if(i<result.links.length-1) order+="、";
					}
					game.log(player,"将顺序修改为",order);
				},
				ai:{
					expose:0.2,
				},
				group:["sst_renqing_skip"],
				subSkill:{
					skip:{
						trigger:{
							global:["phaseDrawBefore","phaseUseBefore","phaseDiscardBefore"],
						},
						filter:function(event,player){
							return player.hasSkill("sst_renqing_used");
						},
						silent:true,
						content:function(){
							if(player.storage.sst_renqing["playerx"]==trigger.player&&player.storage.sst_renqing[trigger.name]){
								player.storage.sst_renqing[trigger.name]=false;
							}
							else{
								trigger.cancel();
							}
						},
						sub:true,
					},
					used:{
						sub:true,
					},
				},
			},
			*/
			//Daisy
			sst_renqing:{
				derivation:"sst_renqing_detail",
				init:function(player){
					
				},
				trigger:{
					global:["phaseDrawBefore","phaseUseBefore","phaseDiscardBefore"],
				},
				filter:function(event,player){
					if(event.getParent().name=="sst_renqing") return false;
					return event.player==player||(player.storage.sst_manchan2&&player.storage.sst_manchan2.contains(event.player));
				},
				direct:true,
				content:function(){
					"step 0"
					if(trigger.player!=player) player.storage.sst_manchan2.remove(trigger.player);
					var func=function(name){
						switch(name){
							case "phaseDraw":{
								return "摸牌阶段";
							}
							case "phaseUse":{
								return "出牌阶段";
							}
							case "phaseDiscard":{
								return "弃牌阶段";
							}
							default:{
								return "";
							}
						}
					};
					var list=["摸牌阶段","出牌阶段","弃牌阶段"];
					list.remove(func(trigger.name));
					list.push("cancel2");
					var prompt="你可以跳过";
					prompt+=func(trigger.name);
					prompt+="，改为从",
					prompt+=get.translation(list);
					prompt+="选择一个执行。若如此做，本回合结束阶段，若本回合没有执行过弃牌阶段，你失去一点体力",
					player.chooseControl(list).set("prompt",get.prompt("sst_renqing",trigger.player)).set("prompt2",prompt).set("ai",function(){
						var player=_status.event.player;
						var target=_status.event.targetx;
						var now=_status.event.now;
						var att=get.attitude(player,target);
						if(att<0){
							return "弃牌阶段";
						}
						else if(att>0){
							switch(now){
								case "摸牌阶段":{
									if(target.needsToDiscard()<=2) return "cancel2";
									return "弃牌阶段";
								}
								case "出牌阶段":{
									if(player.hasSkill("sst_renqing_discard")) return "摸牌阶段";
									return "cancel2";
								}
								case "弃牌阶段":{
									if(player.hasSkill("sst_renqing_discard")) return "出牌阶段";
									return "cancel2";
								}
							}
						}
						return "cancel2";
					}).set("targetx",trigger.player).set("now",func(trigger.name));
					"step 1"
					var func=function(name){
						switch(name){
							case "phaseDraw":{
								return "摸牌阶段";
							}
							case "phaseUse":{
								return "出牌阶段";
							}
							case "phaseDiscard":{
								return "弃牌阶段";
							}
							default:{
								return "";
							}
						}
					};
					var func2=function(name){
						switch(name){
							case "phaseDraw":{
								return "摸牌";
							}
							case "phaseUse":{
								return "出牌";
							}
							case "phaseDiscard":{
								return "弃牌";
							}
							default:{
								return "";
							}
						}
					};
					if(result.control!="cancel2"){
						player.logSkill("sst_renqing",trigger.player);
						trigger.cancel();
						player.addTempSkill("sst_renqing_phase");
						switch(result.control){
							case "摸牌阶段":{
								game.log(player,"将此","#y"+func(trigger.name),"改为","#y摸牌阶段");
								player.popup(func2(trigger.name)+"→摸牌");
								trigger.player.phaseDraw();
								break;
							}
							case "出牌阶段":{
								game.log(player,"将此","#y"+func(trigger.name),"改为","#y出牌阶段");
								player.popup(func2(trigger.name)+"→出牌");
								trigger.player.phaseUse();
								var stat=trigger.player.getStat();
								stat.card={};
								for(var i in stat.skill){
									var bool=false;
									var info=lib.skill[i];
									if(info.enable!=undefined){
										if(typeof info.enable=="string"&&info.enable=="phaseUse") bool=true;
										else if(typeof info.enable=="object"&&info.enable.contains("phaseUse")) bool=true;
									}
									if(bool) stat.skill[i]=0;
								}
								break;
							}
							case "弃牌阶段":{
								game.log(player,"将此","#y"+func(trigger.name),"改为","#y弃牌阶段");
								player.popup(func2(trigger.name)+"→弃牌");
								trigger.player.phaseDiscard();
								break;
							}
						}
					}
				},
				ai:{
					expose:0.2,
				},
				group:["sst_renqing2","sst_renqing_count"],
				subSkill:{
					count:{
						trigger:{
							global:"phaseDiscardBegin",
						},
						filter:function(event,player){
							return true;
						},
						silent:true,
						content:function(){
							player.addTempSkill("sst_renqing_discard");
						},
					},
					phase:{
						sub:true,
					},
					discard:{
						sub:true,
					},
				},
			},
			sst_renqing2:{
				trigger:{
					global:"phaseEnd",
				},
				filter:function(event,player) {
					return player.hasSkill("sst_renqing_phase")&&!player.hasSkill("sst_renqing_discard");
				},
				forced:true,
				content:function(){
					player.loseHp();
				},
			},
			sst_manchan:{
				trigger:{
					player:"damageEnd",
				},
				filter:function (event,player){ 
					if(player.storage.sst_manchan&&player.storage.sst_manchan.length){
						if(player.storage.sst_manchan.contains(event.source)) return false;
					}
					return event.source&&event.source!=player; 
				},
				direct:true,
				content:function(){
					"step 0"
					player.chooseToDiscard("###"+get.prompt("sst_manchan",trigger.source)+"###你可以弃置"+get.cnNumber(Math.floor(player.countCards("h")/2))+"张手牌，然后你可以于"+get.translation(trigger.source)+"的下个回合内发动〖任情〗",Math.floor(player.countCards("h")/2)).set("ai",function(card){
						return 5-get.value(card);
					});
					"step 1"
					if(result.bool){
						player.logSkill("sst_manchan",trigger.source);
						if(!player.storage.sst_manchan) player.storage.sst_manchan=[];
						player.storage.sst_manchan.push(trigger.source);
					}
				},
				ai:{
					threaten:0.8,
					maixie_defend:true,
					combo:"sst_renqing",
				},
				group:["sst_manchan_phase"],
				subSkill:{
					phase:{
						trigger:{
							global:"phaseBegin",
						},
						filter:function (event,player){ 
							return player.storage.sst_manchan&&player.storage.sst_manchan.length&&player.storage.sst_manchan.contains(event.player); 
						},
						silent:true,
						content:function(){
							if(!player.storage.sst_manchan2) player.storage.sst_manchan2=[];
							player.storage.sst_manchan.remove(trigger.player);
							player.storage.sst_manchan2.push(trigger.player);
						},
					},
				},
			},
			//Meta Knight
			sst_canyun:{
				init:function(player){
					if(!player.storage.sst_canyun){
						player.storage.sst_canyun=[];
					}
				},
				global:"sst_canyun2",
				enable:"phaseUse",
				filterCard:function(card,player){
					if(player.storage.sst_canyun.contains(get.suit(card))){
						return false;
					}
					return true;
				},
				subSkill:{
					clear:{
						trigger:{global:"phaseAfter"},
						silent:true,
						content:function(){
							player.storage.sst_canyun=[];
						},
					},
				},
				group:"sst_canyun_clear",
				check:function(card){
					var num=_status.event.player.getStat("skill").sst_canyun||0;
					return 6+num-get.value(card);
				},
				position:"he",
				content:function(){
					"step 0"
					player.storage.sst_canyun.push(get.suit(cards[0]));/*
					var evt=_status.event.getParent("phase");
					if(evt&&evt.name=="phase"&&!evt.sst_canyun){
						var next=game.createEvent("sst_canyun_clear");
						_status.event.next.remove(next);
						evt.after.push(next);
						evt.sst_canyun=true;
						next.player=player;
						next.setContent(lib.skill.sst_canyun_clear.content);
					}*/
					//player.syncStorage();
					var players=game.filterPlayer();
					player.line(players,"green");
					/*
					for(var i=0;i<players.length;i++){
						if(!players[i].hasSkill("sst_canyun2")){
							players[i].addTempSkill("sst_canyun2");
						}
						players[i].markSkillCharacter("sst_canyun2",player,"残云","本回合不能使用或打出"+get.translation(player.storage.sst_canyun)+"牌");
					}
					*/
					game.delayx();
					"step 1"
					player.chooseUseTarget(true,{name:"juedou",isCard:true},false);
					/*
					player.chooseTarget(true,function(card,player,target){
						return player.canUse({name:"juedou"},target)
					},"请选择一名角色，视为对其使用【决斗】").set("ai",function(target){
						return get.effect(target,{name:"juedou"},_status.event.player,_status.event.player);
					});
					"step 2"
					if(result.targets){
						player.useCard({name:"juedou",isCard:true},result.targets[0]);
					}
					*/
				},
				ai:{
					order:5,
					threaten:1.5,
					result:{
						player:function(player){
							/*
							var effect=get.effect(target,{name:"juedou"},player,player);
							return get.sgn(effect);
							*/
							var num=player.getStat("skill").sst_canyun||0;
							var players=game.filterPlayer(function(current){
								return player.canUse("juedou",current);
							});
							var eff=0;
							for(var i=0;i<players.length;i++){
								eff=Math.max(eff,get.effect(players[i],{name:"juedou"},player,player));
							}
							return get.sgn(eff)-num/2;
						},
					},
				},
			},
			sst_canyun2:{
				mod:{
					cardSavable:function(card,player){
						var players=game.filterPlayer(function(current){
							return current.hasSkill("sst_canyun");
						});
						var suits=[];
						for(var i=0;i<players.length;i++){
							if(players[i].storage.sst_canyun&&players[i].storage.sst_canyun.length) suits=suits.concat(players[i].storage.sst_canyun);
						}
						if(suits.contains(get.suit(card))) return false;
					},
					cardEnabled:function(card,player){
						var players=game.filterPlayer(function(current){
							return current.hasSkill("sst_canyun");
						});
						var suits=[];
						for(var i=0;i<players.length;i++){
							if(players[i].storage.sst_canyun&&players[i].storage.sst_canyun.length) suits=suits.concat(players[i].storage.sst_canyun);
						}
						if(suits.contains(get.suit(card))) return false;
					},
					cardRespondable:function(card,player){
						var players=game.filterPlayer(function(current){
							return current.hasSkill("sst_canyun");
						});
						var suits=[];
						for(var i=0;i<players.length;i++){
							if(players[i].storage.sst_canyun&&players[i].storage.sst_canyun.length) suits=suits.concat(players[i].storage.sst_canyun);
						}
						if(suits.contains(get.suit(card))) return false;
					},
				},
			},
			//Little Mac
			sst_douhun:{
				trigger:{player:"phaseZhunbeiBegin"},
				forced:true,
				filter:function(event,player){
					return true;
				},
				content:function(){
					"step 0"
					player.addTempSkill("sst_douhun_from");
					"step 1"
					var players=game.filterPlayer();
					players.remove(player);
					players.sortBySeat();
					event.players=players;
					event.num=0;
					player.line(event.players,"green");
					"step 2"
					if(event.num<event.players.length){
						if(event.players[event.num].isAlive()){
							//game.log("yes");
							event.players[event.num].chooseToUse("斗魂：对"+get.translation(player)+"使用一张【杀】，若如此做，你计算与"+get.translation(player)+"距离为1直到"+get.translation(player)+"的下个准备阶段，否则本回合你不能响应"+get.translation(player)+"使用的牌",player,-1).set("filterCard",function(card){
								return get.name(card)=="sha"&&_status.event.player.canUse(card,_status.event.targetx,false);
							}).set("targetx",player);
							/*
							event.players[event.num].chooseToUse({name:"sha"},"斗魂：对"+get.translation(player)+"使用一张【杀】，若如此做，你计算与"+get.translation(player)+"距离为1直到"+get.translation(player)+"的下个准备阶段，否则本回合你不能响应"+get.translation(player)+"使用的牌").set("targetRequired",true).set("complexSelect",true).set("filterTarget",function(card,player,target){
								if(target!=_status.event.sourcex&&!ui.selected.targets.contains(_status.event.sourcex)) return false;
								return lib.filter.filterTarget.apply(this,arguments);
							}).set("sourcex",player);
							*/
						}
						else{
							event.num++;
							event.redo();
						}
					}
					else{
						event.finish();
					}
					"step 3"
					if(result.bool){
						if(!player.storage.sst_douhun) player.storage.sst_douhun=[];
						player.storage.sst_douhun.push(event.players[event.num]);
					}
					else{
						event.players[event.num].addTempSkill("sst_douhun_to");
					}
					event.num++;
					event.goto(2);
				},
				group:["sst_douhun2","sst_douhun3","sst_douhun_clear"],
				subSkill:{
					from:{
						sub:true,
					},
					to:{
						sub:true,
					},
					clear:{
						trigger:{player:"phaseZhunbeiBegin"},
						silent:true,
						content:function(){
							player.storage.sst_douhun=[];
						},
					},
				},
			},
			sst_douhun2:{
				mod:{
					globalFrom:function(from,to){
						if(from.hasSkill("sst_douhun_from")) return -Infinity;
					},
					globalTo:function(from,to){
						if(to.storage.sst_douhun&&to.storage.sst_douhun.length&&to.storage.sst_douhun.contains(from)) return -Infinity;
					},
				},
			},
			sst_douhun3:{
				trigger:{player:"useCard"},
				forced:true,
				popup:false,
				charlotte:true,
				filter:function(event,player){
					return game.hasPlayer(function(current){
						return event.targets.contains(current)&&current.hasSkill("sst_douhun_to");
					});
				},
				content:function(){
					var players=game.filterPlayer(function(current){
						return current.hasSkill("sst_douhun_to");
					});
					trigger.directHit.addArray(players);
				},
				ai:{
					directHit_ai:true,
					skillTagFilter:function(player,tag,arg){
						return arg.target.hasSkill("sst_douhun_to");
					},
				},
			},
			sst_juejing:{
				mod:{
					aiValue:function(player,card,num){
						if(card.name=="zhuge") return 15;
					},
				},
				trigger:{player:["gainEnd","loseEnd"]},
				forced:true,
				filter:function(event,player){
					return player.countCards("h")!=4;
				},
				content:function(){
					if(player.countCards("h")<4){
						player.draw(4-player.countCards("h"),"nodelay");
					}
					else{
						player.chooseToDiscard("绝境：弃置"+get.cnNumber(player.countCards("h")-4)+"张牌",player.countCards("h")-4,true);
					}
				},
				ai:{
					noh:1,
				},
			},
			//Lucina
			sst_suxing:{
				trigger:{global:"roundStart"},
				forced:true,
				filter:function(event,player){
					//game.log(_status.roundStart);
					//game.log(event.player.dataset.position);
					//game.log(event.player.next.dataset.position);
					return player.storage.sst_suxing;
					//return player.storage.sst_suxing;
				},
				content:function(){
					player.storage.sst_suxing=false;
					player.storage.sst_suxing_used=true;
					player.phase("sst_suxing");
				},
				group:["sst_suxing_lose"],
				subSkill:{
					lose:{
						trigger:{global:"loseAfter"},
						filter:function(event,player){
							if(event.player.countCards("h")) return false;
							//if(event.getParent("phase").player==player&&event.getParent("phase").skill) return false;
							return event.hs&&event.hs.length>0;
						},
						silent:true,
						content:function(){
							player.storage.sst_suxing=true;
						},
						sub:true,
					},
				},
				ai:{
					effect:{
						player:function(card,player){
							return [1,Math.max(0,player.hp-player.countCards("h"))];
						},
					},
				},
			},
			sst_shengyi:{
				skillAnimation:true,
				animationColor:"water",
				juexingji:true,
				unique:true,
				derivation:["sst_hanmang","sst_cuifeng"],
				trigger:{player:"phaseJieshuBegin"},
				filter:function(event,player){
					return player.storage.sst_suxing_used&&!player.storage.sst_shengyi;
				},
				forced:true,
				//priority:3,
				content:function(){
					player.loseMaxHp();
					player.addSkillLog("sst_hanmang");
					player.addSkillLog("sst_cuifeng");
					player.awakenSkill("sst_shengyi");
					player.storage.sst_shengyi=true;
				},
			},
			//OC
			sst_baling:{
				trigger:{
					global:"phaseZhunbeiBegin",
				},
				filter:function(event,player){
					return player.inRange(event.player);
				},
				direct:true,
				content:function(){
					"step 0"
					player.chooseBool(get.prompt("sst_baling",trigger.player),"你可以令"+get.translation(trigger.player)+"选择一项：1. 受到你造成的一点伤害，然后"+get.translation(trigger.player)+"本回合下次造成的伤害+1；2. 你获得"+get.translation(trigger.player)+"一张牌").set("ai",function(){
						return get.attitude(_status.event.player,_status.event.targetx)<0;
					}).set("targetx",trigger.player);
					"step 1"
					if(result.bool){
						player.logSkill("sst_baling",trigger.player);
						if(!trigger.player.countCards("he")){
							event.directcontrol=true;
						}
						else{
							var list=["1. 受到"+get.translation(player)+"造成的一点伤害，然后你本回合下次造成的伤害+1","2. "+get.translation(player)+"获得你一张牌"];
							trigger.player.chooseControl().set("choiceList",list).set("ai",function(){
								var source=_status.event.sourcex;
								var player=_status.event.player;
								var cards=player.getCards("he");
								var val=0;
								for(var i=0;i<cards.length;i++){
									val+=get.value(cards[i]);
								}
								val=val/cards.length;
								//game.log(val);
								//game.log(get.damageEffect(player,source,player));
								return get.damageEffect(player,source,player)+val*2>0?0:1;
							}).set("sourcex",player);
						}
					}
					else{
						event.finish();
					}
					"step 2"
					if(event.directcontrol||result.index==0){
						trigger.player.damage(player);
						if(!trigger.player.storage.sst_baling) trigger.player.storage.sst_baling=0;
						trigger.player.storage.sst_baling++;
						trigger.player.addTempSkill("sst_baling2");
						trigger.player.markSkillCharacter("sst_baling2",player,"霸凌","本回合下次造成的伤害+"+trigger.player.storage.sst_baling);
					}
					else{
						player.gainPlayerCard(trigger.player,"he",true);
					}
				},
				ai:{
					damage:true,
					expose:0.2,
				},
			},
			sst_baling2:{
				trigger:{source:"damageBegin"},
				forced:true,
				onremove:function(player){
					player.unmarkSkill("sst_baling2");
					delete player.storage.sst_baling;
				},
				content:function(){
					trigger.num+=player.storage.sst_baling;
					player.removeSkill("sst_baling2");
				},
				ai:{
					damageBonus:true,
				},
			},
			//Mr. 8
			sst_yingzi:{
				trigger:{player:"phaseDrawBegin2"},
				forced:true,
				filter:function(event,player){
					return !event.numFixed;
				},
				content:function(){
					trigger.num++;
				},
				ai:{
					threaten:1.5
				},
				mod:{
					maxHandcardBase:function(player,num){
						return player.maxHp;
					},
				},
			},
			sst_geliao:{
				derivation:["sst_xiangle"],
				trigger:{player:"phaseUseBefore"},
				filter:function(event,player){
					return true;
				},
				direct:true,
				content:function(){
					"step 0"
					player.chooseTarget(get.prompt2("sst_geliao"),function(card,player,target){
						return player!=target;
					}).set("ai",function(target){
						var player=_status.event.player;
						var att=get.attitude(player,target);
						att+=(player.countCards("h")-6);
						if(att>0&&target.hasSkill("xiangle")) att-=2;
						return att;
					});
					"step 1"
					if(result.targets&&result.targets.length){
						event.target=result.targets[0];
						player.logSkill("sst_geliao",event.target);
						player.chooseCard([1,Infinity],"鸽了：你可以交给"+get.translation(event.target)+"任意张手牌").set("ai",function(card){
							var player=_status.event.player;
							var target=_status.event.targetx;
							if(get.attitude(player,target)>0){
								if(player.needsToDiscard()) return 11-get.useful(card);
								return 5-get.useful(card);
							}
							return 0;
						}).set("targetx",event.target);
					}
					else{
						event.finish();
					}
					"step 2"
					trigger.cancel();
					if(result.cards&&result.cards.length) player.give(result.cards,event.target);
					player.addAdditionalSkill("sst_geliao",["sst_xiangle"]);
					game.log(player,"获得了技能","#g【享乐】");
					event.target.addAdditionalSkill("sst_geliao",["sst_xiangle"]);
					game.log(event.target,"获得了技能","#g【享乐】");
				},
				group:["sst_geliao2"],
				ai:{
					expose:0.2,
				},
			},
			sst_geliao2:{
				trigger:{player:["phaseBegin","dieBegin"]},
				silent:true,
				content:function(){
					for(var i=0;i<game.players.length;i++){
						if(game.players[i].hasSkill("sst_xiangle")) game.log(game.players[i],"失去了技能","#g【享乐】");
						game.players[i].removeAdditionalSkill("sst_geliao");
					}
				},
			},
			sst_xiangle:{
				trigger:{target:"useCardToTargeted"},
				forced:true,
				filter:function(event,player){
					return event.card.name=="sha";
				},
				content:function(){
					"step 0"
					var eff=get.effect(player,trigger.card,trigger.player,trigger.player);
					trigger.player.chooseToDiscard("享乐：弃置一张基本牌，否则杀对"+get.translation(player)+"无效",function(card){
						return get.type(card)=="basic";
					}).set("ai",function(card){
						if(_status.event.eff>0){
							return 10-get.value(card);
						}
						return 0;
					}).set("eff",eff);
					"step 1"
					if(result.bool==false){
						trigger.getParent().excluded.add(player);
					}
				},
				ai:{
					effect:{
						target:function(card,player,target){
							if(card.name=="sha"&&get.attitude(player,target)<0){
								if(_status.event.name=="sst_xiangle") return;
								var bs=player.getCards("h",{type:"basic"});
								if(bs.length<2) return 0;
								if(player.hasSkill("jiu")||player.hasSkill("tianxianjiu")) return;
								if(bs.length<=3&&player.countCards("h","sha")<=1){
									for(var i=0;i<bs.length;i++){
										if(bs[i].name!="sha"&&get.value(bs[i])<7){
											return [1,0,1,-0.5];
										}
									}
									return 0;
								}
								return [1,0,1,-0.5];
							}
						},
					},
				},
			},
			//Dark Link
			sst_jingyue:{
				init:function(player){
					if(!player.storage.sst_jingyue) player.storage.sst_jingyue=[];
				},
				intro:{
					content:"cards",
					onunmark:function(storage,player){
						if(storage&&storage.length){
							player.$throw(storage,1000);
							game.cardsDiscard(storage);
							game.log(storage,"被置入了弃牌堆");
							storage.length=0;
						}
					},
				},
				trigger:{global:"phaseZhunbeiBegin"},
				filter:function(event,player){
					return event.player!=player;
				},
				logTarget:"player",
				content:function(){
					player.loseHp();
					player.storage.sst_jingyue_target=trigger.player;
					//player.addTempSkill("sst_jingyue2");
					//player.addTempSkill("sst_jingyue3");
				},
				check:function(event,player){
					return player.hp>2&&event.player.countCards("h")>=4;
				},
				group:["sst_jingyue2","sst_jingyue3","sst_jingyue_clear"],
				subSkill:{
					clear:{
						trigger:{global:"phaseAfter"},
						silent:true,
						content:function(){
							delete player.storage.sst_jingyue_target;
						},
					},
				},
			},
			sst_jingyue2:{
				trigger:{global:"useCardAfter"},
				filter:function(event,player){
					/*
					if(event.player!=player.storage.sst_jingyue_target) return false;
					if(event.type!="use"||event.getParent().player!=player.storage.sst_jingyue_target) return false;
					for(var i=0;i<event.hs.length;i++){
						if(get.position(event.hs[i],true)=="d"){
							return true;
						}
					}
					return false;
					*/
					return (event.player.isPhaseUsing()&&event.player==player.storage.sst_jingyue_target&&get.itemtype(event.cards)=="cards"&&get.position(event.cards[0],true)=="o");
				},
				forced:true,
				//logTarget:"player",
				content:function(){
					//player.logSkill("sst_jingyue2");
					var cards=trigger.cards;
					/*
					for(var i=0;i<trigger.hs.length;i++){
						if(get.position(trigger.hs[i],true)=="o"){
							cards.push(trigger.hs[i]);
						}
					}
					*/
					//player.lose(cards,ui.special,"toStorage");
					game.cardsGotoSpecial(cards);
					player.$gain2(cards);
					player.storage.sst_jingyue=player.storage.sst_jingyue.concat(cards);
					player.syncStorage("sst_jingyue");
					player.markSkill("sst_jingyue");
					game.log(player,"将",cards,"置于武将牌上");
				},
			},
			sst_jingyue3:{
				trigger:{global:"phaseJieshuBegin"},
				filter:function(event,player){
					return event.player==player.storage.sst_jingyue_target&&player.storage.sst_jingyue.length;
				},
				forced:true,
				content:function(){
					"step 0"
					//player.logSkill("sst_jingyue3");
					player.chooseBool("镜月：以"+get.translation(trigger.player)+"为唯一目标依次使用"+get.translation(player.storage.sst_jingyue)+"（目标不合法则弃置），否则获得"+get.translation(player.storage.sst_jingyue)).set("ai",function(){return false;});
					"step 1"
					if(!result.bool){
						player.gain(player.storage.sst_jingyue,"gain2","fromStorage");
						player.storage.sst_jingyue.length=0;
						player.syncStorage("sst_jingyue");
						player.unmarkSkill("sst_jingyue");
						event.finish();
					}
					"step 2"
					var card=player.storage.sst_jingyue.shift();
					var target=trigger.player;
					var info=get.info(card);
					if(player.canUse(card,target,false)){
						player.useCard(card,target,false);
					}
					else{
						game.cardsDiscard(card);
						player.$throw(card);
						game.delayx();
					}
					player.syncStorage("sst_jingyue");
					if(player.storage.sst_jingyue.length){
						event.redo();
					}
					else{
						player.unmarkSkill("sst_jingyue");
					}
				},
			},
			/*
			_distance_kyuukou:{
				trigger:{global:"gameStart"},
			},
			*/
			//Kyuukou
			sst_jianxiang:{
				trigger:{player:"phaseJieshuAfter"},
				forced:true,
				content:function(){
					if(!player.storage.sst_jianxiang) player.storage.sst_jianxiang=0;
					player.storage.sst_jianxiang-=2;
				},
				mod:{
					globalFrom:function(from,to,distance){
						if(typeof from.storage.sst_jianxiang=="number"){
							return distance+from.storage.sst_jianxiang;
						}
					},
				},
			},
			sst_baochao:{
				trigger:{global:"useCard"},
				locked:false,
				filter:function(event,player){
					return ["sha","tao"].contains(get.name(event.card));
				},
				logTarget:"player",
				check:function(event,player){
					var targets=event.targets;
					var card=event.card;
					var source=event.player;
					var doubledamaged=false;
					var eff=0;
					for(var i=0;i<targets.length;i++){
						if(targets[i].maxHp-targets[i].hp>=2) doubledamaged=true;
						eff+=get.effect(targets[i],card,source,player);
					}
					if(!doubledamaged&&get.name(card)=="tao") return false;
					eff=eff/targets.length;
					return eff>0;
				},
				content:function(){
					if(!player.storage.sst_baochao) player.storage.sst_baochao=0;
					player.storage.sst_baochao++;
					if(typeof trigger.baseDamage!="number") trigger.baseDamage=1;
					trigger.baseDamage++;
				},
				mod:{
					globalFrom:function(from,to,distance){
						if(typeof from.storage.sst_baochao=="number"){
							return distance+from.storage.sst_baochao;
						}
					},
				},
				ai:{
					expose:0.2,
				},
			},
			//Windier
			sst_chixing:{
				/*
				locked:false,
				mod:{
					aiOrder:function(player,card,num){
						if(typeof card=="object"&&player==_status.currentPhase){
							var evt=player.getLastUsed();
							if(evt&&evt.card&&get.color(evt.card)!="none"&&get.color(card)!="none"&&get.color(evt.card)!=get.color(card)){
								return num+10;
							}
							if(get.color(card)!="red"){
								return num+2;
							}
						}
					},
				},
				*/
				init:function(player){
					if(!player.storage.sst_chixing) player.storage.sst_chixing=1;
				},
				trigger:{player:"phaseAfter"},
				filter:function(event,player){
					var evt=player.getLastUsed();
					if(!evt) return false;
					var color=get.color(evt.card);
					return color=="red";
				},
				direct:true,
				content:function(){
					"step 0"
					//if(!player.storage.sst_chixing) player.storage.sst_chixing=1;
					player.chooseTarget(get.prompt("sst_chixing"),"你可以令至多"+get.cnNumber(player.storage.sst_chixing)+"名角色将手牌数调整到与你另外指定的一名角色相等",[1,player.storage.sst_chixing]).set("ai",function(target){
						var player=_status.event.player;
						var fin=0;
						var sources=game.filterPlayer(function(current){
							return current.isMaxHandcard();
						});
						var num=sources[0].countCards("h")-target.countCards("h");
						var att=get.attitude(player,target);
						fin+=num*att;
						var sources2=game.filterPlayer(function(current){
							return current.isMinHandcard();
						});
						var num2=sources2[0].countCards("h")-target.countCards("h");
						//var att=get.attitude(player,target);
						fin+=num2*att;
						return fin;
					});
					"step 1"
					if(result.targets&&result.targets.length){
						event.targets=result.targets;
						event.targets.sortBySeat();
						player.logSkill("sst_chixing",event.targets);
						player.chooseTarget("赤行：另外指定一名角色，令"+get.translation(event.targets)+"将手牌数调整到与其相等",true).set("ai",function(target){
							var player=_status.event.player;
							var targets=_status.event.targetsx;
							//game.log(targets);
							var fin=0;
							for(var i=0;i<targets.length;i++){
								if(get.attitude(player,targets[i])>0){
									fin+=target.countCards("h")-targets[i].countCards("h");
								}
								else{
									fin+=targets[i].countCards("h")-target.countCards("h");
								}
							}
							return fin;
						}).set("targetsx",event.targets);
						game.delayx();
					}
					else{
						event.finish();
					}
					"step 2"
					if(result.targets&&result.targets.length){
						event.source=result.targets[0];
						player.line(event.source,"green");
						game.delayx();
					}
					else{
						event.finish();
					}
					"step 3"
					for(var i=0;i<event.targets.length;i++){
						if(event.targets[i].isAlive()){
							var num=event.source.countCards("h");
							var num2=event.targets[i].countCards("h");
							source.line(event.targets[i],"green");
							if(num<num2){
								event.targets[i].chooseToDiscard("赤行：弃置"+get.cnNumber(num2-num)+"张牌",num2-num,true,"h");
							}
							else event.targets[i].drawTo(num);
						}
					}
				},
				ai:{
					expose:0.2,
					/*
					effect:{
						player:function(card,player){
							if(get.color(card)!="red"&&player.countCards("h"),{color:"red"}) return [1,-1];
						},
					},
					*/
				},
			},
			sst_chuanxiao:{
				trigger:{global:"roundStart"},
				forced:true,
				filter:function(event,player){
					//return player.storage.sst_chixing_red;
					var history=player.getAllHistory("useCard");
					if(!history||!history.length) return false;
					var card=history[history.length-1].card;
					//game.log(card);
					//game.log(get.translation(get.name(event.card)),get.translation(get.name(event.card)).length);
					//game.log(get.translation(get.name(card)),get.translation(get.name(card)).length);
					return get.color(card)=="red";
				},
				content:function(){
					if(!player.storage.sst_chixing) player.storage.sst_chixing=1;
					player.storage.sst_chixing++;
					/*
					game.broadcastAll(function(player){
						lib.translate["sst_chixing_info"]="你使用的最后一张牌为红色的回合结束后，你可以令至多｛"+player.storage.sst_chixing+"｝名角色将手牌数调整到与你另外指定的一名角色相等。";
					},player);
					*/
					//player.storage.sst_chixing_red=false;
				},
				/*
				group:["sst_chuanxiao_red"],
				subSkill:{
					red:{
						trigger:{player:"phaseAfter"},
						filter:function(event,player){
							var evt=player.getLastUsed();
							if(!evt) return false;
							var color=get.color(evt.card);
							return color=="red";
						},
						silent:true,
						content:function(){
							player.storage.sst_chixing_red=true;
						},
						sub:true,
					},
				},
				*/
				ai:{
					combo:"sst_chixing",
				},
			},
			//任天鼠
			sst_jilve:{
				global:"sst_jilve2",
				trigger:{global:"phaseUseBegin"},
				filter:function(event,player){
					//return event.player!=player&&player.countCards("h");
					return event.player!=player;
				},
				logTarget:"player",
				check:function(event,player){
					return get.attitude(player,event.player)>0;
				},
				content:function(){
					"step 0"
					trigger.player.storage.sst_jilve_used=true;
					var cards=player.getCards("h");
					if(cards&&cards.length){
						trigger.player.chooseCardButton("辑略：你可以获得"+get.translation(player)+"任意张手牌",cards,[1,Infinity]).set("ai",function(button){
							return _status.event.player.getUseValue(button.link);
						});
					}
					"step 1"
					if(result.links&&result.links.length){
						trigger.player.gain(result.links,player,"giveAuto");
						trigger.player.storage.sst_jilve=result.links.length;
						trigger.player.markSkillCharacter("sst_jilve2",player,"辑略","本回合计算与其他角色距离-"+trigger.player.storage.sst_jilve);
					}
					"step 2"
					if(!game.hasPlayer(function(current){
						return get.distance(trigger.player,current)>1;
					})){
						player.draw(2);
					}
				},
				ai:{
					expose:0.2,
				},
				group:["sst_jilve_clear"],
				subSkill:{
					clear:{
						trigger:{global:"phaseAfter"},
						silent:true,
						content:function(){
							delete trigger.player.storage.sst_jilve;
							trigger.player.unmarkSkill("sst_jilve2");
						},
					},
				},
			},
			sst_jilve2:{
				mod:{
					globalFrom:function(from,to,distance){
						if(typeof from.storage.sst_jilve=="number"){
							return distance-from.storage.sst_jilve;
						}
					},
				},
			},
			sst_yuanchuan:{
				skillAnimation:true,
				animationColor:"fire",
				trigger:{
					player:"die",
				},
				filter:function(event,player) {
					return game.hasPlayer(function(current){
						return current.storage.sst_jilve_used;
					});
				},
				direct:true,
				forced:true,
				forceDie:true,
				content:function (){
					var targets=game.filterPlayer(function(current){
						return current.storage.sst_jilve_used;
					});
					targets.sortBySeat();
					player.logSkill("sst_yuanchuan",targets);
					game.asyncDraw(targets,3);
				},
			},
			//Srf
			sst_diebu:{
				mark:true,
				zhuanhuanji:true,
				intro:{
					content:function(storage,player,skill){
						return player.storage.sst_diebu?"你可以视为使用一张【闪】":"你可以视为使用一张【杀】";
					},
				},
				enable:"chooseToUse",
				prompt:function(){
					var player=_status.event.player;
					return player.storage.sst_diebu?"你可以视为使用一张【闪】":"你可以视为使用一张【杀】";
				},
				viewAs:function(cards,player){
					var name=false;
					if(!player.storage.sst_diebu){
						name="sha";
					}
					else{
						name="shan";
					}
					if(name) return {name:name};
					return null;
				},
				filterCard:function(){return false;},
				selectCard:-1,
				filter:function(event,player){
					var filter=event.filterCard;
					if(filter({name:"sha"},player,event)&&!player.storage.sst_diebu) return true;
					if(filter({name:"shan"},player,event)&&player.storage.sst_diebu) return true;
					return false;
				},
				onuse:function(result,player){
					if(!player.storage.sst_diebu){
						player.storage.sst_diebu=true;
					}
					else{
						player.storage.sst_diebu=false;
					}
				},
				ai:{
					respondSha:true,
					respondShan:true,
					order:4,
				},
			},
			sst_bielian:{
				init:function(player){
					if(!player.storage.sst_bielian) player.storage.sst_bielian=[];
				},
				trigger:{player:"useCardAfter"},
				filter:function(event,player){
					return event.cards.length>0;
				},
				check:function(event,player){
					var cards=player.getCards("h",function(card){
						return get.type(card,"trick")==get.type(event.card,"trick");
					});
					if(!cards||!cards.length) return true;
					for(var i=0;i<cards.length;i++){
						if(lib.filter.cardEnabled(cards[i])) return false;
					}
					return true;
				},
				content:function(){
					player.draw("nodelay");
					//player.addTempSkill("sst_bielian_"+get.type(trigger.card,"trick"));
					player.storage.sst_bielian.push(get.type(trigger.card,"trick"));
				},
				group:["sst_bielian2","sst_bielian_clear"],
				subSkill:{
					clear:{
						trigger:{global:"phaseAfter"},
						silent:true,
						content:function(){
							player.storage.sst_bielian=[];
						},
					},
				},
			},
			sst_bielian2:{
				mod:{
					cardSavable:function(card,player){
						if(player.storage.sst_bielian.contains(get.type(card,"trick"))) return false;
					},
					cardEnabled:function(card,player){
						if(player.storage.sst_bielian.contains(get.type(card,"trick"))) return false;
					},
					cardRespondable:function(card,player){
						if(player.storage.sst_bielian.contains(get.type(card,"trick"))) return false;
					},
				},
			},
			/*
			sst_bielian_basic:{
				mod:{
					cardSavable:function (card,player){
						if(get.type(card,"trick")=="basic") return false;
					},
					cardEnabled:function (card,player){
						if(get.type(card,"trick")=="basic") return false;
					},
					cardRespondable:function (card,player){
						if(get.type(card,"trick")=="basic") return false;
					},
				},
			},
			sst_bielian_trick:{
				mod:{
					cardSavable:function (card,player){
						if(get.type(card,"trick")=="trick") return false;
					},
					cardEnabled:function (card,player){
						if(get.type(card,"trick")=="trick") return false;
					},
					cardRespondable:function (card,player){
						if(get.type(card,"trick")=="trick") return false;
					},
				},
			},
			sst_bielian_equip:{
				mod:{
					cardSavable:function (card,player){
						if(get.type(card,"trick")=="equip") return false;
					},
					cardEnabled:function (card,player){
						if(get.type(card,"trick")=="equip") return false;
					},
					cardRespondable:function (card,player){
						if(get.type(card,"trick")=="equip") return false;
					},
				},
			},
			*/
			//Bowser Jr.
			sst_guaibi:{
				global:"sst_guaibi_ai",
				init:function(player){
					if(!player.storage.sst_guaibi) player.storage.sst_guaibi=1;
					if(!player.storage.sst_guaibi_round) player.storage.sst_guaibi_round=0;
				},
				trigger:{global:"useCard2"},
				filter:function(event,player){
					if(player.storage.sst_guaibi_round>=player.storage.sst_guaibi) return false;
					var card=event.card;
					if(get.name(card)=="sha") return true;
					return false;
				},
				direct:true,
				content:function(){
					"step 0"
					player.chooseTarget(get.prompt2("sst_guaibi"),function(card,player,target){
						return target.countCards("he")>=2;
					}).set("ai",function(target){
						var player=_status.event.player;
						var targets=_status.event.targetsx;
						var source=_status.event.sourcex;
						var card=_status.event.cardx;
						var eff=0;
						for(var i=0;i<targets.length;i++){
							eff+=get.effect(targets[i],card,source,player);
						}
						if(eff>0) return 0;
						var att=get.attitude(player,target)-2;
						if(target==player) att+=2;
						return att;
					}).set("targetsx",trigger.targets).set("sourcex",trigger.player).set("cardx",trigger.card);
					"step 1"
					if(result.bool){
						game.delay(0,200);
						event.target=result.targets[0];
						player.logSkill("sst_guaibi",event.target);
						player.storage.sst_guaibi_round++;
						player.discardPlayerCard(event.target,"he",2,true);
					}
					else{
						event.finish();
					}
					"step 2"
					game.delayx();
					//game.log(trigger.getParent());
					trigger.player=event.target;
					game.log(event.target,"成为了",trigger.card,"的使用者");
					"step 3"
					event.target.chooseTarget("怪笔：你可以为"+get.translation(trigger.card)+"重新指定目标",lib.card[get.name(trigger.card)].selectTarget,lib.card[get.name(trigger.card)].filterTarget).set("ai",function(target){
						var player=_status.event.player;
						var card=_status.event.cardx;
						return get.effect(target,card,player,player);
					}).set("cardx",trigger.card);
					"step 4"
					if(result.bool){
						event.target.line(result.targets);
						trigger.targets.length=0;
						trigger.targets.addArray(result.targets);
						game.log(event.target,"重新指定了",trigger.card,"的目标为",result.targets);
						//trigger.getParent().triggeredTargets=result.targets;
					}
				},
				ai:{
					expose:0.1,
					threaten:2,
				},
				group:["sst_guaibi_clear"],
				subSkill:{
					clear:{
						trigger:{global:"roundStart"},
						silent:true,
						content:function(){
							player.storage.sst_guaibi_round=0;
						},
					},
				},
			},
			sst_guaibi_ai:{
				ai:{
					effect:{
						player:function(card,player){
							var players=game.filterPlayer(function(current){
								return current!=player&&current.hasSkill("sst_guaibi");
							});
							for(var i=0;i<players.length;i++){
								if(game.countPlayer()>2&&get.name(card)=="sha"&&get.attitude(player,players[i])<0&&(player.storage.sst_guaibi_round<player.storage.sst_guaibi)&&game.hasPlayer(function(current){
									return get.attitude(player,current)<0&&current.countCards("he")>=2;
								})&&!player.hasUsableCard("shan")) return [1,-3];
							}
						},
					},
				},
			},
			sst_daonao:{
				trigger:{source:"damageSource"},
				forced:true,
				content:function(){
					if(!player.storage.sst_guaibi) player.storage.sst_guaibi=1;
					player.storage.sst_guaibi++;
					game.broadcastAll(function(player){
						lib.translate["sst_guaibi_info"]="每轮限｛"+player.storage.sst_guaibi+"｝次，一张【杀】指定目标前，你可以弃置一名角色的两张牌，令其成为此【杀】的使用者，然后该角色可以为此【杀】重新指定目标。";
					},player);
				},
				group:["sst_daonao2"],
				ai:{
					combo:"sst_guaibi",
				},
			},
			sst_daonao2:{
				trigger:{player:"damageEnd"},
				filter:function(event,player){
					return player.storage.sst_guaibi>=0;
				},
				forced:true,
				content:function(){
					if(!player.storage.sst_guaibi) player.storage.sst_guaibi=1;
					player.storage.sst_guaibi=Math.max(0,player.storage.sst_guaibi-trigger.num);
					/*
					game.broadcastAll(function(player){
						lib.translate["sst_guaibi_info"]="每轮限｛"+player.storage.sst_guaibi+"｝次，一张【杀】指定目标前，你可以弃置一名角色的两张牌，令其成为此【杀】的使用者，然后该角色可以为此【杀】重新指定目标。";
					},player);
					*/
				},
			},
			//Koopalings
			sst_shimo:{
				init:function(player){
					if(!player.storage.sst_shimo) player.storage.sst_shimo=[];
				},
				trigger:{player:"phaseZhunbeiBegin"},
				direct:true,
				content:function(){
					"step 0"
					player.chooseTarget(get.prompt2("sst_shimo")).set("ai",function(target){
						var player=_status.event.player;
						var num=player.storage.sst_shimo.contains(target)?1:2;
						if(get.attitude(player,target)<0){
							if(!target.countCards("he")||target.countCards("he")<2) return 0;
							return -get.attitude(player,target)*num-player.getDamagedHp();
						}
						return get.attitude(player,target)*num-player.getDamagedHp();
					});
					"step 1"
					if(result.bool){
						player.logSkill("sst_shimo",result.targets);
						player.addTempSkill("sst_shimo_phase");
						player.loseHp();
						event.target=result.targets[0];
						event.num=1;
						if(!player.storage.sst_shimo.contains(event.target)){
							event.num=2;
							player.storage.sst_shimo.push(event.target);
						}
						if(!event.target.countCards("he")){
							event.directcontrol=true;
						}
						else{
							var str1="摸"+get.cnNumber(event.num)+"张牌";
							var str2="弃置"+get.cnNumber(event.num)+"张牌";
							player.chooseControl(str1,str2,function(event,player){
								return _status.event.choice;
							}).set("choice",get.attitude(player,event.target)>0?str1:str2);
							event.str=str1;
						}
					}
					else{
						event.finish();
					}
					"step 2"
					if(event.directcontrol||result.control==event.str){
						event.target.draw(event.num);
					}
					else{
						event.target.chooseToDiscard("施魔：弃置"+get.cnNumber(event.num)+"张牌",event.num,true,"he");
					}
				},
				ai:{
					expose:0.2,
				},
				subSkill:{
					phase:{},
				},
			},
			sst_qiebao:{
				enable:"phaseUse",
				usable:1,
				viewAs:{name:"shunshou",isCard:true},
				filterCard:function(){return false;},
				selectCard:-1,
				precontent:function(){
					player.addTempSkill("sst_qiebao_phase");
					player.loseMaxHp();
				},
				ai:{
					order:function(){
						var player=_status.event.player;
						if(player.hp==player.maxHp) return 0;
						if(player.hp<player.maxHp-1||player.hp<=2) return 6;
						return 0;
					},
					result:{
						player:0.5,
					},
				},
				subSkill:{
					phase:{},
				},
			},
			sst_duzhi:{
				trigger:{player:"phaseJieshuBegin"},
				forced:true,
				filter:function(event,player){
					return !player.hasSkill("sst_shimo_phase")&&!player.hasSkill("sst_qiebao_phase");
				},
				content:function(){
					player.addTempSkill("sst_duzhi2","phaseBegin");
				},
			},
			sst_duzhi2:{
				trigger:{global:"useCard"},
				filter:function(event,player){
					return event.player!=player;
				},
				forced:true,
				popup:false,
				charlotte:true,
				content:function(){
					trigger.directHit.add(player);
				},
			},
			//Ryu
			sst_tandao:{
				enable:"phaseUse",
				usable:1,
				delay:false,
				content:function(){
					"step 0"
					player.chooseControl("red","black").set("ai",function(){
						var player=_status.event.player;
						//if(player.countCards("h",{color:"red"})==1&&player.countCards("h",{color:"black"})>1) return "红色";
						return player.countCards("he",{color:"red"})<player.countCards("he",{color:"black"})?"red":"black";
					});
					"step 1"
					event.control=result.control;
					player.popup(event.control);
					game.log(player,"选择了","#y"+get.translation(event.control));
					player.showHandcards();
					"step 2"
					var cards=player.getCards("he",{color:event.control});
					player.discard(cards);
					var types=[];
					var history=player.getHistory("useCard");
					for(var i=0;i<history.length;i++){
						if(!types.contains(get.type(history[i].card,"trick"))) types.push(get.type(history[i].card,"trick"));
					}
					if(types.length) player.draw(types.length);
				},
				ai:{
					order:3,
					result:{
						player:function(player){
							var types=[];
							var history=player.getHistory("useCard");
							for(var i=0;i<history.length;i++){
								if(!types.contains(get.type(history[i].card,"trick"))) types.push(get.type(history[i].card,"trick"));
							}
							return types.length-Math.min(player.countCards("he",{color:"red"}),player.countCards("he",{color:"black"}));
						},
					},
				},
			},
			sst_bodong:{
				mod:{
					targetInRange:function(card,player,target,now){
						return true;
					},
				},
			},
			//Ken
			sst_yanyang:{
				enable:"phaseUse",
				filterTarget:function(card,player,target){
					return target.countCards("h")>=player.countCards("h");
				},
				content:function(){
					"step 0"
					target.chooseToDiscard("焰扬：弃置一张牌","he",true);
					"step 1"
					if(result.cards&&result.cards.length&&get.name(result.cards[0])=="sha"){
						var num=player.getStat("skill").sst_yanyang||1;
						target.line(player,"green");
						player.damage(num,target);
					}
				},
				ai:{
					result:{
						target:-0.5,
					},
				},
			},
			sst_shenglong:{
				trigger:{
					player:["useCard"],
				},
				forced:true,
				popup:false,
				content:function(){
					trigger.directHit.addArray(game.filterPlayer(function(current){
						return get.distance(player,current)<=1;
					}));
				},
				ai:{
					directHit_ai:true,
					skillTagFilter:function(player,tag,arg){
						return get.distance(player,arg.target)<=1;
					},
				},
			},
			//Sans
			sst_juexin:{
				trigger:{player:["damageBegin4","loseHpBegin"]},
				forced:true,
				content:function(){
					trigger.cancel();
				},
				ai:{
					nofire:true,
					nothunder:true,
					nodamage:true,
					effect:{
						target:function(card,player,target){
							if(get.tag(card,"damage")){
								if(get.name(card)=="sha"&&!target.hasFriend()&&get.attitude(player,target)<0) return;
								return "zeroplayertarget";
							}
						},
					},
				},
			},
			sst_yebao:{
				trigger:{source:"damageBegin2"},
				filter:function(event,player){
					return !event.player.getAllHistory("useCard",function(evt){
						return get.name(evt.card)=="sha";
					}).length;
				},
				forced:true,
				logTarget:"player",
				content:function(){
					trigger.cancel();
				},
				ai:{
					effect:{
						player:function(card,player,target){
							if(get.tag(card,"damage")&&!target.getAllHistory("useCard",function(evt){
								return get.name(evt.card)=="sha";
							}).length){
								return "zeroplayertarget";
							}
						},
					},
				},
				group:["sst_yebao2"],
			},
			sst_yebao2:{
				trigger:{global:"damageEnd"},
				filter:function(event,player){
					return event.player!=player&&event.source==player&&event.player.isAlive()&&event.player.getDamagedHp();
				},
				forced:true,
				logTarget:"player",
				content:function (){
					trigger.player.storage.sst_yebao3=0;
					trigger.player.addAdditionalSkill("sst_yebao","sst_yebao3",true);
				},
				ai:{
					effect:{
						player:function(card,player,target){
							if(get.tag(card,"damage")&&get.attitude(player,target)>0){
								return -1;
							}
						},
					},
				},
			},
			sst_yebao3:{
				mark:true,
				intro:{
					name:"业报",
					name2:"报",
					content:function(storage,player){
						return "接下来"+get.cnNumber(player.maxHp-player.hp-storage)+"个回合的回合结束时弃置一张牌";
					},
				},
				trigger:{global:"phaseEnd"},
				forced:true,
				content:function(){
					player.storage.sst_yebao3++;
					player.chooseToDiscard("业报：弃置一张牌","he",true);
					if(player.storage.sst_yebao3>=player.maxHp-player.hp) player.removeAdditionalSkill("sst_yebao");
				},
			},
			sst_caijue:{
				trigger:{global:"phaseJieshuBegin"},
				filter:function(event,player){
					/*
					game.log(event.player.getAllHistory("damage",function(evt){
						return evt.source==player;
					}).length);
					game.log(event.player.getAllHistory("useCard",function(evt){
						return get.name(evt.card)=="sha";
					}).length);
					game.log(game.players.length);
					game.log(lib.filter.targetEnabled2({name:"sha"},player,event.player));
					game.log(event.player.getAllHistory("damage",function(evt){
						return evt.source==player;
					}).length&&event.player.getAllHistory("useCard",function(evt){
						return get.name(evt.card)=="sha";
					}).length>game.players.length&&lib.filter.targetEnabled2({name:"sha"},player,event.player));
					*/
					return event.player.getAllHistory("damage",function(evt){
						return evt.source==player;
					}).length&&event.player.getAllHistory("useCard",function(evt){
						return get.name(evt.card)=="sha";
					}).length>game.players.length&&lib.filter.targetEnabled2({name:"sha"},player,event.player)&&!event.player.isDead();
				},
				forced:true,
				logTarget:"player",
				content:function(){
					"step 0"
					if(!trigger.player.isDead()&&(player.countCards("he")||trigger.player.countCards("he"))){
						var target=trigger.player;
						var cards=player.getCards("he").concat(target.getCards("he"));
						var card=cards[0];
						var owner=get.owner(card);
						//if(lib.filter.targetEnabled2({name:"sha"},player,target)){
						if(owner&&owner!=player) owner.lose(card,"visible",ui.ordering).set("type","use");
						player.useCard({name:"sha"},[card],target,false);
						//}
						/*
						else{
							game.cardsDiscard(card);
							//owner.$throw(card);
						}
						*/
						if(cards.length){
							event.redo();
						}
					}
					"step 1"
					player.removeSkill("sst_juexin");
					game.log(player,"失去了技能","#g【决心】");
				},
				/*
				ai:{
					effect:{
						target:function(card,player,target){
							var num=player.getAllHistory("useCard",function(evt){
								return get.name(evt.card)=="sha";
							}).length;
							if(get.name(card)=="sha"){
								if(!target.hasFriend()) return;
								if(!player.getAllHistory("damage",function(evt){
									return evt.source==target;
								}).length) return;
								return [1,-num/2];
							}
						},
					},
				},
				*/
			},
			//Waluigi
			sst_zhamou:{
				locked:false,
				mod:{
					aiOrder:function(player,card,num){
						if(typeof card=="object"&&player==_status.currentPhase){
							if(get.color(card)=="red"){
								return num+3;
							}
						}
					},
				},
				enable:"phaseUse",
				usable:1,
				filter:function(event,player){
					return player.countCards("h");
				},
				filterTarget:function(card,player,target){
					return target!=player;
				},
				content:function(){
					"step 0"
					target.discardPlayerCard(player,"h",true);
					"step 1"
					if(get.color(result.cards[0])=="black"){
						event.card=result.cards[0];
						var list=[];
						for(var i=0;i<lib.inpile.length;i++){
							var name=lib.inpile[i];
							if(get.type(name)=="trick") list.push(["锦囊","",name]);
						}
						if(list.length){
							player.chooseButton(["诈谋：视为对"+get.translation(target)+"使用一张锦囊牌",[list,"vcard"]],true).set("filterButton",function(button){
								var player=_status.event.player;
								var target=_status.event.targetx;
								var card={name:button.link[2],isCard:true};
								//return lib.filter.targetEnabled2(card,player,target);
								return player.canUse(card,target,false);
							}).set("ai",function(button){
								var player=_status.event.player;
								var target=_status.event.targetx;
								var card={name:button.link[2],isCard:true};
								return get.effect(target,card,player,player);
							}).set("targetx",target);
						}
					}
					else{
						event.finish();
					}
					"step 2"
					if(result&&result.bool&&result.links[0]){
						var card={name:result.links[0][2],isCard:true};
						player.useCard(card,target,false);
					}
					"step 3"
					player.chooseBool("诈谋：收回"+get.translation(event.card)+"，否则令此技能视为此出牌阶段未发动过").set("ai",function(){
						if(!_status.event.player.countCards("h",{color:"black"})) return true;
						var card=_status.event.cardx;
						if(get.position(event.card)=="d") return get.value(card)>5;
						return false;
					}).set("cardx",event.card);
					"step 4"
					if(result.bool){
						if(get.position(event.card)=="d") player.gain(event.card,"gain2");
					}
					else{
						var stat=player.getStat().skill;
						if(stat["sst_zhamou"]) stat["sst_zhamou"]--;
						game.log(player,"令","#g【"+get.translation("sst_zhamou")+"】","视为此出牌阶段未发动过");
					}
				},
				ai:{
					order:6,
					result:{
						target:function(player,target){
							return Math.sqrt(get.attitude(player,target));
						},
						player:function(player,target){
							return player.countCards("h",{color:"black"})-player.countCards("h",{color:"red"});
						},
					},
				},
			},
			//Master Hand
			sst_zhuzai:{
				global:"sst_zhuzai_ai",
				trigger:{global:"phaseZhunbeiBegin"},
				filter:function(event,player){
					return event.player.countCards("h");
				},
				direct:true,
				content:function(){
					"step 0"
					var next=player.choosePlayerCard("主宰：展示"+get.translation(trigger.player)+"一张手牌",trigger.player,"h").set("ai",function(card){
						if(_status.event.visible||_status.event.targetx.isUnderControl(true)||player.hasSkillTag("viewHandcard",null,_status.event.targetx,true)) return get.useful(card);
					}).set("frequentSkill","sst_zhuzai").set("targetx",trigger.player);
					if(player.hasZhuSkill("sst_zhixu",player)&&trigger.player.group==player.group) next.set("visible",true);
					"step 1"
					if(result.cards&&result.cards.length){
						player.logSkill("sst_zhuzai",trigger.player);
						trigger.player.showCards(result.cards[0]);
						player.storage.sst_zhuzai=result.cards[0];
					}
				},
				group:["sst_zhuzai2","sst_zhuzai3","sst_zhuzai_clear"],
				subSkill:{
					clear:{
						trigger:{global:"phaseAfter"},
						silent:true,
						content:function(){
							delete player.storage.sst_zhuzai;
						},
					},
				},
			},
			sst_zhuzai2:{
				trigger:{
					global:"useCard2",
				},
				filter:function(event,player){
					/*
					game.log(!["basic","trick"].contains(get.type(event.card)));
					game.log(event.card);
					game.log(player.storage.sst_zhuzai);
					game.log(event.card!=player.storage.sst_zhuzai);
					game.log(event.player!=_status.currentPhase);
					*/
					//game.log(event.card.card);
					if(!["basic","trick"].contains(get.type(event.card))||!event.cards.contains(player.storage.sst_zhuzai)||event.player!=_status.currentPhase) return false;
					return game.hasPlayer(function(current){
						//return !event.targets.contains(current)&&player.canUse(event.card,current);
						return !event.targets.contains(current)&&lib.filter.targetEnabled2(event.card,event.player,current);
					});
				},
				direct:true,
				content:function(){
					"step 0"
					player.chooseTarget(get.prompt("sst_zhuzai2"),"为"+get.translation(trigger.card)+"增加目标",function(card,player,target){
						return !_status.event.targetsx.contains(target)&&lib.filter.targetEnabled2(_status.event.card,_status.event.sourcex,target);
					}).set("sourcex",trigger.player).set("targetsx",trigger.targets).set("card",trigger.card).set("ai",function(target){
						var player=_status.event.player;
						return get.effect(target,_status.event.card,player,player);
					});
					"step 1"
					if(result.bool){
						if(!event.isMine()&&!_status.connectMode) game.delayx();
						event.targets=result.targets;
					}
					else{
						event.finish();
					}
					"step 2"
					player.logSkill("sst_zhuzai",event.targets);
					trigger.targets.addArray(event.targets);
				},
				ai:{
					expose:0.2,
				},
			},
			sst_zhuzai3:{
				trigger:{global:"phaseJieshuBegin"},
				filter:function(event,player){
					return player.storage.sst_zhuzai&&!event.player.getHistory("useCard",function(evt){
						return evt.cards.contains(player.storage.sst_zhuzai);
					}).length;
				},
				logTarget:"player",
				prompt:function(event){
					return "###"+get.prompt("sst_zhuzai3")+"###你可以对"+get.translation(event.player)+"造成1点伤害";
				},
				check:function(event,player){
					return get.damageEffect(event.player,player,player)>0;
				},
				content:function(){
					trigger.player.damage(player);
				},
				ai:{
					damage:true,
					expose:0.2,
				},
			},
			sst_zhuzai_ai:{
				ai:{
					effect:{
						player:function(card,player,target){
							if(game.countPlayer(function(current){
								return card==current.storage.sst_zhuzai;
							})) return [1,1];
						},
					},
				},
			},
			sst_zhixu:{
				zhuSkill:true,
				forced:true,
			},
			//Ike
			sst_tugu:{
				enable:"chooseToUse",
				usable:1,
				hiddenCard:function(player,name){
					return get.tag({name:name},"damage");
				},
				filter:function(event,player){
					return player.countCards("he")>0;//&&!_status.dying.length;
				},
				chooseButton:{
					dialog:function(event,player){
						var list=[];
						for(var i=0;i<lib.inpile.length;i++){
							var name=lib.inpile[i];
							if(!get.tag({name:name},"damage")) continue;
							if(name=="sha"){
								list.push(["基本","","sha"]);
								list.push(["基本","","sha","fire"]);
								list.push(["基本","","sha","thunder"]);
								list.push(["基本","","sha","ice"]);
							}
							else if(get.type(name)=="trick") list.push(["锦囊","",name]);
							else if(get.type(name)=="basic") list.push(["基本","",name]);
						}
						return ui.create.dialog("突固",[list,"vcard"]);
					},
					filter:function(button,player){
						return _status.event.getParent().filterCard({name:button.link[2]},player,_status.event.getParent());
					},
					check:function(button){
						var player=_status.event.player;
						if(player.countCards("h",button.link[2])>0) return 0;
						if(button.link[2]=="wugu") return 0;
						var effect=player.getUseValue(button.link[2]);
						if(effect>0) return effect;
						return 0;
					},
					backup:function(links,player){
						return {
							filterCard:function(card){
								return !get.tag(card,"damage");
							},
							selectCard:1,
							check:function(card){
								return 6-get.value(card);
							},
							position:"he",
							viewAs:{name:links[0][2],nature:links[0][3]},
						}
					},
					prompt:function(links,player){
						return "将一张不带有「伤害」标签的牌当作"+(get.translation(links[0][3])||"")+get.translation(links[0][2])+"使用";
					},
				},
				ai:{
					respondSha:true,
					order:4,
					result:{
						player:function(player){
							return 1;
						},
					},
				},
			},
			//Sheik
			sst_nixing:{
				filter:function(event,player){
					return event.targets&&event.targets.length>1;
				},
				forced:true,
				trigger:{target:"useCardToTarget"},
				content:function(){
					trigger.getParent().excluded.add(player);
				},
				ai:{
					effect:{
						target:function(card){
							if(card.name=="tiesuo") return [0,0];
							if(card.name=="yihuajiemu") return [0,1];
							if(get.tag(card,"multitarget")) return [0,2];
						},
					},
				},
			},
			sst_shouyin:{
				trigger:{player:"useCardAfter"},
				direct:true,
				content:function(){
					"step 0"
					player.chooseTarget(get.prompt2("sst_shouyin"),function(card,player,target){
						return target!=player;
					}).set("ai",function(target){
						return get.attitude(_status.event.player,target)*Math.max(1,target.countCards("h"));
					});
					"step 1"
					if(result.targets&&result.targets.length){
						var target=result.targets[0];
						player.logSkill("sst_shouyin",target);
						target.chooseToUse("授音：你可以使用一张"+get.translation(get.type(trigger.card,"trick"))+"牌",function(card,player,event){
							if(get.type(card,"trick")!=get.type(_status.event.cardx,"trick")) return false;
							return lib.filter.filterCard.apply(this,arguments);
						}).set("cardx",trigger.card).set("addCount",false);
						game.delayx();
					}
					"step 2"
					//game.log(result?result.targets:result);
					if(result&&trigger.targets&&result.targets&&trigger.targets.length==1&&result.targets.length==1&&trigger.targets[0]==result.targets[0]){
						player.draw();
					}
				},
				ai:{
					expose:0.2,
				},
			},
			//缪缪
			sst_qichang:{
				derivation:"sst_qichang_detail",
				locked:false,
				onremove:function(player){
					if(player.storage.sst_qichang) player.storage.sst_qichang.delete();
					delete player.storage.sst_qichang;
				},
				trigger:{player:"phaseZhunbeiBegin"},
				filter:function(event,player){
					for(var i=1;i<=5;i++){
						if(player.isEmpty(i)) return true;
					}
					return false;
				},
				content:function(){
					"step 0"
					player.addTempSkill("sst_qichang2");
					"step 1"
					var list=[];
					for(var i=0;i<lib.inpile.length;i++){
						var name=lib.inpile[i];
						if(!player.isEmpty(get.subtype({name:name,isCard:true}))) continue;
						if(get.type(name)=="equip") list.push(["装备","",name]);
					}
					if(list.length){
						player.chooseButton(["绮裳：视为对你使用一张装备牌",[list,"vcard"]],true).set("filterButton",function(button){
							var player=_status.event.player;
							var card={name:button.link[2],isCard:true};
							return lib.filter.targetEnabled2(card,player,player);
						}).set("ai",function(button){
							var player=_status.event.player;
							var card={name:button.link[2],isCard:true};
							return get.effect(player,card,player,player);
						});
					}
					"step 2"
					if(result&&result.bool&&result.links[0]){
						var card=game.createCard(result.links[0][2],"","");
						player.storage.sst_qichang=card;
						player.equip(card);
					}
				},
				mod:{
					canBeDiscarded:function(card,source,player){
						if(player.storage.sst_qichang==card) return false;
					},
					canBeGained:function(card,source,player){
						if(player.storage.sst_qichang==card) return false;
					},
				},
				group:["sst_qichang3","sst_qichang4"],
			},
			sst_qichang2:{
				mod:{
					maxHandcard:function(player,num){
						return num-1;
					},
				},
			},
			sst_qichang3:{
				trigger:{player:"phaseBegin"},
				filter:function(event,player){
					return player.storage.sst_qichang;
				},
				forced:true,
				forceDie:true,
				content:function(){
					game.broadcastAll(function(player){
						game.cardsDiscard(player.storage.sst_qichang);
						player.storage.sst_qichang.delete();
					},player);
					delete player.storage.sst_qichang;
				},
			},
			sst_qichang4:{
				trigger:{
					player:"loseAfter",
					global:["equipAfter","addJudgeAfter","gainAfter","loseAsyncAfter"],
				},
				filter:function(event,player){
					var evt=event.getl(player);
					return evt&&evt.player==player&&evt.es&&evt.es.length>0&&evt.es.contains(player.storage.sst_qichang);
				},
				forced:true,
				forceDie:true,
				content:function(){
					game.broadcastAll(function(player){
						player.storage.sst_qichang.delete();
					},player);
					delete player.storage.sst_qichang;
				},
			},
			sst_shizhu:{
				derivation:"sst_shizhu_detail",
				trigger:{global:"phaseDiscardEnd"},
				filter:function(event,player){
					return event.cards&&event.cards.length;
				},
				direct:true,
				content:function(){
					"step 0"
					if(player.storage.sst_qichang) event.qichang=player.storage.sst_qichang;
					if(trigger.player==player){
						player.chooseTarget(get.prompt("sst_shizhu"),"你可以令一名其他角色弃置"+get.cnNumber(trigger.cards.length)+"张牌，若如此做，你可以从你与其弃置的牌中选择任意张对你或其使用",function(card,player,target){
							return target!=player&&target.countCards("he")>=_status.event.num;
						}).set("ai",function(target){
							return -get.attitude(_status.event.player,target);
						}).set("num",trigger.cards.length);
						event.control=1;
					}
					else{
						player.chooseToDiscard(get.prompt("sst_shizhu"),"你可以弃置"+get.cnNumber(trigger.cards.length)+"张牌，若如此做，你可以从你与"+get.translation(trigger.player)+"弃置的牌中选择任意张对你或其使用",trigger.cards.length,"he").set("logSkill","sst_shizhu").set("ai",function(card){
							//return get.useful(card);
							return Math.max(get.effect(_status.event.player,card,_status.event.player,_status.event.player),get.effect(_status.event.targetx,card,_status.event.player,_status.event.player));
						}).set("targetx",trigger.player);
						event.control=2;
					}
					"step 1"
					if(result.bool){
						event.cards=[];
						if(event.control==1){
							event.target=result.targets[0];
							player.logSkill("sst_shizhu",event.target);
							event.target.chooseToDiscard("拾珠：弃置"+get.cnNumber(trigger.cards.length)+"张牌",trigger.cards.length,"he",true);
						}
						else{
							event.target=trigger.player;
							//player.logSkill("sst_shizhu",event.target);
							if(result.cards&&result.cards.length) event.cards=event.cards.concat(result.cards);
						}
					}
					else{
						event.finish();
					}
					"step 2"
					if(event.control==1){
						if(result.cards&&result.cards.length) event.cards=event.cards.concat(result.cards);
					}
					event.cards=event.cards.concat(trigger.cards);
					if(event.qichang) event.cards.remove(event.qichang);
					event.cards=event.cards.filterInD("d");
					"step 3"
					player.chooseCardButton("拾珠：选择一张牌对你或其使用",event.cards).set("filterButton",function(button){
						var player=_status.event.player;
						var target=_status.event.targetx;
						//return player.canUse(button.link,player,false)||player.canUse(button.link,target,false);
						return lib.filter.targetEnabled2(button.link,player,player)||lib.filter.targetEnabled2(button.link,player,target);
					}).set("ai",function(button){
						var player=_status.event.player;
						var target=_status.event.targetx;
						return Math.max(get.effect(player,button.link,player,player),get.effect(target,button.link,player,player));
					}).set("targetx",event.target);
					"step 4"
					if(result.bool){
						event.targets=[];
						event.targets.push(player);
						event.targets.push(event.target);
						event.card=result.links[0];
					}
					else{
						event.finish();
					}
					"step 5"
					player.chooseTarget("选择"+get.translation(result.links[0])+"的目标",[1,2],function(card,player,target){
						return _status.event.targetsx.contains(target)&&lib.filter.targetEnabled2(_status.event.cardx,player,target);
					},true).set("targetsx",event.targets).set("cardx",event.card);
					"step 6"
					if(result.targets&&result.targets.length){
						player.useCard(event.card,result.targets[0],false);
					}
					event.cards.remove(event.card);
					if(event.cards.length) event.goto(3);
				},
			},
			//Toon Link
			sst_yufeng:{
				trigger:{global:"phaseZhunbeiBegin"},
				direct:true,
				filter:function(event,player){
					return player.countCards("h");
				},
				content:function(){
					"step 0"
					player.chooseToDiscard(get.prompt2("sst_yufeng",trigger.player)).set("logSkill",["sst_yufeng",trigger.player]);
					"step 1"
					if(result.cards&&result.cards.length){
						var color=get.color(result.cards[0]);
						var suit=get.suit(result.cards[0]);
						trigger.player.storage.sst_yufeng_color=color;
						trigger.player.storage.sst_yufeng_suit=suit;
						trigger.player.addTempSkill("sst_yufeng2");
					}
				},
			},
			sst_yufeng2:{
				mod:{
					suit:function(card,suit){
						var player=_status.event.player;
						if(card.color==player.storage.sst_yufeng_color&&player.storage.sst_yufeng_suit&&card.suit!=player.storage.sst_yufeng_suit) return player.storage.sst_yufeng_suit;
					},
				},
			},
			sst_chihang:{
				global:"sst_chihang2",
			},
			sst_chihang2:{
				trigger:{player:"phaseUseBegin"},
				direct:true,
				filter:function(event,player){
					return player.countCards("he");
				},
				content:function(){
					"step 0"
					var list=game.filterPlayer(function(current){
						return current.hasSkill("sst_chihang");
					});
					var str="###"+get.prompt("sst_chihang2")+"###你可以展示并交给"+get.translation(list);
					if(list.length>1) str+="中的一人";
					str+="一张牌，然后此出牌阶段内，你使用或打出牌时，若与此牌花色：相同，你将手牌补至体力上限；不同，你须失去一点体力或结束出牌阶段";
					player.chooseCardTarget({
						filterCard:true,
						position:"he",
						filterTarget:function(card,player,target){
							return target.hasSkill("sst_chihang");
						},
						/*
						ai1:function(card){
							return 5-get.useful(card);
						},
						ai2:function(target){
							var player=_status.event.player;
							return get.effect(target,_status.event.cardx,_status.event.sourcex,player);
						},
						*/
						/*
						prompt:function(){
							var player=_status.event.player;
							var list=game.filterPlayer(function(current){
								return current.hasSkill("sst_chihang");
							});
							var str="###"+get.prompt("sst_chihang2")+"###你可以展示并交给"+get.translation(list);
							if(list.length>1) str+="中的一人";
							str+="一张牌，然后此出牌阶段内，你使用或打出牌时，若与此牌花色：相同，你将手牌补至体力上限；不同，你须失去一点体力或结束出牌阶段";
							return str;
						},
						*/
						prompt:str,
					});
					"step 1"
					if(result.bool){
						result.targets[0].logSkill("sst_chihang");
						player.line(result.targets[0],"green");
						player.showCards(result.cards);
						player.give(result.cards,result.targets[0]);
						var suit=get.suit(result.cards[0]);
						player.storage.sst_chihang_suit=suit;
						player.addTempSkill("sst_chihang3","phaseUseEnd");
					}
				},
			},
			sst_chihang3:{
				trigger:{player:["useCard","respond"]},
				forced:true,
				filter:function(event,player){
					return player.isPhaseUsing()&&player.storage.sst_chihang_suit;
				},
				content:function(){
					"step 0"
					if(get.suit(trigger.card)==player.storage.sst_chihang_suit){
						player.drawTo(player.maxHp);
						event.finish();
					}
					else{
						player.chooseControl("失去一点体力","结束出牌阶段",true);
					}
					"step 1"
					if(result.control=="失去一点体力"){
						player.loseHp();
					}
					else{
						var evt=trigger.getParent("phaseUse");
						if(evt&&evt.name=="phaseUse"){
							evt.skipped=true;
						}
					}
				},
			},
			//Wolf
			sst_xishou:{
				enable:"phaseUse",
				filter:function(event,player){
					return player.getHandcardLimit()>0;
				},
				init:function(player){
					player.storage.sst_xishou=0;
				},
				content:function(){
					player.drawTo(player.maxHp);
					player.storage.sst_xishou++;
				},
				ai:{
					order:1,
					result:{
						player:function(player){
							var num=player.getStat("skill").sst_xishou||0;
							if(player.maxHp-player.countCards("h")>0){
								return 1-num;
							}
							return -1;
						},
					},
				},
				mod:{
					maxHandcard:function(player,num){
						return num-player.storage.sst_xishou;
					},
					globalFrom:function(from,to,distance){
						return distance-from.storage.sst_xishou;
					},
				},
				group:["sst_xishou2","sst_xishou_clear"],
				subSkill:{
					clear:{
						trigger:{global:"phaseAfter"},
						silent:true,
						content:function(){
							player.storage.sst_xishou=0;
						},
					},
				},
			},
			sst_xishou2:{
				trigger:{player:"loseEnd"},
				forced:true,
				filter:function(event,player){
					if(!player.storage.sst_xishou) return false;
					if(event.type!="discard") return false;
					var evt=event.getParent("phaseDiscard");
					if(!evt||evt.name!="phaseDiscard") return false;
					return event.cards.length>0;
				},
				content:function(){
					player.loseHp(trigger.cards.length);
				},
				ai:{
					effect:{
						player:function(card,player){
							if(player.storage.sst_xishou&&player.needsToDiscard()) return [1,1];
						},
					},
				},
			},
			//Young Link
			/*
			sst_old_shishi:{
				derivation:"sst_jujian",
				trigger:{player:"phaseJieshuBegin"},
				forced:true,
				content:function(){
					"step 0"
					player.showHandcards();
					event.types=["basic","trick","equip"];
					event.discards=[];
					var cards=player.getCards("h");
					for(var i=0;i<cards.length;i++){
						if(event.types.contains(get.type(cards[i],"trick"))) event.types.remove(get.type(cards[i],"trick"));
					}
					if(!event.types.length) event.goto(3);
					"step 1"
					event.card=get.cards()[0];
					player.showCards(event.card);
					"step 2"
					if(event.types.contains(get.type(event.card,"trick"))){
						event.types.remove(get.type(event.card,"trick"));
						player.gain(event.card,"gain2");
						if(event.types.length) event.goto(1);
					}
					else{
						event.discards.push(event.card);
						game.cardsDiscard(event.card);
						event.goto(1);
					}
					"step 3"
					if(event.discards.length&&event.discards.filterInD("d").length>7){
						game.log(player,"将武将变更为","#g"+get.translation("sst_ocarina_of_time_link"));
						player.reinit(player.name,"sst_ocarina_of_time_link");
					}
				},
			},
			*/
			sst_shishi:{
				trigger:{player:"phaseJieshuBegin"},
				forced:true,
				content:function(){
					"step 0"
					if(!player.getDamagedHp()){
						event.sst_shishi="discard";
						if(game.hasPlayer(function(current){
							return current.countDiscardableCards(player,"he");
						})){
							player.chooseTarget("时逝：弃置一名角色的一张牌",true,function(card,player,target){
								return target.countDiscardableCards(player,"he");
							}).set("ai",function(target){
								var player=_status.event.player;
								var att=get.attitude(player,target);
								if(att<0){
									att=-Math.sqrt(-att);
								}
								else{
									att=Math.sqrt(att);
								}
								var nh=target.countCards("h");
								if(att>0){
									if(target.getEquip("baiyin")&&target.isDamaged()&&
										get.recoverEffect(target,player,player)>0){
										if(target.hp==1&&!target.hujia) return 1.6*att;
										if(target.hp==2) return 0.01*att;
										return 0;
									}
								}
								var es=target.getCards("e");
								var noe=(es.length==0||target.hasSkillTag("noe"));
								var noe2=(es.filter(function(esx){
									return esx.name=="tengjia"||get.value(esx)>0;
								}).length==0);
								var noh=(nh==0||target.hasSkillTag("noh"));
								if(noh&&(noe||noe2)) return 0;
								if(att<=0&&!target.countCards("he")) return 1.5*att;
								return -1.5*att;
							});
						}
						else{
							event.finish();
						}
					}
					else{
						event.sst_shishi="sha";
						player.chooseUseTarget("时逝：视为使用一张【杀】",{name:"sha",isCard:true},true,false);
					}
					"step 1"
					if(event.sst_shishi=="discard"&&result.targets&&result.targets.length){
						event.target=result.targets[0];
						player.line(event.target,"green");
						player.discardPlayerCard(event.target,"he",true);
					}
				},
				group:["sst_shishi2"],
			},
			sst_shishi2:{
				trigger:{player:"useCardAfter"},
				forced:true,
				filter:function(event,player){
					return event.getParent(2).name=="sst_shishi"&&!event.result.bool;
				},
				content:function(){
					game.log(player,"将武将变更为","#g"+get.translation("sst_ocarina_of_time_link"));
					player.reinit(player.name,"sst_ocarina_of_time_link");
				},
			},
			sst_jiamian:{
				group:["sst_jiamian_add","sst_jiamian_refresh","sst_jiamian_remove","sst_jiamian_disallow","sst_jiamian_flash"],
				init:function(player){
					player.storage.sst_jiamian=[];
					player.storage.sst_jiamian_removing=[];
					player.storage.sst_jiamian_trigger=[];
					player.storage.sst_jiamian_map={};
					if(_status.sst_started){
						if(!_status.characterlist){
							var list=[];
							for(var i in lib.character){
								if(lib.filter.characterDisabled2(i)||lib.filter.characterDisabled(i)) continue;
								list.push(i);
							}
							game.countPlayer2(function(current){
								list.remove(current.name);
								list.remove(current.name1);
								list.remove(current.name2);
							});
							_status.characterlist=list;
						}
						_status.characterlist.randomSort();
						var name=_status.characterlist.randomGet();
						lib.skill.sst_jiamian.addCharacter(player,name);
						lib.skill.sst_jiamian.drawCharacter(player,name);
						game.delayx();
						//player.addTempSkill("sst_jiamian_triggered");
						game.log(player,"获得了一张","#g假面");
					}
				},
				onremove:function(player){
					for(var i in player.storage.sst_jiamian_map){
						lib.skill.sst_jiamian.removeCharacter(player,i);
						game.log(player,"移除了假面牌","#g"+get.translation(i));
					}
					delete player.storage.sst_jiamian;
					delete player.storage.sst_jiamian_removing;
					delete player.storage.sst_jiamian_trigger;
					delete player.storage.sst_jiamian_map;
				},
				ondisable:true,
				mark:true,
				intro:{
					mark:function(dialog,storage,player){
						if(storage&&storage.length){
							if(player.isUnderControl(true)){
								dialog.addSmall([storage,"character"]);
								var skills=[];
								for(var i in player.storage.sst_jiamian_map){
									skills.addArray(player.storage.sst_jiamian_map[i]);
								}
								dialog.addText("可用技能："+(skills.length?get.translation(skills):"无"));
							}
							else{
								return "共有"+get.cnNumber(storage.length)+"张“假面”"
							}
						}
						else{
							return "没有假面";
						}
					},
					content:function(storage,player){
						if(player.isUnderControl(true)){
							var skills=[];
							for(var i in player.storage.sst_jiamian_map){
								skills.addArray(player.storage.sst_jiamian_map[i]);
							}
							return get.translation(storage)+"；可用技能："+(skills.length?get.translation(skills):"无");
						}
						else{
							return "共有"+get.cnNumber(storage.length)+"张“假面”"
						}
					}
				},
				filterSkill:function(player,name){
					var group=lib.character[name][1];
					//game.log(group);
					var skills=[];
					var players=game.filterPlayer(function(current){
						//game.log(current.group);
						return current!=player&&current.group==group;
					});
					for(var i=0;i<players.length;i++){
						//game.log(players[i].skills);
						skills=skills.concat(players[i].skills);
					}
					for(var i=0;i<skills.length;i++){
						var info=lib.skill[skills[i]];
						if(info.zhuanhuanji||info.unique||info.limited||info.mainSkill||info.viceSkill||get.is.locked(skills[i])){
							skills.splice(i--,1);
						}
					}
					return skills;
				},
				addCharacter:function(player,name,show){
					var skills=lib.skill.sst_jiamian.filterSkill(player,name);
					if(skills.length){
						player.storage.sst_jiamian_map[name]=skills;
						for(var i=0;i<skills.length;i++){
							player.addAdditionalSkill("hidden:sst_jiamian",skills[i],true);
						}
					}
					player.storage.sst_jiamian.add(name);
					player.updateMarks("sst_jiamian");
					_status.characterlist.remove(name);
					if(show){
						lib.skill.sst_jiamian.drawCharacter(player,name);
					}
				},
				drawCharacter:function(player,name){
					game.broadcastAll(function(player,name){
						if(player.isUnderControl(true)){
							var cards=[];
							var cardname="sst_jiamian_card_"+name;
							lib.card[cardname]={
								fullimage:true,
								image:"character:"+name
							}
							lib.translate[cardname]=lib.translate[name];
							cards.push(game.createCard(cardname,"",""));
							player.$draw(cards);
						}
					},player,name);
				},
				removeCharacter:function(player,name){
					var skills=lib.skill.sst_jiamian.filterSkill(player,name);
					if(skills.length){
						delete player.storage.sst_jiamian_map[name];
						for(var i=0;i<skills.length;i++){
							var remove=true;
							for(var j in player.storage.sst_jiamian_map){
								if(j!=name&&game.expandSkills(player.storage.sst_jiamian_map[j].slice(0)).contains(skills[i])){
									remove=false;break;
								}
							}
							if(remove){
								player.removeAdditionalSkill("hidden:sst_jiamian",skills[i]);
								player.storage.sst_jiamian_removing.remove(skills[i]);
							}
						}
					}
					player.storage.sst_jiamian.remove(name);
					player.updateMarks("sst_jiamian");
					_status.characterlist.add(name);
				},
				getSkillSources:function(player,skill){
					if(player.getStockSkills().contains(skill)) return [];
					var sources=[];
					for(var i in player.storage.sst_jiamian_map){
						if(game.expandSkills(player.storage.sst_jiamian_map[i].slice(0)).contains(skill)) sources.push(i);
					}
					return sources;
				},
				subSkill:{
					add:{
						trigger:{global:"gameStart"},
						forced:true,
						content:function(){
							if(!_status.characterlist){
								var list=[];
								for(var i in lib.character){
									if(lib.filter.characterDisabled2(i)||lib.filter.characterDisabled(i)) continue;
									list.push(i);
								}
								game.countPlayer2(function(current){
									list.remove(current.name);
									list.remove(current.name1);
									list.remove(current.name2);
								});
								_status.characterlist=list;
							}
							_status.characterlist.randomSort();
							var name=_status.characterlist.randomGet();
							lib.skill.sst_jiamian.addCharacter(player,name);
							lib.skill.sst_jiamian.drawCharacter(player,name);
							game.delayx();
							//player.addTempSkill("sst_jiamian_triggered");
							game.log(player,"获得了一张","#g假面");
						},
					},
					refresh:{
						trigger:{global:"die"},
						silent:true,
						content:function(){
							player.removeAdditionalSkill("hidden:sst_jiamian");
							var name=player.storage.sst_jiamian[0];
							var skills=lib.skill.sst_jiamian.filterSkill(player,name);
							if(skills.length){
								player.storage.sst_jiamian_map[name]=skills;
								for(var i=0;i<skills.length;i++){
									player.addAdditionalSkill("hidden:sst_jiamian",skills[i],true);
								}
							}
							player.storage.sst_jiamian.add(name);
							player.updateMarks("sst_jiamian");
						},
					},
					triggered:{},
					flash:{
						hookTrigger:{
							log:function(player,skill){
								var sources=lib.skill.sst_jiamian.getSkillSources(player,skill);
								if(sources.length){
									player.flashAvatar("sst_jiamian",sources.randomGet());
									player.storage.sst_jiamian_removing.add(skill);
								}
							}
						},
						trigger:{player:["useSkillBegin","useCard","respond"]},
						silent:true,
						filter:function(event,player){
							return event.skill&&lib.skill.sst_jiamian.getSkillSources(player,event.skill).length>0;
						},
						content:function(){
							lib.skill.sst_jiamian_flash.hookTrigger.log(player,trigger.skill);
						},
					},
					clear:{
						trigger:{global:"phaseAfter"},
						silent:true,
						content:function(){
							player.storage.sst_jiamian_trigger.length=0;
						},
					},
					disallow:{
						hookTrigger:{
							block:function(event,player,name,skill){
								for(var i=0;i<player.storage.sst_jiamian_trigger.length;i++){
									var info=player.storage.sst_jiamian_trigger[i];
									if(info[0]==event&&info[1]==name&&
									lib.skill.sst_jiamian.getSkillSources(player,skill).length>0){
										return true;
									}
								}
								return false;
							},
						},
					},
					remove:{
						trigger:{player:["useSkillAfter","useCardAfter","respondAfter","triggerAfter","skillAfter"]},
						hookTrigger:{
							after:function(event,player){
								if(event._direct&&!player.storage.sst_jiamian_removing.contains(event.skill)) return false;
								if(lib.skill[event.skill].silent) return false;
								return lib.skill.sst_jiamian.getSkillSources(player,event.skill).length>0;
							}
						},
						silent:true,
						filter:function(event,player){
							return event.skill&&lib.skill.sst_jiamian.getSkillSources(player,event.skill).length>0;
						},
						content:function(){
							"step 0"
							if(trigger.name=="trigger"){
								player.storage.sst_jiamian_trigger.push([trigger._trigger,trigger.triggername]);
							}
							var sources=lib.skill.sst_jiamian.getSkillSources(player,trigger.skill);
							if(sources.length==1){
								event.directresult=sources[0];
							}
							else{
								player.chooseButton(true).set("createDialog",["移除一张“假面”牌",[sources,"character"]]);
							}
							"step 1"
							if(!event.directresult&&result&&result.links[0]){
								event.directresult=result.links[0];
							}
							var name=event.directresult;
							lib.skill.sst_jiamian.removeCharacter(player,name);
							game.log(player,"移除了假面牌","#g"+get.translation(name));
							if(!_status.characterlist){
								var list=[];
								for(var i in lib.character){
									if(lib.filter.characterDisabled2(i)||lib.filter.characterDisabled(i)) continue;
									list.push(i);
								}
								game.countPlayer2(function(current){
									list.remove(current.name);
									list.remove(current.name1);
									list.remove(current.name2);
								});
								_status.characterlist=list;
							}
							_status.characterlist.randomSort();
							var name=_status.characterlist.randomGet();
							lib.skill.sst_jiamian.addCharacter(player,name);
							lib.skill.sst_jiamian.drawCharacter(player,name);
							game.delayx();
							//player.addTempSkill("sst_jiamian_triggered");
							game.log(player,"获得了一张","#g假面");
						},
					},
				},
				ai:{
					nofrequent:true,
					skillTagFilter:function(player,tag,arg){
						if(arg&&player.storage.sst_jiamian){
							if(lib.skill.sst_jiamian.getSkillSources(player,arg).length>0){
								return true;
							}
						}
						return false;
					},
				},
			},
			//Ocarina of Time Link
			sst_shisu:{
				trigger:{player:"phaseDrawBegin1"},
				forced:true,
				content:function(){
					trigger.num=Math.max(0,player.hp+2-player.countCards("h"));
				},
				group:["sst_shisu2"],
			},
			sst_shisu2:{
				trigger:{player:"phaseDrawEnd"},
				filter:function(event,player){
					return !player.getHistory("gain",function(evt){
						return evt.getParent("draw")&&evt.getParent("draw").name=="draw"&&evt.getParent("phaseDraw")&&evt.getParent("phaseDraw").name=="phaseDraw";
					}).length;
				},
				forced:true,
				content:function(){
					game.log(player,"将武将变更为","#g"+get.translation("sst_young_link"));
					player.reinit(player.name,"sst_young_link");
				},
			},
			sst_yongfeng:{
				trigger:{player:"phaseDrawBegin2"},
				direct:true,
				filter:function(event){
					return event.num>0;
				},
				content:function(){
					"step 0"
					player.chooseTarget(get.prompt2("sst_yongfeng"),[1,trigger.num],function(card,player,target){
						return player.canUse({name:"sha"},target);
					},function(target){
						var player=_status.event.player;
						return get.effect(target,{name:"sha"},player,player)-ui.selected.targets.length*2;
					});
					"step 1"
					if(result.bool){
						event.targets=result.targets.sortBySeat();
						player.logSkill("sst_yongfeng",event.targets);
						trigger.num-=event.targets.length;
					}
					else{
						event.finish();
					}
					"step 2"
					var target=event.targets.shift();
					player.useCard({name:"sha",isCard:true},target,false);
					if(event.targets.length) event.redo();
					"step 2"
					if(trigger.num<=0) game.delay();
				},
				ai:{
					threaten:1.2,
					expose:0.2,
				},
			},
			//Springman
			sst_shenbi:{
				init:function(player){
					player.storage.sst_shenbi=["下一张【杀】伤害+1","此【杀】不可被响应","失去一点体力"];
					player.storage.sst_shenbi_ready=["下一张【杀】伤害+1","此【杀】不可被响应","失去一点体力"];
				},
				locked:false,
				mod:{
					targetInRange:function(card,player,target){
						if(_status.event.skill=="sst_shenbi") return true;
					},
				},
				enable:["chooseToUse","chooseToRespond"],
				filterCard:function(){return false;},
				selectCard:-1,
				viewAs:{name:"sha",isCard:true},
				filter:function(event,player){
					return player.countCards("h")!=Math.max(0,_status.currentPhase.countCards("h")-1);
				},
				onrespond:function(){return this.onuse.apply(this,arguments);},
				onuse:function(result,player){
					var num=_status.currentPhase.countCards("h");
					var num2=player.countCards("h");
					if(num-1<num2){
						player.chooseToDiscard("神臂：弃置"+get.cnNumber(num2-num+1)+"张手牌",num2-num+1,true,"h");
					}
					else player.drawTo(num-1);
				},
				ai:{
					respondSha:true,
					order:function(){
						return get.order({name:"sha"})+0.1;
					},
					useful:-1,
					value:-1,
				},
				group:["sst_shenbi2"],
			},
			sst_shenbi2:{
				trigger:{player:["useCard","respond"]},
				filter:function(event,player){
					return event.skill=="sst_shenbi";
				},
				silent:true,
				content:function(){
					"step 0"
					if(player.storage.sst_shenbi.length){
						player.chooseControl(player.storage.sst_shenbi).set("prompt","神臂：选择一项");
					}
					else{
						event.goto(2);
					}
					"step 1"
					game.log(player,"选择了","#y"+result.control);
					player.chat(result.control);
					player.storage.sst_shenbi.remove(result.control);
					switch(result.control){
						case "下一张【杀】伤害+1":{
							if(!player.hasSkill("sst_shenbi_eff")){
								player.addSkill("sst_shenbi_eff");
							}else{
								if(!player.storage.sst_shenbi_eff) player.storage.sst_shenbi_eff=0;
							}
							player.storage.sst_shenbi_eff++;
							player.markSkill("sst_shenbi_eff");
							break;
						}
						case "此【杀】不可被响应":{
							if(trigger.name=="useCard") trigger.directHit.addArray(game.players);
							break;
						}
						case "失去一点体力":{
							player.loseHp();
							break;
						}
					}
					"step 2"
					if(!player.storage.sst_shenbi.length||player.hp==1){
						player.storage.sst_shenbi.addArray(player.storage.sst_shenbi_ready);
					}
				},
			},
			sst_shenbi_eff:{
				mark:true,
				intro:{
					content:"下一张杀的伤害基数+#",
				},
				trigger:{
					player:"useCard1",
				},
				filter:function (event){
					return event.card&&event.card.name=="sha";
				},
				forced:true,
				content:function (){
					if(!trigger.baseDamage) trigger.baseDamage=1;
					trigger.baseDamage+=player.storage.sst_shenbi_eff;
					player.removeSkill("sst_shenbi_eff");
				},
				init:function (player){
					player.storage.sst_shenbi_eff=0;
				},
				onremove:function (player){
					delete player.storage.sst_shenbi_eff;
				},
				ai:{
					damageBonus:true,
				},
			},
			sst_lanbo:{
				enable:["chooseToUse"],
				filterCard:function(){return false;},
				selectCard:-1,
				viewAs:{name:"shan",isCard:true},
				filter:function(event,player){
					return player.needsToDiscard()||player.storage.sst_shenbi_ready.length;
				},
				ai:{
					respondShan:true,
					order:function(){
						return get.order({name:"shan"})+0.1;
					},
					useful:-1,
					value:-1,
				},
				group:["sst_lanbo2"],
			},
			sst_lanbo2:{
				trigger:{player:"useCardBefore"},
				filter:function(event,player){
					return event.skill=="sst_lanbo";
				},
				silent:true,
				content:function(){
					"step 0"
					player.logSkill("sst_lanbo");
					var dc=!player.storage.sst_shenbi_ready||!player.storage.sst_shenbi_ready.length;
					var list=[];
					if(player.needsToDiscard()) list.push("弃置手牌");
					if(!dc) list.push("删除选项");
					player.chooseControl(list).set("ai",function(){
						var player=_status.event.player;
						var choices=_status.event.choices;
						if(player.storage.sst_shenbi_ready.contains("失去一点体力")) return "删除选项";
						return choices[0];
					}).set("choices",list);
					"step 1"
					if(result.control=="弃置手牌"){
						player.chooseToDiscard("蓝波：弃置"+get.cnNumber(player.needsToDiscard())+"张牌",player.needsToDiscard(),true,"h");
						event.finish();
					}
					else{
						player.chooseControl(player.storage.sst_shenbi_ready).set("prompt","蓝波：删除〖神臂〗的一个选项").set("ai",function(){
							var choices=_status.event.choices;
							if(choices.contains("失去一点体力")) return "失去一点体力";
							return choices.randomGet();
						}).set("choices",player.storage.sst_shenbi_ready);
					}
					"step 2"
					if(result.control){
						game.log(player,"删除了","#y"+result.control);
						player.chat("删除："+result.control);
						player.storage.sst_shenbi_ready.remove(result.control);
						if(player.storage.sst_shenbi.contains(result.control)) player.storage.sst_shenbi.remove(result.control);
					}
				},
			},
			//Joker
			sst_daoxin:{
				trigger:{player:"useCardToPlayered"},
				logTarget:"target",
				forced:true,
				filter:function(event,player){
					return get.tag(event.card,"damage");
				},
				content:function (){
					"step 0"
					trigger.target.draw();
					"step 1"
					if(trigger.target.countCards("h")>=player.countCards("h")){
						player.viewHandcards(trigger.target);
					}
					else{
						event.finish();
					}
					"step 2"
					player.gain(trigger.target.getCards("h",{color:"red"}),trigger.target,"giveAuto");
				},
			},
			sst_fanni:{
				enable:"phaseUse",
				usable:1,
				filter:function(event,player){
					return player.hp!=player.countCards("h");
				},
				filterCard:true,
				selectCard:function(){
					var player=_status.event.player;
					//game.log(player.countCards("h")-player.hp);
					return Math.max(0,player.countCards("h")-player.hp);
				},
				discard:false,
				lose:false,
				delay:false,
				check:function(card){
					return 7-get.value(card);
				},
				content:function (){
					"step 0"
					var hp=player.hp;
					var hc=player.countCards("h");
					var dh=player.maxHp-player.hp;
					if(hp>hc){
						player.loseHp(hp-hc);
						player.draw(hp-hc);
					}
					else{
						if(player.getDamagedHp()) player.recover(Math.min(dh,cards.length));
						player.discard(cards);
					}
					if(cards.length>dh){
						event.num=cards.length-dh;
					}
					else{
						event.finish();
					}
					"step 1"
					event.num--;
					if(event.num>=0){
						player.chooseUseTarget("反逆：视为使用一张【杀】（剩余"+event.num+"次）",{name:"sha",isCard:true},true,false);
						event.redo();
					}
				},
				ai:{
					order:8,
					result:{
						player:function(player,target){
							if(player.countCards("h")-player.hp<=player.maxHp-player.hp) return 1;
							var eff=0;
							game.filterPlayer(function(current){
								if(player.canUse({name:"sha"},current)) eff=Math.max(eff,get.effect(current,{name:"sha"},player,player));
							});
							return get.sgn(eff);
						},
					},
				},
			},
			//Rex
			sst_qianban:{
				onremove:function(player){
					if(player.getEquip(1)) player.removeMaxHp();
				},
				trigger:{
					player:"loseEnd",
					source:"gainEnd",
					global:["equipEnd","addJudgeEnd","gainEnd","loseAsyncEnd"],
				},
				//direct:true,
				forced:true,
				filter:function(event,player){
					var evt=event.getl(player);
					if(evt&&evt.player==player&&evt.es&&evt.es.length>0){
						for(var i=0;i<evt.es.length;i++){
							return get.subtype(evt.es[i])=="equip1";
						}
					}
				},
				content:function(){
					"step 0"
					var equips=trigger.getl(player).es;
					for(var i=0;i<equips.length;i++){
						if(get.subtype(equips[i])=="equip1"){
							event.equip=equips[i];
							break;
						}
					}
					"step 1"
					player.loseMaxHp();
					"step 2"
					player.gain(event.equip,"gain2");
				},
				group:["sst_qianban2","sst_qianban3","sst_qianban4"],
			},
			sst_qianban2:{
				init:function(player){
					if(player.getEquip(1)) player.gainMaxHp();
				},
				trigger:{player:"equipAfter"},
				//direct:true,
				forced:true,
				filter:function(event,player){
					return get.subtype(event.card)=="equip1";
				},
				content:function(){
					player.gainMaxHp();
				},
			},
			sst_qianban3:{
				trigger:{player:"phaseDrawBegin2"},
				forced:true,
				filter:function(event,player){
					return !event.numFixed&&player.getEquip(1);
				},
				content:function(){
					trigger.num+=1;
				},
			},
			sst_qianban4:{
				trigger:{
					player:"phaseJieshuBegin"
				},
				forced:true,
				filter:function (event,player){
					return !player.getEquip(1)&&game.hasPlayer(function(current){
						return current.countDiscardableCards(player,"ej");
					});
				},
				content:function(){
					"step 0"
					player.chooseTarget("牵绊：弃置场上的一张牌",true,function(card,player,target){
						return target.countDiscardableCards(player,"ej");
					}).set("ai",function(target){
						var player=_status.event.player;
						var att=get.attitude(player,target);
						if(att<0){
							att=-Math.sqrt(-att);
						}
						else{
							att=Math.sqrt(att);
						}
						if(att>0){
							var js=target.getCards("j");
							if(js.length){
								var jj=js[0].viewAs?{name:js[0].viewAs}:js[0];
								if(jj.name=="guohe"||js.length>1||get.effect(target,jj,target,player)<0){
									return 3*att;
								}
							}
							if(target.getEquip("baiyin")&&target.isDamaged()&&
								get.recoverEffect(target,player,player)>0){
								if(target.hp==1&&!target.hujia) return 1.6*att;
								if(target.hp==2) return 0.01*att;
								return 0;
							}
						}
						return -1.5*att;
					});
					"step 1"
					if(result.bool){
						player.line(result.targets,"green");
						player.discardPlayerCard(result.targets[0],"ej",1,true);
					};
				},
			},
			sst_tanyun:{
				usable:1,
				trigger:{player:["phaseZhunbeiBegin","phaseJieshuBegin"]},
				direct:true,
				filter:function(event,player){
					return ui.discardPile.childNodes&&ui.discardPile.childNodes.length;
				},
				content:function(){
					"step 0"
					//game.log(ui.discardPile.childNodes[ui.discardPile.childNodes.length-1]);
					var types=[];
					event.cards=[];
					for(var i=ui.discardPile.childNodes.length-1;i>=0;i--){
						if(!types.contains(get.type(ui.discardPile.childNodes[i],"trick"))){
							types.push(get.type(ui.discardPile.childNodes[i],"trick"));
							event.cards.push(ui.discardPile.childNodes[i]);
						}
					}
					"step 1"
					player.chooseCardButton(event.cards,get.prompt("sst_tanyun")).set("ai",function(button){
						var player=_status.event.player;
						var judges=player.getCards("j");
						if(ui.selected.buttons&&ui.selected.buttons.length){
							for(var i=0;i<ui.selected.buttons.length;i++){
								if(judges&&judges.length) judges.shift();
							}
						}
						if(judges&&judges.length&&!player.hasWuxie()){
							var judge=get.judge(judges[0]);
							return judge(button.link)*(11-get.value(button.link));
						}
						return get.value(button.link);
					});
					"step 2"
					if(result.links&&result.links.length){
						player.logSkill("sst_tanyun");
						var card=result.links[0];
						//player.lose(card,ui.special,"visible");
						player.$throw(card,1000);
						card.fix();
						ui.cardPile.insertBefore(card,ui.cardPile.firstChild);
						game.log(player,"将",card,"置于牌堆顶");
						game.updateRoundNumber();
					}
				},
			},
			//Cuphead & Mugman
			sst_zhuizhai:{
				//global:"sst_zhuizhai2",
				trigger:{global:"roundStart"},
				direct:true,
				filter:function(event,player){
					return game.hasPlayer(function(current){
						return player.inRange(current);
					});
				},
				content:function(){
					"step 0"
					player.chooseTarget(get.prompt2("sst_zhuizhai"),[1,Infinity],function(card,player,target){
						return player.inRange(target);
					},function(target){
						return -get.attitude(_status.event.player,target);
					});
					"step 1"
					if(result.targets&&result.targets.length){
						player.logSkill("sst_zhuizhai",result.targets);
						game.asyncDraw(result.targets);
						for(var i=0;i<result.targets.length;i++){
							//result.targets[i].storage.sst_zhuizhai=player;
							result.targets[i].addTempSkill("sst_zhuizhai2","roundStart");
						}
					}
				},
				ai:{
					expose:0.2,
				},
			},
			sst_zhuizhai2:{
				mark:true,
				intro:{
					content:"当你受到伤害时，伤害来源可以获得你两张牌",
				},
				/*
				onremove:function(player){
					delete player.storage.sst_zhuizhai;
				},
				*/
				trigger:{player:"damageSource"},
				direct:true,
				filter:function(event,player){
					return player.countCards("he")&&event.source;
				},
				content:function(){
					trigger.source.gainPlayerCard(get.prompt("sst_zhuizhai2",player),player,"he",2).set("logSkill",["sst_zhuizhai",player]);
				},
			},
			sst_fanfei:{
				trigger:{target:"useCardToTarget"},
				filter:function(event,player){
					return get.color(event.card)=="red"&&player.countCards("he");
				},
				direct:true,
				content:function(){
					"step 0"
					var eff=get.effect(player,trigger.card,trigger.source,player);
					var dmg=0;
					game.filterPlayer(function(current){
						if(current.countCards("h")>player.countCards("h")) dmg=Math.max(dmg,get.damageEffect(current,player,player));
					});
					var check=eff-1<0&&dmg;
					player.chooseToDiscard(get.prompt2("sst_fanfei"),"he").set("ai",function(card){
						if(_status.event.check) return 7-get.value(card);
					}).set("check",check).set("logSkill",event.name);
					"step 1"
					if(result.cards&&result.cards.length){
						trigger.getParent().excluded.add(player);
					}
					else{
						event.finish();
					}
					"step 2"
					player.chooseTarget("翻飞：对手牌数大于你的一名角色造成一点伤害",function(card,player,target){
						return target.countCards("h")>player.countCards("h");
					},true).set("ai",function(target){
						var player=_status.event.player;
						return get.damageEffect(target,player,player);
					});
					"step 3"
					if(result.targets&&result.targets.length){
						player.line(result.targets[0],"green");
						result.targets[0].damage(player);
					}
				},
				ai:{
					effect:{
						target:function(card,player,target){
							if(get.color(card)=="red"&&get.attitude(player,target)<0) return [1,0.1];
						},
					}
				}
			},
			//Krystal
			sst_liaoyi:{
				group:["sst_liaoyi1","sst_liaoyi2","sst_liaoyi4"],
			},
			sst_liaoyi1:{
				trigger:{player:"chooseToRespondBegin"},
				direct:true,
				filter:function(event,player){
					if(event.responded) return false;
					if(player.storage.sst_liaoyiing) return false;
					if(!event.filterCard({name:"sha"},player,event)) return false;
					return game.hasPlayer(function(current){
						return current.sex=="male";
					});
				},
				content:function(){
					"step 0"
					player.chooseCard("he",get.prompt2("sst_liaoyi1"),function(card){
						return get.name(card)=="sha";
					}).set("ai",function(card){
						var evt=_status.event.evt;
						if(evt.sst_liaoyi) return false;
						return true;
					}).set("evt",trigger);
					"step 1"
					if(result.cards&&result.cards.length){
						player.logSkill("sst_liaoyi");
						player.showCards(result.cards);
					}
					else{
						event.finish();
					}
					"step 2"
					player.chooseTarget("聊依：指定一名男性角色",function(card,player,target){
						return target.sex=="male";
					},true).set("ai",function(target){
						var player=_status.event.player;
						return get.attitude(player,target);
					});
					"step 3"
					if(result.targets&&result.targets.length){
						event.current=result.targets[0];
						player.line(event.current,"green");
						player.storage.sst_liaoyiing=true;
						var next=event.current.chooseToRespond("是否替"+get.translation(player)+"打出一张杀？",{name:"sha"});
						next.set("ai",function(){
							var event=_status.event;
							return (get.attitude(event.player,event.source)-2);
						});
						next.set("source",player);
						next.set("sst_liaoyi",true);
						next.set("skillwarn","替"+get.translation(player)+"打出一张杀");
						next.noOrdering=true;
						next.autochoose=lib.filter.autoRespondSha;
					}
					else{
						event.finish();
					}
					"step 4"
					player.storage.sst_liaoyiing=false;
					if(result.bool){
						trigger.result=result;
						trigger.responded=true;
						trigger.animate=false;
						if(typeof event.current.ai.shown=="number"&&event.current.ai.shown<0.95){
							event.current.ai.shown+=0.3;
							if(event.current.ai.shown>0.95) event.current.ai.shown=0.95;
						}
					}
					else{
						event.finish();
					}
					"step 5"
					event.current.gainPlayerCard(player,"he",true);
				}
			},
			sst_liaoyi2:{
				enable:"chooseToUse",
				prompt:"选择一名目标角色。你展示一张【杀】并指定一名男性角色，若此男性角色打出【杀】响应，则视为你对目标角色使用此【杀】，然后此男性角色获得你一张牌。",
				filter:function(event,player){
					if(event.filterCard&&!event.filterCard({name:"sha"},player,event)) return false;
					if(player.hasSkill("sst_liaoyi3")) return false;
					if(!lib.filter.cardUsable({name:"sha"},player)) return false;
					return player.hasCard(function(card){
						return get.name(card)=="sha";
					})&&game.hasPlayer(function(current){
						return current.sex=="male";
					});
				},
				filterTarget:function(card,player,target){
					if(_status.event._backup&&
						typeof _status.event._backup.filterTarget=="function"&&
						!_status.event._backup.filterTarget({name:"sha"},player,target)){
						return false;
					}
					return player.canUse({name:"sha"},target);
				},
				filterCard:function(card){
					return get.name(card)=="sha";
				},
				check:function(card){
					return 10;
				},
				discard:false,
				lose:false,
				delay:false,
				position:"he",
				content:function(){
					"step 0"
					player.showCards(cards);
					"step 1"
					player.chooseTarget("聊依：指定一名男性角色",function(card,player,target){
						return target.sex=="male";
					},true).set("ai",function(target){
						var player=_status.event.player;
						return get.attitude(player,target);
					});
					"step 2"
					if(result.targets&&result.targets.length){
						event.current=result.targets[0];
						player.line(event.current,"green");
						var next=event.current.chooseToRespond("是否替"+get.translation(player)+"对"+get.translation(target)+"使用一张杀",
						function(card,player,event){
							event=event||_status.event;
							return card.name=="sha"&&event.source.canUse(card,event.target);
						});
						next.set("ai",function(card){
							var event=_status.event;
							return get.effect(event.target,card,event.source,event.player);
						});
						next.set("source",player);
						next.set("target",target);
						next.set("sst_liaoyi",true);
						next.set("skillwarn","替"+get.translation(player)+"打出一张杀");
						next.noOrdering=true;
						next.autochoose=lib.filter.autoRespondSha;
					}
					else{
						event.finish();
					}
					"step 3"
					if(result.bool){
						if(result.cards&&result.cards.length){
							player.useCard({name:"sha",isCard:true},result.cards,target).animate=false;
						}
						else{
							player.useCard({name:"sha",isCard:true},target).animate=false;
						}
						if(typeof event.current.ai.shown=="number"&&event.current.ai.shown<0.95){
							event.current.ai.shown+=0.3;
							if(event.current.ai.shown>0.95) event.current.ai.shown=0.95;
						}
					}
					else{
						player.addSkill("sst_liaoyi3");
						event.getParent(2).step=0;
						event.finish();
					}
					"step 4"
					event.current.gainPlayerCard(player,"he",true);
				},
				ai:{
					respondSha:true,
					skillTagFilter:function(player){
						return player.hasCard(function(card){
							return get.name(card)=="sha";
						})&&game.hasPlayer(function(current){
							return current.sex=="male";
						});
					},
					result:{
						target:function(player,target){
							if(player.hasSkill("sst_liaoyi3")) return 0;
							return get.effect(target,{name:"sha"},player,target);
						}
					},
					order:function(){
						return get.order({name:"sha"})-0.1;
					},
				}
			},
			sst_liaoyi3:{
				trigger:{global:["useCardAfter","useSkillAfter","phaseAfter"]},
				silent:true,
				filter:function(event){
					return event.skill!="sst_liaoyi2";
				},
				content:function(){
					player.removeSkill("sst_liaoyi3");
				}
			},
			sst_liaoyi4:{
				trigger:{player:["chooseToRespondBefore","chooseToUseBefore"]},
				filter:function(event,player){
					if(event.responded) return false;
					if(player.storage.sst_liaoyi4ing) return false;
					if(!event.filterCard({name:"shan"},player,event)) return false;
					return player.hasCard(function(card){
						return get.name(card)=="shan";
					})&&game.hasPlayer(function(current){
						return current.sex=="male";
					});
				},
				direct:true,
				content:function(){
					"step 0"
					player.chooseCard("he",get.prompt2("sst_liaoyi4"),function(card){
						return get.name(card)=="shan";
					}).set("ai",function(card){
						var player=_status.event.player;
						var evt=_status.event.evt;
						if(get.damageEffect(player,evt.player,player)>=0) return false;
						return true;
					}).set("evt",trigger);
					"step 1"
					if(result.cards&&result.cards.length){
						player.logSkill("sst_liaoyi");
						player.showCards(result.cards);
					}
					else{
						event.finish();
					}
					"step 2"
					player.chooseTarget("聊依：指定一名男性角色",function(card,player,target){
						return target.sex=="male";
					},true).set("ai",function(target){
						var player=_status.event.player;
						return get.attitude(player,target);
					});
					"step 3"
					if(result.targets&&result.targets.length){
						event.current=result.targets[0];
						player.line(event.current,"green");
						player.storage.sst_liaoyi4ing=true;
						var next=event.current.chooseToRespond("是否替"+get.translation(player)+"打出一张闪？",{name:"shan"});
						next.set("ai",function(){
							var event=_status.event;
							return (get.attitude(event.player,event.source)-2);
						});
						next.set("skillwarn","替"+get.translation(player)+"打出一张闪");
						next.autochoose=lib.filter.autoRespondShan;
						next.set("source",player);
					}
					"step 4"
					player.storage.sst_liaoyi4ing=false;
					if(result.bool){
						trigger.result={bool:true,card:{name:"shan",isCard:true}};
						trigger.responded=true;
						trigger.animate=false;
						if(typeof event.current.ai.shown=="number"&&event.current.ai.shown<0.95){
							event.current.ai.shown+=0.3;
							if(event.current.ai.shown>0.95) event.current.ai.shown=0.95;
						}
					}
					else{
						event.finish();
					}
					"step 5"
					event.current.gainPlayerCard(player,"he",true);
				},
				ai:{
					respondShan:true,
					skillTagFilter:function(player){
						if(player.storage.sst_liaoyi4ing) return false;
						return player.hasCard(function(card){
							return get.name(card)=="shan";
						})&&game.hasPlayer(function(current){
							return current.sex=="male";
						});
					},
				},
			},
			sst_shuanghan:{
				trigger:{player:"useCardToPlayer"},
				//direct:true,
				filter:function(event,player){
					return event.target!=player&&event.target.countCards("h")>=player.countCards("h");
				},
				//priority:1,
				check:function(event,player){
					var target=event.target;
					var eff=get.effect(target,event.card,player,player);
					if(get.attitude(player,target)>0){
						if(eff>=0) return false;
						return true;
					}
					if(eff<=0) return true;
					if(target.countCards("he")<2) return false;
					var num=0;
					var cards=target.getCards("he");
					for(var i=0;i<cards.length;i++){
						if(get.value(cards[i])>6) num++;
					}
					if(num>=2) return true;
					return false;
				},
				logTarget:"target",
				content:function(){
					"step 0"
					trigger.getParent().excluded.add(trigger.target);
					"step 1"
					if(trigger.player.countDiscardableCards(player,"he")){
						player.line(trigger.target,"green");
						player.discardPlayerCard("he",trigger.target,2,true);
					}
				},
			},
			//Snake
			sst_qianlong:{
				init:function(player){
					if(!player.storage.sst_qianlong) player.storage.sst_qianlong=[];
				},
				intro:{
					name:"潜龙",
					content:"cardCount",
					onunmark:"throw",
				},
				enable:"phaseUse",
				usable:1,
				prompt:"将一张牌扣置于武将牌上视为使用一张【杀】，若此【杀】造成了伤害，你展示此牌并对此目标使用，否则此【杀】结算完毕后你将此牌置于弃牌堆",
				filterCard:true,
				position:"he",
				filterTarget:function(card,player,target){
					if(_status.event._backup&&
						typeof _status.event._backup.filterTarget=="function"&&
						!_status.event._backup.filterTarget({name:"sha"},player,target)){
						return false;
					}
					return player.canUse({name:"sha"},target,false);
				},
				filter:function(event,player){
					if(event.filterCard&&!event.filterCard({name:"sha"},player,event)) return false;
					if(!lib.filter.cardUsable({name:"sha"},player)) return false;
					return player.countCards("he");
				},
				check:function(card){
					return 5-get.value(card);
				},
				discard:false,
				lose:false,
				delay:false,
				content:function(){
					"step 0"
					player.lose(cards,ui.special);
					player.$throw(1);
					player.storage.sst_qianlong=player.storage.sst_qianlong.concat(cards);
					player.syncStorage("sst_qianlong");
					player.markSkill("sst_qianlong");
					//game.log(player,"扣置了一张牌");
					"step 1"
					player.useCard({name:"sha"},target,"sst_qianlong");
				},
				group:["sst_qianlong2"],
				ai:{
					respondSha:true,
					result:{
						target:function(player,target){
							return get.effect(target,{name:"sha"},player,target);
						}
					},
					order:function(){
						return get.order({name:"sha"})+0.1;
					},
				},
			},
			/*
			sst_qianlong2:{
				trigger:{source:"damageEnd"},
				forced:true,
				filter:function(event,player){
					return event.getParent().skill=="sst_qianlong"&&player.storage.sst_qianlong.length;
				},
				logTarget:"player",
				content:function(){
					"step 0"
					player.showCards(player.storage.sst_qianlong);
					event.card=player.storage.sst_qianlong[player.storage.sst_qianlong.length-1];
					"step 1"
					player.storage.sst_qianlong.remove(event.card);
					player.syncStorage("sst_qianlong");
					player.useCard(event.card,trigger.player,false);
					player.unmarkSkill("sst_qianlong");
				},
			},
			*/
			sst_qianlong2:{
				trigger:{player:"useCardAfter"},
				forced:true,
				filter:function(event,player){
					return event.skill=="sst_qianlong"&&player.storage.sst_qianlong&&player.storage.sst_qianlong.length;
				},
				content:function(){
					"step 0"
					var history=player.getHistory("sourceDamage",function(evt){
						return evt.card==trigger.card;
					});
					if(history.length&&history.length==1){
						player.showCards(player.storage.sst_qianlong);
						event.card=player.storage.sst_qianlong[player.storage.sst_qianlong.length-1];
						event.target=history[0].player;
					}
					else{
						event.goto(2);
					}
					"step 1"
					player.storage.sst_qianlong.remove(event.card);
					player.syncStorage("sst_qianlong");
					player.useCard(event.card,event.target,false);
					"step 2"
					player.unmarkSkill("sst_qianlong");
				},
			},
			//Mega Man
			sst_guangpao:{
				enable:"phaseUse",
				complexCard:true,
				filterCard:function(card,player){
					if(!ui.selected.cards.length) return true;
					return get.name(card)==get.name(ui.selected.cards[0]);
				},
				selectCard:2,
				position:"he",
				usable:1,
				check:function (card){
					return 7-get.value(card);
				},
				filterTarget:function(card,player,target){
					return target!=player;
				},
				delay:false,
				content:function(){
					"step 0"
					target.damage(player);
					"step 1"
					var cardsx=player.getCards("h");
					var name=get.name(cards[0]);
					var goon=true;
					for(var i=0;i<cardsx.length;i++){
						if(name==get.name(cardsx[i])){
							goon=false;
							break;
						}
					}
					if(goon){
						player.chooseBool("光炮：是否展示手牌并摸一张牌？").set("ai",function(){
							return true;
						});
					}
					"step 2"
					if(result.bool){
						player.showHandcards();
					}
					else{
						event.finish();
					}
					"step 3"
					player.draw();
				},
				ai:{
					order:6,
					expose:0.2,
					damage:true,
					result:{
						target:function(player,target){
							return get.damageEffect(target,player,target);
						},
					},
				},
			},
			sst_tewu:{
				intro:{
					name:"特武",
					name2:"特",
					content:"拥有技能〖特武〗的角色对你造成伤害时弃置你一张牌",
				},
				global:"sst_tewu2",
				trigger:{source:"damageSource"},
				forced:true,
				filter:function(event,player){
					return event.player.hasMark("sst_tewu")&&event.player.countCards("he");
				},
				logTarget:"player",
				content:function(){
					player.discardPlayerCard("特武：弃置"+get.translation(trigger.player)+"一张牌",trigger.player,"he",true);
				},
			},
			sst_tewu2:{
				skillAnimation:true,
				animationColor:"thunder",
				trigger:{player:"die"},
				filter:function(event,player){
					return game.hasPlayer(function(current){
						return current!=player&&current.hasSkill("sst_tewu");
					});
				},
				direct:true,
				forced:true,
				forceDie:true,
				content:function(){
					"step 0"
					event.players=game.filterPlayer(function(current){
						return current!=player&&current.hasSkill("sst_tewu");
					});
					"step 1"
					player.chooseTarget("特武：指定一名除"+get.translation(event.players)+"以外的其他角色，"+get.translation(event.players)+"对该角色造成伤害时弃置其一张牌",function(card,player,target){
						return target!=player&&!target.hasMark("sst_tewu")&&!_status.event.playersx.contains(target);
					},true).set("playersx",event.players).set("ai",function(target){
						var att=-get.attitude(_status.event.player,target);
						return 10+att;
					}).set("forceDie",true);
					"step 2"
					if(result.targets&&result.targets.length){
						for(var i=0;i<event.players.length;i++){
							event.players[i].logSkill("sst_tewu");
						}
						player.line(result.targets[0],"green");
						result.targets[0].addMark("sst_tewu",1,false);
					}
				},
			},
			//Captain Falcon
			sst_jijing:{
				init:function(player){
					player.storage.sst_jijing=0;
				},
				mod:{
					globalFrom:function(from,to,distance){
						return distance-from.storage.sst_jijing;
					},
				},
				locked:false,
				enable:"phaseUse",
				filter:function(event,player){
					return player.countCards("h");
				},
				filterCard:true,
				selectCard:-1,
				delay:false,
				prompt:"弃置所有手牌（至少一张），并摸比弃置牌数少一的牌，然后你计算与其他角色距离-1。结束阶段，若你与其他角色距离均为1，你摸两张牌或回复1点体力，然后重置此技能的距离计算",
				content:function(){
					"step 0"
					if(cards.length-1) player.draw(cards.length-1);
					"step 1"
					player.storage.sst_jijing++;
				},
				ai:{
					order:1,
					result:{
						player:function(player){
							var val=0;
							var cards=player.getCards("h");
							for(var i=0;i<cards.length;i++){
								val+=get.value(cards[i]);
							}
							val=val/cards.length;
							return get.sgn(7-val);
						},
					},
					threaten:1.5,
				},
				group:["sst_jijing2"],
			},
			sst_jijing2:{
				trigger:{player:"phaseJieshuBegin"},
				forced:true,
				filter:function(event,player){
					return !game.hasPlayer(function(current){
						return get.distance(player,current)>1;
					});
				},
				content:function(){
					"step 0"
					player.chooseDrawRecover(2,true);
					"step 1"
					player.storage.sst_jijing=0;
				},
			},
			//Jigglypuff
			sst_yinyao:{
				trigger:{player:"phaseZhunbeiBegin"},
				direct:true,
				filter:function(event,player){
					return player.countCards("h");
				},
				content:function(){
					"step 0"
					player.chooseCard(get.prompt2("sst_yinyao")).set("ai",function(card){
						/*
						var player=_status.event.player;
						var next=player.getNext();
						var att=-get.attitude(player,next);
						var count=-(next.countCards("h")+1);
						*/
						return 5-get.value(card);
					});
					"step 1"
					if(result.cards&&result.cards.length){
						player.logSkill("sst_yinyao");
						event.card=result.cards[0];
						player.showCards(event.card);
					}
					else{
						event.finish();
					}
					"step 2"
					player.discard(event.card);
					"step 3"
					if(!event.current) event.current=player;
					event.current=event.current.getNext();
					if(event.current==player){
						event.finish();
					}
					else if(!event.current.countCards("h")){
						event.goto(3);
					}
					"step 4"
					player.line(event.current,"green");
					event.current.chooseCard("音谣：展示与"+get.translation(event.card)+"花色或点数相同的牌，否则你翻面","he",function(card){
						return get.suit(card)==get.suit(_status.event.cardx)||get.number(card)==get.number(_status.event.cardx);
					}).set("cardx",event.card).set("ai",function(card){
						if(get.position(card)=="e") return 10;
						return 7-get.value(card);
					});
					"step 5"
					if(result.cards&&result.cards.length){
						event.card=result.cards[0];
						event.current.showCards(event.card);
						event.goto(3);
					}
					else{
						event.current.turnOver();
					}
				},
			},
			sst_anke:{
				global:"sst_anke2",
			},
			sst_anke2:{
				trigger:{player:"phaseBefore"},
				filter:function(event,player){
					return player.isTurnedOver()&&game.hasPlayer(function(current){
						return current.hasSkill("sst_anke")&&!current.hasSkill("sst_anke3");
					});
				},
				priority:2020,
				firstDo:true,
				direct:true,
				content:function(){
					"step 0"
					var list=game.filterPlayer(function(current){
						return current.hasSkill("sst_anke")&&!current.hasSkill("sst_anke3");
					});
					var str="###"+get.prompt("sst_anke2")+"###你可以交给"+get.translation(list);
					if(list.length>1) str+="中的一人";
					str+="一张手牌，然后你翻回正面";
					player.chooseCardTarget({
						filterCard:true,
						filterTarget:function(card,player,target){
							return target.hasSkill("sst_anke")&&!target.hasSkill("sst_anke3");
						},
						ai1:function(card){
							return 7-get.value(card);
						},
						ai2:function(target){
							var att=get.attitude(_status.event.player,target);
							return 10+att;
						},
						prompt:str,
					});
					"step 1"
					if(result.bool){
						result.targets[0].logSkill("sst_anke");
						result.targets[0].addTempSkill("sst_anke3","roundStart");
						player.line(result.targets[0],"green");
						player.give(result.cards,result.targets[0]);
						player.turnOver();
					}
				},
			},
			sst_anke3:{
			},
			//Lucario
			sst_bodao:{
				trigger:{player:"useCardToPlayered"},
				//direct:true,
				filter:function(event,player){
					return player.getDamagedHp();
				},
				//priority:1,
				check:function(event,player){
					return get.attitude(player,event.target)<0;
				},
				logTarget:"target",
				content:function(){
					"step 0"
					var eff=get.effect(trigger.target,trigger.card,player,trigger.target);
					/*
					.set("ai",function(card){
						return -_status.event.eff-get.value(card);
					})
					*/
					trigger.target.chooseToDiscard("波导：弃置"+get.cnNumber(player.maxHp-player.hp)+"张牌，否则不能响应"+get.translation(trigger.card),player.maxHp-player.hp,"he").set("ai",function(card){
						var goon=false;
						var player=_status.event.player;
						var card=_status.event.cardx;
						//if(_status.event.eff>=0) return;
						if(["wuzhong","kaihua","dongzhuxianji"].contains(card.name)) return;
						//player._wanglie_temp=true;
						var eff=_status.event.eff;
						//delete player._wanglie_temp;
						if(eff<0) goon=true;
						if(goon) return 5-get.value(card);
					}).set("cardx",trigger.card).set("eff",eff);
					"step 1"
					if(!result.bool) trigger.getParent().directHit.add(trigger.target);
				},
			},
			sst_juyuan:{
				init:function(player){
					player.storage.sst_juyuan_black=0;
					player.storage.sst_juyuan_red=0;
				},
				mod:{
					attackFrom:function(from,to,distance){
						return distance-from.storage.sst_juyuan_black;
					},
					cardUsable:function(card,player,num){
						if(card.name=="sha") return num+player.storage.sst_juyuan_red;
					},
				},
				locked:false,
				trigger:{global:["loseAfter","cardsDiscardAfter"]},
				forced:true,
				popup:false,
				filter:function(event,player){
					if(player!=_status.currentPhase) return false;
					if(event.name=="lose"&&event.position!=ui.discardPile) return false;
					var list=[];
					var num=event.cards.length;
					for(var i=0;i<event.cards.length;i++){
						var card=event.cards[i];
						list.add(get.color(card,(event.cards2&&event.cards2.contains(card))?event.player:false));
					}
					return list.length>0;
				},
				content:function(){
					var list=[];
					for(var i=0;i<trigger.cards.length;i++){
						var card=trigger.cards[i];
						var color=get.color(card,(trigger.cards2&&trigger.cards2.contains(card))?trigger.player:false);
						list.add(color);
					}
					function filterColor(color) {
						return color==this;
					}
					var blacks=list.filter(filterColor,"black").length;
					var reds=list.filter(filterColor,"red").length;
					player.storage.sst_juyuan_black+=blacks;
					player.storage.sst_juyuan_red+=reds;
				},
				group:["sst_juyuan_clear"],
				subSkill:{
					clear:{
						trigger:{global:"phaseAfter"},
						silent:true,
						content:function(){
							player.storage.sst_juyuan_black=0;
							player.storage.sst_juyuan_red=0;
						},
					},
				},
			},
			//Pichu
			sst_tieyan:{
				trigger:{player:"phaseZhunbeiBegin"},
				direct:true,
				filter:function(event,player){
					return player.countCards("he");
				},
				content:function(){
					"step 0"
					player.chooseCard("he",get.prompt2("sst_tieyan")+"（先选择的在上）",player.hp).set("ai",function(card){
						var player=_status.event.player;
						var judges=player.getCards("j");
						if(ui.selected.cards&&ui.selected.cards.length){
							for(var i=0;i<ui.selected.cards.length;i++){
								if(judges&&judges.length) judges.shift();
							}
						}
						if(judges&&judges.length&&!player.hasWuxie()){
							var judge=get.judge(judges[0]);
							return judge(card)*(11-get.value(card));
						}
						return 5-get.value(card);
					});
					"step 1"
					if(result.cards&&result.cards.length){
						/*
						player.lose(event.cards,ui.special,"visible");
						player.$throw(event.cards,1000);
						game.log(player,"将",event.cards,"置于牌堆顶");
						*/
						event.cards=result.cards;
						player.logSkill("sst_tieyan");
						player.$throw(event.cards,1000);
						game.log(player,"将",event.cards,"置于牌堆顶");
						player.lose(event.cards,ui.cardPile,"insert");
					}
					else{
						event.finish();
					}
					"step 2"
					var num=game.countPlayer(function(current){
						return !current.isLinked();
					});
					if(Math.min(num,player.maxHp-player.hp)){
						player.chooseTarget("贴颜：横置你和"+get.cnNumber(Math.min(num,player.maxHp-player.hp))+"名未横置的角色",[1,Math.min(num,player.maxHp-player.hp)],function(card,player,target){
							return target!=player&&!target.isLinked();
						},true).set("ai",function(target){
							return -get.attitude(_status.event.player,target);
						});
					}
					"step 3"
					if(result.targets&&result.targets.length){
						event.targets=result.targets;
						if(!player.isLinked()) event.targets.unshift(player);
						player.line(event.targets,"green");
						event.num=0;
					}
					else{
						event.finish();
					}
					"step 4"
					if(event.num<event.targets.length){
						event.targets[event.num].link();
						event.num++;
						event.redo();
					}
				},
			},
			sst_gaoya:{
				trigger:{player:"phaseJieshuBegin"},
				forced:true,
				filter:function(event,player){
					return player.countCards("h")<player.hp;
				},
				content:function(){
					"step 0"
					event.card=game.createCard("shandian","","");
					"step 1"
					player.lose(event.card,"visible",ui.ordering);
					player.$phaseJudge(event.card);
					"step 2"
					player.judge(event.card);
					"step 3"
					var name=event.card.viewAs||event.card.name;
					var next=game.createEvent(name);
					next.setContent(function(){
						if(result.bool==false){
							player.damage(3,"thunder","nosource");
						}
						else{
							player.draw(3);
						}
					});
					next._result=result;
					next.card=event.card;
					next.cards=[event.card];
					next.player=player;
					ui.clear();
					"step 4"
					event.card.delete();
				},
			},
			//Dedede
			sst_baoshi:{
				trigger:{player:"useCardEnd"},
				forced:true,
				content:function(){
					"step 0"
					player.draw(2,"nodelay");
					"step 1"
					if(player.countCards("h")>player.maxHp&&player.countCards("hej")>1) player.discardPlayerCard("暴食：弃置"+get.cnNumber(player.countCards("hej")-1)+"张牌",player,player.countCards("hej")-1,"hej",true).set("ai",function(button){
						if(get.position(button.link)=="e"||get.position(button.link)=="j") return 100;
						return 11-_status.event.player.getUseValue(button.link);
					});
				},
			},
			sst_wangyan:{
				unique:true,
				zhuSkill:true,
				enable:"phaseUse",
				usable:1,
				viewAs:{name:"wugu"},
				filterCard:true,
				selectCard:-1,
				filterTarget:function(card,player,target){
					if(target.countCards("h")>=player.countCards("h")||target.group!=player.group) return false;
					return lib.filter.filterTarget.apply(this,arguments);
				},
				filter:function(event,player){
					if(!player.hasZhuSkill("sst_wangyan")) return false;
					return game.hasPlayer(function(current){
						return current.countCards("h")<player.countCards("h")&&current.group==player.group&&player.canUse("wugu",current);
					});
				},
				ai:{
					order:1,
					result:{
						player:function(player){
							var num=0;
							var cards=player.getCards("h");
							if(cards.length>=3&&player.hp>=3) return 0;
							for(var i=0;i<cards.length;i++){
								num+=Math.max(0,get.value(cards[i],player,"raw"));
							}
							num/=cards.length;
							num*=Math.min(cards.length,player.hp);
							return 12-num;
						},
					},
				},
			},
			//Corrin
			sst_juelu:{
				intro:{
					mark:function(dialog,storage,player){
						return "标记的身份："+get.translation(storage);
					},
					content:function(storage,player){
						return "标记的身份："+get.translation(storage);
					},
				},
				trigger:{global:"gameStart"},
				forced:true,
				content:function(){
					"step 0"
					//game.log(game.getIdentityList);
					var list=[];
					for(var i=0;i<game.players.length;i++){
						if(!list.contains(game.players[i].identity)) list.push(game.players[i].identity);
					}
					player.chooseControl(list).set("prompt","决路：标记一个身份");
					"step 1"
					if(result.control){
						player.storage.sst_juelu=result.control;
						player.popup(result.control);
						player.markSkill("sst_juelu");
						game.log(player,"标记了","#y"+get.translation(result.control));
						event.trigger("sst_juelued");
					}
				},
				group:["sst_juelu2","sst_juelu3"],
			},
			sst_juelu2:{
				trigger:{player:"phaseDrawBegin2"},
				forced:true,
				filter:function(event,player){
					return !event.numFixed&&player.storage.sst_juelu;
				},
				content:function(){
					var num=1;
					var list=[];
					for(var i=0;i<game.players.length;i++){
						if(!list.contains(game.players[i].identity)) list.push(game.players[i].identity);
					}
					for(var i=0;i<list.length;i++){
						if(get.population(list[i])>get.population(player.storage.sst_juelu)) num++;
					}
					trigger.num+=num;
				},
				ai:{
					threaten:1.5,
				},
				mod:{
					cardUsable:function(card,player,num){
						var count=1;
						var list=[];
						for(var i=0;i<game.players.length;i++){
							if(!list.contains(game.players[i].identity)) list.push(game.players[i].identity);
						}
						for(var i=0;i<list.length;i++){
							if(get.population(list[i])>get.population(player.storage.sst_juelu)) count++;
						}
						if(card.name=="sha") return num+count-1;
					},
				},
			},
			sst_juelu3:{
				trigger:{global:"dieAfter"},
				forced:true,
				filter:function(event,player){
					return event.player.identity==player.storage.sst_juelu&&player.countCards("h");
				},
				content:function(){
					player.discard(player.getCards("h"));
				},
			},
			sst_longwei:{
				trigger:{player:"sst_juelued"},
				forced:true,
				content:function(){
					player.gainMaxHp(get.population(player.storage.sst_juelu));
					player.recover(get.population(player.storage.sst_juelu));
				},
			},
			//Steve
			sst_tankuang:{
				init:function(player){
					if(!player.storage.sst_tankuang) player.storage.sst_tankuang=[];
				},
				derivation:"sst_jujian2",
				enable:"phaseUse",
				filter:function(event,player){
					return !player.hasSkill("sst_tankuang2");
				},
				delay:false,
				content:function(){
					"step 0"
					player.chooseControl(lib.suit.concat(["basic","trick","equip"])).set("ai",function(){
						var player=_status.event.player;
						var count=0;
						var value=0;
						var list=lib.suit.concat(["basic","trick","equip"]);
						var choice=[];
						var cards=[];
						for(var i=0;i<list.length;i++){
							for(var j=0;j<ui.cardPile.childNodes.length;j++){
								if(lib.suit.contains(list[i])){
									if(get.suit(ui.cardPile.childNodes[j])==list[i]){
										cards.push(ui.cardPile.childNodes[j]);
										//value+=player.getUseValue(ui.cardPile.childNodes[j]);
										value+=get.value(ui.cardPile.childNodes[j]);
									}
								}
								else{
									if(get.type(ui.cardPile.childNodes[j],"trick")==list[i]){
										cards.push(ui.cardPile.childNodes[j]);
										//value+=player.getUseValue(ui.cardPile.childNodes[j]);
										value+=get.value(ui.cardPile.childNodes[j]);
									}
								}
							}
							if(value>count){
								count=value;
								choice=[list[i]];
							}
							else if(value==count){
								choice.push(list[i]);
							}
							//game.log(list[i],"（"+cards.length+"）："+value+"-",choice,"："+count);
							cards=[];
							value=0;
						}
						return choice.randomGet();
					});
					"step 1"
					event.control=result.control;
					player.popup(event.control);
					game.log(player,"选择了","#y"+get.translation(event.control));
					"step 2"
					event.card=get.cards()[0];
					//player.showCards(event.card);
					game.cardsGotoOrdering(event.card);
					player.$throw(event.card);
					game.log(player,"展示了",event.card);
					//game.delayx();
					player.storage.sst_tankuang.push(event.card);
					"step 3"
					if(player.storage.sst_tankuang.length>10){
						player.addTempSkill("sst_tankuang2");
						player.damage("nosource");
						event.finish();
					}
					"step 4"
					if(get.suit(event.card)==event.control||get.type(event.card,"trick")==event.control){
						player.gain(event.card,"gain2");
					}
					else{
						game.cardsDiscard(event.card);
						event.goto(2);
					}
				},
				ai:{
					order:7,
					result:{
						player:function(player){
							var num=player.storage.sst_tankuang.length;
							if(num==10) return 0;
							return 1-num/10;
						},
					},
				},
				group:["sst_tankuang_clear"],
				subSkill:{
					clear:{
						trigger:{global:"phaseAfter"},
						silent:true,
						content:function(){
							player.storage.sst_tankuang=[];
						},
					},
				},
			},
			sst_tankuang2:{
			},
			//Ma
			sst_fumiao:{
				trigger:{global:["damageEnd","loseHpEnd","recoverEnd"]},
				filter:function(event,player){
					if(player!=_status.currentPhase) return false;
					return !event.player.isDead()&&player.countCards("h")!=Math.max(0,event.player.hp);
				},
				logTarget:"player",
				check:function(event,player){
					if(player.countCards("h")<event.player.hp) return true;
					return player.getUseValue("sha")-player.countCards("h")+event.player.hp>0;
				},
				content:function(){
					"step 0"
					if(player.countCards("h")<trigger.player.hp){
						player.draw(trigger.player.hp-player.countCards("h"));
						event.finish();
					}
					else{
						player.chooseToDiscard("伏妙：弃置"+get.cnNumber(player.countCards("h")-trigger.player.hp)+"张牌",player.countCards("h")-trigger.player.hp,true);
					}
					"step 1"
					var next=player.chooseToUse("伏妙：你可以将一张牌当作【杀】使用（不受距离限制，不计入使用次数）");
					next.set("norestore",true);
					next.set("_backupevent","sst_fumiaox");
					next.backup("sst_fumiaox");
					next.set("addCount",false);
					next.set("filterTarget",function(card,player,target){
						return lib.filter.targetEnabled2({name:"sha"},player,target);
					});
				}
			},
			sst_fumiaox:{
				viewAs:{name:"sha"},
				filterCard:true,
				position:"he",
				check:function(card){return 5-get.value(card)},
			},
			sst_huayu:{
				unique:true,
				zhuSkill:true,
				enable:"phaseUse",
				position:"he",
				filterCard:function(card){
					return get.name(card)=="sha";
				},
				filterTarget:function(card,player,target){
					return target!=player&&target.group==player.group;
				},
				filter:function(event,player){
					if(!player.hasZhuSkill("sst_huayu")) return false;
					return game.hasPlayer(function(current){
						return current!=player&&current.group==player.group;
					});
				},
				discard:false,
				lose:false,
				delay:false,
				position:"he",
				check:function(card){
					return get.order(card);
				},
				content:function (){
					"step 0"
					target.gain(cards,player,"give");
					"step 1"
					player.chooseBool("化雨：是否摸一张牌？").set("ai",function(){
						return true;
					});
					"step 2"
					if(result.bool) player.draw();
				},
				ai:{
					order:3,
					result:{
						target:1,
					},
				},
			},
			//飞机
			sst_xuhuang:{
				usable:1,
				shaRelated:true,
				trigger:{
					player:"useCardToPlayered",
					target:"useCardToTargeted",
				},
				filter:function(event,player){
					return event.card.name=="sha"&&event.getParent().triggeredTargets3.length==1;
				},
				frequent:true,
				content:function(){
					"step 0"
					player.chooseBool("虚晃：此【杀】是否造成伤害？").set("ai",function(){
						var player=_status.event.player;
						var target=_status.event.targetx;
						if(target==player){
							if(player.hasUsableCard("shan")){
								return false;
							}
							else{
								return true;
							}
						}
						else{
							var rand=0.95;
							if(!target.hasUsableCard("shan")) rand=0.05;
							if(!target.countCards("h")) rand=0;
							return Math.random()>rand?true:false;
						}
					}).set("targetx",trigger.target);
					"step 1"
					if(!trigger.getParent().sst_xuhuang) trigger.getParent().sst_xuhuang={};
					trigger.getParent().sst_xuhuang[player.playerid]={result:result.bool};
				},
				group:["sst_xuhuang2"],
				ai:{
					effect:{
						target:function(card,player,target){
							if(card.name=="sha") return [1,0.4];
						},
					},
				},
			},
			sst_xuhuang2:{
				trigger:{global:"useCardAfter"},
				forced:true,
				filter:function(event,player){
					return event.sst_xuhuang&&event.sst_xuhuang[player.playerid];
				},
				content:function(){
					"step 0"
					player.popup(trigger.sst_xuhuang[player.playerid].result?"是":"否");
					player.chat(trigger.sst_xuhuang[player.playerid].result?"造成伤害":"不造成伤害");
					game.log(player,"公布了结果","#y"+(trigger.sst_xuhuang[player.playerid].result?"造成伤害":"不造成伤害"));
					"step 1"
					var bool=(player.getHistory("sourceDamage",function(evt){
						return evt.card==trigger.card;
					}).length)?true:false;
					if(trigger.sst_xuhuang[player.playerid].result==bool){
						player.popup("猜中");
						game.log(player,"#y猜中");
						player.draw(2);
					}
					else{
						player.popup("未猜中");
						game.log(player,"#y未猜中");
						player.chooseToDiscard("虚晃：弃置两张牌",2,"he",true);
					}
				},
			},
			//Sonic
			sst_jibu:{
				derivation:"sst_advance",
				trigger:{global:"phaseBefore"},
				filter:function(event,player){
					return event.player!=player&&!player.hasSkill("sst_phase_sonic")&&!player.hasSkill("sst_jibu3");
				},
				logTarget:"player",
				frequent:true,
				/*
				check:function(event,player){
					return [true,false].randomGet();
				},
				*/
				content:function(){
					player.phase("sst_jibu");
					player.addTempSkill("sst_jibu3","roundStart");
				},
				group:["sst_jibu2"],
			},
			sst_jibu2:{
				trigger:{player:"phaseBefore"},
				charlotte:true,
				firstDo:true,
				priority:2021,
				forced:true,
				filter:function(event,player){
					return event.skill!="sst_jibu"&&player.hasSkill("sst_jibu3");
				},
				content:function(){
					trigger.cancel();
				},
			},
			sst_jibu3:{
				charlotte:true,
			},
			sst_juechen:{
				global:"sst_juechen2",
				trigger:{player:"useCard2"},
				filter:function(event,player){
					if(_status.currentPhase!=player) return false;
					if(get.type(event.card)!="basic"&&get.type(event.card)!="trick") return false;
					return game.hasPlayer(function(current){
						//return !event.targets.contains(current)&&player.canUse(event.card,current);
						return !event.targets.contains(current)&&lib.filter.targetEnabled2(event.card,player,current)&&!current.hasSkill("sst_phase_sonic");
					});
				},
				direct:true,
				content:function(){
					"step 0"
					player.chooseTarget(get.prompt("sst_juechen"),"为"+get.translation(trigger.card)+"增加一个目标",function(card,player,target){
						return !_status.event.sourcex.contains(target)&&lib.filter.targetEnabled2(_status.event.card,player,target)&&!target.hasSkill("sst_phase_sonic");
					}).set("sourcex",trigger.targets).set("card",trigger.card).set("ai",function(target){
						var player=_status.event.player;
						return get.effect(target,_status.event.card,player,player);
					});
					"step 1"
					if(result.bool){
						if(!event.isMine()&&!_status.connectMode) game.delayx();
						event.targets=result.targets;
					}
					else{
						event.finish();
					}
					"step 2"
					player.logSkill("sst_juechen",event.targets);
					trigger.targets.addArray(event.targets);
				},
			},
			sst_juechen2:{
				trigger:{player:"useCard2"},
				filter:function(event,player){
					if(player.hasSkill("sst_juechen")) return false;
					if(get.type(event.card)!="basic"&&get.type(event.card)!="trick") return false;
					return game.hasPlayer(function(current){
						//return !event.targets.contains(current)&&player.canUse(event.card,current);
						return !event.targets.contains(current)&&lib.filter.targetEnabled2(event.card,player,current)&&current.hasSkill("sst_phase_sonic")&&_status.currentPhase!=current&&current.hasSkill("sst_juechen");
					});
				},
				direct:true,
				content:function(){
					"step 0"
					player.chooseTarget(get.prompt("sst_juechen2"),"为"+get.translation(trigger.card)+"增加目标",[1,Infinity],function(card,player,target){
						return !_status.event.sourcex.contains(target)&&lib.filter.targetEnabled2(_status.event.card,player,target)&&target.hasSkill("sst_phase_sonic")&&_status.currentPhase!=target&&target.hasSkill("sst_juechen");
					}).set("sourcex",trigger.targets).set("card",trigger.card).set("ai",function(target){
						var player=_status.event.player;
						return get.effect(target,_status.event.card,player,player);
					});
					"step 1"
					if(result.bool){
						if(!event.isMine()&&!_status.connectMode) game.delayx();
						event.targets=result.targets;
					}
					else{
						event.finish();
					}
					"step 2"
					event.targets[0].logSkill("sst_juechen");
					player.line(event.targets,"green");
					trigger.targets.addArray(event.targets);
				},
			},
			//Hero
			sst_songmo:{
				locked:false,
				trigger:{global:"phaseUseBegin"},
				filter:function(event,player){
					return player.getHandcardLimit()>0;
				},
				init:function(player){
					player.storage.sst_songmo=0;
				},
				logTarget:"player",
				check:function(event,player){
					return get.attitude(player,event.player)>0;
				},
				content:function(){
					"step 0"
					player.storage.sst_songmo++;
					"step 1"
					if(player.needsToDiscard()) player.chooseToDiscard("诵魔：弃置"+get.cnNumber(player.needsToDiscard())+"张牌",player.needsToDiscard(),true);
					"step 2"
					var list=[];
					for(var i=0;i<lib.inpile.length;i++){
						var name=lib.inpile[i];
						if(get.type(name)=="trick") list.push(["锦囊","",name]);
					}
					if(list.length){
						player.chooseButton(["诵魔：视为"+get.translation(trigger.player)+"使用一张锦囊牌",[list,"vcard"]],true).set("filterButton",function(button){
							//var player=_status.event.player;
							var source=_status.event.sourcex;
							var card={name:button.link[2],isCard:true};
							//return lib.filter.targetEnabled2(card,player,target);
							return lib.filter.cardEnabled(card,source);
						}).set("ai",function(button){
							//var player=_status.event.player;
							var source=_status.event.sourcex;
							var card={name:button.link[2],isCard:true};
							return source.getUseValue(card);
						}).set("sourcex",trigger.player);
					}
					"step 3"
					if(result&&result.bool&&result.links[0]){
						var card={name:result.links[0][2],isCard:true};
						trigger.player.chooseUseTarget("诵魔：使用"+get.translation(card),card,true,false);
					}
				},
				ai:{
					expose:0.2,
				},
				mod:{
					maxHandcard:function(player,num){
						return num-player.storage.sst_songmo;
					},
				},
			},
			sst_yonghun:{
				locked:false,
				init:function(player){
					player.storage.sst_yonghun=0;
				},
				mod:{
					maxHandcard:function(player,num){
						return num+player.storage.sst_yonghun;
					},
				},
				trigger:{player:"useCardAfter"},
				direct:true,
				filter:function(event,player){
					return get.tag(event.card,"damage")&&event.targets.length==1&&!player.getHistory("sourceDamage",function(evt){
						return evt.card==event.card;
					}).length;
				},
				content:function(){
					"step 0"
					player.chooseCard("he",2,get.prompt2("sst_yonghun")).set("ai",function(card){
						if(get.tag(card,"damage")){
							return 8-get.value(card);
						}
						return 5-get.value(card);
					});
					"step 1"
					if(result.cards&&result.cards.length){
						player.logSkill("sst_yonghun");
						event.cards=result.cards;
						if(player.storage.sst_yonghun2){
							player.storage.sst_yonghun2=player.storage.sst_yonghun2.concat(result.cards);
						}
						else{
							player.storage.sst_yonghun2=result.cards.slice(0);
						}
						//game.addVideo("storage",player,["sst_yonghun2",get.cardsInfo(player.storage.sst_yonghun2),"cards"]);
						player.$give(event.cards,player,false);
						game.log(player,"将",event.cards,"置于武将牌旁");
						player.addSkill("sst_yonghun2");
						player.lose(result.cards,ui.special,"toStorage");
					}
					else{
						event.finish();
					}
					"step 2"
					var bool=true;
					for(var i=0;i<event.cards.length;i++){
						if(get.tag(event.cards[i],"damage")) bool=false;
					}
					if(bool){
						player.storage.sst_yonghun++;
						player.addTempSkill("sst_yonghun3");
						player.storage.sst_yonghun3++;
					}
				},
			},
			sst_yonghun2:{
				trigger:{global:"phaseEnd"},
				forced:true,
				mark:true,
				intro:{
					content:"cards",
					onunmark:function(storage,player){
						if(storage&&storage.length){
							player.$throw(storage,1000);
							game.cardsDiscard(storage);
							game.log(storage,"被置入了弃牌堆");
							storage.length=0;
						}
					},
				},
				content:function(){
					if(player.storage.sst_yonghun2){
						player.gain(player.storage.sst_yonghun2,"gain2","fromStorage");
						delete player.storage.sst_yonghun2;
					}
					player.removeSkill("sst_yonghun2");
				},
				//group:"sst_yonghun3"
			},
			sst_yonghun3:{
				init:function(player){
					player.storage.sst_yonghun3=0;
				},
				mod:{
					cardUsable:function(card,player,num){
						if(card.name=="sha") return num+player.storage.sst_yonghun3;
					}
				},
			},
			//Fox
			sst_powei:{
				trigger:{player:"phaseDrawBegin2"},
				frequent:true,
				filter:function(event,player){
					return !event.numFixed;
				},
				content:function(){
					"step 0"
					var count=game.countPlayer(function(current){
						return current.isDamaged();
					});
					event.num=game.players.length/count<2?2:1;
					"step 1"
					trigger.num-=trigger.num-event.num<0?trigger.num:event.num;
					event.cards=game.cardsGotoOrdering(get.cards(event.num)).cards;
					player.showCards(event.cards);
					"step 2"
					if(event.cards.length>1){
						player.chooseCardButton("破围：你可以使用其中的牌",event.cards,true).set("ai",function(button){
							return _status.event.player.getUseValue(button.link);
						});
					}
					else{
						if(event.cards.length){
							event.card=event.cards[0];
							event.goto(4);
							event.goon=false;
						}
					}
					"step 3"
					if(result.links&&result.links){
						event.cards.remove(result.links[0]);
						event.card=result.links[0];
						event.goon=true;
					}
					"step 4"
					if(event.card){
						player.chooseUseTarget("破围：你可以使用"+get.translation(event.card),event.card,false);
					}
					"step 5"
					if(result.bool) event.used=true;
					if(event.goon){
						event.goto(2);
					}
					else{
						if(event.used){
							event.used=false;
							event.goto(0);
						}
					}
				},
			},
			//mii Fighters
			sst_bianshe:{
				derivation:["sst_miquan","sst_mijian","sst_miqiang"],
				trigger:{global:"roundStart"},
				forced:true,
				content:function(){
					"step 0"
					event.num=1;
					event.list=["sst_miquan","sst_mijian","sst_miqiang"];
					"step 1"
					/*
					var dialog=ui.create.dialog("hidden","forcebutton");
					dialog.addText("编设：选择获得一个技能（剩余"+get.cnNumber(event.num)+"个）");
					for(var i=0;i<event.list.length;i++){
						dialog.add("<div class=\"popup pointerdiv\" style=\"width:80%;display:inline-block\"><div class=\"skill\">【"+get.translation(event.list[i])+"】</div><div>"+lib.translate[event.list[i]+"_info"]+"</div></div>");
					}
					dialog.addText(" <br> ");
					player.chooseControl(event.list).set("ai",function(){
						return _status.event.listx.randomGet();
					}).set("listx",event.list).set("dialog",dialog);
					*/
					var descriptions=event.list.slice(0);
					for(var i=0;i<descriptions.length;i++){
						descriptions[i]="【"+get.translation(descriptions[i])+"】"+lib.translate[descriptions[i]+"_info"];
					}
					player.chooseControl().set("choiceList",descriptions);
					"step 2"
					/*
					if(result.control){
						player.popup(result.control,"thunder");
						game.log(player,"获得了技能","#g【"+get.translation(result.control)+"】");
						player.addTempSkill(result.control,"roundStart");
						event.num--;
						event.list.remove(result.control);
						if(event.num>=0) event.goto(1);
					}
					*/
					if(result.index!=undefined){
						player.popup(event.list[result.index],"thunder");
						game.log(player,"获得了技能","#g【"+get.translation(event.list[result.index])+"】");
						player.addTempSkill(event.list[result.index],"roundStart");
						event.num--;
						event.list.splice(result.index,1);
						if(event.num>=0) event.goto(1);
					}
				},
			},
			sst_miquan:{
				trigger:{player:"phaseDrawBefore"},
				direct:true,
				content:function(){
					"step 0"
					player.chooseTarget(get.prompt2("sst_miquan"),function(card,player,target){
						return player.inRange(target);
					}).set("ai",function(target){
						var player=_status.event.player;
						return get.damageEffect(target,player,player);
					});
					"step 1"
					if(result.bool){
						trigger.cancel();
						if(result.targets&&result.targets.length) event.target=result.targets[0];
						player.logSkill("sst_miquan",event.target);
					}
					"step 2"
					if(event.target){
						event.target.damage(player);
					}
				},
				ai:{
					expose:0.2,
				},
			},
			sst_mijian:{
				trigger:{player:"phaseUseBegin"},
				frequent:true,
				content:function(){
					"step 0"
					player.draw();
					"step 1"
					var next=player.chooseToUse("秘剑：你可以使用一张牌");
					next.logSkill="sst_mijian";
					next.set("addCount",false);
					/*
					"step 2"
					if(result.bool){
						player.popup(get.translation("sst_mijian"));
						game.log(player,"因","#g【"+get.translation("sst_mijian")+"】","使用了一张牌");
					}
					*/
				},
			},
			sst_miqiang:{
				locked:false,
				mod:{
					attackFrom:function(){
						return -Infinity;
					},
				},
			},
			//Alex
			sst_qiaoqi:{
				global:["sst_qiaoqi4","sst_qiaoqi5","sst_qiaoqi6","sst_qiaoqi7"],
				enable:"phaseUse",
				filterCard:function(card){
					return get.color(card)=="red";
				},
				check:function(card){
					if(card.name=="du") return 20;
					var player=_status.event.player;
					var nh=player.countCards("h");
					if(!player.needsToDiscard()){
						if(nh<3) return 0;
						if(nh==3) return 5-get.value(card);
						return 7-get.value(card);
					}
					return 10-get.useful(card);
				},
				discard:false,
				lose:false,
				delay:false,
				sync:function(sst_qiaoqi){
					/*
					if(game.online){
						return;
					}
					if(!sst_qiaoqi.cards){
						sst_qiaoqi.cards=[];
					}
					for(var i=0;i<sst_qiaoqi.cards.length;i++){
						if(!sst_qiaoqi.cards[i].parentNode||sst_qiaoqi.cards[i].parentNode.id!="special"){
							sst_qiaoqi.cards.splice(i--,1);
						}
					}
					game.broadcast(function(sst_qiaoqi,cards){
						sst_qiaoqi.cards=cards;
					},sst_qiaoqi,sst_qiaoqi.cards);
					*/
					if(game.online){
						return;
					}
					if(!sst_qiaoqi.cards){
						sst_qiaoqi.cards=[];
					}
					for(var i=0;i<sst_qiaoqi.cards.length;i++){
						if(get.position(sst_qiaoqi.cards[i])!="s"){
							sst_qiaoqi.cards.splice(i--,1);
						}
					}
					game.broadcast(function(sst_qiaoqi,cards){
						sst_qiaoqi.cards=cards;
					},sst_qiaoqi,sst_qiaoqi.cards);
				},
				filter:function(event,player){
					if(!player.countCards("h")) return false;
					if(player.hasSkill("sst_fumo")&&player.getEquip(5)) return true;
					return !player.getStat().skill["sst_qiaoqi"]||player.getStat().skill["sst_qiaoqi"]<1;
				},
				filterTarget:function(card,player,target){
					return target.countCards("e");
				},
				content:function(){
					"step 0"
					player.showCards(cards);
					"step 1"
					player.choosePlayerCard("巧器：选择一张装备牌","e",target,true);
					"step 2"
					if(result.cards&&result.cards.length){
						/*
						for(var i=0;i<cards.length;i++){
							if(!cards[i].destroyed){
								ui.special.appendChild(cards[i]);
							}
							else{
								cards[i].remove();
								cards.splice(i--,1);
							}
						}
						var muniu=result.cards[0];
						if(muniu.cards==undefined) muniu.cards=[];
						muniu.cards.push(cards[0]);
						game.broadcast(function(muniu,cards){
							muniu.cards=cards;
						},muniu,muniu.cards);
						if(get.name(muniu)!="muniu") target.markAuto("sst_qiaoqi6",cards);
						target.updateMarks();
						*/
						event.card=result.cards[0];
						player.loseToSpecial(cards,"sst_qiaoqi",target);
						player.popup(get.name(event.card));
						target.addGaintag(cards,get.translation(event.card));
						game.log(player,"将此牌扣置于",event.card,"上");
						player.$give(1,target,false);
					}
					else{
						event.finish();
					}
					"step 3"
					for(var i=0;i<cards.length;i++){
						if(cards[i].destroyed||!cards[i].hasGaintag("sst_qiaoqi")||get.position(cards[i])!="s"){
							cards[i].remove();
							cards.splice(i--,1);
						}
					}
					var muniu=event.card;
					if(!muniu||!cards.length){
						for(var i=0;i<cards.length;i++){
							cards[i].discard();
						}
						event.finish();
						return;
					}
					if(muniu.cards==undefined) muniu.cards=[];
					muniu.cards.push(cards[0]);
					game.broadcast(function(muniu,cards){
						muniu.cards=cards;
					},muniu,muniu.cards);
					target.markSkill("sst_qiaoqi6");
				},
				ai:{
					order:1,
					expose:0.1,
					result:{
						target:1,
					}
				}
			},
			sst_qiaoqi4:{
				trigger:{player:"loseEnd"},
				firstDo:true,
				filter:function(event,player){
					if(!event.es||!event.es.length) return false;
					for(var i=0;i<event.es.length;i++){
						if(event.es[i].cards&&event.es[i].cards.length) return true;
					}
					return false;
				},
				content:function(){
					var card;
					for(var i=0;i<trigger.es.length;i++){
						card=trigger.es[i];
						if((!event.getParent(2)||event.getParent(2).name!="swapEquip")&&(event.getParent().type!="equip"||event.getParent().swapEquip)){
							player.lose(card.cards,ui.discardPile);
							player.$throw(card.cards,1000);
							player.popup("sst_qiaoqi");
							game.log(card,"掉落了",card.cards);
							delete card.cards;
						}
						else{
							player.lose(card.cards,ui.special);
						}
					}
					var sst_qiaoqi=player.getCards("e");
					for(var h=0;h<sst_qiaoqi.length;h++){
						if(sst_qiaoqi[h]&&sst_qiaoqi[h].cards&&get.name(sst_qiaoqi[h])!="muniu"){
							sst_qiaoqi[h].cards.remove(trigger.cards);
							lib.skill.sst_qiaoqi.sync(sst_qiaoqi[h]);
						}
					}
					var cards=[];
					for(var h=0;h<sst_qiaoqi.length;h++){
						if(!sst_qiaoqi[h].cards||get.name(sst_qiaoqi[h])=="muniu") continue;
						lib.skill.sst_qiaoqi.sync(sst_qiaoqi[h]);
						cards.addArray(sst_qiaoqi[h].cards);
					}
					if(!cards.length) player.unmarkSkill("sst_qiaoqi6");
					player.updateMarks();
				},
			},
			sst_qiaoqi5:{
				trigger:{player:["useCardBefore","respondBefore"]},
				silent:true,
				filter:function(event,player){
					if(!event.card) return false;
					var cards=event.cards;
					for(var i=0;i<cards.length;i++){
						if(cards[i].hasGaintag("sst_qiaoqi")) return true;
					}
					return false;
				},
				content:function(){
					trigger.skill="sst_qiaoqi";
				},
			},
			sst_qiaoqi6:{
				intro:{
					content:function(storage,player){
						var cards=[];
						var sst_qiaoqi=player.getCards("e");
						for(var h=0;h<sst_qiaoqi.length;h++){
							if(!sst_qiaoqi[h].cards||get.name(sst_qiaoqi[h])=="muniu") continue;
							//lib.skill.sst_qiaoqi.sync(sst_qiaoqi[h]);
							cards.addArray(sst_qiaoqi[h].cards);
						}
						if(!cards||!cards.length) return "共有〇张牌";
						if(player.isUnderControl(true)){
							return get.translation(cards);
						}
						else{
							return "共有"+get.cnNumber(cards.length)+"张牌";
						}
					},
					mark:function(dialog,storage,player){
						var cards=[];
						var sst_qiaoqi=player.getCards("e");
						for(var h=0;h<sst_qiaoqi.length;h++){
							if(!sst_qiaoqi[h].cards||get.name(sst_qiaoqi[h])=="muniu") continue;
							//lib.skill.sst_qiaoqi.sync(sst_qiaoqi[h]);
							cards.addArray(sst_qiaoqi[h].cards);
						}
						if(!cards||!cards.length) return "共有〇张牌";
						if(player.isUnderControl(true)){
							dialog.addAuto(cards);
						}
						else{
							return "共有"+get.cnNumber(cards.length)+"张牌";
						}
					},
					markcount:function(storage,player){
						var cards=[];
						var sst_qiaoqi=player.getCards("e");
						for(var h=0;h<sst_qiaoqi.length;h++){
							if(!sst_qiaoqi[h].cards||get.name(sst_qiaoqi[h])=="muniu") continue;
							//lib.skill.sst_qiaoqi.sync(sst_qiaoqi[h]);
							cards.addArray(sst_qiaoqi[h].cards);
						}
						if(cards&&cards.length) return cards.length;
						return 0;
					}
				}
			},
			sst_qiaoqi7:{
				hiddenCard:function(player,name){
					var sst_qiaoqi=player.getCards("e");
					for(var h=0;h<sst_qiaoqi.length;h++){
						if(!sst_qiaoqi[h].cards||get.name(sst_qiaoqi[h])=="muniu") continue;
						lib.skill.sst_qiaoqi.sync(sst_qiaoqi[h]);
						for(var i=0;i<sst_qiaoqi[h].cards.length;i++){
							if(sst_qiaoqi[h].cards[i].name==name) return true;
						}
					}
					return false;
				},
				trigger:{player:"loseEnd"},
				silent:true,
				firstDo:true,
				filter:function(event,player){
					if(!event.ss||!event.ss.length) return false;
					var cards=[];
					var sst_qiaoqi=player.getCards("e");
					for(var h=0;h<sst_qiaoqi.length;h++){
						if(!sst_qiaoqi[h].cards||get.name(sst_qiaoqi[h])=="muniu") continue;
						cards.addArray(sst_qiaoqi[h].cards);
					}
					if(!cards||!cards.length) return false;
					return event.ss.filter(function(card){
						return cards.contains(card);
					}).length>0;
				},
				content:function(){
					var sst_qiaoqi=player.getCards("e");
					for(var h=0;h<sst_qiaoqi.length;h++){
						if(sst_qiaoqi[h]&&sst_qiaoqi[h].cards&&get.name(sst_qiaoqi[h])!="muniu"){
							sst_qiaoqi[h].cards.remove(trigger.cards);
							lib.skill.sst_qiaoqi.sync(sst_qiaoqi[h]);
						}
					}
					var cards=[];
					for(var h=0;h<sst_qiaoqi.length;h++){
						if(!sst_qiaoqi[h].cards||get.name(sst_qiaoqi[h])=="muniu") continue;
						lib.skill.sst_qiaoqi.sync(sst_qiaoqi[h]);
						cards.addArray(sst_qiaoqi[h].cards);
					}
					if(!cards.length) player.unmarkSkill("sst_qiaoqi6");
					player.updateMarks();
				},
			},
			sst_fumo:{
				locked:true,
				group:["sst_fumo2","sst_fumo3","sst_fumo4"],
			},
			sst_fumo2:{
				trigger:{source:"damageBegin2"},
				direct:true,
				filter:function (event,player){
					return player.getEquip(1)&&event.notLink()&&event.nature!="kami";
				},
				content:function(){
					"step 0"
					var list=lib.linked.slice(0);
					list.remove("kami");
					player.chooseControl(["普通"].concat(list),"cancel2").set("prompt",get.prompt("sst_fumo2",trigger.player)).set("prompt2","你可以指定你造成伤害的属性").set("ai",function(){
						var player=_status.event.player;
						var target=_status.event.targetx;
						var list=_status.event.listx;
						var eff=get.damageEffect(target,player,player);
						var eff2=0;
						var choice="普通";
						for(var i=0;i<list.length;i++){
							eff2=get.damageEffect(target,player,player,list[i]);
							if(eff2>eff){
								eff=eff2;
								choice=list[i];
							}
						}
						return choice;
					}).set("listx",list).set("targetx",trigger.player);
					"step 1"
					if(result.control!="cancel2"){
						player.logSkill("sst_fumo",trigger.player);
						if(result.control=="普通"){
							delete trigger.nature;
						}
						else{
							trigger.nature=result.control;
						}
						player.chat(get.translation(result.control));
						player.popup(result.control);
						game.log(player,"将对",trigger.player,"造成伤害的属性指定为","#y"+get.translation(result.control));
					}
				},
			},
			sst_fumo3:{
				trigger:{player:"damageBegin4"},
				filter:function (event,player){
					return player.getEquip(2)&&!player.inRangeOf(event.source);
				},
				forced:true,
				content:function(){
					trigger.cancel();
				},
				ai:{
					nofire:true,
					nothunder:true,
					nodamage:true,
					effect:{
						target:function(card,player,target){
							if(get.tag(card,"damage")&&target.getEquip(2)&&!player.inRangeOf(target)) return "zeroplayertarget";
						},
					},
				},
			},
			sst_fumo4:{
				mod:{
					globalFrom:function(from,to,current){
						var mount=from.getEquip(4);
						if(mount){
							var info=get.info(mount).distance;
							if(info.globalFrom) return current+info.globalFrom;
						}
					},
					globalTo:function(from,to,current){
						var mount=to.getEquip(3);
						if(mount){
							var info=get.info(mount).distance;
							if(info.globalTo) return current+info.globalTo;
						}
					},
				},
			},
			//Min Min
			sst_longbo:{
				locked:false,
				mod:{
					cardUsableTarget:function(card,player,target){
						if(target==player) return;
						if(get.color(card)=="red"&&get.distance(player,target,"absolute")>=Math.floor(game.countPlayer()/2)) return true;
						if(get.color(card)=="black"&&get.distance(player,target,"absolute")<=Math.ceil(game.countPlayer()/2)) return true;
					},
					targetInRange:function(card,player,target,now){
						return true;
					},
				},
			},
			sst_fengcu:{
				group:["sst_fengcu_sha","sst_fengcu_shan","sst_fengcu2","sst_fengcu4"],
				subSkill:{
					sha:{
						enable:["chooseToUse","chooseToRespond"],
						complexCard:true,
						filterCard:function(card){
							if(!ui.selected.cards||!ui.selected.cards.length) return true;
							return get.color(card)!=get.color(ui.selected.cards[0]);
						},
						selectCard:2,
						position:"he",
						prompt:"你可以将两张颜色不同的牌当作【杀】使用或打出",
						viewAs:{name:"sha"},
						viewAsFilter:function(player){
							if(!player.countCards("he")) return false;
						},
					},
					shan:{
						enable:["chooseToUse","chooseToRespond"],
						complexCard:true,
						filterCard:function(card){
							if(!ui.selected.cards||!ui.selected.cards.length) return true;
							return get.color(card)!=get.color(ui.selected.cards[0]);
						},
						selectCard:2,
						position:"he",
						prompt:"你可以将两张颜色不同的牌当作【闪】使用或打出",
						viewAs:{name:"shan"},
						viewAsFilter:function(player){
							if(!player.countCards("he")) return false;
						},
					},
				},
			},
			sst_fengcu2:{
				trigger:{source:"useCardAfter"},
				forced:true,
				filter:function(event,player){
					//game.log(event.getParent().skill);
					if(event.skill!="sst_fengcu_sha"&&event.skill!="sst_fengcu_shan") return false;
					return player.getHistory("sourceDamage",function(evt){
						return evt.card==event.card;
					}).length;
				},
				content:function(){
					player.addTempSkill("sst_fengcu3","roundStart");
				},
			},
			sst_fengcu3:{
				mark:true,
				//marktext:"凤",
				intro:{
					name:"凤蹴",
					name2:"凤",
					content:"你本轮造成伤害后获得目标一张牌",
				},
				trigger:{source:"damageSource"},
				forced:true,
				filter:function(event,player){
					return event.player.countCards("he");
				},
				logTarget:"player",
				content:function(){
					player.gainPlayerCard("凤蹴：获得"+get.translation(trigger.player)+"一张牌",trigger.player,"he",true);
				},
			},
			sst_fengcu4:{
				trigger:{player:["respond","useCard"]},
				filter:function(event,player){
					if(!event.respondTo) return false;
					return (event.skill=="sst_fengcu_sha"||event.skill=="sst_fengcu_shan")&&event.cards.filterInD("od").length>0;
				},
				forced:true,
				content:function(){
					var cards=[];
					if(get.itemtype(trigger.respondTo[1])=="card") cards.push(trigger.respondTo[1]);
					else if(trigger.respondTo[1].cards) cards.addArray(trigger.respondTo[1].cards);
					cards=cards.filterInD("od");
					player.gain(cards,"log","gain2");
				},
			},
			//Pikachu
			sst_fulei:{
				trigger:{player:"loseEnd"},
				filter:function(event,player){
					return (!player.hasSkill("sst_fulei_h")&&event.hs.filterInD("d").length)||
						(!player.hasSkill("sst_fulei_e")&&event.es.filterInD("d").length)||
						(!player.hasSkill("sst_fulei_j")&&event.js.filterInD("d").length);
				},
				direct:true,
				content:function(){
					"step 0"
					var cards=[];
					if(!player.hasSkill("sst_fulei_h")&&trigger.hs.filterInD("d").length){
						event.cardsh=trigger.hs.filterInD("d");
						cards.addArray(event.cardsh);
					}
					if(!player.hasSkill("sst_fulei_e")&&trigger.es.filterInD("d").length){
						event.cardse=trigger.es.filterInD("d");
						cards.addArray(event.cardse);
					}
					if(!player.hasSkill("sst_fulei_j")&&trigger.js.filterInD("d").length){
						event.cardsj=trigger.js.filterInD("d");
						cards.addArray(event.cardsj);
					}
					var goon=false;
					for(var i=0;i<cards.length;i++){
						if(cards[i].number>=7){
							goon=true;
							break;
						}
					}
					player.chooseTarget(get.prompt2("sst_fulei"),function(card,player,target){
						return player.canCompareTarget(target);
					}).set("ai",function(target){
						//if(!_status.event.goon) return 0;
						return -get.attitude(player,target);
					}).set("goon",goon);
					"step 1"
					if(result.bool){
						event.target=result.targets[0];
						player.logSkill("sst_fulei",event.target);
						var info=["伏雷：选择用于拼点的牌"];
						if(event.cardsh){
							info.push("<div class=\"text center\">来自手牌区</div>");
							info.push(event.cardsh);
						}
						if(event.cardse){
							info.push("<div class=\"text center\">来自装备区</div>");
							info.push(event.cardse);
						}
						if(event.cardsj){
							info.push("<div class=\"text center\">来自判定区</div>");
							info.push(event.cardsj);
						}
						var next=player.chooseButton();
						next.set("createDialog",info);
						next.set("forced",true);
						next.set("ai",function(button){
							return get.number(button);
						});
					}
					else{
						event.finish();
					}
					"step 2"
					if(result.links&&result.links.length){
						event.comparecard=result.links[0];
						if(event.cardsh&&event.cardsh.contains(event.comparecard)) player.addTempSkill("sst_fulei_h");
						if(event.cardse&&event.cardse.contains(event.comparecard)) player.addTempSkill("sst_fulei_e");
						if(event.cardsj&&event.cardsj.contains(event.comparecard)) player.addTempSkill("sst_fulei_j");
						player.chooseToCompare(event.target);
					}
					"step 3"
					if(result.winner==player){
						event.dotarget=true;
					}
					else if(result.tie){
						event.doplayer=true;
						event.dotarget=true;
					}
					else if(result.winner==event.target){
						event.doplayer=true;
					}
					"step 4"
					if(event.doplayer){
						player.chooseControl().set("choiceList",[get.translation(player)+"受到1点雷电伤害",get.translation(player)+"判定一次【闪电】"]).set("ai",function(){
							return 1;
						});
					}
					else{
						event.goto(11);
					}
					"step 5"
					if(result.index==0){
						player.damage(player,"thunder");
						event.goto(11);
					}
					"step 6"
					event.card=game.createCard("shandian","","");
					"step 7"
					player.lose(event.card,"visible",ui.ordering);
					player.$phaseJudge(event.card);
					"step 8"
					player.judge(event.card);
					"step 9"
					var name=event.card.viewAs||event.card.name;
					var next=game.createEvent(name);
					next.setContent(function(){
						if(result.bool==false){
							player.damage(3,"thunder","nosource");
						}
					});
					next._result=result;
					next.card=event.card;
					next.cards=[event.card];
					next.player=player;
					ui.clear();
					"step 10"
					event.card.delete();
					"step 11"
					if(event.dotarget){
						player.chooseControl().set("choiceList",[get.translation(event.target)+"受到1点雷电伤害",get.translation(event.target)+"判定一次【闪电】"]).set("ai",function(){
							return 0;
						});
					}
					else{
						event.finish();
					}
					"step 12"
					if(result.index==0){
						event.target.damage(player,"thunder");
						event.finish();
					}
					"step 13"
					event.card=game.createCard("shandian","","");
					"step 14"
					event.target.lose(event.card,"visible",ui.ordering);
					event.target.$phaseJudge(event.card);
					"step 15"
					event.target.judge(event.card);
					"step 16"
					var name=event.card.viewAs||event.card.name;
					var next=game.createEvent(name);
					next.setContent(function(){
						if(result.bool==false){
							player.damage(3,"thunder","nosource");
						}
					});
					next._result=result;
					next.card=event.card;
					next.cards=[event.card];
					next.player=event.target;
					ui.clear();
					"step 17"
					event.card.delete();
				},
				ai:{
					expose:0.2,
				},
				group:["sst_fulei_compare"],
				subSkill:{
					compare:{
						trigger:{global:"chooseToCompareBefore"},
						filter:function(event,player){
							return event.getParent().name=="sst_fulei";
						},
						silent:true,
						content:function(){
							if(!trigger.fixedResult) trigger.fixedResult={};
							trigger.fixedResult[player.playerid]=trigger.getParent().comparecard;
						},
					},
				},
			},
			sst_fulei_h:{},
			sst_fulei_e:{},
			sst_fulei_j:{},
			sst_duoshan:{
				trigger:{player:"damageBegin4"},
				filter:function(event,player){
					return player.countCards("hej");
				},
				direct:true,
				content:function(){
					"step 0"
					var choice=[];
					if(player.countCards("h")) choice.push("手牌区");
					if(player.countCards("e")) choice.push("装备区");
					if(player.countCards("j")) choice.push("判定区");
					choice.push("cancel2");
					player.chooseControl(choice).set("prompt",get.prompt2("sst_duoshan")).set("ai",function(){
						var choice=_status.event.choicex;
						if(choice.contains("判定区")) return "判定区";
						if(choice.contains("装备区")) return "装备区";
						if(choice.contains("手牌区")) return "手牌区";
						return "cancel2";
					}).set("choicex",choice);
					"step 1"
					if(result.control!="cancel2"){
						player.logSkill("sst_duoshan");
						var position="";
						switch(result.control){
							case "手牌区":position="h";break;
							case "装备区":position="e";break;
							case "判定区":position="j";break;
						}
						player.discard(player.getCards(position));
						trigger.cancel();
					}
				},
			},
			//Falco
			sst_juao:{
				intro:{
					name:"倨傲",
					content:"此次摸了#张牌",
				},
				trigger:{player:"phaseZhunbeiBegin"},
				filter:function(event,player){
					return player.hp;
				},
				direct:true,
				content:function(){
					"step 0"
					var choice=["cancel2"];
					for(var i=1;i<=player.hp;i++){
						choice.push(i);
					}
					player.chooseControl(choice).set("prompt",get.prompt2("sst_juao")).set("ai",function(){
						var player=_status.event.player;
						if(player.hp<3) return 1;
						return player.hp-2;
					});
					"step 1"
					if(result.control!="cancel2"){
						player.logSkill("sst_juao");
						player.draw(result.control);
						player.storage.sst_juao=result.control;
						player.addTempSkill("sst_juao2",{player:"phaseZhunbeiBegin"});
						player.markSkill("sst_juao");
					}
				},
			},
			sst_juao2:{
				onremove:function(player){
					player.unmarkSkill("sst_juao");
					delete player.storage.sst_juao;
				},
				trigger:{player:"changeHp"},
				filter:function(event,player){
					return player.hp<player.storage.sst_juao;
				},
				forced:true,
				content:function(){
					player.die();
				},
			},
			//Pyra/Mythra
			sst_xuanyi:{
				mark:true,
				zhuanhuanji:true,
				intro:{
					content:function(storage,player,skill){
						return player.storage.sst_xuanyi?"转换技，出牌阶段限一次，你可以与一名角色拼点，赢的一方获得没赢的一方拼点的牌，然后若你没有获得牌，你对一名角色造成1点火焰伤害。":"转换技，出牌阶段限一次，你可以与牌堆顶的一张牌拼点，赢的一方获得没赢的一方拼点的牌，然后若你没有获得牌，你对一名角色造成1点雷电伤害。";
					},
				},
				enable:"phaseUse",
				usable:1,
				prompt:function(){
					var player=_status.event.player;
					return !player.storage.sst_xuanyi?"转换技，出牌阶段限一次，你可以与一名角色拼点，赢的一方获得没赢的一方拼点的牌，然后若你没有获得牌，你对一名角色造成1点火焰伤害。":"转换技，出牌阶段限一次，你可以与牌堆顶的一张牌拼点，赢的一方获得没赢的一方拼点的牌，然后若你没有获得牌，你对一名角色造成1点雷电伤害。";
				},
				filter:function(event,player){
					if(!player.storage.sst_xuanyi){
						return game.hasPlayer(function(current){
							return player.canCompare(current);
						});
					}
					else{
						return player.countCards("h")&&ui.cardPile.childNodes.length;
					}
				},
				filterTarget:function(card,player,target){
					if(!player.storage.sst_xuanyi){
						return player.canCompare(target);
					}
					else{
						return false;
					}
				},
				selectTarget:function(){
					var player=_status.event.player;
					if(!player.storage.sst_xuanyi){
						return 1;
					}
					else{
						return -1;
					}
				},
				content:function(){
					"step 0"
					if(!player.storage.sst_xuanyi){
						event.sst_xuanyi=false;
						player.storage.sst_xuanyi=true;
						player.chooseToCompare(target);
					}
					else{
						event.sst_xuanyi=true;
						player.storage.sst_xuanyi=false;
						//与牌堆顶的一张牌拼点
						var next=game.createEvent("chooseToCompare");
						next.player=player;
						next.ai=function(card){
							if(typeof card=="string"&&lib.skill[card]){
								var ais=lib.skill[card].check||function(){return 0};
								return ais();
							}
							var player=get.owner(card);
							var getn=function(card){
								if(player.hasSkill("tianbian")&&get.suit(card)=="heart") return 13;
								return get.number(card);
							};
							var event=_status.event.getParent();
							var addi=(get.value(card)>=8&&get.type(card)!="equip")?-10:0;
							if(card.name=="du") addi+=5;
							return getn(card)-get.value(card)/2+addi;
						};
						next.setContent(lib.skill.sst_xuanyi.contentx);
						//next._args=Array.from(arguments);
					};
					"step 1"
					if(result.winner){
						event.winner=result.winner;
						event.winner.gain(event.winner==player?result.target:result.player,"gain2");
					}
					"step 2"
					if(event.winner!=player){
						var str="炫奕：对一名角色造成1点";
						str+=!event.sst_xuanyi?"火焰":"雷电";
						str+="伤害";
						player.chooseTarget(str,true).set("ai",function(target){
							return get.damageEffect(target,player,player,!_status.event.sst_xuanyi?"fire":"thunder");
						}).set("sst_xuanyi",event.sst_xuanyi);
					}
					else{
						event.finish();
					}
					"step 3"
					if(result.targets&&result.targets.length){
						player.line(result.targets[0],!event.sst_xuanyi?"fire":"thunder");
						result.targets[0].damage(player,!event.sst_xuanyi?"fire":"thunder");
					}
				},
				contentx:function(){
					"step 0"
					if(((!event.fixedResult||!event.fixedResult[player.playerid])&&player.countCards("h")==0)||!ui.cardPile.childNodes.length){
						event.result={cancelled:true,bool:false};
						return;
					}
					game.log(player,"对","#b牌堆顶","发起拼点");
					event.lose_list=[];
					"step 1"
					if(event.fixedResult&&event.fixedResult[player.playerid]){
						event.card1=event.fixedResult[player.playerid];
						event.lose_list.push([player,event.card1]);
					}
					else{
						event.localPlayer=true;
						player.chooseCard("请选择拼点牌",true).set("type","compare").set("glow_result",true).ai=event.ai;
					}
					"step 2"
					if(event.localPlayer){
						if(result.skill&&lib.skill[result.skill]&&lib.skill[result.skill].onCompare){
							result.cards=lib.skill[result.skill].onCompare(player);
							player.logSkill(result.skill);
						}
						else event.lose_list.push([player,result.cards[0]]);
						event.card1=result.cards[0];
					}
					"step 3"
					var card=get.cards()[0];
					//event.lose_list.push([player,card]);
					event.card2=card;
					"step 4"
					if(event.lose_list.length){
						game.loseAsync({
							lose_list:event.lose_list,
						}).setContent("chooseToCompareLose");
					}
					if(event.card2) game.cardsGotoOrdering(event.card2);
					"step 5"
					game.broadcast(function(){
						ui.arena.classList.add("thrownhighlight");
					});
					ui.arena.classList.add("thrownhighlight");
					game.addVideo("thrownhighlight1");
					player.$compare(event.card1,player,event.card2);
					game.log(player,"的拼点牌为",event.card1);
					game.log("#b牌堆顶","的拼点牌为",event.card2);
					event.num1=event.card1.number;
					event.num2=event.card2.number;
					event.trigger("compare");
					game.delay(0,1500);
					"step 6"
					event.result={
						player:event.card1,
						target:event.card2,
						num1:event.num1,
						num2:event.num2
					};
					var str;
					if(event.num1>event.num2){
						event.result.bool=true;
						event.result.winner=player;
						str=get.translation(player)+"拼点成功";
						player.popup("胜");
					}
					else{
						event.result.bool=false;
						str=get.translation(player)+"拼点失败";
						if(event.num1==event.num2){
							event.result.tie=true;
							player.popup("平");
						}
						else{
							event.result.winner=null;
							player.popup("负");
						}
					}
					game.broadcastAll(function(str){
						var dialog=ui.create.dialog(str);
						dialog.classList.add("center");
						setTimeout(function(){
							dialog.close();
						},1000);
					},str);
					game.delay(2);
					"step 7"
					game.broadcastAll(function(){
						ui.arena.classList.remove("thrownhighlight");
					});
					game.addVideo("thrownhighlight2");
					if(event.clear!==false){
						game.broadcastAll(ui.clear);
					}
					if(typeof event.preserve=="function"){
						event.preserve=event.preserve(event.result);
					}
					else if(event.preserve=="win"){
						event.preserve=event.result.bool;
					}
					else if(event.preserve=="lose"){
						event.preserve=!event.result.bool;
					}
				},
				ai:{
					order:5,
					expose:0.2,
					damage:true,
					result:{
						target:-1,
						player:1,
					},
				},
			},
			sst_fuxin:{
				skillAnimation:true,
				animationStr:"付心",
				animationColor:function(){
					var player=_status.event.player;
					if(!player.storage.sst_xuanyi){
						return "fire";
					}
					else{
						return "thunder";
					}
				},
				line:function(){
					var player=_status.event.player;
					if(!player.storage.sst_xuanyi){
						return "fire";
					}
					else{
						return "thunder";
					}
				},
				enable:"phaseUse",
				usable:1,
				filterTarget:function(card,player,target){
					return target!=player;
				},
				content:function(){
					"step 0"
					var name=player.name;
					var next=game.createEvent("removeCharacter");
					next.player=player;
					next.toRemove=name;
					next.setContent(function(){
						var name=player.name;
						var info=lib.character[name];
						if(!info) return;
						var to="shibing"+(info[0]=="male"?1:2)+info[1];
						game.log(player,"移除了武将牌","#b"+name);
						player.reinit(name,to,false);
					});
					"step 1"
					lib.inpile.push("sst_aegises");
					var card=game.createCard2("sst_aegises","","");
					//card.set("cardtag",["sst_ultimate"]);
					if(!_status.cardtag) _status.cardtag={};
					if(!_status.cardtag["sst_ultimate"]) _status.cardtag["sst_ultimate"]=[];
					_status.cardtag["sst_ultimate"].push(card.cardid);
					player.give(card,target,"give",true);
					target.addAdditionalSkill("sst_fuxin","sst_fuxin_card",true);
				},
				ai:{
					order:1,
					expose:0.2,
					damage:true,
					result:{
						target:3,
					},
				},
			},
			sst_fuxin_card:{
				trigger:{player:"phaseZhunbeiBegin"},
				filter:function(event,player){
					return !player.hasCard(function(card){
						return get.name(card)=="sst_aegises";
					},"hej");
				},
				frequent:true,
				content:function(){
					var card=get.cardPile("sst_aegises","field");
					if(card){
						player.gain(card,"gain2","log");
					}
				},
			},
			//Enderman
			sst_lingying:{
				forced:true,
				trigger:{target:"useCardToTarget"},
				filter:function(event,player){
					return (get.name(event.card)=="sha"||get.tag(event.card,"damage"))&&get.distance(event.player,player)>1;
				},
				content:function(){
					trigger.getParent().excluded.add(player);
				},
				ai:{
					effect:{
						target:function(card,player,target){
							if((get.name(card)=="sha"||get.tag(card,"damage"))&&get.distance(player,target)>1) return "zeroplayertarget";
						},
					},
				},
			},
			sst_fankui:{
				init:function(player){
					if(!player.storage.sst_fankui&&_status._sst_start){
						player.storage.sst_fankui={};
						var players=game.filterPlayer().sortBySeat();
						for(var i=0;i<players.length;i++){
							player.storage.sst_fankui[players[i].playerid]=player.inRangeOf(players[i]);
						}
					}
				},
				silent:true,
				forced:true,
				trigger:{
					global:[
						"gameStart",
						"phaseZhunbeiBefore","phaseJudgeBefore","phaseDrawBefore","phaseUseBefore","phaseDiscardBefore","phaseJieshuBefore",
						"phaseZhunbeiBegin","phaseJudgeBegin","phaseDrawBegin","phaseUseBegin","phaseDiscardBegin","phaseJieshuBegin",
						"phaseZhunbeiEnd","phaseJudgeEnd","phaseDrawEnd","phaseUseEnd","phaseDiscardEnd","phaseJieshuEnd",
						"phaseZhunbeiAfter","phaseJudgeAfter","phaseDrawAfter","phaseUseAfter","phaseDiscardAfter","phaseJieshuAfter",
						"useSkillBefore","useSkillBegin","useSkillEnd","useSkillAfter",
						"useCardBefore","useCardBegin","useCard","useCardEnd","useCardAfter",
						"respondBefore","respondBegin","respond","respondEnd","respondAfter",
						"triggerBefore","triggerBegin","triggerEnd","triggerAfter",
						"triggerHiddenBefore","triggerHiddenBegin","triggerHiddenEnd","triggerHiddenAfter",
						"skillBefore","skillBegin","skillEnd","skillAfter",
						"arrangeTriggerBefore","arrangeTriggerBegin","arrangeTriggerEnd","arrangeTriggerAfter",
					]
				},
				content:function(){
					"step 0"
					if(!player.storage.sst_fankui){
						player.storage.sst_fankui={};
						event.players=game.filterPlayer().sortBySeat();
						for(var i=0;i<event.players.length;i++){
							player.storage.sst_fankui[event.players[i].playerid]=player.inRangeOf(event.players[i]);
						}
						event.finish();
					}
					else{
						if(event.num==undefined) event.num=0;
						event.map={};
						event.players=game.filterPlayer().sortBySeat();
						for(var i=0;i<event.players.length;i++){
							event.map[event.players[i].playerid]=player.inRangeOf(event.players[i]);
							//game.log(event.players[i].playerid," Before：",player.storage.sst_fankui[event.players[i].playerid]);
						}
						/*
						for(var i in player.storage.sst_fankui){
							game.log(i," Before：",player.storage.sst_fankui[i]);
						}
						*/
					}
					"step 1"
					if(event.num<event.players.length){
						if(!event.player.isAlive()){
							event.num++;
							event.goto(1);
						}
					}
					else{
						event.finish();
					}
					"step 2"
					//game.log(event.players[event.num].playerid," After：",event.map[event.players[event.num].playerid]);
					//game.log(event.players[event.num].playerid," Before：",player.storage.sst_fankui[event.players[event.num].playerid]);
					if(event.map[event.players[event.num].playerid]!=undefined&&player.storage.sst_fankui[event.players[event.num].playerid]!=undefined){
						if(event.map[event.players[event.num].playerid]&&!player.storage.sst_fankui[event.players[event.num].playerid]){
							player.logSkill("sst_fankui",event.players[event.num]);
							player.gainPlayerCard("反窥：获得"+get.translation(event.players[event.num])+"区域里的一张牌",event.players[event.num],"hej",true);
						}
						player.storage.sst_fankui[event.players[event.num].playerid]=event.map[event.players[event.num].playerid];
					}
					"step 3"
					event.num++;
					event.goto(1);
				}
			},
			sst_xiangzhu:{
				init:function(player){
					if(!player.storage.sst_xiangzhu) player.storage.sst_xiangzhu=[];
				},
				trigger:{player:"phaseZhunbeiBegin"},
				filter:function(event,player){
					return game.hasPlayer(function(current){
						return current!=player&&current.countCards("e",function(card){
							return player.isEmpty(get.subtype(card));
						});
					});
				},
				direct:true,
				content:function(){
					"step 0"
					player.chooseTarget(get.prompt2("sst_xiangzhu"),function(card,player,target){
						return target!=player&&target.countCards("e",function(cardx){
							return player.isEmpty(get.subtype(cardx));
						});
					}).set("ai",function(target){
						var player=_status.event.player;
						var value=0;
						var list=target.getCards("e",function(card){
							return player.isEmpty(get.subtype(card));
						});
						for(var i=0;i<list.length;i++){
							value=Math.max(get.value(list[i]),value);
						}
						return value;
					});
					"step 1"
					if(result.targets&&result.targets.length){
						event.target=result.targets[0];
						player.logSkill("sst_xiangzhu",event.target);
						player.choosePlayerCard("向筑：将"+get.translation(event.target)+"装备区里的一张牌移动到你的装备区里",event.target,"e",true).set("filterButton",function(button){
							var player=_status.event.player;
							return player.isEmpty(get.subtype(button.link));
						});
					}
					"step 2"
					if(result.cards&&result.cards.length){
						var card=result.cards[0];
						player.storage.sst_xiangzhu.push(card);
						player.equip(card);
						target.$give(card,player);
					}
				},
				group:["sst_xiangzhu2"],
			},
			sst_xiangzhu2:{
				forced:true,
				trigger:{player:"phaseJieshuBegin"},
				filter:function(event,player){
					return player.storage.sst_xiangzhu&&player.storage.sst_xiangzhu.length;
				},
				content:function(){
					"step 0"
					if(!player.storage.sst_xiangzhu.length){
						event.finish();
					}
					else{
						event.card=player.storage.sst_xiangzhu.shift();
						if(!player.getCards("e").contains(event.card)||!game.hasPlayer(function(current){
							return current!=player&&current.isEmpty(get.subtype(event.card));
						})) event.goto(0);
					}
					"step 1"
					player.chooseTarget("向筑：将"+get.translation(event.card)+"移动到一名其他角色的装备区内",function(card,player,target){
						var cardx=_status.event.cardx;
						return target!=player&&target.isEmpty(get.subtype(cardx));
					},true).set("cardx",event.card).set("ai",function(target){
						var player=_status.event.player;
						var cardx=_status.event.cardx;
						return get.effect(target,cardx,player,player);
					});
					"step 2"
					if(result.targets&&result.targets.length){
						var target=result.targets[0];
						player.line(target,"green");
						target.equip(event.card);
						player.$give(event.card,target);
					}
					event.goto(0);
				},
			},
			//Sephiroth
			sst_fenshi:{
				init:function(player){
					if(!player.storage.sst_fenshi) player.storage.sst_fenshi=[true,true];
				},
				frequent:true,
				trigger:{player:"phaseZhunbeiBegin"},
				content:function(){
					"step 0"
					event.targets=[];
					player.chooseTarget("焚世：你可以对一名角色造成1点伤害").set("ai",function(target){
						var player=_status.event.player;
						return get.damageEffect(target,player,player);
					});
					"step 1"
					if(result.targets&&result.targets.length){
						event.targets.push(result.targets[0]);
						player.line(result.targets,"green");
						result.targets[0].damage(player);
					}
					"step 2"
					player.chooseTarget("焚世：你可以弃置一名角色两张牌",function(card,player,target){
						return target.countCards("he")>1;
					}).set("ai",function(target){
						var player=_status.event.player;
						return -get.attitude(player,target);
					});
					"step 3"
					if(result.targets&&result.targets.length){
						event.targets.push(result.targets[0]);
						player.line(result.targets,"green");
						player.discardPlayerCard("焚世：弃置"+get.translation(result.targets[0])+"两张牌",result.targets[0],2,"he",true);
					}
					"step 4"
					if(player.storage.sst_fenshi[0]&&!event.targets.contains(player)){
						player.storage.sst_fenshi[0]=false;
						player.loseMaxHp();
						game.log(player,"更改了","#g【焚世】","的描述");
						player.popup("更改描述");
					}
					if(player.storage.sst_fenshi[1]&&event.targets[0]==event.targets[1]){
						player.storage.sst_fenshi[1]=false;
						player.loseMaxHp();
						game.log(player,"更改了","#g【焚世】","的描述");
						player.popup("更改描述");
					}
				},
				ai:{
					halfneg:true,
					damage:true,
					expose:0.2,
				},
			},
			sst_xingduo:{
				init:function(player){
					player.storage.sst_xingduo=false;
				},
				intro:{
					content:"limited",
				},
				unique:true,
				mark:true,
				limited:true,
				skillAnimation:true,
				animationStr:"星堕",
				animationColor:"thunder",
				trigger:{player:"phaseJieshuBegin"},
				direct:true,
				content:function(){
					"step 0"
					player.chooseTarget(get.prompt2("sst_xingduo"),[1,3],function(card,player,target){
						return target!=player;
					}).set("ai",function(target){
						var player=_status.event.player;
						if(target.isTurnedOver()) return get.attitude(player,target);
						return -get.attitude(player,target);
					});
					"step 1"
					if(result.targets&&result.targets.length){
						event.targets=result.targets.sortBySeat();
						player.logSkill("sst_xingduo",event.targets);
						player.awakenSkill("sst_xingduo");
						player.storage.sst_xingduo=true;
						player.loseMaxHp();
					}
					else{
						event.finish();
					}
					"step 2"
					if(!event.targets.length){
						event.finish();
					}
					else{
						event.target=event.targets.shift();
						if(!event.target.isAlive()) event.goto(2);
					}
					"step 3"
					event.target.chooseControl().set("ai",function(){
						var player=_status.event.player;
						if(player.isTurnedOver()) return 1;
						if(player.hp>3||player.hp==1) return 0;
						return 1;
					}).set("choiceList",["失去一半体力（向下取整）","翻面"]);
					"step 4"
					if(result.index!=undefined){
						switch(result.index){
							case 0:{
								if(Math.floor(event.target.hp/2)) event.target.loseHp(Math.floor(event.target.hp/2));
								break;
							}
							case 1:{
								event.target.turnOver();
								break;
							}
						}
					}
					event.goto(2);
				},
				ai:{
					jueqing:true,
					expose:0.2,
				},
			},
			//Blue
			sst_jiliu:{
				init:function(player){
					if(!player.storage.sst_jiliu) player.storage.sst_jiliu=0;
				},
				derivation:["sst_maosheng","sst_menghuo"],
				forced:true,
				trigger:{source:"damageSource"},
				content:function(){
					"step 0"
					var num=game.countPlayer(function(current){
						return get.distance(player,current)<=1;
					});
					if(num) player.draw(num);
					"step 1"
					if(!player.hasSkill("sst_jiliu2")){
						player.storage.sst_jiliu=0;
						player.addTempSkill("sst_jiliu2");
					}
					player.storage.sst_jiliu++;
					"step 2"
					player.removeSkill("sst_jiliu");
					game.log(player,"失去了技能","#g【激流】");
					player.addSkillLog("sst_maosheng");
				},
			},
			sst_jiliu2:{
				mod:{
					globalFrom:function(from,to,distance){
						if(typeof from.storage.sst_jiliu=="number"){
							return distance-from.storage.sst_jiliu;
						}
					},
				},
			},
			sst_maosheng:{
				forced:true,
				trigger:{player:["useCard","respond"]},
				filter:function(event,player){
					return game.countPlayer(function(current){
						return get.distance(player,current)<=1;
					});
				},
				content:function(){
					"step 0"
					var num=game.countPlayer(function(current){
						return get.distance(player,current)<=1;
					});
					player.chooseTarget("茂盛：你对至多"+get.cnNumber(num)+"名角色：1. 若其未横置，横置之；2. 若其已横置，弃置其一张牌，若如此做，技能结算完成后你失去〖茂盛〗，获得〖猛火〗",[1,num]).set("ai",function(target){
						return -get.attitude(_status.event.player,target);
					});
					"step 1"
					if(result.targets&&result.targets.length){
						event.targets=result.targets.sortBySeat();
						player.line(event.targets,"green");
						event.num=0;
					}
					else{
						event.finish();
					}
					"step 2"
					if(event.num<event.targets.length){
						if(!event.targets[event.num].isLinked()){
							event.targets[event.num].link();
						}
						else{
							player.discardPlayerCard("茂盛：弃置"+get.translation(event.targets[event.num])+"一张牌",event.targets[event.num],true);
						}
						event.num++;
						event.redo();
					}
					"step 3"
					player.removeSkill("sst_maosheng");
					game.log(player,"失去了技能","#g【茂盛】");
					player.addSkillLog("sst_menghuo");
				},
				ai:{
					expose:0.3,
				},
			},
			sst_menghuo:{
				forced:true,
				trigger:{source:"damageBegin2"},
				content:function(){
					trigger.nature="fire";
				},
				group:["sst_menghuo2","sst_menghuo3"],
			},
			sst_menghuo2:{
				forced:true,
				trigger:{player:"useCard"},
				filter:function(event,player){
					return get.name(event.card)=="juedou";
				},
				content:function(){
					"step 0"
					player.loseHp();
					"step 1"
					if(typeof trigger.baseDamage!="number"){
						trigger.baseDamage=1;
					}
					trigger.baseDamage++;
					/*
					var id=player.playerid;
					var map=trigger.customArgs;
					if(!map[id]) map[id]={};
					if(!map[id].extraDamage) map[id].extraDamage=0;
					map[id].extraDamage++;
					*/
				},
			},
			sst_menghuo3:{
				forced:true,
				trigger:{global:"dying"},
				filter:function(event,player){
					if(get.distance(player,event.player)>1) return false;
					var evt=event.getParent();
					return evt&&evt.name=="damage"&&evt.source==player;
				},
				content:function(){
					player.removeSkill("sst_menghuo");
					game.log(player,"失去了技能","#g【猛火】");
					player.addSkillLog("sst_jiliu");
				},
			},
			//Geno
			sst_xingjiang:{
				enable:"phaseUse",
				usable:1,
				delay:false,
				content:function(){
					"step 0"
					event.card=get.cards()[0];
					game.cardsGotoOrdering(event.card);
					player.showCards(event.card);
					"step 1"
					player.chooseToDiscard("星降：你可以弃置一张牌，然后若与"+get.translation(event.card)+"的类型、花色、点数：1. 其中一项相同，你可以弃置场上一张牌；2. 其中两项相同，你可以对一名角色造成1点伤害；3. 其中三项相同，你可以令一名角色翻面。","he").set("ai",function(card){
						var player=_status.event.player;
						var cardx=_status.event.cardx;
						var num=0;
						if(get.type(card,"trick")==get.type(cardx,"trick")) num++;
						if(get.color(card)==get.color(cardx)) num++;
						if(get.number(card)==get.number(cardx)) num++;
						if(num){
							if(num==1&&game.hasPlayer(function(current){
								var att=get.attitude(player,current);
								if(att==0) return false;
								if(att<0) return current.countCards("e",function(card){
									return get.value(card,current)>5;
								})>0;
								return current.countCards("ej",function(card){
									return get.position(card)=="j"||get.value(card,current)<=0;
								})>0;
							})) return 7-get.value(card);
							return 6-get.value(card)+num;
						}
					}).set("cardx",event.card);
					"step 2"
					if(result.cards&&result.cards.length){
						var card=result.cards[0];
						event.num=0;
						if(get.type(card,"trick")==get.type(event.card,"trick")) event.num++;
						if(get.color(card)==get.color(event.card)) event.num++;
						if(get.number(card)==get.number(event.card)) event.num++;
						if(event.num){
							var str="";
							switch(event.num){
								case 1:{
									str="弃置场上一张牌";
									break;
								}
								case 2:{
									str="对一名角色造成1点伤害";
									break;
								}
								case 3:{
									str="令一名角色翻面";
									break;
								}
							}
							player.chooseTarget("星降：你可以"+str,function(card,player,target){
								var num=_status.event.num;
								if(num==1) return target.countDiscardableCards(player,"ej");
								return true;
							}).set("ai",function(target){
								var player=_status.event.player;
								var num=_status.event.num;
								switch(event.num){
									case 1:{
										var att=get.attitude(player,target);
										if(att>0&&target.countCards("ej",function(card){
											return get.position(card)=="j"||get.value(card,target)<=0;
										})) return 2*att;
										else if(att<0&&target.countCards("e",function(card){
											return get.value(card,target)>5;
										})) return -att;
									}
									case 2:{
										return get.damageEffect(target,player);
									}
									case 3:{
										if(target.hasSkillTag("noturn")) return 0;
										if(target.classList.contains("turnedover")) return get.attitude(player,target);
										return -get.attitude(player,target);
									}
								}
								return;
							}).set("num",event.num);
						}
						else{
							event.finish();
						}
					}
					"step 3"
					if(result.targets&&result.targets.length){
						var target=result.targets[0];
						player.line(target,"green");
						switch(event.num){
							case 1:{
								player.discardPlayerCard("星降：弃置"+get.translation(target)+"场上的一张牌",target,"ej",true);
								break;
							}
							case 2:{
								target.damage(player);
								break;
							}
							case 3:{
								target.turnOver();
								break;
							}
						}
					}
				},
				ai:{
					order:5,
					result:{
						player:1,
					},
					expose:0.2,
				},
			},
			sst_fuyuan:{
				trigger:{global:"phaseJieshuBegin"},
				filter:function(event,player){
					return player.getHistory("gain").length||player.getHistory("lose").length;
				},
				direct:true,
				content:function(){
					"step 0"
					event.num_draw=0;
					player.getHistory("gain",function(evt){
						event.num_draw+=evt.cards.length;
					});
					event.num_draw=Math.min(7,event.num_draw);
					event.num_discard=0;
					player.getHistory("lose",function(evt){
						event.num_discard+=evt.cards.length;
					});
					event.num_discard=Math.min(7,event.num_discard);
					var str="一名角色的结束阶段，你可以令一名角色";
					if(event.num_draw) str+="摸"+get.cnNumber(event.num_draw)+"张牌";
					if(event.num_draw&&event.num_discard) str+="，然后";
					if(event.num_discard) str+="弃置"+get.cnNumber(event.num_discard)+"张牌";
					str+="。若其因此手牌数与其体力值相等，你可以观看牌堆顶一张牌，然后你可以使用此牌";
					player.chooseTarget(get.prompt("sst_fuyuan"),str).set("ai",function(target){
						if(_status.event.num_draw==_status.event.num_discard&&target.countCards("he")==0){
							return 0;
						}
						if(_status.event.num_draw<_status.event.num_discard) return -get.attitude(_status.event.player,target);
						return get.attitude(_status.event.player,target);
					}).set("num_draw",event.num_draw).set("num_discard",event.num_discard);
					"step 1"
					if(result.targets&&result.targets.length){
						event.target=result.targets[0];
						player.logSkill("sst_fuyuan",event.target);
						event.target.draw(event.num_draw);
						event.target.chooseToDiscard("复愿：弃置"+get.cnNumber(event.num_discard)+"张牌",event.num_discard,true,"he");
					}
					else{
						event.finish();
					}
					"step 2"
					if(event.target.countCards("h")==event.target.hp){
						event.card=get.cards()[0];
						game.log(player,"观看了牌堆顶的一张牌");
						player.chooseControl("ok").set("dialog",["复愿",event.card]);
					}
					else{
						event.finish();
					}
					"step 3"
					ui.cardPile.insertBefore(event.card,ui.cardPile.firstChild);
					game.updateRoundNumber();
					"step 4"
					player.chooseUseTarget(event.card,false);
				},
				ai:{
					expose:0.2,
				},
			},
		},//技能（必填）
		dynamicTranslate:{
			sst_shenfa:function(player){
				if(player.storage.sst_shenfa1){
					if(player.storage.sst_shenfa2) return "锁定技，你使用【杀】指定目标后，你令此【杀】不可被响应，且此【杀】伤害+1。";
					return "锁定技，你使用【杀】指定目标后，你选择一项：此【杀】不可被响应，或此【杀】伤害+1。";
				}
				return "锁定技，你使用【杀】指定目标后，你令目标角色选择一项：此【杀】不可被响应，或此【杀】伤害+1。";
			},
			sst_qixiao:function(player){
				if(player.storage.sst_qixiao) return "出牌阶段限两次，你可以失去两点体力，视为对至多两名角色使用火【杀】（不受使用次数限制），你每以此法造成伤害后，摸两张牌。";
				return "出牌阶段限一次，你可以失去一点体力，视为对一名角色使用火【杀】（不受使用次数限制），你每以此法造成伤害后，摸一张牌。";
			},
			sst_chixing:function(player){
				return "你使用的最后一张牌为红色的回合结束后，你可以令至多｛<span class=\"bluetext\">"+player.storage.sst_chixing+"</span>｝名角色将手牌数调整到与你另外指定的一名角色相等。";
			},
			sst_diebu:function(player){
				if(player.storage.sst_diebu) return "转换技，你可以视为使用一张①【杀】<span class=\"bluetext\">②【闪】</span>。";
				return "转换技，你可以视为使用一张<span class=\"bluetext\">①【杀】</span>②【闪】。";
			},
			sst_guaibi:function(player){
				var num=player.storage.sst_guaibi||1;
				return "每轮限｛<span class=\"bluetext\">"+num+"</span>｝次，一张【杀】指定目标前，你可以弃置一名角色的两张牌，令其成为此【杀】的使用者，然后该角色可以为此【杀】重新指定目标。";
			},
			sst_shenbi:function(player){
				var str="你可以将手牌数调整至比当前回合角色少1，视为使用或打出一张无距离限制的【杀】";
				if(!player.storage.sst_shenbi_ready.length){
					str+="。";
				}
				else{
					str+="，然后选择你未选择过的一项：";
					for(var i=0;i<player.storage.sst_shenbi_ready.length;i++){
						switch(player.storage.sst_shenbi_ready[i]){
							case "下一张【杀】伤害+1":{
								str+="<span class=\"bluetext\">1. 你使用的下一张【杀】伤害+1</span>";
								break;
							}
							case "此【杀】不可被响应":{
								str+="<span class=\"bluetext\">2. 此【杀】不可被响应</span>";
								break;
							}
							case "失去一点体力":{
								str+="<span class=\"bluetext\">3. 失去一点体力</span>";
								break;
							}
						}
						if(i==player.storage.sst_shenbi_ready.length-1){
							str+="。";
						}
						else{
							str+="；";
						}
					}
					str+="然后若均已选择过或你体力值为1，重置此技能。";
				}
				return str;
			},
			sst_xuanyi:function(player){
				if(player.storage.sst_xuanyi) return "转换技，出牌阶段限一次，你可以与①一名角色<span class=\"bluetext\">②牌堆顶的一张牌</span>拼点，赢的一方获得没赢的一方拼点的牌，然后若你没有获得牌，你对一名角色造成1点①火焰<span class=\"bluetext\">②雷电伤害</span>。";
				return "转换技，出牌阶段限一次，你可以与<span class=\"bluetext\">①一名角色</span>②牌堆顶的一张牌拼点，赢的一方获得没赢的一方拼点的牌，然后若你没有获得牌，你对一名角色造成1点<span class=\"bluetext\">①火焰</span>②雷电伤害。";
			},
			sst_juezhan:function(player){
				var str="锁定技，｛<span class=\"bluetext\">";
				if(player.storage.sst_juezhan[0]) str+="你带有「伤害」标签的牌均视为【杀】。";
				str+="</span>｝｛<span class=\"bluetext\">";
				if(player.storage.sst_juezhan[1]) str+="你使用牌不能指定与你距离1以外的目标。";
				str+="</span>｝｛<span class=\"bluetext\">";
				if(player.storage.sst_juezhan[2]) str+="你的装备区被废除。";
				str+="</span>｝";
				return str;
			},
			sst_fenshi:function(player){
				var str="准备阶段各限一次：1. 你可以对一名角色造成1点伤害；2. 你可以弃置一名角色两张牌。｛<span class=\"bluetext\">";
				if(player.storage.sst_fenshi[0]) str+="若你没有指定自己，你减1点体力上限并删除此内容。";
				str+="</span>｝｛<span class=\"bluetext\">";
				if(player.storage.sst_fenshi[1]) str+="若你一回合两次指定了同一名角色，你减1点体力上限并删除此内容。";
				str+="</span>｝";
				return str;
			},
		},
		/*
		characterReplace:{
			sst_mario:["sst_mario","sst_dr_mario"],
			sst_link:["sst_link","sst_young_link","sst_toon_link"],
			sst_zelda:["sst_zelda","sst_sheik"],
			sst_samus:["sst_samus","sst_zero_suit_samus"],
			sst_byleth_male:["sst_byleth_male","sst_byleth_female"],
		},//武将替换
		*/
		translate: {
			//士兵
			shibing1sst_light:"光兵",
			shibing2sst_light:"光兵",
			shibing1sst_darkness:"暗兵",
			shibing2sst_darkness:"暗兵",
			shibing1sst_spirit:"魂兵",
			shibing2sst_spirit:"魂兵",
			shibing1sst_reality:"现兵",
			shibing2sst_reality:"现兵",
			shibing1sst_smash:"斗兵",
			shibing2sst_smash:"斗兵",
			//武将
			sst_mario:"马力欧",
			sst_link:"林克",
			sst_yoshi:"耀西",
			sst_wario:"瓦力欧",
			sst_villager:"村民",
			sst_zelda:"塞尔达",
			sst_ganondorf:"盖侬多夫",
			sst_dr_mario:"SP马力欧",
			sst_palutena:"帕露蒂娜",
			sst_marth:"马尔斯",
			sst_rosalina:"罗莎塔",
			sst_zero_suit_samus:"SP萨姆斯",
			sst_luigi:"路易吉",
			sst_bowser:"酷霸王",
			sst_peach:"桃花公主",
			sst_byleth_female:"贝雷丝",
			sst_byleth_male:"贝雷特",
			sst_massy:"绯和雅也",
			sst_samus:"萨姆斯",
			sst_ridley:"利德雷",
			sst_dark_samus:"黑暗萨姆斯",
			sst_mr_game_watch:"代码人",
			sst_mnm:"莫奈门",
			sst_yumiko:"柚子",
			sst_haine:"海涅",
			sst_terry:"特瑞",
			sst_simon:"西蒙",
			sst_incineroar:"炽焰咆哮虎",
			sst_greninja:"甲贺忍蛙",
			sst_kirby:"卡比",
			sst_k_rool:"库鲁鲁",
			sst_donkey_kong:"森喜刚",
			sst_richter:"里希特",
			sst_pokemon_trainer_red:"赤红",
			sst_isabelle:"西施惠",
			sst_chrom:"库洛姆",
			sst_daisy:"菊花公主",
			sst_meta_knight:"魅塔骑士",
			sst_little_mac:"小麦克",
			sst_lucina:"露琪娜",
			sst_oc:"欧西",
			sst_mr_8:"八爷",
			sst_dark_link:"暗黑林克",
			sst_kyuukou:"鸿渐",
			sst_windier:"翎烈",
			sst_rentianshu:"任天鼠",
			sst_srf:"希尔凡",
			sst_bowser_jr:"小酷霸王",
			sst_koopalings:"酷霸王七子",
			sst_ryu:"隆",
			sst_ken:"肯",
			sst_sans:"衫斯",
			sst_waluigi:"瓦路易吉",
			sst_master_hand:"大师之手",
			sst_ike:"艾克",
			sst_sheik:"希克",
			sst_miumiu:"缪缪",
			sst_toon_link:"SP林克",
			sst_wolf:"沃鲁夫",
			sst_young_link:"幼年林克",
			sst_ocarina_of_time_link:"时笛林克",
			sst_spring_man:"弹簧人",
			sst_joker:"雨宫莲",
			sst_rex:"莱克斯",
			sst_cuphead_mugman:"杯子兄弟",
			sst_krystal:"水晶",
			sst_snake:"固蛇",
			sst_mega_man:"洛克人",
			sst_captain_falcon:"飞隼队长",
			sst_jigglypuff:"胖丁",
			sst_lucario:"路卡利欧",
			sst_pichu:"皮丘",
			sst_dedede:"帝帝帝",
			sst_corrin:"神威",
			sst_corrin_male:"神威",
			sst_corrin_female:"神威",
			sst_steve:"史蒂夫",
			sst_ma:"马老师",
			sst_feiji:"飞机",
			sst_sonic:"索尼克",
			sst_hero:"勇者",
			sst_fox:"火狐",
			sst_mii_fighters:"秘斗士",
			sst_alex:"艾莉克斯",
			sst_min_min:"面面",
			sst_pikachu:"皮卡丘",
			sst_falco:"佛克",
			sst_pyra_mythra:"焰／光",
			sst_enderman:"末影人",
			sst_sephiroth:"萨菲罗斯",
			sst_pokemon_trainer_blue:"碧蓝",
			sst_geno:"基诺",
			//身份技能
			sst_jueyi:"决意",
			sst_jueyi_info:"锁定技，你使用牌指定目标时，若其手牌数大于你，你摸一张牌，令此牌不可被目标响应。",
			sst_qingyong:"倾勇",
			sst_qingyong_info:"出牌阶段开始时，你可以摸一张牌，然后你可以将一张牌当作【杀】对一名其他角色使用（不受距离限制，不计入使用次数）。",
			sst_tanshi:"贪食",
			sst_tanshi_info:"其他角色摸牌阶段摸牌时，若其手牌数大于你，你可以获得该角色所摸的牌。",
			sst_haoduo:"豪夺",
			sst_haoduo_info:"当你不因此技能获得或失去手牌后，若你的手牌数为全场最少，你可以与手牌最多的角色交换手牌。",
			sst_huandai:"还贷",
			sst_huandai2:"还贷",
			sst_huandai_info:"准备阶段，你可以令一名其他角色选择是否交给你任意张手牌，若其选择是，则结束阶段，若你本回合使用牌数不小于其交给你的牌数，其摸等量的牌，否则你受到其造成的1点伤害。",
			sst_anzhi:"安智",
			sst_anzhi_info:"一名角色使用牌时，若该角色于本回合内使用超过X张牌，你可以弃置其一张牌。（X为你的装备栏数）",
			sst_yinjie:"印结",
			sst_yinjie2:"印结",
			sst_yinjie_info:"其他角色的准备阶段，若其体力值不小于你，你可以废除一个装备栏并弃置所有手牌令你与其相互距离为1，然后该角色本回合内使用牌只能指定你为目标，结束阶段，你获得其所有牌。",
			sst_qinwei:"亲卫",
			sst_qinwei_info:"主公技，锁定技，你视为拥有计算与你距离最近的本势力角色的装备效果。",
			sst_chengli:"逞力",
			sst_chengli2:"逞力",
			sst_chengli3:"逞力",
			sst_chengli4:"逞力",
			sst_chengli_info:"锁定技，若你未受伤，结束阶段，你失去1点体力。若你已受伤，你可以将一张牌当作任意一张基本牌或普通锦囊牌使用。",
			sst_huoluan:"祸乱",
			sst_huoluan2:"祸乱",
			sst_huoluan_info:"锁定技，你使用牌结算后，你须弃置X张牌（X为你本回合使用牌的次数，若在你的回合内则-1）。你失去最后的手牌时，减1点体力上限。",
			sst_yane:"延厄",
			sst_yane_info:"主公技，同势力角色的准备阶段，你可以对其造成1点伤害，令其摸两张牌。",
			sst_quji:"祛疾",
			sst_quji2:"祛疾",
			sst_quji_info:"牌堆顶的牌始终对你可见；每回合限一次，一名角色使用牌时，你可以弃置牌堆顶或你手牌中的一张花色与之相同的牌，取消之。",
			sst_qiji:"奇迹",
			sst_qiji_info:"出牌阶段每种选项各限一次：1. 你可以翻面，令一名角色摸三张牌；2. 你可以弃置三张牌，令一名角色翻面。",
			sst_shengbing:"圣兵",
			sst_shengbing2:"圣兵",
			sst_shengbing3:"圣兵",
			sst_shengbing_info:"你失去装备区内的牌时，你可以将其置入一名其他角色的装备区，然后该角色须弃置一张牌且下一个出牌阶段可以额外使用一张【杀】。",
			sst_hanmang:"寒芒",
			sst_hanmang_info:"锁定技，你对一名角色造成伤害前，若你计算与该角色的距离与你的攻击范围相同，你令此伤害+1。",
			sst_jianbu:"剑步",
			sst_jianbu_less:"剑步",
			sst_jianbu_more:"剑步",
			sst_jianbu_info:"摸牌阶段，你可以：1. 少摸一张牌，本回合你计算与其他角色距离-1；2. 额外摸一张牌，本回合你计算与其他角色距离+1。",
			sst_xingchen:"星尘",
			sst_xingchen_info:"每当你的手牌因弃置而进入弃牌堆前，你可以将这些牌任意分配给其他角色，然后当前回合角色摸一张牌。",
			sst_zhuansheng:"转生",
			sst_zhuansheng_info:"限定技，一名角色死亡前，你可以弃置你区域内的所有牌，令其变更武将牌，将体力上限调整至与新的武将牌相同，然后回复体力至上限的一半。",
			sst_guangsuo:"光索",
			sst_guangsuo2:"光索",
			sst_guangsuo_info:"你使用【杀】结算完成后，你可以横置目标。你的回合内，已横置的其他角色不能使用或打出牌。",
			sst_qingying:"轻影",
			sst_qingying2:"轻影",
			sst_qingying_info:"出牌阶段限一次，你可以弃置场上的一张牌，若你以此法弃置了你区域内的牌，你摸两张牌且本回合使用牌无距离与次数限制。",
			sst_que:"驱厄",
			sst_que_info:"准备阶段，你可以观看一名其他角色的手牌，然后获得其中至多X+1张黑色牌。（X为你已损失的体力值）",
			sst_guiyun:"诡运",
			sst_guiyun2:"诡运",
			sst_guiyun_info:"锁定技，回合结束阶段，若你于本回合内未使用或弃置过任何牌，取消你即将受到的所有伤害直到你的下一个准备阶段。",
			sst_xiduo:"袭夺",
			sst_xiduo_info:"准备阶段，你可以令所有体力值小于你的角色选择一项：1. 令你获得其一张牌；2. 本回合你对其使用牌无距离与次数限制且其非锁定技失效。",
			sst_xiongao:"雄傲",
			sst_xiongao_info:"锁定技，若你的手牌数不小于体力值，你不能响应其他角色使用的牌。",
			sst_yujun:"驭军",
			sst_yujun2:"驭军",
			sst_yujun3:"驭军",
			sst_yujun_info:"主公技，本势力角色需要使用【杀】时，经你允许后，其可以将你的一张手牌当作【杀】使用。",
			sst_hongyan:"红颜",
			sst_hongyan_info:"锁定技，你区域内的♠牌和♠判定牌均视为♥。",
			sst_yice:"议策",
			sst_yice_info:"你成为基本牌或普通锦囊牌的目标时，你可以与一名不是目标的角色同时展示并交换一张手牌，若展示时颜色相同，此牌对你无效；不同，该角色摸一张牌。",
			sst_qiuyuan:"求援",
			sst_qiuyuan2:"求援",
			sst_qiuyuan_info:"主公技，你成为带有「伤害」标签的锦囊或【杀】的目标前，其他本势力角色可以摸一张牌，将目标改为自己。",
			sst_potian:"破天",
			sst_potian2:"破天",
			sst_potian_info:"准备阶段，你可以重铸任意张花色不同的牌，然后你令你使用的【杀】基础伤害为X直到回合结束（X为你以此法置入弃牌堆的基本牌数量）。",
			sst_shenjiao:"身教",
			sst_shenjiao2:"身教",
			sst_shenjiao_info:"你重铸的牌置入弃牌堆前，你可以将这些牌交给一名其他角色，若这些牌是因〖破天〗重铸的，你令该角色于其下一个回合内拥有〖破天〗。",
			sst_yanchuan:"言传",
			sst_yanchuan_info:"出牌阶段限一次，你可以交给一名其他角色一张牌，然后你摸X张牌（X为你此前使用此技能指定该角色的次数）。",
			sst_tianmai:"天脉",
			sst_tianmai_info:"限定技，一名其他角色的濒死阶段，你可以令其将体力回复至与本回合开始相同，其重置武将牌，当前回合结束，由该角色的回合开始一个新的轮次。",
			sst_shenfa:"神罚",
			sst_shenfa_info:"锁定技，你使用【杀】指定目标后，你令目标角色选择一项：此【杀】不可被响应，或此【杀】伤害+1。",
			sst_shenwu:"神悟",
			sst_shenwu_info:"锁定技，结束阶段，若你本回合内未造成过伤害，你摸一张牌，然后若〖神罚〗不为最高级，你减1点体力上限，升级〖神罚〗。<br>"+
			"*〖神罚〗二级：改为由自己选择一项效果。三级：改为同时具有两种效果。",
			sst_qiongtu:"茕途",
			sst_qiongtu2:"茕途",
			sst_qiongtu3:"茕途",
			sst_qiongtu4:"茕途",
			sst_qiongtu_info:"每当你造成一次伤害，你的摸牌阶段摸牌数+1；每当你于弃牌阶段弃置一张牌，你的攻击范围+1；每当你使用牌被响应，你的体力上限+1（以上三项均至多+3）。然后你可以删除〖绝战〗一个｛｝内的内容。",
			sst_juezhan:"绝战",
			sst_juezhan_info:"锁定技，｛你带有「伤害」标签的牌均视为【杀】。｝｛你使用牌不能指定与你距离1以外的目标。｝｛你的装备区被废除。｝",
			sst_baozheng:"暴征",
			sst_baozheng2:"暴征",
			sst_baozheng_info:"锁定技，摸牌阶段，你放弃摸牌，失去一点体力，获得X名其他角色区域内的各一张牌（X为你已损失的体力值）；本回合内你可以将这些牌视为【杀】使用。",
			sst_furan:"复燃",
			sst_furan_info:"锁定技，当你处于濒死状态时，弃置所有手牌，将体力回复至1点，减1点体力上限。",
			sst_yingliu:"影流",
			sst_yingliu_info:"锁定技，准备阶段结束后，你执行一个额外的摸牌阶段与出牌阶段。",
			sst_shunxing:"瞬形",
			sst_shunxing2:"瞬形·摸牌",
			sst_shunxing3:"瞬形·出牌",
			sst_shunxing_info:"你可以跳过你的一个摸牌阶段，然后获得其他角色区域内的一张牌；你可以跳过你的一个出牌阶段，然后重铸任意张红色手牌。",
			sst_shenpan:"审判",
			sst_shenpan_info:"你使用杀或普通锦囊牌指定唯一目标后，你可以判定，若判定结果：<br>"+
			"为1，你失去一点体力；<br>"+
			"为2，你弃置一张牌；<br>"+
			"为3，此牌不可响应；<br>"+
			"为4，你对其造成1点伤害；<br>"+
			"为5，你对其造成1点雷电伤害；<br>"+
			"为6，你对其造成1点火焰伤害；<br>"+
			"为7，你回复一点体力；<br>"+
			"为8，你令其翻面；<br>"+
			"为9，你对其造成3点伤害。",
			sst_qixiao:"奇嚣",
			sst_qixiao2:"奇嚣",
			sst_qixiao_info:"出牌阶段限一次，你可以失去一点体力，视为对一名角色使用火【杀】（不受使用次数限制），你每以此法造成伤害后，摸一张牌。",
			sst_xuansha:"喧杀",
			sst_xuansha2:"喧杀",
			sst_xuansha_info:"觉醒技，准备阶段，若你的体力值为1，你增加1点体力上限，然后将〖奇嚣〗描述中的“一”全部修改为“两”，“两名角色”修改为“至多两名角色”，本回合你的手牌均视为【桃】。",
			sst_yingji:"鹰击",
			sst_yingji_info:"出牌阶段限一次，你可以令一名其他角色摸X-1张牌（若为〇则不摸牌），视为对其使用一张不计入次数的【杀】。（X为你计算与其的距离）。",
			sst_huxiao:"虎啸",
			sst_huxiao_info:"一名角色使用【杀】时，你可以弃置一张红色牌，然后为此【杀】指定一个额外目标。",
			sst_yiqing:"移情",
			sst_yiqing_info:"锁定技，你使用牌指定唯一目标角色后，若其不是你上一张牌指定的目标，你摸一张牌。",
			sst_mingxi:"明析",
			sst_mingxi_info:"出牌阶段结束时，若你于此阶段内至少使用了两张牌且：1. 目标均不同；2. 类型均不同；3. 花色均不同；你每满足一项，可展示一名角色的手牌。",
			sst_elang:"饿狼",
			sst_elang2:"饿狼",
			sst_elang_info:"准备阶段，你可以视为对一名手牌数不小于你的角色使用一张【决斗】，若如此做，结算结束后，你可以获得此【决斗】流程内打出的所有【杀】。",
			sst_paoxiao:"咆哮",
			sst_paoxiao_info:"锁定技，你使用【杀】无出牌阶段次数限制，每当你于本回合使用第二张【杀】时，你可以摸一张牌。",
			sst_shengfa:"圣罚",
			sst_shengfa2:"圣罚",
			sst_shengfa_info:"其他角色的准备阶段，你可以摸一张牌；若如此做，此回合结束阶段，若该角色于本回合内：未造成伤害，你受到1点伤害；造成了伤害，你对其造成1点伤害。",
			sst_shengbian:"圣鞭",
			sst_shengbian_info:"锁定技，你的攻击范围为你的手牌数。",
			sst_weihe:"威吓",
			sst_weihe2:"威吓",
			sst_weihe_info:"锁定技，你使用【杀】对一名角色造成伤害后，你令该角色即将造成的伤害-1直至其下个回合结束。",
			sst_fuchou:"复仇",
			sst_fuchou_bg:"复仇",
			sst_fuchou1:"复仇",
			sst_fuchou2:"复仇",
			sst_fuchou3:"复仇",
			sst_fuchou3_backup:"复仇",
			sst_fuchou4:"复仇",
			sst_fuchou5:"复仇",
			sst_fuchou_info:"每轮游戏开始时，你可以令自己本轮不能响应牌，若如此做，本轮你受到伤害后，你可以将造成伤害的牌置于你的武将牌上。你可以将这些牌如手牌般使用或打出，你使用这些牌造成伤害时，此伤害+1。",
			sst_fuchou1_info:"你受到伤害后，你可以将造成伤害的牌置于你的武将牌上。你可以将这些牌如手牌般使用或打出，你使用这些牌造成伤害时，此伤害+1。",
			sst_huanbian:"幻变",
			sst_huanbian2:"幻变",
			sst_huanbian3:"幻变",
			sst_huanbian_info:"每回合每种牌名限一次，你可以将一张牌当作你使用的上一张基本牌或普通锦囊牌使用。",
			sst_yingxi:"影袭",
			sst_yingxi_info:"你受到伤害前，你可以弃置伤害来源的一张牌。",
			sst_qushi:"取噬",
			sst_qushi_info:"你对一名角色造成伤害后，你可以摸一张牌，或获得该角色的一个没有技能类型的技能直到你受到伤害后。",
			sst_xinghuo:"星火",
			sst_xinghuo2:"星火",
			sst_xinghuo_info:"其他角色死亡后，其可以令你摸一张牌或回复一点体力。",
			sst_badao:"霸岛",
			sst_badao_info:"准备阶段，你可以获得一名其他角色区域内的一张牌，然后攻击范围内有你的角色可以依次对你使用一张基本牌。",
			sst_jinjia:"金甲",
			sst_jinjia_info:"锁定技，每当你受到一点伤害前，你令此伤害减1，若此前你于本回合以此法减少过伤害，你翻面，失去〖金甲〗。",
			sst_baochui:"爆锤",
			sst_baochui2:"爆锤",
			sst_baochui3:"爆锤",
			sst_baochui_info:"弃牌阶段，你可以将你弃置的牌置于你的武将牌上。当你需要使用【杀】时，你可以将你武将牌上的所有牌视为伤害为X的【杀】使用。（X为此杀对应的实体牌数量且至多为3）",
			sst_shengxi:"圣袭",
			sst_shengxi2:"圣袭",
			sst_shengxi3:"圣袭",
			sst_shengxi4:"圣袭",
			sst_shengxi4_backup:"圣袭",
			sst_shengxi_info:"你使用牌指定目标时，或你成为牌的目标时，使用牌的角色可以明置任意名目标角色一张手牌；一名角色可以使用其他角色以此法明置的手牌。",
			sst_xuelun:"血轮",
			sst_xuelun_info:"锁定技，你死亡后，杀死你的角色获得你的所有技能。",
			sst_xiandu:"先读",
			sst_xiandu2:"先读",
			sst_xiandu3:"先读",
			sst_xiandu_info:"一名其他角色的出牌阶段开始时，你可以扣置一张手牌，于该角色本回合第一次使用牌时亮出。若这两张牌的类别：相同，你可以对其造成1点伤害或摸两张牌；不同，其对你造成1点伤害。出牌阶段结束时，你将此牌置入弃牌堆。",
			sst_wenxu:"温恤",
			sst_wenxu2:"温恤",
			sst_wenxu3:"温恤",
			sst_wenxu_info:"一名其他角色于其回合内使用基本牌或普通锦囊牌结算后，你可以获得此牌，然后令此角色本回合使用【杀】的次数+1。若如此做，本回合结束阶段，若其使用【杀】的次数未达上限，你受到其造成的1点伤害。",
			sst_mihu:"迷糊",
			sst_mihu_info:"锁定技，若你已受伤，你使用牌指定唯一目标时判定，若结果为♠，目标改为其上家，若结果为♣，目标改为其下家。",
			sst_niming:"逆命",
			sst_niming_info:"一名角色的判定牌生效前，你可以用牌堆顶的一张牌代替判定牌。",
			sst_cuifeng:"摧锋",
			sst_cuifeng2:"摧锋",
			sst_cuifeng_info:"准备阶段，你可以判定，然后你可以将此判定牌当作【杀】使用（不计入使用次数）：若此【杀】为黑色，你失去一点体力令此牌伤害+1，若为红色，你回复一点体力。",
			sst_renqing:"任情",
			sst_renqing2:"任情",
			sst_renqing_info:"你的回合内，判定阶段结束后，你的每个主要阶段开始前，你可以将其更改为一个其他主要阶段。若如此做，本回合结束时，若本回合没有弃牌阶段，你失去一点体力。",
			sst_renqing_detail:"技能解释",
			sst_renqing_detail_info:"你的回合内，不以此法执行的摸牌阶段，出牌阶段，弃牌阶段开始前，你可以跳过此阶段，改为从上述其他两个阶段选择一个执行。若如此做，本回合结束时，若本回合没有执行过弃牌阶段，你失去一点体力。",
			sst_manchan:"蛮缠",
			sst_manchan_info:"当你受到伤害后，你可以弃置一半手牌（向下取整），然后你可以于伤害来源的下个回合内发动〖任情〗。",
			sst_canyun:"残云",
			sst_canyun2:"残云",
			sst_canyun_info:"出牌阶段，你可以弃置一张牌（不得与本回合以此法弃置过的牌的花色相同），令所有角色本回合不能使用或打出与此牌花色相同的牌，然后你视为使用一张【决斗】。",
			sst_douhun:"斗魂",
			sst_douhun2:"斗魂",
			sst_douhun3:"斗魂",
			sst_douhun_info:"锁定技，准备阶段，你令你计算与其他角色的距离为1直到回合结束；其他角色须依次对你使用一张【杀】，否则本回合不能响应你使用的牌。以此法对你使用【杀】的角色计算与你距离为1直到你的下个准备阶段。",
			sst_juejing:"绝境",
			sst_juejing_info:"锁定技，每当你获得或失去牌后，将你的手牌数摸至或弃置至4张。",
			sst_suxing:"溯行",
			sst_suxing_info:"锁定技，每轮游戏开始时，若上一轮至少一名角色失去过所有手牌，你执行一个额外的回合。",
			sst_shengyi:"圣裔",
			sst_shengyi_info:"觉醒技，结束阶段，若你已发动过〖溯行〗，你减1点体力上限，然后获得技能〖寒芒〗〖摧锋〗。",
			sst_baling:"霸凌",
			sst_baling2:"霸凌",
			sst_baling_info:"你攻击范围内的角色的准备阶段，你可以令其选择一项：1. 受到你造成的1点伤害，然后其本回合下次造成的伤害+1；2. 你获得其一张牌。",
			sst_yingzi:"英姿",
			sst_yingzi_info:"锁定技，摸牌阶段摸牌时，你额外摸一张牌；你的手牌上限为你的体力上限。",
			sst_geliao:"鸽了",
			sst_geliao_info:"你可以跳过你的出牌阶段并交给一名其他角色任意张手牌，然后令你和该角色获得〖享乐〗直到你的下个回合开始。",
			sst_xiangle:"享乐",
			sst_xiangle_info:"锁定技，当其他角色使用【杀】指定你为目标时，其需弃置一张基本牌，否则此【杀】对你无效。",
			sst_jingyue:"镜月",
			sst_jingyue2:"镜月",
			sst_jingyue3:"镜月",
			sst_jingyue_info:"一名其他角色的准备阶段，你可以失去一点体力，若如此做，该角色于本回合出牌阶段内使用的牌进入弃牌堆前，你将其置于你的武将牌上，然后此回合的结束阶段，你选择一项：1. 以该角色为唯一目标依次使用这些牌（目标不合法则弃置）；2. 获得这些牌。",
			sst_jianxiang:"渐翔",
			sst_jianxiang_info:"锁定技，你的结束阶段结束后，你本局游戏计算与其他角色距离-2。",
			sst_baochao:"爆炒",
			sst_baochao_info:"一名角色使用【杀】或【桃】时，你可以令你计算与其他角色距离+1，若如此做，此牌效果数值+1。",
			sst_chixing:"赤行",
			sst_chixing_info:"你使用的最后一张牌为红色的回合结束后，你可以令至多｛1｝名角色将手牌数调整到与你另外指定的一名角色相等。",
			sst_chuanxiao:"传笑",
			sst_chuanxiao_info:"锁定技，每轮游戏开始时，若你使用的最后一张牌为红色，你令｛｝内的数字+1。",
			sst_jilve:"辑略",
			sst_jilve2:"辑略",
			sst_jilve_info:"一名其他角色的出牌阶段开始时，你可以令其观看并获得你任意张手牌，然后该角色本回合计算与其他角色距离-X（X为其以此法获得你的牌的数量），若因此其与场上所有其他角色距离为1，你摸两张牌。",
			sst_yuanchuan:"源传",
			sst_yuanchuan_info:"锁定技，你死亡后，所有成为过〖辑略〗目标的角色摸三张牌。",
			sst_diebu:"蝶步",
			sst_diebu_info:"转换技，你可以视为使用一张①【杀】②【闪】。",
			sst_bielian:"别恋",
			sst_bielian2:"别恋",
			/*
			sst_bielian_basic:"别恋·基本",
			sst_bielian_trick:"别恋·锦囊",
			sst_bielian_equip:"别恋·装备",
			*/
			sst_bielian_info:"你使用一张牌结算后，若此牌有对应的实体牌，你可以摸一张牌，然后本回合不能使用或打出与此结算后的牌的类型相同的牌。",
			/*
			sst_bielian_basic_info:"本回合不能使用或打出基本牌",
			sst_bielian_trick_info:"本回合不能使用或打出锦囊牌",
			sst_bielian_equip_info:"本回合不能使用或打出装备牌",
			*/
			sst_guaibi:"怪笔",
			sst_guaibi_info:"每轮限｛1｝次，一张【杀】指定目标前，你可以弃置一名角色的两张牌，令其成为此【杀】的使用者，然后该角色可以为此【杀】重新指定目标。",
			sst_daonao:"捣闹",
			sst_daonao2:"捣闹",
			sst_daonao_info:"锁定技，每当你造成一次伤害，｛｝内数值+1；每当你受到1点伤害，｛｝内数值-1（至少为0）。",
			sst_shimo:"施魔",
			sst_shimo_info:"准备阶段，你可以失去一点体力，令一名角色摸或弃置一张牌（若其此前未成为过此技能的目标，则改为两张）。",
			sst_qiebao:"窃宝",
			sst_qiebao_info:"出牌阶段限一次，你可以减1点体力上限，视为使用一张【顺手牵羊】。",
			sst_duzhi:"渎职",
			sst_duzhi2:"渎职",
			sst_duzhi_info:"锁定技，结束阶段，若你本回合未发动过〖施魔〗或〖窃宝〗，你不能响应其他角色使用的牌直到你的下回合开始。",
			sst_tandao:"探道",
			sst_tandao_info:"出牌阶段限一次，你可以选择一种颜色，展示手牌并弃置所有此颜色的牌，然后摸X张牌。（X为你本回合使用的牌类型数量）",
			sst_bodong:"波动",
			sst_bodong_info:"锁定技，你使用牌无距离限制。",
			sst_yanyang:"焰扬",
			sst_yanyang2:"焰扬",
			sst_yanyang_info:"出牌阶段，你可以令一名手牌数不小于你的角色弃置一张牌，若弃置的是【杀】，你受到其造成的X点伤害。（X为本回合你发动此技能的次数）",
			sst_shenglong:"升龙",
			sst_shenglong_info:"锁定技，与你距离最近的角色不能响应你使用的牌。",
			sst_juexin:"决心",
			sst_juexin_info:"锁定技，当你受到伤害或失去体力时，取消之。",
			sst_yebao:"业报",
			sst_yebao2:"业报",
			sst_yebao3:"业报",
			sst_yebao_info:"锁定技，你对一名角色造成伤害时，若其未使用过【杀】，取消之；一名其他角色受到你造成的伤害后，接下来X个回合的回合结束时，其弃置一张牌。（X为其已损失的体力值）",
			sst_caijue:"裁决",
			sst_caijue_info:"锁定技，一名受到过你造成的伤害的角色的结束阶段，若其累计使用【杀】的数量大于全场存活角色数，你将你与其所有牌依次当作【杀】对其使用，然后你失去〖决心〗。",
			sst_zhamou:"诈谋",
			sst_zhamou_info:"出牌阶段限一次，你可以令一名其他角色弃置你一张手牌，若为黑色，你视为对其使用一张任意普通锦囊牌，然后你选择一项：1. 收回此牌；2. 令此技能视为此出牌阶段未发动过。",
			sst_zhuzai:"主宰",
			sst_zhuzai2:"主宰",
			sst_zhuzai3:"主宰",
			sst_zhuzai_info:"一名角色的准备阶段，你可以展示其一张手牌。若为基本牌或普通锦囊牌，此角色本回合使用此牌时你可以为其额外指定一个目标。结束阶段，若此角色本回合未使用此牌，你可以对其造成1点伤害。",
			sst_zhixu:"秩序",
			sst_zhixu_info:"主公技，锁定技，你对本势力角色发动〖主宰〗时，将“你可以展示其一张手牌”改为“你可以观看其手牌并展示其一张手牌”。",
			sst_tugu:"突固",
			sst_tugu_backup:"突固",
			sst_tugu_info:"每回合限一次，你可以将一张不带有「伤害」标签的牌当作一张带有「伤害」标签的基本牌或普通锦囊牌使用。",
			sst_nixing:"匿形",
			sst_nixing_info:"锁定技，你成为牌的目标时，若你不是唯一目标，此牌对你无效。",
			sst_shouyin:"授音",
			sst_shouyin_info:"你使用牌结算后，可以令一名其他角色选择是否使用一张类型相同的牌，若其以此法使用了牌且两张牌目标唯一且相同，你摸一张牌。",
			sst_qichang:"绮裳",
			sst_qichang2:"绮裳",
			sst_qichang3:"绮裳",
			sst_qichang4:"绮裳",
			sst_qichang_info:"准备阶段，你可以令你本回合手牌上限-1，然后你视为装备了一张你声明的装备（不可替换原有装备），直到你的下回合开始。",
			sst_qichang_detail:"技能解释",
			sst_qichang_detail_info:"准备阶段，你可以令你本回合手牌上限-1，然后你视为对你使用一张装备牌（不得替换原装备，不能被弃置或获得），你的回合开始时或失去此牌后，销毁之。",
			sst_shizhu:"拾珠",
			sst_shizhu_info:"弃牌阶段，你可以令一名其他角色弃置与你数量相同的牌，或其他角色的弃牌阶段，你可以弃置与其等量的牌；然后你可以从此阶段进入弃牌堆的牌中选择任意张对你或其使用。",
			sst_shizhu_detail:"技能解释",
			sst_shizhu_detail_info:"你/其他角色的弃牌阶段结束时，你可以令一名其他角色/你可以弃置与你/其于此阶段弃置牌等量的牌，若如此做，你可以从你与其弃置的牌中选择任意张对你或其使用。",
			sst_yufeng:"御风",
			sst_yufeng2:"御风",
			sst_yufeng_info:"一名角色的准备阶段，你可以弃置一张手牌，若如此做，本回合此角色与此牌颜色相同的牌花色均视为此牌花色。",
			sst_chihang:"驰航",
			sst_chihang2:"驰航",
			sst_chihang3:"驰航",
			sst_chihang_info:"一名角色的出牌阶段开始时，其可以展示并交给你一张牌，然后此出牌阶段内，其使用或打出牌时，若与此牌花色：相同，其将手牌补至体力上限；不同，其须失去一点体力或结束出牌阶段。",
			sst_xishou:"袭狩",
			sst_xishou_info:"出牌阶段，若你手牌上限不为0，你可以令你本回合手牌上限和计算与其他角色距离均-1，然后你将手牌补至体力上限。若如此做，你每于弃牌阶段弃置一张牌，你失去一点体力。",
			sst_old_shishi:"时逝",
			sst_old_shishi_info:"锁定技，结束阶段，你须展示所有手牌，然后若手牌中有没有的牌类型，你按任意顺序举荐你没有的类别的牌。结算完成后，若此阶段进入弃牌堆的牌超过7张，你将武将牌变更为【时光的笛音·林克】。",
			sst_shishi:"时逝",
			sst_shishi_info:"锁定技，结束阶段，若你未受伤，你弃置一名角色的一张牌；若你已受伤，你视为使用一张【杀】，然后若未造成伤害，你将武将牌变更为【时光的笛音·林克】 。",
			sst_jujian:"按任意顺序举荐你没有的类别的牌",
			sst_jujian_info:"你重复亮出牌堆顶的一张牌并将此牌置于弃牌堆，若你没有此牌对应类型的手牌，改为你获得此牌，然后若手牌中仍有没有的牌类型，则重新开始此流程，否则结束此流程。",
			sst_jiamian:"假面",
			sst_jiamian_info:"此武将牌登场时，你获得一张武将牌置于一旁，称为“假面”。你可以弃置一张“假面”，发动场上与“假面”同势力角色的一个没有技能类型的技能，然后获得一张新的“假面”。",
			sst_shisu:"时溯",
			sst_shisu2:"时溯",
			sst_shisu_info:"锁定技，摸牌阶段，你改为将手牌摸至X张（X为你的体力值+2）。摸牌阶段结束时，若你于摸牌阶段没有摸牌，你将武将牌变更为【时光的笛音·幼年林克】。",
			sst_yongfeng:"勇锋",
			sst_yongfeng_info:"摸牌阶段摸牌时，你可以少摸任意张牌，视为对攻击范围内等量角色依次使用一张【杀】。",
			sst_shenbi:"神臂",
			sst_shenbi2:"神臂",
			sst_shenbi_eff:"神臂",
			sst_shenbi_info:"你可以将手牌数调整至比当前回合角色少1，视为使用或打出一张无距离限制的【杀】，然后选择你未选择过的一项：1. 你使用的下一张【杀】伤害+1；2. 此【杀】不可被响应；3. 失去一点体力。然后若均已选择过或你体力值为1，重置此技能。",
			sst_lanbo:"蓝波",
			sst_lanbo2:"蓝波",
			sst_lanbo_info:"你可以弃置超出你手牌上限的牌或删除〖神臂〗的一个选项，视为使用一张【闪】。",
			sst_daoxin:"盗心",
			sst_daoxin_info:"锁定技，你使用带有「伤害」标签的牌指定目标后，目标角色摸一张牌，然后若其手牌数不小于你，你观看其手牌并获得所有红色牌。",
			sst_fanni:"反逆",
			sst_fanni_info:"出牌阶段限一次，你可以调换体力值与手牌数，若体力值因此超出上限，防止超出上限的数值并视为你依次使用等量张【杀】。",
			sst_qianban:"牵绊",
			sst_qianban2:"牵绊",
			sst_qianban3:"牵绊",
			sst_qianban4:"牵绊",
			sst_qianban_info:"锁定技，当你失去装备区内的武器牌时，你获得此牌。只要你的装备区有武器牌，你加1点体力上限，摸牌阶段摸牌数+1。结束阶段，若你的装备区没有武器牌，你弃置场上的一张牌。",
			sst_tanyun:"探云",
			sst_tanyun_info:"每回合限一次，准备阶段或结束阶段，你可以将弃牌堆最上方的一张你指定类别的牌置于牌堆顶。",
			sst_zhuizhai:"追债",
			sst_zhuizhai2:"追债",
			sst_zhuizhai_info:"每轮游戏开始时，你可以令你攻击范围内任意名角色各摸一张牌，若如此做，当本轮这些角色受到伤害时，伤害来源可以获得其两张牌。",
			sst_fanfei:"翻飞",
			sst_fanfei_info:"当你成为红色牌的目标时，你可以弃置一张牌令此牌对你无效，然后对手牌数大于你的一名角色造成1点伤害。",
			sst_liaoyi:"聊依",
			sst_liaoyi_info:"当你需要使用或打出一张【杀】/【闪】时，你可以展示一张【杀】/【闪】并指定一名男性角色，其可以打出一张【杀】/【闪】，若其如此做，你视为使用或打出一张【杀】/【闪】，然后其获得你一张牌。",
			sst_liaoyi1:"聊依",
			sst_liaoyi1_info:"当你需要打出一张【杀】时，你可以展示一张【杀】并指定一名男性角色，其可以打出一张【杀】，若其如此做，你视为打出一张【杀】，然后其获得你一张牌。",
			sst_liaoyi2:"聊依",
			sst_liaoyi2_info:"当你需要使用一张【杀】时，你可以展示一张【杀】并指定一名男性角色，其可以打出一张【杀】，若其如此做，你视为使用一张【杀】，然后其获得你一张牌。",
			sst_liaoyi4:"聊依",
			sst_liaoyi4_info:"当你需要使用或打出一张【闪】时，你可以展示一张【闪】并指定一名男性角色，其可以打出一张【闪】，若其如此做，你视为使用或打出一张【闪】，然后其获得你一张牌。",
			sst_shuanghan:"霜寒",
			sst_shuanghan_info:"你使用牌指定其他角色为目标时，若其手牌数不小于你，你可以令此牌对其无效，改为弃置其区域内两张牌。",
			sst_qianlong:"潜龙",
			sst_qianlong2:"潜龙",
			sst_qianlong3:"潜龙",
			sst_qianlong_info:"出牌阶段限一次，你可以将一张牌背面朝上当作【杀】使用，然后若此【杀】仅对一名角色造成了伤害，你亮出此牌并对该角色使用。",
			sst_guangpao:"光炮",
			sst_guangpao_info:"出牌阶段限一次，你可以弃置两张同名牌并对一名其他角色造成1点伤害，然后若你手牌中没有同名牌，你可以展示手牌并摸一张牌。",
			sst_tewu:"特武",
			sst_tewu2:"特武",
			sst_tewu_info:"锁定技，一名其他角色死亡后，其须指定另一名其他角色，你对该角色造成伤害时弃置其一张牌。",
			sst_jijing:"急竞",
			sst_jijing2:"急竞",
			sst_jijing_info:"出牌阶段，你可以弃置所有手牌（至少一张），并摸比弃置牌数少一的牌，然后你计算与其他角色距离-1。结束阶段，若你与其他角色距离均为1，你摸两张牌或回复1点体力，然后重置此技能的距离计算。",
			sst_yinyao:"音谣",
			sst_yinyao_info:"准备阶段，你可以展示并弃置一张手牌，然后从你下家开始到你上家为止，每名角色须依次展示与其上家所展示的牌花色或点数相同的牌（若其没有手牌则跳过），否则其翻面并结束此流程。",
			sst_anke:"安可",
			sst_anke2:"安可",
			sst_anke_info:"每轮限一次，一名已翻面角色的回合开始前，其可以交给你一张手牌，然后其翻回正面。",
			sst_bodao:"波导",
			sst_bodao_info:"你使用牌指定目标后，你可以令目标角色除非弃置X张牌，否则不能响应此牌。（X为你已损失的体力值）",
			sst_juyuan:"聚元",
			sst_juyuan_info:"你的回合内，每有一张黑色牌进入弃牌堆，你本回合攻击范围+1；每有一张红色牌进入弃牌堆，你本回合使用【杀】次数上限+1。",
			sst_tieyan:"贴颜",
			sst_tieyan_info:"准备阶段，你可以将等同于你体力值的牌置于牌堆顶，然后横置你和你已损失体力值名其他角色。",
			sst_gaoya:"高压",
			sst_gaoya_info:"锁定技，结束阶段，若你的手牌数小于体力值，你须判定一次【闪电】，若你未因此受到伤害，你摸三张牌。",
			sst_baoshi:"暴食",
			sst_baoshi_info:"锁定技，当你使用牌后，你摸两张牌，然后若你手牌数超出体力上限，你须将你区域内的牌弃置至一张。",
			sst_wangyan:"王宴",
			sst_wangyan_info:"主公技，出牌阶段限一次，你可以将所有手牌当作【五谷丰登】对所有手牌数小于你的本势力角色使用。",
			sst_juelu:"决路",
			sst_juelu2:"决路",
			sst_juelu3:"决路",
			sst_juelu_info:"锁定技，游戏开始时，你标记一个身份。你于摸牌阶段多摸X张牌，出牌阶段可以使用X张【杀】（X为标记身份对应人数的排名）。与你标记身份相同的角色死亡后，你弃置所有手牌。",
			sst_longwei:"龙威",
			sst_longwei_info:"锁定技，〖决路〗发动后，你的体力上限与体力值加Y（Y为你标记身份对应的人数）。",
			sst_tankuang:"探矿",
			sst_tankuang_info:"出牌阶段，你可以按花色或类别举荐一张牌，其间若本回合亮出的牌超过十张，中止此流程且本回合不能再发动此技能，然后你受到1点伤害。",
			sst_jujian2:"按花色或类别举荐一张牌",
			sst_jujian2_info:"你重复亮出牌堆顶的一张牌并将此牌置于弃牌堆，若此牌满足你所选择的花色或类别，改为你获得此牌并结束此流程。",
			sst_fumiao:"伏妙",
			sst_fumiao_info:"你的回合内，一名角色受到伤害后、失去体力后或回复体力后，你可以将手牌数调整至与其体力值相同。若你因此弃置了牌，你可以将一张牌当作无距离和次数限制的【杀】使用。",
			sst_huayu:"化雨",
			sst_huayu_info:"主公技，出牌阶段，你可以将一张【杀】交给一名其他本势力角色，然后你可以摸一张牌。",
			sst_xuhuang:"虚晃",
			sst_xuhuang2:"虚晃",
			sst_xuhuang_info:"每回合限一次，你使用杀指定目标后，或你成为杀的目标后，你可以猜测此杀是否造成伤害，结算后公布结果，若你猜中，你摸两张牌，否则你弃置两张牌。",
			sst_jibu:"疾步",
			sst_jibu2:"疾步",
			sst_jibu3:"疾步",
			sst_jibu_info:"一名其他角色的回合开始前，若你本轮还没有执行过回合，你可以提前执行你本轮的回合。",
			sst_advance:"提前执行回合",
			sst_advance_info:"你执行一个额外回合，若如此做，本轮你的下一个非额外回合开始前，你取消之。",
			sst_juechen:"绝尘",
			sst_juechen2:"绝尘",
			sst_juechen_info:"你的回合内，你使用牌可以额外指定一个本轮未执行过回合的角色为目标；你的回合外，其他角色使用牌可以额外指定本轮已执行过回合的你为目标。",
			sst_songmo:"诵魔",
			sst_songmo_info:"一名角色的出牌阶段开始时，若你的手牌上限不为0，你可以令你的手牌上限-1并弃置超出上限的牌，然后视为其使用你指定的一张普通锦囊牌。",
			sst_yonghun:"勇魂",
			sst_yonghun2:"勇魂",
			sst_yonghun_info:"若你使用带有「伤害」标签的牌未对唯一目标造成伤害，你可以将两张牌扣置于你的武将牌旁，然后若其中没有牌带有「伤害」标签，你的手牌上限+1且本回合可以额外使用一张【杀】。当前回合结束后，你获得你武将牌旁的所有牌。",
			sst_powei:"破围",
			sst_powei_info:"摸牌阶段，你可以令摸牌数-1（无视最低限制，若场上已受伤角色超过一半，改为令摸牌数-2），然后亮出牌堆顶的等量牌且可以使用之。你重复此流程直到你没有以此法使用牌。",
			sst_bianshe:"编设",
			sst_bianshe_info:"锁定技，每轮游戏开始时，你选择以下任意两个技能，本轮内视为拥有之。",
			sst_miquan:"秘拳",
			sst_miquan_info:"你可以跳过摸牌阶段，然后对攻击范围内一名角色造成1点伤害。",
			sst_mijian:"秘剑",
			sst_mijian_info:"出牌阶段开始时，你可以摸一张牌，然后你可以使用一张牌。",
			sst_miqiang:"秘枪",
			sst_miqiang_info:"你的攻击范围视为无限。",
			sst_qiaoqi:"巧器",
			sst_qiaoqi4:"巧器",
			sst_qiaoqi5:"巧器·流马",
			sst_qiaoqi6:"巧器·木牛流马",
			sst_qiaoqi6_bg:"<span class=\"bluetext\">辎</span>",
			sst_qiaoqi_info:"出牌阶段限一次，你可以展示一张红色手牌并扣置于场上一张装备牌上，称为“辎”；有“辎”的装备牌视为拥有【木牛流马】的效果。",
			sst_fumo:"附魔",
			sst_fumo2:"附魔",
			sst_fumo3:"附魔",
			sst_fumo4:"附魔",
			sst_fumo_info:"锁定技，若你的装备区内有：<br>武器牌，你可以指定你造成伤害（不得为连环伤害）的属性；<br>防具牌，攻击范围内没有你的角色不能对你造成伤害；<br>坐骑牌，坐骑数值翻倍；<br>宝物牌，〖巧器〗无次数限制。",
			sst_longbo:"龙搏",
			sst_longbo_info:"你使用红色牌对上X家、使用黑色牌对下X家无次数限制；你使用牌无距离限制。（X为存活玩家数的一半且向上取整）",
			sst_fengcu:"凤蹴",
			sst_fengcu_sha:"凤蹴·杀",
			sst_fengcu_shan:"凤蹴·闪",
			sst_fengcu2:"凤蹴",
			sst_fengcu3:"凤蹴",
			sst_fengcu4:"凤蹴",
			sst_fengcu_info:"你可以将两张颜色不同的牌当作【杀】或【闪】使用或打出。若以此法使用的牌造成了伤害，你本轮造成伤害后获得目标一张牌；若以此法响应了牌，你获得被响应的牌。",
			sst_fulei:"伏雷",
			sst_fulei_info:"每回合每个区域的牌限一次，你的牌进入弃牌堆时，你可以用其中一张牌与一名其他角色拼点，然后你选择令没赢的角色受到你造成的1点雷电伤害或判定一次【闪电】。",
			sst_duoshan:"躲闪",
			sst_duoshan_info:"当你受到伤害时，你可以弃置一个区域内的所有牌（至少一张），然后防止此伤害。",
			sst_juao:"倨傲",
			sst_juao2:"倨傲",
			sst_juao_info:"准备阶段，你可以摸不多于你体力值的任意张牌。若如此做，直到你的下个准备阶段，你的体力值低于此次摸牌数时，你死亡。",
			sst_xuanyi:"炫奕",
			sst_xuanyi_info:"转换技，出牌阶段限一次，你可以与①一名角色②牌堆顶的一张牌拼点，赢的一方获得没赢的一方拼点的牌，然后若你没有获得牌，你对一名角色造成1点①火焰②雷电伤害。",
			sst_fuxin:"付心",
			sst_fuxin_info:"出牌阶段，你可以移除此武将牌，然后将此武将牌视为攻击范围3的武器牌加入游戏并交给一名其他角色。该角色的准备阶段，若这张牌不在其区域内，其可以检索并获得这张牌。",
			sst_fuxin_card:"付心",
			sst_fuxin_card_info:"准备阶段，若【天之圣杯】不在你区域内，你可以检索并获得【天之圣杯】。",
			sst_lingying:"灵影",
			sst_lingying_info:"锁定技，当你成为【杀】或带有「伤害」标签的锦囊的目标时，若其与你距离大于1，此牌对你无效。",
			sst_fankui:"反窥",
			sst_fankui_info:"锁定技，你进入一名角色的攻击范围时，你获得其区域里的一张牌。",
			sst_xiangzhu:"向筑",
			sst_xiangzhu2:"向筑",
			sst_xiangzhu_info:"准备阶段，你可以将一名其他角色装备区里的一张牌移动到你的装备区里。结束阶段，你将以此法获得的牌移动到一名其他角色的装备区内。",
			sst_fenshi:"焚世",
			sst_fenshi_info:"准备阶段各限一次：1. 你可以对一名角色造成1点伤害；2. 你可以弃置一名角色两张牌。｛若你没有指定自己，你减1点体力上限并删除此内容。｝｛若你一回合两次指定了同一名角色，你减1点体力上限并删除此内容。｝",
			sst_xingduo:"星堕",
			sst_xingduo_info:"限定技，结束阶段，你可以减1点体力上限，令至多三名其他角色选择失去一半体力（向下取整）或翻面。",
			sst_jiliu:"激流",
			sst_jiliu2:"激流",
			sst_jiliu_info:"锁定技，当你造成1点伤害时，你摸X张牌（X为与你距离1以内的角色数），本回合你与其他角色距离计算-1，然后你失去〖激流〗，获得〖茂盛〗。",
			sst_maosheng:"茂盛",
			sst_maosheng_info:"锁定技，当你使用或打出牌时，选择至多X名角色横置之（已横置的角色改为弃置其一张牌），然后你失去〖茂盛〗，获得〖猛火〗。（X为与你距离1以内的角色数）",
			sst_menghuo:"猛火",
			sst_menghuo2:"猛火",
			sst_menghuo3:"猛火",
			sst_menghuo_info:"锁定技，你造成的伤害均视为火焰伤害；当你使用【决斗】时，你失去一点体力，此决斗造成的伤害+1；当与你距离1以内的角色因你造成的伤害进入濒死状态时，你失去〖猛火〗，获得〖激流〗。",
			sst_xingjiang:"星降",
			sst_xingjiang_info:"出牌阶段限一次，你可以亮出牌堆顶一张牌。若如此做，你可以弃置一张牌，然后若这两张牌的类型、颜色、点数：1. 其中一项相同，你可以弃置场上一张牌；2. 其中两项相同，你可以对一名角色造成1点伤害；3. 其中三项相同，你可以令一名角色翻面。",
			sst_fuyuan:"复愿",
			sst_fuyuan_info:"一名角色的结束阶段，你可以令一名角色摸X张牌，然后弃置Y张牌（X/Y为本回合累计获得/失去的牌且至多为7）。若其因此手牌数与其体力值相等，你可以观看牌堆顶一张牌，然后你可以使用此牌。",
			//武将分类
			sst_64:"64",
			sst_melee:"Melee",
			sst_brawl:"Brawl",
			sst_4:"For WiiU/3DS",
			sst_ultimate:"Ultimate",
			sst_spirits:"命魂",
			sst_players:"玩家",
		},
		perfectPair:{
			sst_mario:["sst_yoshi","sst_dr_mario","sst_rosalina","sst_luigi","sst_bowser","sst_peach","sst_donkey_kong","sst_daisy","sst_bowser_jr","sst_koopalings","sst_wario","sst_waluigi"],
			sst_bowser:["sst_bowser_jr","sst_koopalings","sst_peach"],
			sst_bowser_jr:["sst_koopalings"],
			sst_luigi:["sst_yoshi","sst_peach","sst_daisy"],
			sst_peach:["sst_yoshi","sst_daisy"],
			sst_wario:["sst_waluigi"],
			sst_link:["sst_zelda","sst_young_link","sst_ocarina_of_time_link","sst_toon_link","sst_massy"],
			sst_zelda:["sst_sheik","sst_young_link","sst_ocarina_of_time_link","sst_toon_link"],
			sst_villager:["sst_isabelle"],
			sst_lucina:["sst_marth","sst_chrom"],
			sst_chrom:["sst_marth"],
			sst_samus:["sst_zero_suit_samus"],
			sst_byleth_male:["sst_byleth_female"],
			sst_simon:["sst_richter"],
			sst_mnm:["sst_yumiko","sst_bowser"],
			sst_yumiko:["sst_terry"],
			sst_kyuukou:["sst_incineroar"],
			sst_oc:["sst_bowser"],
			sst_windier:["sst_little_mac"],
			sst_ryu:["sst_ken"],
			sst_kirby:["sst_meta_knight","sst_dedede"],
			sst_meta_knight:["sst_dedede"],
			sst_fox:["sst_falco","sst_krystal"],
			sst_pikachu:["sst_pichu"],
			sst_steve:["sst_alex"],
			sst_rex:["sst_pyra_mythra"],
			sst_pokemon_trainer_blue:["sst_pokemon_trainer_red"],
			sst_geno:["sst_mario","sst_bowser","sst_peach"],
		},//珠联璧合武将（选填）
	};
	/*
	for(var i in sst.character){
		sst.character[i][4].push(i+".png");
	}
	*/
	/*
	if(lib.device||lib.node){
		for(var i in sst.character){
			sst.character[i][4].push("ext:大乱桌斗/"+i+".png");
		}
	}
	else{
		for(var i in sst.character){
			sst.character[i][4].push("db:extension-大乱桌斗:"+i+".png");
		}
	}//由于以此法加入的武将包武将图片是用源文件的，所以要用此法改变路径
	*/
	/*
	if(lib.config.sst_zhuless){
		for(var i in sst.character){
			if(sst.character[i][4].indexOf("zhu")>-1) sst.character[i][4].splice(sst.character[i][4].indexOf("zhu"),1);
		}
	}
	if(lib.config.sst_smash){
		for(var i in sst.character){
			sst.character[i][1]="sst_smash";
		}
	}
	if(lib.config.sst_hidden){
		for(var i in sst.character){
			if(sst.character[i][4].indexOf("hiddenSkill")<0) sst.character[i][4].push("hiddenSkill");
		}
	}
	if(lib.config.sst_jiamian_disable){
		sst.character["sst_young_link"][2]++;
		if(sst.character["sst_young_link"][3].indexOf("sst_jiamian")>-1) sst.character["sst_young_link"][3].splice(sst.character[i][3].indexOf("sst_jiamian"),1);
	}
	if(lib.config.sst_compare!="4"){
		lib.element.player.canCompare=function(target){
			if(this==target) return false;
			if(this.hasSkillTag("noCompareSource")||target.hasSkillTag("noCompareTarget")) return false;
			return true;
		};
	}
	*/
	return sst;
});