import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  const div = document.createElement("div");
  div.className = "list-row";
  const li = document.createElement("li");
  li.innerText = inputText;
  document.getElementById("incomplete-list").appendChild(div);
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
