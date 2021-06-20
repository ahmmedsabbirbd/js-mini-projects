const pritice = [
  {
    name: "Block quote",
    pattern: /> ?((\w|\d|=| |>|<|-{0,2}|{|}|\[|\]|\(|\)|"|'|\/|=|\.|:|;){0,})\n/g,
    replacement: "<div class='quote'>$1</div>"
  },
  {
    name: "H6",
    pattern: /#{6} ((\w|\d|=| |-{0,2}|>|<|{|}|\[|\]|\(|\)|"|'|\/|=|\.|:|\\|`)+)\n/g,
    replacement: "<h6>$1</h6>"
  },
  {
    name: "H5",
    pattern: /#{5} ((\w|\d|=| |-{0,2}|>|<|{|}|\[|\]|\(|\)|"|'|\/|=|\.|:|\\|`)+)\n/g,
    replacement: "<h5>$1</h5>"
  },
  {
    name: "H1",
    pattern: /# ((\w|\d|=| |-{0,2}|>|<|{|}|\[|\]|\(|\)|"|'|\/|=|\.|:|\\|`)+)\n/g,
    replace/*ment*/: "<h1>$1</h1>"
  },
]

console.log(pritice[3]);

const rules = [
  {
    // name: "Block quote",
    pattern: /> ?((\w|\d|=| |>|<|-{0,2}|{|}|\[|\]|\(|\)|"|'|\/|=|\.|:|;){0,})\n/g,
    replace/*ment*/: "<div class='quote'>$1</div>"
  },
  {
    // name: "H6",
    pattern: /headding6 ((\w|\d|=| |-{0,2}|>|<|{|}|\[|\]|\(|\)|"|'|\/|=|\.|:|\\|`)+)\n/g,
    replace/*ment*/: "<h6>$1</h6>"
  },
  {
    // name: "H5",
    pattern: /headding5 ((\w|\d|=| |-{0,2}|>|<|{|}|\[|\]|\(|\)|"|'|\/|=|\.|:|\\|`)+)\n/g,
    replace/*ment*/: "<h5>$1</h5>"
  },
  {
    // name: "H4",
    pattern: /headding4 ((\w|\d|=| |-{0,2}|>|<|{|}|\[|\]|\(|\)|"|'|\/|=|\.|:|\\|`)+)\n/g,
    replace/*ment*/: "<h4>$1</h4>"
  },
  {
    // name: "H3",
    pattern: /headding3 ((\w|\d|=| |-{0,2}|>|<|{|}|\[|\]|\(|\)|"|'|\/|=|\.|:|\\|`)+)\n/g,
    replace/*ment*/: "<h3>$1</h3>"
  },
  {
    // name: "H2",
    pattern: /headding2 ((\w|\d|=| |-{0,2}|>|<|{|}|\[|\]|\(|\)|"|'|\/|=|\.|:|\\|`)+)\n/g,
    replace/*ment*/: "<h2>$1</h2>"
  },
  {
    // name: "H1",
    pattern: /headding1 ((\w|\d|=| |-{0,2}|>|<|{|}|\[|\]|\(|\)|"|'|\/|=|\.|:|\\|`)+)\n/g,
    replace/*ment*/: "<h1>$1</h1>"
  },
  {
    // name: "H1",
    pattern: /# ((\w|\d|=| |-{0,2}|>|<|{|}|\[|\]|\(|\)|"|'|\/|=|\.|:|\\|`)+)\n/g,
    replace/*ment*/: "<h1>$1</h1>"
  },
  {
    // name: "Line breaks",
    pattern: /\n+/g,
    replace/*ment*/: "<br>"
  },
  {
    // name: "Images with title",
    pattern: /\!\[((\w| )+)\]\((https?\:\/{2}(\w|\.|\/|\d|-|#|&|\?|=)+) +"(([0-9a-zA-Z]| |!|\?|#|=)+)" {0,}\)/g,
    replace/*ment*/: "<img src='$3' title='$5' alt='$1' height='30%'>"
  },
  {
    // name: "Images",
    pattern: /\!\[((\w| )+)\]\((https?\:\/{2}(\w|\.|\/|\d|-|#|&|\?|=)+)\)/g,
    replace/*ment*/: "<img src='$3' alt='$1' height='30%'>"
  },
  {
    // name: "Links",
    pattern: /\[\\?((\w| )+)\]\((https?\:\/{2}(\w|\.|\/|\d|-|#|\?|=|&)+)\)/g,
    replace/*ment*/: "<a target='_blank' href='$3'>$1</a>"
  },
  {
    // name: "Links with title",
    pattern: /\[((\w| )+)\]\((https?\:\/{2}(\w|\.|\/|\d|-|#|&)+) +"(([0-9a-zA-Z]| |!|\?|=)+)" {0,}\)/g,
    replace/*ment*/: "<a target='_blank' href='$3'>$5</a>"
  },
  {
    // name: "Horizontal line",
    pattern: /(-{3,}|_{3,}|\*{3,})<br>/g,
    replace/*ment*/: "<hr>"
  },
  {
    // name: "Bold",
    pattern: /(\_{2}|\*{2})((\w| |\(|\)|\[|\]|\/|\.|\,|\:|<|>|=|"|'|#)+)(\_{2}|\*{2})/g,
    replace/*ment*/: "<b>$2</b>"
  },
  {
    // name: "Italic",
    pattern: /(\_{1}|\*{1})((\w| |\(|\)|\[|\]|\/|\.|\,|\:|#)+)(\_{1}|\*{1})/g,
    replace/*ment*/: "<em>$2</em>"
  },
  {
    // name: "Strikethrough",
    pattern: /\~{2}((\w| |\(|\)|\[|\]|\/|\.|\,|\:|#)+)\~{2}/g,
    replace/*ment*/: "<strike>$1</strike>"
  },
  {
    // name: "Marked",
    pattern: /==((\w|\d|=| |-{0,2}|>|<|{|}|\[|\]|\(|\)|"|'|\/|=|\.|:)+)==/g,
    replace/*ment*/: "<mark>$1</mark>"
  },
  {
    // name: "Insert",
    pattern: /\+{2}((\w|\d|=| |-{0,2}|>|<|{|}|\[|\]|\(|\)|"|'|\/|=|\.|:)+)\+{2}<br>/,
    replace/*ment*/: "<ins>$1</ins><br>"
  },
  {
    // name: "Code block",
    pattern: /`{3}(\w| ){0,}<br>(.*?)`{3}/g,
    replace/*ment*/: "<pre class='code-block'><code>$2</code></pre>"
  },
  {
    // name: "Inline code",
    pattern: /`(.*?)`/g,
    replace/*ment*/: "<span class='code-inline'>$1</span>"
  },
  {
    // name: "Copyright",
    pattern: /\((c|C)\)/g,
    replace/*ment*/: "©"
  },
  {
    // name: "R thing",
    pattern: /\((r|R)\)/g,
    replace/*ment*/: "®"
  },
  {
    // name: "Trademark",
    pattern: /\((tm|TM)\)/g,
    replace/*ment*/: "™"
  },
  {
    // name: "Paragraph",
    pattern: /\((p|P)\)/g,
    replace/*ment*/: "§"
  },
  {
    // name: "Plus minus",
    pattern: /\+-/g,
    replace/*ment*/: "±"
  },
  {
    // name: "---",
    pattern: /---/g,
    replace/*ment*/: "—"
  },
  {
    // name: "--",
    pattern: /--/g,
    replace/*ment*/: "–"
  },
  {
    // name: ",",
    pattern: /,,/g,
    replace/*ment*/: ","
  },
  {
    // name: "???",
    pattern: /\?{3,}/g,
    replace/*ment*/: "???"
  },
  {
    // name: "!!!",
    pattern: /!{3,}/g,
    replace/*ment*/: "!!!"
  },
  {
    // name: "?..",
    pattern: /\?\.{3,}/g,
    replace/*ment*/: "?.."
  },
  {
    // name: "!..",
    pattern: /\!\.{3,}/g,
    replace/*ment*/: "!.."
  },
  {
    // name: "...",
    pattern: /\.{2,}/g,
    replace/*ment*/: "…"
  },
  {
    // name: "Autoconvert link",
    pattern: /(https?:\/\/(\w|\d|\.|-|\/|#|\?|=|&)+) /g,
    replace/*ment*/: "<a href='$1'>$1</a> "
  },
  {
    // name: "Autoconvert link with linebreak",
    pattern: /(https?:\/\/(\w|\d|\.|-|\/|#|\?|=|&)+)<br>/g,
    replace/*ment*/: "<a href='$1'>$1</a><br>"
  }
];

const $editor = document.getElementById("edit"),
  $result = document.getElementById("result");
//* const $scroll = document.getElementsByClassName("scroll")[0];

//* function updateLineCount() {
//*   let lineString = "1<br>",
//*     lineCount = $editor.innerText.split(/\n{1}/g);
//*   for (let i = 2; i < lineCount.length; i++) {
//*     const element = lineCount[i];
//*     lineString += i + "<br>";
//*   }
//*   document.getElementById("lines").innerHTML = lineString;
//* }

function renderMarkdownPreview() {
  let text = $editor.innerText;

  console.log(text);

  for (let i = 0; i < rules.length; i++) {
    const rule = rules[i];
    text = text.replace(rule.pattern, rule.replace/*ment*/);
  }

  $result.innerHTML = text;

  // console.log(text);
}

$editor.addEventListener("keyup", event => {
  renderMarkdownPreview();
  //* updateLineCount();
});

//* updateLineCount();
renderMarkdownPreview();

//* NOT NEED
//* $scroll.onscroll = function(event) {
//*   $result.scrollTop =
//*     $result.scrollHeight /
//*     (event.srcElement.scrollHeight / event.srcElement.scrollTop);
//* };
