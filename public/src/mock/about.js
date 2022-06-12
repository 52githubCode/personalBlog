import Mock from "mockjs";

Mock.mock("/api/about", "get", {
    code: 0,
    msg: "",
    // 技能树
    // data: "http://skill.phodal.com/#_rs2tu_1_Name"
    // 在线简历
    data: "https://www.strml.net/"
});