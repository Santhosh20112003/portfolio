export function extractContent(s, space) {
  var span = document.createElement("span");
  span.innerHTML = s;
  var preElements = span.querySelectorAll("pre");
  preElements.forEach((preElement) => {
    preElement.textContent = "";
  });

  if (space) {
    var children = span.querySelectorAll("*");
    for (var i = 0; i < children.length; i++) {
      if (children[i].textContent) children[i].textContent += " ";
      else children[i].innerText += " ";
    }
  }

  return [span.textContent || span.innerText].toString().replace(/ +/g, " ");
}

export function getMonthFromDate(dateString) {
  const date = new Date(dateString);
  const monthIndex = date.getMonth();

  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  const monthText = months[monthIndex];
  return monthText;
}

export function getDate(dateString) {
  const date = new Date(dateString);
  const month = date.getDate();
  return month;
}
