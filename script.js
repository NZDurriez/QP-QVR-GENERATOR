document.addEventListener("DOMContentLoaded", function() {
  // helper functions now called by onclick
  window.showQVR = () => {
    document.getElementById("qvrSection").style.display = "block";
    document.getElementById("qpSection").style.display = "none";
  };
  window.showQP = () => {
    document.getElementById("qvrSection").style.display = "none";
    document.getElementById("qpSection").style.display = "block";
  };

  // Instructions toggles
  const toggleInstr = (btnId, containerId) => {
    document.getElementById(btnId).addEventListener("click", function() {
      const c = document.getElementById(containerId);
      if (c.style.display === "block") {
        c.style.display = "";
        this.textContent = "Show Instructions";
      } else {
        c.style.display = "block";
        this.textContent = "Hide Instructions";
      }
    });
  };
  toggleInstr("toggleInstructionsQVR", "instructionsQVR");
  toggleInstr("toggleInstructionsQP", "instructionsQP");

  // Generate QVR text
  document.getElementById("generateQVR").addEventListener("click", () => {
    const plate = (document.getElementById("plate").value || "Nil").toUpperCase();
    const owner = document.getElementById("owner").value || "Nil";
    const woF = document.getElementById("woF").value || "Nil";
    const rego = document.getElementById("rego").value || "Nil";
    const make = document.getElementById("make").value || "Nil";
    const model = document.getElementById("model").value || "Nil";
    const year = document.getElementById("year").value || "Nil";
    const color = document.getElementById("color").value || "Nil";
    const flags = document.getElementById("flags").value || "Nil";

    const text = `~y~Plate:~b~${plate} ~y~Make:~b~${make} ~y~Model:~b~${model} ~y~Colour:~b~${color} ~y~Year:~b~${year} ~y~Registered Owner:~b~${owner} ~y~WOF:~b~${woF} ~y~REG:~b~${rego} ~y~Flags:~b~${flags}`;
    document.getElementById("outputQVR").innerText = text;
  });

  // Generate QP text
  document.getElementById("generateQP").addEventListener("click", () => {
    const firstName = document.getElementById("firstName").value || "Nil";
    const lastName  = document.getElementById("lastName").value || "Nil";
    const age       = document.getElementById("age").value || "Nil";
    const address   = document.getElementById("address").value || "Nil";
    const occupation= document.getElementById("occupation").value || "Nil";
    let license    = "Nil";
    document.querySelectorAll('input[name="license"]:checked')
      .forEach(c => license = c.value);
    const otherLic = Array.from(
      document.querySelectorAll('input[name="otherLicenses"]:checked')
    ).map(c=>c.value).join(", ") || "Nil";
    const flags    = document.getElementById("qpFlags").value || "Nil";

    const text = `~y~First Name:~b~${firstName} ~y~Last Name:~b~${lastName} ~y~Age:~b~${age} ~y~Address:~b~${address} ~y~Occupation:~b~${occupation} ~y~Licenses:~b~${[license, otherLic].filter(v=>v!=="Nil").join(", ")||"Nil"} ~y~Flags:~b~${flags}`;
    document.getElementById("outputQP").innerText = text;
  });

  // click‐to‐select output blocks
  ["outputQVR", "outputQP"].forEach(id => {
    document.getElementById(id).addEventListener("click", function() {
      const range = document.createRange();
      range.selectNodeContents(this);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    });
  });
});
