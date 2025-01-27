/**
 * 武将包的配置信息（import:character）
 */
interface CharacterConfigData extends ExCommonConfig {
    /** 该武将包是否可以联机 */
    connect?: boolean;
    /** 联机武将禁用列表 */
    connectBanned?: string[];

    /** 
     * 武将基本配置信息
     */
    character: SMap<HeroData>;
    /** 武将介绍 */
    characterIntro?: SMap<string>;
    /** 武将标题（用于写称号或注释） */
    characterTitle?: SMap<string>;
    /** 技能 */
    skill?: SMap<ExSkillData>;
    /** 珠联璧合武将 */
    perfectPair?: SMap<string[]>;
    /** 指定武将的过滤方法（传入一个mode，用于过滤玩法模式） */
    characterFilter?: SMap<OneParmFun<string, boolean>>;
    /** 
     * 用于筛选（具体日后讨论）
     * 
     * 在武将包界面里，根据这里分包
     */
    characterSort?: SMap<SMap<string[]>>;

    /** 该武将包独有的卡牌（或者是特殊卡牌） */
    card?: SMap<ExCardData>;
    /** 定义自定义卡牌类型的排序用的优先级 */
    cardType?: SMap<number>;

    /**
     * 动态翻译（本地化）【v1.9.105】
     * 
     * 指定lib.dynamicTranslate.xxx为一个函数 即可让技能xxx显示的描述随玩家状态而变化 并实现技能修改等
     * 
     * Player:指技能拥有者；
     */
    dynamicTranslate?: SMap<OneParmFun<Player,string>>;

    /** 选择时，可进行替换的武将配置【v1.9.106.3】 */
    characterReplace?: SMap<string[]>;
    /** 扩展中设置武将的名称(id)翻译 */
    translate?: SMap<string>
}

/**
 * 武将性别
 */
type HeroSex = 'male' | 'female' | 'dobule' | 'none';

/** 武将体力 */
type HeroHp = number | string;

/** 
 * 武将信息:
 * 
 * [ 0 string, 1 string, 2 number/string, 3 string[], 4 string[],.....其他特殊扩展 ]
 * 
 * 0："性别"
 * 
 * 1："势力",
 * 
 * 2：体力【体力可以支持分开独立显示："初始hp/血量上限", 加上护甲就是"初始hp/血量上限/护甲值"】
 * 
 * 3：["技能"]
 * 
 * 4：[可以保持图片，一些卡片标记，如："zhu","boss",""...,或者一些带前缀的特殊文本，例如：des:xxxx，表示描述] 
 *      【v1.9.108.6~：支持国战模式下，多势力，格式“doublegroup:xx:xx”，例如“doublegroup:wei:wu”】
 * 
 * ===============
 * 额外增加个人需要的特殊信息：
 * 
 * 在4中，拥有"ZJNGEx"标记，表示这位zjsha扩展人物，5为扩展内容:[zjsha势力,血槽]
 * 
 * 1属性（即原势力），7zj杀势力，8血槽（体力可以支持双配置，所以这个没什么用了），9zj杀角色标记，暂时未想好 （从倒数开始数，倒数三个）
 */
type HeroData = [HeroSex, string, HeroHp, string[], string[], ...any[]] | 
				[HeroSex, string, HeroHp, string[],  ...any[]];

/** 武将信息索引 */
declare const enum HeroDataFields {
    /** 性别 */
    sex=0,
    /** 国家势力 */
    group=1,
    /** 血量 */
    hp=2,
    /** 技能 */
    skills=3,
    /** 额外携带信息 */
    exInfo=4
}

/** 新增一个game.addCharacter的info类型 */
interface CharacterConfigInfo {
	/** 来源扩展 */
	extension?: string;
	/** 性别 */
	sex: HeroSex;
	/** 国籍 */
	group: string;
	/** 体力值 */
	hp: HeroHp;
	/** 技能 */
	skills?: string[];
	/** 其他标签，添加到character[4]中 */
	tags?: string[];
	/** 武将中文名 */
	translate: string;
}