(function() {
  "use strict";

  const validate = {
    userSelection: [],
    instruction: "",
    userSelectionIds: []
  };

  const baseURL = "https://captchabackend.herokuapp.com";

  window.addEventListener(
    "DOMContentLoaded",
    function() {
      fetch(`${baseURL}/load`)
        .then(res => {
          if (res.ok) return res.json();
        })
        .then(data => {
          let instruction = document.querySelector(".instruction");
          let doc_container = document.querySelector(".grid-container");
          instruction.textContent = data.instruction;

          let dataIndex = 0;

          for (let i = 0; i < 4; i++) {
            let div_outer = document.createElement("div");
            div_outer.setAttribute("class", "grid-row-container");
            for (let j = 0; j < 4; j++) {
              let div_inner = document.createElement("div");
              div_inner.setAttribute("class", "color-box");
              div_inner.setAttribute("id", dataIndex);
              let img = document.createElement("img");
              img.setAttribute("src", data.images[dataIndex]);
              div_inner.appendChild(img);
              div_outer.appendChild(div_inner);
              dataIndex++;
            }
            doc_container.appendChild(div_outer);
          }

          validate.instruction = data.instruction;

          const dragster = new window.Dragster({
            elementSelector: ".color-box",
            regionSelector: ".grid-container",
            replaceElements: true,
            onAfterDragEnd: afterDrag
          });
        });
    },
    true
  );

  const btnSubmit = document.querySelector("#submit-captcha");
  btnSubmit.addEventListener("click", e => {
    e.preventDefault();
    validateData();
  });

  function afterDrag(e) {
    for (let elem of ["drop", "drag"]) {
      validate.userSelection.push(
        e.dragster[elem].node.lastElementChild.lastChild.currentSrc.replace(
          '"',
          ""
        )
      );
      validate.userSelectionIds.push(e.dragster[elem].node.lastChild.id);
    }
  }

  function validateData() {
    fetch(`${baseURL}/validate`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      redirect: "follow",
      referrer: "no-referrer",
      body: JSON.stringify(validate)
    })
      .then(res => {
        if (res.ok) return res.json();
      })
      .then(res => {
        validate.userSelection = [];
        validate.userSelectionIds = [];
        console.log(res)
        if(!res.success){
            let message = document.querySelector(".message")
            message.textContent = "Failed !!! Try again"
        } else{
            document.querySelector("#ex2 > a").click()
            let message = document.querySelector(".success-message")
            message.textContent = "Successful"
        }
        
        return res;
      }).catch((err) => {
        console.log(err)
    })
  }
})();
