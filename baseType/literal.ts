const ower: "putong" = "putong";
const num: 18 = 18;
const isMale: false = false;

const str1: "putong" = "wangxiaobai";

const str2: string = "putong";
const str3: string = "wangxiaobai";

interface Tmp {
  mixed: true | string | 18 | (() => void) | (1 | 2);
}

interface Tmp2 {
  user: { vip: true; expires: string } | { vip: false; promotion: string };
}

declare var tmp: Tmp2;

if (tmp.user.vip) {
  console.log(tmp.user.expires);
}

type Code = 10000 | 10001 | 10002;

type Status = "success" | "failure";

interface Tmp3 {
  obj: {
    name: "putong";
    age: 18;
  };
}

const obj: Tmp3 = {
  obj: {
    name: "wangxiaobai",
    age: 20,
  },
};

const obj4: Tmp3 = {
  obj: {
    name: "putong",
    age: 18,
  },
};
