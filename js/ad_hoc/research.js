function createModal(data) {

  /// Modal body
  var body = document.createElement("div");
  body.className = "modal-body";

  /// Date
  var date = document.createElement("p");
  date.textContent = data.date;
  body.appendChild(date);

  /// Button
  var cross = document.createElement("i");
  cross.textContent = " ";
  cross.className = "fa fa-times";

  var but = document.createElement("button");
  but.className = "btn btn-primary";
  but.setAttribute("data-dismiss", "modal");
  but.setAttribute("type", "button");
  but.appendChild(cross);
  but.textContent = " Close Project";
  but.insertAdjacentElement('afterbegin', cross)
  body.appendChild(but);


  /// ONE : Div's and containers
  var col = document.createElement("div");
  col.className = "col-lg-8 mx-auto";
  col.appendChild(body);

  var row = document.createElement("div");
  row.className = "row";
  row.appendChild(col);

  var container = document.createElement("div");
  container.className = "container";
  container.appendChild(row);


  /// TWO : Div's and containers
  var rl = document.createElement("div");
  rl.className = "rl";

  var lr = document.createElement("div");
  lr.className = "lr";
  lr.appendChild(rl);

  var closing = document.createElement("div");
  closing.className = "close-modal";
  closing.setAttribute("data-dismiss", "modal");
  closing.appendChild(lr);


  /// THREE : Div's and containers
  var content = document.createElement("div");
  content.className = "modal-content";
  content.appendChild(closing);
  content.appendChild(container);

  var dialog = document.createElement("div");
  dialog.className = "modal-dialog";
  dialog.appendChild(content);


  var portfolio = document.createElement("div");
  portfolio.className = "portfolio-modal modal fade";
  portfolio.setAttribute("id", data.id);
  portfolio.setAttribute("tabindex", "-1");
  portfolio.setAttribute("role", "dialog");
  portfolio.setAttribute("aria-hidden", "true");
  portfolio.appendChild(dialog);

  var researchModals = document.getElementById("researchModals");
  researchModals.appendChild(portfolio)


  var footer = document.createElement("footer");
  footer.className = "material-card__footer"
  footer.textContent = "Show more";
  footer.style.cursor = "pointer";
  footer.setAttribute("href", "#"+data.id)
  footer.setAttribute("data-toggle", "modal");

  return footer;
}

function createTags(tags) {
  var div = document.createElement("div");

  for(var i = 0; i < tags.length; ++i) {
    var tag = document.createElement("span");
    tag.className = "label label-primary material-label material-label_primary main-container__column";
    tag.textContent = tags[i];
    div.appendChild(tag);
  }

  return div;
}

function createCard(card, k, i) {

  /// Create header
  var title = document.createElement("h5");
  title.className = "mb-0";
  title.textContent = card['title'];

  var header = document.createElement("div");
  header.className = "card-header";
  header.setAttribute("id", card["id"]);
  header.setAttribute("data-toggle", "collapse");
  header.setAttribute("data-target", "#collapse_"+card['id']);
  header.setAttribute("aria-expanded", (i == 0 ? 'true' : 'false'));
  header.setAttribute("aria-controls", "collapse_"+card['id']);
  header.appendChild(title);

  /// Create collapsing partlabel label-primary material-label material-label_primary main-container__column.

  var html = document.createElement("div");
  html.className = "class-body";

  var collapse = document.createElement("div");
  collapse.className = "collapse" + (i == 0 ? ' show': '');
  collapse.setAttribute("id", "collapse_"+card['id']);
  collapse.setAttribute("aria-labelledby", card['id']);
  collapse.setAttribute("data-parent", "#accordion_"+k);
  collapse.appendChild(html);

  var card_div = document.createElement("div");
  card_div.className = "card";
  card_div.appendChild(header);
  card_div.appendChild(collapse);



  if(card.hasOwnProperty("html")) {
    html.innerHTML = card['html'];
  }
  if(card.hasOwnProperty("pdf")) {
    var pdf = document.createElement("a");
    pdf.href = 'download/'+card['pdf'];
    pdf.textContent = "Download pdf version";
    collapse.appendChild(pdf);
  }

  if(card.hasOwnProperty("tags")) {
    var tags = createTags(card['tags']);
    collapse.appendChild(tags);
  }

  if(card.hasOwnProperty("modal")) {
    var modal = createModal(card["modal"]);
    collapse.appendChild(modal);
  }

  return card_div;
}

function createAccordeon(data, k) {
  var div = document.createElement("div");
  div.setAttribute('id', 'accordion_'+k);
  for(var i = 0; i < data[1].length; ++i) {
    var card = createCard(data[1][i], k, i);
    div.appendChild(card);
  }


  var title = document.createElement("h4")
  title.textContent = data[0];

  var col = document.createElement("div");
  col.className = "col-sm-4 text-center"
  col.appendChild(title);
  col.appendChild(div);

  return col
}
