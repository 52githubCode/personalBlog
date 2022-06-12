import Mock from "mockjs";

Mock.mock("/api/setting", "get", {
    code: 0,
    msg: "",
    data: {
        avatar: "https://tse1-mm.cn.bing.net/th/id/OIP-C.KE1Hkg5vp-5ElPWHJgivkwHaKa?pid=ImgDet&rs=1",
        siteTitle: "我的个人空间",
        github: "https://github.com/52githubCode",
        qq: "3439884587",
        qqQrCode: "https://pic.imgdb.cn/item/629b1129094754312922738a.png",
        weixin: "wxid_fza3fommv8lw22",
        weixinQrCode: "https://pic.imgdb.cn/item/629b112909475431292273b3.jpg",
        mail: "3439884587@qq.com",
        // icp: "黑ICP备17001719号",
        githubName: "52githubCode",
        favicon: "https://pic.rmb.bdstatic.com/bjh/49b0b2c2be12a5191c1530bd0dacfa5f.png",
    }
});