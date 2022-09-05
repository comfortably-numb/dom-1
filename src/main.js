const div = dom.create("<div>newDiv</div>");
console.log(div);

dom.after(test, div);

const div3 = dom.create('<div id="parent"></div>');
dom.wrap(test, div3);

//console.log(dom.empty(empty));

dom.attr(test, "title", "Hi,I am Zhang");
const title = dom.attr(test, "title");
console.log(`title:${title}`);

//dom.text(test, "这是新的内容");
//console.log(dom.text(test));

dom.style(test, { border: "1px solid red", color: "blue" });
console.log(dom.style(test, "border"));
dom.style(test, "border", "1px solid black");

dom.class.add(test, "red");
dom.class.add(test, "blue");
dom.class.remove(test, "blue");
console.log(dom.class.has(test, "blue"));

const fn = () => {
  console.log("点击");
};
dom.on(test, "click", fn);
dom.off(test, "click", fn);

const testDiv = dom.find("#test")[0];
console.log(testDiv);

console.log(dom.find(".red", test)[0]);

console.log(dom.parent(test));

const e2 = dom.find("#e2")[0];
console.log(dom.siblings(e2));
console.log(dom.next(e2));
console.log(dom.previous(e2));

const e = dom.find("#empty")[0];
console.log(e);
dom.each(dom.children(e), (n) => dom.style(n, "background-color", "blue"));

console.log(dom.index(e2));
