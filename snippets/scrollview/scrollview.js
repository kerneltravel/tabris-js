var page = tabris.create("Page", {
  title: "Scroll Composite - Horizontal",
  topLevel: true
});

var scrollView = tabris.create("ScrollView", {
  direction: "horizontal",
  layoutData: {left: 0, top: "40%", right: 0, bottom: "40%"},
  background: "#234"
}).appendTo(page);

for (var i = 0; i < 50; i++) {
  tabris.create("TextView", {
    layoutData: {left: i * 30 + 20, centerY: 0, width: 30},
    text: i + "°",
    textColor: "white"
  }).appendTo(scrollView);
}

page.open();
