async function fetchData() {
  const response = await fetch('13WQ-V-rndSNXCPH0wp-DUChkTchbWxQvB0BDgU0AU-D4WdOsj3OyBEl9');
  const data = await response.json();

  // قم بتطبيق البيانات على الجدول أو العنصر المناسب في موقعك
  console.log(data);
}

fetchData();
