export class Todo {
  constructor(inputValue) {
    (this.inputValue = inputValue), this.allFunctions();
  }

  allFunctions() {
    this.createList();
    this.removeClick();
    this.editClick();
    this.saveClick();
  }

  createList() {
    let div = `
        <div class="list__div">
          <div><input class="todo__input" value = "${this.inputValue}" disabled></div>
          <div><img class="edit__icon" src="./images/check.png"></div>
          <div><img class="save__icon" src="./images/save.png" style="display:none"></div>
          <div><img class="remove__icon" src="./images/recycle-bin.png"></div>
        </div>
        `;
    document.querySelector(".container__list").innerHTML += div;
  }

  removeClick() {
    let removeIcon = document.querySelectorAll(".remove__icon");
    for (let i = 0; i < removeIcon.length; i++) {
      removeIcon[i].addEventListener(
        "click",
        function () {
          this.parentNode.parentNode.remove();
        },
        false
      );
    }
  }

  editClick() {
    let editIcon = document.querySelectorAll(".edit__icon");
    for (let i = 0; i < editIcon.length; i++) {
      editIcon[i].addEventListener(
        "click",
        function () {
          let child = this.parentNode.parentNode;
          let parent = child.parentNode;
          let index = Array.prototype.indexOf.call(parent.children, child);
          console.log(index);
          document.querySelectorAll(".todo__input")[index].disabled = false;
          document
            .querySelectorAll(".edit__icon")
            [index].classList.remove("show");
          document.querySelectorAll(".edit__icon")[index].classList.add("hide");
          document
            .querySelectorAll(".save__icon")
            [index].classList.remove("hide");
          document.querySelectorAll(".save__icon")[index].classList.add("show");
        },
        false
      );
    }
  }

  saveClick() {
    let editIcon = document.querySelectorAll(".save__icon");
    for (let i = 0; i < editIcon.length; i++) {
      editIcon[i].addEventListener(
        "click",
        function () {
          let child = this.parentNode.parentNode;
          let parent = child.parentNode;
          let index = Array.prototype.indexOf.call(parent.children, child);
          console.log(index);
          document.querySelectorAll(".todo__input")[index].disabled = true;
          document
            .querySelectorAll(".edit__icon")
            [index].classList.remove("hide");
          document.querySelectorAll(".edit__icon")[index].classList.add("show");
          document
            .querySelectorAll(".save__icon")
            [index].classList.remove("show");
          document.querySelectorAll(".save__icon")[index].classList.add("hide");
        },
        false
      );
    }
  }
}
