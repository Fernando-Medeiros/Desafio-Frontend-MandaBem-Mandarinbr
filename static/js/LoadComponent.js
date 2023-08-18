export async function LoadComponent(sectionName, component) {
  const section = document.getElementById(sectionName);

  const request = new XMLHttpRequest();

  request.onreadystatechange = () => (section.innerHTML = request.response);
  request.open("GET", component, true);
  request.send();
}
