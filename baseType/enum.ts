export default {
  Home_Page_Url: "url1",
  Setting_Page_Url: "url2",
  Share_Page_Url: "url3",
};

enum PageUrl {
  Home_Page_Url = "/home",
  Setting_Page_Url = "/setting",
  Share_Page_Url = "/share",
}

const home = PageUrl.Home_Page_Url;

enum Items {
  Foo,
  Bar,
  Baz,
}

enum Items2 {
  Foo,
  Bar = 18,
  Baz,
}

const returnNum = () => 100 + 200;
enum Items3 {
  Foo = returnNum(),
  Bar = 18,
  Baz,
}

enum Item4 {
  Baz,
  Foo = returnNum(),
  Bar = 18,
}

enum Mixed {
  Num = 18,
  Str = "putong",
}

enum Items5 {
  Foo,
  Bar,
  Baz,
}

const fooValue = Items5.Foo;
const fooKey = Items5[0];

enum Items6 {
  Foo,
  Bar = "BarValue",
  Baz = "BazValue",
}

const enum Items7 {
  Foo,
  Bar,
  Baz,
}

const BarValue = Items7.Bar;
