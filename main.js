// نتأكد إننا في صفحة m.html
if (window.location.pathname.includes("Homepage.html")) {

  var name = window.prompt("اكتبي اسمك");

  if (name) {
    name = name.trim();
    window.alert("أهلا بك يا " + name + " في مشروع مصر الرقمية");
  }

}