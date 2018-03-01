function createProject(data) {

  /// Title
  var title = document.createElement("h4");
  title.textContent = data.title;

  var titleDiv = document.createElement("div");
  titleDiv.className = "material-project__heading text-center";
  titleDiv.appendChild(title);

  /// Image
  var image = document.createElement("img");
  image.className = "img-fluid";
  image.src = data.modal.image;
  image.alt = "";

  var imageDiv = document.createElement("div");
  imageDiv.className = "material-project__image";
  imageDiv.appendChild(image);

  /// Body content
  var bodyDiv = document.createElement("div");
  bodyDiv.className = "material-project__body text-center";

  var content_ = document.createElement("p");
  content_.className = "text-muted text-justify";
  content_.textContent = data.content;
  bodyDiv.appendChild(content_);

  if(data.hasOwnProperty("link") && data.link != "") {
    var link = document.createElement("a");
    link.href = data.link;
    link.textContent = "Visit the website";
    bodyDiv.appendChild(link);
  }

  /// Tags
  var footer = document.createElement("div");
  footer.className = "material-project__footer text-center";

  for(var i = 0; i < data.modal.tags.length; ++i) {
    var span = document.createElement("span");
    span.className = "label label-primary material-label material-label_primary main-container__column";
    span.textContent = data.modal.tags[i];
    footer.appendChild(span);
  }

  /// Material
  var material = document.createElement("div");
  material.className = "material-project";
  material.setAttribute("href", "#"+data.modal.id)
  material.setAttribute("data-toggle", "modal");
  material.appendChild(titleDiv);
  material.appendChild(imageDiv);
  material.appendChild(bodyDiv);
  material.appendChild(footer);


  var col = document.createElement("div");
  col.className = "col-md-4 col-sm-6";
  col.appendChild(material);

  return col;

};




function createProjectModal(data) {
  /// Modal body
  var body = document.createElement("div");
  body.className = "modal-body";

  /// title
  var title = document.createElement("h2");
  title.className = "text-uppercase";
  title.textContent = data.title;
  body.appendChild(title);

  /// Introduction
  var introduction = document.createElement("p");
  introduction.className = "item-intro text-muted";
  introduction.textContent = data.introduction;
  body.appendChild(introduction);

  /// Image
  var image = document.createElement("img");
  image.className = "img-fluid d-block mx-auto";
  image.src = data.image;
  image.alt = "";
  body.appendChild(image);

  /// Content
  for(var i = 0; i < data.content.length; ++i) {
    var p = document.createElement("p");
    p.textContent = data.content[i];
    body.appendChild(p);
  }

  /// Tags
  for(var i = 0; i < data.tags.length; ++i) {
    var t = document.createElement("span");
    t.className = "label label-primary material-label material-label_primary main-container__column";
    t.textContent = data.tags[i];
    body.appendChild(t);
  }

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

  return portfolio;

};
