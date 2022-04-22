//一些附加到window的对象的提示
declare interface Window {
    /** 游戏更新信息配置 */
    noname_update :{
        version:string,
        update:string,
        changeLog:string[],
        files:string[]
    }

    /** 游戏配置 */
    config :{
        forbidai:string[], 
    }

    /** 游戏源列表（预加载资源列表，待验证） */
    noname_source_list:string[],

    /** 游戏懒加载资源列表(外部扩展资源列表，待验证) */
    noname_asset_list:string[],

    /** 默认皮肤列表 */
    noname_skin_list:SMap<number>;

    /** codeMirror,一个代码编辑器库 */
    CodeMirror:any;

    resetGameTimeout: number;

    cordovaLoadTimeout: number;

    game: Game;
    lib: Lib;
    _status: Status;
    ui: UI;
    get: Get;
    ai: AI;
}