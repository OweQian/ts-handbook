const tmp1: Object = undefined;
const tmp2: Object = null;
const tmp3: Object = void 0;

const tmp4: Object = "putong";
const tmp5: Object = 18;
const tmp6: Object = { name: "putong" };
const tmp7: Object = () => {};
const tmp8: Object = [];

const tmp9: String = undefined;
const tmp10: String = null;
const tmp11: String = void 0;
const tmp12: String = "putong";

const tmp13: String = 18; // X
const tmp14: String = { name: "putong" }; // X
const tmp15: String = () => {}; // X
const tmp16: String = []; // X

const tmp17: object = undefined;
const tmp18: object = null;
const tmp19: object = void 0;

const tmp20: object = "putong";
const tmp21: object = 18;

const tmp22: object = { name: "putong" };
const tmp23: object = () => {};
const tmp24: object = [];

const tmp25: {} = undefined; // 仅在关闭 strictNullChecks 时成立，下同
const tmp26: {} = null;
const tmp27: {} = void 0; // void 0 等价于 undefined

const tmp28: {} = "putong";
const tmp29: {} = 18;
const tmp30: {} = { name: "putong" };
const tmp31: {} = () => {};
const tmp32: {} = [];

tmp30.name = "wangxiaobai";
